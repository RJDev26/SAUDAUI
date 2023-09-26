import { formatDate } from '@angular/common';
import { Component, OnInit, Inject, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppService } from '../../../../service/app.service';
import { CommonUtility } from '../../../../shared/common-utility';
import { ConfirmationDialog } from '../../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialog } from '../../../Dialog/confirmation-dialog/error-dialog.component';
import { MasterService } from '../../master.service';
import { Account } from '../account.model';
import { MasterSecondService } from '../../master-second.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent } from '@angular/material/tabs';

export interface State {
  id: number;
  name: string;
}

export interface City {
  id: number;
  name: string;
}

export interface ACGroup {
  id: number;
  name: string;
  parentId: number;
}

export interface ACHead {
  id: number;
  name: string;
}

@Component({
  selector: 'app-account-dialog',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit, AfterViewInit {
  public personalForm: UntypedFormGroup;
  isFileCodeTabActive: boolean = false;
  isInterestTabActive: boolean = false;
  isSelfShareTabActive: boolean = false;
  isBrokerageTabActive: boolean = false;
  public itemForm: UntypedFormGroup;
  public acSelfShareForm: FormGroup;
  brokerageForm: FormGroup;
  subscription: any;
  isAnythingEmitted: boolean = null;
  emittedValue: any;
  acGroupCtrl = new FormControl('');
  filteredacGroup: Observable<ACGroup[]>;

  cityCtrl = new FormControl('');
  filteredCity: Observable<City[]>;

  acHeadCtrl = new FormControl('');
  filteredacHead: Observable<ACHead[]>;

  acGroupList: ACGroup[];
  acHeadList: ACHead[];

  acList: any;
  applyOnFileShare: any[];

  cityList: City[];
  taxList: City[];
  exchangeList: City[];
  instrumentList: any;
  selectedAccountId: number = 0;
  brokerageList: any;
  brokApplyOn: any;
  brokApplyOnQty: any;
  brokInstype: any;
  itemList: any;
  formSubmitted = false;

  accountSelfShareList: any;
  brokerList: any;
  filterBrokerList: any;

  @ViewChildren(MatAutocompleteTrigger) triggerCollection: QueryList<MatAutocompleteTrigger>;

  constructor(private formBuilder: UntypedFormBuilder, private _masterSeconedService: MasterSecondService, public dialogRef:
    MatDialogRef<AddAccountComponent>, @Inject(MAT_DIALOG_DATA) public user: Account,
    private _masterService: MasterService, public dialog: MatDialog, private _appService: AppService, public snackBar: MatSnackBar) {
    this.bindFormControls();
    
    if (this.user == null) { this.selectedAccountId = 0; }
    else {
      this.selectedAccountId = this.user.id;
    }
  }

  ngAfterViewInit() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    for (var trigger of this.triggerCollection.toArray()) {
      this.subscription = trigger.panelClosingActions
        .subscribe(e => {

          if (!e || !e.source) {
            if (this.acGroupCtrl.dirty) {
              this.acGroupCtrl.setValue('');
            }
            if (this.acHeadCtrl.dirty) {
              this.acHeadCtrl.setValue('');
            }
            if (this.cityCtrl.dirty) {
              this.cityCtrl.setValue('');
            }
          }
        });
    }
  }



  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      flex: 1,
      sortable: true,
      wraptext: true,
      resizable: true
    }
  }

  bindFormControls() {
    this.personalForm = this.formBuilder.group({
      'ShortCode': ['', Validators.required],
      'Name': ['', Validators.required],
      'OpeningBal': [],
      'City': [''],
      'Email': ['', Validators.compose([emailValidator])],
      'PanNo': [''],
      'Gstinno': [''],
      'Phone': [''],
      'AcGroup': ['', Validators.required],
      'AcHead': ['', Validators.required],
      'Address': [''],
      'TelegramNo': [''],
      'TelegramId': [''],
      'Id': [0],
      'brokerId': [0],
      'DrCr': ['1', Validators.required],
      'ApplyTax': [false],
      'ApplyFutureCutBrok': [true],
      'ApplyOptionCutBrok': [true],
    });
  }


  handleTabChange(event: MatTabChangeEvent): void {
    if(event.index === 1){
      this.isSelfShareTabActive = true;
    }
    if(event.index === 2){
      this.isBrokerageTabActive = true;
    }
    if (event.index === 3) { // Assuming "FileCode" tab has index 1
      this.isInterestTabActive = true;
    }
    if (event.index === 4) { // Assuming "FileCode" tab has index 1
      this.isFileCodeTabActive = true;
    }
  }

resetForm(myForm) {
  myForm.reset();
  myForm.get('id').setValue(0);
  Object.keys(myForm.controls).forEach(key => {
    myForm.get(key).setErrors(null);
  });
}

