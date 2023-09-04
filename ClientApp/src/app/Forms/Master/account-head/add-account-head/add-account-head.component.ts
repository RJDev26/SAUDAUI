import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../../master.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-add-account-head',
    templateUrl: './add-account-head.component.html',
    styleUrls: ['./add-account-head.component.scss']
})

export class AddAccountHeadComponent implements OnInit {

    accountList: any[] = [];  
    public nameForm: UntypedFormGroup;
    selectedAccountHeadID: any
    gridApi: any;
    gridApiSelectAc: any;    
    AcHeadAccountList: any[] = [];
    selectedAcHeadID: any;
    agGridOptions: any = {
        suppressRowHoverHighlight: true,
    }
    isRowSelected: boolean = false;

    columnDefsSelectAc = [{
      headerName: 'Select account',
      children: [
  
        {
          headerName: '', editable: false, width: 5, minwidth: 5, maxwidth: 5, resizable: false, checkboxSelection: true, headerCheckboxSelection: true,
        },
        //{
        //  headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
        //},
        { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true, flex: 1 },
      ]
    }];

    columnDefs = [{
      headerName: 'Added account list',
      children: [
  
        {
          headerName: '', editable: false,width:5, minwidth: 5, maxwidth: 5, resizable: false, checkboxSelection: true, headerCheckboxSelection: true,
        },
        //{
        //  headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
        //},
        { headerName: 'Account', field: 'name', filter: true, sorting: true, resizable: true, flex: 1 },
      ]
    }];

    constructor(public snackBar: MatSnackBar, private formBuilder: UntypedFormBuilder, public dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService, public dialogRef: MatDialogRef<AddAccountHeadComponent>) { 
      this.selectedAccountHeadID = data.branchID;
    }

    ngOnInit(): void {
      this.bindFormControls();
      this.getAccounts();
      this.getAcHeadAccountList()
      this.getApiData()
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

    getAcHeadAccountList() {
        this._masterService.getAccountsAddedinAcHead(this.selectedAccountHeadID).subscribe((res) => {
        this.AcHeadAccountList = res;
      });
    }

    getAccounts() {
      this._masterService.getAccountsForBranch(this.selectedAccountHeadID).subscribe((res) => {
        this.accountList = res;
      });
    }

    getApiData() {
      if (this.selectedAccountHeadID) {
        this._masterService.getAcHeadId(this.selectedAccountHeadID).subscribe((res) => {
          this.nameForm.patchValue({
            name: res.name
          });
        });
        this.getAcHeadAccountList();
      }
      //this._masterService.getAccountsForBranch(this.selectedBranchID).subscribe((response) => {
      //  this.accountList = response;
      //  this.filteredAccountList = response;
      //});
    }

    checkSelectedRowSelectAc(event: any) {
      var selectedRow = this.gridApiSelectAc.getSelectedRows();
      if (selectedRow.length > 0) { this.isRowSelected = true; }
      else { this.isRowSelected = false; }
    }
  
    checkSelectedRow(event: any) {
      var selectedRow = this.gridApi.getSelectedRows();
      if (selectedRow.length > 0) { this.isRowSelected = true; }
      else { this.isRowSelected = false; }
    }

    selectAccounts() {
      var selectAccount = this.gridApiSelectAc.getSelectedRows();
      const body = {
        dropDownVMs: selectAccount,
        AcHeadId: this.selectedAccountHeadID        
      };

      this._masterService.addAcHead(body).subscribe(result => {
        this.getAcHeadAccountList();
      });
    }   
    
    removeAccounts() {
      var selectAccount = this.gridApi.getSelectedRows();
      const body = {
        dropDownVMs: selectAccount,
        AcHeadId: this.selectedAccountHeadID  
      };
  
      this._masterService.deleteAcHeadAccount(body).subscribe(result => {
        if(result.isSuccess){
          this.showToaster(result.message);
        } else {
          this.showToaster(result.message, true);
        }
        /* this.selectedBranchID = result.id;*/
        this.getAcHeadAccountList();
      });   
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

    bindFormControls() {
        this.nameForm = this.formBuilder.group({
          'name': ['', Validators.required],
          //'id': [this.selectedAccountHeadID, Validators.required]
        });
    }          

    public onSubmit(values: Object): void {
        var h = this.gridApi.getSelectedRows();
        var body = this.nameForm.value;
        if (this.nameForm.valid) {
          this._masterService.saveAccountHead(body).subscribe(result => {
            this.dialogRef.close();
          }, err => {
            console.log(err);
          });
        }
    }

    close(): void {
        this.dialogRef.close();
    }
}