import { Component, OnInit, Inject, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
  public taxForm: FormGroup;
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

  cityList: City[];
  taxList: City[];
  exchangeList: City[];

  @ViewChildren(MatAutocompleteTrigger) triggerCollection: QueryList<MatAutocompleteTrigger>;

  constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddAccountComponent>, @Inject(MAT_DIALOG_DATA) public user: Account, private _appService: MasterService) {
    this.bindFormControls();
    this.bindTaxFormControls();
  }
 
  ngAfterViewInit() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    for (var trigger of this.triggerCollection.toArray()) {
      this.subscription = trigger.panelClosingActions
        .subscribe(e => {
          debugger
          if (!e || !e.source) {
            if (this.acGroupCtrl.dirty)
            {
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


  columnDefs = [
    {
      headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
      maxWidth: 110, resizable: true
    },
    { headerName: 'TaxName', field: 'TaxName', filter: true, sorting: true, resizable: true },
    { headerName: 'Exchange', field: 'Exchange', filter: true, sorting: true, resizable: true },
    { headerName: 'FromDt', field: 'FromDt', filter: true, sorting: true, resizable: true },
    { headerName: 'ToDt', field: 'ToDt', filter: true, sorting: true, resizable: true },
    { headerName: 'InsType', field: 'InsType', filter: true, sorting: true, resizable: true },
    { headerName: 'IntraDayRate', field: 'IntraDayRate', filter: true, sorting: true, resizable: true },
    { headerName: 'DeliveryRate', field: 'DeliveryRate', filter: true, sorting: true, resizable: true },
    
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

  bindTaxFormControls() {
    this.taxForm = this.formBuilder.group({
      'TaxType': [''],
      'Exchange': [''],
      'IntraDayRate': [''],
      'InsType': [''],
      'DeliveryRate': [''],
      //'FromDT': [],
      //'ToDT': [],

    });
  }


  bindFilterFntoList()
  {


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
    forkJoin([this._appService.getAcGoup(), this._appService.getAcHead(), this._appService.getCityList(),
      this._appService.getTaxType(), this._appService.getExchangeName()]).pipe(map(response => {
      debugger
      this.acGroupList = response[0];
      this.acHeadList = response[1];
      this.cityList = response[2];
        this.taxList = response[3];
        this.exchangeList = response[4];
      this.bindFilterFntoList();
    })).subscribe(res => {
      this.getValuesInEditMode();
    });
  }

  getValuesInEditMode() {
    debugger
    if (this.user) {
      const acGroup = this.acGroupList.find((obj => obj.id === this.user.accountGroupId));
      const acHead = this.acHeadList.find((obj => obj.id === this.user.accountHeadId));
      const optedCity = this.cityList.find((obj => obj.id === this.user.cityId));
      this.bindValuesInEditMode(acGroup, optedCity, acHead);
      this.bindTaxFormControls();
      console.log(this.user);
    }
  }

  bindValuesInEditMode(acGroup: ACGroup, optedCity?: City, acHead?: ACHead) {
    this.personalForm.setValue({
      'ShortCode': this.user.shortCode,
      'Name': this.user.name,
      'OpeningBal': this.user.openingBal,
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



  bindTaxFormInEditMode() {
    this.taxForm.setValue({
      'TaxType': this.user.taxType,
      'Exchange': this.user.exchange,
      'IntraDayRate': this.user.IntraDayRate,
      'InsType': this.user.InsType,
      'DeliveryRate': this.user.DeliveryRate,
    });
   
  }

  onGroupChange(event)
  {
    debugger;
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
    debugger;
  
    this.personalForm.controls['OpeningBal'].setValue(Number(this.personalForm.get('OpeningBal').value));
    
    var body = this.personalForm.value;
    body.accountGroupId = this.getAcGroupId(this.acGroupCtrl.value);
    body.accountHeadId = this.getAcHeadId(this.acHeadCtrl.value);
    body.CityId = this.getCityId(this.cityCtrl.value);
    
    if (this.personalForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._appService.saveAccount(body).subscribe(result => {
        console.log("result", result);
        this.dialogRef.close();
      }, err => {
        console.log(err);
      });
    }
  }


  public onSubmitTax(values: Object): void {
   
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
