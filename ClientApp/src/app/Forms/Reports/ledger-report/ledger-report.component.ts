import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { AppService } from 'src/app/service/app.service';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { CommonUtility } from 'src/app/shared/common-utility';
import { forkJoin, map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MasterService } from '../../Master/master.service';
import { ReportsService } from '../reports.service';
import { EntryService } from '../../Entry/entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ledger-report',
  templateUrl: './ledger-report.component.html',
  styleUrls: ['./ledger-report.component.scss']
})
export class LedgerReportComponent implements OnInit {

  @ViewChild('select') select: MatSelect;
  @ViewChild('selectAccount') selectAccount: MatSelect;
  @ViewChild('selectVouType') selectVouType: MatSelect;
  public settings: Settings;
  slabId: number;
  slabList: any[];
  includeOpBal: boolean = true;
  withinterest: boolean = true;
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
  vouTypeList: any
  filteredVouTypeList: any;
  vouTypeIds: any;

  constructor(private router: Router, private _entryService: EntryService, private datePipe: DatePipe, public snackBar: MatSnackBar, public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService, private _reportsService: ReportsService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.fetchDropdownData();
  //   this.getBrokerageSetupList({
  //     "account": "7,6,5,4",
  //     "fromDate": "2023-09-02",
  //     "toDate": "2023-09-07"
  // });
  }

  calculateTotalDebit(): number {
    let totalDebit = 0;
    for (const item of this.brokeragesetupList) {
      if (item.debit < 0) {
        totalDebit += item.debit;
      }
    }
    return totalDebit;
  }
  
  calculateTotalCredit(): number {
    let totalCredit = 0;
    for (const item of this.brokeragesetupList) {
      if (item.credit > 0) {
        totalCredit += item.credit;
      }
    }
    return totalCredit;
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
    autoGroupColumnDef: {
      headerName: 'Account',
      field: 'account',
      minWidth: 200,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        suppressCount: true,
      },
      aggFunc: (params) => {
        const debitTotal = params.values.reduce((total, value) => total + (value.debit || 0), 0);
        const creditTotal = params.values.reduce((total, value) => total + (value.credit || 0), 0);
        return {
          account: params.key, 
          debit: debitTotal,   
          credit: creditTotal, 
        };
      },
    },
    animateRows: true,
    groupUseEntireRow: true,
    groupRowAggNodes: (nodes) => {
      const debitTotal = nodes.reduce((total, node) => total + (node.data.debit || 0), 0);
      const creditTotal = nodes.reduce((total, node) => total + (node.data.credit || 0), 0);
      return {
        debit: debitTotal,
        credit: creditTotal,
      };
    },
    suppressRowHoverHighlight: true,
    domLayout: 'autoHeight',
    
    //suppressSizeToFit: true,
    
  }
  onGridReady(event) { }

  columnDefs = [ 
    { headerName: 'Account', field: 'name', filter: true, sorting: true, resizable: true, rowGroup: true, hide: false},    
    { headerName: 'Balance', field: 'netAmt',  filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency , cellClass: (params) => {
      return 'green-text';
    } },
    
  ];

  onCellClicked(event) {
    if (event.column && event.column.getColDef().field === 'name') {
      const rowData = event.data;
      this.openRouteInNewWindow(rowData);
  
    }
  }

  getBrokerageSetupList() {
    const accountIds = this.accountIds.filter((val) => val != "-1");
    const vouTypeIds = this.vouTypeIds.filter((val) => val != "-1");
    var req = {
      "account": accountIds.join(','),
      "fromDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
      "toDate": this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
      "vouType": vouTypeIds.join(','),
      "includeOpBal": this.includeOpBal,
      "withinterest": this.withinterest
    };
    this._reportsService.getLedgerSummary(req).subscribe((results) => {
      console.log('first', results)
      this.searchedData = req;
      this.brokeragesetupList = results.data;   
      // this.brokeragesetupList.push({
      //   drShortCode: 'Total Debit',
      //   drAmt: this.calculateTotalDebit(),
      //   crShortCode: 'Total Credit',
      //   crAmt: this.calculateTotalCredit(),
      // });    
    });
  }

  formatCurrency(params) {
    const value = Math.abs(params.value); // Get the absolute value
    const formattedValue = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return params.value < 0 ? `${formattedValue}` : formattedValue;
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
    return this.accountIds && this.fromDt && this.toDt && this.vouTypeIds;
  }

  fetchDropdownData() {
    forkJoin([
      this._masterService.getAccount(),
      this._masterService.getBranchDDLList(), 
      this._entryService.getVouType(),
    ]).pipe(map(response => {
      this.accountList = response[0];
      this.filteredAccountList = response[0];
      this.branchList = response[1];
      this.filteredProviders = response[1];
      this.vouTypeList = response[2];
      this.filteredVouTypeList = response[2];
      this.vouTypeAllSelection();
    })).subscribe(res => {
      
    });

    
  }

  openRouteInNewWindow(rowData) {
    const route = '/reports/single-ledger-report';
    const queryParams = { 
      account: rowData.accountId, 
      fromDate: this.searchedData.fromDate,
      toDate: this.searchedData.toDate,
      vouType: this.searchedData.vouType,
      includeOpBal: this.searchedData.includeOpBal,
      withinterest: this.searchedData.withinterest,
     }; 

    const url = this.router.serializeUrl(this.router.createUrlTree([route], { queryParams }));

    window.open(url, '_blank');
  }

  onBranchChange(event: any, isLastIndex?: boolean) {
    if(this.branchAllSellected && !isLastIndex){
      return;
    }
    if(!this.branchIds){
      this._masterService.getAccount().subscribe(
        response => {
          this.accountList = response;
          this.filteredAccountList = response;
        }
      );
    }
    if(this.branchIds.length < 2 && this.branchIds[0] == '-1'){
      return;
    }
    if (this.branchIds) {
      this._masterService.getFilterBranchAccounts(this.branchIds).subscribe(
        response => {
          this.accountList = response;
          this.filteredAccountList = response;
        }
      );
    }
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

  vouTypeAllSelection()
  {
    var isAllChecked = this.selectVouType.options.first.selected;
    this.selectVouType.options.forEach(
      (item: MatOption) => {

        if (isAllChecked) { item.select(); }
        else { item.deselect() }
      }

    );

  }

  onInputVouTypeListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredVouTypeList = this.vouTypeList.filter((data) => {
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

}
