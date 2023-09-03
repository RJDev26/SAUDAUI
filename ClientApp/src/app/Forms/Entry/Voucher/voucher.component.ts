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
  vocherGridData: any=[];
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
        headerName: '', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true, filter: false, minwidth: 25, width: 25, maxwidth: 25
      },
      {
        headerName: '', editable: false, minwidth: 25, width: 25, maxwidth: 25, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
      },
      { headerName: 'Vocher No', field: 'vouNo', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'Voucher', field: 'vouTypeName', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'Amount', field: 'amount', filter: true, sorting: true, resizable: true, flex: 1, valueFormatter: params => CommonUtility.formatNumber(params.data.amount), type: 'rightAligned'},
      { headerName: 'Vocher Date', field: 'vouDateString', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'Created Date', field: 'createdDateString', filter: true, sorting: true, resizable: true, flex: 1, },
    ]
  }];

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog, private datePipe: DatePipe, private fb: FormBuilder, private _masterService: MasterService, private _entryService: EntryService) { }

  ngOnInit() {
    this.voucherForm = this.fb.group({
      'vouMasterId': [0],
      'VouType': ['', Validators.required],
      'VouDate': ['', Validators.required],
      'ContraAc': [0, Validators.required],
      vouDetails: this.fb.array([])
     
    });
    this.addVouDetail();
    this.initApiCalls();
    this.watchVouTypeChanges();

  }

  watchVouTypeChanges() {
    this.voucherForm.get('VouType').valueChanges.subscribe((value) => {
      const contraAcControl = this.voucherForm.get('ContraAc');

      if (value === 'JV') {
        // Hide the Contra Account field
        contraAcControl.clearValidators();
        contraAcControl.updateValueAndValidity(); // Remove validation

        // Clear the selected value for Contra Account
        contraAcControl.setValue(0);
      } else {
        // Show the Contra Account field and reapply validation if needed
        contraAcControl.setValidators(Validators.required); // Add back validation
        contraAcControl.updateValueAndValidity();
      }
    });
  }

  public actionCellRenderer(params: any) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some((cell: any) => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button class="material-icons action-button-edit" type="button" data-action="edit">edit </button>`;

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

  validateAndCalculateAmount(data) {
    if (data.VouType === "JV") {
      let totalAmount = 0;
      for (const detail of data.vouDetails) {
        if (detail.DRCR === "CR") {
          // Subtract CR amount
          totalAmount -= detail.Amount;
        } else if (detail.DRCR === "DR") {
          // Add DR amount
          totalAmount += detail.Amount;
        }
      }

      if (totalAmount === 0) {
        // The Voucher is valid
        return true;
      } else {
        // The Voucher is not valid as the total amount is not zero
        return false;
      }
    }
    return true;
  }

  onSubmit() {

    if (this.voucherForm.valid) {
      if(!this.validateAndCalculateAmount(this.voucherForm.value)){
        this.dialog.open(ErrorDialog, {
          data: {
            message: 'Invalid Voucher: Total amount is not zero',
            buttonText: {
              ok: 'OK',
            }
          }
        });
        return;
      }
      const body = this.voucherForm.value;
      body.VouDate = this.datePipe.transform(body.VouDate, 'yyyy-MM-dd')
      this._entryService.saveVoucher(body).subscribe(result => {
        console.log("result", result);
        this.getVoucherList();
        this.resetForm(this.voucherForm);
        
      }, err => {
        console.log(err);
      });
    }

   
  }

  resetForm(myForm) {
    // Reset the form and set the 'vouMasterId' to 0
    myForm.reset();
    myForm.get('vouMasterId').setValue(0);
  
    // Clear errors for top-level controls
    Object.keys(myForm.controls).forEach(key => {
      myForm.get(key).setErrors(null);
    });
    this.vouDetails().clear();
    this.addVouDetail();
  
    // // Clear errors for controls within 'vouDetails'
    setTimeout(()=>{
      myForm.controls.vouDetails.controls.forEach((control: any) => {
        Object.keys(control.controls).forEach(key => {
          control.get(key).setErrors(null);
        });
      });
    }, 50);
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
          const vouMasterIds = selectedRecord.map(item => item.vouMasterId).join(',');
          this._entryService.deleteVoucher(vouMasterIds).subscribe(result => {
            this.getVoucherList();
            this.showToaster(result);
          });
        }
      });

      
    }
  }

  showToaster(message){
    this.snackBar.open(message, "Success", {
      duration: 3000,
    });
  }

  
  onGridClick(params: any) {
    if (params.event.target.dataset.action == "edit")
    {
      this.openEditBrokerageDetails(params.data);
  
    }
    if(params.event.target.dataset.action == "checkbox"){
        const dataIndex = this.gridApi.findIndex((item: any) => item.vouMasterId === params.data.vouMasterId);

        if (dataIndex === -1) {
            // Checkbox is checked, so add the data to gridApi
            this.gridApi.push(params.data);
        } else {
            // Checkbox is unchecked, so remove the data from gridApi
            this.gridApi.splice(dataIndex, 1);
        }
    }
  }

  openEditBrokerageDetails(params) {
    this._entryService.editVoucher(params.vouMasterId).subscribe((data)=>{
     this.voucherForm.patchValue({
      'vouMasterId': data.vouMasterId,
      'VouType': data.vouType,
      'VouDate': data.vouDate,
      'ContraAc': data.contraAc,
    });
  
    // Clear existing vouDetails FormArray
    const vouDetailsArray = this.voucherForm.get('vouDetails') as FormArray;
    vouDetailsArray.clear();
  
    // Iterate through vouDetails and add them to the FormArray
    for (const vouDetail of data.vouDetails) {
      vouDetailsArray.push(this.fb.group({
        'Account': vouDetail.account,
        'DRCR': vouDetail.drcr,
        'Amount': vouDetail.amount,
        'Narration': vouDetail.narration,
        // Other fields
      }));
    }
    });
    
  }

  


  
  
}
