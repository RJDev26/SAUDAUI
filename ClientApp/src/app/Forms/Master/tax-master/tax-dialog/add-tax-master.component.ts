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
    public taxForm: UntypedFormGroup;
    applyOn: any;
    selectedId: any;

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddTaxComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
        this.selectedId = data.id;
        if (data.id == null) { this.selectedId = 0; }
    }

    bindFormControls() {
        this.taxForm = this.formBuilder.group({
            'name': ['', Validators.required], 
            'ApplyOn': ['', Validators.required],  
            'type': ['', Validators.required],     
            'id': [0]
        });
        this.initialApiCalls();
    }

    initialApiCalls() {
        forkJoin([this._appService.getApplyOn()]).pipe(map(response => {
          this.applyOn = response[0];
        })).subscribe(res => {
        
        });
    }

    

    ngOnInit() {
        this.bindFormControls();
    }
}