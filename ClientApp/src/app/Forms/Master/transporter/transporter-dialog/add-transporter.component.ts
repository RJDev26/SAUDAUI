import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from '../../master.service';
import { Transporter } from '../transporter.model'


@Component({
    selector: 'add-transporter-dialog',
    templateUrl: './add-transporter.component.html',
    styleUrls: ['./add-transporter.component.scss']
})

export class AddTransporterComponent implements OnInit {
    public transporterForm:UntypedFormGroup;

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddTransporterComponent>, @Inject(MAT_DIALOG_DATA) public user: Transporter, private _appService: MasterService) {
        console.log(this.dialogRef);
    }

    bindFormControls() {
        this.transporterForm = this.formBuilder.group({
          'Name': ['', Validators.required],
          'Phone': ['', Validators.required],
          'Address' : [''],
          'City' : [''],
          'Refrence' : [''],
          'Email': ['', Validators.compose([Validators.required, emailValidator])],
        });
    }

    ngOnInit() {
        this.bindFormControls();
        //this.initialApiCalls();
    }

    public onSubmit(values:Object):void {
        if (this.transporterForm.valid) {
            let addFormData = {
                "Name": this.transporterForm.get('name').value,
                "Phone": this.transporterForm.get('phone').value,
                "Address": this.transporterForm.get('address').value,
                "City": this.transporterForm.get('city').value,
                "Refrence": this.transporterForm.get('refrence').value,                   
                "Email": this.transporterForm.get('email').value,
            }
            if(this.user.id){
              addFormData['id'] = this.user.id;
            }
            const body = JSON.stringify(addFormData);
            this._appService.saveTransporter(body).subscribe(result => {
              console.log("result", result);
              this.dialogRef.close();
            }, err=>{
              console.log(err);
            });
        }
    }

    close(): void {
        this.dialogRef.close();
    }
}

export function emailValidator(control: UntypedFormControl): {[key: string]: any} {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}