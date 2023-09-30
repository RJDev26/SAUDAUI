import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from '../reports.service';
declare let jsPDF;
declare let $;

@Component({
  selector: 'app-sub-ledger-report',
  templateUrl: './sub-ledger-report.component.html',
  styleUrls: ['./sub-ledger-report.component.scss']
})
export class SubLedgerReportComponent implements OnInit {
  searchedData:any;
  brokeragesetupList: any;
  paginationPageSize = 10;
  margins = {
      top: 80,
      bottom: 20,
      left: 10,
      width: 830
  };
  companydata = {
    Name:"Accounts",
  };
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

  downloadAsPDF() {
    var self = this;
    var doc = new jsPDF('l', 'pt', "a4");
    var col = this.columnDefs.map(columns=>columns.headerName);
    var colFields = this.columnDefs.map(columns=>columns.field);
    var rows = [];
    for (var i = 0; i < this.brokeragesetupList.length; i++) {
      var temp = [];
      for(var j = 0; j < colFields.length; j++){
        temp.push(this.brokeragesetupList[i][colFields[j]])
      }
      rows.push(temp);
    }
    console.log(rows, col);
    doc.setFont("calibari");
    doc.setFontSize(18);
    doc.setFontStyle('bold');
    var mainHeader = this.companydata.Name, xOffset = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(mainHeader) * doc.internal.getFontSize() / 2);
    doc.text(mainHeader, xOffset, 30);

    doc.setDrawColor(0, 0, 0);
    doc.setLineCap(2);
    doc.line(this.margins.left, 50, this.margins.width, 50);

    doc.setFontSize(12);
    doc.setFontStyle('bold');
    var secondHeaderText = "Trial Balance as on  " , xOffset = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(secondHeaderText) * doc.internal.getFontSize() / 2);
    doc.text(secondHeaderText, xOffset, 60);
    doc.setDrawColor(0, 0, 0);
    doc.setLineCap(2);
    doc.line(self.margins.left, 70, self.margins.width, 70);

    doc.autoTable(col, rows, {
      html: '#brokerSetupGridId',
      tableLineColor: [0, 0, 0],
      tableLineWidth: 0.75,
      theme: "plain",
      willDrawCell: function (data) { 
        console.log('willDrawCell is called:', data);
      },
      // Use to draw additional content such as images in table cells
      didDrawCell: function (data) {
        console.log('didDrawCell is called:', data);
      },
      didDrawRow: (data) => {
        console.log('didDrawRow is called:', data);
        if (data.row.index === data.table.rows.length - 1) {
            doc.setFillColor(255, 0, 0); // Red color
            doc.rect(
                data.table.width + data.table.settings.margin.left,
                data.row.y,
                data.table.width,
                data.row.height,
                'F' // 'F' for fill
            );
        }
      },
      didParseCell: (data) => {
          console.log('didParseCell is called:', data);
          if (data.section === 'body' && data.cell.raw.cellIndex == 3) {
              data.cell.styles.textColor = [255, 72, 72];
          }
          if (data.section === 'body' && data.cell.raw.cellIndex == 5) {
              data.cell.styles.textColor = [0, 0, 255];
          }
          if (data.section === 'body' && data.cell.raw.cellIndex == 6) {
              data.cell.styles.textColor = [0, 0, 255];
          }
          if (data.section === 'foot' && data.cell.raw.cellIndex == 4) {
              data.cell.styles.textColor = [255, 72, 72];
          }
          if (data.section === 'foot' && data.cell.raw.cellIndex == 5) {
              data.cell.styles.textColor = [0, 128, 0];
          }
          if (data.section === 'foot' && data.cell.raw.cellIndex == 6) {
              data.cell.styles.textColor = [0, 128, 0];
          }
      },
      tableWidth: this.margins.width,
      bodyStyles: { valign: 'top' },
      styles: {
          overflow: 'linebreak', fontSize: 9,
          font: 'calibari', width: this.margins.width, lineWidth: 1, minCellWidth: 32,
      },
      columnStyles: {
          0: { cellWidth: '1%' }, 4: { halign: 'right' }, 5: { halign: 'right' }, 6: { halign: 'right' }
      },
      footStyles: {
          cellWidth: 'wrap',
          fontSize: 10,
          lineWidth: 0,
          lineColor: [0, 0, 0],
          textColor: [0, 0, 0],
          fillColor: [211, 211, 211],
          halign: 'right'
      },
      margin: {
          top: this.margins.top,
          left: this.margins.left
      },
      headerStyles: {
          fontSize: 9,
          font: 'arial'
      },
      drawRow: (row, data) => {
        console.log('drawRow::', data);
        data.doc.setDrawColor(0,0,0);
        let firstCell = row.cells[0];
        let secondCell = row.cells[1];
        data.doc.setLineWidth(0.7);
      },
      drawHeaderRow: (head, data) => {
        console.log('drawHeaderRow::', data);
        data.doc.setLineWidth(0.7);
        data.doc.setDrawColor(0,0,0);
        data.doc.line(data.cursor.x,data.cursor.y,data.cursor.x+data.table.width,data.cursor.y)
        data.doc.line(data.cursor.x, data.cursor.y + head.height, data.cursor.x + data.table.width, data.cursor.y + head.height);
      }
    });

    const pageCount = doc.internal.getNumberOfPages();
    for (var i = 1; i <= pageCount; i++) {
        doc.setFontSize(10);
        doc.setPage(i);
        doc.text('Page ' + String(i) + ' of ' + String(pageCount), this.margins.left, doc.internal.pageSize.height - 20);
    }

    var iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:100%;');
        doc.output('datauristring');
        doc.save('TrialBalance.PDF');
  }

}
