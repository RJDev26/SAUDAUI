import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MasterService } from '../../master.service';
import { ContractMaster } from '../contract-master.model';
import { forkJoin, map } from 'rxjs';

@Component({
    selector: 'app-contract-master-dialog',
    templateUrl: './add-contract-master.component.html',
    styleUrls: ['./add-contract-master.component.scss']
})

export class AddContractMasterComponent implements OnInit { 
    public contractForm:UntypedFormGroup;
    exchangeList: any;
    InstrumentTypeList: any;
    OptionTypeList: any;
    selectedId: any

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddContractMasterComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
        this.selectedId = data.id;
        if (data.id == null) { this.selectedId = 0; }
    }

    bindFormControls() {
        this.contractForm = this.formBuilder.group({
            'ExId': ['', Validators.required],
            'symbol': ['', Validators.required],
            'strikePrice': ['', Validators.required],
            'instrumentType': ['', Validators.required],
            'optionType': ['', Validators.required],
            'tradeableLot': ['', Validators.required],
            'maturity': [],
            'id': [0]
        });
        this.initialApiCalls();
    }

    initialApiCalls() {
        forkJoin([this._appService.getExchangeName(), this._appService.getInstrument(), this._appService.getOption()]).pipe(map(response => {
          this.exchangeList = response[0];
          this.InstrumentTypeList = response[1]
          this.OptionTypeList = response[2]
        })).subscribe(res => {
        
        });
    }

    getInstrumentInfo() {
        this._appService.getContractById(this.selectedId).subscribe((res) => {
            this.contractForm.get('symbol').setValue(res.symbol);
            this.contractForm.get('strikePrice').setValue(res.strikePrice);
            this.contractForm.get('instrumentType').setValue(res.instrumentType);
            this.contractForm.get('optionType').setValue(res.optionType);
            this.contractForm.get('tradeableLot').setValue(res.tradeableLot);
            this.contractForm.get('maturity').setValue(res.maturity);
            this.contractForm.get('id').setValue(res.id);  
            this.contractForm.get('ExId').setValue(res.exId);     
        });
    }

    public onSubmit(values: Object): void {
        this.contractForm.controls['symbol'].setValue(String(this.contractForm.get('symbol').value));
        this.contractForm.controls['strikePrice'].setValue(Number(this.contractForm.get('strikePrice').value));
        this.contractForm.controls['instrumentType'].setValue(String(this.contractForm.get('instrumentType').value));
        this.contractForm.controls['optionType'].setValue(String(this.contractForm.get('optionType').value));
        this.contractForm.controls['tradeableLot'].setValue(Number(this.contractForm.get('tradeableLot').value));
        //this.contractForm.controls['maturity'].setValue(String(this.contractForm.get('maturity').value));
        var body = this.contractForm.value;
        if (this.contractForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._appService.saveContract(body).subscribe(result => {
              console.log("result", result);
              this.dialogRef.close();
            }, err => {
              console.log(err);
            });
        }
    }

    ngOnInit() {
        this.bindFormControls();
        if (this.selectedId != 0) {
            this.getInstrumentInfo();
        }
        else {
            this.contractForm.get('id').setValue(0);
        }
    }

    close(): void {
        this.dialogRef.close();
    }
}