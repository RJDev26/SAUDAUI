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
  selector: 'app-view-item-group',
  templateUrl: './view-item-group.component.html',
  styleUrls: ['./view-item-group.component.scss']
})
export class ViewItemGroupComponent implements OnInit {
  @ViewChild('select') select: MatSelect;
  public itemGroupNameForm: UntypedFormGroup;
  public exchangeForm: UntypedFormGroup;
  applyOnList: any;
  exchangeList: any;
  selectedId: any;
  selectedName: any;
  accountList: any[];
  accountIds: Array<string>;

  accountAllSellected: boolean = false;
  itemGroupList: any[];
  accountApplyOnList: any[];
  gridApi: any;
  isRowSelected: boolean = false;
  agGridOptions: any = {
    defaultColDef: {
      filter: true,
      flex: 1,
      sortable: true,
      wraptext: true,
      resizable: true,
      minWidth: 100,
     
    },
    suppressRowHoverHighlight: true,
  }

  columnDefs = [

    { headerName: 'Exchange Name', field: 'exName', filter: true, sorting: true, resizable: true, flex: 1, },
    { headerName: 'Item Name', field: 'itemName', filter: true, sorting: true, resizable: true, flex: 1, },

  ];

  constructor(public appSettings: AppSettings,
    private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<ViewItemGroupComponent>,
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
    if (this.selectedId != 0) { this.getItemGroupList(); }
  }

  getItemGroupList() {
    this._masterSecondService.getItemGroupList(this.selectedId).subscribe((res) => {
      this.itemGroupList = res;
    });
  }

  ngOnInit() {
    this.initialApiCalls();
  }

  close(): void {
    this.dialogRef.close();
  }
}
