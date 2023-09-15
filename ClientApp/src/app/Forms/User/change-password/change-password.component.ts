import { Component, Inject, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MasterService } from "../../Master/master.service";
import { AppService } from "src/app/service/app.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})

export class changePasswordComponent implements OnInit {
    public changePasswordForm: UntypedFormGroup;
    userId: any;
    constructor(private formBuilder: UntypedFormBuilder, public snackBar: MatSnackBar, public dialogRef: MatDialogRef<changePasswordComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: AppService) {
        console.log(this.data);
        this.userId = this.data.id;
    }

    bindFormControls() {
        this.changePasswordForm = this.formBuilder.group({         
          'CurrentPassword': ['', Validators.required],
          'NewPassword': ['', Validators.required],
          'ConfirmPassword': ['', Validators.required],
          'id': []
        }, {
            validator: this.passwordMatchValidator // Add custom validator here
          });
    }

    passwordMatchValidator(formGroup: UntypedFormGroup): { [key: string]: boolean } | null {
        const newPassword = formGroup.get('NewPassword')?.value;
        const confirmPassword = formGroup.get('ConfirmPassword')?.value;
    
        if (newPassword !== confirmPassword) {
          return { 'passwordMismatch': true };
        }
        return null;
      }

    public onSubmit(values: Object): void {    
        if(this.changePasswordForm.valid){
            const req = {
                "id": this.userId,
                "currentPassword": this.changePasswordForm.get('CurrentPassword')?.value,
                "newPassword": this.changePasswordForm.get('NewPassword')?.value,
              }

            this._appService.changePassword(req).subscribe(res=>{
                this.showToaster(res.message, !res.isSuccess);
                if(res.isSuccess){
                    this.dialogRef.close();
                }
            });
        }
    }

    showToaster(message, isError = false) {
        const panelClass = isError ? ['red-text'] : undefined;
        const label = isError ? "Error" : "Success";
        const time = isError? 6000 : 3000;
      
        this.snackBar.open(message, label, {
          duration: time,
          panelClass: panelClass,
        });
      }

    close() {
        this.dialogRef.close();
    }


    ngOnInit() {
       this.bindFormControls(); 
    }
}