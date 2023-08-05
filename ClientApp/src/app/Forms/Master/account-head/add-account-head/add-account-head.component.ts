import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../../master.service';

@Component({
    selector: 'app-add-account-head',
    templateUrl: './add-account-head.component.html',
    styleUrls: ['./add-account-head.component.scss']
})

export class AddAccountHeadComponent implements OnInit {

    public accountForm: UntypedFormGroup;
    selectedAccountHeadID: any
    agGridOptions: any = {
        suppressRowHoverHighlight: true,
    }

    constructor(private formBuilder: UntypedFormBuilder, public dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService, public dialogRef: MatDialogRef<AddAccountHeadComponent>) { 
        this.selectedAccountHeadID = data.branchID;
    }

    bindFormControls() {
        this.accountForm = this.formBuilder.group({
          'account': ['', Validators.required]
        });
    }

    ngOnInit() {
        this.bindFormControls();
    }
}