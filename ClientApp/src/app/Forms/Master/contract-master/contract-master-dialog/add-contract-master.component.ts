import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MasterService } from '../../master.service';
import { ContractMaster } from '../contract-master.model';

@Component({
    selector: 'app-contract-master-dialog',
    templateUrl: './add-contract-master.component.html',
    styleUrls: ['./add-contract-master.component.scss']
})

export class AddContractMasterComponent implements OnInit { 
    public contractForm:UntypedFormGroup;

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddContractMasterComponent>, @Inject(MAT_DIALOG_DATA) public user: ContractMaster, private _appService: MasterService) {
        console.log(this.dialogRef);
    }

    bindFormControls() {
        this.contractForm = this.formBuilder.group({
            'ExchangeName': [],
            'symbol': [],
            'strikePrice': [],
            'InstrumentName': [],
            'OptionTypeName': [],
            'TradeableLot': []
        });
    }

    ngOnInit() {
        this.bindFormControls();
    }
}