/* to filter select account dropdown*/
onInputBrokerChange(event: any) {
  const searchInput = event.target.value.toLowerCase();

  this.filterBrokerList = this.brokerList.filter((data) => {
    const prov = data.name.toLowerCase();
    return prov.includes(searchInput);
  });

  if (searchInput === '') {
    this.filterBrokerList = [...this.brokerList];
  }
}


  bindFilterFntoList() {
    this.filteredCity = this.cityCtrl.valueChanges.pipe(
      startWith(''),
      map(cityObj => {
        return cityObj ? this._filterCity(cityObj) : this.cityList.slice()
      }),
    );

    this.filteredacGroup = this.acGroupCtrl.valueChanges.pipe(
      startWith(''),
      map(acGroupObj => {
        return acGroupObj ? this._filterACGroup(acGroupObj) : this.acGroupList.slice()
      }),
    );

    this.filteredacHead = this.acHeadCtrl.valueChanges.pipe(
      startWith(''),
      map(acHeadObj => {
        return acHeadObj ? this._filterACHead(acHeadObj) : this.acHeadList.slice()
      }),
    );
  }

  initialApiCalls() {
    forkJoin([this._masterService.getAcGoup(), this._masterService.getAcHead(), this._masterService.getCityList(),
    this._masterService.getTaxType(), this._masterService.getAccount(), this._masterService.getApplyOnFileShareDDL(),
     this._masterService.getAccounts()]).pipe(map(response => {
      this.acGroupList = response[0];
      this.acHeadList = response[1];
      this.cityList = response[2];
      
      
      this.acList = response[4];
      this.applyOnFileShare = response[5];
      this.itemList = response[6];
    this.filterBrokerList = response[6];
      this.bindFilterFntoList();
    })).subscribe(res => {
      this.getValuesInEditMode();
    });
  }

  getValuesInEditMode() {

    if (this.user) {
      const acGroup = this.acGroupList.find((obj => obj.id === this.user.accountGroupId));
      const acHead = this.acHeadList.find((obj => obj.id === this.user.accountHeadId));
      const optedCity = this.cityList.find((obj => obj.id === this.user.cityId));
      this.bindValuesInEditMode(acGroup, optedCity, acHead);

      console.log(this.user);
    }
  }

  bindValuesInEditMode(acGroup: ACGroup, optedCity?: City, acHead?: ACHead) {

    this.personalForm.setValue({
      'ShortCode': this.user.shortCode,
      'Name': this.user.name,
      'OpeningBal': CommonUtility.formatNumber(this.user.openingBal),
      'City': optedCity ? optedCity.name : '',
      'Email': this.user.email,
      'PanNo': this.user.panNo,
      'Gstinno': this.user.gstinno,
      'Phone': this.user.phone,
      'AcGroup': acGroup ? acGroup.name : '',
      'AcHead': acHead ? acHead.name : '',
      'Address': this.user.address,
      'TelegramNo': this.user.telegramNo,
      'TelegramId': this.user.telegramId,
      'Id': this.user.id,
      'brokerId': this.user.brokerId,
      'DrCr': this.user.drCr,
      'ApplyTax': this.user.applyTax,
      'ApplyFutureCutBrok': this.user.applyFutureCutBrok,
      'ApplyOptionCutBrok': this.user.applyOptionCutBrok,


    });
    this.acGroupCtrl.setValue(acGroup.name);
    this.acHeadCtrl.setValue(acHead.name);
    this.cityCtrl.setValue(optedCity.name);



  }

  onGroupChange(event) {
    this.personalForm.controls['AcGroup'].setValue(this.acGroupCtrl.value);
  }
  onHeadChange(event) {
    this.personalForm.controls['AcHead'].setValue(this.acHeadCtrl.value);
  }


  ngOnInit() {
    this.initialApiCalls();
  }


  private _filterACGroup(value: string): ACGroup[] {
    const filterValue = value.toLowerCase();
    return this.acGroupList.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  private _filterACHead(value: string): ACHead[] {
    const filterValue = value.toLowerCase();
    return this.acHeadList.filter(state => state.name.toLowerCase().includes(filterValue));
  }



  private _filterCity(value: string): City[] {
    const filterValue = value.toLowerCase();
    return this.cityList.filter(city => city.name.toLowerCase().includes(filterValue));
  }



  private getAcGroupId(name: string) {
    const cityObj = this.acGroupList.find((city) => city.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    return cityObj?.id;
  }
  private getCityId(name: string) {
    const cityObj = this.cityList.find((city) => city.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    return cityObj?.id;
  }

  private getAcHeadId(name: string) {
    const cityObj = this.acHeadList.find((city) => city.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    return cityObj?.id;
  }

  public onSubmit(values: Object): void {


    this.personalForm.controls['OpeningBal'].setValue(Number(this.personalForm.get('OpeningBal').value));

    var body = this.personalForm.value;
    body.accountGroupId = this.getAcGroupId(this.acGroupCtrl.value);
    body.accountHeadId = this.getAcHeadId(this.acHeadCtrl.value);
    body.CityId = this.getCityId(this.cityCtrl.value);

    if (this.personalForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._masterService.saveAccount(body).subscribe(result => {
        console.log("result", result);
        this.showToaster(result.message, "Success");
        this.formSubmitted = true;
        // this.dialogRef.close();
      }, err => {
        this.showToaster(err.message, "Error");
        console.log(err);
      });
    }
  }

  showToaster(message, Label){
    this.snackBar.open(message, Label, {
      duration: 3000,
    });
  }



  close(): void {
    this.dialogRef.close();
  }

}




export function emailValidator(control: UntypedFormControl): { [key: string]: any } {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}
