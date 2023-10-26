import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { User, UserContacts, UserProfile, UserSettings, UserSocial, UserWork } from '../../../../pages/users/user.model';
import { MasterService } from '../../master.service';
import { Item } from '../item.model';
import { forkJoin, map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-item-dialog',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  public itemForm: UntypedFormGroup;
  exchangeList: any;
  selectedId: any;

  constructor(public snackBar: MatSnackBar, private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddItemComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
   
    this.selectedId = data.id;
    if (data.id == null) { this.selectedId = 0; }
   
  }

  bindFormControls() {
    this.itemForm = this.formBuilder.group({
     
      'ExId': ['', Validators.required],
      'itemCode': ['', Validators.required],
      'itemName': ['', Validators.required],
      'exchangeSymbol': [],
      'lotSizeValueMultiplier': [],
      'IsinCode': [],
      'ApplyCtt': [],
      'applyRiskManagementFees': [],
      'id': []
    });
   this.initialApiCalls();
}


  initialApiCalls() {
    forkJoin([this._appService.getExchangeName()]).pipe(map(response => {
      this.exchangeList = response[0];
    })).subscribe(res => {
    
    });
  }


  getItemInfo()
  {
    this._appService.getItemById(this.selectedId).subscribe((res) => {
      debugger
      this.itemForm.get('itemCode').setValue(res.itemCode);
      this.itemForm.get('itemName').setValue(res.itemName);
      this.itemForm.get('exchangeSymbol').setValue(res.exchangeSymbol);
      this.itemForm.get('ExId').setValue(res.exId);
      this.itemForm.get('IsinCode').setValue(res.isinCode);

      this.itemForm.get('lotSizeValueMultiplier').setValue(res.lotSizeValueMultiplier.toFixed(2));
      this.itemForm.get('ApplyCtt').setValue(res.applyCtt);
      this.itemForm.get('applyRiskManagementFees').setValue(res.applyRiskManagementFees);
      this.itemForm.get('id').setValue(res.id);

      
    });

  }

  public onSubmit(values: Object): void {

    if ((this.itemForm.get('ApplyCtt').value) == null)
    {
      this.itemForm.controls['ApplyCtt'].setValue(false);
    }
    if ((this.itemForm.get('applyRiskManagementFees').value) == null) {
      this.itemForm.controls['applyRiskManagementFees'].setValue(false);
    }

    this.itemForm.controls['lotSizeValueMultiplier'].setValue(Number(this.itemForm.get('lotSizeValueMultiplier').value));

    var body = this.itemForm.value;
    debugger;
    //body.accountGroupId = this.getAcGroupId(this.acGroupCtrl.value);
    //body.accountHeadId = this.getAcHeadId(this.acHeadCtrl.value);
    //body.CityId = this.getCityId(this.cityCtrl.value);

    if (this.itemForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._appService.saveItem(body).subscribe(result => {
        if(result.isSuccess){
          console.log("result", result);
          this.dialogRef.close();
        } else {
          this.showToaster(result.message, true);
        }
      }, err => {
        console.log(err);
      });
    }
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError? 600000 : 300000;
  
    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass,
    });
  }

  populateFields() {
    if(!this.selectedId){
      const itemCodeValue = this.itemForm.get('itemCode').value;
      this.itemForm.get('itemName').setValue(itemCodeValue);
      this.itemForm.get('exchangeSymbol').setValue(itemCodeValue);
    }
  }
  

  ngOnInit() {
    this.bindFormControls();
    if (this.selectedId != 0) {
      this.getItemInfo();
    }
    else
    {
      this.itemForm.get('id').setValue(0);
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}
