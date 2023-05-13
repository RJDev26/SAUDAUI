import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder, Validators, FormControl} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MasterService } from '../../master.service';
import { Account } from '../account.model';

export interface State {
  id: number;
  name: string;
}

export interface City {
  item1: number;
  item2: string;
}

export interface ACGroup {
  id: number;
  name: string;
  parentId: number;
}

@Component({
  selector: 'app-account-dialog',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  public personalForm:UntypedFormGroup;

  acGroupCtrl = new FormControl('');
  filteredacGroup: Observable<ACGroup[]>;

  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;

  cityCtrl = new FormControl('');
  filteredCity: Observable<City[]>;

  acGroupList: ACGroup[];
  stateList: State[];
  cityList: City[];

  public types = [
    {name: 'Trader' },
    {name: 'Farmer' },
    {name: 'Broker' } 
  ];
 
  constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddAccountComponent>, @Inject(MAT_DIALOG_DATA) public user: Account, private _appService: MasterService) {
    console.log(this.dialogRef);
  }

  bindFormControls() {
    this.personalForm = this.formBuilder.group({
      'Name': ['', Validators.required],
      'Opbal': ['', Validators.required],
      'Type': [''],
      'ACGroup':[''],
      'Email': ['', Validators.compose([Validators.required, emailValidator])],
      'Phone': ['', Validators.required],
      'Mobile': [''],
      'StateName' : [''],
      'CityName' : [''],
      'gstNo': [''],
      'Pin': [''],
      'Address' : [''],
      'accNo': [''],
      'accName': [''],
      'Branch': [''],
      'Bank': [''],
      'ifsc': ['']
    });
  }

  bindFilterFntoList(){
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(stateObj =>{
        return stateObj ? this._filterStates(stateObj) : this.stateList.slice()
      }),
    );

    this.filteredacGroup = this.acGroupCtrl.valueChanges.pipe(
      startWith(''),
      map(acGroupObj =>{
        return acGroupObj ? this._filterACGroup(acGroupObj) : this.acGroupList.slice()
      }),
    );
  }

  initialApiCalls() {
    forkJoin([this._appService.getState(), this._appService.getAcGoup()]).pipe(map(response=>{
      console.log(response);
      this.stateList = response[0];
      this.acGroupList = response[1];
      this.bindFilterFntoList();
    })).subscribe(res=>{
      this.getValuesInEditMode();
    });
  }

  getValuesInEditMode() {
    if(this.user){
      const acGroup =  this.acGroupList.find((obj=>obj.id === this.user.acGroup));
      const optedState =  this.stateList.find((obj=>obj.id === this.user.stateId));
      if(optedState?.id){
        this.getSelectedState(optedState, ()=>{
          const optedCity = this.cityList.find((obj=>obj.item1 === this.user.cityId));
          this.bindValuesInEditMode(acGroup, optedState, optedCity);
        });
      } else {
        this.bindValuesInEditMode(acGroup, optedState);
      }
      console.log(this.user);
    }
  }

  bindValuesInEditMode(acGroup:ACGroup, optedState:State, optedCity?: City) {
    this.personalForm.setValue({
      'Name': this.user.name,
      'Opbal': this.user.opbal,
      'Type': this.user.type,
      'ACGroup':acGroup?acGroup.name:'',
      'Email': this.user.email,
      'Phone': this.user.phoneO,
      'Mobile': this.user.mobile,
      'StateName' : optedState?optedState.name:'',
      'CityName' : optedCity?optedCity.item2:'',
      'gstNo': this.user.gstNo,
      'Pin': this.user.gstNo,
      'Address' : this.user.add1,
      'accNo': this.user.acno,
      'accName': this.user.acname,
      'Branch': this.user.branch,
      'Bank': this.user.bank,
      'ifsc': this.user.ifci
    });
  }


  ngOnInit() {
    this.bindFormControls();
    this.initialApiCalls();
  }
  

  private _filterACGroup(value: string): ACGroup[] {
    const filterValue = value.toLowerCase();
    return this.acGroupList.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.stateList.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  private _filterCity(value: string): City[] {
    const filterValue = value.toLowerCase();
    return this.cityList.filter(state => state.item2.toLowerCase().includes(filterValue));
  }

  private getCityId(name:string) {
    const cityObj = this.cityList?.find((city)=>city.item2.toLocaleLowerCase() === name.toLocaleLowerCase());
    return cityObj?.item1;
  }

  private getAcGroupId(name:string) {
    const cityObj = this.acGroupList.find((city)=>city.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    return cityObj?.id;
  }

  public onSubmit(values:Object):void {
    console.log(values)
      if (this.personalForm.valid) {
        let addFormData = {
              "CityId": this.getCityId(this.cityCtrl.value),
              "ACGroup": this.getAcGroupId(this.acGroupCtrl.value),
              "Name": this.personalForm.get('Name').value,
              "Type":this.personalForm.get('Type').value,
              "Opbal": Number(this.personalForm.get('Opbal').value),
              "PhoneO ": this.personalForm.get('Phone').value,
              "Mobile ": this.personalForm.get('Mobile').value,
              "Email": this.personalForm.get('Email').value,
              "Add1": this.personalForm.get('Address').value,
              "Pin": this.personalForm.get('Pin').value,
              "Acno": this.personalForm.get('accNo').value,
              "Acname": this.personalForm.get('accName').value,
              "Bank": this.personalForm.get('Bank').value,
              "Branch": this.personalForm.get('Branch').value,
              "Ifci": this.personalForm.get('ifsc').value,
              "GstNo": this.personalForm.get('gstNo').value 
        }
        if(this.user.id){
          addFormData['id'] = this.user.id;
        }
        const body = JSON.stringify(addFormData);
        this._appService.saveAccount(body).subscribe(result => {
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

  getSelectedCity(city){
    this.personalForm.controls['cityId'].setValue(city.item1);
    this.personalForm.controls['cityName'].setValue(city.item2);
  }

  getSelectedState(state, callbackFn){
    this._appService.getCityListByStateId(state.id).subscribe((cityList)=>{
      this.cityList = cityList;
      if(callbackFn){
        callbackFn();
      }
      this.filteredCity = this.cityCtrl.valueChanges.pipe(
        startWith(''),
        map(cityObj =>{
          return cityObj ? this._filterCity(cityObj) : this.cityList.slice()
        }),
      );
    });
  }

}

export function emailValidator(control: UntypedFormControl): {[key: string]: any} {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
  if (control.value && !emailRegexp.test(control.value)) {
      return {invalidEmail: true};
  }
}
