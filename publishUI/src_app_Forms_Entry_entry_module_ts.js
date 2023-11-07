"use strict";
(self["webpackChunkgradus"] = self["webpackChunkgradus"] || []).push([["src_app_Forms_Entry_entry_module_ts"],{

/***/ 50322:
/*!**********************************************************!*\
  !*** ./src/app/Forms/Entry/Voucher/voucher.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherComponent": () => (/* binding */ VoucherComponent)
/* harmony export */ });
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/common-utility */ 70556);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _Master_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Master/master.service */ 60808);
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entry.service */ 40075);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ 63704);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ag-grid-angular */ 79771);
























function VoucherComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" - ", ctx_r0.vouNo, " ");
} }
function VoucherComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r8.name, " ");
} }
function VoucherComponent_div_29_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r12.name, " ");
} }
function VoucherComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "mat-form-field", 7)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Contra Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-select", 29, 9)(6, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function VoucherComponent_div_29_Template_input_input_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.onInputAccountListChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, VoucherComponent_div_29_mat_option_8_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.filteredAccountList);
} }
const _c0 = function (a0, a1) { return { "red-text": a0, "green-text": a1 }; };
function VoucherComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](3, _c0, ctx_r6.amountLabel === "CR", ctx_r6.amountLabel !== "CR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r6.totalAmount, " ", ctx_r6.amountLabel, "");
} }
function VoucherComponent_div_40_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r23.name, " ");
} }
function VoucherComponent_div_40_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 46);
} }
function VoucherComponent_div_40_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoucherComponent_div_40_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const detailIndex_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.removeVouDetail(detailIndex_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function VoucherComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "div", 4)(3, "div", 33)(4, "mat-form-field", 34)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-select", 35, 9)(9, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function VoucherComponent_div_40_Template_input_input_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.onInputAccountListChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, VoucherComponent_div_40_mat_option_11_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 36)(13, "mat-form-field", 37)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 39)(18, "mat-form-field", 34)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "DR/CR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-select", 40, 9)(23, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "DR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "CR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17)(28, "mat-form-field", 41)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Narration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 20)(33, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoucherComponent_div_40_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.addVouDetail()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, VoucherComponent_div_40_span_36_Template, 1, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, VoucherComponent_div_40_button_37_Template, 3, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const detailIndex_r16 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", detailIndex_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.filteredAccountList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r7.DR);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r7.CR);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", detailIndex_r16 < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", detailIndex_r16 > 0);
} }
class VoucherComponent {
    constructor(snackBar, dialog, datePipe, fb, _masterService, _entryService) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.datePipe = datePipe;
        this.fb = fb;
        this._masterService = _masterService;
        this._entryService = _entryService;
        this.vocherGridData = [];
        this.vouTypeList = [];
        this.DR = "DR";
        this.CR = "CR";
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                //flex:1,
                sortable: true,
                wraptext: true,
                resizable: true,
                /* minWidth: 100,*/
            },
            /* suppressRowHoverHighlight: true,*/
        };
        this.columnDefs = [{
                headerName: 'Vocher list',
                children: [
                    {
                        headerName: '', editable: false, minwidth: 25, width: 25, maxwidth: 25, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
                    },
                    {
                        headerName: '', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true, filter: false, minwidth: 25, width: 25, maxwidth: 25
                    },
                    { headerName: 'Vocher No', field: 'vouNo', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'Voucher', field: 'vouTypeName', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'Amount', field: 'amount', filter: true, sorting: true, resizable: true, flex: 1, valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_1__.CommonUtility.formatNumber(params.data.amount), type: 'rightAligned' },
                    { headerName: 'Vocher Date', field: 'vouDateString', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'Created Date', field: 'createdDateString', filter: true, sorting: true, resizable: true, flex: 1, },
                ]
            }];
    }
    ngOnInit() {
        this.voucherForm = this.fb.group({
            'vouMasterId': [0],
            'VouType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'VouDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'ContraAc': [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            vouDetails: this.fb.array([])
        });
        this.addVouDetail();
        this.initApiCalls();
        this.watchVouTypeChanges();
        this.watchVouDetailsChanges();
    }
    watchVouTypeChanges() {
        this.voucherForm.get('VouType').valueChanges.subscribe((value) => {
            const contraAcControl = this.voucherForm.get('ContraAc');
            if (value === 'JV') {
                // Hide the Contra Account field
                contraAcControl.clearValidators();
                contraAcControl.updateValueAndValidity(); // Remove validation
                // Clear the selected value for Contra Account
                contraAcControl.setValue(0);
            }
            else {
                // Show the Contra Account field and reapply validation if needed
                contraAcControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required); // Add back validation
                contraAcControl.updateValueAndValidity();
            }
        });
    }
    watchVouDetailsChanges() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([
            this.voucherForm.get('vouDetails').valueChanges,
            this.voucherForm.get('VouType').valueChanges
        ]).subscribe(([details, vouType]) => {
            let DRAmount = 0;
            let CRAmount = 0;
            details.forEach((detail, index) => {
                const amountControl = this.voucherForm.get(`vouDetails.${index}.Amount`);
                const drCrControl = this.voucherForm.get(`vouDetails.${index}.DRCR`);
                if (drCrControl.value == "DR") {
                    DRAmount += parseFloat(amountControl.value);
                }
                else if (drCrControl.value == "CR") {
                    CRAmount += parseFloat(amountControl.value);
                }
            });
            if (['CV', 'BV'].includes(vouType)) {
                const calCulatedVal = DRAmount - CRAmount;
                this.totalAmount = Math.abs(calCulatedVal);
                this.amountLabel = calCulatedVal < 0 ? 'CR' : 'DR';
            }
        });
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit" type="button" data-action="edit">edit </button>`;
        return eGui;
    }
    onGridReady(event) { this.gridApi = event.api; }
    onInputVouTypeListChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredVouTypeList = this.vouTypeList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
    }
    onInputAccountListChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredAccountList = this.accountList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
    }
    initApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([
            this._masterService.getAccount(),
            this._entryService.getVouType(),
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(response => {
            this.accountList = response[0];
            this.filteredAccountList = response[0];
            this.vouTypeList = response[1];
            this.filteredVouTypeList = response[1];
        })).subscribe(res => {
        });
    }
    vouDetails() {
        return this.voucherForm.get('vouDetails');
    }
    newVouDetail() {
        return this.fb.group({
            'Account': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'DRCR': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'Amount': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'Narration': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    addVouDetail() {
        this.vouDetails().push(this.newVouDetail());
    }
    removeVouDetail(empIndex) {
        this.vouDetails().removeAt(empIndex);
    }
    getVoucherList() {
        const { VouType, VouDate } = this.voucherForm.value;
        if (VouType && VouDate) {
            this._entryService.getVoucher(VouType, this.datePipe.transform(VouDate, 'yyyy-MM-dd')).subscribe((result) => {
                this.vocherGridData = result;
            });
        }
    }
    validateAndCalculateAmount(data) {
        if (data.VouType === "JV") {
            let totalAmount = 0;
            for (const detail of data.vouDetails) {
                if (detail.DRCR === "CR") {
                    // Subtract CR amount
                    totalAmount -= detail.Amount;
                }
                else if (detail.DRCR === "DR") {
                    // Add DR amount
                    totalAmount += detail.Amount;
                }
            }
            if (totalAmount === 0) {
                // The Voucher is valid
                return true;
            }
            else {
                // The Voucher is not valid as the total amount is not zero
                return false;
            }
        }
        return true;
    }
    onSubmit() {
        if (this.voucherForm.valid) {
            if (!this.validateAndCalculateAmount(this.voucherForm.value)) {
                this.dialog.open(_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ErrorDialog, {
                    data: {
                        message: 'Invalid Voucher: Total amount is not zero',
                        buttonText: {
                            ok: 'OK',
                        }
                    }
                });
                return;
            }
            const body = this.voucherForm.value;
            body.VouDate = this.datePipe.transform(body.VouDate, 'yyyy-MM-dd');
            this._entryService.saveVoucher(body).subscribe(result => {
                console.log("result", result);
                this.getVoucherList();
                this.resetForm(this.voucherForm);
            }, err => {
                console.log(err);
            });
        }
    }
    resetForm(myForm) {
        // Reset the form and set the 'vouMasterId' to 0
        myForm.reset();
        myForm.get('vouMasterId').setValue(0);
        this.totalAmount = 0;
        this.amountLabel = '';
        // Clear errors for top-level controls
        Object.keys(myForm.controls).forEach(key => {
            myForm.get(key).setErrors(null);
        });
        this.vouDetails().clear();
        this.addVouDetail();
        // // Clear errors for controls within 'vouDetails'
        setTimeout(() => {
            myForm.controls.vouDetails.controls.forEach((control) => {
                Object.keys(control.controls).forEach(key => {
                    control.get(key).setErrors(null);
                });
            });
        }, 50);
    }
    deleteVochers() {
        var selectedRecord = this.gridApi.getSelectedRows();
        if (selectedRecord.length == 0) {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ErrorDialog, {
                data: {
                    message: 'Please select record to delete',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
        }
        else {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialog, {
                data: {
                    message: 'Do you really want to delete this record?',
                    buttonText: {
                        ok: 'Yes',
                        cancel: 'No'
                    }
                }
            });
            dialogRef.afterClosed().subscribe((confirmed) => {
                if (confirmed) {
                    const vouMasterIds = selectedRecord.map(item => item.vouMasterId).join(',');
                    this._entryService.deleteVoucher(vouMasterIds).subscribe(result => {
                        this.getVoucherList();
                        this.showToaster(result);
                    });
                }
            });
        }
    }
    showToaster(message, isError = false) {
        const panelClass = isError ? ['red-text'] : undefined;
        const label = isError ? "Error" : "Success";
        const time = isError ? 6000 : 3000;
        this.snackBar.open(message, label, {
            duration: time,
            panelClass: panelClass,
        });
    }
    onGridClick(params) {
        if (params.event.target.dataset.action == "edit") {
            this.openEditBrokerageDetails(params.data);
        }
        if (params.event.target.dataset.action == "checkbox") {
            const dataIndex = this.gridApi.findIndex((item) => item.vouMasterId === params.data.vouMasterId);
            if (dataIndex === -1) {
                // Checkbox is checked, so add the data to gridApi
                this.gridApi.push(params.data);
            }
            else {
                // Checkbox is unchecked, so remove the data from gridApi
                this.gridApi.splice(dataIndex, 1);
            }
        }
    }
    openEditBrokerageDetails(params) {
        this._entryService.editVoucher(params.vouMasterId).subscribe((data) => {
            this.vouNo = data.vouNo;
            this.voucherForm.patchValue({
                'vouMasterId': data.vouMasterId,
                'VouType': data.vouType,
                'VouDate': data.vouDate,
                'ContraAc': data.contraAc,
            });
            // Clear existing vouDetails FormArray
            const vouDetailsArray = this.voucherForm.get('vouDetails');
            vouDetailsArray.clear();
            // Iterate through vouDetails and add them to the FormArray
            for (const vouDetail of data.vouDetails) {
                vouDetailsArray.push(this.fb.group({
                    'Account': vouDetail.account,
                    'DRCR': vouDetail.drcr,
                    'Amount': vouDetail.amount,
                    'Narration': vouDetail.narration,
                    // Other fields
                }));
            }
        });
    }
}
VoucherComponent.ɵfac = function VoucherComponent_Factory(t) { return new (t || VoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Master_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_entry_service__WEBPACK_IMPORTED_MODULE_4__.EntryService)); };
VoucherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: VoucherComponent, selectors: [["app-voucher-entry"]], decls: 46, vars: 17, consts: [[1, "pt-10", 3, "formGroup", "ngSubmit"], [1, "flex-p"], [1, "voucher-form"], [4, "ngIf"], [1, "dropdown-container"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "20"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["formControlName", "VouType", "placeholder", "Select VouType", "panelClass", "custom-select-panel", 3, "disabled", "selectionChange"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Account", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "calendar"], ["matInput", "", "placeholder", "Date", "formControlName", "VouDate", 3, "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker2", ""], ["fxFlex", "100", "fxFlex.gt-sm", "35", "fxFlex.sm", "35"], ["class", "dropdown-wrapper", 4, "ngIf"], ["fxFlex", "100", "fxFlex.gt-sm", "10", "fxFlex.sm", "10", 1, "pt-5", "text-end"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "15", 1, "text-end"], ["mat-raised-button", "", "color", "warn", "type", "button", 1, "uppercase", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", "ml-7", 3, "disabled"], ["formArrayName", "vouDetails"], ["class", "mb-10", 4, "ngFor", "ngForOf"], [1, "col-xl-12", "mt-2", "position-relative"], [1, "material-symbols-outlined", "delete-icon", 3, "click"], ["headerHeight", "34", 1, "ag-theme-material", "mt-2", 2, "height", "480px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "rowSelection", "rowMultiSelectWithClick", "defaultColDef", "gridReady", "cellClicked"], [3, "value"], ["formControlName", "ContraAc", "placeholder", "Select ContraAc", "panelClass", "custom-select-panel"], [3, "ngClass"], [1, "mb-10"], [3, "formGroupName"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "20", 1, "dropdown-arrow"], ["appearance", "outline", 1, "select-slab-mat", "mb-0"], ["formControlName", "Account", "placeholder", "Select Account", "panelClass", "custom-select-panel"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "30"], ["appearance", "outline", 1, "form-control"], ["matInput", "", "autocomplete", "off", "placeholder", "Amount", "formControlName", "Amount", "type", "number"], ["fxFlex", "100", "fxFlex.gt-sm", "10", "fxFlex.sm", "15", 1, "dropdown-arrow"], ["formControlName", "DRCR", "placeholder", "Select DRCR", "panelClass", "custom-select-panel"], ["appearance", "outline", 1, "wider-width"], ["matInput", "", "autocomplete", "off", "placeholder", "Narration", "formControlName", "Narration", "type", "text"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], ["class", "empty-div", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "class", "ml-7", 3, "click", 4, "ngIf"], [1, "empty-div"], ["mat-raised-button", "", "color", "warn", 1, "ml-7", 3, "click"]], template: function VoucherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function VoucherComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "mat-card-content", 2)(3, "mat-expansion-panel")(4, "mat-expansion-panel-header")(5, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Voucher Entry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, VoucherComponent_ng_container_7_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "mat-form-field", 7)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Vou Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function VoucherComponent_Template_mat_select_selectionChange_14_listener() { return ctx.getVoucherList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function VoucherComponent_Template_input_input_16_listener($event) { return ctx.onInputVouTypeListChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, VoucherComponent_mat_option_18_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 5)(20, "div", 6)(21, "mat-form-field", 13)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "VouDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function VoucherComponent_Template_input_ngModelChange_24_listener() { return ctx.getVoucherList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "mat-datepicker-toggle", 15)(26, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, VoucherComponent_div_29_Template, 9, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, VoucherComponent_div_31_Template, 3, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 20)(33, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoucherComponent_Template_button_click_33_listener() { return ctx.resetForm(ctx.voucherForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 22)(37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, VoucherComponent_div_40_Template, 38, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 25)(42, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoucherComponent_Template_span_click_42_listener() { return ctx.deleteVochers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "delete_sweep");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "ag-grid-angular", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("gridReady", function VoucherComponent_Template_ag_grid_angular_gridReady_45_listener($event) { return ctx.onGridReady($event); })("cellClicked", function VoucherComponent_Template_ag_grid_angular_cellClicked_45_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.voucherForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.vouNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.voucherForm.get("vouMasterId").value !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredVouTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.voucherForm.get("VouType").value !== "JV");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalAmount != 0 && ctx.voucherForm.get("VouType").value !== "JV");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.voucherForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.vouDetails().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.vocherGridData)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("rowSelection", "multiple")("rowMultiSelectWithClick", true)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.DefaultClassDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_24__.AgGridAngular], styles: [".save-btn[_ngcontent-%COMP%] {\n  width: 135px;\n}\n\n.empty-div[_ngcontent-%COMP%] {\n  width: 64px;\n  margin-left: 7px;\n  display: inline-block;\n}\n\n.red-text[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.green-text[_ngcontent-%COMP%] {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdWNoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtBQUVKIiwiZmlsZSI6InZvdWNoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2ZS1idG4ge1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG59XHJcbi5lbXB0eS1kaXYge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucmVkLXRleHQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmdyZWVuLXRleHQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 89000:
/*!*********************************************!*\
  !*** ./src/app/Forms/Entry/entry.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntryModule": () => (/* binding */ EntryModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ 79771);
/* harmony import */ var _Voucher_voucher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Voucher/voucher.component */ 50322);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _trade_contract_trade_contract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade-contract/trade-contract.component */ 69289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);










const routes = [
    { path: '', redirectTo: 'voucher', pathMatch: 'full' },
    { path: 'voucher', component: _Voucher_voucher_component__WEBPACK_IMPORTED_MODULE_1__.VoucherComponent, data: { breadcrumb: 'Voucher' } },
    { path: 'trade-contract', component: _trade_contract_trade_contract_component__WEBPACK_IMPORTED_MODULE_2__.TradeContractComponent, data: { breadcrumb: 'Trade' } },
];
class EntryModule {
}
EntryModule.ɵfac = function EntryModule_Factory(t) { return new (t || EntryModule)(); };
EntryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EntryModule });
EntryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe,
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE, useValue: 'en-GB' }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__.AgGridModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EntryModule, { declarations: [_Voucher_voucher_component__WEBPACK_IMPORTED_MODULE_1__.VoucherComponent,
        _trade_contract_trade_contract_component__WEBPACK_IMPORTED_MODULE_2__.TradeContractComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__.AgGridModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 69289:
/*!************************************************************************!*\
  !*** ./src/app/Forms/Entry/trade-contract/trade-contract.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TradeContractComponent": () => (/* binding */ TradeContractComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entry.service */ 40075);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _Master_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Master/master.service */ 60808);
