import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/service/app.service';
import { MasterService } from '../master.service';
import { Settings } from 'src/app/app.settings.model';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { AddBranchAccountComponent } from './add-branch-account/add-branch-account.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  public settings: Settings;
  slabList: any[];
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
    { headerName: 'Head',  field: 'headId', filter: true, sorting: true, resizable: true },
    { headerName: 'Contra Id',  field: 'contraAcId', filter: true, sorting: true, resizable: true },
    { headerName: 'Chat Id',  field: 'chatId', filter: true, sorting: true, resizable: true }
  ];
  constructor(public snackBar: MatSnackBar, public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.getLoadData();
  }

  getLoadData() {
    this._masterService.getBranchList().subscribe((response) => { this.slabList = response });
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

public openAccountDialog(selectedBranchId) {
  let dialogRef = this.dialog.open(AddBranchAccountComponent, {
      data: { 
          branchID: selectedBranchId,
      }
  });

  dialogRef.afterClosed().subscribe(user => {
    this.getLoadData();
  });
}

onGridReady(event) { }

showToaster(message, isError = false) {
  const panelClass = isError ? ['red-text'] : undefined;
  const label = isError ? "Error" : "Success";
  const time = isError? 6000 : 3000;

  this.snackBar.open(message, label, {
    duration: time,
    panelClass: panelClass,
  });
}

onGridClick(params: any) {
  if (params.event.target.dataset.action == "edit")
  {
    this.openAccountDialog(params.data.id);

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
        this._masterService.deleteBranch(params.data.id).subscribe((res) => {
          if(res.isSuccess){
            this.getLoadData();
            this.showToaster(res.message);
          } else {
            this.showToaster(res.message, true);
          }
        });
      }
    });


  }
}

}
