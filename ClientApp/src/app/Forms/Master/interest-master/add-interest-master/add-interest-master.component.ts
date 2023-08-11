import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { MasterService } from '../../master.service';
import { forkJoin, map } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
import { MasterSecondService } from '../../master-second.service';

@Component({
  selector: 'app-add-interest-master',
  templateUrl: './add-interest-master.component.html',
  styleUrls: ['./add-interest-master.component.scss']
})
export class AddInterestMasterComponent implements OnInit {

  public itemForm: UntypedFormGroup;
  exchangeList: any;
  selectedId: any;
  accountList: any[];
  typeList: any[];
  applyOnList: any[];
  filteredAccountList: any[] = [];
  postVoucherList: any[];
  filterPostVoucherList: any[];
  filterTypeList: any[];
  filterApplyOnList: any[];

  constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddInterestMasterComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService, private _masterSeconedService: MasterSecondService, private _appService: AppService) {
   
    this.selectedId = data.id;
    if (data.id == null) { this.selectedId = 0; }
   
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
      'accountId': ['', Validators.required],
      'type': ['', Validators.required],
      'applyOn': ['', Validators.required],
      'postVouchers': ['', Validators.required],
      'intRate': ['', Validators.required],
      'yearDays': ['', Validators.required],
      'fromDt': ['', Validators.required],
      'toDt': ['', Validators.required],
      'id': ['0']
    });
   this.initialApiCalls();
}


  initialApiCalls() {
    forkJoin([this._appService.getIntrestApplyOnDDL(), this._masterService.getAccount(), this._appService.getIntrestTypeDLL(), this._appService.getPostVoucherDLL()]).pipe(map(response => {
      this.applyOnList = response[0];
      this.filterApplyOnList = response[0];
      this.filteredAccountList = response[1];
      this.accountList = response[1];
      this.typeList = response[2];
      this.filterTypeList = response[2];
      this.postVoucherList = response[3];
      this.filterPostVoucherList = response[3];
    })).subscribe(res => {
    
    });
  }


  getItemInfo()
  {
    this._masterSeconedService.getInterestId(this.selectedId).subscribe((res) => {
      this.itemForm.get('accountId').setValue(res.accountId);
      this.itemForm.get('type').setValue(res.type);
      this.itemForm.get('applyOn').setValue(res.applyOn);
      this.itemForm.get('postVouchers').setValue(res.postVouchers);
      this.itemForm.get('intRate').setValue(res.intRate);

      this.itemForm.get('yearDays').setValue(res.yearDays);
      this.itemForm.get('fromDt').setValue(res.fromDt);
      this.itemForm.get('toDt').setValue(res.toDt);
      this.itemForm.get('id').setValue(res.id);

      
    });

  }

  /* to filter select account dropdown*/
  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredAccountList = this.accountList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === '') {
      this.filteredAccountList = [...this.accountList];
    }
  }

  /* to filter select account dropdown*/
  onInputTypeChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filterTypeList = this.typeList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === '') {
      this.filterTypeList = [...this.typeList];
    }
  }

  onInputApplyOnChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filterApplyOnList = this.applyOnList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === '') {
      this.filterApplyOnList = [...this.applyOnList];
    }
  }

  onInputVoucherChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filterPostVoucherList = this.postVoucherList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === '') {
      this.filterPostVoucherList = [...this.postVoucherList];
    }
  }

  public onSubmit(values: Object): void {
    var body = this.itemForm.value;

    if (this.itemForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._masterSeconedService.saveInterest(body).subscribe(result => {
        console.log("result", result);
        this.dialogRef.close();
      }, err => {
        console.log(err);
      });
    }
  }

  ngOnInit() {
    this.bindFormControls();
    if (this.selectedId != 0) {
      this.getItemInfo();
    }
    else
    {
      this.itemForm.get('id').setValue(0);
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}