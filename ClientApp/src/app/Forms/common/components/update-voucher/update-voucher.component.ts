import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-update-voucher",
  templateUrl: "./update-voucher.component.html",
  styleUrls: ["./update-voucher.component.scss"],
})
export class UpdateVoucherComponent implements OnChanges {
  @Output("getGridVouList") getGridVouList: EventEmitter<{
    vouType: string;
    vouDate: string;
  }> = new EventEmitter();
  @Output("onSaveAndClearFnCall") onSaveAndClearFnCall: EventEmitter<any> = new EventEmitter();
  @Input() editMasterId:any;
  @Input() vouType:any;
  headerName: any;

  constructor(
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.vouType && changes.vouType.currentValue){
      if(this.vouType==="currency") {
        this.headerName = "Currency Voucher";
      } else {
        this.headerName = "Voucher";
      }
    }
  }

  onSaveAndClearFnCallFn(){
    this.onSaveAndClearFnCall.emit();
  }

  getVoucherListFn(obj){
    this.getGridVouList.emit(obj);
  }

}
