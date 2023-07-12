import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../../master.service';
import { forkJoin, map } from 'rxjs';
import { AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/service/app.service';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';


export interface Tax {
    id: number;
    name: string;
}

@Component({
    selector: 'app-tax-dialog',
    templateUrl: './add-tax-master.component.html',
    styleUrls: ['./add-tax-master.component.scss']
})

export class AddTaxComponent implements OnInit {
    @ViewChild('select') select: MatSelect;
    public taxMasterForm: UntypedFormGroup;
    public taxForm: FormGroup;
    applyOnList: any;
    selectedId: any;
    accountList: any[];
    accountIds: Array<string>;
    filteredProviders: any[];
    taxList: Tax[];
    filteredAccountList: any[];
    accountAllSellected: boolean = false;
    accountTaxList: any[];
    gridApi: any;
    isRowSelected: boolean = false;
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

    columnDefs = [{
        headerName: 'Added account tax list',
        children: [
    
          {
            headerName: '', editable: false, width: 45, maxwidth: 80, resizable: true, checkboxSelection: true, headerCheckboxSelection: true,
          },
          { headerName: 'Account', field: 'account', filter: true, sorting: true, resizable: true },
          { headerName: 'Tax', field: 'tax', filter: true, sorting: true, resizable: true },
        ]
      }];

    constructor(public appSettings: AppSettings, private _appService: MasterService, private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddTaxComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _masterService: MasterService) {
        this.selectedId = data.id;
        if (data.id == null) { this.selectedId = 0; }
    }

    fetchDropdownData() {
        this._masterService.getAccounts().subscribe((response) => { 
          this.accountList = response;
          this.filteredProviders = this.accountList;
       });
    }

    onInputChange(event: any) {
        const searchInput = event.target.value.toLowerCase();
    
        this.filteredProviders = this.accountList.filter((data) => {
          const prov = data.name.toLowerCase();
          return prov.includes(searchInput);
        });
      }

    bindFormControls() {
        this.taxMasterForm = this.formBuilder.group({
            'name': ['', Validators.required], 
            'appliedOn': ['', Validators.required],    
            'id': [0]
        });
        this.initialApiCalls();
    }

    bindAccountTaxControls() {
        this.taxForm = this.formBuilder.group({
            'taxId': ['', Validators.required],
            'YesNo': ['1', Validators.required],    
            'id': [0]
        });
        this.initialApiCalls();
    }

    onAccountChange(event: any, isLastIndex?: boolean) {
        if(this.accountAllSellected && !isLastIndex){
          return;
        }
        if(this.accountIds.length < 2 && this.accountIds[0] == '-1'){
          return;
        }
      }

    accountAllSelection() {
        this.accountAllSellected = true;
        var isAllChecked = this.select.options.first.selected;
        this.select.options.forEach(
            (item: MatOption, index) =>
                {
      
                    if (isAllChecked) { item.select(); }
                    else { item.deselect() }
                    if(index === this.select.options.length -1){
                    this.onAccountChange([], true);
                }
            }     
        );
   }

    initialApiCalls() {
        forkJoin([this._appService.getApplyOn(), this._appService.getTaxType()]).pipe(map(response => {
          this.applyOnList = response[0];
          this.taxList = response[1];
        })).subscribe(res => {
        
        });
    }

    getTaxInfo()
    {
        this._appService.getTaxById(this.selectedId).subscribe((res) => {
        this.taxMasterForm.get('name').setValue(res.name);
        this.taxMasterForm.get('appliedOn').setValue(res.appliedOn);
        this.taxMasterForm.get('id').setValue(res.id);   
        });
    } 
    
    public onSubmit(values: Object): void {
    
        this.taxMasterForm.controls['name'].setValue(String(this.taxMasterForm.get('name').value));
        this.taxMasterForm.controls['appliedOn'].setValue(String(this.taxMasterForm.get('appliedOn').value));
    
        var body = this.taxMasterForm.value;
    
        if (this.taxMasterForm.valid) {
          this._appService.saveTax(body).subscribe(result => {
            this.dialogRef.close();
          }, err => {
            console.log(err);
          });
        }
    }

    ngOnInit() {
        this.bindFormControls();
        this.fetchDropdownData();
        if (this.selectedId != 0) {
            this.getTaxInfo();
        }
        else {
            this.taxMasterForm.get('id').setValue(0);
        }
    }

    close(): void {
        this.dialogRef.close();
    }
}