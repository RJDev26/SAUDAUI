import { Component, OnInit, Inject } from '@angular/core';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { AddSlabComponent } from './add-slab/add-slab.component';

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
        { field: 'applyOn', headerName: 'ApplyOn', filter: true, sorting: true, resizable: true },
        { field: 'applyOnQty', headerName: 'ApplyOnQty', filter: true, sorting: true, resizable: true },
        { field: 'intradayBrokRate', headerName: 'IntradayBrokRate', filter: true, sorting: true, resizable: true },
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
        this._masterService.getSlabDDL().subscribe((response)=>{ this.dropdownData = response});
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

    public openAddSlabDialog(user) {
        let dialogRef = this.dialog.open(AddSlabComponent, {
            data: { id:user }
        });

        dialogRef.afterClosed().subscribe(user => {
        });
    }
}