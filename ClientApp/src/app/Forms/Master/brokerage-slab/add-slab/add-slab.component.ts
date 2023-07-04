import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MasterService } from '../../master.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-slab',
  templateUrl: './add-slab.component.html',
  styleUrls: ['./add-slab.component.scss']
})
export class AddSlabComponent implements OnInit {

  public slabForm: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder, private _masterService: MasterService, public dialogRef: MatDialogRef<AddSlabComponent>) { }

  ngOnInit(): void {
    this.bindFormControls();
  }

  bindFormControls() {
    this.slabForm = this.formBuilder.group({
      'Name': ['', Validators.required]
    });
  }

  public onSubmit(values: Object): void {

    var body = this.slabForm.value;
    console.log(body);
    if (this.slabForm.valid) {
      this._masterService.saveBrokerageSlabName(body.Name).subscribe(result => {
        console.log("result", result);
        this.dialogRef.close();
      });
    }
  }
  close(): void {
    this.dialogRef.close();
}

}
