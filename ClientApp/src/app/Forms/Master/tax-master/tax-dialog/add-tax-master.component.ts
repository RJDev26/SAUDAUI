import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../../master.service';
import { forkJoin, map } from 'rxjs';

@Component({
    selector: 'app-tax-dialog',
    templateUrl: './add-tax-master.component.html',
    styleUrls: ['./add-tax-master.component.scss']
})

export class AddTaxComponent implements OnInit {
    public taxMasterForm: UntypedFormGroup;
    applyOnList: any;
    selectedId: any;

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddTaxComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
        this.selectedId = data.id;
        if (data.id == null) { this.selectedId = 0; }
    }

    bindFormControls() {
        this.taxMasterForm = this.formBuilder.group({
            'name': ['', Validators.required], 
            'appliedOn': ['', Validators.required],    
            'id': [0]
        });
        this.initialApiCalls();
    }

    initialApiCalls() {
        forkJoin([this._appService.getApplyOn()]).pipe(map(response => {
          this.applyOnList = response[0];
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