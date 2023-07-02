import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { AddCompanyComponent } from "./company-dialog/add-company.component";
import { AppSettings } from "src/app/app.settings";
import { MasterService } from "../master.service";
import { Settings } from "src/app/app.settings.model";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppService } from "src/app/service/app.service";
import { ConfirmationDialog } from "../../Dialog/confirmation-dialog/confirmation-dialog.component";

@Component({
    selector: 'app-blank',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})

export class CompanyComponent implements OnInit {
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
  companyList: any;
  constructor(public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.getcompanyList();
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
    { headerName: 'Address', field: 'address', filter: true, sorting: true, resizable: true },
    { headerName: 'City', field: 'city', filter: true, sorting: true, resizable: true },
    { headerName: 'Pin', field: 'pin', filter: true, sorting: true, resizable: true },    
    { headerName: 'State', field: 'state', filter: true, sorting: true, resizable: true },
    { headerName: 'Phone', field: 'phone', filter: true, sorting: true, resizable: true },
    { headerName: 'Email', field: 'email', filter: true, sorting: true, resizable: true },
    { headerName: 'Financial Begin Date', field: 'finBeginDt', filter: true, sorting: true, resizable: true },
    { headerName: 'Financial End Date', field: 'finEndDt', filter: true, sorting: true, resizable: true },
    { headerName: 'Unique customer id', field: 'uniqcusomerId', filter: true, sorting: true, resizable: true }
  ];

  getcompanyList() {
    this._appService.getCompany().subscribe((results) => {
     this.companyList = results;       
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

  onGridClick(params: any) {
    if (params.event.target.dataset.action == "edit")
    {
      this.openCompanyDialog(params.data.id);
    }
  }

  public openCompanyDialog(user) {
    let dialogRef = this.dialog.open(AddCompanyComponent, {
      data: { id:user }
    });
  
    dialogRef.afterClosed().subscribe(user => {
      this.getcompanyList();
      if (user) {
        /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
      }
    });
  }
}