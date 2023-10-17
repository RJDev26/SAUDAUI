import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { forkJoin, map } from 'rxjs';
import { AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/service/app.service';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { ErrorDialog } from '../../../Dialog/confirmation-dialog/error-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MasterService } from 'src/app/Forms/Master/master.service';
import { MasterSecondService } from 'src/app/Forms/Master/master-second.service';
import { LogsService } from '../../logs.service';

@Component({
  selector: 'app-missing-trade',
  templateUrl: './missing-trade.component.html',
  styleUrls: ['./missing-trade.component.scss']
})
export class MissingTradeComponent implements OnInit {
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
  itemGroupList: any[] = [];
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

    { headerName: 'Symbol Name', field: 'symbolName', filter: true, sorting: true, resizable: true, flex: 1, },
  ];

  constructor(public appSettings: AppSettings,
    private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<MissingTradeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService, private _logServices: LogsService,
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
    this._logServices.getMissingSymbol(this.selectedId).subscribe((res) => {
      this.itemGroupList = res.data;
    });
  }

  ngOnInit() {
    this.initialApiCalls();
  }

  close(): void {
    this.dialogRef.close();
  }
}
