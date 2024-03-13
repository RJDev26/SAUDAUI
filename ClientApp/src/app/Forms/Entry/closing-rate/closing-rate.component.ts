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
  selector: 'app-closing-rate',
  templateUrl: './closing-rate.component.html',
  styleUrls: ['./closing-rate.component.scss']
})
export class ClosingRateComponent implements OnInit {
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
  maturityList: any[];
  filteredMaturityList: any[];
  brokerList: any;
  clientList: any;
  filterClientList: any[] = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  saudaList: any[] = [];
  filterSaudaList: any[] = [];
  contractDateVal: any;
  maturityId: string;
  decimalPipe: any = new DecimalPipe('en-US');
  exchangeList: any[];
  conDate: any;
  exId: any;
  gridApi: any;
  filterZeroRates: boolean = false;
  contractwithstanding: boolean = false;

  public settings: Settings;
  symbolMappingList: any[] = [];
  constructor(public snackBar: MatSnackBar, private datePipe: DatePipe, public appSettings: AppSettings, private formBuilder: UntypedFormBuilder, private _entryServices: EntryService,
    public dialog: MatDialog, private _appService: AppService, private _masterService: MasterService, private _masterSecondServices: MasterSecondService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.bindFormControls();
    this.settings.sidenavIsPinned = false;
    this.settings.sidenavIsOpened = false;
    this.onFromDtChange();
    this.onExchangeInputChange();
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
      'saudaId': ['', Validators.required],
      'oprate': ['', Validators.required],
      'hgrate': ['', Validators.required],
      'lowrate': ['', Validators.required],
      'lastTradeRate': ['', Validators.required],
      'closerate': ['', Validators.required],
      'id': [0]
    });
    this.initialApiCalls();
  }

  onInputMaturityListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredMaturityList = this.maturityList.filter((data) => {
      const prov = data.maturity.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      sortable: true,
      wraptext: true,
      resizable: true,
      columnSize: "sizeToFit",
    },

  }

  columnDefs = [
    {
      headerName: "Closing Rates",
      children: [
        {
          headerName: '', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 40,
          maxWidth: 40, width:40, resizable: false, filter: false
        },
        {
          headerName: "",
          editable: false,
          minwidth: 25,
          width: 25,
          maxwidth: 25,
          resizable: false,
          sortable: false,
          filter: false,
          checkboxSelection: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: "Sauda Code",
          field: "saudaCode",
          suppressSizeToFit: true,
        },
        {
          headerName: "Open",
          field: "oprate",
          minwidth: 150,
          width: 150,
          maxwidth: 150,
          type: "rightAligned",
          cellRenderer: (params) => {
            return params.value.toFixed(2);
          },
        },
        {
          headerName: "Low",
          field: "lowrate",
          minwidth: 150,
          width: 150,
          maxwidth: 150,
          type: "rightAligned",
          cellRenderer: (params) => {
            return params.value.toFixed(2);
          },
        },
        {
          headerName: "High",
          field: "hgrate",
          minwidth: 150,
          width: 150,
          maxwidth: 150,
          type: "rightAligned",
          cellRenderer: (params) => {
            return params.value.toFixed(2);
          },
        },
        {
          headerName: "Close",
          field: "closerate",
          minwidth: 150,
          width: 150,
          maxwidth: 150,
          type: "rightAligned",
          cellRenderer: (params) => {
            return params.value.toFixed(2);
          },
        },
        {
          headerName: "Last Trade",
          field: "lastTradeRate",
          minwidth: 150,
          width: 150,
          maxwidth: 150,
          type: "rightAligned",
          cellRenderer: (params) => {
            return params.value.toFixed(2);
          },
        },
        {
          headerName: "GroupID",
          field: "scGroup",
          minwidth: 150,
          width: 150,
          maxwidth: 150,
          suppressSizeToFit: true,
        },
        {
          headerName: "ExCode",
          field: "exCode",
          flex:1,
          suppressSizeToFit: true,
        },
      ],
    },
  ];

  formatConTime(contime): string {
    const hours = contime.hours.toString().padStart(2, '0');
    const minutes = contime.minutes.toString().padStart(2, '0');
    const seconds = contime.seconds.toString().padStart(2, '0');
  
    return `${hours}:${minutes}:${seconds}`;
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

  getRowStyle(params: any) {
    if (params.data.contype === "B") {
      return { background: "lightblue" };
    } else if (params.data.contype === "S") {
      return { background: "lightcoral" };
    }
    return {}; // No specific style for other values
  }

  initialApiCalls() {
    forkJoin([this._masterService.getExchangeName()]).pipe(map(response => {
      this.exchangeList = response[0];
    })).subscribe(res => {
    });
  }

  onExchangeInputChange() {
    this._masterService.getSaudaListDDL().subscribe(res => {
      this.saudaList = res;
      this.filterSaudaList = res;
    });
  }

  onFromDtChange() {
    if(this.conDate){
      this._masterSecondServices.getMaturityListDDL(this.datePipe.transform(this.conDate, "yyyy-MM-dd")).subscribe((res)=>{
        this.maturityList = res;
        this.filteredMaturityList = res;
      });
    }
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
      body.condate = this.datePipe.transform(body.condate, 'yyyy-MM-dd');
      body.oprate = Number(body.oprate);
      body.hgrate = Number(body.hgrate);
      body.lowrate = Number(body.lowrate);
      body.lastTradeRate = Number(body.lastTradeRate);
      body.closerate = Number(body.closerate);
      //const body = JSON.stringify(addFormData);
      this._entryServices.saveClosing(body).subscribe(result => {
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
      const reqData = {
        "condate": this.contractDateVal,
        "excode": this.exId?String(this.exId):'',
        "maturity":this.maturityId,
        "filterZeroRates": this.filterZeroRates,
        "contractwithstanding": this.contractwithstanding
      };
      this._entryServices.getClosing(reqData).subscribe((results) => {
        this.symbolMappingList = results;
      });
    }
  }

  onCondateChange(newValue: Date) {
    this.contractDateVal = this.datePipe.transform(newValue, 'yyyy-MM-dd');
    this.getTradeFileListData();
    this.onFromDtChange();
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
    if (params.event.target.dataset.action == "edit")
    { 
      this._entryServices.editClosing(params.data.id).subscribe((res)=>{
        this.itemForm.patchValue({
          id: res.id,
          saudaId: res.saudaId,
          oprate: Number(res.oprate).toFixed(2),
          hgrate: Number(res.hgrate).toFixed(2),
          lowrate: Number(res.lowrate).toFixed(2),
          lastTradeRate: Number(res.lastTradeRate).toFixed(2),
          closerate: Number(res.closerate).toFixed(2),
        });
      });
    }
  }

  public openExchangeDialog(id) {
    this._entryServices.editContract(id).subscribe((response) => {
      this.exId = response.exId;
      this._masterService.getExchangeSaudaListDDL(response.exId).subscribe(result => {
        this.saudaList = result;
        this.filterSaudaList = result;
        var res = response;
        this.editTradeNo = res.tradeNo;
        this.lotNo = res.lotSize;
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
      const idList = selectedRecord.map(record => record.id).join(',');
      this._entryServices.deleteClosingMultiple(idList).subscribe((res) => {
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