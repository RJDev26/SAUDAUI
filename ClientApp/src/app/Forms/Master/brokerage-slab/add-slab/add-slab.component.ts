import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-slab',
  templateUrl: './add-slab.component.html',
  styleUrls: ['./add-slab.component.scss']
})
export class AddSlabComponent implements OnInit {

  public slabForm: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder) { }

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
      //const body = JSON.stringify(addFormData);
      // this._appService.saveItem(body).subscribe(result => {
      //   console.log("result", result);
      //   this.dialogRef.close();
      // }, err => {
      //   console.log(err);
      // });
    }
  }

}
