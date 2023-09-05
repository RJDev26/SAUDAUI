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
  selector: 'app-trail-balance',
  templateUrl: './trail-balance.component.html',
  styleUrls: ['./trail-balance.component.scss']
})
export class TrailBalanceComponent implements OnInit {

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
    // this.getBrokerageSetupList();
  }

  calculateTotalDebit(): number {
    // Replace this logic with your actual calculation logic
    let totalDebit = 0;
    for (const item of this.brokeragesetupList) {
      if (item.drAmt < 0) {
        totalDebit += item.drAmt;
      }
    }
    return totalDebit;
  }
  
  calculateTotalCredit(): number {
    // Replace this logic with your actual calculation logic
    let totalCredit = 0;
    for (const item of this.brokeragesetupList) {
      if (item.crAmt > 0) {
        totalCredit += item.crAmt;
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
    suppressRowHoverHighlight: true,
    domLayout: 'autoHeight', 
    //suppressSizeToFit: true,
    
  }
  onGridReady(event) { }

  columnDefs = [
    { headerName: 'Code',  field: 'drShortCode', filter: true, sorting: true, resizable: true },
    { headerName: 'Account',  field: 'drName', filter: true, sorting: true, resizable: true },
    { field: 'drAmt',   headerName: 'Debit', filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency , cellClass: (params) => {
      return params.value < 0 ? 'red-text' : 'green-text';
    }},
    { headerName: 'No.', field: 'drAcId', filter: true, sorting: true, resizable: true},    
    { headerName: 'Code',   field: 'crShortCode', filter: true, sorting: true, resizable: true },
    { headerName: 'Account', field: 'crName',   filter: true, sorting: true, resizable: true },
    { headerName: 'Credit', field: 'crAmt',  filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency , cellClass: (params) => {
      return params.value < 0 ? 'red-text' : 'green-text';
    } },
    { headerName: 'No.', field: 'crAcId',  filter: true, sorting: true, resizable: true },
    
  ];

  getBrokerageSetupList() {
    var req = {
      "branch": String(this.branchIds),
      "asOnDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
    };
    this._reportsService.getTrialBalance(req).subscribe((results) => {
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
    const formattedValue = value.toLocaleString();
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
    return this.branchIds && this.fromDt;
  }

  fetchDropdownData() {
    forkJoin([
      this._masterService.getBranchDDLList(), 
    ]).pipe(map(response => {
      this.branchList = response[0];
      this.filteredProviders = response[0];
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

}
