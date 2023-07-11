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
  agGridOptions: any = {
    defaultColDef: {
      filter: true,
       flex:1,
      sortable: true,
      wraptext: true,
      resizable: true,
      minWidth: 100,
     
    },
    suppressRowHoverHighlight: true,
  }
  columnDefs = [

    {
      headerName: '', editable: false, width: 45,maxwidth:80, resizable: true, checkboxSelection: true, headerCheckboxSelection: true,
    },
    //{
    //  headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
    //},
    { headerName: 'Name',  field: 'name', filter: true, sorting: true, resizable: true },
  ];
  constructor(private formBuilder: UntypedFormBuilder, public dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService, public dialogRef: MatDialogRef<AddBranchAccountComponent>) { 
    this.selectedBranchID = data.branchID;
  }

  ngOnInit(): void {
    this.bindFormControls();
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

onGridClick(params: any) {
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
        const reqObj = {
          "id": 0,
          "branchId": this.selectedBranchID,
          "accountId": 0,
          "accountIds": params.data.id
        }
        this._masterService.deleteBranchAccount(reqObj).subscribe((res) => {

        });
      }
    });


  }
  }
  onGridReady(event) { this.gridApi = event.api; }
getBranchAccountIDs() {
  this._masterService.getBranchAccountsID(this.selectedBranchID).subscribe((res)=>{
    this.branchIDAccountList = res;
  });
}
  getApiData() {
    if(this.selectedBranchID){
      this._masterService.getBranchId(this.selectedBranchID).subscribe((res)=>{
        this.branchForm.patchValue({
          name: res.name
        });
      });
      this.getBranchAccountIDs();
    }
    this._masterService.getAccount().subscribe((response) => { this.accountList = response;
    this.filteredAccountList = response;
    // this.patchAccountIds()
  });
  }

  // patchAccountIds() {
  //   const accountIds = this.accountList.map(account => account.id);
  //   this.accountForm.get('accountIds').patchValue(accountIds);
  // }

  onInputAccountListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredAccountList = this.accountList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  bindFormControls() {
    this.branchForm = this.formBuilder.group({
      'name': ['', Validators.required]
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
