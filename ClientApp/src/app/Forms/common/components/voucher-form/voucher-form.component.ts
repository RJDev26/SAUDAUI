import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
} from "@angular/core";
import { Settings } from "src/app/app.settings.model";

import { MatDialog } from "@angular/material/dialog";
import { combineLatest, forkJoin, map, tap } from "rxjs";

import { MatSnackBar } from "@angular/material/snack-bar";
import { DatePipe } from "@angular/common";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { MatSelect } from "@angular/material/select";
import { DomSanitizer } from "@angular/platform-browser";
import { cloneDeep, find } from "lodash";
import { MasterService } from "src/app/Forms/Master/master.service";
import { EntryService } from "src/app/Forms/Entry/entry.service";
import { ErrorDialog } from "src/app/Forms/Dialog/confirmation-dialog/error-dialog.component";
import { setUploadedFiles } from "../../utils/blob-file";
import { formatAmount } from "../../utils/numberformate";
import { AuditLogsComponent } from "../audit-logs/audit-logs.component";

@Component({
  selector: "app-voucher-form",
  templateUrl: "./voucher-form.component.html",
  styleUrls: ["./voucher-form.component.scss"],
})
export class VoucherFormComponent implements OnInit {
  @ViewChild("virtualScrollViewport")
  virtualScrollViewport: CdkVirtualScrollViewport;
  @ViewChild("contraSelect") contraSelect: MatSelect;
  @Output("getGridVouList") getGridVouList: EventEmitter<{
    vouType: string;
    vouDate: string;
  }> = new EventEmitter();
  @Output("onSaveAndClearFnCall") onSaveAndClearFnCall: EventEmitter<any> =
    new EventEmitter();
  @Input() editMasterId: any;
  voucherForm: FormGroup;
  baseCurrencyRate: any;
  originalFormValue: any = {};
  filteredAccountList: any;
  filteredContraAccountList: any;
  accountList: any;
  selectedCurrency: any;
  vocherGridData: any = [];
  files: File[] = [];
  showError: boolean;
  vouTypeList: any = [];
  filteredVouTypeList: any;
  currencyList: any = [];
  virtualCDK: any;
  filteredCurrencyList: any;
  DR: string = "DR";
  CR: string = "CR";
  amountLabel: any;
  vouNo: any = "";
  totalAmount: any;
  gridApi: any;
  uploadedFiles: any;
  newFileObj: any = {};

