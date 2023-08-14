import { formatDate } from '@angular/common';
import { Component, OnInit, Inject, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppService } from '../../../../service/app.service';
import { CommonUtility } from '../../../../shared/common-utility';
import { ConfirmationDialog } from '../../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialog } from '../../../Dialog/confirmation-dialog/error-dialog.component';
import { MasterService } from '../../master.service';
import { Account } from '../account.model';

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
  itemList: any

  accountSelfShareList: any;

  @ViewChildren(MatAutocompleteTrigger) triggerCollection: QueryList<MatAutocompleteTrigger>;

  constructor(private formBuilder: UntypedFormBuilder, public dialogRef:
    MatDialogRef<AddAccountComponent>, @Inject(MAT_DIALOG_DATA) public user: Account,
    private _masterService: MasterService, public dialog: MatDialog, private _appService: AppService) {
    this.bindFormControls();
    this.selectedAccountId = this.user.id;
    this.bindacSelfShareFormControls();

    this.bindBrokerageControls()
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


  //self share list defination
  columnDefs = [
    {
      headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
      maxWidth: 110, resizable: true
    },
    { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
    { headerName: 'ContraAccount', field: 'contraName', filter: true, sorting: true, resizable: true },
    { headerName: 'FromDt', field: 'fromDtString', filter: true, sorting: true, resizable: true },
    { headerName: 'ToDt', field: 'toDtString', filter: true, sorting: true, resizable: true },
    { headerName: 'ApplyOn', field: 'applyOnName', filter: true, sorting: true, resizable: true },
    { headerName: 'Rate', field: 'rate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.intradayRate), type: 'rightAligned' },
  ];


  columnDefsBrok = [
    {
      headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
    },
    { headerName: 'ApplyOn', field: 'applyOnName', filter: true, sorting: true, resizable: true },
    { headerName: 'Apply OnQty', field: 'applyOnQtyName', filter: true, sorting: true, resizable: true },
    { field: 'Intraday BrokRate', headerName: 'IntradayBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.intradayBrokRate), type: 'rightAligned' },
    { headerName: 'Delivery BrokRate', field: 'deliveryBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.deliveryBrokRate), type: 'rightAligned' },
    /*{ headerName: 'HigherSide Only', minWidth: 120, maxWidth: 120, field: 'higherSideOnly', filter: true, sorting: true, resizable: true },*/
    { headerName: 'Instrument', field: 'instrumentType', filter: true, sorting: true, resizable: true },
    { headerName: 'RateRange1', field: 'rateRange1', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.rateRange1), type: 'rightAligned' },
    { headerName: 'RateRange2', field: 'rateRange2', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.rateRange2), type: 'rightAligned' },
    { headerName: 'Exchange', field: 'exchange', filter: true, sorting: true, resizable: true },
    { headerName: 'Item', field: 'item', filter: true, sorting: true, resizable: true },
    /*    { headerName: 'IntradaySingleSideOnly', field: 'intradaySingleSideOnly', filter: true, sorting: true, resizable: true },*/
    { headerName: 'FromDT', field: 'fromDT', filter: true, sorting: true, resizable: true },
    { headerName: 'ToDT', field: 'toDT', filter: true, sorting: true, resizable: true },

  ];

  bindFormControls() {
    this.personalForm = this.formBuilder.group({
      'ShortCode': ['', Validators.required],
      'Name': ['', Validators.required],
      'OpeningBal': [],
      'City': [''],
      'Email': ['', Validators.compose([Validators.required, emailValidator])],
      'PanNo': [''],
      'Gstinno': [''],
      'Phone': ['', Validators.required],
      'AcGroup': ['', Validators.required],
      'AcHead': ['', Validators.required],
      'Address': [''],
      'TelegramNo': [''],
      'TelegramId': [''],
      'Id': [0],
      'DrCr': ['1', Validators.required],
      'ApplyTax': [false],
      'ApplyFutureCutBrok': [false],
      'ApplyOptionCutBrok': [false],
    });
  }



  bindacSelfShareFormControls() {
    this.acSelfShareForm = this.formBuilder.group({
      'accountId': [0, Validators.required],
      'contraId': ['', Validators.required],
      'exId': ['', Validators.required],
      'rate': ['', Validators.required],
      'applyOn': ['', Validators.required],
      'fromDt': ['', Validators.required],
      'toDt': ['', Validators.required],
      'id': [0],
    });
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
    this._masterService.getTaxType(), this._masterService.getExchangeName(),
    this._masterService.getInstrumentList(), this._masterService.getAccount(), this._masterService.getApplyOnFileShareDDL(),
    this._masterService.getItemListDrp(),
    this._masterService.getApplyOnQtyDDL(),
    this._masterService.getApplyOnDDL(),]).pipe(map(response => {
      debugger
      this.acGroupList = response[0];
      this.acHeadList = response[1];
      this.cityList = response[2];
      this.taxList = response[3];
      this.exchangeList = response[4];
      this.instrumentList = response[5];
      this.acList = response[6];
      this.applyOnFileShare = response[7];
      this.itemList = response[8];
      this.brokApplyOnQty = response[9];
      this.brokApplyOn = response[10]
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
    this.getAccountSelfShareList();
    this.getBrokerageSetupList();
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
        this.dialogRef.close();
      }, err => {
        console.log(err);
      });
    }
  }

  getAccountSelfShareList() {
    this._masterService.getAccountSelfShareList(this.selectedAccountId).subscribe((results) => {
      this.accountSelfShareList = results;

    });
  }

  bindSelfShareFormInEditMode(res) {

    this.acSelfShareForm.setValue({
      'exId': res.exId,
      'rate': CommonUtility.formatNumber(res.rate),
      'fromDt': res.fromDt,
      'toDt': res.toDt,
      'id': res.id,
      'applyOn': res.applyOn,
      'contraId': res.contraId,
      'accountId': res.accountId
    });

  }

 

  //account Self share clicked 
  onSelfShareClick(params: any) {

    if (params.event.target.dataset.action == "edit") {
      this._masterService.getAccountSelfShareEdit(params.data.id).subscribe((res) => {
        this.bindSelfShareFormInEditMode(res);
      });
    }
    if (params.event.target.dataset.action == "delete") {
      const dialogRef = this.dialog.open(ConfirmationDialog, {
        data: {
          message: 'Do you really want to delete this record?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });

      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this._masterService.deleteAccountSelfShare(params.data.id).subscribe((res) => {
            this.getAccountSelfShareList();
          });
        }
      });


    }




  }


  public onSelfShare(values: Object): void {

    if (this.selectedAccountId == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please select or save account to save account tax',
          buttonText: {
            ok: 'OK',

          }
        }

      });
    }
    else {


      this.acSelfShareForm.controls['rate'].setValue(Number(this.acSelfShareForm.get('rate').value));
      this.acSelfShareForm.controls['accountId'].setValue(this.selectedAccountId);
      var body = this.acSelfShareForm.value;

      if (this.acSelfShareForm.valid) {
        //const body = JSON.stringify(addFormData);
        this._masterService.saveAccountSelfShare(body).subscribe(result => {
          console.log("result", result);
          this.dialogRef.close();
        }, err => {
          console.log(err);
        });
      }
    }
  }

  bindBrokerageControls() {
    this.brokerageForm = this.formBuilder.group({
      'exchangeId': ['', Validators.required],
      'applyOn': ['', Validators.required],
      'applyOnQty': ['', Validators.required],
      'itemId': ['', Validators.required],
      'instrumentType': ['', Validators.required],
      'deliveryBrokRate': ['', Validators.required],
      'intradayBrokRate': ['', Validators.required],
      'rateRange1': ['', Validators.required],
      'rateRange2': ['', Validators.required],
      'fromDt': ['', Validators.required],
      'accountId': [this.selectedAccountId, Validators.required],
      'toDt': ['', Validators.required],
      'intradaySingleSideonly': [false],
      'id': [0, Validators.required],
    });
    this.initialApiCalls();
  }

  getBrokerageSetupList() {
    this._appService.getBrokerageSetupList().subscribe((results) => {
      this.brokerageList = results;
    });
  }

  getSelectedBrokerageInfo(brokId) {
    this._masterService.getBrokerageSetupId(brokId).subscribe((res) => {
      const fromDate = new Date(res.fromDT);
      const toDate = new Date(res.toDT);
       const formattedFromDate = formatDate(fromDate, 'yyyy-MM-dd', 'en-US');
      ///  const formattedToDate = formatDate(toDate, 'yyyy-MM-dd', 'en-US');
      this.brokerageForm.patchValue({
        accountId: res.accountId,
        exchangeId: res.exchangeId,
        applyOn: res.applyOn,
        applyOnQty: res.applyOnQty,
        itemId: res.itemId,
        fromDt: formatDate(fromDate, 'yyyy-MM-dd', 'en-US') ,
        toDt: res.toDT,
        instrumentType: res.instrumentType,
        deliveryBrokRate: res.deliveryBrokRate,
        intradayBrokRate: res.intradayBrokRate,
        rateRange1: res.rateRange1,
        rateRange2: res.rateRange2,
        intradaySingleSideonly: res.intradaySingleSideonly,
        id: brokId
      });
    });
  }
  onBrokerageClick(params: any) {

    if (params.event.target.dataset.action == "edit") {
      this.getSelectedBrokerageInfo(params.data.id)

    }
    if (params.event.target.dataset.action == "delete") {
      const dialogRef = this.dialog.open(ConfirmationDialog, {
        data: {
          message: 'Do you really want to delete this record?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });

      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this._masterService.deleteBrokerageSetup(params.data.id).subscribe((res) => {
            this.getBrokerageSetupList();
          });
        }
      });


    }
  }
  public onBrokerageSave(values: object) {
    console.log(values);
    var body = this.brokerageForm.value;
    console.log(body);

    if (this.brokerageForm.valid) {

      this._masterService.saveBrokerageSetup(body).subscribe(result => {
        console.log("result", result);
        this.dialogRef.close();
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  public actionCellRenderer(params: any) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some((cell: any) => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button class="material-icons action-button-edit " data-action="edit">edit </button>
                      <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;

    return eGui;
  }

}




export function emailValidator(control: UntypedFormControl): { [key: string]: any } {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}
