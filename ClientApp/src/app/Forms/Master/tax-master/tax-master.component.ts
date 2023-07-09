import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { AppService } from "src/app/service/app.service";
import { MasterService } from "../master.service";
import { AddTaxComponent } from "./tax-dialog/add-tax-master.component";

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
    constructor(public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService) {
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
        { headerName: 'AppliedOn', field: 'appliedOn', filter: true, sorting: true, resizable: true },
        { headerName: 'type', field: 'Type', filter: true, sorting: true, resizable: true }    
    ];

    gettaxList() {
        this._appService.getTax().subscribe((results) => {
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