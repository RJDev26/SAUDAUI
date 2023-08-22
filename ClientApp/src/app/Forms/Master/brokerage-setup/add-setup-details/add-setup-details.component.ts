import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../../master.service';
import { forkJoin, map } from 'rxjs';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-add-setup-details',
  templateUrl: './add-setup-details.component.html',
  styleUrls: ['./add-setup-details.component.scss']
})
export class AddSetupDetailsComponent implements OnInit {

  public itemForm: UntypedFormGroup;
  exchangeList: any;
  selectedId: any;
  instrumentList: any;
  itemList: any;
  applyOnQtyList: any;
  applyOnList: any;
  salbId: any;
  selectedSlabDetailsId: any;
  accountList: any;
  parentData: any;


  constructor(private datePipe: DatePipe, private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddSetupDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
   this.salbId = data.slabId;
   this.selectedSlabDetailsId = data.selectedSlabId;
   this.parentData = data;
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
     'applyOn': ['', Validators.required],
     'applyOnQty': ['', Validators.required],
     'deliveryBrokRate': ['', Validators.required],
     'intradayBrokRate': ['', Validators.required],
     'intradaySingleSideonly': [false],
     'id':[0],
    });
   this.initialApiCalls();
}

initialApiCalls() {
  forkJoin([this._appService.getExchangeName(), this._appService.getInstrumentList(), this._appService.getItemListDrp(),
    this._appService.getApplyOnQtyDDL(),
    this._appService.getApplyOnDDL(),
    this._appService.getAccount(),
  ]).pipe(map(response => {
    this.exchangeList = response[0];
    this.instrumentList = response[1];
    this.itemList = response[2]
    this.applyOnQtyList = response[3]
    this.applyOnList = response[4];
    this.accountList = response[5];
  })).subscribe(res => {
    
  });
}

  ngOnInit(): void {
    this.bindFormControls();
    if(this.selectedSlabDetailsId){
      this.getSelectedSlabDetailsInfo();
    }
  }

  getSelectedSlabDetailsInfo() {
    this._appService.getBrokerageSetupId(this.selectedSlabDetailsId).subscribe((res) => {
      const fromDate = new Date(res.fromDT);
      const toDate = new Date(res.toDT);
      const formattedFromDate = formatDate(fromDate, 'yyyy-MM-dd', 'en-US');
      const formattedToDate = formatDate(toDate, 'yyyy-MM-dd', 'en-US');
      this.itemForm.patchValue({
        applyOn: res.applyOn,
        applyOnQty: res.applyOnQty,
        deliveryBrokRate: res.deliveryBrokRate,
        intradayBrokRate: res.intradayBrokRate,
        rateRange1: res.rateRange1,
        rateRange2: res.rateRange2,
        intradaySingleSideonly: res.intradaySingleSideonly
      });
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
    if(this.selectedSlabDetailsId){
      body.id = this.selectedSlabDetailsId;
    }

    body.accounts = this.parentData.accountIds.filter((val)=> val != -1);;
    
    body.fromDate = this.datePipe.transform(this.parentData.fromDt, 'yyyy-MM-dd');
    body.toDate = this.datePipe.transform(this.parentData.toDt, 'yyyy-MM-dd');
    body.instrumentType = this.parentData.instrumentType;
    body.itemGroupId = this.parentData.itemGroupIds;
    body.higherSideOnly= false;

    if (this.itemForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._appService.saveBrokerageSetup(body).subscribe(result => {
        console.log("result", result);
        this.dialogRef.close();
      });
    }
  }

}
