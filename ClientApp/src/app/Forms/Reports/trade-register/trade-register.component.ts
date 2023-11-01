import { Component, OnInit, ViewChild } from "@angular/core";
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
import { DatePipe, DecimalPipe } from "@angular/common";
import { ErrorDialog } from "../../Dialog/confirmation-dialog/error-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ReportsService } from "../reports.service";
import { MatSelect } from "@angular/material/select";
import { MatOption } from "@angular/material/core";

@Component({
  selector: 'app-trade-register',
  templateUrl: './trade-register.component.html',
  styleUrls: ['./trade-register.component.scss']
})
export class TradeRegisterComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('selectAccount') selectAccount: MatSelect;
  @ViewChild('selectSauda') selectSauda: MatSelect;
  public itemForm: UntypedFormGroup;
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
  saudaIds: any;
  accountIds: any;
  fromDt: any;
  toDt: any;

  public settings: Settings;
  symbolMappingList: any[] = [];
  constructor(public snackBar: MatSnackBar, private datePipe: DatePipe, public appSettings: AppSettings, private formBuilder: UntypedFormBuilder, private _reportServices: ReportsService,
    public dialog: MatDialog, private _appService: AppService, private _masterService: MasterService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
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
      const prov = data.name.toLowerCase();
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

  onInputAccountListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredAccountList = this.accountList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
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

  getTradeFileListData() {
    var accountIds = this.accountIds.filter((val)=> val != -1);
    var saudaIds = this.saudaIds.filter((val)=> val != -1);
    const req = {
      "fromDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
        "toDate": this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
      "account":accountIds.join(','),
      "sauda": saudaIds.join(','),
    };
      this._reportServices.getTradeRegister(req).subscribe((results) => {
        this.symbolMappingList = results.data;
      });
  }

  accountAllSelection()
  {
    var isAllChecked = this.selectAccount.options.first.selected;
    this.selectAccount.options.forEach(
      (item: MatOption) => {

        if (isAllChecked) { item.select(); }
        else { item.deselect() }
      }

    );

  }

  saudaAllSelection()
  {
    var isAllChecked = this.selectSauda.options.first.selected;
    this.selectSauda.options.forEach(
      (item: MatOption) => {

        if (isAllChecked) { item.select(); }
        else { item.deselect() }
      }

    );

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
      const idList = selectedRecord.map(record => record.id).join(', ');
      this._reportServices.deleteContract(idList).subscribe((res) => {
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

  isSaveButtonDisabled() {
    return this.itemForm.invalid;
  }
}
