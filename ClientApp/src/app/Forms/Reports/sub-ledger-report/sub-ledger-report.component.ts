import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-sub-ledger-report',
  templateUrl: './sub-ledger-report.component.html',
  styleUrls: ['./sub-ledger-report.component.scss']
})
export class SubLedgerReportComponent implements OnInit {
  searchedData:any;
  brokeragesetupList: any;
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
    domLayout: 'autoHeight', 
    rowClass: (params) => {
      // Check if the row is a total row (you can use your own criteria)
      if (params.data && (params.data.drShortCode === 'Total Debit' || params.data.crShortCode === 'Total Credit')) {
        return 'total-row'; // Apply the CSS class for total rows
      }
      return ''; // Return an empty string for other rows
    },
    //suppressSizeToFit: true,
    
  }
  onGridReady(event) { }

  columnDefs = [
    { headerName: 'Vou No',  field: 'vouNo', filter: true, sorting: true, resizable: true },
    { headerName: 'Date',  field: 'vouDate', filter: true, sorting: true, resizable: true },
    { headerName: 'Narration', field: 'narration', filter: true, sorting: true, resizable: true},    
    { headerName: 'Account', field: 'account', filter: true, sorting: true, resizable: true},    
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

  formatCurrency(params) {
    const value = Math.abs(params.value); // Get the absolute value
    const formattedValue = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return params.value < 0 ? `${formattedValue}` : formattedValue;
  }

  constructor(private route: ActivatedRoute, private _reportsService: ReportsService) { }

  ngOnInit(): void {
    this.getQueryPramsData();
    this.getBrokerageSetupList();
  }

  getQueryPramsData() {
    this.route.queryParams.subscribe(params => {
      // Access and use the query parameters here
      this.searchedData = params;
      console.log(this.searchedData);
  
      // Now you can use these parameters in your component logic
    });
  }

  getBrokerageSetupList() {
    const req = {
      withinterest: this.searchedData.withinterest==='true',
      includeOpBal: this.searchedData.includeOpBal==='true',
      vouType: this.searchedData.vouType,
      fromDate: this.searchedData.fromDate,
      account: this.searchedData.account,
      toDate: this.searchedData.toDate,
    }
    this._reportsService.getLedger(req).subscribe((results) => {
      this.brokeragesetupList = results.data;    
      this.brokeragesetupList.push({
        vouNo: 'Total',
        debit: this.calculateTotalDebit(),
        credit: this.calculateTotalCredit(),
        balance: this.calculateTotalBalance(),
      });  
    });
  }

  calculateTotalBalance(): number {
    let totalDebit = 0;
    for (const item of this.brokeragesetupList) {
        totalDebit += item.balance;
    }
    return totalDebit;
  }

  calculateTotalDebit(): number {
    let totalDebit = 0;
    for (const item of this.brokeragesetupList) {
        totalDebit += item.debit;
    }
    return totalDebit;
  }
  
  calculateTotalCredit(): number {
    let totalCredit = 0;
    for (const item of this.brokeragesetupList) {
        totalCredit += item.credit;
    }
    return totalCredit;
  }

}
