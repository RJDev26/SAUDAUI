import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { AppSettings } from 'src/app/app.settings';
import { MasterService } from '../master.service';
import { MatDialog } from '@angular/material/dialog';
import { Settings } from 'src/app/app.settings.model';
import { AddAccountHeadComponent } from './add-account-head/add-account-head.component';

@Component({
    selector: 'app-branch',
    templateUrl: './account-head.component.html',
    styleUrls: ['./account-head.component.scss']
})

export class AccountHeadComponent implements OnInit {

    @ViewChild(DatatableComponent) table: DatatableComponent;
    accountHeadList: any;
    public settings: Settings;
    constructor(public appSettings: AppSettings, private _masterService: MasterService, public dialog: MatDialog) {
        this.settings = this.appSettings.settings;
    }
    
    columnDefs = [
        {
          headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
        },
        { headerName: 'Name',  field: 'name', filter: true, sorting: true, resizable: true },
    ];

    agGridOptions: any = {
        defaultColDef: {
          filter: true,
          flex: 1,
          sortable: true,
          wraptext: true,
          resizable: true
        }
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
    
      // dialogRef.afterClosed().subscribe(user => {
      //   this.getLoadData();
      // });
    }
    onGridReady(event) { }
    ngOnInit(): void {
        this.getAccountHeadList();
    }

    getAccountHeadList() {
        this._masterService.getAccountHead().subscribe((results) => {
          this.accountHeadList = results;
        });
    }
}