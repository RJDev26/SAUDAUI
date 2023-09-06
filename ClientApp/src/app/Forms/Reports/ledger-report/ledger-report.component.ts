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

@Component({
  selector: 'app-ledger-report',
  templateUrl: './ledger-report.component.html',
  styleUrls: ['./ledger-report.component.scss']
})
export class LedgerReportComponent implements OnInit {

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

  constructor(private datePipe: DatePipe, public snackBar: MatSnackBar, public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService, private _reportsService: ReportsService) {
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
    { headerName: 'Vou No',  field: 'vouNo', filter: true, sorting: true, resizable: true },
    { headerName: 'Date',  field: 'vouDate', filter: true, sorting: true, resizable: true },
    { headerName: 'Narration', field: 'narration', filter: true, sorting: true, resizable: true},    
    { headerName: 'Account', field: 'account', filter: true, sorting: true, resizable: true, rowGroup: true, hide: false},    
    { field: 'debit',   headerName: 'Debit', filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency , cellClass: (params) => {
      return 'red-text';
    }},
    { headerName: 'Credit', field: 'credit',  filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency , cellClass: (params) => {
      return 'green-text';
    } },
    { headerName: 'Balance', field: 'balance',  filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency , cellClass: (params) => {
      return 'green-text';
    } },
    
  ];

  getBrokerageSetupList() {
    const accountIds = this.accountIds.filter((val) => val != "-1");
    var req = {
      "account": accountIds.join(','),
      "fromDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
      "toDate": this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
    };
    this._reportsService.getLedger(req).subscribe((results) => {
      console.log('first', results)
      this.brokeragesetupList = results.data;   
      this.brokeragesetupList.push({
        drShortCode: 'Total Debit',
        drAmt: this.calculateTotalDebit(),
        crShortCode: 'Total Credit',
        crAmt: this.calculateTotalCredit(),
      });    
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
    return this.accountIds && this.fromDt && this.toDt;
  }

  fetchDropdownData() {
    forkJoin([
      this._masterService.getAccount(),
    ]).pipe(map(response => {
      this.accountList = response[0];
      this.filteredAccountList = response[0];
    })).subscribe(res => {
      
    });

    
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

  onInputAccountListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredAccountList = this.accountList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

}
