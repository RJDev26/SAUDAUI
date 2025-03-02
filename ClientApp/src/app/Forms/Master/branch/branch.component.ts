import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/service/app.service';
import { MasterService } from '../master.service';
import { Settings } from 'src/app/app.settings.model';
import { ConfirmationDialog } from '../../Dialog/confirmation-dialog/confirmation-dialog.component';
import { AddBranchAccountComponent } from './add-branch-account/add-branch-account.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Papa from "papaparse";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  public settings: Settings;
  gridAPI: any
  slabList: any[];
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
  }
  columnDefs = [
    {
      headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true, filter: false
    },
    { headerName: 'Family Code',  field: 'fmlycode', filter: true, sorting: true, resizable: true },
    { headerName: 'Family Name',  field: 'fmlyname', filter: true, sorting: true, resizable: true },
    { headerName: 'Contra Name',  field: 'contraName', filter: true, sorting: true, resizable: true },
    { headerName: 'Head Name',  field: 'headName', filter: true, sorting: true, resizable: true },
    { headerName: 'Chat ID',  field: 'chatid', filter: true, sorting: true, resizable: true }
  ];

  constructor(public snackBar: MatSnackBar, public appSettings: AppSettings, private _appService: AppService, public dialog: MatDialog, private _masterService: MasterService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.getLoadData();
  }

  getLoadData() {
    this._masterService.getBranchList().subscribe((response) => { this.slabList = response });
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

  public openAccountDialog(selectedBranchId) {
    let dialogRef = this.dialog.open(AddBranchAccountComponent, {
      data: { 
          branchID: selectedBranchId,
      }
    });

    dialogRef.afterClosed().subscribe(user => {
      this.getLoadData();
    });
  }

  onGridReady(params) {
    this.gridAPI = params.api;
  /*  params.api.sizeColumnsToFit();*/
  }

  onBtnExport(): void { 
    const params = {
      fileName:'Branch List',
      columnKeys: ['fmlycode', 'fmlyname', 'contraName', 'headName', 'chatid']
     , customHeader:'Branch List'
    }
    this.gridAPI.exportDataAsCsv(params);
  }

  downloadAsPDF() {
    const csvData = this.gridAPI.getDataAsCsv({
      columnKeys: [
        'fmlycode', 'fmlyname', 'contraName', 'headName', 'chatid'
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

    const mainHeader = "Branch List";

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
      head: [['fmlycode', 'fmlyname', 'contraName', 'headName', 'chatid']],
      body: dataRows as string[][],
      startY: 70,
      theme: "grid",
      headStyles: { fillColor: [40, 53, 147] },
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

    doc.save("Branch.pdf");
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

  onGridClick(params: any) {
    if (params.event.target.dataset.action == "edit")
    {
      this.openAccountDialog(params.data.id);
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
          this._masterService.deleteBranch(params.data.id).subscribe((res) => {
            if(res.isSuccess){
              this.getLoadData();
              this.showToaster(res.message);
            } else {
              this.showToaster(res.message, true);
            }
          });
        }
      });
    }
  }
}