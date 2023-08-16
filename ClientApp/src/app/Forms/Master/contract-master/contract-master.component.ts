import { Component, OnInit, ViewChild } from "@angular/core";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { AddContractMasterComponent } from "./contract-master-dialog/add-contract-master.component";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppService } from "src/app/service/app.service";
import { ConfirmationDialog } from "../../Dialog/confirmation-dialog/confirmation-dialog.component";
import { CommonUtility } from "../../../shared/common-utility";

@Component({
    selector: 'app-blank',
    templateUrl: './contract-master.component.html',
    styleUrls: ['./contract-master.component.scss']
})

export class ContractMasterComponent implements OnInit {
    @ViewChild(DatatableComponent) table: DatatableComponent;
    editing = {};
    rows = [];
    temp = [];
    selected = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;
   
    public settings: Settings;
    contractList: any;
    constructor(public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService) {
      this.settings = this.appSettings.settings;
    }

    ngOnInit() {
      this.getcontractList();
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
        maxWidth: 110, resizable: true, filter: false
      },
      { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
      { headerName: 'InstrumentType', field: 'insName', filter: true, sorting: true, resizable: true },
      { headerName: 'Symbol', field: 'symbol', filter: true, sorting: true, resizable: true },
      { headerName: 'Maturity', field: 'maturityDate', filter: true, sorting: true, resizable: true },
      { headerName: 'OptionType', field: 'optionType', filter: true, sorting: true, resizable: true },  
      { headerName: 'StrikePrice', field: 'strikePrice', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.strikePrice), type: 'rightAligned' },
      { headerName: 'TradeableLot', field: 'tradeableLot', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.tradeableLot), type: 'rightAligned' },

    
    ];

    getcontractList() {
      this._appService.getContract().subscribe((results) => {
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

    onGridClick(params: any) {
      debugger
      if (params.event.target.dataset.action == "edit")
      {
        this.openCompanyDialog(params.data.id);
      }
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
            this._masterService.deleteContract(params.data.id).subscribe((res) => {
              this.getcontractList();
            });
          }
        });
  
  
      }
    }

    public openCompanyDialog(user) {
        let dialogRef = this.dialog.open(AddContractMasterComponent, {
          data: { id:user }
        });
      
        dialogRef.afterClosed().subscribe(user => {
          this.getcontractList();
          if (user) {
            /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
          }
        });
    }
}
