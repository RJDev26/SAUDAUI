import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { ConfirmationDialog } from "../../Dialog/confirmation-dialog/confirmation-dialog.component";
import { AppService } from "src/app/service/app.service";
import { forkJoin, Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { MasterService } from "../../Master/master.service";
import { MasterSecondService } from "../../Master/master-second.service";
import { DatePipe, DecimalPipe } from "@angular/common";
import { ErrorDialog } from "../../Dialog/confirmation-dialog/error-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ReportsService } from "../reports.service";
import { MatSelect } from "@angular/material/select";
import { MatOption } from "@angular/material/core";
import { GridOptions } from "ag-grid-community";

@Component({
  selector: 'app-standing-report',
  templateUrl: './standing-report.component.html',
  styleUrls: ['./standing-report.component.scss']
})
export class StandingReportComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("selectAccount") selectAccount: MatSelect;
  @ViewChild("selectMaturity") selectMaturity: MatSelect;
  @ViewChild("selectBroker") selectBroker: MatSelect;
  @ViewChild("selectInstrument") selectInstrument: MatSelect;
  @ViewChild("selectSauda") selectSauda: MatSelect;
  public itemForm: UntypedFormGroup;
  gridOptions: GridOptions = {
    getRowStyle: this.getRowStyle.bind(this),
  };
  editing = {};
  rows = [];
  temp = [];
  accountList: any[];
  filteredAccountList: any[];
  maturityList: any[];
  filteredMaturityList: any[];
  instrumentList: any[];
  filteredInstrumentList: any[];
  brokerList: any;
  filterBrokerList: any[] = [];
  clientList: any;
  filterClientList: any[] = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  conTypeList = [
    { id: "B", name: "Buy" },
    { id: "S", name: "Sell" },
  ];
  saudaList: any[] = [];
  filterSaudaList: any[] = [];
  contractDateVal: any;
  decimalPipe: any = new DecimalPipe("en-US");
  exchangeList: any[];
  conDate: any;
  exId: any;
  gridApi: any;
  saudaIds: any;
  accountIds: any;
  maturityIds: any;
  instrumentIds: any;
  brokerIds: any;
  fromDt: any;
  accountorScripts: any = "accounts";

  public settings: Settings;
  symbolMappingList: any[] = [];
  constructor(
    public snackBar: MatSnackBar,
    private datePipe: DatePipe,
    public appSettings: AppSettings,
    private formBuilder: UntypedFormBuilder,
    private _reportServices: ReportsService,
    public dialog: MatDialog,
    private _appService: AppService,
    private _masterService: MasterService,
    private _masterSecondServices: MasterSecondService
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.fromDt = new Date();
    this.settings.sidenavIsPinned = false;
    this.settings.sidenavIsOpened = false;
    this.initialApiCalls();
    this.onFromDtChange();
  }

  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      sortable: true,
      wraptext: true,
      resizable: true,
      columnSize: "sizeToFit",
    },
  };

  columnDefs = [
    {
      headerName: "Script",
      field: "saudaCode",
      suppressSizeToFit: true,
      flex: 2,
    },
    {
      headerName: "Account",
      field: "shortCode",
      suppressSizeToFit: true,
      flex: 2,
    },

    {
      headerName: "Buy",
      field: "buy",
      minwidth: 180,
      width: 180,
      maxwidth: 180,
      cellRenderer: (params) => {
        return params.data.buy;
      },
    },
    {
      headerName: "Buy Avg Rate",
      field: "avgBuyRate",
      minwidth: 180,
      width: 180,
      maxwidth: 180,
      cellRenderer: (params) => {
        return params.value;
      },
    },
    {
      headerName: "Sell",
      field: "sell",
      minwidth: 180,
      width: 180,
      maxwidth: 180,
      cellRenderer: (params) => {
        return params.value;
      },
    },
    {
      headerName: "Sell Avg Rate",
      field: "avgSellRate",
      minwidth: 180,
      width: 180,
      maxwidth: 180,
      cellRenderer: (params) => {
        return params.value;
      },
    },
  ];

  formatConTime(contime): string {
    const hours = contime.hours.toString().padStart(2, '0');
    const minutes = contime.minutes.toString().padStart(2, '0');
    const seconds = contime.seconds.toString().padStart(2, '0');
  
    return `${hours}:${minutes}:${seconds}`;
  }

  rowData = [{ contype: "B" }, { contype: "S" }, { contype: "Other" }];

  // Define row style function
  getRowStyle(params: any) {
    if (params.data.sumOfQty > 0 ) {
      return { background: "lightblue" };
    } else if (params.data.sell) {
      return { background: "lightcoral" };
    }
    return {}; // No specific style for other values
  }

  onFromDtChange() {
    this._masterSecondServices.getMaturityListDDL(this.datePipe.transform(this.fromDt, "yyyy-MM-dd")).subscribe((res)=>{
      this.maturityList = res;
      this.filteredMaturityList = res;
    });
  }

  formatDateTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    // Use 'en-GB' locale for the desired "dd-MM-yyyy" format
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );

    // Extract date part (dd-MM-yyyy) and ignore the time part
    return (
      this.datePipe.transform(date, "dd-MM-YYYY") + formattedDate.split(",")[1]
    );
  }

  initialApiCalls() {
    forkJoin([
      this._masterService.getAccount(),
      this._masterService.getExchangeName(),
      this._masterService.getInstrumentList(),
      this._masterSecondServices.getBrokerDDL(),
    ])
      .pipe(
        map((response) => {
          this.filteredAccountList = response[0];
          this.accountList = response[0];
          this.brokerList = response[3];
          this.filterBrokerList = response[3];
          this.exchangeList = response[1];
          this.filteredInstrumentList = response[2];
          this.instrumentList = response[2];
        })
      )
      .subscribe((res) => {});
  }

  onGridDoubleClick(params: any) {}

  onExchangeInputChange(event: any) {
    this._masterService.getExchangeSaudaListDDL(this.exId).subscribe((res) => {
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

    if (searchInput === "") {
      this.filterSaudaList = [...this.saudaList];
    }
  }

  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredAccountList = this.accountList.filter((data) => {
      const prov = data.itemCode.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === "") {
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

  onInputMaturityListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredMaturityList = this.maturityList.filter((data) => {
      const prov = data.maturity.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onInputInstrumentListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredInstrumentList = this.instrumentList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onInputBrokerListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filterBrokerList = this.brokerList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === "") {
      this.filterBrokerList = [...this.brokerList];
    }
  }

  onInputClientChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filterClientList = this.clientList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === "") {
      this.filterClientList = [...this.clientList];
    }
  }

  getTradeFileListData() {
    var accountIds = this.accountIds
      ? this.accountIds.filter((val) => val != -1)
      : [];
      var maturity = this.maturityIds
      ? this.maturityIds.filter((val) => val != -1)
      : [];
      var broker = this.brokerIds
      ? this.brokerIds.filter((val) => val != -1)
      : [];
      var instrument = this.instrumentIds
      ? this.instrumentIds.filter((val) => val != -1)
      : [];
    var saudaIds = this.saudaIds
      ? this.saudaIds.filter((val) => val != -1)
      : [];
    const req = {
      fromDate: this.datePipe.transform(this.fromDt, "yyyy-MM-dd"),
      exId: this.exId,
      account: accountIds.join(","),
      sauda: saudaIds.join(","),
      instrument: instrument.join(","),
      broker: broker.join(","),
      maturity: maturity.join(",")
    };
    this._reportServices.getStanding(req).subscribe((results) => {
      this.symbolMappingList = results.data;
    });
  }

  accountAllSelection() {
    var isAllChecked = this.selectAccount.options.first.selected;
    this.selectAccount.options.forEach((item: MatOption) => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }
    });
  }

  maturityAllSelection() {
    var isAllChecked = this.selectMaturity.options.first.selected;
    this.selectMaturity.options.forEach((item: MatOption) => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }
    });
  }

  brokerAllSelection() {
    var isAllChecked = this.selectBroker.options.first.selected;
    this.selectBroker.options.forEach((item: MatOption) => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }
    });
  }

  instrumentAllSelection() {
    var isAllChecked = this.selectInstrument.options.first.selected;
    this.selectInstrument.options.forEach((item: MatOption) => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }
    });
  }

  saudaAllSelection() {
    var isAllChecked = this.selectSauda.options.first.selected;
    this.selectSauda.options.forEach((item: MatOption) => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }
    });
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

  onGridClick(params: any) {}

  onGridReady(event) {
    this.gridApi = event.api;
  }

  deleteContractTrades() {
    var selectedRecord = this.gridApi.getSelectedRows();
    if (selectedRecord.length == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: "Please select record to delete",
          buttonText: {
            ok: "OK",
          },
        },
      });
    } else {
      const idList = selectedRecord.map((record) => record.id).join(", ");
      this._reportServices.deleteContract(idList).subscribe((res) => {
        this.getTradeFileListData();
        this.showToaster(res.message, !res.isSuccess);
      });
    }
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ["red-text"] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError ? 6000 : 3000;

    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass,
    });
  }

  isSaveButtonDisabled() {
    return this.itemForm.invalid;
  }
}