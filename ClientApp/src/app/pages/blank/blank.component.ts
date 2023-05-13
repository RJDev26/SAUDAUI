import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  editing = {};
  rows = [];
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  columns = [
    { prop: 'Name' },
    { name: 'Mobile' },
    { name: 'email' }
  ];
  public settings: Settings;
    accountList: any;
  constructor(public appSettings: AppSettings, private _appService: AppService) {
    this.settings = this.appSettings.settings;
  
  }

  ngOnInit() {
    this.getAccountList();
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
      maxWidth: 110, resizable: true },
    { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
    { headerName: 'Opbal', field: 'opbal', filter: true, sorting: true, resizable: true },
    { headerName: 'Mobile', field: 'mobile', filter: true, sorting: true, resizable: true }
  ];

  onActivate(event) {
    console.log('Activate Event', event);
  }

  getAccountList() {
    this._appService.getAccounts().subscribe((results) => {
      debugger
      this.accountList = results;
      console.log(this.accountList);
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

  onGridClick(params:any)
  {
    debugger
    if (params.event.target.dataset.action == "edit") { alert('edit clicked'); }
    if (params.event.target.dataset.action == "delete") { alert('delete clicked'); }
  }
}
