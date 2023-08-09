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

    public nameForm: UntypedFormGroup;
    selectedAccountHeadID: any
    gridApi: any;
    gridApiSelectAc: any;
    agGridOptions: any = {
        suppressRowHoverHighlight: true,
    }

    constructor(private formBuilder: UntypedFormBuilder, public dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService, public dialogRef: MatDialogRef<AddAccountHeadComponent>) { 
        this.selectedAccountHeadID = data.branchID;
    }

    bindFormControls() {
        this.nameForm = this.formBuilder.group({
          'name': ['', Validators.required],
          //'id': [this.selectedAccountHeadID, Validators.required]
        });
    }

    ngOnInit() {
      this.bindFormControls();
    }
    
    onGridReady(event) { this.gridApi = event.api; }

    onGridReadySelectAc(event) { this.gridApiSelectAc = event.api; }


    public onSubmit(values: Object): void {
        this.nameForm.controls['name'].setValue(String(this.nameForm.get('name').value));
        var body = this.nameForm.value;
        if (this.nameForm.valid) {
          this._masterService.saveAccountHead(body).subscribe(result => {
            this.dialogRef.close();
          }, err => {
            console.log(err);
          });
        }
    }

    close(): void {
        this.dialogRef.close();
    }
}