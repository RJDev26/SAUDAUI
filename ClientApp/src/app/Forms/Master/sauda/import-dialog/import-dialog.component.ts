import { Component, OnInit, ViewChild } from "@angular/core";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppService } from "src/app/service/app.service";
import { forkJoin, map } from "rxjs";
import { MasterService } from "../../master.service";
import { ErrorDialog } from "src/app/Forms/Dialog/confirmation-dialog/error-dialog.component";
import { MasterSecondService } from "../../master-second.service";
import { CommonUtility } from "src/app/shared/common-utility";

@Component({
  selector: 'app-import-dialog',
  templateUrl: './import-dialog.component.html',
  styleUrls: ['./import-dialog.component.scss']
})
export class ImportDialogComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  editing = {};
  rows = [];
  temp = [];
  gridApi: any;
  selected = [];
  maturityList: any[];
  filteredMaturityList: any[];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  selectedExId: any;
  exchangeList: any;
  maturityIds: string;
 
  public settings: Settings;
  contractList: any = [];
  constructor(public appSettings: AppSettings, private _appService: AppService, public dialogRef: MatDialogRef<ImportDialogComponent>, public dialog: MatDialog, private _masterService: MasterService, private _masterSecondServices: MasterSecondService) {
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

  onInputMaturityListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredMaturityList = this.maturityList.filter((data) => {
      const prov = data.maturity.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onExcodeChange() {
    this._masterService.getContractMaturity(String(this.selectedExId)).subscribe((res)=>{
      this.maturityList = res;
      this.filteredMaturityList = res;
    });
  }

  showContractSaudaImport() {
    this._masterService.getContractSaudaImport(this.selectedExId, this.maturityIds).subscribe(res=> {
      this.contractList = res;   
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
    { headerName: 'Symbol', field: 'symbol', filter: true, sorting: true, resizable: true },
    { headerName: 'Item Name', field: 'itemName', filter: true, sorting: true, resizable: true },
    { headerName: 'Maturity', field: 'maturityDate', filter: true, sorting: true, resizable: true, cellRenderer: this.dateFormatter },
    { headerName: 'Option Type', field: 'optionType', filter: true, sorting: true, resizable: true },
    { headerName: 'Strike Price', field: 'strikePrice', flex:1, valueFormatter: params => Number(CommonUtility.formatNumber(params.data.strikePrice)).toFixed(2), type: 'rightAligned' },
    { headerName: 'Tradeable Lot', field: 'tradeableLot', flex:1, valueFormatter: params => Number(CommonUtility.formatNumber(params.data.tradeableLot)).toFixed(2), type: 'rightAligned' },
    { headerName: 'Lot Size', field: 'lotSize', flex:1, valueFormatter: params => Number(CommonUtility.formatNumber(params.data.lotSize)).toFixed(2), type: 'rightAligned' },
  
  ];

  dateFormatter(params: any): string {
    return params.value
  }

  getcontractList(id: any) {
    this._appService.getContractListItemImport(id).subscribe((results) => {
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
    // this.getcontractList(this.selectedExId);
    this.onExcodeChange();
  }

  onGridReady(event) { this.gridApi = event.api; }

  onGridClick(params: any) {
    
  }

  close(): void {
    this.dialogRef.close();
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
      this._masterService.importsauda(reqObj).subscribe(result => {
        this.dialogRef.close();
      });
    }
  }
}
