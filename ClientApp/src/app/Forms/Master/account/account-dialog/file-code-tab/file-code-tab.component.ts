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

@Component({
  selector: 'app-file-code-tab',
  templateUrl: './file-code-tab.component.html',
  styleUrls: ['./file-code-tab.component.scss']
})
export class FileCodeTabComponent implements OnInit {

  @Input() selectedAccountId: number;
  public itemForm: UntypedFormGroup;
  interestMasterList: any = [];
  exchangeList: any[];
  filterExchangeList: any[];
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
    { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
  { headerName: 'FileCode', field: 'fileCode', filter: true, sorting: true, resizable: true },   
];

  constructor(public _masterService: MasterService, public dialogRef: MatDialogRef<AddAccountComponent>,private formBuilder: UntypedFormBuilder,private _appService: AppService, private _masterSeconedService: MasterSecondService, public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.bindItemFormControls();
    this.initialItemApiCalls();
  }

  bindItemFormControls() {
    this.itemForm = this.formBuilder.group({
      'accountId': this.selectedAccountId,
      'exId': [0, Validators.required],
      'fileCode': ['', Validators.required],
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
  forkJoin([this._masterService.getExchangeName()]).pipe(map
    (response => {
    this.exchangeList = response[0];
    this.filterExchangeList = response[0];
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
  this._masterService.getFileCodeId(id).subscribe((res) => {
    this.itemForm.get('accountId').setValue(this.selectedAccountId);
    this.itemForm.get('exId').setValue(res.exId);
    this.itemForm.get('fileCode').setValue(res.fileCode);
    this.itemForm.get('id').setValue(res.id);

    
  });
}

  getInterestList() {
    this._masterService.getFileCodeList(this.selectedAccountId).subscribe((results) => {
         this.interestMasterList = results;       
        });
    }

  public onItemSubmit(values: Object): void {
    if (this.selectedAccountId == 0) {
      const dialogRef = this.dialog.open(ErrorDialog, {
        data: {
          message: 'Please select or save account to save FileCode.',
          buttonText: {
            ok: 'OK',
  
          }
        }
  
      });
    } else {
      var body = this.itemForm.value;
    
      if (this.itemForm.valid) {
        //const body = JSON.stringify(addFormData);
        this._masterService.saveAcFileCode(body).subscribe(result => {
          console.log("result", result);
          this.getInterestList();
          this.resetForm(this.itemForm);
          this.snackBar.open("FileCode details saved sucessfully", "Success", {
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
          this._masterService.deleteAcFileCode(params.data.id).subscribe((res) => {
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
onInputExchangeChange(event: any) {
  const searchInput = event.target.value.toLowerCase();

  this.filterExchangeList = this.exchangeList.filter((data) => {
    const prov = data.name.toLowerCase();
    return prov.includes(searchInput);
  });

  if (searchInput === '') {
    this.filterExchangeList = [...this.exchangeList];
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