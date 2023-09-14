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
import { ConfirmationDialog } from 'src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-add-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.scss']
})
export class AddExchangeComponent implements OnInit {

  @ViewChild('select') select: MatSelect;
  public exchangeMasterForm: UntypedFormGroup;
  public exchangeForm: UntypedFormGroup;
  public exchangeDetailsForm: UntypedFormGroup;
  applyOnList: any;
  selectedId: any;
  accountList: any[];
  instrumentList: any[];
  accountIds: Array<string>;
  exchangeTaxList: any[] = [];

  accountAllSellected: boolean = false;
  accountExchangeList: any[] = [];
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
        headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
        maxWidth: 110, resizable: true
      },
      { headerName: 'TaxName', field: 'taxName', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'Account', field: 'accountName', filter: true, sorting: true, resizable: true, flex: 1, },
    ]
  }];

  taxDetailsColumnDefs = [{
    headerName: 'Added TaxDetails Exchange list',
    children: [
      {
        headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
        maxWidth: 110, resizable: true
      },
      { headerName: 'TaxName', field: 'taxName', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'FromDT', field: 'fromDt', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'ToDt', field: 'toDt', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'InsType', field: 'instrumentType', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'Rate', field: 'rate', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'Rate Delivery', field: 'rateDelivery', filter: true, sorting: true, resizable: true, flex: 1, },
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

  public actionCellRenderer(params: any) {
    let eGui = document.createElement("div");
    eGui.innerHTML = `<button class="material-icons action-button-red" delete data-action="delete">delete</button>`;    
    return eGui;
}



onGridAccountClick(params: any) {
  if (params.event.target.dataset.action == "delete")
  {
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
        this._masterSecondService.deleteExchangeAccount(params.data.id).subscribe((res) => {
          this.getExchangeAccountList();
        });
      }
    });


  }
}

onGridClick(params: any) {
  if (params.event.target.dataset.action == "delete")
  {
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
        this._masterSecondService.deleteExchangeTax(params.data.id).subscribe((res) => {
          this.getExchangeTaxList();
        });
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
      'exCode': ['', Validators.required],
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
      'taxId': ['', Validators.required],
      'accountId': ['', Validators.required],
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
    forkJoin([this._masterService.getApplyOn(), this._masterService.getTaxType(), this._masterService.getAccount(), this._masterService.getInstrumentList()]).pipe(map(response => {
      this.applyOnList = response[0];

      this.accountApplyOnList = response[1];
      this.accountList = response[2];
      this.instrumentList = response[3];
    })).subscribe(res => {

    });
    if (this.selectedId != 0) { this.getExchangeAccountList();  this.getExchangeTaxList();}
  }

  getExchangeInfo() {
    this._masterSecondService.getExchangeId(this.selectedId).subscribe((res) => { 
      this.exchangeMasterForm.get('exCode').setValue(res.exCode);
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

  getExchangeAccountList() {
    this._masterSecondService.getExchangeAccountList(this.selectedId).subscribe((res) => {
      this.accountExchangeList = res;
    });
  }

  getExchangeTaxList() {
    this._masterSecondService.getExchangeTaxList(this.selectedId).subscribe((res) => {
      this.exchangeTaxList = res;
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
        this.getExchangeAccountList();
      });
    }
  }

  public onAccountExchangeSubmit(values: Object): void {

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

    this.exchangeForm.controls['exchangeId'].setValue(this.selectedId);
    var body = this.exchangeForm.value;

  
    if (this.exchangeForm.valid) {
      this._masterSecondService.saveExchangeAccount(body).subscribe(result => {
        this.getExchangeAccountList();
        this.resetForm(this.exchangeForm);
      });
    }
  }

  resetForm(myForm) {
    myForm.reset();
    myForm.get('id').setValue(0);
    Object.keys(myForm.controls).forEach(key => {
      myForm.get(key).setErrors(null);
    });
  }

  public onSubmitExchangeTax(values: Object): void {

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

    this.exchangeDetailsForm.controls['exchangeId'].setValue(this.selectedId);
    var body = this.exchangeDetailsForm.value;
    body.updatedBy = this.selectedId;
    body.updatedDate = new Date();
    body.taxName = "";
    body.exName = "";

  
    if (this.exchangeDetailsForm.valid) {
      this._masterSecondService.saveExchangeTax(body).subscribe(result => {
        this.getExchangeTaxList();
        this.resetForm(this.exchangeDetailsForm);
      });
    }
  }

  ngOnInit() {
    this.bindFormControls();
    this.bindAccountExchangeControls();
    this.bindTaxFormControls();
    this.initialApiCalls();
    if (this.selectedId != 0) {
      this.getExchangeInfo();
     
    }
    else {
      this.exchangeMasterForm.get('id').setValue(0);
    }
  }

  bindTaxFormControls() {
    this.exchangeDetailsForm = this.formBuilder.group({
      'exchangeId': [this.selectedId, Validators.required],
      'taxId': ['',Validators.required],
      'rate': ['', Validators.required],
      'instrumentType': ['', Validators.required],
      'rateDelivery': ['', Validators.required],
      'fromDt': ['', Validators.required],
      'toDt': ['', Validators.required],
      'id': [0],
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}