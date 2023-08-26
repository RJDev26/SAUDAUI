import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { AppService } from 'src/app/service/app.service';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { CommonUtility } from 'src/app/shared/common-utility';
import { forkJoin, map } from 'rxjs';
import { MasterSecondService } from '../master-second.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { AddSharingSetupComponent } from './add-sharing-setup/add-sharing-setup.component';
import { LockSharingSetupComponent } from './lock-sharing-setup/lock-sharing-setup.component';

@Component({
  selector: 'app-sharing-setup',
  templateUrl: './sharing-setup.component.html',
  styleUrls: ['./sharing-setup.component.scss']
})
export class SharingSetupComponent implements OnInit {
  @ViewChild('select') select: MatSelect;
  @ViewChild('selectAccount') selectAccount: MatSelect;
  @ViewChild('selectExchange') selectExchange: MatSelect;
  public settings: Settings;
  slabId: number;
  slabList: any[];
  fromDt: any;
  toDt: any;
  accountList: any[];
  branchList: any[];
  instrumentType: any;
  itemGroupIds: any;
  filteredItemGroup: any;
  itemGroupIdList: any;
  exchangeList: any;
  exchangeIds: any;
  filteredExchangeList: any;

  searchedData: any;
  branchIds: Array<string>;
  accountIds: any[];
  filteredProviders: any[];
  filteredAccountList: any[];
  brokeragesetupList: any;
  branchAllSellected: boolean = false;

