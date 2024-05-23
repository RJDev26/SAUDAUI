import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSaudaComponent } from './sauda-dialog/add-sauda.component';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from '../master.service';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { CommonUtility } from '../../../shared/common-utility';
import { ImportDialogComponent } from './import-dialog/import-dialog.component';

@Component({
    selector: 'app-blank',
    templateUrl: './sauda.component.html',
    styleUrls: ['./sauda.component.scss']
})

export class SaudaComponent implements OnInit {

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
  constructor(public appSettings: AppSettings,  public dialog: MatDialog, private _masterService: MasterService) {
    this.settings = this.appSettings.settings;

  }

  ngOnInit() {
    this.getList();
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
      maxWidth: 110, resizable: true, filter: false
    },
    { headerName: 'Item', field: 'itemName', filter: true, sorting: true, resizable: true },
    { headerName: 'SaudaCode', field: 'saudaCode', filter: true, sorting: true, resizable: true },
    { headerName: 'Maturity', field: 'maturityDate', filter: true, sorting: true, resizable: true },
    { headerName: 'InsType', field: 'insName', filter: true, sorting: true, resizable: true },
    { headerName: 'OptionType', field: 'optionType', filter: true, sorting: true, resizable: true },
    { headerName: 'StrikePrice', field: 'strikePrice', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.strikePrice), type: 'rightAligned' },
    { headerName: 'FirstTradingDate', field: 'firstTradingDt', filter: true, sorting: true, resizable: true },
    { headerName: 'LastTradingDate', field: 'lastTradingDt', filter: true, sorting: true, resizable: true }

  ];

  onActivate(event) {
    console.log('Activate Event', event);
  }

  getList() {
    this._masterService.getSaudaList().subscribe((results) => {
      this.itemList = results;

    });
  }

  public importContractMaster(){
    let dialogRef = this.dialog.open(ImportDialogComponent);

    dialogRef.afterClosed().subscribe(user => {
      this.getList();
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
      this.openDialog(params.data.id);

    }
    if (params.event.target.dataset.action == "delete") {
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
          this._masterService.deleteSauda(params.data.id).subscribe((res) => {
            this.getList();
          });
        }
      });


    }
  }

  public openDialog(user) {
    let dialogRef = this.dialog.open(AddSaudaComponent, {
      data: { id: user }
    });

    dialogRef.afterClosed().subscribe(user => {

      this.getList();
      if (user) {

        /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
      }
    });
  }


}
