import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Product } from '../product.model';
import { MasterService } from '../../master.service';
import { forkJoin, map } from 'rxjs';

@Component({
    selector: 'app-product-dialog',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {
    public productForm:UntypedFormGroup;
    exchangeList: any;
    selectedId: any;

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddProductComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
        this.selectedId = data.id;
        if (data.id == null) { this.selectedId = 0; }
    }

    bindFormControls() {
        this.productForm = this.formBuilder.group({
            'ExId': ['', Validators.required],
           
            'symbol': ['', Validators.required],
            'priceUnit': ['', Validators.required],
            'description': ['', Validators.required],
            'lotSize': ['', Validators.required],
            'isincode': ['', Validators.required],
            'qtyUnit': ['', Validators.required],
            'securityGroup': ['', Validators.required],
            'id': [0]
        });
        this.initialApiCalls();
    }

    initialApiCalls() {
        forkJoin([this._appService.getExchangeName()]).pipe(map(response => {
            debugger
          this.exchangeList = response[0];
        })).subscribe(res => {
        
        });
    }

    getProductInfo()
    {
        this._appService.getProductById(this.selectedId).subscribe((res) => {
        this.productForm.get('symbol').setValue(res.symbol);
        this.productForm.get('priceUnit').setValue(res.priceUnit);
        this.productForm.get('description').setValue(res.description);
        this.productForm.get('lotSize').setValue(res.lotSize);
        this.productForm.get('qtyUnit').setValue(res.qtyUnit);
        this.productForm.get('isincode').setValue(res.isincode);
        this.productForm.get('securityGroup').setValue(res.securityGroup);
        this.productForm.get('id').setValue(res.id);  
        this.productForm.get('ExId').setValue(res.exId);     
        });
    }

    public onSubmit(values: Object): void {
    
        this.productForm.controls['symbol'].setValue(String(this.productForm.get('symbol').value));
        this.productForm.controls['priceUnit'].setValue(String(this.productForm.get('priceUnit').value));
        this.productForm.controls['description'].setValue(String(this.productForm.get('description').value));
        this.productForm.controls['lotSize'].setValue(Number(this.productForm.get('lotSize').value));
        this.productForm.controls['qtyUnit'].setValue(Number(this.productForm.get('qtyUnit').value));
        this.productForm.controls['isincode'].setValue(String(this.productForm.get('isincode').value));
        this.productForm.controls['securityGroup'].setValue(String(this.productForm.get('securityGroup').value));
    
        var body = this.productForm.value;
        debugger;
        //body.accountGroupId = this.getAcGroupId(this.acGroupCtrl.value);
        //body.accountHeadId = this.getAcHeadId(this.acHeadCtrl.value);
        //body.CityId = this.getCityId(this.cityCtrl.value);
    
        if (this.productForm.valid) {
          //const body = JSON.stringify(addFormData);
          this._appService.saveProduct(body).subscribe(result => {
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
            this.getProductInfo();
        }
        else {
            this.productForm.get('id').setValue(0);
        }
    }

    close(): void {
        this.dialogRef.close();
    }
}