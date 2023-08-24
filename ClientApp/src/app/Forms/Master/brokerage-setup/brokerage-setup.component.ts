import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { AppService } from 'src/app/service/app.service';
import { AddSetupDetailsComponent } from './add-setup-details/add-setup-details.component';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { CommonUtility } from 'src/app/shared/common-utility';
import { forkJoin, map } from 'rxjs';
import { MasterSecondService } from '../master-second.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { LockBrokerageComponent } from './lock-brokerage/lock-brokerage.component';
import { ViewItemGroupComponent } from './view-item-group/view-item-group.component';

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
  fromDt: any;
  toDt: any;
  accountList: any[];
  branchList: any[];
  instrumentList: any[];
  instrumentType: any;
  itemGroupIds: any;
  filteredItemGroup: any;
  itemGroupIdList: any;

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
    if(this.areRequiredValuesSelected){
      var accountIds = this.accountIds.filter((val)=> val != -1);
      var req = {
        "itemGroupId": this.itemGroupIds,
        "accounts": accountIds,
        "fromDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
        "toDate": this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
        "instrumentType": this.instrumentType
      };
      this._appService.getBrokerageSetupList(req).subscribe((results) => {
        this.searchedData = req;
       this.brokeragesetupList = results.data;       
      });
    }
  }

  async getBrokerageAddValidation(): Promise<string> {
    const accountIds = this.accountIds.filter((val) => val != "-1");
    const req = {
      itemGroupId: this.itemGroupIds,
      accounts: accountIds,
      fromDate: this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
      toDate: this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
      instrumentType: this.instrumentType,
    };
  
    try {
      const results = await this._appService.getBrokerageAddValidation(req).toPromise();
  
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
    return this.accountIds && this.itemGroupIds && this.instrumentType && this.fromDt && this.toDt;
  }

  fetchDropdownData() {
    forkJoin([
      this._masterService.getBranchDDLList(), 
      this._masterService.getInstrumentList(),
      this._masterService.getAccount(),
      this._masterSecondService.getItemGroupNameList()
    ]).pipe(map(response => {
      this.branchList = response[0];
      this.filteredProviders = response[0];
      this.instrumentList = response[1];
      this.instrumentList = response[1];
      this.accountList = response[2];
      this.filteredAccountList = response[2];
      this.itemGroupIdList = response[3];
      this.filteredItemGroup = response[3];
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

  onInputItemGroupChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredItemGroup = this.itemGroupIdList.filter((data) => {
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
      const dialogRef = this.dialog.open(AddSetupDetailsComponent, {
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
    } else if(isValid !== '' && event === 'lock'){
      const dialogRef = this.dialog.open(LockBrokerageComponent, {
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
    const dialogRef = this.dialog.open(AddSetupDetailsComponent, {
      data: {
        selectedSlabId: null,
        fromDt: this.fromDt,
        toDt: this.toDt,
        branchIds: this.branchIds,
        accountIds: this.accountIds,
        itemGroupIds: this.itemGroupIds,
        instrumentType: this.instrumentType,
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
    const dialogRef = this.dialog.open(AddSetupDetailsComponent, {
      data: {
        selectedSlabId: null,
        fromDt: this.searchedData.fromDate,
        toDt: this.searchedData.toDate,
        branchIds: this.searchedData.branchIds,
        accountIds: this.searchedData.accounts,
        itemGroupIds: this.searchedData.itemGroupId,
        instrumentType: this.searchedData.instrumentType,
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
        this._masterService.deleteBrokerageSetup(params.data.id).subscribe((res) => {
          this.getBrokerageSetupList();
        });
      }
    });


  }
}

viewAllItemGroups(){
  let dialogRef = this.dialog.open(ViewItemGroupComponent, {
    data: { id:this.itemGroupIds }
  });

  dialogRef.afterClosed().subscribe(user => {
   
  });
}

}
