import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MasterService } from '../../master.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialog } from 'src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component';
import { forkJoin, map } from 'rxjs';
import { ConfirmationAccountDialog } from 'src/app/Forms/Dialog/confirmation-dialog/confirmation-account-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-branch-account.component.html',
  styleUrls: ['./add-branch-account.component.scss']
})
export class AddBranchAccountComponent implements OnInit {

  accountList: any[] = [];
  filteredAccountList: any[];
  public branchForm: UntypedFormGroup;
  public accountForm: UntypedFormGroup;
  selectedBranchID: any;
  branchIDAccountList: any[] = [];
  gridApi: any;
  gridApiSelectAc: any;
  isRowSelected: boolean = false;
  showInReport: boolean = false
  isPartyMTM: boolean
  setValue: boolean
  filteredHeadList: any[] = []
  agGridOptions: any = {
    suppressRowHoverHighlight: true,
  }

  columnDefsSelectAc = [{
    headerName: 'Select account',
    children: [
      {
        headerName: '', editable: false, width: 5, minwidth: 5, maxwidth: 5, resizable: false, checkboxSelection: true, headerCheckboxSelection: true,
      },
      { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true, flex: 1 },
    ]
  }
  ];

  columnDefs = [{
    headerName: 'Added account list',
    children: [

      {
        headerName: '', editable: false,width:5, minwidth: 5, maxwidth: 5, resizable: false, checkboxSelection: true, headerCheckboxSelection: true,
      },
      { headerName: 'Account', field: 'account', filter: true, sorting: true, resizable: true, flex: 1 },
      { headerName: 'show In Report', field: 'showInReport', filter: false, sorting: false, resizable: true, flex: 1 },
      { headerName: 'is Party MTM', field: 'isPartyMTM', filter: false, sorting: false, resizable: true, flex: 1 }
    ]
  }
  ];
  constructor(public snackBar: MatSnackBar, private formBuilder: UntypedFormBuilder, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService, public dialogRef: MatDialogRef<AddBranchAccountComponent>) { 
    this.selectedBranchID = data.branchID;
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError? 6000 : 3000;
  
    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass,
    });
  }

  ngOnInit(): void {    
    this.bindFormControls();
    this.getBranchAccountIDs();
    this.getAccounts();
    this.getApiData();
  }

  public actionCellRenderer(params: any) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some((cell: any) => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
    return eGui;
  }

  onGridReady(event) { this.gridApi = event.api; }

  onGridReadySelectAc(event) { this.gridApiSelectAc = event.api; }

  getBranchAccountIDs()  {
    this._masterService.getAccountsAddedinBranch(this.selectedBranchID).subscribe((res) => {
      this.branchIDAccountList = res;
    });
  }

  getAccounts() {
    this._masterService.getAccountsForBranch(this.selectedBranchID).subscribe((res) => {
      this.accountList = res;
    });
  }

  getApiData() {
    if (this.selectedBranchID) {
      this._masterService.getBranchId(this.selectedBranchID).subscribe((res) => {
        this.branchForm.patchValue({
          name: res.name
        });
      });
      this.getBranchAccountIDs();
    }
  }


  checkSelectedRowSelectAc(event: any) {
    var selectedRow = this.gridApiSelectAc.getSelectedRows();
    if (selectedRow.length > 0) { this.isRowSelected = true; }
    else { this.isRowSelected = false; }
  }

  checkSelectedRow(event: any)  {
    var selectedRow = this.gridApi.getSelectedRows();
    if (selectedRow.length > 0) { this.isRowSelected = true; }
    else { this.isRowSelected = false; }
  }

  onSubmitFromDialog(checked, MTM) {    
    var selectAccount = this.gridApiSelectAc.getSelectedRows();
    const body = {
      dropDownVMs: selectAccount,
      BranchId: this.selectedBranchID,
      showInReport: checked,
      isPartyMTM: MTM
    };
    this._masterService.addBranchAccount(body).subscribe(result => {
      this.getBranchAccountIDs();
    });
  }

  selectAccounts()  {
    var dialogRef = this.dialog.open(ConfirmationAccountDialog, {
      data: {
        message: 'Please select option',
        content: ``,
        buttonText: {
          ok: 'Submit',
          cancel: 'Cancel'
        }
      }
    });

    dialogRef.componentInstance.submitClicked.subscribe((res) => {
      debugger;
      this.onSubmitFromDialog(res.checked, res.MTM);
    });
  
  }

  removeAccounts() {
    var selectAccount = this.gridApi.getSelectedRows();
    const body = {
      dropDownVMs: selectAccount,
      BranchId: this.selectedBranchID
    };

    this._masterService.deleteBranchAccount(body).subscribe(res => {
      /* this.selectedBranchID = result.id;*/
      if(res.isSuccess){
        this.showToaster(res.message);
        this.getBranchAccountIDs();
      } else {
        this.showToaster(res.message, true);
      }
    });
  }

  initialApiCalls() {
    forkJoin([this._masterService.getAccount()]).pipe(map(response => {
      this.filteredHeadList = response[0];
      this.accountList = response[0];
    })).subscribe(res => {
    
    });
  }

  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredHeadList = this.accountList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
    if (searchInput === '') {
      this.filteredHeadList = [...this.accountList];
    }
  }

  bindFormControls() {
    this.branchForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'headId': ['', Validators.required],
      'contraAcId': ['', Validators.required],
      'chatid': ['', Validators.required],
      // 'id': [this.selectedBranchID]
      'id': [0]
    });
    this.accountForm = this.formBuilder.group({
      'accountIds': ['', Validators.required]
    });
    this.initialApiCalls();
  }

  public onSubmit(values: Object): void {
    var h = this.gridApi.getSelectedRows();
    var body = this.branchForm.value;
    if (this.branchForm.valid) {
      this._masterService.saveBranch(body).subscribe(result => {
        this.dialogRef.close();
        this.selectedBranchID = result.id;
      });
    }
  }
  public onAccountSubmit(values: Object): void {
    if( !this.selectedBranchID){
      alert('Please save branch');
      return;
    }
    var body = this.accountForm.value;
    console.log(body);
    const reqObj = {
      "branchId": this.selectedBranchID,
      "accountIds": body.accountIds.join()
    }
    if (this.accountForm.valid) {
      this._masterService.addBranchAccount(reqObj).subscribe(result => {
        console.log("result", result);
        this.getBranchAccountIDs();
      });
    }
  }
  close(): void {
    this.dialogRef.close();
}

}
