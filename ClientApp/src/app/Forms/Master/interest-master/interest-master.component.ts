import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { AppService } from "src/app/service/app.service";
import { MasterService } from "../master.service";
import { ConfirmationDialog } from "../../Dialog/confirmation-dialog/confirmation-dialog.component";
import { MasterSecondService } from "../master-second.service";
import { AddInterestMasterComponent } from "./add-interest-master/add-interest-master.component";

@Component({
  selector: 'app-interest-master',
  templateUrl: './interest-master.component.html',
  styleUrls: ['./interest-master.component.scss']
})
export class InterestMasterComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;
  editing = {};
  rows = [];
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
 
  public settings: Settings;
  interestMasterList: any;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog, private _masterService: MasterService, private _masterSecondService: MasterSecondService) {
      this.settings = this.appSettings.settings;
    }

  ngOnInit() {
      this.getInterestList();
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
      { headerName: 'Account Name', field: 'acName', filter: true, sorting: true, resizable: true },
    { headerName: 'ApplyOn', field: 'applyOnName', filter: true, sorting: true, resizable: true },  
    { headerName: 'From Date', field: 'fromDtFormat', filter: true, sorting: true, resizable: true },  
    { headerName: 'To Date', field: 'toDtFormat', filter: true, sorting: true, resizable: true },  
    { headerName: 'Type', field: 'typeName', filter: true, sorting: true, resizable: true },  
    { headerName: 'Post Vouchers', field: 'postVouchersName', filter: true, sorting: true, resizable: true },  
    { headerName: 'Int Rate', field: 'intRate', filter: true, sorting: true, resizable: true },  
    { headerName: 'Year Days', field: 'yearDays', filter: true, sorting: true, resizable: true },  
  ];

getInterestList() {
  this._masterSecondService.getInterestList().subscribe((results) => {
       this.interestMasterList = results;       
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
    if (params.event.target.dataset.action == "edit")
    {
      this.openAddIMDialog(params.data.id);
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
          this._masterSecondService.deleteInterest(params.data.id).subscribe((res) => {
            this.getInterestList();
          });
        }
      });


    }
  }

  public openAddIMDialog(user) {
      let dialogRef = this.dialog.open(AddInterestMasterComponent, {
        data: { id:user }
      });
    
      dialogRef.afterClosed().subscribe(user => {
        this.getInterestList();
        if (user) {
          /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
        }
      });
  } 
}
