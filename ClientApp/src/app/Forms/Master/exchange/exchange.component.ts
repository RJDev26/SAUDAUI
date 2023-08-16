import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { AppService } from "src/app/service/app.service";
import { MasterService } from "../master.service";
import { ConfirmationDialog } from "../../Dialog/confirmation-dialog/confirmation-dialog.component";
import { MasterSecondService } from "../master-second.service";
import { AddExchangeComponent } from "./add-exchange/add-exchange.component";

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  editing = {};
  rows = [];
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
 
  public settings: Settings;
  exchangeList: any;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog, private _masterService: MasterService, private _masterSecondService: MasterSecondService) {
      this.settings = this.appSettings.settings;
    }

  ngOnInit() {
      this.getExchangeList();
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
      { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
    { headerName: 'FMCCode', field: 'fmccode', filter: true, sorting: true, resizable: true },  
    { headerName: 'Future', field: 'future', filter: true, sorting: true, resizable: true },  
    { headerName: 'Options', field: 'options', filter: true, sorting: true, resizable: true },  
    { headerName: 'Cash', field: 'cash', filter: true, sorting: true, resizable: true },  
    { headerName: 'MemberId', field: 'memberId', filter: true, sorting: true, resizable: true },  
    { headerName: 'ConvertCurrency', field: 'convertCurrency', filter: true, sorting: true, resizable: true },  
    { headerName: 'Lotwise', field: 'lotwise', filter: true, sorting: true, resizable: true },  
  ];

getExchangeList() {
  this._masterSecondService.getExchangeList().subscribe((results) => {
       this.exchangeList = results;       
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
    if (params.event.target.dataset.action == "edit")
    {
      this.openExchangeDialog(params.data.id);
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
          this._masterSecondService.deleteExchange(params.data.id).subscribe((res) => {
            this.getExchangeList();
          });
        }
      });


    }
  }

  public openExchangeDialog(user) {
      let dialogRef = this.dialog.open(AddExchangeComponent, {
        data: { id:user }
      });
    
      dialogRef.afterClosed().subscribe(user => {
        this.getExchangeList();
        if (user) {
          /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
        }
      });
  } 
}
