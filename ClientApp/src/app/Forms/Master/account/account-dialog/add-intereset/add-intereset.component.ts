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

@Component({
  selector: 'app-add-intereset',
  templateUrl: './add-intereset.component.html',
  styleUrls: ['./add-intereset.component.scss']
})
export class AddInteresetComponent implements OnInit {
  
  @Input() selectedAccountId: number;
  public itemForm: UntypedFormGroup;
  interestMasterList: any = [];
  typeList: any[];
  applyOnList: any[];
  postVoucherList: any[];
  filterPostVoucherList: any[];
  filterTypeList: any[];
  filterApplyOnList: any[];
  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      flex: 1,
      sortable: true,
      wraptext: true,
      resizable: true
    }
  }

  columnItemDefs = [
    {
      headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
      maxWidth: 110, resizable: true
    },
    { headerName: 'Account Name', field: 'acName', filter: true, sorting: true, resizable: true },
  { headerName: 'ApplyOn', field: 'applyOnName', filter: true, sorting: true, resizable: true },  
  { headerName: 'From Date', field: 'fromDtFormat', filter: true, sorting: true, resizable: true },  
  { headerName: 'To Date', field: 'toDtFormat', filter: true, sorting: true, resizable: true },  
  { headerName: 'Type', field: 'typeName', filter: true, sorting: true, resizable: true },  
  { headerName: 'Post Vouchers', field: 'postVouchersName', filter: true, sorting: true, resizable: true },  
  { headerName: 'Int Rate', field: 'intRate', filter: true, sorting: true, resizable: true },  
  { headerName: 'Year Days', field: 'yearDays', filter: true, sorting: true, resizable: true },  
];

  constructor( public dialogRef: MatDialogRef<AddAccountComponent>,private formBuilder: UntypedFormBuilder,private _appService: AppService, private _masterSeconedService: MasterSecondService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.bindItemFormControls();
    this.initialItemApiCalls();
  }

  bindItemFormControls() {
    this.itemForm = this.formBuilder.group({
      'accountId': this.selectedAccountId,
      'type': ['', Validators.required],
      'applyOn': ['', Validators.required],
      'postVouchers': ['', Validators.required],
      'intRate': ['', Validators.required],
      'yearDays': ['', Validators.required],
      'fromDt': ['', Validators.required],
      'toDt': ['', Validators.required],
      'id': [0]
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

initialItemApiCalls() {
  forkJoin([this._appService.getIntrestApplyOnDDL(), this._appService.getIntrestTypeDLL(), this._appService.getPostVoucherDLL()]).pipe(map
    (response => {
    this.applyOnList = response[0];
    this.filterApplyOnList = response[0];
    this.typeList = response[1];
    this.filterTypeList = response[1];
    this.postVoucherList = response[2];
    this.filterPostVoucherList = response[2];
  })).subscribe(res => {
  
  });
  if(this.selectedAccountId){
    this.getInterestList();
  }
}

handleTabChange(event: MatTabChangeEvent): void {
  if (event.index === 3) { // Assuming "Interest" tab has index 1
    // Make your API calls here
    console.log('Interest tab clicked, triggering API calls...');
  }
}

editInterestItem(id: number){
  this._masterSeconedService.getInterestId(id).subscribe((res) => {
    this.itemForm.get('accountId').setValue(this.selectedAccountId);
    this.itemForm.get('type').setValue(res.type);
    this.itemForm.get('applyOn').setValue(res.applyOn);
    this.itemForm.get('postVouchers').setValue(res.postVouchers);
    this.itemForm.get('intRate').setValue(res.intRate);

    this.itemForm.get('yearDays').setValue(res.yearDays);
    this.itemForm.get('fromDt').setValue(res.fromDt);
    this.itemForm.get('toDt').setValue(res.toDt);
    this.itemForm.get('id').setValue(res.id);

    
  });
}

  getInterestList() {
    this._masterSeconedService.getAccountInterestList(this.selectedAccountId).subscribe((results) => {
         this.interestMasterList = results;       
        });
    }

  public onItemSubmit(values: Object): void {
    if (this.selectedAccountId == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please select or save account to save account Interest',
          buttonText: {
            ok: 'OK',
  
          }
        }
  
      });
    } else {
      var body = this.itemForm.value;
    
      if (this.itemForm.valid) {
        //const body = JSON.stringify(addFormData);
        this._masterSeconedService.saveInterest(body).subscribe(result => {
          console.log("result", result);
          this.getInterestList();
          this.resetForm(this.itemForm);
          this.snackBar.open("Interest save sucessfully", "Success", {
            duration: 3000,
          });
        }, err => {
          console.log(err);
        });
      }
    }
  }

  onGridClick(params: any) {
    if (params.event.target.dataset.action == "edit")
    {
      this.editInterestItem(params.data.id);
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
          this._masterSeconedService.deleteInterest(params.data.id).subscribe((res) => {
            this.getInterestList();
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

  /* to filter select account dropdown*/
onInputTypeChange(event: any) {
  const searchInput = event.target.value.toLowerCase();

  this.filterTypeList = this.typeList.filter((data) => {
    const prov = data.name.toLowerCase();
    return prov.includes(searchInput);
  });

  if (searchInput === '') {
    this.filterTypeList = [...this.typeList];
  }
}

onInputApplyOnChange(event: any) {
  const searchInput = event.target.value.toLowerCase();

  this.filterApplyOnList = this.applyOnList.filter((data) => {
    const prov = data.name.toLowerCase();
    return prov.includes(searchInput);
  });

  if (searchInput === '') {
    this.filterApplyOnList = [...this.applyOnList];
  }
}

onInputVoucherChange(event: any) {
  const searchInput = event.target.value.toLowerCase();

  this.filterPostVoucherList = this.postVoucherList.filter((data) => {
    const prov = data.name.toLowerCase();
    return prov.includes(searchInput);
  });

  if (searchInput === '') {
    this.filterPostVoucherList = [...this.postVoucherList];
  }
}

  resetForm(myForm) {
    myForm.reset();
    myForm.get('id').setValue(0);
    Object.keys(myForm.controls).forEach(key => {
      myForm.get(key).setErrors(null);
    });
  }

}
