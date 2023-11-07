"use strict";
(self["webpackChunkgradus"] = self["webpackChunkgradus"] || []).push([["src_app_Forms_Reports_reports_module_ts"],{

/***/ 76666:
/*!************************************************************************!*\
  !*** ./src/app/Forms/Reports/ledger-report/ledger-report.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LedgerReportComponent": () => (/* binding */ LedgerReportComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _Entry_entry_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Entry/entry.service */ 40075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _Master_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Master/master.service */ 60808);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reports.service */ 44613);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ag-grid-angular */ 79771);






















const _c0 = ["select"];
const _c1 = ["selectAccount"];
const _c2 = ["selectVouType"];
function LedgerReportComponent_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r11.name, " ");
} }
function LedgerReportComponent_mat_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r12.name, " ");
} }
function LedgerReportComponent_mat_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r13.name, " ");
} }
class LedgerReportComponent {
    constructor(router, _entryService, datePipe, snackBar, appSettings, _appService, dialog, _masterService, _reportsService) {
        this.router = router;
        this._entryService = _entryService;
        this.datePipe = datePipe;
        this.snackBar = snackBar;
        this.appSettings = appSettings;
        this._appService = _appService;
        this.dialog = dialog;
        this._masterService = _masterService;
        this._reportsService = _reportsService;
        this.includeOpBal = true;
        this.withinterest = true;
        this.accountIds = ['-1'];
        this.brokeragesetupList = [];
        this.branchAllSellected = false;
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                flex: 1,
                sortable: true,
                wraptext: true,
                resizable: true,
                minWidth: 100,
            },
            autoGroupColumnDef: {
                headerName: 'Account',
                field: 'account',
                minWidth: 200,
                cellRenderer: 'agGroupCellRenderer',
                cellRendererParams: {
                    suppressCount: true,
                },
                aggFunc: (params) => {
                    const debitTotal = params.values.reduce((total, value) => total + (value.debit || 0), 0);
                    const creditTotal = params.values.reduce((total, value) => total + (value.credit || 0), 0);
                    return {
                        account: params.key,
                        debit: debitTotal,
                        credit: creditTotal,
                    };
                },
            },
            animateRows: true,
            groupUseEntireRow: true,
            groupRowAggNodes: (nodes) => {
                const debitTotal = nodes.reduce((total, node) => total + (node.data.debit || 0), 0);
                const creditTotal = nodes.reduce((total, node) => total + (node.data.credit || 0), 0);
                return {
                    debit: debitTotal,
                    credit: creditTotal,
                };
            },
            suppressRowHoverHighlight: true,
            domLayout: 'autoHeight',
            //suppressSizeToFit: true,
        };
        this.columnDefs = [
            { headerName: 'Account', field: 'name', filter: true, sorting: true, resizable: true, rowGroup: true, hide: false },
            { headerName: 'Balance', field: 'netAmt', filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency, cellClass: (params) => {
                    return 'green-text';
                } },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.fetchDropdownData();
        //   this.getBrokerageSetupList({
        //     "account": "7,6,5,4",
        //     "fromDate": "2023-09-02",
        //     "toDate": "2023-09-07"
        // });
    }
    calculateTotalDebit() {
        let totalDebit = 0;
        for (const item of this.brokeragesetupList) {
            if (item.debit < 0) {
                totalDebit += item.debit;
            }
        }
        return totalDebit;
    }
    calculateTotalCredit() {
        let totalCredit = 0;
        for (const item of this.brokeragesetupList) {
            if (item.credit > 0) {
                totalCredit += item.credit;
            }
        }
        return totalCredit;
    }
    onGridReady(event) { }
    onCellClicked(event) {
        if (event.column && event.column.getColDef().field === 'name') {
            const rowData = event.data;
            this.openRouteInNewWindow(rowData);
        }
    }
    getBrokerageSetupList() {
        const accountIds = this.accountIds.filter((val) => val != "-1");
        const vouTypeIds = this.vouTypeIds.filter((val) => val != "-1");
        var req = {
            "account": accountIds.join(','),
            "fromDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
            "toDate": this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
            "vouType": vouTypeIds.join(','),
            "includeOpBal": this.includeOpBal,
            "withinterest": this.withinterest
        };
        this._reportsService.getLedgerSummary(req).subscribe((results) => {
            console.log('first', results);
            this.searchedData = req;
            this.brokeragesetupList = results.data;
            // this.brokeragesetupList.push({
            //   drShortCode: 'Total Debit',
            //   drAmt: this.calculateTotalDebit(),
            //   crShortCode: 'Total Credit',
            //   crAmt: this.calculateTotalCredit(),
            // });    
        });
    }
    formatCurrency(params) {
        const value = Math.abs(params.value); // Get the absolute value
        const formattedValue = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return params.value < 0 ? `${formattedValue}` : formattedValue;
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
    areRequiredValuesSelected() {
        return this.accountIds && this.fromDt && this.toDt && this.vouTypeIds;
    }
    fetchDropdownData() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([
            this._masterService.getAccount(),
            this._masterService.getBranchDDLList(),
            this._entryService.getVouType(),
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => {
            this.accountList = response[0];
            this.filteredAccountList = response[0];
            this.branchList = response[1];
            this.filteredProviders = response[1];
            this.vouTypeList = response[2];
            this.filteredVouTypeList = response[2];
            this.vouTypeAllSelection();
        })).subscribe(res => {
            this.selectAllAccountValues();
        });
    }
    selectAllAccountValues() {
        this.filteredAccountList.forEach(option => {
            this.accountIds.push(option.id);
        });
        this.selectAccount.value = this.accountIds;
    }
    openRouteInNewWindow(rowData) {
        const route = '/reports/single-ledger-report';
        const queryParams = {
            account: rowData.accountId,
            fromDate: this.searchedData.fromDate,
            toDate: this.searchedData.toDate,
            vouType: this.searchedData.vouType,
            includeOpBal: this.searchedData.includeOpBal,
            withinterest: this.searchedData.withinterest,
        };
        const url = this.router.serializeUrl(this.router.createUrlTree([route], { queryParams }));
        window.open(url, '_blank');
    }
    onBranchChange(event, isLastIndex) {
        if (this.branchAllSellected && !isLastIndex) {
            return;
        }
        if (!this.branchIds) {
            this._masterService.getAccount().subscribe(response => {
                this.accountList = response;
                this.filteredAccountList = response;
            });
        }
        if (this.branchIds.length < 2 && this.branchIds[0] == '-1') {
            return;
        }
        if (this.branchIds) {
            this._masterService.getFilterBranchAccounts(this.branchIds).subscribe(response => {
                this.accountList = response;
                this.filteredAccountList = response;
            });
        }
    }
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredProviders = this.branchList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
    }
    onKey(value) {
        this.branchList = this.search(value);
    }
    search(value) {
        let filter = value.toLowerCase();
        return this.branchList.filter(option => option.toLowerCase().startsWith(filter));
    }
    addBrokerage(event) { }
    accountAllSelection() {
        var isAllChecked = this.selectAccount.options.first.selected;
        this.selectAccount.options.forEach((item) => {
            if (isAllChecked) {
                item.select();
            }
            else {
                item.deselect();
            }
        });
    }
    vouTypeAllSelection() {
        var isAllChecked = this.selectVouType.options.first.selected;
        this.selectVouType.options.forEach((item) => {
            if (isAllChecked) {
                item.select();
            }
            else {
                item.deselect();
            }
        });
    }
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
}
LedgerReportComponent.ɵfac = function LedgerReportComponent_Factory(t) { return new (t || LedgerReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Entry_entry_service__WEBPACK_IMPORTED_MODULE_0__.EntryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Master_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_4__.ReportsService)); };
LedgerReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LedgerReportComponent, selectors: [["app-ledger-report"]], viewQuery: function LedgerReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.selectAccount = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.selectVouType = _t.first);
    } }, decls: 72, vars: 23, consts: [[1, "row", "trail-balance"], [1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "15"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "calendar"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "To", 3, "matDatepicker", "ngModel", "ngModelChange"], ["picker2", ""], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Branch", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange", "selectionChange"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Branch", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "placeholder", "Select Account", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["selectAccount", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Account", 1, "milti-search-box", 3, "input"], ["value", "-1", 3, "click"], ["multiple", "", "placeholder", "Select VouType", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["selectVouType", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Voutype", 1, "milti-search-box", 3, "input"], ["color", "primary", 3, "ngModel", "ngModelChange"], ["fxFlex", "100", "fxFlex.gt-sm", "7", "fxFlex.sm", "7"], ["mat-raised-button", "", "color", "primary", 1, "search-icon-btn", 3, "disabled", "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", "domLayout", "autoHeight", 1, "ag-theme-material", 2, "height", "735px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "groupUseEntireRow", "groupRowAggNodes", "autoGroupColumnDef", "gridReady", "cellClicked"], [3, "value"]], template: function LedgerReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LedgerReportComponent_Template_input_ngModelChange_8_listener($event) { return ctx.fromDt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "mat-datepicker-toggle", 7)(10, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "div", 4)(15, "mat-form-field", 5)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LedgerReportComponent_Template_input_ngModelChange_18_listener($event) { return ctx.toDt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "mat-datepicker-toggle", 7)(20, "mat-datepicker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 2)(23, "div", 3)(24, "div", 4)(25, "mat-form-field", 11)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Select Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LedgerReportComponent_Template_mat_select_ngModelChange_28_listener($event) { return ctx.branchIds = $event; })("selectionChange", function LedgerReportComponent_Template_mat_select_selectionChange_28_listener($event) { return ctx.onBranchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function LedgerReportComponent_Template_input_input_30_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, LedgerReportComponent_mat_option_34_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 2)(36, "div", 3)(37, "div", 4)(38, "mat-form-field", 11)(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Select Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LedgerReportComponent_Template_mat_select_ngModelChange_41_listener($event) { return ctx.accountIds = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "input", 19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function LedgerReportComponent_Template_input_input_43_listener($event) { return ctx.onInputAccountListChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LedgerReportComponent_Template_mat_option_click_45_listener() { return ctx.accountAllSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, LedgerReportComponent_mat_option_47_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 2)(49, "div", 3)(50, "div", 4)(51, "mat-form-field", 11)(52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Vou Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-select", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LedgerReportComponent_Template_mat_select_ngModelChange_54_listener($event) { return ctx.vouTypeIds = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "input", 23, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function LedgerReportComponent_Template_input_input_56_listener($event) { return ctx.onInputVouTypeListChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LedgerReportComponent_Template_mat_option_click_58_listener() { return ctx.vouTypeAllSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, LedgerReportComponent_mat_option_60_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 2)(62, "mat-slide-toggle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LedgerReportComponent_Template_mat_slide_toggle_ngModelChange_62_listener($event) { return ctx.includeOpBal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Include OpBal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "mat-slide-toggle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LedgerReportComponent_Template_mat_slide_toggle_ngModelChange_64_listener($event) { return ctx.withinterest = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "With Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 25)(67, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LedgerReportComponent_Template_button_click_67_listener() { return ctx.getBrokerageSetupList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 27)(71, "ag-grid-angular", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("gridReady", function LedgerReportComponent_Template_ag_grid_angular_gridReady_71_listener($event) { return ctx.onGridReady($event); })("cellClicked", function LedgerReportComponent_Template_ag_grid_angular_cellClicked_71_listener($event) { return ctx.onCellClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.fromDt);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.toDt);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.branchIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredProviders);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.accountIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredAccountList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.vouTypeIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredVouTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.includeOpBal);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.withinterest);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.brokeragesetupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef)("groupUseEntireRow", ctx.agGridOptions.groupUseEntireRow)("groupRowAggNodes", ctx.agGridOptions.groupRowAggNodes)("autoGroupColumnDef", ctx.agGridOptions.autoGroupColumnDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggle, ag_grid_angular__WEBPACK_IMPORTED_MODULE_22__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWRnZXItcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9466:
/*!*************************************************!*\
  !*** ./src/app/Forms/Reports/reports.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsModule": () => (/* binding */ ReportsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ 79771);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _trail_balance_trail_balance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trail-balance/trail-balance.component */ 48862);
/* harmony import */ var _ledger_report_ledger_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ledger-report/ledger-report.component */ 76666);
/* harmony import */ var _sub_ledger_report_sub_ledger_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub-ledger-report/sub-ledger-report.component */ 65643);
/* harmony import */ var _trade_register_trade_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trade-register/trade-register.component */ 69507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);












