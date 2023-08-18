import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MasterSecondService } from '../../../master-second.service';
import { ErrorDialog } from 'src/app/Forms/Dialog/confirmation-dialog/error-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, map } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
import { ConfirmationDialog } from 'src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component';
import { AddAccountComponent } from '../add-account.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MasterService } from '../../../master.service';
import { CommonUtility } from 'src/app/shared/common-utility';

@Component({
  selector: 'app-self-share-tab',
  templateUrl: './self-share-tab.component.html',
  styleUrls: ['./self-share-tab.component.scss']
})
export class SelfShareTabComponent implements OnInit {

  @Input() selectedAccountId: number;
  public acSelfShareForm: UntypedFormGroup;
  accountSelfShareList: any;

  applyOnFileShare: any[];
  exchangeList: any[];
  acList: any[];
  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      flex: 1,
      sortable: true,
      wraptext: true,
      resizable: true
    }
  }

 //self share list defination
 columnDefs = [
  {
    headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
    maxWidth: 110, resizable: true
  },
  { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
  { headerName: 'ContraAccount', field: 'contraName', filter: true, sorting: true, resizable: true },
  { headerName: 'FromDt', field: 'fromDtString', filter: true, sorting: true, resizable: true },
  { headerName: 'ToDt', field: 'toDtString', filter: true, sorting: true, resizable: true },
  { headerName: 'ApplyOn', field: 'applyOnName', filter: true, sorting: true, resizable: true },
  { headerName: 'Rate', field: 'rate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.intradayRate), type: 'rightAligned' },
];

  constructor(public _masterService: MasterService, public dialogRef: MatDialogRef<AddAccountComponent>,private formBuilder: UntypedFormBuilder,private _appService: AppService, private _masterSeconedService: MasterSecondService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.bindacSelfShareFormControls();
    this.initialApiCalls();
  }

  bindacSelfShareFormControls() {
    this.acSelfShareForm = this.formBuilder.group({
      'accountId': [0, Validators.required],
      'contraId': ['', Validators.required],
      'exId': ['', Validators.required],
      'rate': ['', Validators.required],
      'applyOn': ['', Validators.required],
      'fromDt': ['', Validators.required],
      'toDt': ['', Validators.required],
      'id': [0],
    });
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

close(): void {
  this.dialogRef.close();
}

initialApiCalls() {
  forkJoin([this._masterService.getExchangeName(), this._masterService.getAccount(), this._masterService.getApplyOnFileShareDDL(),]).pipe(map(response => {
    
    this.exchangeList = response[0];
    this.acList = response[1];
    this.applyOnFileShare = response[2];
  })).subscribe(res => {
  });
  if(this.selectedAccountId){
    this.getAccountSelfShareList();
  }
}

handleTabChange(event: MatTabChangeEvent): void {
  if (event.index === 3) { // Assuming "Interest" tab has index 1
    // Make your API calls here
    console.log('Interest tab clicked, triggering API calls...');
  }
}

getAccountSelfShareList() {
  this._masterService.getAccountSelfShareList(this.selectedAccountId).subscribe((results) => {
    this.accountSelfShareList = results;

  });
}

public onSelfShare(values: Object): void {

  if (this.selectedAccountId == 0) {
    const dialogRef = this.dialog.open(ErrorDialog, {
      data: {
        message: 'Please select or save account to save account tax',
        buttonText: {
          ok: 'OK',

        }
      }

    });
  }
  else {


    this.acSelfShareForm.controls['rate'].setValue(Number(this.acSelfShareForm.get('rate').value));
    this.acSelfShareForm.controls['accountId'].setValue(this.selectedAccountId);
    var body = this.acSelfShareForm.value;

    if (this.acSelfShareForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._masterService.saveAccountSelfShare(body).subscribe(result => {
        console.log("result", result);
        this.snackBar.open("Self Share details saved sucessfully.", "Success", {
          duration: 3000,
        });
        // this.dialogRef.close();
        this.getAccountSelfShareList();
        this.resetForm(this.acSelfShareForm);
      }, err => {
        console.log(err);
      });
    }
  }
}


bindSelfShareFormInEditMode(res) {

  this.acSelfShareForm.setValue({
    'exId': res.exId,
    'rate': CommonUtility.formatNumber(res.rate),
    'fromDt': res.fromDt,
    'toDt': res.toDt,
    'id': res.id,
    'applyOn': res.applyOn,
    'contraId': res.contraId,
    'accountId': res.accountId
  });

}


  //account Self share clicked 
  onSelfShareClick(params: any) {

    if (params.event.target.dataset.action == "edit") {
      this._masterService.getAccountSelfShareEdit(params.data.id).subscribe((res) => {
        this.bindSelfShareFormInEditMode(res);
      });
    }
    if (params.event.target.dataset.action == "delete") {
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
          this._masterService.deleteAccountSelfShare(params.data.id).subscribe((res) => {
            this.getAccountSelfShareList();
            this.showToaster('Deleted Successfully.');
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

  resetForm(myForm) {
    myForm.reset();
    myForm.get('id').setValue(0);
    Object.keys(myForm.controls).forEach(key => {
      myForm.get(key).setErrors(null);
    });
  }

}
