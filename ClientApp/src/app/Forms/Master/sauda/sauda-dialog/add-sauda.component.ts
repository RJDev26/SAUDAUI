import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { forkJoin, map } from 'rxjs';
import { ACGroup } from '../../account/account-dialog/add-account.component';
import { MasterService } from "../../master.service";
import { Sauda } from '../sauda.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sauda-dialog',
  templateUrl: './add-sauda.component.html',
  styleUrls: ['./add-sauda.component.scss']
})

export class AddSaudaComponent implements OnInit {
  public saudaForm: UntypedFormGroup;
  instrumentList: ACGroup[];
  optionType: any;
  itemList: any;
 selectedId: any;


  constructor(public snackBar: MatSnackBar, private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddSaudaComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
    debugger
    this.selectedId = data.id;
    if (data.id == null) { this.selectedId = 0; }
  }

  bindFormControls() {
    this.saudaForm = this.formBuilder.group({
      'itemId': ['', Validators.required],
      'saudaCode': ['', Validators.required],
      'maturity': ['', Validators.required],
      'instrumentType': ['', Validators.required],
      'optionType': ['', Validators.required],
      'strikePrice': [],
      'firstTradingDate': [],
      'lastTradingDate': [],
      'id': [],
    });
  }

  ngOnInit() {
    this.bindFormControls();
    this.initialApiCalls();
    if (this.selectedId != 0) {
      this.getInfo();
    }
    else {
      this.saudaForm.get('id').setValue(0);
    }
    
  }

  getInfo() {
    this._appService.getSaudaById(this.selectedId).subscribe((res) => {
      debugger
      this.saudaForm.get('itemId').setValue(res.itemId);
      this.saudaForm.get('saudaCode').setValue(res.saudaCode);
      this.saudaForm.get('maturity').setValue(res.maturity);
      this.saudaForm.get('instrumentType').setValue(res.instrumentType);
      this.saudaForm.get('optionType').setValue(res.optionType);
          
      this.saudaForm.get('strikePrice').setValue(res.strikePrice);
      this.saudaForm.get('firstTradingDate').setValue(res.firstTradingDate);
      this.saudaForm.get('lastTradingDate').setValue(res.lastTradingDate);
      this.saudaForm.get('id').setValue(res.id);


    });

  }


  initialApiCalls() {
    forkJoin([this._appService.getInstrumentList(), this._appService.getOptionList(),
    this._appService.getItemListDrp()]).pipe(map(response => {
      debugger
      this.instrumentList = response[0];
      this.optionType = response[1];
      this.itemList = response[2]
    })).subscribe(res => {
     
    });
  }
  onKey(event: any)
  {
    this.itemList = this.search(event);
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.itemList.filter(option => option.toLowerCase().startsWith(filter));
  }
  
  public onSubmit(values: Object): void {

    //if ((this.saudaForm.get('ApplyCtt').value) == null) {
    //  this.saudaForm.controls['ApplyCtt'].setValue(false);
    //}
    //if ((this.saudaForm.get('applyRiskManagementFees').value) == null) {
    //  this.saudaForm.controls['applyRiskManagementFees'].setValue(false);
    //}

    this.saudaForm.controls['strikePrice'].setValue(Number(this.saudaForm.get('strikePrice').value));

    var body = this.saudaForm.value;
    debugger;
    //body.accountGroupId = this.getAcGroupId(this.acGroupCtrl.value);
    //body.accountHeadId = this.getAcHeadId(this.acHeadCtrl.value);
    //body.CityId = this.getCityId(this.cityCtrl.value);

    if (this.saudaForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._appService.saveSauda(body).subscribe(result => {
        if(result.isSuccess){
          console.log("result", result);
          this.dialogRef.close();
        } else {
          this.showToaster(result.message, true);
        }
      }, err => {
        console.log(err);
      });
    }
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError? 600000 : 300000;
  
    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass,
    });
  }

  close(): void {
    this.dialogRef.close();
  }

}
