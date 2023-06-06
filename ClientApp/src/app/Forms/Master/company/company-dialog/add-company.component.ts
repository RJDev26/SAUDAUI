import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MasterService } from "../../master.service";
import { Company } from "../company.model";
import { Observable, forkJoin } from "rxjs";
import {map, startWith} from 'rxjs/operators';


export interface City {
    item1: number;
    item2: string;
}

export interface State {
    id: number;
    name: string;
}

@Component({
    selector: 'app-company-dialog',
    templateUrl: './add-company.component.html',
    styleUrls: ['./add-company.component.scss']
})

export class AddCompanyComponent implements OnInit {
    public companyForm:UntypedFormGroup;

    cityCtrl = new FormControl('');
    filteredCity: Observable<City[]>;

    stateCtrl = new FormControl('');
    filteredStates: Observable<State[]>;

    cityList: City[];
    stateList: State[];

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddCompanyComponent>, @Inject(MAT_DIALOG_DATA) public user: Company, private _appService: MasterService) {
        console.log(this.dialogRef);
    }

    bindFormControls() {
        this.companyForm = this.formBuilder.group({
          'CompanyName': [],
          'add': [],
          'CityName' : [''],
          'StateName' : [''],
          'phone' : [''],
          'email' : [''],
          'pin' : [''],
          'uniqueid' : [''],
          'ApplyOptionsMTM' : [''],
          'ApplyCashMTM' : [''],
          'ApplyInvoice' : [''],
          'ApplyOnlyBrokerage' : [''],
          'ApplySubBrokerage' : [''],
          'CheckRates' : [''],
          'ShowLots' : [''],
          'ApplySharing' : [''],
          'ApplyDecimalQty' : [''],
          'ApplyMargin' : [''],
          'ApplyContractNote' : [''],
          'RoundingOff' : [''],
          'RateRangeEnable' : [''],
          'SettlementPositing' : ['']
        });
    }

    bindFilterFntoList(){
        this.filteredStates = this.stateCtrl.valueChanges.pipe(
          startWith(''),
          map(stateObj =>{
            return stateObj ? this._filterStates(stateObj) : this.stateList.slice()
          }),
        );
    }

    initialApiCalls() {
        forkJoin([this._appService.getState()]).pipe(map(response=>{
          console.log(response);
          this.stateList = response[0];
          this.bindFilterFntoList();
        })).subscribe(res=>{
          //this.getValuesInEditMode();
        });
    }

    ngOnInit() {
        this.bindFormControls();   
    }

    private _filterCity(value: string): City[] {
        const filterValue = value.toLowerCase();
        return this.cityList.filter(state => state.item2.toLowerCase().includes(filterValue));
    }

    private getCityId(name:string) {
        const cityObj = this.cityList?.find((city)=>city.item2.toLocaleLowerCase() === name.toLocaleLowerCase());
        return cityObj?.item1;
    }

    private _filterStates(value: string): State[] {
        const filterValue = value.toLowerCase();
        return this.stateList.filter(state => state.name.toLowerCase().includes(filterValue));
    }

    public onSubmit(values:Object):void {
        if (this.companyForm.valid) {
            let addFormData = {
                "CompanyName": this.companyForm.get('CompanyName').value,
                "add": this.companyForm.get('add').value,
                "CityId": this.getCityId(this.cityCtrl.value)
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