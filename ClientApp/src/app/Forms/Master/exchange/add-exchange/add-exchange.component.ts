import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MasterService } from '../../master.service';
import { forkJoin, map } from 'rxjs';
import { AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/service/app.service';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MasterSecondService } from '../../master-second.service';
import { ErrorDialog } from '../../../Dialog/confirmation-dialog/error-dialog.component';


@Component({
  selector: 'app-add-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.scss']
})
export class AddExchangeComponent implements OnInit {

  @ViewChild('select') select: MatSelect;
  public exchangeMasterForm: UntypedFormGroup;
  public exchangeForm: UntypedFormGroup;
  applyOnList: any;
  selectedId: any;
  accountList: any[];
  accountIds: Array<string>;

  accountAllSellected: boolean = false;
  accountExchangeList: any[];
  accountApplyOnList: any[];
  gridApi: any;
  isRowSelected: boolean = false;
  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      //flex:1,
      sortable: true,
      wraptext: true,
      resizable: true,
      /* minWidth: 100,*/

    },
    /* suppressRowHoverHighlight: true,*/
  }

  columnDefs = [{
    headerName: 'Added account Exchange list',
    children: [
      {
        headerName: '', editable: false, minwidth: 45, width: 45, maxwidth: 45, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
      },
      { headerName: 'Account', field: 'accountName', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'ApplyOn', field: 'applyOn', filter: true, sorting: true, resizable: true, flex: 1, },
    ]
  }];

  constructor(public appSettings: AppSettings,
    private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddExchangeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService,
    private _masterSecondService: MasterSecondService, public dialog: MatDialog) {

    this.selectedId = data.id;
    if (data.id == null) { this.selectedId = 0; }
  }



  checkExchangeSelect() {
    if (this.selectedId == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please select or save exchange to add account exchange',
          buttonText: {
            ok: 'OK',

          }
        }

      });
    }
  }

  /* to filter select account dropdown*/
  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.accountList = this.accountList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  /* for adding exchange detail*/
  bindFormControls() {
    this.exchangeMasterForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'fmccode': ['', Validators.required],
      'memberId': ['', Validators.required],
      'future': [false],
      'convertCurrency': [false],
      'lotwise': [false],
      'options': [false],
      'cash': [false],
      'id': [0]
    });

  }
  /* for adding tax account detail*/
  bindAccountExchangeControls() {
    this.exchangeForm = this.formBuilder.group({
      'exchangeId': [this.selectedId, Validators.required],
      'applyOn': ['', Validators.required],
      'accounts': ['', Validators.required],
      'id': [0]
    });
  }

  

  onGridReady(event) { this.gridApi = event.api; }

  accountAllSelection() {
    this.accountAllSellected = true;
    var isAllChecked = this.select.options.first.selected;
    this.select.options.forEach(
      (item: MatOption, index) => {
        if (isAllChecked) { item.select(); }
        else { item.deselect() }
        
      }
    );
  }

  initialApiCalls() {
    forkJoin([this._masterService.getApplyOn(), this._masterService.getApplyOnTaxAccountDDL(), this._masterService.getAccounts()]).pipe(map(response => {
      this.applyOnList = response[0];

      this.accountApplyOnList = response[1];
      this.accountList = response[2];
    })).subscribe(res => {

    });
    if (this.selectedId != 0) { this.getAccountTaxList(); }
  }

  getExchangeInfo() {
    this._masterSecondService.getExchangeId(this.selectedId).subscribe((res) => {
      this.exchangeMasterForm.get('name').setValue(res.name);
      this.exchangeMasterForm.get('fmccode').setValue(res.fmccode);
      this.exchangeMasterForm.get('memberId').setValue(res.memberId);
      this.exchangeMasterForm.get('future').setValue(res.future);
      this.exchangeMasterForm.get('convertCurrency').setValue(res.convertCurrency);
      this.exchangeMasterForm.get('lotwise').setValue(res.lotwise);
      this.exchangeMasterForm.get('options').setValue(res.options);
      this.exchangeMasterForm.get('cash').setValue(res.cash);
      this.exchangeMasterForm.get('id').setValue(res.id);
    });
  }

  getAccountTaxList() {
    this._masterSecondService.getTaxAccountList(this.selectedId).subscribe((res) => {
      this.accountExchangeList = res;
    });
  }


  public onSubmit(values: Object): void {
    var body = this.exchangeMasterForm.value;
    if (this.exchangeMasterForm.valid) {
      this._masterSecondService.saveExchange(body).subscribe(result => {
        this.dialogRef.close();
      }, err => {
        console.log(err);
      });
    }
  }

  deleteAccountExchange()
  {
    var selectedRecord = this.gridApi.getSelectedRows();
    if (selectedRecord.length == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please select record to delete',
          buttonText: {
            ok: 'OK',

          }
        }

      });

    }
    else
    {
      this._masterSecondService.deleteAccountTax(selectedRecord).subscribe(result => {
        this.getAccountTaxList();
      });
    }
  }

  public onAccountTaxSubmit(values: Object): void {

    if (this.selectedId == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please select or save tax to add account tax',
          buttonText: {
            ok: 'OK',

          }
        }

      });
    }

    var body = this.exchangeForm.value;
    //to remove select all option value that is '-1'
    body.accounts.forEach((value, index) => {
      if (value == '-1') body.accounts.splice(index, 1);
    });

  
    this.exchangeForm.controls['taxId'].setValue(this.selectedId);
    if (this.exchangeForm.valid) {
      this._masterSecondService.addAccountTax(body).subscribe(result => {
        this.getAccountTaxList();
      });
    }
  }

  ngOnInit() {
    this.bindFormControls();
    this.bindAccountExchangeControls();
    this.initialApiCalls();
    if (this.selectedId != 0) {
      this.getExchangeInfo();
     
    }
    else {
      this.exchangeMasterForm.get('id').setValue(0);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}