import { Component, OnInit, ViewChild } from "@angular/core";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppService } from "src/app/service/app.service";
import { forkJoin, map } from "rxjs";
import { MasterService } from "../../master.service";
import { ConfirmationDialog } from "src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component";
import { CommonUtility } from "src/app/shared/common-utility";
import { ErrorDialog } from "src/app/Forms/Dialog/confirmation-dialog/error-dialog.component";

@Component({
  selector: 'app-contract-dialog',
  templateUrl: './contract-dialog.component.html',
  styleUrls: ['./contract-dialog.component.scss']
})
export class ContractDialogComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  editing = {};
  rows = [];
  temp = [];
  gridApi: any;
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  selectedExId: any;
  exchangeList: any;
 
  public settings: Settings;
  contractList: any = [];
  constructor(public appSettings: AppSettings, private _appService: AppService, public dialogRef: MatDialogRef<ContractDialogComponent>, public dialog: MatDialog, private _masterService: MasterService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.getExchangeList();
  }

  getExchangeList(){
    forkJoin([this._masterService.getExchangeName()]).pipe(map(response => {
      this.exchangeList = response[0];
    })).subscribe(res => {
    });
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
      headerName: '', editable: false, minwidth: 45, width: 45, maxwidth: 45, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
    },
    { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
    { headerName: 'InstrumentType', field: 'insName', filter: true, sorting: true, resizable: true },
    { headerName: 'Symbol', field: 'symbol', filter: true, sorting: true, resizable: true },
    { headerName: 'Item Name', field: 'itemName', filter: true, sorting: true, resizable: true },
    { headerName: 'Maturity', field: 'maturityDate', filter: true, sorting: true, resizable: true },
    { headerName: 'OptionType', field: 'optionType', filter: true, sorting: true, resizable: true },  
    { headerName: 'StrikePrice', field: 'strikePrice', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.strikePrice), type: 'rightAligned' },
    { headerName: 'TradeableLot', field: 'tradeableLot', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.tradeableLot), type: 'rightAligned' },

  
  ];

  getcontractList(id: any) {
    this._appService.getContract(id).subscribe((results) => {
     this.contractList = results;       
    });
  }

  public actionCellRenderer(params: any) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some((cell: any) => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>
                      <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;

    return eGui;
  }

  onBranchChange(event: any){
    console.log(event);
    this.getcontractList(this.selectedExId);
  }

  onGridReady(event) { this.gridApi = event.api; }

  onGridClick(params: any) {
    
  }

  importContractItems()
  {
    var selectedRecord = this.gridApi.getSelectedRows();
    if (selectedRecord.length == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please select record to Import',
          buttonText: {
            ok: 'OK',

          }
        }

      });

    }
    else
    {
      const reqObj = selectedRecord.map(i => i.id);
      this._masterService.importItem(reqObj).subscribe(result => {
        this.dialogRef.close();
      });
    }
  }
}
