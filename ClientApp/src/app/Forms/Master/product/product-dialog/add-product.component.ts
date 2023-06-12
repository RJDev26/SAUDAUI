import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Product } from '../product.model';
import { MasterService } from '../../master.service';

@Component({
    selector: 'app-product-dialog',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {
    public productForm:UntypedFormGroup;

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddProductComponent>, @Inject(MAT_DIALOG_DATA) public user: Product, private _appService: MasterService) {
        console.log(this.dialogRef);
    }

    bindFormControls() {
        this.productForm = this.formBuilder.group({
            'ExchangeName': [],
            'symbol': [],
            'priceUnit': [],
            'description': [],
            'lotSize': [],
            'isinSize': [],
            'qtyUnit': [],
            'securityGroup': []
        });
    }

    ngOnInit() {
        this.bindFormControls();
    }
}