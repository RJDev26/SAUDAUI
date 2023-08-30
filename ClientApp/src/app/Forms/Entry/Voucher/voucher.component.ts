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
  vouTypeList: any;
  DR: string = "DR";
  CR: string = "CR";

  constructor(private fb: FormBuilder, private _masterService: MasterService, private _entryService: EntryService) { }

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
  onSubmit() {

    if (this.voucherForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._entryService.saveVoucher(this.voucherForm.value).subscribe(result => {
        console.log("result", result);
        
      }, err => {
        console.log(err);
      });
    }

   
  }

  

  


  
  
}
