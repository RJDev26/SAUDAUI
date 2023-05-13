import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { User, UserContacts, UserProfile, UserSettings, UserSocial, UserWork } from '../../../../pages/users/user.model';


@Component({
  selector: 'app-item-dialog',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  public form:UntypedFormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<AddItemComponent>,
              @Inject(MAT_DIALOG_DATA) public user: User,
              public fb: UntypedFormBuilder) {

  }

  ngOnInit() {
 
  }

  close(): void {
    this.dialogRef.close();
  }

}
