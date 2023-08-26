import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../../master.service';
import { forkJoin, map } from 'rxjs';
import { DatePipe, formatDate } from '@angular/common';
import { MasterSecondService } from '../../master-second.service';

@Component({
  selector: 'app-add-sharing-setup',
  templateUrl: './add-sharing-setup.component.html',
  styleUrls: ['./add-sharing-setup.component.scss']
})
export class AddSharingSetupComponent implements OnInit {

  public itemForm: UntypedFormGroup;
  exchangeList: any;
  selectedId: any;
  instrumentList: any;
  itemList: any;
  applyOnQtyList: any;
  applyOnList: any;
  salbId: any;
  accountList: any;
  parentData: any;
  isEditMode: any;


  constructor(private datePipe: DatePipe, private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddSharingSetupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService, private _masterSecondService: MasterSecondService) {
   this.salbId = data.slabId;
   this.parentData = data;
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
     'applyOn': ['', Validators.required],
     'shareValue': ['', Validators.required],
     'id':[0],
    });
   this.initialApiCalls();
}

initialApiCalls() {
  forkJoin([this._appService.getSharingApplyOnDDL(),
  ]).pipe(map(response => {
    this.applyOnList = response[0];
  })).subscribe(res => {
    
  });
}

  ngOnInit(): void {
    this.bindFormControls();
    this.isEditMode = this.parentData.isEditMode;
    if(this.parentData.isEditMode === 2 && this.parentData.editParms){
      this.getSelectedSlabDetailsInfo(this.parentData.editParms);
    }
  }

  getSelectedSlabDetailsInfo(editParms) {
      this.itemForm.patchValue({
        applyOn: editParms.applyOn,
        shareValue: editParms.shareValue,
      });
  }

  close(): void {
    this.dialogRef.close();
  }

  public onSubmit(values: object) {
    console.log(values);
    var body = this.itemForm.value;
    console.log(body);
    body.slabId = this.salbId;
    body.id = this.parentData.isEditMode;
    body.branchId = this.parentData.branchIds;
    body.accounts = this.parentData.accountIds.filter((val)=> val != -1);;
    
    body.fromDate = this.datePipe.transform(this.parentData.fromDt, 'yyyy-MM-dd');
    body.toDate = this.datePipe.transform(this.parentData.toDt, 'yyyy-MM-dd');
    body.exchanges = this.parentData.exchangeIds;
    body.higherSideOnly= false;

    if (this.itemForm.valid) {
      //const body = JSON.stringify(addFormData);
      if(this.parentData.isEditMode === 2){
        body.id = this.parentData.editParms.id;
        this._masterSecondService.updateSingleSharing(body).subscribe(result => {
          this.dialogRef.close();
        });
      } else {
        this._masterSecondService.saveSharing(body).subscribe(result => {
          console.log("result", result);
          this.dialogRef.close();
        });
      }
    }
  }

}
