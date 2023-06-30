import { Component, OnInit, ViewChild } from "@angular/core";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { AddContractMasterComponent } from "./contract-master-dialog/add-contract-master.component";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppService } from "src/app/service/app.service";

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
    columns = [
      { prop: 'Name' },
      { name: 'item' },
      { name: 'name' }
    ];
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
        maxWidth: 110, resizable: true
      },
      { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
      { headerName: 'Symbol', field: 'symbol', filter: true, sorting: true, resizable: true },
      { headerName: 'Maturity', field: 'maturity', filter: true, sorting: true, resizable: true },
      { headerName: 'OptionType', field: 'optionType', filter: true, sorting: true, resizable: true },  
      { headerName: 'StrikePrice', field: 'strikePrice', filter: true, sorting: true, resizable: true },
      { headerName: 'TradeableLot', field: 'tradeableLot', filter: true, sorting: true, resizable: true },
      { headerName: 'CreatedBy', field: 'createdBy', filter: true, sorting: true, resizable: true },
      { headerName: 'CreatedDate', field: 'createdDate', filter: true, sorting: true, resizable: true }
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

    public openCompanyDialog(user) {
        let dialogRef = this.dialog.open(AddContractMasterComponent, {
          data: user
        });
      
        dialogRef.afterClosed().subscribe(user => {
          //this.getAccountList();
          if (user) {
            /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
          }
        });
      }
}