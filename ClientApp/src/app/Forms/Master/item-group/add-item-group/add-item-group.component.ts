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
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-add-item-group',
  templateUrl: './add-item-group.component.html',
  styleUrls: ['./add-item-group.component.scss']
})
export class AddItemGroupComponent implements OnInit {
  @ViewChild('select') select: MatSelect;
  public itemGroupNameForm: UntypedFormGroup;
  public exchangeForm: UntypedFormGroup;
  applyOnList: any;
  exchangeList:any;
  selectedId: any;
  selectedName: any;
  accountList: any[];
  accountIds: Array<string>;

  accountAllSellected: boolean = false;
  itemGroupList: any[] =[];
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
    headerName: 'Added account Item Group list',
    children: [
      {
        headerName: '', editable: false, minwidth: 45, width: 45, maxwidth: 45, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
      },
      { headerName: 'Exchange Name', field: 'exName', filter: true, sorting: true, resizable: true, flex: 1, },
      { headerName: 'Item Name', field: 'itemName', filter: true, sorting: true, resizable: true, flex: 1, },
    ]
  }];

  constructor(public appSettings: AppSettings,
    private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddItemGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService,
    private _masterSecondService: MasterSecondService, public dialog: MatDialog, public snackBar: MatSnackBar) {

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

  bindFormControls() {
    this.itemGroupNameForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'id': [0]
    });

  }

  bindExchangeFormControls() {
    this.exchangeForm = this.formBuilder.group({
      'accounts': ['', Validators.required],
      'id': [0]
    });
  }

  onExchangeSelection(selectedExchangeId: any) {
    if (selectedExchangeId) {
      this._masterService.getItemListExchange(selectedExchangeId).subscribe(
        (response) => {
          this.accountList = response;
        },
        (error) => {
          console.error('Error fetching item list:', error);
        }
      );
    }
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
    forkJoin([this._masterService.getExchangeName()]).pipe(map(response => {
      this.exchangeList = response[0];
    })).subscribe(res => {

    });
    if (this.selectedId != 0) { this.getItemGroupList(); }
  }

  getItemGroupId() {
    this._masterSecondService.getItemGroupId(this.selectedId).subscribe((res) => {
      this.itemGroupNameForm.get('name').setValue(res.name);
      this.itemGroupNameForm.get('id').setValue(res.id);
      this.selectedName = res.name;
    });
  }

  getItemGroupList() {
    this._masterSecondService.getItemGroupList(this.selectedId).subscribe((res) => {
      this.itemGroupList = res;
    });
  }


  public onSubmit(values: Object): void {
    this.itemGroupNameForm.controls['name'].setValue(String(this.itemGroupNameForm.get('name').value));
    var body = this.itemGroupNameForm.value;
    if (this.itemGroupNameForm.valid) {
      this._masterSecondService.saveItemGroup(body).subscribe(result => {
        console.log(result);
        this.selectedId = result;
        // this.dialogRef.close();
      }, err => {
        console.log(err);
      });
    }
  }

  deleteItemGroup()
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
      var req = selectedRecord.map(x => x.id);
      this._masterSecondService.removeMultipleItemGroup(req).subscribe(result => {
        this.getItemGroupList();
        this.showToaster(result);
      });
    }
  }

  showToaster(message){
    this.snackBar.open(message, "Success", {
      duration: 3000,
    });
  }

  public onExchangeSubmit(values: Object): void {

    if (this.selectedId == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please save Exchange to add Item Groups',
          buttonText: {
            ok: 'OK',

          }
        }

      });
      return;
    }

    var body = this.exchangeForm.value;
    //to remove select all option value that is '-1'
    body.accounts.forEach((value, index) => {
      if (value == '-1') body.accounts.splice(index, 1);
    });
    var req = {
      "groupId": this.selectedId,
      "itemList": body.accounts
    }
  
    if (this.exchangeForm.valid) {
      this._masterSecondService.addItemGroup(req).subscribe(result => {
        this.getItemGroupList();
      });
    }
  }

  ngOnInit() {
    this.bindFormControls();
    this.bindExchangeFormControls();
    this.initialApiCalls();
    if (this.selectedId != 0) {
      this.getItemGroupId();
     
    }
    else {
      this.itemGroupNameForm.get('id').setValue(0);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
