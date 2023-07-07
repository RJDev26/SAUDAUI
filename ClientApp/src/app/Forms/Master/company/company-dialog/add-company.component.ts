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
    selectedId: any

    cityCtrl = new FormControl('');
    filteredCity: Observable<City[]>;

    stateCtrl = new FormControl('');
    filteredStates: Observable<State[]>;

    cityList: City[];
    stateList: State[];

    constructor(private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddCompanyComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _appService: MasterService) {
      this.selectedId = data.id;
      if (data.id == null) { this.selectedId = 0; }
    }

    bindFormControls() {
        this.companyForm = this.formBuilder.group({
          'name': [],
          'address': [],
          'city' : [''],
          'finBeginDt': [''],
          'finEndDt': [''],
          'state' : [''],
          'phone' : [''],
          'email' : [''],
          'pin' : [''],
          'uniqcusomerId' : [''],
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
          'settlementPostingInPercentage' : [''],
          'id': [0]
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

    getCompanyInfo() {
      this._appService.getCompanyById(this.selectedId).subscribe((res) => {
          debugger
        this.companyForm.get('name').setValue(res.name);
        this.companyForm.get('address').setValue(res.address);
        this.companyForm.get('city').setValue(res.city);
        this.companyForm.get('pin').setValue(res.pin);
        this.companyForm.get('state').setValue(res.state);
        this.companyForm.get('phone').setValue(res.phone);
        this.companyForm.get('email').setValue(res.email);
        this.companyForm.get('id').setValue(res.id);  
        this.companyForm.get('finBeginDt').setValue(res.finBeginDt);  
        this.companyForm.get('finEndDt').setValue(res.finEndDt);
        this.companyForm.get('uniqcusomerId').setValue(res.uniqcusomerId);        
        this.companyForm.get('compId').setValue(res.compId);
        this.companyForm.get('applyOptionsMtm').setValue(res.applyOptionsMtm);
        this.companyForm.get('applyCashMtm').setValue(res.applyCashMtm);
        this.companyForm.get('applyInvoice').setValue(res.applyInvoice);
        this.companyForm.get('applyOnlyBrokerage').setValue(res.applyOnlyBrokerage);
        this.companyForm.get('checkRates').setValue(res.checkRates);
        this.companyForm.get('showLots').setValue(res.showLots);
        this.companyForm.get('applySubBrokerage').setValue(res.applySubBrokerage);
        this.companyForm.get('applyDecimalQty').setValue(res.applyDecimalQty);
        this.companyForm.get('applyMargin').setValue(res.applyMargin);
        this.companyForm.get('roundingOff').setValue(res.roundingOff);
        this.companyForm.get('settlementPostingInPercentage').setValue(res.settlementPostingInPercentage);
        this.companyForm.get('applyContractNote').setValue(res.applyContractNote);
        this.companyForm.get('isRateRangeEnable').setValue(res.isRateRangeEnable);
        this.companyForm.get('cityName').setValue(res.cityName);
      });
    }

    initialApiCalls() {
        forkJoin([this._appService.getState()]).pipe(map(response=>{
          this.stateList = response[0];
          this.bindFilterFntoList();
        })).subscribe(res=>{
          //this.getValuesInEditMode();
        });
    }

    ngOnInit() {
        this.bindFormControls(); 
        if (this.selectedId != 0) {
          this.getCompanyInfo();
        }
        else {
            this.companyForm.get('id').setValue(0);
        }  
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

    close(): void {
        this.dialogRef.close();
    }
    
}
