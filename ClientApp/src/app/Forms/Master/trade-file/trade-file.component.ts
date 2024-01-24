import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { AppSettings } from "src/app/app.settings";
import { Settings } from "src/app/app.settings.model";
import { MasterService } from "../master.service";
import { ConfirmationDialog } from "../../Dialog/confirmation-dialog/confirmation-dialog.component";
import { MasterSecondService } from "../master-second.service";
import { AppService } from "src/app/service/app.service";
import { forkJoin, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-trade-file',
  templateUrl: './trade-file.component.html',
  styleUrls: ['./trade-file.component.scss']
})
export class TradeFileComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  public itemForm: UntypedFormGroup;
  editing = {};
  rows = [];
  temp = [];
  typeList: any;
  filteredTypeList: any[] = [];
  brokerList: any;
  filterBrokerList: any[]= [];
  clientList: any;
  filterClientList: any[]= [];
  selected = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  partyAs = [{'id':'C', 'name':'Client'}, {'id':'U', 'name':'User Id'}, {'id':'F', 'name':'Fixed Client'}]
 
  public settings: Settings;
  symbolMappingList: any[]=[];
constructor(public snackBar: MatSnackBar, public appSettings: AppSettings, private formBuilder: UntypedFormBuilder,
  public dialog: MatDialog, private _appService: AppService, private _masterService: MasterService, private _masterSecondService: MasterSecondService) {
      this.settings = this.appSettings.settings;
    }

  ngOnInit() {
      this.getSymbolMappingList();
      this.bindFormControls();
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'type': ['', Validators.required],
      'broker': ['', Validators.required],
      'partyAs': ['', Validators.required],
      'clientAc': ['', Validators.required],
      'id': [0]
    });
    this.itemForm.get('partyAs').valueChanges.subscribe((partyAsValue) => {
      if (partyAsValue === 'C' || partyAsValue === 'U') {
        // If 'partyAs' is 'C' or 'U', hide 'clientAc' and remove validation
        this.itemForm.get('clientAc').clearValidators();
        this.itemForm.get('clientAc').disable();
      } else if (partyAsValue === 'F') {
        // If 'partyAs' is 'F', show 'clientAc' and set it as required
        this.itemForm.get('clientAc').setValidators(Validators.required);
        this.itemForm.get('clientAc').enable();
      }
      // Update the 'clientAc' validation
      this.itemForm.get('clientAc').updateValueAndValidity();
    });
   this.initialApiCalls();
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
      { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
      { headerName: 'Broker', field: 'brokerName', filter: true, sorting: true, resizable: true },
    { headerName: 'Type', field: 'fileType', filter: true, sorting: true, resizable: true },  
    { headerName: 'PartyAs', field: 'partyAs', filter: true, sorting: true, resizable: true },  
    { headerName: 'ClientAc', field: 'clientName', filter: true, sorting: true, resizable: true },  
  ];

  initialApiCalls() {
    forkJoin([this._appService.tradeFileType(), this._masterService.getAccount()]).pipe(map(response => {
      this.typeList = response[0];
     this.filteredTypeList = response[0];
      this.brokerList = response[1];
    this.filterBrokerList = response[1];
    this.clientList = response[1];
    this.filterClientList = response[1];
    })).subscribe(res => {
    });
  }

  onInputChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredTypeList = this.typeList.filter((data) => {
      const prov = data.itemCode.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === '') {
      this.filteredTypeList = [...this.typeList];
    }
  }

  onInputBrokerChange(event: any) {
    const searchInput = event.target.value.toLowerCase();
  
    this.filterBrokerList = this.brokerList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  
    if (searchInput === '') {
      this.filterBrokerList = [...this.brokerList];
    }
  }

  onInputClientChange(event: any) {
    const searchInput = event.target.value.toLowerCase();
  
    this.filterClientList = this.clientList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  
    if (searchInput === '') {
      this.filterClientList = [...this.clientList];
    }
  }

  public onSubmit(values: Object): void {
    var body = this.itemForm.value;

    if (this.itemForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._masterSecondService.saveTradeFileType(body).subscribe(result => {
        if(result.isSuccess){
          console.log("result", result);
          this.getSymbolMappingList();
          this.resetForm(this.itemForm);
        } else {
          this.showToaster(result.message, true);
        }
      }, err => {
        console.log(err);
      });
    }
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

getSymbolMappingList() {
  this._masterSecondService.getTradeFileList().subscribe((results) => {
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
          this._masterSecondService.deleteTradeFileType(params.data.id).subscribe((res) => {
            this.getSymbolMappingList();
            if(res.isSuccess){
              this.showToaster(res.message);
            } else {
              this.showToaster(res.message, true);
            }
          });
        }
      });


    }
  }

  public openExchangeDialog(id) {
    this._masterSecondService.getTradeFileId(id).subscribe((response) => {
      var res = response;
      this.itemForm.get('id').setValue(res.id);
      this.itemForm.get('name').setValue(res.name);
      this.itemForm.get('type').setValue(res.type);
      this.itemForm.get('broker').setValue(res.broker);
      this.itemForm.get('partyAs').setValue(res.partyAs);
      this.itemForm.get('clientAc').setValue(res.clientAc);      
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
