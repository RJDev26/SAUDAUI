import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../../master.service';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-add-slab-details',
  templateUrl: './add-slab-details.component.html',
  styleUrls: ['./add-slab-details.component.scss']
})
export class AddSlabDetailsComponent implements OnInit {

  public itemForm: UntypedFormGroup;
  exchangeList: any;
  selectedId: any;
  instrumentList: any;
  itemList: any;
  applyOnQtyList: any;
  applyOnList: any;
  salbId: any;
  selectedSlabDetailsId: any;

  constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddSlabDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
   this.salbId = data.slabId;
   this.selectedSlabDetailsId = data.selectedSlabId;
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
     'exchangeId': ['', Validators.required],
     'applyOn': ['', Validators.required],
     'applyOnQty': ['', Validators.required],
     'itemId': ['', Validators.required],
     'instrumentType': ['', Validators.required],
     'deliveryBrokRate': ['', Validators.required],
     'intradayBrokRate': ['', Validators.required],
     'rateRange1': ['', Validators.required],
     'rateRange2': ['', Validators.required],
     'intradaySingleSideonly': [false],
    });
   this.initialApiCalls();
}

initialApiCalls() {
  forkJoin([this._appService.getExchangeName(), this._appService.getInstrumentList(), this._appService.getItemListDrp(),
    this._appService.getApplyOnQtyDDL(),
    this._appService.getApplyOnDDL()
  ]).pipe(map(response => {
    this.exchangeList = response[0];
    this.instrumentList = response[1];
    this.itemList = response[2]
    this.applyOnQtyList = response[3]
    this.applyOnList = response[4]
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
    this._appService.getBrokerageSlabId(this.selectedSlabDetailsId).subscribe((res) => {
      this.itemForm.patchValue({
        exchangeId: res.exchangeId,
        applyOn: res.applyOn,
        applyOnQty: res.applyOnQty,
        itemId: res.itemId,
        instrumentType: res.instrumentType,
        deliveryBrokRate: res.deliveryBrokRate,
        intradayBrokRate: res.intradayBrokRate,
        rateRange1: res.rateRange1,
        rateRange2: res.rateRange2,
        intradaySingleSideonly: res.intradaySingleSideonly
      });
    });
  }

  public onSubmit(values: object) {
    console.log(values);
    var body = this.itemForm.value;
    console.log(body);
    body.slabId = this.salbId;
    if(this.selectedSlabDetailsId){
      body.id = this.selectedSlabDetailsId;
    }
    if (this.itemForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._appService.saveBrokerageSlab(body).subscribe(result => {
        console.log("result", result);
        this.dialogRef.close();
      });
    }
  }

}
