import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MasterService } from "../../Master/master.service";
import { forkJoin } from "rxjs";

@Component({
    selector: 'invite-user-dialog',
    templateUrl: './invite-user.component.html',
    styleUrls: ['./invite-user.component.scss']
})
export class InviteUserComponent implements OnInit {
    public inviteUserForm: UntypedFormGroup;
    public passwordHide:boolean = true;
    public confirmPasswordHide:boolean = true;
    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<InviteUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
       
    }

    bindFormControls() {
        this.inviteUserForm = this.formBuilder.group({         
          'FirstName': ['', Validators.required],
          'LastName': ['', Validators.required],
          'userName': ['', Validators.required],
          'email': ['', Validators.required],
          'Password': ['', Validators.required],
          'ConfirmPassword': ['', Validators.required],
          'isActive': [''],
          'id': []
        }, {
          validator: this.passwordMatchValidator // Add custom validator here
        });
    }

    passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
      const password = formGroup.get('Password')?.value;
      const confirmPassword = formGroup.get('ConfirmPassword')?.value;
  
      if (password !== confirmPassword) {
        return { 'passwordMismatch': true };
      }
      return null;
    }

    public onSubmit(values: Object): void {    
        this.inviteUserForm.controls['FirstName'].setValue(String(this.inviteUserForm.get('FirstName').value));
        this.inviteUserForm.controls['LastName'].setValue(String(this.inviteUserForm.get('LastName').value));
        this.inviteUserForm.controls['userName'].setValue(String(this.inviteUserForm.get('userName').value));
        this.inviteUserForm.controls['email'].setValue(String(this.inviteUserForm.get('email').value));
        this.inviteUserForm.controls['Password'].setValue(String(this.inviteUserForm.get('Password').value));
        this.inviteUserForm.controls['ConfirmPassword'].setValue(String(this.inviteUserForm.get('ConfirmPassword').value));
        this.inviteUserForm.controls['isActive'].setValue(Boolean(this.inviteUserForm.get('isActive').value));
        var body = this.inviteUserForm.value;
    
        if (this.inviteUserForm.valid) {
          //const body = JSON.stringify(addFormData);
          this._appService.createUser(body).subscribe(result => {
            this.dialogRef.close();
          }, err => {
            console.log(err);
          });
        }
    }

    ngOnInit() {
        this.bindFormControls();
    }

    close(): void {
        this.dialogRef.close();
    }
}