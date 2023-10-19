import { Component, OnInit, OnDestroy, Inject, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { AppService } from 'src/app/service/app.service';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { CommonUtility } from 'src/app/shared/common-utility';
import { Subscription, forkJoin, map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MasterService } from '../../Master/master.service';
import { MasterSecondService } from '../../Master/master-second.service';
import { LogsService } from '../logs.service';
import { MissingTradeComponent } from './missing-trade/missing-trade.component';
import { NewAccountLogComponent } from './new-account-log/new-account-log.component';
import { AuthenticationService } from '../../Login/authentication.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit, OnDestroy {
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
  brokeragesetupList: any = [];
  branchAllSellected: boolean = false;
  userData: boolean;
  userDataSubscription$: Subscription;


  constructor(private cdr: ChangeDetectorRef, private authService: AuthenticationService, private datePipe: DatePipe, public snackBar: MatSnackBar, public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService, private _masterSecondService: MasterSecondService, private _logSerice: LogsService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.fetchDropdownData();
    this.getBrokerageSetupList();
    this.userDataSubscription$ = this.authService.authChanged$.subscribe((res) => {
      this.userData = res;
      console.log(res);
    }, (err)=>{ console.log('err', err);});
  }
  ngOnDestroy() {
    this.userDataSubscription$.unsubscribe();
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
    { headerName: 'TotalRows',  field: 'totalRows', filter: true, sorting: true, resizable: true },
    { headerName: 'ValidatedRows',  field: 'validatedRows', filter: true, sorting: true, resizable: true },
    { field: 'status',   headerName: 'Status', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.intradayBrokRate) },
    { headerName: 'Filename', field: 'fileName', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.deliveryBrokRate)},    
    /*{ headerName: 'HigherSide Only', minWidth: 120, maxWidth: 120, field: 'higherSideOnly', filter: true, sorting: true, resizable: true },*/
    { headerName: 'CreatedBy',   field: 'createdBy', filter: true, sorting: true, resizable: true },
/*    { headerName: 'IntradaySingleSideOnly', field: 'intradaySingleSideOnly', filter: true, sorting: true, resizable: true },*/
    { headerName: 'CreatedDate', field: 'createdDate',   filter: true, sorting: true, resizable: true },
    {headerName: 'Show Missing Symbol', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true, filter: false, minWidth: 200,
    maxWidth: 250},
    {headerName: 'New Account', field: 'fileIcon', cellRenderer: this.actionNewCellRenderer, resizable: true, filter: false}
  ];

  getBrokerageSetupList() {
    if(this.areRequiredValuesSelected()){
      console.log(this.userData);
      var req = {
        "logType": this.branchIds,
        "fromDt": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
        "toDt": this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
      };
      this._logSerice.getImportLog(req).subscribe((results) => {
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

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError? 6000 : 3000;
  
    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass,
    });
  }

  areRequiredValuesSelected(): boolean {
    return this.branchIds && this.fromDt && this.toDt;
  }

  fetchDropdownData() {
    forkJoin([
      this._logSerice.logType(), 
    ]).pipe(map(response => {
      this.branchList = response[0];
      this.filteredProviders = response[0];
    })).subscribe(res => {
      
    });

    
  }

  public actionNewCellRenderer(params: any){
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some((cell: any) => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button  class="action-missing-trade" data-action="newaccount">New Account</button>`;

    return eGui;
  }

  public actionCellRenderer(params: any) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some((cell: any) => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button  class="action-missing-trade" data-action="missingtrade">Show Missing Symbol</button>`;

    return eGui;
}

  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredProviders = this.branchList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }





  onKey(value) {
    this.branchList = this.search(value);
}


  search(value: string) {
  let filter = value.toLowerCase();
  return this.branchList.filter(option => option.toLowerCase().startsWith(filter));
}

  

  addBrokerage(event: any) { }

  public async openSlabDetailsDialog(event) {
    // const isValid = await this.getBrokerageAddValidation();
    // if (isValid == '' && event === 'add') {
    //   const dialogRef = this.dialog.open(AddSetupDetailsComponent, {
    //     data: {
    //       selectedSlabId: null,
    //       fromDt: this.fromDt,
    //       toDt: this.toDt,
    //       branchIds: this.branchIds,
    //       accountIds: this.accountIds,
    //       itemGroupIds: this.itemGroupIds,
    //       instrumentType: this.instrumentType,
    //       isEditMode: 0
    //     },
    //   });
    //   dialogRef.afterClosed().subscribe((user) => {
    //     this.getBrokerageSetupList();
    //   });
    // } else if(isValid !== '' && event === 'lock'){
    //   const dialogRef = this.dialog.open(LockBrokerageComponent, {
    //     data: {
    //       selectedSlabId: null,
    //       fromDt: this.fromDt,
    //       toDt: this.toDt,
    //       branchIds: this.branchIds,
    //       accountIds: this.accountIds,
    //       itemGroupIds: this.itemGroupIds,
    //       instrumentType: this.instrumentType,
    //       isEditMode: 0
    //     },
    //   });
    //   dialogRef.afterClosed().subscribe((user) => {
    //     this.getBrokerageSetupList();
    //   });
    // }
  }

  public openModifySetupDialog() {
    // const dialogRef = this.dialog.open(AddSetupDetailsComponent, {
    //   data: {
    //     selectedSlabId: null,
    //     fromDt: this.fromDt,
    //     toDt: this.toDt,
    //     branchIds: this.branchIds,
    //     accountIds: this.accountIds,
    //     itemGroupIds: this.itemGroupIds,
    //     instrumentType: this.instrumentType,
    //     isEditMode: 1
    //   },
    // });

    // dialogRef.afterClosed().subscribe((user) => {
    //   this.getBrokerageSetupList();
    // });
  }

  onFromDateChange() {
    console.log("fromDt changed:", this.fromDt);
  }

  openEditBrokerageDetails(params) {
    const dialogRef = this.dialog.open(MissingTradeComponent, {
      data: {
        id: params.id
      },
    });

    dialogRef.afterClosed().subscribe((user) => {
      // this.getBrokerageSetupList();
    });
  }

onGridClick(params: any) {
  if (params.event.target.dataset.action == "missingtrade")
  {
    this.openEditBrokerageDetails(params.data);

  }
  if (params.event.target.dataset.action == "newaccount")
  {
    this.openNewAccountDetails(params.data);


  }
}

openNewAccountDetails (params) {
  const dialogRef = this.dialog.open(NewAccountLogComponent, {
    data: {
      id: params.id
    },
  });

  dialogRef.afterClosed().subscribe((user) => {
    // this.getBrokerageSetupList();
  });
}

viewAllItemGroups(){
  // let dialogRef = this.dialog.open(ViewItemGroupComponent, {
  //   data: { id:this.itemGroupIds }
  // });

  // dialogRef.afterClosed().subscribe(user => {
   
  // });
}

}