/* harmony import */ var _Master_master_second_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Master/master-second.service */ 8703);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _common_directive_currency_formatter_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/directive/currency-formatter.directive */ 13145);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ag-grid-angular */ 79771);


























function TradeContractComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", exchange_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", exchange_r15.name, " ");
} }
function TradeContractComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r16.name, " ");
} }
function TradeContractComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r17.name, " ");
} }
function TradeContractComponent_mat_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r18.name, " ");
} }
function TradeContractComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "qty is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TradeContractComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "rate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function TradeContractComponent_mat_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r19.name, " ");
} }
class TradeContractComponent {
    constructor(snackBar, datePipe, appSettings, formBuilder, _entryServices, dialog, _appService, _masterService, _masterSecondService) {
        this.snackBar = snackBar;
        this.datePipe = datePipe;
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this._entryServices = _entryServices;
        this.dialog = dialog;
        this._appService = _appService;
        this._masterService = _masterService;
        this._masterSecondService = _masterSecondService;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.filterBrokerList = [];
        this.filterClientList = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.conTypeList = [{ 'id': 'B', 'name': 'Buy' }, { 'id': 'S', 'name': 'Sell' }];
        this.saudaList = [];
        this.filterSaudaList = [];
        this.decimalPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe('en-US');
        this.symbolMappingList = [];
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                sortable: true,
                wraptext: true,
                resizable: true,
                columnSize: "sizeToFit",
            }
        };
        this.columnDefs = [{
                headerName: 'Contract Trades',
                children: [
                    {
                        headerName: '', editable: false, minwidth: 25, width: 25, maxwidth: 25, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
                    },
                    {
                        headerName: 'ConDate', field: 'condate', minwidth: 110, width: 110, maxwidth: 120, suppressSizeToFit: true, cellRenderer: (params) => {
                            return this.datePipe.transform(params.value, 'YYYY-MM-dd');
                        }
                    },
                    { headerName: 'Account', field: 'account', suppressSizeToFit: true, flex: 2 },
                    { headerName: 'Sauda Code', field: 'saudaCode', suppressSizeToFit: true, flex: 2 },
                    {
                        headerName: 'B/S', field: 'contype', minwidth: 80, width: 80, maxwidth: 80, cellRenderer: (params) => {
                            return params.value === 'B' ? 'Buy' : (params.value === 'S' ? 'Sell' : params.value);
                        }
                    },
                    {
                        headerName: 'QTY', field: 'qty', minwidth: 100, width: 100, maxwidth: 100, sorting: true, resizable: true, cellRenderer: (params) => {
                            return this.decimalPipe.transform(params.value, '1.2-2');
                        }, type: 'rightAligned'
                    },
                    {
                        headerName: 'Rate', field: 'rate', minwidth: 100, width: 100, maxwidth: 100, type: 'rightAligned', cellRenderer: (params) => {
                            return params.value.toFixed(2);
                        },
                    },
                    {
                        headerName: 'Created Date', field: 'createdDate', minwidth: 110, width: 110, maxwidth: 110, cellRenderer: (params) => {
                            return this.datePipe.transform(params.value, 'YYYY-MM-dd');
                        }
                    },
                    { headerName: 'Trade No', field: 'tradeNo', minwidth: 100, width: 100, maxwidth: 100, suppressSizeToFit: true },
                    { headerName: 'Broker', field: 'brokerName', suppressSizeToFit: true, flex: 1 },
                ]
            }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.bindFormControls();
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'accountId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            'saudaId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            'qty': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            'rate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            'contype': ['B', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            'brokerId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            'id': [0]
        });
        this.initialApiCalls();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([this._masterService.getAccount(), this._masterService.getExchangeName()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
            this.filteredAccountList = response[0];
            this.accountList = response[0];
            this.brokerList = response[0];
            this.filterBrokerList = response[0];
            this.exchangeList = response[1];
        })).subscribe(res => {
        });
    }
    onGridDoubleClick(params) {
        this.openExchangeDialog(params.data.id);
    }
    onExchangeInputChange(event) {
        this._masterService.getExchangeSaudaListDDL(this.exId).subscribe(res => {
            this.saudaList = res;
            this.filterSaudaList = res;
        });
    }
    onInputSaudaChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filterSaudaList = this.saudaList.filter((data) => {
            const prov = data.itemCode.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filterSaudaList = [...this.saudaList];
        }
    }
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredAccountList = this.accountList.filter((data) => {
            const prov = data.itemCode.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filteredAccountList = [...this.accountList];
        }
    }
    onInputBrokerChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filterBrokerList = this.brokerList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filterBrokerList = [...this.brokerList];
        }
    }
    onInputClientChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filterClientList = this.clientList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filterClientList = [...this.clientList];
        }
    }
    onSubmit(values) {
        var body = this.itemForm.value;
        body.condate = this.conDate;
        if (this.itemForm.valid) {
            body.condate = this.datePipe.transform(body.condate, 'yyyy-MM-dd');
            //const body = JSON.stringify(addFormData);
            this._entryServices.saveCtrD(body).subscribe(result => {
                console.log("result", result);
                this.getTradeFileListData();
                this.resetForm(this.itemForm);
            }, err => {
                console.log(err);
            });
        }
    }
    getTradeFileListData() {
        if (this.contractDateVal) {
            this._entryServices.getTradeFileList(this.contractDateVal).subscribe((results) => {
                this.symbolMappingList = results;
            });
        }
    }
    onCondateChange(newValue) {
        this.contractDateVal = this.datePipe.transform(newValue, 'yyyy-MM-dd');
        this.getTradeFileListData();
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>`;
        return eGui;
    }
    onGridClick(params) {
    }
    openExchangeDialog(id) {
        this._entryServices.editContract(id).subscribe((response) => {
            this.exId = response.exId;
            this._masterService.getExchangeSaudaListDDL(response.exId).subscribe(result => {
                this.saudaList = result;
                this.filterSaudaList = result;
                var res = response;
                this.itemForm.get('id').setValue(res.id);
                this.itemForm.get('accountId').setValue(res.accountId);
                this.itemForm.get('saudaId').setValue(res.saudaId);
                this.itemForm.get('qty').setValue(Number(res.qty).toFixed(2));
                this.itemForm.get('rate').setValue(Number(res.rate).toFixed(2));
                this.itemForm.get('contype').setValue(res.contype);
                this.itemForm.get('brokerId').setValue(res.brokerId);
            });
        });
    }
    onGridReady(event) { this.gridApi = event.api; }
    deleteContractTrades() {
        var selectedRecord = this.gridApi.getSelectedRows();
        if (selectedRecord.length == 0) {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
                data: {
                    message: 'Please select record to delete',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
        }
        else {
            const idList = selectedRecord.map(record => record.tradeNo).join(', ');
            this._entryServices.deleteContract(idList, this.datePipe.transform(this.conDate, 'yyyy-MM-dd')).subscribe((res) => {
                this.getTradeFileListData();
                this.showToaster(res.message, !res.isSuccess);
            });
        }
    }
    showToaster(message, isError = false) {
        const panelClass = isError ? ['red-text'] : undefined;
        const label = isError ? "Error" : "Success";
        const time = isError ? 6000 : 3000;
        this.snackBar.open(message, label, {
            duration: time,
            panelClass: panelClass,
        });
    }
    resetForm(myForm) {
        myForm.reset();
        myForm.get('id').setValue(0);
        Object.keys(myForm.controls).forEach(key => {
            myForm.get(key).setErrors(null);
        });
    }
    isSaveButtonDisabled() {
        return this.itemForm.invalid;
    }
    close() {
        this.resetForm(this.itemForm);
        this.itemForm.markAsPristine();
        this.itemForm.markAsUntouched();
        console.log('Form Value:', this.itemForm.value);
        console.log('Form Valid:', this.itemForm.valid);
        console.log('Form Touched:', this.itemForm.touched);
    }
}
TradeContractComponent.ɵfac = function TradeContractComponent_Factory(t) { return new (t || TradeContractComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_entry_service__WEBPACK_IMPORTED_MODULE_2__.EntryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_Master_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_Master_master_second_service__WEBPACK_IMPORTED_MODULE_5__.MasterSecondService)); };
TradeContractComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TradeContractComponent, selectors: [["app-trade-contract"]], viewQuery: function TradeContractComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 84, vars: 20, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "symbol-mapping"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "15"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "calendar", "remove-bottom"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width", "remove-bottom"], ["placeholder", "Select Exchange", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "mt-2", "flex-end", "symbol-mapping"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Account", "panelClass", "custom-select-panel", "formControlName", "accountId"], ["selectType", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Account", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], ["placeholder", "Select Sauda", "panelClass", "custom-select-panel", "formControlName", "saudaId"], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Sauda", 1, "milti-search-box", 3, "input"], ["fxFlex", "100", "fxFlex.gt-sm", "12", "fxFlex.sm", "50"], ["placeholder", "Select ConType", "panelClass", "custom-select-panel", "formControlName", "contype"], ["selectPartyAs", ""], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "30"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "Qty", "formControlName", "qty", "type", "number", "appCurrencyFormatter", ""], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "Rate", "formControlName", "rate", "type", "number", "appCurrencyFormatter", ""], ["placeholder", "Select Broker", "panelClass", "custom-select-panel", "formControlName", "brokerId"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Broker", 1, "milti-search-box", 3, "input"], ["fxFlex", "100", "fxFlex.gt-sm", "13", "space-between", "", "fxFlex.sm", "50"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", "save-btn", 3, "disabled"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"], [1, "col-xl-12", "mt-2", "position-relative"], [1, "material-symbols-outlined", "delete-icon", 3, "click"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "rowMultiSelectWithClick", "rowSelection", "defaultColDef", "gridReady", "cellClicked", "cellDoubleClicked"], [3, "value"]], template: function TradeContractComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Contract Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TradeContractComponent_Template_input_ngModelChange_8_listener($event) { return ctx.conDate = $event; })("ngModelChange", function TradeContractComponent_Template_input_ngModelChange_8_listener($event) { return ctx.onCondateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "mat-datepicker-toggle", 7)(10, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 9)(13, "div", 3)(14, "div", 4)(15, "mat-form-field", 10)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TradeContractComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.exId = $event; })("ngModelChange", function TradeContractComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.onExchangeInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, TradeContractComponent_mat_option_19_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 13)(21, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function TradeContractComponent_Template_form_ngSubmit_21_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 15)(23, "div", 16)(24, "div", 9)(25, "div", 4)(26, "mat-form-field", 17)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Select Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-select", 18, 19)(31, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function TradeContractComponent_Template_input_input_31_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, TradeContractComponent_mat_option_33_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 9)(35, "div", 4)(36, "mat-form-field", 17)(37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Select Sauda");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-select", 22, 19)(41, "input", 23, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function TradeContractComponent_Template_input_input_41_listener($event) { return ctx.onInputSaudaChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, TradeContractComponent_mat_option_43_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 24)(45, "div", 4)(46, "mat-form-field", 17)(47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Select ConType");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-select", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, TradeContractComponent_mat_option_51_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 27)(53, "mat-form-field", 28)(54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, TradeContractComponent_mat_error_57_Template, 2, 0, "mat-error", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 27)(59, "mat-form-field", 28)(60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, TradeContractComponent_mat_error_63_Template, 2, 0, "mat-error", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 9)(65, "div", 4)(66, "mat-form-field", 17)(67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "Select Broker");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "mat-select", 32, 33)(71, "input", 34, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function TradeContractComponent_Template_input_input_71_listener($event) { return ctx.onInputBrokerChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, TradeContractComponent_mat_option_73_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 35)(75, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TradeContractComponent_Template_button_click_77_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 38)(80, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TradeContractComponent_Template_span_click_80_listener() { return ctx.deleteContractTrades(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, "delete_sweep");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "ag-grid-angular", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("gridReady", function TradeContractComponent_Template_ag_grid_angular_gridReady_83_listener($event) { return ctx.onGridReady($event); })("cellClicked", function TradeContractComponent_Template_ag_grid_angular_cellClicked_83_listener($event) { return ctx.onGridClick($event); })("cellDoubleClicked", function TradeContractComponent_Template_ag_grid_angular_cellDoubleClicked_83_listener($event) { return ctx.onGridDoubleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.conDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.exId);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filteredAccountList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filterSaudaList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.conTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.qty.errors == null ? null : ctx.itemForm.controls.qty.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.rate.errors == null ? null : ctx.itemForm.controls.rate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filterBrokerList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.itemForm.valid || !ctx.conDate || ctx.isSaveButtonDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.symbolMappingList)("pagination", true)("columnDefs", ctx.columnDefs)("rowMultiSelectWithClick", true)("rowSelection", "multiple")("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _common_directive_currency_formatter_directive__WEBPACK_IMPORTED_MODULE_6__.CurrencyFormatterDirective, ag_grid_angular__WEBPACK_IMPORTED_MODULE_23__.AgGridAngular], styles: [".save-btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.remove-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWRlLWNvbnRyYWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLDZCQUFBO0FBRUoiLCJmaWxlIjoidHJhZGUtY29udHJhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2ZS1idG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnJlbW92ZS1ib3R0b217XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_Forms_Entry_entry_module_ts.js.map