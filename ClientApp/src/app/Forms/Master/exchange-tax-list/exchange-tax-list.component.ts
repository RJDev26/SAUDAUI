import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { MasterService } from '../master.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-exchange-tax-list',
  templateUrl: './exchange-tax-list.component.html',
  styleUrls: ['./exchange-tax-list.component.scss']
})

export class ExchangeTaxListComponent implements OnInit {
    @ViewChild(DatatableComponent) table: DatatableComponent;

    gridAPI: any
    exchangeTaxList: any;

    public settings: Settings;
    constructor(public appSettings: AppSettings, public snackBar: MatSnackBar, private _masterService: MasterService, public dialog: MatDialog) {
        this.settings = this.appSettings.settings;
    }

    onGridReady(params) {
        this.gridAPI = params.api;
    }

    columnDefs = [
        {
          headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 110,
          maxWidth: 110, resizable: false, filter: false
        },
        { headerName: 'Ex Name', field: 'exname', filter: true, sorting: true, resizable: true },
        { headerName: 'Exchange Code', field: 'exchangecode', filter: true, sorting: true, resizable: true },
        { headerName: 'From Date', field: 'fromdt', filter: true, sorting: true, resizable: true },
        { headerName: 'To Date', field: 'todt', filter: true, sorting: true, resizable: true },
        { headerName: 'Service Tax', field: 'servicetax', filter: true, sorting: true, resizable: true },
        { headerName: 'Turnover Tax', field: 'turnovertax', filter: true, sorting: true, resizable: true },           
        { headerName: 'Stamp Tax', field: 'stampdtax', filter: true, sorting: true, resizable: true },
        { headerName: 'Stamp Rate', field: 'stmprate', filter: true, sorting: true, resizable: true },
        { headerName: 'CGST Rate', field: 'cgstrate', filter: true, sorting: true, resizable: true },
        { headerName: 'SGST Rate', field: 'sgstrate', filter: true, sorting: true, resizable: true },
        { headerName: 'IGST Rate', field: 'igstrate', filter: true, sorting: true, resizable: true },
        { headerName: 'Utt Rate', field: 'uttrate', filter: true, sorting: true, resizable: true },
        { headerName: 'Sebi Tax Opt', field: 'sebitaxopt', filter: true, sorting: true, resizable: true },
        { headerName: 'STC Tax', field: 'stctax', filter: true, sorting: true, resizable: true },
        { headerName: 'Ex Id', field: 'exid', filter: true, sorting: true, resizable: true },
        { headerName: 'Comp Code', field: 'compcode', filter: true, sorting: true, resizable: true },
        { headerName: 'Opt Turnover Tax', field: 'optTurnovertax', filter: true, sorting: true, resizable: true },
        { headerName: 'SBC Tax', field: 'sbcTax', filter: true, sorting: true, resizable: true },
        { headerName: 'Cigrate', field: 'clgrate', filter: true, sorting: true, resizable: true },
        { headerName: 'Opt Stamp Tax', field: 'optStampdtax', filter: true, sorting: true, resizable: true },
        { headerName: 'Eq Stamp Tax', field: 'eqStampdtax', filter: true, sorting: true, resizable: true },
        { headerName: 'Eq STT', field: 'eqStt', filter: true, sorting: true, resizable: true },
    ];

    agGridOptions: any = {
        defaultColDef: {
          filter: true,
          sortable: true,
          wraptext: true,
          resizable: true,        
        },
        suppressRowHoverHighlight: true,    
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

    getExchangeTaxList() {
        this._masterService.getExchangeTaxList().subscribe((results) => {
          debugger
          if (results.isSuccess) {
            this.exchangeTaxList = results.data;
          }
          else { this.showToaster(results.message, true); }
        });
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

    ngOnInit() {
        this.getExchangeTaxList()
    }
}