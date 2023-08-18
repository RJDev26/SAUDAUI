import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
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
  selector: 'app-brokerage-tab',
  templateUrl: './brokerage-tab.component.html',
  styleUrls: ['./brokerage-tab.component.scss']
})
export class BrokerageTabComponent implements OnInit {

  
  @Input() selectedAccountId: number;
  public itemForm: UntypedFormGroup;


  brokerageForm: FormGroup;
  brokerageList: any;
  exchangeList: any;
  instrumentList: any;
  itemList: any;
  brokApplyOn: any;
  brokApplyOnQty:any;

  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      flex: 1,
      sortable: true,
      wraptext: true,
      resizable: true
    }
  }

  columnDefsBrok = [
    {
      headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
    },
    { headerName: 'ApplyOn', field: 'applyOnName', filter: true, sorting: true, resizable: true },
    { headerName: 'Apply OnQty', field: 'applyOnQtyName', filter: true, sorting: true, resizable: true },
    { field: 'Intraday BrokRate', headerName: 'IntradayBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.intradayBrokRate), type: 'rightAligned' },
    { headerName: 'Delivery BrokRate', field: 'deliveryBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.deliveryBrokRate), type: 'rightAligned' },
    /*{ headerName: 'HigherSide Only', minWidth: 120, maxWidth: 120, field: 'higherSideOnly', filter: true, sorting: true, resizable: true },*/
    { headerName: 'Instrument', field: 'instrumentType', filter: true, sorting: true, resizable: true },
    { headerName: 'RateRange1', field: 'rateRange1', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.rateRange1), type: 'rightAligned' },
    { headerName: 'RateRange2', field: 'rateRange2', filter: true, sorting: true, resizable: true, valueFormatter: params => CommonUtility.formatNumber(params.data.rateRange2), type: 'rightAligned' },
    { headerName: 'Exchange', field: 'exchange', filter: true, sorting: true, resizable: true },
    { headerName: 'Item', field: 'item', filter: true, sorting: true, resizable: true },
    /*    { headerName: 'IntradaySingleSideOnly', field: 'intradaySingleSideOnly', filter: true, sorting: true, resizable: true },*/
    { headerName: 'FromDT', field: 'fromDT', filter: true, sorting: true, resizable: true },
    { headerName: 'ToDT', field: 'toDT', filter: true, sorting: true, resizable: true },

  ];

  constructor(private _masterService: MasterService, public dialogRef: MatDialogRef<AddAccountComponent>,private formBuilder: UntypedFormBuilder,private _appService: AppService, private _masterSeconedService: MasterSecondService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.bindBrokerageControls();
  }

  bindBrokerageControls() {
    this.brokerageForm = this.formBuilder.group({
      'exchangeId': ['', Validators.required],
      'applyOn': ['', Validators.required],
      'applyOnQty': ['', Validators.required],
      'itemId': ['', Validators.required],
      'instrumentType': ['', Validators.required],
      'deliveryBrokRate': ['', Validators.required],
      'intradayBrokRate': ['', Validators.required],
      'rateRange1': ['', Validators.required],
      'rateRange2': ['', Validators.required],
      'fromDt': ['', Validators.required],
      'accountId': [this.selectedAccountId, Validators.required],
      'toDt': ['', Validators.required],
      'intradaySingleSideonly': [false],
      'id': [0, Validators.required],
    });
    this.initialApiCalls();
    if(this.selectedAccountId){
      this.getBrokerageSetupList();
    }
  }

  initialApiCalls() {
    forkJoin([ this._masterService.getExchangeName(),
    this._masterService.getInstrumentList(),
    this._masterService.getItemListDrp(),
    this._masterService.getApplyOnQtyDDL(),
    this._masterService.getApplyOnDDL()]).pipe(map(response => {
      this.exchangeList = response[0];
      this.instrumentList = response[1];
      
      this.itemList = response[2];
      this.brokApplyOnQty = response[3];
      this.brokApplyOn = response[4];
    })).subscribe(res => {
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


getBrokerageSetupList() {
  this._appService.getBrokerageSetupListAccount(this.selectedAccountId).subscribe((results) => {
    this.brokerageList = results;
  });
}

getSelectedBrokerageInfo(brokId) {
  this._masterService.getBrokerageSetupId(brokId).subscribe((res) => {
    const fromDate = new Date(res.fromDT);
    const toDate = new Date(res.toDT);
     const formattedFromDate = formatDate(fromDate, 'yyyy-MM-dd', 'en-US');
    ///  const formattedToDate = formatDate(toDate, 'yyyy-MM-dd', 'en-US');
    this.brokerageForm.patchValue({
      accountId: res.accountId,
      exchangeId: res.exchangeId,
      applyOn: res.applyOn,
      applyOnQty: res.applyOnQty,
      itemId: res.itemId,
      fromDt: formatDate(fromDate, 'yyyy-MM-dd', 'en-US') ,
      toDt: res.toDT,
      instrumentType: res.instrumentType,
      deliveryBrokRate: res.deliveryBrokRate,
      intradayBrokRate: res.intradayBrokRate,
      rateRange1: res.rateRange1,
      rateRange2: res.rateRange2,
      intradaySingleSideonly: res.intradaySingleSideonly,
      id: brokId
    });
  });
}
onBrokerageClick(params: any) {

  if (params.event.target.dataset.action == "edit") {
    this.getSelectedBrokerageInfo(params.data.id)

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
        this._masterService.deleteBrokerageSetup(params.data.id).subscribe((res) => {
          this.getBrokerageSetupList();
          this.showToaster('Deleted Successfully.');
        });
      }
    });


  }
}
public onBrokerageSave(values: object) {
  if (this.selectedAccountId == 0) {
    const dialogRef = this.dialog.open(ErrorDialog, {
      data: {
        message: 'Please select or save account to save account tax',
        buttonText: {
          ok: 'OK',

        }
      }

    });
  } else {
    console.log(values);
    this.brokerageForm.controls['accountId'].setValue(this.selectedAccountId);
    var body = this.brokerageForm.value;
    console.log(body);
  
    if (this.brokerageForm.valid) {
  
      this._masterService.saveBrokerageSetup(body).subscribe(result => {
        console.log("result", result);
        // this.dialogRef.close();
        this.snackBar.open("Brokerage details saved successfully.", "Success", {
          duration: 3000,
        });
        this.resetForm(this.brokerageForm);
        this.getBrokerageSetupList();
      });
    }
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

