import { Component, Inject, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
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

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<InviteUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
       
    }

    bindFormControls() {
        this.inviteUserForm = this.formBuilder.group({         
          'name': ['', Validators.required],
          'email': ['', Validators.required],
          'id': []
        });
    }

    ngOnInit() {
        
    }

    close(): void {
        this.dialogRef.close();
    }
}