  public settings: Settings;

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private _masterService: MasterService,
    private _entryService: EntryService,
    private sanitizer: DomSanitizer
  ) {
    // console.log(data);
    // if(data.editVouMasterId){
    //   this.editMasterId = data.editVouMasterId;
    //   this.openEditBrokerageDetails();
    // }
  }

  deleteExistingFile() {
    console.log("log");
    this.uploadedFiles = null;
  }

  openAuditLog(vouMasterId) {
    this.dialog.open(AuditLogsComponent, {
      data: vouMasterId,
    });
  }

  ngOnInit() {
    this.voucherForm = this.fb.group({
      vouMasterId: [0],
      vouType: ["", Validators.required],
      vouDate: ["", Validators.required],
      currencyId: [1, Validators.required],
      contraAc: [, Validators.required],
      vouDetails: this.fb.array([]),
    });
    this.addVouDetail();
    // if(!this.editMasterId){
    this.initApiCalls();
    // }
    this.watchVouTypeChanges();
    this.watchVouDetailsChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editMasterId.currentValue) {
      this.deleteExistingFile();
      this.openEditBrokerageDetails();
    }
  }

  watchVouTypeChanges() {
    this.voucherForm.get("vouType").valueChanges.subscribe((value) => {
      const contraAcControl = this.voucherForm.get("contraAc");

      if (value === "JV") {
        contraAcControl.clearValidators();
        contraAcControl.updateValueAndValidity();
        contraAcControl.setValue(0);
      } else {
        contraAcControl.setValidators(Validators.required);
        contraAcControl.updateValueAndValidity();
      }
    });
  }

  watchVouDetailsChanges() {
    combineLatest([
      this.voucherForm.get("vouDetails").valueChanges,
      this.voucherForm.get("vouType").valueChanges,
    ]).subscribe(([details, vouType]) => {
      let DRAmount = 0;
      let CRAmount = 0;
      details.forEach((detail, index) => {
        const amountControl = this.voucherForm.get(
          `vouDetails.${index}.amount`
        );
        const drCrControl = this.voucherForm.get(`vouDetails.${index}.drcr`);

        if (drCrControl.value == "DR") {
          DRAmount += parseFloat(amountControl.value);
        } else if (drCrControl.value == "CR") {
          CRAmount += parseFloat(amountControl.value);
        }
      });

      if (["CV", "BV"].includes(vouType)) {
        const calCulatedVal = DRAmount - CRAmount;
        this.totalAmount = Math.abs(calCulatedVal);
        this.amountLabel = calCulatedVal < 0 ? "CR" : "DR";
      }
    });
  }

  onInputVouTypeListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredVouTypeList = this.vouTypeList.filter((data) => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onInputCurrencyTypeListChange(event: any) {
    const searchInput = event.target.value.toLowerCase();

    this.filteredCurrencyList = this.currencyList.filter((data) => {
      const prov = data.shortName.toLowerCase();
      const fullname = data.fullName.toLowerCase();
      return prov.includes(searchInput) || fullname.includes(searchInput);
    });
  }

  initApiCalls() {
    forkJoin([
      this._entryService.getVouType(),
      this._masterService.getAccount(),
    ])
      .pipe(
        map((response) => {
          this.vouTypeList = response[0];
          this.filteredVouTypeList = response[0];
          this.accountList = response[1];
          this.filteredAccountList = response[1];
          this.filteredContraAccountList = response[1];
        })
      )
      .subscribe((res) => {});
  }

  filteredCurrencyBaseRate(id) {
    const filterCurrency = this.currencyList.filter((data) => data.id === id);
    return filterCurrency.length > 0 ? filterCurrency[0].baseRate : 0;
  }

  resetAccValChangeCurrency() {
    this.voucherForm.controls["contraAc"].setValue(0);
    const vouDetails = this.vouDetails();
    vouDetails.controls.forEach((control: FormGroup, index) => {
      control.controls["account"].setValue("");
    });
  }

  vouDetails(): FormArray {
    return this.voucherForm.get("vouDetails") as FormArray;
  }

  newVouDetail(): FormGroup {
    return this.fb.group({
      id: 0,
      vouMasterId: 0,
      account: [, Validators.required],
      drcr: [, Validators.required],
      amount: [, Validators.required],
      narration: [, Validators.required],
    });
  }

  addVouDetail() {
    this.vouDetails().push(this.newVouDetail());
  }

  removeVouDetail(empIndex: number) {
    this.vouDetails().removeAt(empIndex);
  }
  getVoucherList() {
    const { vouType, vouDate } = this.voucherForm.value;
    if (vouType && vouDate && this.getGridVouList) {
      // call parent function
      this.getGridVouList.emit({ vouType, vouDate });
    }
  }

  validateAndCalculateAmount(data) {
    if (data.vouType === "JV") {
      let totalAmount = 0;
      for (const detail of data.vouDetails) {
        if (detail.drcr === "CR") {
          // Subtract CR amount
          totalAmount -= Number(detail.amount);
        } else if (detail.drcr === "DR") {
          // Add DR amount
          totalAmount += Number(detail.amount);
        }
      }

      if (totalAmount === 0) {
        // The Voucher is valid
        return true;
      } else {
        // The Voucher is not valid as the total amount is not zero
        return false;
      }
    }
    return true;
  }

  contraAccValidation(formValues) {
    console.log(formValues);
    const contraACC = formValues.contraAc;
    const accList = formValues.vouDetails.map((detailsObj) => {
      return detailsObj.account;
    });
    return accList.includes(contraACC);
  }

  returnDirtyObj() {
    const dirtyObject = [];
    const currentFormValue = this.voucherForm.value;
    console.log("this.originalFormValue", this.originalFormValue);
    if (Object.keys(this.originalFormValue).length) {
      if (
        JSON.stringify(this.originalFormValue["vouDate"]) !==
        JSON.stringify(currentFormValue["vouDate"])
      ) {
        dirtyObject.push({
          value: this.datePipe.transform(currentFormValue["vouDate"], "yyyy-MM-dd"),
          oldValue: this.datePipe.transform(this.originalFormValue["vouDate"], "yyyy-MM-dd"),
          field: "vouDate",
        });
      }
      if (
        JSON.stringify(this.originalFormValue["contraAc"]) !==
        JSON.stringify(currentFormValue["contraAc"])
      ) {
        const val = find(this.filteredContraAccountList, {
          id: currentFormValue["contraAc"],
        });
        const oldVal = find(this.filteredContraAccountList, {
          id: this.originalFormValue["contraAc"],
        });

        dirtyObject.push({
          value: val ? val.name : "",
          oldValue: oldVal ? oldVal.name : "",
          field: "contraAc",
        });
      }
      currentFormValue.vouDetails.forEach((formObj, index) => {
        if (this.originalFormValue.vouDetails.length <= index) {
          return;
        }
        Object.keys(formObj).forEach((controlName) => {
          const dirtyFields = {};
          if (
            JSON.stringify(
              this.originalFormValue.vouDetails[index][controlName]
            ) !== JSON.stringify(formObj[controlName])
          ) {
            if (controlName === "account") {
              const val = find(this.accountList, {
                id: formObj[controlName],
              });
              const oldVal = find(this.accountList, {
                id: this.originalFormValue.vouDetails[index][controlName],
              });
              dirtyFields["value"] = val ? val.name : "";
              dirtyFields["oldValue"] = oldVal ? oldVal.name : "";
            } else {
              dirtyFields["value"] = String(formObj[controlName]);
              dirtyFields["oldValue"] = String(
                this.originalFormValue.vouDetails[index][controlName]
              );
            }
            dirtyFields["field"] = controlName;
            dirtyFields["id"] = formObj["id"];
            dirtyObject.push(dirtyFields);
          }
        });
      });
      if (this.originalFormValue.file != this.newFileObj.file
      ) {
        dirtyObject.push({
          value: this.newFileObj.fileName?this.newFileObj.fileName:"",
          oldValue: this.originalFormValue.fileName?this.originalFormValue.fileName:"",
          field: "file",
        });
      }
    }
    return dirtyObject;
  }

  onSubmit(formDirective) {
    if (this.voucherForm.valid) {
      if (this.contraAccValidation(this.voucherForm.value)) {
        this.dialog.open(ErrorDialog, {
          data: {
            message: "Contra Account and Account shouldn't be same.",
            buttonText: {
              ok: "OK",
            },
          },
        });
        return;
      }
      if (!this.validateAndCalculateAmount(this.voucherForm.value)) {
        this.dialog.open(ErrorDialog, {
          data: {
            message: "Invalid Voucher: Total amount is not zero",
            buttonText: {
              ok: "OK",
            },
          },
        });
        return;
      }

      const dirtyObject = this.returnDirtyObj();

      console.log("Dirty Fields:", dirtyObject);
      const body = this.voucherForm.value;
      body.vouDate = this.datePipe.transform(body.vouDate, "yyyy-MM-dd");
      body.vouNo = this.vouNo;
      body.dirtyObject = this.vouNo ? dirtyObject : [];
      body.isimport = false;
      body.vouDetails.forEach((obj) => {
        obj.amount = Number(obj.amount);
      });
      if (
        body.vouMasterId &&
        this.uploadedFiles &&
        this.uploadedFiles.downloadLink
      ) {
        body.file = this.uploadedFiles.base64;
        body.fileName = this.uploadedFiles.name;
        this.callSaveVoucher(body, formDirective);
      } else if (this.files.length > 0) {
        this.files.forEach((file, idx, array) => {
          let fileReader: FileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onloadend = (e) => {
            const formData: FormData = new FormData();
            formData.append("files", this.files[0], file.name);
            body.file = fileReader.result as string;
            body.fileName = file.name;

            if (idx == array.length - 1) {
              this._entryService.saveVoucher(body).subscribe(
                (res) => {
                  console.log("result", res);
                  this.getVoucherList();
                  this.getAndSetVouDateType();
                  this.showToaster(res.data, !res.isSuccess);
                  this.resetForm(this.voucherForm, formDirective, "save");
                },
                (err) => {
                  console.log(err);
                }
              );
            }
          };
        });
      } else {
        this.callSaveVoucher(body, formDirective);
      }
    }
  }

  getAndSetVouDateType() {
    const vouType = this.voucherForm.get("vouType").value;
    const vouDate = this.voucherForm.get("vouDate").value;
    setTimeout(() => {
      this.voucherForm.patchValue({
        vouType,
        vouDate,
      });
    }, 0);
    console.log(this.voucherForm);
  }

  callSaveVoucher(body, formDirective) {
    this._entryService.saveVoucher(body).subscribe(
      (result) => {
        console.log("result", result);
        this.getVoucherList();
        this.getAndSetVouDateType();
        this.resetForm(this.voucherForm, formDirective, "save");
        this.showToaster(result.data, !result.isSuccess);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  isAllowedFile(file: File): boolean {
    const allowedExtensions = [
      ".pdf",
      ".xlsx",
      ".xls",
      ".doc",
      ".docx",
      ".csv",
    ];
    const fileExtension = file.name
      .toLowerCase()
      .slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);
    return allowedExtensions.includes("." + fileExtension);
  }

  onSelect(event) {
    console.log(event);
    this.showError = false;
    this.files = [];

    const excelFiles = event.addedFiles.filter(this.isAllowedFile);
    if (!excelFiles.length) {
      this.showError = true;
    }

    this.files.push(...excelFiles);
    this.files.forEach((file) => {
      let fileReader: FileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = (e) => {
        const formData: FormData = new FormData();
        formData.append("files", this.files[0], file.name);
        this.newFileObj.file = fileReader.result as string;
        this.newFileObj.fileName = file.name;
      };
    });
  }

  onRemove(event) {
    this.newFileObj = {};
    this.files.splice(this.files.indexOf(event), 1);
  }

  clearAllRemoveDetails() {
    const lengthVouDetails = this.vouDetails().length;
    for (let index = 0; index < lengthVouDetails; index++) {
      this.vouDetails().removeAt(index);
    }
  }

  resetForm(myForm, formDirective, refresh = "") {
    this.vouNo = "";
    this.originalFormValue = {};
    this.totalAmount = 0;
    this.amountLabel = "";
    this.files = [];
    this.vouDetails().clear();
    formDirective.resetForm();
    this.editMasterId = "";
    this.onSaveAndClearFnCall.emit(refresh);
    this.deleteExistingFile();
    this.addVouDetail();
    myForm.get("vouMasterId").setValue(0);
    myForm.get("currencyId").setValue(1);
    this.newFileObj = {};
  }

  isVouMasterIdEditable(): boolean {
    const vouMasterId = this.voucherForm.get("vouMasterId").value;
    return !(
      vouMasterId === null ||
      vouMasterId === undefined ||
      vouMasterId === 0
    );
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ["red-text"] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError ? 6000 : 3000;

    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass,
    });
  }

  openEditBrokerageDetails() {
    this._entryService.editVoucher(this.editMasterId).subscribe((data) => {
        this.vouNo = data.vouNo;

        const uploadFileObj = setUploadedFiles({
          name: data.fileName,
          type: "",
          base64: data.file,
        });
        if (uploadFileObj) {
          this.uploadedFiles = {
            name: uploadFileObj.name,
            type: uploadFileObj.type,
            downloadLink: this.sanitizer.bypassSecurityTrustUrl(
              uploadFileObj.url
            ),
            base64: uploadFileObj.base64,
          };
        }
        // Clear existing vouDetails FormArray
        const vouDetailsArray = this.voucherForm.get("vouDetails") as FormArray;
        vouDetailsArray.clear();

        // Iterate through vouDetails and add them to the FormArray
        for (const vouDetail of data.vouDetails) {
          vouDetailsArray.push(
            this.fb.group({
              id: vouDetail.id,
              vouMasterId: vouDetail.vouMasterId,
              account: vouDetail.account,
              drcr: vouDetail.drcr,
              amount: formatAmount(vouDetail.amount),
              narration: vouDetail.narration,
            })
          );
        }
        this.voucherForm.patchValue({
          vouMasterId: data.vouMasterId,
          vouType: data.vouType,
          vouDate: data.vouDate,
          currencyId: data.currencyId,
        });
        setTimeout(() => {
          this.voucherForm.patchValue({
            contraAc: data.contraAc,
          });
          this.originalFormValue = cloneDeep(this.voucherForm.value);
          if (data.fileName) {
            this.originalFormValue = {
              ...this.originalFormValue,
              fileName: data.fileName,
              file: data.file,
            };
            console.log(this.originalFormValue);
          }
        }, 10);
        console.log("edit,", this.originalFormValue);
        console.log("this.original values", this.originalFormValue);
    });
  }
}