const routes = [
    { path: '', redirectTo: 'reports', pathMatch: 'full' },
    { path: 'trail-balance', component: _trail_balance_trail_balance_component__WEBPACK_IMPORTED_MODULE_1__.TrailBalanceComponent, data: { breadcrumb: 'Trail Balance' } },
    { path: 'ledger-report', component: _ledger_report_ledger_report_component__WEBPACK_IMPORTED_MODULE_2__.LedgerReportComponent, data: { breadcrumb: 'Ledger Report' } },
    { path: 'trade-register', component: _trade_register_trade_register_component__WEBPACK_IMPORTED_MODULE_4__.TradeRegisterComponent, data: { breadcrumb: 'Trade Register' } },
    { path: 'single-ledger-report', pathMatch: 'prefix', component: _sub_ledger_report_sub_ledger_report_component__WEBPACK_IMPORTED_MODULE_3__.SubLedgerReportComponent, data: { breadcrumb: 'Single Ledger Report' } },
];
class ReportsModule {
}
ReportsModule.ɵfac = function ReportsModule_Factory(t) { return new (t || ReportsModule)(); };
ReportsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe,
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_DATE_LOCALE, useValue: 'en-GB' }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__.AgGridModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_trail_balance_trail_balance_component__WEBPACK_IMPORTED_MODULE_1__.TrailBalanceComponent,
        _ledger_report_ledger_report_component__WEBPACK_IMPORTED_MODULE_2__.LedgerReportComponent,
        _sub_ledger_report_sub_ledger_report_component__WEBPACK_IMPORTED_MODULE_3__.SubLedgerReportComponent,
        _trade_register_trade_register_component__WEBPACK_IMPORTED_MODULE_4__.TradeRegisterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__.AgGridModule] }); })();


