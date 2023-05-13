import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AppService } from '../../../service/app.service';
import { AddItemComponent } from './item-dialog/add-item.component';

@Component({
  selector: 'app-blank',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

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
  itemList: any;
  constructor(public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog) {
    this.settings = this.appSettings.settings;

  }

  ngOnInit() {
    this.getitemList();
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
    { headerName: 'Item', field: 'itemDesc', filter: true, sorting: true, resizable: true },
    { headerName: 'HSNCode', field: 'hsnCode', filter: true, sorting: true, resizable: true },
    { headerName: 'OpeningQuantity', field: 'openingQty', filter: true, sorting: true, resizable: true },
    { headerName: 'SR', field: 'srvtaxapp', filter: true, sorting: true, resizable: true },    
    { headerName: 'Quantity', field: 'qtyType', filter: true, sorting: true, resizable: true },
    { headerName: 'Tax', field: 'taxAmt', filter: true, sorting: true, resizable: true }    
  ];

  onActivate(event) {
    console.log('Activate Event', event);
  }

  getitemList() {
    this._appService.getitems().subscribe((results) => {
     this.itemList = results;
     console.log(this.itemList);
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
    if (params.event.target.dataset.action == "edit") { alert('edit clicked'); }
    if (params.event.target.dataset.action == "delete") { alert('delete clicked'); }
  }

  public openUserDialog(user) {
    let dialogRef = this.dialog.open(AddItemComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(user => {
      if (user) {
       /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
      }
    });
  }

}
