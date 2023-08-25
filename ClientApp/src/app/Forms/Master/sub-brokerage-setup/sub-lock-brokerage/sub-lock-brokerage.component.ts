import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../../master.service';
import { forkJoin, map } from 'rxjs';
import { DatePipe, formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sub-lock-brokerage',
  templateUrl: './sub-lock-brokerage.component.html',
  styleUrls: ['./sub-lock-brokerage.component.scss']
})
export class SubLockBrokerageComponent implements OnInit {
  public itemForm: UntypedFormGroup;
  parentData: any;


  constructor( public snackBar: MatSnackBar, private datePipe: DatePipe, private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<SubLockBrokerageComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
   this.parentData = data;
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
     'lockBrokDate': ['', Validators.required],
    });
}

  ngOnInit(): void {
    this.bindFormControls();
  }

  close(): void {
    this.dialogRef.close();
  }

  public onSubmit(values: object) {
    console.log(values);
    debugger;
    var body = this.itemForm.value;
    console.log(body);
    body.lockBrokDate = this.datePipe.transform(body.lockBrokDate, 'yyyy-MM-dd');
    body.id = this.parentData.isEditMode;
    body.accounts = this.parentData.accountIds.filter((val)=> val != -1);;
    body.branchId = this.parentData.branchIds;
    body.fromDate = this.datePipe.transform(this.parentData.fromDt, 'yyyy-MM-dd');
    body.toDate = this.datePipe.transform(this.parentData.toDt, 'yyyy-MM-dd');
    body.instrumentType = this.parentData.instrumentType;
    body.itemGroupId = this.parentData.itemGroupIds;
    body.higherSideOnly= false;

    if (this.itemForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._appService.lockSubBrokerage(body).subscribe(result => {
        console.log("result", result);
        this.showToaster(result.message);
        this.dialogRef.close();
      });
    }
  }

  showToaster(message){
    this.snackBar.open(message, "Success", {
      duration: 3000,
    });
  }

}