  constructor(private datePipe: DatePipe, public snackBar: MatSnackBar, public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService, private _masterSecondService: MasterSecondService) {
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
      headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true, filter: false
    },
    { headerName: 'ApplyOn',  field: 'applyOnName', filter: true, sorting: true, resizable: true },
    { headerName: 'Apply OnQty',  field: 'applyOnQtyName', filter: true, sorting: true, resizable: true },
    { field: 'Intraday BrokRate',   headerName: 'IntradayBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.intradayBrokRate) },
    { headerName: 'Delivery BrokRate', field: 'deliveryBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.deliveryBrokRate)},    
    /*{ headerName: 'HigherSide Only', minWidth: 120, maxWidth: 120, field: 'higherSideOnly', filter: true, sorting: true, resizable: true },*/
    { headerName: 'Instrument',   field: 'instrumentType', filter: true, sorting: true, resizable: true },
/*    { headerName: 'IntradaySingleSideOnly', field: 'intradaySingleSideOnly', filter: true, sorting: true, resizable: true },*/
    { headerName: 'FromDT', field: 'fromDT',   filter: true, sorting: true, resizable: true },
    { headerName: 'ToDT', field: 'toDT',  filter: true, sorting: true, resizable: true },
    
  ];

  getBrokerageSetupList() {
    if(this.areRequiredValuesSelected()){
      var accountIds = this.accountIds.filter((val)=> val != -1);
      var req = {
        "exId": 0,
        "exchange": this.exchangeIds.filter((val)=> val != -1),
        "branchId": this.branchIds,
        "accounts": accountIds,
        "fromDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
        "toDate": this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
      };
      this._masterSecondService.getSharingSetupList(req).subscribe((results) => {
        this.searchedData = req;
       this.brokeragesetupList = results.data;       
      });
    }
  }

  async getBrokerageAddValidation(): Promise<string> {
    const accountIds = this.accountIds.filter((val) => val != "-1");
    const req = {
      branchId : this.branchIds,
      itemGroupId: this.itemGroupIds,
      accounts: accountIds,
      exchange: this.exchangeIds.filter((val) => val != "-1"),
      fromDate: this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
      toDate: this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
      instrumentType: this.instrumentType,
    };
  
    try {
      const results = await this._appService.getSubBrokerageAddValidation(req).toPromise();
  
      if (results.message) {
        this.showToaster(results.message);
        this.searchedData = req;
        this.brokeragesetupList = results.data;
        return results.message;
      } else {
        return results.message;
      }
    } catch (error) {
      // Handle error here
      console.error('Error during validation:', error);
      return '';
    }
  }

  showToaster(message){
    this.snackBar.open(message, "Success", {
      duration: 3000,
    });
  }

  areRequiredValuesSelected(): boolean {
    return this.branchIds && this.accountIds && this.exchangeIds && this.fromDt && this.toDt;
  }

  fetchDropdownData() {
    forkJoin([
      this._masterService.getBranchDDLList(), 
      this._masterService.getAccount(),
      this._masterService.getExchangeName(),
    ]).pipe(map(response => {
      this.branchList = response[0];
      this.filteredProviders = response[0];
      // this.accountList = response[2];
      // this.filteredAccountList = response[2];
      this.exchangeList = response[2];
      this.filteredExchangeList = response[2];
    })).subscribe(res => {
      
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

  onInputExchangeChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredExchangeList = this.exchangeList.filter((data) => {
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

  exchangeAllSelection(){
    var isAllChecked = this.selectExchange.options.first.selected;
    this.selectExchange.options.forEach(
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
      this._masterService.getFilterBranchAccounts(this.branchIds).subscribe(
        response => {
          this.accountList = response;
          this.filteredAccountList = this.accountList;
        }
      );
    }
  }

  addBrokerage(event: any) { }

  public async openSlabDetailsDialog(event) {
    const isValid = await this.getBrokerageAddValidation();
    if (isValid == '' && event === 'add') {
      const dialogRef = this.dialog.open(AddSharingSetupComponent, {
        data: {
          selectedSlabId: null,
          fromDt: this.fromDt,
          toDt: this.toDt,
          branchIds: this.branchIds,
          accountIds: this.accountIds,
          exchangeIds: this.exchangeIds,
          isEditMode: 0
        },
      });
      dialogRef.afterClosed().subscribe((user) => {
        this.getBrokerageSetupList();
      });
    } else if(isValid !== '' && event === 'lock'){
      const dialogRef = this.dialog.open(LockSharingSetupComponent, {
        data: {
          selectedSlabId: null,
          fromDt: this.fromDt,
          toDt: this.toDt,
          branchIds: this.branchIds,
          accountIds: this.accountIds,
          itemGroupIds: this.itemGroupIds,
          instrumentType: this.instrumentType,
          isEditMode: 0
        },
      });
      dialogRef.afterClosed().subscribe((user) => {
        this.getBrokerageSetupList();
      });
    }
  }

  public openModifySetupDialog() {
    const dialogRef = this.dialog.open(AddSharingSetupComponent, {
      data: {
        selectedSlabId: null,
        fromDt: this.fromDt,
        toDt: this.toDt,
        branchIds: this.branchIds,
        accountIds: this.accountIds,
        exchangeIds: this.exchangeIds,
        isEditMode: 1
      },
    });

    dialogRef.afterClosed().subscribe((user) => {
      this.getBrokerageSetupList();
    });
  }

  onFromDateChange() {
    console.log("fromDt changed:", this.fromDt);
  }

  openEditBrokerageDetails(params) {
    const dialogRef = this.dialog.open(AddSharingSetupComponent, {
      data: {
        selectedSlabId: null,
        fromDt: this.searchedData.fromDate,
        toDt: this.searchedData.toDate,
        branchIds: this.searchedData.branchId,
        accountIds: this.searchedData.accounts,
        exchangeIds: this.searchedData.exchange,
        isEditMode: 2,
        editParms: params
      },
    });

    dialogRef.afterClosed().subscribe((user) => {
      this.getBrokerageSetupList();
    });
  }

onGridClick(params: any) {
  if (params.event.target.dataset.action == "edit")
  {
    this.openEditBrokerageDetails(params.data);

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
        this._masterService.deleteSubBrokerageSetup(params.data.id).subscribe((res) => {
          this.getBrokerageSetupList();
        });
      }
    });


  }
}


}
