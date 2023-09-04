import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatatableComponent } from '@swimlane/ngx-datatable';

import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { CommonUtility } from '../../../shared/common-utility';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { MasterService } from '../master.service';
import { AddAccountComponent } from './account-dialog/add-account.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blank',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;
  editing = {};
  rows = [];
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
 
  public settings: Settings;
  accountList: any;
  constructor(public appSettings: AppSettings, public snackBar: MatSnackBar, private _masterService: MasterService, public dialog: MatDialog) {
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
      headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 60,
      maxWidth: 80, resizable: false, filter: false
    },
    { headerName: 'Code', field: 'shortCode', filter: true, sorting: true, resizable: true },
    { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
    { headerName: 'Opbal', field: 'openingBal', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.openingBal), type: 'rightAligned' },
    { headerName: 'PhoneNo', field: 'PhoneNo', filter: true, sorting: true, resizable: true },
    { headerName: 'Head', field: 'acHead', filter: true, sorting: true, resizable: true },
    { headerName: 'Group', field: 'acGroup', filter: true, sorting: true, resizable: true },
    { headerName: 'Email', field: 'email', filter: true, sorting: true, resizable: true },
    { headerName: 'City', field: 'city', filter: true, sorting: true, resizable: true },
    { headerName: 'Address', field: 'address', filter: true, sorting: true, resizable: true }
  ];

  onActivate(event) {
    console.log('Activate Event', event);
  }

  getAccountList() {
    this._masterService.getAccounts().subscribe((results) => {
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
    eGui.innerHTML = `<button class="material-icons action-button-edit " data-action="edit">edit </button>
                      <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;

    return eGui;
  }

  onGridClick(params: any)
  {
    if (params.event.target.dataset.action == "edit")
    { 
      this._masterService.getAccountById(params.data.id).subscribe((res)=>{
        console.log(res);
        this.openUserDialog(res);
      });
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
            this._masterService.deleteAccountById(params.data.id).subscribe((res) => {
              this.getAccountList();
              if(res.isSuccess){
                this.showToaster(res.message);
              } else {
                this.showToaster(res.message, true);
              }
            });
          }
        });


      }
      

  
   
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError? 6000 : 3000;
  
    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass,
    });
  }

  public openUserDialog(user)
  {
    let dialogRef = this.dialog.open(AddAccountComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(user => {
      this.getAccountList();
      if (user) {
       /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
      }
    });
  }

}
