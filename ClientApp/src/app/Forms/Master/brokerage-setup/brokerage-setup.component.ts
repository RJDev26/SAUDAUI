import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { Item } from '../item/item.model';
import parseJSON from 'date-fns/esm/parseJSON';
import { AppService } from 'src/app/service/app.service';
import { AddSetupDetailsComponent } from './add-setup-details/add-setup-details.component';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { CommonUtility } from 'src/app/shared/common-utility';

@Component({
  selector: 'app-brokerage-setup',
    templateUrl: './brokerage-setup.component.html',
  styleUrls: ['./brokerage-setup.component.scss']
})

export class BrokerageSetupComponent implements OnInit {
  @ViewChild('select') select: MatSelect;
  @ViewChild('selectAccount') selectAccount: MatSelect;
  public settings: Settings;
  slabId: number;
  slabList: any[];
  accountList: any[];
  branchList: any[];
  branchIds: Array<string>;
  accountIds: any;
  filteredProviders: any[];
  filteredAccountList: any[];
  brokeragesetupList: any;
  branchAllSellected: boolean = false;

  constructor(public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.fetchDropdownData();
    this.getBrokerageSetupList();
  }

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
   
    //suppressSizeToFit: true,
    
  }
  onGridReady(event) { }

  columnDefs = [
    {
      headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
    },
    { headerName: 'ApplyOn',  field: 'applyOnName', filter: true, sorting: true, resizable: true },
    { headerName: 'Apply OnQty',  field: 'applyOnQtyName', filter: true, sorting: true, resizable: true },
    { field: 'Intraday BrokRate',   headerName: 'IntradayBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.intradayBrokRate), type: 'rightAligned'  },
    { headerName: 'Delivery BrokRate', field: 'deliveryBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.deliveryBrokRate), type: 'rightAligned' },    
    /*{ headerName: 'HigherSide Only', minWidth: 120, maxWidth: 120, field: 'higherSideOnly', filter: true, sorting: true, resizable: true },*/
    { headerName: 'Instrument',   field: 'instrumentType', filter: true, sorting: true, resizable: true },
    { headerName: 'RateRange1', field: 'rateRange1', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.rateRange1), type: 'rightAligned' },
    { headerName: 'RateRange2', field: 'rateRange2', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.rateRange2), type: 'rightAligned' },
    { headerName: 'Exchange',  field: 'exchange', filter: true, sorting: true, resizable: true },
    { headerName: 'Item',  field: 'item', filter: true, sorting: true, resizable: true },
/*    { headerName: 'IntradaySingleSideOnly', field: 'intradaySingleSideOnly', filter: true, sorting: true, resizable: true },*/
    { headerName: 'FromDT', field: 'fromDT',   filter: true, sorting: true, resizable: true },
    { headerName: 'ToDT', field: 'toDT',  filter: true, sorting: true, resizable: true },
    
  ];

  getBrokerageSetupList() {
    this._appService.getBrokerageSetupList().subscribe((results) => {
     this.brokeragesetupList = results;       
    });
  }

  fetchDropdownData() {
    this._masterService.getSlabDDL().subscribe((response) => { this.slabList = response });
    this._masterService.getBranchDDLList().subscribe((response) => { 
      this.branchList = response;
      this.filteredProviders = this.branchList;
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

  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredProviders = this.branchList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onInputAccountListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredAccountList = this.accountList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  branchAllSelection()
  {
    this.branchAllSellected = true;
    var isAllChecked = this.select.options.first.selected;
    this.select.options.forEach(
      (item: MatOption, index) =>
      {
      
        if (isAllChecked) { item.select(); }
          else { item.deselect() }
          if(index === this.select.options.length -1){
            this.onBranchChange([], true);
          }
      }
     
    );
   
  }


  accountAllSelection()
  {
    var isAllChecked = this.selectAccount.options.first.selected;
    this.selectAccount.options.forEach(
      (item: MatOption) => {

        if (isAllChecked) { item.select(); }
        else { item.deselect() }
      }

    );

  }


  onKey(value) {
    this.branchList = this.search(value);
}


  search(value: string) {
  let filter = value.toLowerCase();
  return this.branchList.filter(option => option.toLowerCase().startsWith(filter));
}

  onBranchChange(event: any, isLastIndex?: boolean) {
    if(this.branchAllSellected && !isLastIndex){
      return;
    }
    if(this.branchIds.length < 2 && this.branchIds[0] == '-1'){
      return;
    }
    //event.source.options._results[1]._selected = true;
    //event.source.options._results[1]._active = true;
    if (this.branchIds) {
      this._masterService.getBranchAccounts(this.branchIds).subscribe(
        response => {
          this.accountList = response;
          this.filteredAccountList = this.accountList;
        }
      );
    }
  }

  applySlab(event: any)
  {
    const model = { SlabId: this.slabId, Accounts: this.accountIds }

    this._masterService.applySlab(model).subscribe(result => {
      console.log("result", result);
     
    }, err => {
      console.log(err);
    });

   


  }
  addBrokerage(event: any) { }

  public openSlabDetailsDialog(selectedSlabId) {
    let dialogRef = this.dialog.open(AddSetupDetailsComponent, {
        data: { 
            selectedSlabId: selectedSlabId,
        }
    });

    dialogRef.afterClosed().subscribe(user => {
      this.getBrokerageSetupList();
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
        this._masterService.deleteBrokerageSetup(params.data.id).subscribe((res) => {
          this.getBrokerageSetupList();
        });
      }
    });


  }
}

}
