import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MasterService } from '../../master.service';
import { forkJoin, map } from 'rxjs';
import { AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/service/app.service';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MasterSecondService } from '../../master-second.service';
import { ErrorDialog } from '../../../Dialog/confirmation-dialog/error-dialog.component';


export interface Tax {
  id: number;
  name: string;
}

@Component({
  selector: 'app-tax-dialog',
  templateUrl: './add-tax-master.component.html',
  styleUrls: ['./add-tax-master.component.scss']
})

export class AddTaxComponent implements OnInit {
  @ViewChild('select') select: MatSelect;
  public taxMasterForm: UntypedFormGroup;
  public taxForm: UntypedFormGroup;
  applyOnList: any;
  selectedId: any;
  selectedName: any;
  accountList: any[];
  accountIds: Array<string>;

  accountAllSellected: boolean = false;
  accountTaxList: any[] = [];
  accountApplyOnList: any[];
  gridApi: any;
  isRowSelected: boolean = false;
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
    headerName: 'Added account tax list',
    children: [
      {
        headerName: '', editable: false, minwidth: 45, width: 45, maxwidth: 45, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
      },
      { headerName: 'Account', field: 'accountName', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'ApplyOn', field: 'applyOn', filter: true, sorting: true, resizable: true, flex: 1, },
    ]
  }];

  constructor(public appSettings: AppSettings,
    private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddTaxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService,
    private _masterSecondService: MasterSecondService, public dialog: MatDialog) {

    this.selectedId = data.id;
    if (data.id == null) { this.selectedId = 0; }
  }



  checkTaxSelect() {
    if (this.selectedId == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please select or save tax to add account tax',
          buttonText: {
            ok: 'OK',

          }
        }

      });
    }
  }

  /* to filter select account dropdown*/
  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.accountList = this.accountList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  /* for adding tax detail*/
  bindFormControls() {
    this.taxMasterForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'appliedOn': ['', Validators.required],
      'id': [0]
    });

  }
  /* for adding tax account detail*/
  bindAccountTaxControls() {
    this.taxForm = this.formBuilder.group({
      'taxId': [this.selectedId, Validators.required],
      'applyOn': ['', Validators.required],
      'accounts': ['', Validators.required],
      'id': [0]
    });
  }

  

  onGridReady(event) { this.gridApi = event.api; }

  accountAllSelection() {
    this.accountAllSellected = true;
    var isAllChecked = this.select.options.first.selected;
    this.select.options.forEach(
      (item: MatOption, index) => {
        if (isAllChecked) { item.select(); }
        else { item.deselect() }
        
      }
    );
  }

  initialApiCalls() {
    forkJoin([this._masterService.getApplyOn(), this._masterService.getApplyOnTaxAccountDDL(), this._masterService.getAccounts()]).pipe(map(response => {
      this.applyOnList = response[0];

      this.accountApplyOnList = response[1];
      this.accountList = response[2];
    })).subscribe(res => {

    });
    if (this.selectedId != 0) { this.getAccountTaxList(); }
  }

  getTaxInfo() {
    this._masterSecondService.getTaxById(this.selectedId).subscribe((res) => {
      this.taxMasterForm.get('name').setValue(res.name);
      this.taxMasterForm.get('appliedOn').setValue(res.appliedOn);
      this.taxMasterForm.get('id').setValue(res.id);
      this.selectedName = res.name;
    });
  }

  getAccountTaxList() {
    this._masterSecondService.getTaxAccountList(this.selectedId).subscribe((res) => {
      this.accountTaxList = res;
    });
  }


  public onSubmit(values: Object): void {
    this.taxMasterForm.controls['name'].setValue(String(this.taxMasterForm.get('name').value));
    this.taxMasterForm.controls['appliedOn'].setValue(String(this.taxMasterForm.get('appliedOn').value));
    var body = this.taxMasterForm.value;
    if (this.taxMasterForm.valid) {
      this._masterSecondService.saveTax(body).subscribe(result => {
        this.dialogRef.close();
      }, err => {
        console.log(err);
      });
    }
  }

  deleteAccountTax()
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
      this._masterSecondService.deleteAccountTax(selectedRecord).subscribe(result => {
        this.getAccountTaxList();
      });
    }
  }

  public onAccountTaxSubmit(values: Object): void {

    if (this.selectedId == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please select or save tax to add account tax',
          buttonText: {
            ok: 'OK',

          }
        }

      });
    }

    var body = this.taxForm.value;
    //to remove select all option value that is '-1'
    body.accounts.forEach((value, index) => {
      if (value == '-1') body.accounts.splice(index, 1);
    });

  
    this.taxForm.controls['taxId'].setValue(this.selectedId);
    if (this.taxForm.valid) {
      this._masterSecondService.addAccountTax(body).subscribe(result => {
        this.getAccountTaxList();
      });
    }
  }

  ngOnInit() {
    this.bindFormControls();
    this.bindAccountTaxControls();
    this.initialApiCalls();
    if (this.selectedId != 0) {
      this.getTaxInfo();
     
    }
    else {
      this.taxMasterForm.get('id').setValue(0);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
