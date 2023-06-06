import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { User, UserContacts, UserProfile, UserSettings, UserSocial, UserWork } from '../../../../pages/users/user.model';
import { MasterService } from '../../master.service';
import { Item } from '../item.model';


@Component({
  selector: 'app-item-dialog',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  public itemForm:UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddItemComponent>, @Inject(MAT_DIALOG_DATA) public user: Item, private _appService: MasterService) {
    console.log(this.dialogRef);
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
      'CompanyName': [],
      'ExchangeName': [],
      'itemCode': [],
      'itemName': [],
      'exchangeSymbol': [],
      'lotSize': [],
      'IsinCode': [],
      'ApplyCtt': [],
      'ApplyRMF': []
    });
}

  ngOnInit() {
    this.bindFormControls();
  }

  close(): void {
    this.dialogRef.close();
  }

}
