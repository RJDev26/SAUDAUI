import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { AddTransporterComponent } from "./transporter-dialog/add-transporter.component"


@Component({
  selector: 'app-blank',
  templateUrl: './transporter.component.html',
  styleUrls: ['./transporter.component.scss']
})
export class TransporterComponent implements OnInit { 

@ViewChild(DatatableComponent) table: DatatableComponent;
  editing = {};
  rows = [];
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  public settings: Settings;
  transporterList: any;
  constructor(public appSettings: AppSettings, private _masterService: MasterService, public dialog: MatDialog) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.getTransporterList();
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
    { headerName: 'Phone', field: 'phone', filter: true, sorting: true, resizable: true },
    { headerName: 'Address', field: 'address', filter: true, sorting: true, resizable: true },
    { headerName: 'City', field: 'city', filter: true, sorting: true, resizable: true },
    { headerName: 'Refrence', field: 'refrence', filter: true, sorting: true, resizable: true },
    { headerName: 'Email', field: 'email', filter: true, sorting: true, resizable: true }
  ];

  getTransporterList() {
    this._masterService.getTransporter().subscribe((results) => {
      this.transporterList = results;
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
    if (params.event.target.dataset.action == "edit") { 
      this._masterService.getAccountById(params.data.id).subscribe((res)=>{
        this.openTransporterDialog(res);
      });
     }
    if (params.event.target.dataset.action == "delete") { 
      this._masterService.deleteAccountById(params.data.id).subscribe((res)=>{
        this.getTransporterList();
      });
     }
  }

  public openTransporterDialog(user) {
    let dialogRef = this.dialog.open(AddTransporterComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(user => {
      this.getTransporterList();
      if (user) {
       /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
      }
    });
  }

}