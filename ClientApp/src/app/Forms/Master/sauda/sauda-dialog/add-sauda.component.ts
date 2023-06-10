import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MasterService } from "../../master.service";
import { Sauda } from '../sauda.model';

@Component({
    selector: 'app-sauda-dialog',
    templateUrl: './add-sauda.component.html',
    styleUrls: ['./add-sauda.component.scss']
})

export class AddSaudaComponent implements OnInit {
    public saudaForm:UntypedFormGroup;

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddSaudaComponent>, @Inject(MAT_DIALOG_DATA) public user: Sauda, private _appService: MasterService) {
        console.log(this.dialogRef);
    }

    bindFormControls() {
        this.saudaForm = this.formBuilder.group({
            'itemName': [],
        });
    }

    ngOnInit() {
        this.bindFormControls();
    }

}