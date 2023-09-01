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
import { MasterSecondService } from '../../Master/master-second.service';
import { MasterService } from '../../Master/master.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntryService } from '../entry.service';
import { ErrorDialog } from '../../Dialog/confirmation-dialog/error-dialog.component';


@Component({
  selector: 'app-voucher-entry',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {
  voucherForm: FormGroup;
  filteredAccountList: any;
  accountList: any;
  filteredVouTypeList: any;
  vocherGridData: any;
  vouTypeList:any = [];
  DR: string = "DR";
  CR: string = "CR";
  gridApi: any;
  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      //flex:1,
      sortable: true,
      wraptext: true,
      resizable: true,
      /* minWidth: 100,*/

    },
    /* suppressRowHoverHighlight: true,*/
  }

  columnDefs = [{
    headerName: 'Vocher list',
    children: [
      {
        headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true, filter: false, width: 20, maxwidth: 20
      },
      {
        headerName: '', editable: false, minwidth: 45, width: 20, maxwidth: 20, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
      },
      { headerName: 'Vocher No', field: 'vouNo', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'Voucher', field: 'vouTypeName', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'Amount', field: 'amount', filter: true, sorting: true, resizable: true, flex: 1, valueFormatter: params => CommonUtility.formatNumber(params.data.amount), type: 'rightAligned'},
      { headerName: 'Vocher Date', field: 'vouDateString', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'Created Date', field: 'createdDateString', filter: true, sorting: true, resizable: true, flex: 1, },
    ]
  }];

  constructor(public dialog: MatDialog, private datePipe: DatePipe, private fb: FormBuilder, private _masterService: MasterService, private _entryService: EntryService) { }

  ngOnInit() {
    this.voucherForm = this.fb.group({
      'VouType': ['', Validators.required],
      'VouDate': ['', Validators.required],
      'ContraAc': [''],
      vouDetails: this.fb.array([])
     
    });
    this.addVouDetail();
    this.initApiCalls();

  }

  public actionCellRenderer(params: any) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some((cell: any) => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>`;

    return eGui;
}

  onGridReady(event) { this.gridApi = event.api; }

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

  initApiCalls() {
    forkJoin([
      this._masterService.getAccount(),
      this._entryService.getVouType(),
    ]).pipe(map(response => {
      this.accountList = response[0];
      this.filteredAccountList = response[0];
      this.vouTypeList = response[1];
      this.filteredVouTypeList = response[1];
    })).subscribe(res => {
      
    });
  }
  vouDetails(): FormArray {
    return this.voucherForm.get('vouDetails') as FormArray;
  }

  newVouDetail(): FormGroup {
    return this.fb.group({
      'Account': ['', Validators.required],
      'DRCR': ['', Validators.required],
      'Amount': ['', Validators.required],
      'Narration': ['', Validators.required],
    });
  }

  addVouDetail() {
    this.vouDetails().push(this.newVouDetail());
  }

  removeVouDetail(empIndex: number) {
    this.vouDetails().removeAt(empIndex);
  }
  getVoucherList() {
    const {VouType, VouDate} = this.voucherForm.value;
    if(VouType && VouDate){
      
      this._entryService.getVoucher(VouType, this.datePipe.transform(VouDate, 'yyyy-MM-dd')).subscribe((result)=>{
        this.vocherGridData = result;
      });
    }
  }

  onSubmit() {

    if (this.voucherForm.valid) {
      //const body = JSON.stringify(addFormData);
      const body = this.voucherForm.value;
      body.VouDate = this.datePipe.transform(body.VouDate, 'yyyy-MM-dd')
      this._entryService.saveVoucher(body).subscribe(result => {
        console.log("result", result);
        this.getVoucherList();
        
      }, err => {
        console.log(err);
      });
    }

   
  }

  deleteVochers()
  {
    var selectedRecord = this.gridApi.getSelectedRows();
    if (selectedRecord.length == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please select record to delete',
          buttonText: {
            ok: 'OK',

          }
        }

      });

    }
    else
    {
      const vouMasterIds = selectedRecord.map(item => item.vouMasterId).join(',');
      this._entryService.deleteVoucher(vouMasterIds).subscribe(result => {
        this.getVoucherList();
      });
    }
  }

  
  onGridClick(params: any) {
    if (params.event.target.dataset.action == "edit")
    {
      this.openEditBrokerageDetails(params.data);
  
    }
  }

  openEditBrokerageDetails(params) {
    // const dialogRef = this.dialog.open(AddSetupDetailsComponent, {
    //   data: {
    //     selectedSlabId: null,
    //     fromDt: this.searchedData.fromDate,
    //     toDt: this.searchedData.toDate,
    //     branchIds: this.searchedData.branchIds,
    //     accountIds: this.searchedData.accounts,
    //     itemGroupIds: this.searchedData.itemGroupId,
    //     instrumentType: this.searchedData.instrumentType,
    //     isEditMode: 2,
    //     editParms: params
    //   },
    // });

    // dialogRef.afterClosed().subscribe((user) => {
    //   this.getBrokerageSetupList();
    // });
  }

  


  
  
}
