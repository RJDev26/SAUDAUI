import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { ConfirmationDialog } from "../../Dialog/confirmation-dialog/confirmation-dialog.component";
import { AppService } from "src/app/service/app.service";
import { forkJoin, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MasterService } from "../../Master/master.service";
import { MasterSecondService } from "../../Master/master-second.service";
import { EntryService } from "../entry.service";
import { DatePipe, DecimalPipe } from "@angular/common";
import { ErrorDialog } from "../../Dialog/confirmation-dialog/error-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { GridOptions } from "ag-grid-community";

@Component({
  selector: 'app-trade-contract',
  templateUrl: './trade-contract.component.html',
  styleUrls: ['./trade-contract.component.scss']
})
export class TradeContractComponent implements OnInit {
  @ViewChild('myTemplate', { static: true }) myTemplate: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  public itemForm: UntypedFormGroup;
  editTradeNo: string;
  lotNo: string;
  gridOptions: GridOptions = {
    getRowStyle: this.getRowStyle.bind(this),
  };
  editing = {};
  rows = [];
  temp = [];
  accountList: any[];
  filteredAccountList: any[];
  brokerList: any;
  filterBrokerList: any[] = [];
  clientList: any;
  filterClientList: any[] = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  conTypeList = [{ 'id': 'B', 'name': 'Buy' }, { 'id': 'S', 'name': 'Sell' }]
  saudaList: any[] = [];
  filterSaudaList: any[] = [];
  contractDateVal: any;
  decimalPipe: any = new DecimalPipe('en-US');
  exchangeList: any[];
  conDate: any;
  exId: any;
  gridApi: any;

