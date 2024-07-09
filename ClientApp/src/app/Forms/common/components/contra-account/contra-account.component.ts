import { ChangeDetectorRef, Component, Input, NgZone, OnChanges, OnInit, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { Subject, debounceTime, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-contra-account',
  templateUrl: './contra-account.component.html',
  styleUrls: ['./contra-account.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContraAccountComponent),
      multi: true
    }
  ]
})
export class ContraAccountComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input() filteredContraAccountIdList: any[] = [];
  @Input() labelName: string="Select Account";
  @Input() isDisabled: any= false;
  @Input() placeHolderName: any;

  accountList: any[];
  private accountFilterCache = new Map<string, any[]>();
  private searchAccountList$ = new Subject<{ searchVal: string, searchType: string }>();
  private onChange: (value: any) => void;
  private onTouched: () => void;
  public contraAcId: any;

  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {
    this.initializeSearchSubject();
  }

  ngOnInit(): void {
    if (this.filteredContraAccountIdList) {
      this.accountList = cloneDeep(this.filteredContraAccountIdList);
    }
    if(!this.placeHolderName){
      this.placeHolderName = this.labelName;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filteredContraAccountIdList && changes.filteredContraAccountIdList.currentValue) {
      this.accountList = cloneDeep(this.filteredContraAccountIdList);
    }
  }

  onInputContraAccountIdListChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.searchAccountList$.next({ searchVal: input.toLowerCase(), searchType: "AC1" });
  }

  private initializeSearchSubject(): void {
    this.searchAccountList$.asObservable().pipe(
      debounceTime(500),
      switchMap((searchObj) => {
        const { searchVal, searchType } = searchObj;
        console.log(searchVal, searchType);
        if (this.accountFilterCache.has(searchVal)) {
          return of({ filterObj: this.accountFilterCache.get(searchVal), searchType });
        } else {
          const filterAccount = this.accountList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchVal);
          });
          this.accountFilterCache.set(searchVal, filterAccount);
          return of({ filterObj: filterAccount, searchType });
        }
      })
    ).subscribe((res) => {
      console.log(res);
      switch (res.searchType) {
        case 'AC1':
          this.filteredContraAccountIdList = res.filterObj;
          break;
      }
    });
  }

  writeValue(value: any): void {
    if (!this.filteredContraAccountIdList) {
      return;
    }
    
    this.contraAcId = value;
    const index = this.filteredContraAccountIdList.findIndex(item => item.id === this.contraAcId);
    if (index !== -1) {
      const [item] = this.filteredContraAccountIdList.splice(index, 1);

      this.zone.run(() => {
        this.filteredContraAccountIdList.unshift(item);
        const cloneFilterContraAccount = cloneDeep(this.filteredContraAccountIdList);
        this.filteredContraAccountIdList = [];
        setTimeout(()=>{
          this.filteredContraAccountIdList = cloneFilterContraAccount;
          this.cdr.detectChanges();
        }, 20);
      });
    }
  }

  updateContraAcId(){
    const index = this.filteredContraAccountIdList.findIndex(item => item.id === this.contraAcId);
    if (index !== -1) {
      const [item] = this.filteredContraAccountIdList.splice(index, 1);

      this.zone.run(() => {
        this.filteredContraAccountIdList.unshift(item);
        const cloneFilterContraAccount = cloneDeep(this.filteredContraAccountIdList);
        this.filteredContraAccountIdList = [];
        setTimeout(()=>{
          this.filteredContraAccountIdList = cloneFilterContraAccount;
          this.cdr.detectChanges();
        }, 20);
      });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log("registerOnChange", this.contraAcId);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    console.log("registerOnTouched", this.contraAcId);
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state if needed
  }

  onSelect(option: any): void {
    this.contraAcId = option;
    if (this.onChange) {
      this.onChange(this.contraAcId);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }

}
