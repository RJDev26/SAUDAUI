import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { AppService } from "src/app/service/app.service";
import { MasterService } from "../master.service";
import { AddTaxComponent } from "./tax-dialog/add-tax-master.component";
import { ConfirmationDialog } from "../../Dialog/confirmation-dialog/confirmation-dialog.component";
import { MasterSecondService } from "../master-second.service";

@Component({
    selector: 'app-blank',
    templateUrl: './tax-master.component.html',
    styleUrls: ['./tax-master.component.scss']
})

export class TaxComponent implements OnInit {
    @ViewChild(DatatableComponent) table: DatatableComponent;
    editing = {};
    rows = [];
    temp = [];
    selected = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;
   
    public settings: Settings;
    taxList: any;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog, private _masterService: MasterService, private _masterSecondService: MasterSecondService) {
        this.settings = this.appSettings.settings;
      }

    ngOnInit() {
        this.gettaxList();
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
        { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
      { headerName: 'AppliedOn', field: 'applyOnName', filter: true, sorting: true, resizable: true }  
    ];

  gettaxList() {
    this._masterSecondService.getTax().subscribe((results) => {
         this.taxList = results;       
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
        this.openTaxDialog(params.data.id);
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
            this._masterSecondService.deleteTax(params.data.id).subscribe((res) => {
              this.gettaxList();
            });
          }
        });
  
  
      }
    }

    public openTaxDialog(user) {
        let dialogRef = this.dialog.open(AddTaxComponent, {
          data: { id:user }
        });
      
        dialogRef.afterClosed().subscribe(user => {
          this.gettaxList();
          if (user) {
            /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
          }
        });
    } 
}
