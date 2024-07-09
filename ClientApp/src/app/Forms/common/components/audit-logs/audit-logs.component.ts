import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CellClickedEvent } from 'ag-grid-community';
import { downloadFileByURL, setUploadedFiles } from '../../utils/blob-file';
import { EntryService } from 'src/app/Forms/Entry/entry.service';
import { ReportsService } from 'src/app/Forms/Reports/reports.service';

@Component({
  selector: 'app-audit-logs',
  templateUrl: './audit-logs.component.html',
  styleUrls: ['./audit-logs.component.scss']
})
export class AuditLogsComponent implements OnInit {

  voucherMasterId: number;
  vocherAuditData: any = [];
  createdBy: any; 
  createdDateString: any;

  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      flex:1,
      sortable: true,
      wraptext: true,
      resizable: true,
      /* minWidth: 100,*/
    },
    /* suppressRowHoverHighlight: true,*/
  };

  columnDefs = [
    {
      headerName: "Field",
      field: "field",
      resizable: true,
      flex: 1,
    },
    {
      headerName: "Old Value",
      field: "oldValue",
      resizable: true,
      flex: 1,
      cellRenderer: (params)=>{
        console.log(params);
        if(params.value && params.data.field.toLocaleLowerCase() === "file"){
          return `<a class='audit-log-link'>${params.value}</a>`;
        }
        return params.value;
      },
      onCellClicked: (event: CellClickedEvent) => {
        console.log('Cell was clicked', event);
        if(event.data && event.data.field.toLocaleLowerCase() === "file"){
          this.downloadFile(event);
        }
      },
    },
    {
      headerName: "Value",
      field: "value",
      resizable: true,
      flex: 1,
      cellRenderer: (params)=>{
        console.log(params);
        if(params.value && params.data.field.toLocaleLowerCase() === "file"){
          return `<a class='audit-log-link'>${params.value}</a>`;
        }
        return params.value;
      },
      onCellClicked: (event: CellClickedEvent) => {
        console.log('Cell was clicked', event);
        if(event.data && event.data.field.toLocaleLowerCase() === "file"){
          this.downloadFile(event);
        }
      },
    },
    {
      headerName: "Updated By",
      field: "updatedBy",
      resizable: true,
      flex: 1,
    }
  ];

  downloadFile(params){
    console.log(params);
    this._reportService.getVoucherLogFile({auditId:params.data.auditId, vouMasterId: params.data.vouMasterId, fileName: params.value}).subscribe(res=>{
      console.log(res);
      const uploadFileObj = setUploadedFiles({
        name: params.value,
        type: "",
        base64: res.data,
      });
      if(uploadFileObj){
        downloadFileByURL(uploadFileObj.url, uploadFileObj.name);
      }
    });
  }

  constructor(public dialogRef: MatDialogRef<AuditLogsComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _entryServices: EntryService, private _reportService: ReportsService) { 
    console.log(data);
    this.voucherMasterId = data.vouMasterId;
    this.createdBy = data.createdBy;
    this.createdDateString = data.createdDateString;
  }

  ngOnInit(): void {
    this.initApiCalls();
    if(!this.createdBy){
      this.getVoucherCreator();
    }
  }

  getVoucherCreator() {
    this._entryServices.getVoucherCreator(this.voucherMasterId).subscribe(res=>{
      if(res.data && res.isSuccess){
        const data = res.data[0];
        this.createdBy = data.createdBy;
        this.createdDateString = data.createdDateString;
      }
    });
  }

  initApiCalls() {
    this._entryServices.getVoucherAudit(this.voucherMasterId).subscribe(res=>{
      this.vocherAuditData = res.data;
    });
  }

  close(): void {
    this.dialogRef.close();
  }

}
