import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MasterService } from '../../master.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialog } from 'src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-branch-account.component.html',
  styleUrls: ['./add-branch-account.component.scss']
})
export class AddBranchAccountComponent implements OnInit {

  accountList: any[];
  filteredAccountList: any[];
  public branchForm: UntypedFormGroup;
  public accountForm: UntypedFormGroup;
  selectedBranchID: any;
  branchIDAccountList: any[];
  gridApi: any;
  gridApiSelectAc: any;
  isRowSelected: boolean = false;
  agGridOptions: any = {
    //defaultColDef: {
    //  filter: true,
    //   flex:1,
    //  sortable: true,
    //  wraptext: true,
    //  resizable: true,
      
     
    //},
    suppressRowHoverHighlight: true,
  }


  columnDefsSelectAc = [{
    headerName: 'Select account ',
    children: [

      {
        headerName: '', editable: false, width: 5, minwidth: 5, maxwidth: 5, resizable: false, checkboxSelection: true, headerCheckboxSelection: true,
      },
      //{
      //  headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
      //},
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
      //{
      //  headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
      //},
      { headerName: 'Account', field: 'account', filter: true, sorting: true, resizable: true, flex: 1 },
    ]
  }
  ];
  constructor(private formBuilder: UntypedFormBuilder, public dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService, public dialogRef: MatDialogRef<AddBranchAccountComponent>) { 
    this.selectedBranchID = data.branchID;
  }

  ngOnInit(): void {
    this.bindFormControls();
    //this.getApiData();
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

//onGridClick(params: any) {
//  if (params.event.target.dataset.action == "delete")
//  {
//    const dialogRef = this.dialog.open(ConfirmationDialog, {
//      data: {
//        message: 'Do you really want to delete this record?',
//        buttonText: {
//          ok: 'Yes',
//          cancel: 'No'
//        }
//      }
//    });

//    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
//      if (confirmed) {
//        const reqObj = {
//          "id": 0,
//          "branchId": this.selectedBranchID,
//          "accountId": 0,
//          "accountIds": params.data.id
//        }
//        this._masterService.deleteBranchAccount(reqObj).subscribe((res) => {

//        });
//      }
//    });


//  }
//  }


  onGridReady(event) { this.gridApi = event.api; }

  onGridReadySelectAc(event) { this.gridApiSelectAc = event.api; }

  getBranchAccountIDs()
  {
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
    //this._masterService.getAccountsForBranch(this.selectedBranchID).subscribe((response) => {
    //  this.accountList = response;
    //  this.filteredAccountList = response;
    //});
  }


  checkSelectedRowSelectAc(event: any) {
    debugger
    var selectedRow = this.gridApiSelectAc.getSelectedRows();
    if (selectedRow.length > 0) { this.isRowSelected = true; }
    else { this.isRowSelected = false; }
  }

  checkSelectedRow(event: any)
  {
    var selectedRow = this.gridApi.getSelectedRows();
    if (selectedRow.length > 0) { this.isRowSelected = true; }
    else { this.isRowSelected = false; }
  }

  selectAccounts()
  {
    var selectAccount = this.gridApiSelectAc.getSelectedRows();
    const body = {
      dropDownVMs: selectAccount,
      BranchId: this.selectedBranchID
      
    };

    this._masterService.addBranchAccount(body).subscribe(result => {
     /* this.selectedBranchID = result.id;*/
      this.getBranchAccountIDs();
      });
    

  }
  removeAccounts() {
    var selectAccount = this.gridApi.getSelectedRows();
    const body = {
      dropDownVMs: selectAccount,
      BranchId: this.selectedBranchID

    };

    this._masterService.deleteBranchAccount(body).subscribe(result => {
      /* this.selectedBranchID = result.id;*/
      this.getBranchAccountIDs();
    });


  }



  bindFormControls() {
    this.branchForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'id': [this.selectedBranchID, Validators.required]
    });
    this.accountForm = this.formBuilder.group({
      'accountIds': ['', Validators.required]
    });
  }

  public onSubmit(values: Object): void {

    debugger;
    var h = this.gridApi.getSelectedRows();
    var body = this.branchForm.value;
    console.log(body);
    if (this.branchForm.valid) {
      this._masterService.saveBranch(body).subscribe(result => {
        console.log("result", result);
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
