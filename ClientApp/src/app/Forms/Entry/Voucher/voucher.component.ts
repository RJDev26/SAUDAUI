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


@Component({
  selector: 'app-voucher-entry',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {
  voucherForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.voucherForm = this.fb.group({
      'VouType': ['', Validators.required],
      'VouDate': ['', Validators.required],
      'ContraAc': [''],
      vouDetails: this.fb.array([])
     
    });
    this.addVouDetail();

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
    console.log(this.voucherForm.value);
  }

  

  


  
  
}