/***/ }),

/***/ 44613:
/*!**************************************************!*\
  !*** ./src/app/Forms/Reports/reports.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsService": () => (/* binding */ ReportsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class ReportsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    }
    getTrialBalance(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Report/getTrialBalance', data, { headers: this.headers });
    }
    getLedger(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Report/getLedger', data, { headers: this.headers });
    }
    getTradeRegister(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Trade/getTradeRegister', data, { headers: this.headers });
    }
    getLedgerSummary(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Report/getLedgerSummary', data, { headers: this.headers });
    }
    deleteContract(tradeNo) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}Trade/deleteContractById`;
        return this.httpClient.delete(url, { headers: this.headers, body: { tradeNo: tradeNo } });
    }
}
ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ReportsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReportsService, factory: ReportsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 65643:
/*!********************************************************************************!*\
  !*** ./src/app/Forms/Reports/sub-ledger-report/sub-ledger-report.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubLedgerReportComponent": () => (/* binding */ SubLedgerReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reports.service */ 44613);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ 79771);







class SubLedgerReportComponent {
    constructor(route, _reportsService) {
        this.route = route;
        this._reportsService = _reportsService;
        this.paginationPageSize = 10;
        this.margins = {
            top: 80,
            bottom: 20,
            left: 10,
            width: 830
        };
        this.companydata = {
            Name: "Accounts",
        };
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                flex: 1,
                sortable: true,
                wraptext: true,
                resizable: true,
                minWidth: 100,
            },
            suppressRowHoverHighlight: true,
            domLayout: 'autoHeight',
            rowClass: (params) => {
                // Check if the row is a total row (you can use your own criteria)
                if (params.data && (params.data.drShortCode === 'Total Debit' || params.data.crShortCode === 'Total Credit')) {
                    return 'total-row'; // Apply the CSS class for total rows
                }
                return ''; // Return an empty string for other rows
            },
            //suppressSizeToFit: true,
        };
        this.columnDefs = [
            { headerName: 'Vou No', field: 'vouNo', filter: true, sorting: true, resizable: true },
            { headerName: 'Date', field: 'vouDate', filter: true, sorting: true, resizable: true },
            { headerName: 'Narration', field: 'narration', filter: true, sorting: true, resizable: true },
            { headerName: 'Account', field: 'account', filter: true, sorting: true, resizable: true },
            { field: 'debit', headerName: 'Debit', filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency, cellClass: (params) => {
                    return 'red-text';
                } },
            { headerName: 'Credit', field: 'credit', filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency, cellClass: (params) => {
                    return 'green-text';
                } },
            { headerName: 'Balance', field: 'balance', filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency, cellClass: (params) => {
                    return 'green-text';
                } },
        ];
    }
    onGridReady(event) { }
    formatCurrency(params) {
        const value = Math.abs(params.value); // Get the absolute value
        const formattedValue = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return params.value < 0 ? `${formattedValue}` : formattedValue;
    }
    ngOnInit() {
        this.getQueryPramsData();
        this.getBrokerageSetupList();
    }
    getQueryPramsData() {
        this.route.queryParams.subscribe(params => {
            // Access and use the query parameters here
            this.searchedData = params;
            console.log(this.searchedData);
            // Now you can use these parameters in your component logic
        });
    }
    getBrokerageSetupList() {
        const req = {
            withinterest: this.searchedData.withinterest === 'true',
            includeOpBal: this.searchedData.includeOpBal === 'true',
            vouType: this.searchedData.vouType,
            fromDate: this.searchedData.fromDate,
            account: this.searchedData.account,
            toDate: this.searchedData.toDate,
        };
        this._reportsService.getLedger(req).subscribe((results) => {
            this.brokeragesetupList = results.data;
            this.brokeragesetupList.push({
                vouNo: 'Total',
                debit: this.calculateTotalDebit(),
                credit: this.calculateTotalCredit(),
                balance: this.calculateTotalBalance(),
            });
        });
    }
    calculateTotalBalance() {
        let totalDebit = 0;
        for (const item of this.brokeragesetupList) {
            totalDebit += item.balance;
        }
        return totalDebit;
    }
    calculateTotalDebit() {
        let totalDebit = 0;
        for (const item of this.brokeragesetupList) {
            totalDebit += item.debit;
        }
        return totalDebit;
    }
    calculateTotalCredit() {
        let totalCredit = 0;
        for (const item of this.brokeragesetupList) {
            totalCredit += item.credit;
        }
        return totalCredit;
    }
    downloadAsPDF() {
        var self = this;
        var doc = new jsPDF('l', 'pt', "a4");
        var col = this.columnDefs.map(columns => columns.headerName);
        var colFields = this.columnDefs.map(columns => columns.field);
        var rows = [];
        for (var i = 0; i < this.brokeragesetupList.length; i++) {
            var temp = [];
            for (var j = 0; j < colFields.length; j++) {
                if (this.brokeragesetupList[i][colFields[j]]) {
                    temp.push(this.brokeragesetupList[i][colFields[j]]);
                }
                else {
                    temp.push('');
                }
            }
            rows.push(temp);
        }
        console.log(rows, col);
        doc.setFont("calibari");
        doc.setFontSize(18);
        doc.setFontStyle('bold');
        var mainHeader = this.companydata.Name, xOffset = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(mainHeader) * doc.internal.getFontSize() / 2);
        doc.text(mainHeader, xOffset, 30);
        doc.setDrawColor(0, 0, 0);
        doc.setLineCap(2);
        doc.line(this.margins.left, 50, this.margins.width, 50);
        doc.setFontSize(12);
        doc.setFontStyle('bold');
        var secondHeaderText = "Trial Balance as on  ", xOffset = (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(secondHeaderText) * doc.internal.getFontSize() / 2);
        doc.text(secondHeaderText, xOffset, 60);
        doc.setDrawColor(0, 0, 0);
        doc.setLineCap(2);
        doc.line(self.margins.left, 70, self.margins.width, 70);
        doc.autoTable(col, rows, {
            html: '#brokerSetupGridId',
            tableLineColor: [0, 0, 0],
            tableLineWidth: 0.75,
            theme: "plain",
            willDrawCell: function (data) {
                console.log('willDrawCell is called:', data);
            },
            // Use to draw additional content such as images in table cells
            didDrawCell: function (data) {
                console.log('didDrawCell is called:', data);
            },
            didDrawRow: (data) => {
                console.log('didDrawRow is called:', data);
                if (data.row.index === data.table.rows.length - 1) {
                    doc.setFillColor(255, 0, 0); // Red color
                    doc.rect(data.table.width + data.table.settings.margin.left, data.row.y, data.table.width, data.row.height, 'F' // 'F' for fill
                    );
                }
            },
            didParseCell: (data) => {
                console.log('didParseCell is called:', data);
                if (data.section === 'body' && data.cell.raw.cellIndex == 3) {
                    data.cell.styles.textColor = [255, 72, 72];
                }
                if (data.section === 'body' && data.cell.raw.cellIndex == 5) {
                    data.cell.styles.textColor = [0, 0, 255];
                }
                if (data.section === 'body' && data.cell.raw.cellIndex == 6) {
                    data.cell.styles.textColor = [0, 0, 255];
                }
                if (data.section === 'foot' && data.cell.raw.cellIndex == 4) {
                    data.cell.styles.textColor = [255, 72, 72];
                }
                if (data.section === 'foot' && data.cell.raw.cellIndex == 5) {
                    data.cell.styles.textColor = [0, 128, 0];
                }
                if (data.section === 'foot' && data.cell.raw.cellIndex == 6) {
                    data.cell.styles.textColor = [0, 128, 0];
                }
            },
            tableWidth: this.margins.width,
            bodyStyles: { valign: 'top' },
            styles: {
                overflow: 'linebreak', fontSize: 9,
                font: 'calibari', width: this.margins.width, lineWidth: 1, minCellWidth: 32,
            },
            columnStyles: {
                0: { cellWidth: '1%' }, 4: { halign: 'right' }, 5: { halign: 'right' }, 6: { halign: 'right' }
            },
            footStyles: {
                cellWidth: 'wrap',
                fontSize: 10,
                lineWidth: 0,
                lineColor: [0, 0, 0],
                textColor: [0, 0, 0],
                fillColor: [211, 211, 211],
                halign: 'right'
            },
            margin: {
                top: this.margins.top,
                left: this.margins.left
            },
            headerStyles: {
                fontSize: 9,
                font: 'arial'
            },
            drawRow: (row, data) => {
                console.log('drawRow::', data);
                data.doc.setDrawColor(0, 0, 0);
                let firstCell = row.cells[0];
                let secondCell = row.cells[1];
                data.doc.setLineWidth(0.7);
            },
            drawHeaderRow: (head, data) => {
                console.log('drawHeaderRow::', data);
                data.doc.setLineWidth(0.7);
                data.doc.setDrawColor(0, 0, 0);
                data.doc.line(data.cursor.x, data.cursor.y, data.cursor.x + data.table.width, data.cursor.y);
                data.doc.line(data.cursor.x, data.cursor.y + head.height, data.cursor.x + data.table.width, data.cursor.y + head.height);
            }
        });
        const pageCount = doc.internal.getNumberOfPages();
        for (var i = 1; i <= pageCount; i++) {
            doc.setFontSize(10);
            doc.setPage(i);
            doc.text('Page ' + String(i) + ' of ' + String(pageCount), this.margins.left, doc.internal.pageSize.height - 20);
        }
        var iframe = document.createElement('iframe');
        iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:100%;');
        doc.output('datauristring');
        doc.save('TrialBalance.PDF');
    }
}
SubLedgerReportComponent.ɵfac = function SubLedgerReportComponent_Factory(t) { return new (t || SubLedgerReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_0__.ReportsService)); };
SubLedgerReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SubLedgerReportComponent, selectors: [["app-sub-ledger-report"]], decls: 10, vars: 6, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "primary", 1, "delete-slab", "icon-btn", 3, "click"], [1, "material-icons-outlined"], [1, "col-xl-12", "mt-2", "sub-ledger-report"], ["id", "brokerSetupGridId", "headerHeight", "34", "domLayout", "autoHeight", 1, "ag-theme-material", 2, "height", "535px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "paginationPageSize", "gridReady"], ["agGrid", ""]], template: function SubLedgerReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubLedgerReportComponent_Template_button_click_2_listener() { return ctx.downloadAsPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon")(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " file_download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " PDF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "ag-grid-angular", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function SubLedgerReportComponent_Template_ag_grid_angular_gridReady_8_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowData", ctx.brokeragesetupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef)("paginationPageSize", ctx.paginationPageSize);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItbGVkZ2VyLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 69507:
/*!**************************************************************************!*\
  !*** ./src/app/Forms/Reports/trade-register/trade-register.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TradeRegisterComponent": () => (/* binding */ TradeRegisterComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reports.service */ 44613);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _Master_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Master/master.service */ 60808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ag-grid-angular */ 79771);
























const _c0 = ["selectAccount"];
const _c1 = ["selectSauda"];
function TradeRegisterComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", exchange_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", exchange_r9.name, " ");
} }
function TradeRegisterComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r10.name, " ");
} }
function TradeRegisterComponent_mat_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r11.name, " ");
} }
class TradeRegisterComponent {
    constructor(snackBar, datePipe, appSettings, formBuilder, _reportServices, dialog, _appService, _masterService) {
        this.snackBar = snackBar;
        this.datePipe = datePipe;
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this._reportServices = _reportServices;
        this.dialog = dialog;
        this._appService = _appService;
        this._masterService = _masterService;
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
        this.decimalPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe('en-US');
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
        this.initialApiCalls();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([this._masterService.getAccount(), this._masterService.getExchangeName()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
            this.filteredAccountList = response[0];
            this.accountList = response[0];
            this.brokerList = response[0];
            this.filterBrokerList = response[0];
            this.exchangeList = response[1];
        })).subscribe(res => {
        });
    }
    onGridDoubleClick(params) {
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
            const prov = data.name.toLowerCase();
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
    onInputAccountListChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredAccountList = this.accountList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
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
    getTradeFileListData() {
        var accountIds = this.accountIds.filter((val) => val != -1);
        var saudaIds = this.saudaIds.filter((val) => val != -1);
        const req = {
            "fromDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
            "toDate": this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
            "account": accountIds.join(','),
            "sauda": saudaIds.join(','),
        };
        this._reportServices.getTradeRegister(req).subscribe((results) => {
            this.symbolMappingList = results.data;
        });
    }
    accountAllSelection() {
        var isAllChecked = this.selectAccount.options.first.selected;
        this.selectAccount.options.forEach((item) => {
            if (isAllChecked) {
                item.select();
            }
            else {
                item.deselect();
            }
        });
    }
    saudaAllSelection() {
        var isAllChecked = this.selectSauda.options.first.selected;
        this.selectSauda.options.forEach((item) => {
            if (isAllChecked) {
                item.select();
            }
            else {
                item.deselect();
            }
        });
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
            const idList = selectedRecord.map(record => record.id).join(', ');
            this._reportServices.deleteContract(idList).subscribe((res) => {
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
    isSaveButtonDisabled() {
        return this.itemForm.invalid;
    }
}
TradeRegisterComponent.ɵfac = function TradeRegisterComponent_Factory(t) { return new (t || TradeRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_2__.ReportsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Master_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService)); };
TradeRegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TradeRegisterComponent, selectors: [["app-trade-register"]], viewQuery: function TradeRegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.DatatableComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.selectAccount = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.selectSauda = _t.first);
    } }, decls: 65, vars: 19, consts: [[1, "row"], [1, "mt-2"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "15"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "calendar"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "To", 3, "matDatepicker", "ngModel", "ngModelChange"], ["picker2", ""], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width", "remove-bottom"], ["placeholder", "Select Exchange", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "select-slab-mat"], ["multiple", "", "placeholder", "Select Account", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["selectAccount", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Account", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], ["value", "-1", 3, "click"], ["placeholder", "Select Sauda", "multiple", "", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["selectSauda", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Sauda", 1, "milti-search-box", 3, "input"], ["fxFlex", "100", "fxFlex.gt-sm", "13", "space-between", "", "fxFlex.sm", "50"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", "save-btn", 3, "click"], [1, "col-xl-12", "mt-2", "position-relative"], [1, "material-symbols-outlined", "delete-icon", 3, "click"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "rowMultiSelectWithClick", "rowSelection", "defaultColDef", "gridReady", "cellClicked", "cellDoubleClicked"], [3, "value"]], template: function TradeRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "mat-form-field", 6)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TradeRegisterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.fromDt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "mat-datepicker-toggle", 8)(11, "mat-datepicker", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 3)(14, "div", 4)(15, "div", 5)(16, "mat-form-field", 6)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TradeRegisterComponent_Template_input_ngModelChange_19_listener($event) { return ctx.toDt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "mat-datepicker-toggle", 8)(21, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 12)(24, "div", 4)(25, "div", 5)(26, "mat-form-field", 13)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TradeRegisterComponent_Template_mat_select_ngModelChange_29_listener($event) { return ctx.exId = $event; })("ngModelChange", function TradeRegisterComponent_Template_mat_select_ngModelChange_29_listener($event) { return ctx.onExchangeInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, TradeRegisterComponent_mat_option_30_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 3)(32, "div", 4)(33, "div", 5)(34, "mat-form-field", 16)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Select Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TradeRegisterComponent_Template_mat_select_ngModelChange_37_listener($event) { return ctx.accountIds = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function TradeRegisterComponent_Template_input_input_39_listener($event) { return ctx.onInputAccountListChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TradeRegisterComponent_Template_mat_option_click_41_listener() { return ctx.accountAllSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, TradeRegisterComponent_mat_option_43_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 12)(45, "div", 4)(46, "div", 5)(47, "mat-form-field", 16)(48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Select Sauda");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-select", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TradeRegisterComponent_Template_mat_select_ngModelChange_50_listener($event) { return ctx.saudaIds = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "input", 24, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function TradeRegisterComponent_Template_input_input_52_listener($event) { return ctx.onInputSaudaChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TradeRegisterComponent_Template_mat_option_click_54_listener() { return ctx.saudaAllSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, TradeRegisterComponent_mat_option_56_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 25)(58, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TradeRegisterComponent_Template_button_click_58_listener() { return ctx.getTradeFileListData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 27)(61, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TradeRegisterComponent_Template_span_click_61_listener() { return ctx.deleteContractTrades(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "delete_sweep");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "ag-grid-angular", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("gridReady", function TradeRegisterComponent_Template_ag_grid_angular_gridReady_64_listener($event) { return ctx.onGridReady($event); })("cellClicked", function TradeRegisterComponent_Template_ag_grid_angular_cellClicked_64_listener($event) { return ctx.onGridClick($event); })("cellDoubleClicked", function TradeRegisterComponent_Template_ag_grid_angular_cellDoubleClicked_64_listener($event) { return ctx.onGridDoubleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.fromDt);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.toDt);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.exId);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.accountIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredAccountList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.saudaIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filterSaudaList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.symbolMappingList)("pagination", true)("columnDefs", ctx.columnDefs)("rowMultiSelectWithClick", true)("rowSelection", "multiple")("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFkZS1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 48862:
/*!************************************************************************!*\
  !*** ./src/app/Forms/Reports/trail-balance/trail-balance.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrailBalanceComponent": () => (/* binding */ TrailBalanceComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _Master_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Master/master.service */ 60808);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reports.service */ 44613);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ag-grid-angular */ 79771);



















const _c0 = ["select"];
const _c1 = ["selectAccount"];
function TrailBalanceComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r4.name, " ");
} }
class TrailBalanceComponent {
    constructor(datePipe, snackBar, appSettings, _appService, dialog, _masterService, _reportsService) {
        this.datePipe = datePipe;
        this.snackBar = snackBar;
        this.appSettings = appSettings;
        this._appService = _appService;
        this.dialog = dialog;
        this._masterService = _masterService;
        this._reportsService = _reportsService;
        this.fromDt = new Date();
        this.brokeragesetupList = [];
        this.branchAllSellected = false;
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                flex: 1,
                sortable: true,
                wraptext: true,
                resizable: true,
                minWidth: 100,
            },
            suppressRowHoverHighlight: true,
            domLayout: 'autoHeight',
            rowClass: (params) => {
                // Check if the row is a total row (you can use your own criteria)
                if (params.data && (params.data.drShortCode === 'Total Debit' || params.data.crShortCode === 'Total Credit')) {
                    return 'total-row'; // Apply the CSS class for total rows
                }
                return ''; // Return an empty string for other rows
            },
            //suppressSizeToFit: true,
        };
        this.columnDefs = [
            { headerName: 'Code', field: 'drShortCode', filter: true, sorting: true, resizable: true },
            { headerName: 'Account', field: 'drName', filter: true, sorting: true, resizable: true },
            { field: 'drAmt', headerName: 'Debit', filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency, cellClass: (params) => {
                    return 'red-text';
                } },
            { headerName: 'No.', field: 'drAcId', filter: true, sorting: true, resizable: true },
            { headerName: 'Code', field: 'crShortCode', filter: true, sorting: true, resizable: true },
            { headerName: 'Account', field: 'crName', filter: true, sorting: true, resizable: true },
            { headerName: 'Credit', field: 'crAmt', filter: true, sorting: true, resizable: true, valueFormatter: this.formatCurrency, cellClass: (params) => {
                    return 'green-text';
                } },
            { headerName: 'No.', field: 'crAcId', filter: true, sorting: true, resizable: true },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.fetchDropdownData();
        // this.getBrokerageSetupList();
    }
    calculateTotalDebit() {
        // Replace this logic with your actual calculation logic
        let totalDebit = 0;
        for (const item of this.brokeragesetupList) {
            totalDebit += item.drAmt;
        }
        return totalDebit;
    }
    calculateTotalCredit() {
        // Replace this logic with your actual calculation logic
        let totalCredit = 0;
        for (const item of this.brokeragesetupList) {
            totalCredit += item.crAmt;
        }
        return totalCredit;
    }
    onGridReady(event) { }
    getBrokerageSetupList() {
        var req = {
            "branch": String(this.branchIds),
            "asOnDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
        };
        this._reportsService.getTrialBalance(req).subscribe((results) => {
            console.log('first', results);
            this.brokeragesetupList = results.data;
            this.brokeragesetupList.push({
                drShortCode: 'Total Debit',
                drAmt: this.calculateTotalDebit(),
                crShortCode: 'Total Credit',
                crAmt: this.calculateTotalCredit(),
            });
        });
    }
    formatCurrency(params) {
        const value = Math.abs(params.value); // Get the absolute value
        const formattedValue = value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return params.value < 0 ? `${formattedValue}` : formattedValue;
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
    areRequiredValuesSelected() {
        return this.fromDt;
    }
    fetchDropdownData() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([
            this._masterService.getBranchDDLList(),
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
            this.branchList = response[0];
            this.filteredProviders = response[0];
        })).subscribe(res => {
        });
    }
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredProviders = this.branchList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
    }
    onKey(value) {
        this.branchList = this.search(value);
    }
    search(value) {
        let filter = value.toLowerCase();
        return this.branchList.filter(option => option.toLowerCase().startsWith(filter));
    }
    addBrokerage(event) { }
}
TrailBalanceComponent.ɵfac = function TrailBalanceComponent_Factory(t) { return new (t || TrailBalanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Master_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_3__.ReportsService)); };
TrailBalanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TrailBalanceComponent, selectors: [["app-trail-balance"]], viewQuery: function TrailBalanceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.selectAccount = _t.first);
    } }, decls: 29, vars: 11, consts: [[1, "row", "trail-balance"], [1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "15"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "calendar"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Branch", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Branch", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "7", "fxFlex.sm", "7"], ["mat-raised-button", "", "color", "primary", 1, "search-icon-btn", 3, "disabled", "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", "domLayout", "autoHeight", 1, "ag-theme-material", 2, "height", "535px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "gridReady"], [3, "value"]], template: function TrailBalanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "As On Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TrailBalanceComponent_Template_input_ngModelChange_8_listener($event) { return ctx.fromDt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-datepicker-toggle", 7)(10, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "div", 4)(15, "mat-form-field", 9)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Select Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TrailBalanceComponent_Template_mat_select_ngModelChange_18_listener($event) { return ctx.branchIds = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function TrailBalanceComponent_Template_input_input_20_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, TrailBalanceComponent_mat_option_22_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 15)(24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TrailBalanceComponent_Template_button_click_24_listener() { return ctx.getBrokerageSetupList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 17)(28, "ag-grid-angular", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("gridReady", function TrailBalanceComponent_Template_ag_grid_angular_gridReady_28_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.fromDt);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.branchIds);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredProviders);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.brokeragesetupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__.AgGridAngular], styles: [".red-text[_ngcontent-%COMP%] {\n  color: red;\n  text-align: right;\n}\n.green-text[_ngcontent-%COMP%] {\n  color: green;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlsLWJhbGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQUE7QUFDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJ0cmFpbC1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29tcG9uZW50LXN0eWxlcy5jc3Mgb3IgeW91ciBzdHlsZXMgZmlsZSAqL1xyXG4ucmVkLXRleHQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuZ3JlZW4tdGV4dCB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_Forms_Reports_reports_module_ts.js.map