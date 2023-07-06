import { Component, OnInit, Inject } from '@angular/core';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { AddSlabComponent } from './add-slab/add-slab.component';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { AddSlabDetailsComponent } from './add-slab-details/add-slab-details.component';
import { CommonUtility } from 'src/app/shared/common-utility';

@Component({
    selector: 'app-blank',
    templateUrl: './brokerage-slab.component.html',
    styleUrls: ['./brokerage-slab.component.scss']
})

export class BrokerageSlabComponent implements OnInit {
    public settings: Settings
    slabId: number;
    slabList: any[];
    dropdownData: any[];
    agGridOptions: any = {
        defaultColDef: {
          filter: true,
          flex: 1,
          sortable: true,
          wraptext: true,
          resizable: true
        }
      };
    columnDefs = [
        {
            headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
            maxWidth: 110, resizable: true
        },
        { field: 'applyOnName', headerName: 'Apply On', filter: true, sorting: true, resizable: true },
        { field: 'applyOnQtyName', headerName: 'ApplyOnQty', filter: true, sorting: true, resizable: true },
        { field: 'intradayBrokRate', headerName: 'IntradayBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.intradayBrokRate), type: 'rightAligned'  },
        { field: 'deliveryBrokRate', headerName: 'DeliveryBroRate', filter: true, sorting: true, resizable: true },
        { field: 'higherSideOnly', headerName: 'HigherSideOnly', cellRenderer: 'booleanCellRenderer', filter: true, sorting: true, resizable: true },
        { field: 'intradaySingleSideOnly', headerName: 'IntradaySingleSide', cellRenderer: 'booleanCellRenderer', filter: true, sorting: true, resizable: true },
        { field: 'instrumentType', headerName: 'InstrumentType', filter: true, sorting: true, resizable: true },
        { field: 'exchange', headerName: 'Exchange', filter: true, sorting: true, resizable: true },
        { field: 'item', headerName: 'Item', filter: true, sorting: true, resizable: true },
        { field: 'rateRange1', headerName: 'Range1', filter: true, sorting: true, resizable: true },
        { field: 'rateRange2', headerName: 'Range2', filter: true, sorting: true, resizable: true }
      ];
      
    constructor(public appSettings: AppSettings, private _masterService: MasterService, public dialog: MatDialog) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.fetchDropdownData();
    }
    
    fetchDropdownData() {
        this._masterService.getSlabDDL().subscribe((response)=>{ 
            this.dropdownData = response;
            this.slabId = response[0].id;
            this.onDropdownChange();
        });
    }

    onDropdownChange() {
        if (this.slabId) {
            this._masterService.getSlabList(this.slabId).subscribe(
            response => {
                this.slabList = response;
            }
            );
        }
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

    public openAddSlabDialog() {
        let dialogRef = this.dialog.open(AddSlabComponent);
        dialogRef.afterClosed().subscribe(user => {
            this.fetchDropdownData();
        });
    }

    public openSlabDetailsDialog(selectedSlabId) {
        let dialogRef = this.dialog.open(AddSlabDetailsComponent, {
            data: { 
                selectedSlabId: selectedSlabId,
                slabId: this.slabId
            }
        });

        dialogRef.afterClosed().subscribe(user => {
            this._masterService.getSlabList(this.slabId).subscribe(
                response => {
                    this.slabList = response;
                }
                );
        });
    }

    public openDeleteSlabDialog() {
        const dialogRef = this.dialog.open(ConfirmationDialog, {
            data: {
              message: 'Do you really want to delete this Slab?',
              buttonText: {
                ok: 'Yes',
                cancel: 'No'
              }
            }
          });
    
          dialogRef.afterClosed().subscribe((confirmed: boolean) => {
            if (confirmed) {
              this._masterService.deleteSlabMaster(this.slabId).subscribe((res) => {
                this.fetchDropdownData();
              });
            }
          });
    }

    onGridClick(params: any) {
        if (params.event.target.dataset.action == "edit")
        {
          this.openSlabDetailsDialog(params.data.id);
    
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
              this._masterService.deleteSlabDetail(params.data.id).subscribe((res) => {
                this.fetchDropdownData();
              });
            }
          });
    
    
        }
      }
      
}
