import { Component, Inject, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MasterService } from "../../Master/master.service";

@Component({
    selector: 'change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})

export class changePasswordComponent implements OnInit {
    public changePasswordForm: UntypedFormGroup;

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<changePasswordComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
       
    }

    bindFormControls() {
        this.changePasswordForm = this.formBuilder.group({         
          'CurrentPassword': ['', Validators.required],
          'NewPassword': ['', Validators.required],
          'id': []
        });
    }

    public onSubmit(values: Object): void {    
        
    }

    close() {
        this.dialogRef.close();
    }


    ngOnInit() {
        
    }
}