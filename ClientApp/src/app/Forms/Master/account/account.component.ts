import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Papa from "papaparse";
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { CommonUtility } from '../../../shared/common-utility';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { MasterService } from '../master.service';
import { AddAccountComponent } from './account-dialog/add-account.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blank',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;
  editing = {};
  rows = [];
  temp = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  gridAPI: any
 
  public settings: Settings;
  accountList: any;
  constructor(public appSettings: AppSettings, public snackBar: MatSnackBar, private _masterService: MasterService, public dialog: MatDialog) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.getAccountList();
  }

  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      flex: 1,
      sortable: true,
      wraptext: true,
      resizable: true,
     
    }
     
   
  }
  onGridReady(params) {
    this.gridAPI = params.api;
  /*  params.api.sizeColumnsToFit();*/
  }

  columnDefs = [
    {
      headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 60,
      maxWidth: 90, resizable: false, filter: false
    },
    { headerName: 'Code', field: 'acCode', },
    { headerName: 'Name', field: 'name', flex: 2 },
    { headerName: 'Opbal', field: 'opBal', flex: 1, valueFormatter: params => Number(CommonUtility.formatNumber(params.data.opBal)).toFixed(2), type: 'rightAligned' },
    { headerName: 'GroupName', field: 'groupName', flex:1 },
    { headerName: 'Head', field: 'headName', flex:1 },
    { headerName: 'CreatedDate', field: 'createdDateString' },
    
  ];

  onActivate(event) {
    console.log('Activate Event', event);
  }

  onBtnExport(): void {
    const params =
    {
      fileName:'Account List',
      columnKeys: ['acCode', 'name', 'opBal', 'groupName', 'headName', 'createdDateString']
     , customHeader:'Account List'
    }
    this.gridAPI.exportDataAsCsv(params);
  }

  getAccountList() {
    this._masterService.getAccounts().subscribe((results) => {
      debugger
      if (results.isSuccess) {
        this.accountList = results.accounts;
      }
      else { this.showToaster(results.message, true); }

    });
  }

  downloadAsPDF() {
    const csvData = this.gridAPI.getDataAsCsv({
      columnKeys: [
        'acCode', 'name', 'opBal', 'groupName', 'headName', 'createdDateString'
      ],
      suppressQuotes: false,
      suppressHeader: true,
    });

    const parsedData = Papa.parse(csvData, {
      header: false,
      skipEmptyLines: true,
    });
    const dataRows = parsedData.data.slice(1);
    const doc = new jsPDF("l", "pt", "a4");

    const mainHeader = "Accounts List";

    const addHeader = (doc, pageNumber) => {
      const pageWidth = doc.internal.pageSize.getWidth();

      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      let xOffset = pageWidth / 2 - doc.getTextWidth(mainHeader) / 2;
      doc.text(mainHeader, xOffset, 20);

      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.5);
      doc.setLineCap(2);
      doc.line(40, 30, pageWidth - 40, 30);

      // Subheader
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");

      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.5);
      doc.setLineCap(2);
      doc.line(40, 60, pageWidth - 40, 60);
    };

    const totalPagesExp = "{total_pages_count_string}";

    addHeader(doc, 1);

    autoTable(doc, {
      head: [["Code", "Name", "Opbal", "GroupName", "Head", "CreditDate"]],
      body: dataRows as string[][],
      startY: 70,
      theme: "grid",
      headStyles: { fillColor: [40, 53, 147] },
      columnStyles: {
        2: { halign: "right", textColor: "#ff4848" },
        5: { halign: "right", textColor: "green" },
      },
      didDrawCell: (data) => {
        const { row, column, section, cell } = data;
        if (section === "body" && row.index === dataRows.length - 1) {
          doc.setFillColor(221, 221, 221);
          const { x, y, width, height } = cell;
          doc.rect(x, y, width, height, "F");

          let textX = x + cell.padding("left");
          if (column.index === 2 || column.index === 5) {
            const textWidth = doc.getTextWidth(cell.text[0]);
            textX = x + width - cell.padding("right") - textWidth;
          }

          const textY = y + cell.height / 2 + 3;
          doc.text(cell.text, textX, textY);
        }
      },
      didDrawPage: (data) => {
        addHeader(doc, data.pageNumber);

        if (data.pageNumber >= 1) {
          data.settings.margin.top = 70;
        }

        const tableWidth = doc.internal.pageSize.getWidth();
        const tableStartX = data.settings.margin.left;
        const tableStartY = data.settings.startY;
        const tableHeight = data.cursor.y - tableStartY;

        const footerText = `Page ${data.pageNumber} of ${totalPagesExp}`;
        const xOffset = 40;
        doc.text(footerText, xOffset, doc.internal.pageSize.height - 20);

        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(1);
        doc.rect(tableStartX, tableStartY, tableWidth - 80, tableHeight);
      },
    });

    if (typeof doc.putTotalPages === "function") {
      doc.putTotalPages(totalPagesExp);
    }

    doc.save("Account.pdf");
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

  onGridClick(params: any)
  {
    if (params.event.target.dataset.action == "edit")
    { 
      this._masterService.getAccountById(params.data.id).subscribe((res)=>{
        console.log(res);
        this.openUserDialog(res);
      });
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
            this._masterService.deleteAccountById(params.data.id).subscribe((res) => {
              this.getAccountList();
              if(res.isSuccess){
                this.showToaster(res.message);
              } else {
                this.showToaster(res.message, true);
              }
            });
          }
        });
      }  
  }

  onFilteredChanged() {
    this.gridAPI.setGridOption(
      'quickFilterText',
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
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

  public openUserDialog(user)
  {
    let dialogRef = this.dialog.open(AddAccountComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(user => {
      this.getAccountList();
      if (user) {
       /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
      }
    });
  }

}
