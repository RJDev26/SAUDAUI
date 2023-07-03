import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AppService } from '../../../service/app.service';
import { CommonUtility } from '../../../shared/common-utility';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { MasterService } from '../master.service';
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
  constructor(public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService) {
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
    { headerName: 'Code', field: 'itemCode', filter: true, sorting: true, resizable: true },
    { headerName: 'Item', field: 'itemName', filter: true, sorting: true, resizable: true },
    { headerName: 'ExSymbol', field: 'exchangeSymbol', filter: true, sorting: true, resizable: true },
    { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },    
    { headerName: 'LotSize', field: 'lotSizeValueMultiplier', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.lotSizeValueMultiplier), type: 'rightAligned' },
    { headerName: 'IsinCode', field: 'isinCode', filter: true, sorting: true, resizable: true },
    { headerName: 'ApplyCtt', field: 'applyCtt', filter: true, sorting: true, resizable: true },
    { headerName: 'ApplyRiskManagementFees', field: 'applyRiskManagementFees', filter: true, sorting: true, resizable: true }

  ];

  onActivate(event) {
    console.log('Activate Event', event);
  }

  getitemList() {
    this._appService.getitems().subscribe((results) => {
     this.itemList = results;
     
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
      this.openUserDialog(params.data.id);

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
          this._masterService.deleteItem(params.data.id).subscribe((res) => {
            this.getitemList();
          });
        }
      });


    }
  }

  public openUserDialog(user) {
    let dialogRef = this.dialog.open(AddItemComponent, {
      data: { id:user }
    });

    dialogRef.afterClosed().subscribe(user => {

      this.getitemList();
      if (user)
      {
      
       /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
      }
    });
  }

}
