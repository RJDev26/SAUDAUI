import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AppSettings } from 'src/app/app.settings';
import { MasterService } from '../master.service';
import { MatDialog } from '@angular/material/dialog';
import { Settings } from 'src/app/app.settings.model';
import { AddAccountHeadComponent } from './add-account-head/add-account-head.component';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-branch',
    templateUrl: './account-head.component.html',
    styleUrls: ['./account-head.component.scss']
})

export class AccountHeadComponent implements OnInit {

    @ViewChild(DatatableComponent) table: DatatableComponent;
    accountHeadList: any;
    public settings: Settings;
    agGridOptions: any = {
      defaultColDef: {
        filter: true,
         flex:1,
        sortable: true,
        wraptext: true,
        resizable: true,
        minWidth: 100,
      
      },
      suppressRowHoverHighlight: true,
    }
    
    columnDefs = [
        {
          headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true, filter: false
        },
        { headerName: 'Name',  field: 'name', filter: true, sorting: true, resizable: true },
    ];

    constructor(public snackBar: MatSnackBar, public appSettings: AppSettings, private _masterService: MasterService, public dialog: MatDialog) {
      this.settings = this.appSettings.settings;
    }

    ngOnInit(): void {
      this.getAccountHeadList();
    }

    getAccountHeadList() {
      this._masterService.getAccountHead().subscribe((results) => {
        this.accountHeadList = results;
      });
    }

    public actionCellRenderer(params: any) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell: any) => {
          return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit</button>
                          <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;    
        return eGui;
    }

    public openAccountHeadDialog(selectedAccountHeadId) {
      let dialogRef = this.dialog.open(AddAccountHeadComponent, {
          data: { 
            branchID: selectedAccountHeadId,
          }
      });
    
      dialogRef.afterClosed().subscribe(user => {
        this.getAccountHeadList();
      });
    }
    onGridReady(event) { }    

    onGridClick(params: any) {
      if (params.event.target.dataset.action == "edit")
      {
        this.openAccountHeadDialog(params.data.id);
    
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
            this._masterService.deleteAcHead(params.data.id).subscribe((res) => {
              this.getAccountHeadList();
              this.showToaster(res.message, !res.isSuccess)
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
}