  public settings: Settings;
  symbolMappingList: any[] = [];
  constructor(public snackBar: MatSnackBar, private datePipe: DatePipe, public appSettings: AppSettings, private formBuilder: UntypedFormBuilder, private _entryServices: EntryService,
    public dialog: MatDialog, private _appService: AppService, private _masterService: MasterService, private _masterSecondService: MasterSecondService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.bindFormControls();
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
      'accountId': ['', Validators.required],
      'saudaId': ['', Validators.required],
      'qty': ['', Validators.required],
      'rate': ['', Validators.required],
      'contype': ['B', Validators.required],
      'brokerId': ['', Validators.required],
      'id': [0]
    });
    this.initialApiCalls();
  }

  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      sortable: true,
      wraptext: true,
      resizable: true,
      columnSize: "sizeToFit",
    }

  }

  columnDefs = [{
    headerName: 'Contract Trades',
    children: [
      {
        headerName: '', editable: false, minwidth: 25, width: 25, maxwidth: 25, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
      },
      {
        headerName: 'ConDate', field: 'condate', minwidth: 110, width: 110, maxwidth: 120, suppressSizeToFit: true, cellRenderer: (params) => {
          return this.datePipe.transform(params.value, 'YYYY-MM-dd')
        }
      },
      { headerName: 'Account', field: 'account',  suppressSizeToFit: true,flex:2 },
      { headerName: 'Sauda Code', field: 'saudaCode',  suppressSizeToFit: true,flex:2 },

      {
        headerName: 'B/S', field: 'contype', minwidth: 80, width: 80, maxwidth: 80,cellRenderer: (params) => {
        return params.value === 'B' ? 'Buy' : (params.value === 'S' ? 'Sell' : params.value);
        }
      },
      {
          headerName: 'QTY', field: 'qty',  minwidth: 100, width: 100, maxwidth: 100, sorting: true, resizable: true, cellRenderer: (params) => {
          return this.decimalPipe.transform(params.value, '1.2-2');
        },type: 'rightAligned'
      },
      {
          headerName: 'Rate', field: 'rate', minwidth: 100, width: 100, maxwidth: 100, type: 'rightAligned', cellRenderer: (params) => {
          return params.value.toFixed(2);
        },
      },
      {
          headerName: 'Created Date', field: 'createdDate', minwidth: 110, width: 110, maxwidth: 110, cellRenderer: (params) => {
          return this.datePipe.transform(params.value, 'YYYY-MM-dd')
        }
      },
      { headerName: 'Trade No', field: 'tradeNo', minwidth: 100, width: 100, maxwidth: 100, suppressSizeToFit: true },
      { headerName: 'Broker', field: 'brokerName', suppressSizeToFit: true, flex: 1 },
    ]

  }
  ];

  getRowStyle(params: any) {
    if (params.data.contype === "B") {
      return { background: "lightblue" };
    } else if (params.data.contype === "S") {
      return { background: "lightcoral" };
    }
    return {}; // No specific style for other values
  }

  initialApiCalls() {
    forkJoin([this._masterService.getAccount(), this._masterService.getExchangeName()]).pipe(map(response => {
      this.filteredAccountList = response[0];
      this.accountList = response[0];
      this.brokerList = response[0];
      this.filterBrokerList = response[0];
      this.exchangeList = response[1];
    })).subscribe(res => {
    });
  }

  onGridDoubleClick(params: any)
  {
    this.openExchangeDialog(params.data.id);
  }

  onExchangeInputChange(event: any) {
    this._masterService.getExchangeSaudaListDDL(this.exId).subscribe(res => {
      this.saudaList = res;
      this.filterSaudaList = res;
    });
  }

  onInputSaudaChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filterSaudaList = this.saudaList.filter((data) => {
      const prov = data.itemCode.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === '') {
      this.filterSaudaList = [...this.saudaList];
    }
  }

  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredAccountList = this.accountList.filter((data) => {
      const prov = data.itemCode.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === '') {
      this.filteredAccountList = [...this.accountList];
    }
  }

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

  onInputClientChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filterClientList = this.clientList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === '') {
      this.filterClientList = [...this.clientList];
    }
  }

  public onSubmit(values: Object): void {
    var body = this.itemForm.value;
    body.condate = this.conDate;
    if (this.itemForm.valid) {
      body.condate = this.datePipe.transform(body.condate, 'yyyy-MM-dd')
      //const body = JSON.stringify(addFormData);
      this._entryServices.saveCtrD(body).subscribe(result => {
        console.log("result", result);
        this.getTradeFileListData();
        this.resetForm(this.itemForm);
      }, err => {
        console.log(err);
      });
    }
  }
  getTradeFileListData() {
    if (this.contractDateVal) {
      this._entryServices.getTradeFileList(this.contractDateVal).subscribe((results) => {
        this.symbolMappingList = results;
      });
    }
  }

  onCondateChange(newValue: Date) {
    this.contractDateVal = this.datePipe.transform(newValue, 'yyyy-MM-dd');
    this.getTradeFileListData();
  }

  public actionCellRenderer(params: any) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some((cell: any) => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>`;
    return eGui;
  }

  onGridClick(params: any) {
    
  }

  public openExchangeDialog(id) {
    this._entryServices.editContract(id).subscribe((response) => {
      this.exId = response.exId;
      this._masterService.getExchangeSaudaListDDL(response.exId).subscribe(result => {
        this.saudaList = result;
        this.filterSaudaList = result;
        var res = response;
        this.editTradeNo = res.tradeNo;
        this.lotNo = res.lotNo;
        this.itemForm.get('id').setValue(res.id);
        this.itemForm.get('accountId').setValue(res.accountId);
        this.itemForm.get('saudaId').setValue(res.saudaId);
        this.itemForm.get('qty').setValue(Number(res.qty).toFixed(2));
        this.itemForm.get('rate').setValue(Number(res.rate).toFixed(2));
        this.itemForm.get('contype').setValue(res.contype);
        this.itemForm.get('brokerId').setValue(res.brokerId);
      });


    });
  }
  onGridReady(event) { this.gridApi = event.api; }

  deleteContractTrades() {
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
    else {
      const idList = selectedRecord.map(record => record.tradeNo).join(', ');
      this._entryServices.deleteContract(idList, this.datePipe.transform(this.conDate, 'yyyy-MM-dd')).subscribe((res) => {
        this.getTradeFileListData();
        this.showToaster(res.message, !res.isSuccess);
      });
    }
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError? 6000 : 3000;
  
    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass,
    });
  }

  resetForm(myForm) {
    this.editTradeNo = '';
    this.lotNo = '';
    myForm.reset();
    myForm.get('id').setValue(0);
    Object.keys(myForm.controls).forEach(key => {
      myForm.get(key).setErrors(null);
    });
  }

  isSaveButtonDisabled() {
    return this.itemForm.invalid;
  }

  close() {
    this.resetForm(this.itemForm);
    this.itemForm.markAsPristine();
    this.itemForm.markAsUntouched();
    console.log('Form Value:', this.itemForm.value);
    console.log('Form Valid:', this.itemForm.valid);
    console.log('Form Touched:', this.itemForm.touched);
  }
}
