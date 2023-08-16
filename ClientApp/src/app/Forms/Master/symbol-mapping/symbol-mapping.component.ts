import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { ConfirmationDialog } from "../../Dialog/confirmation-dialog/confirmation-dialog.component";
import { MasterSecondService } from "../master-second.service";
import { AppService } from "src/app/service/app.service";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-symbol-mapping',
  templateUrl: './symbol-mapping.component.html',
  styleUrls: ['./symbol-mapping.component.scss']
})
export class SymbolMappingComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  public itemForm: UntypedFormGroup;
  editing = {};
  rows = [];
  temp = [];
  itemList: any;
  filteredItemList: any[] = [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
 
  public settings: Settings;
  symbolMappingList: any;
constructor(public appSettings: AppSettings, private formBuilder: UntypedFormBuilder,
  public dialog: MatDialog, private _appService: AppService, private _masterService: MasterService, private _masterSecondService: MasterSecondService) {
      this.settings = this.appSettings.settings;
    }

  ngOnInit() {
      this.getSymbolMappingList();
      this.bindFormControls();
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
      'itemId': ['', Validators.required],
      'symbol': ['', Validators.required],
      'id': [0]
    });
   this.getitemList();
}

  agGridOptions: any = {
      defaultColDef: {
        filter: true,
        flex: 1,
        sortable: true,
        wraptext: true,
        resizable: true
      }
  }

  columnDefs = [
      {
        headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80, filter: false,
        maxWidth: 110, resizable: true
      },
      { headerName: 'ItemID', field: 'itemId', filter: true, sorting: true, resizable: true },
      { headerName: 'Item Name', field: 'itemName', filter: true, sorting: true, resizable: true },
    { headerName: 'Symbol', field: 'symbol', filter: true, sorting: true, resizable: true },  
  ];

  getitemList() {
    this._appService.getitems().subscribe((results) => {
     this.itemList = results;
     this.filteredItemList = results;
    });
  }

  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredItemList = this.itemList.filter((data) => {
      const prov = data.itemCode.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === '') {
      this.filteredItemList = [...this.itemList];
    }
  }

  public onSubmit(values: Object): void {
    var body = this.itemForm.value;

    if (this.itemForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._masterSecondService.saveSymbolMapping(body).subscribe(result => {
        console.log("result", result);
        this.getSymbolMappingList();
        this.resetForm(this.itemForm);
      }, err => {
        console.log(err);
      });
    }
  }
getSymbolMappingList() {
  this._masterSecondService.getSymbolMappingList().subscribe((results) => {
       this.symbolMappingList = results;       
      });
  }

  public actionCellRenderer(params: any) {
      let eGui = document.createElement("div");
      let editingCells = params.api.getEditingCells();
      let isCurrentRowEditing = editingCells.some((cell: any) => {
        return cell.rowIndex === params.node.rowIndex;
      });
      eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>
                        <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;    
      return eGui;
  }

  onGridClick(params: any) {
    if (params.event.target.dataset.action == "edit")
    {
      this.openExchangeDialog(params.data.id);
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
          this._masterSecondService.deleteSymbolMapping(params.data.id).subscribe((res) => {
            this.getSymbolMappingList();
          });
        }
      });


    }
  }

  public openExchangeDialog(id) {
    this._masterSecondService.getSymbolMappingId(id).subscribe((response) => {
      var res = response[0];
      this.itemForm.get('id').setValue(res.id);
      this.itemForm.get('symbol').setValue(res.symbol);
      this.itemForm.get('itemId').setValue(res.itemId);      
    });
  } 

  resetForm(myForm) {
    myForm.reset();
    myForm.get('id').setValue(0);
    Object.keys(myForm.controls).forEach(key => {
      myForm.get(key).setErrors(null);
    });
  }

  close() {
    this.resetForm(this.itemForm);
  }
}