"use strict";
(self["webpackChunkgradus"] = self["webpackChunkgradus"] || []).push([["main"],{

/***/ 89045:
/*!***********************************************************************************!*\
  !*** ./src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationDialog": () => (/* binding */ ConfirmationDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);





class ConfirmationDialog {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = "Are you sure?";
        this.confirmButtonText = "Yes";
        this.cancelButtonText = "Cancel";
        if (data) {
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
                this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }
    onConfirmClick() {
        this.dialogRef.close(true);
    }
}
ConfirmationDialog.ɵfac = function ConfirmationDialog_Factory(t) { return new (t || ConfirmationDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
ConfirmationDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialog, selectors: [["confirmation-dialog"]], decls: 14, vars: 3, consts: [[1, "error-message"], [1, "content"], ["align", "center"], ["mat-raised-button", "", "color", "primary", "tabindex", "1", 3, "click"], ["mat-raised-button", "", "color", "warn", "mat-dialog-close", "", "tabindex", "-1"]], template: function ConfirmationDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1")(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "mat-dialog-content")(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 2)(10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialog_Template_button_click_10_listener() { return ctx.onConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.confirmButtonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cancelButtonText);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 44690:
/*!****************************************************************************!*\
  !*** ./src/app/Forms/Dialog/confirmation-dialog/error-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorDialog": () => (/* binding */ ErrorDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);





class ErrorDialog {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = "Are you sure?";
        this.confirmButtonText = "Yes";
        this.cancelButtonText = "Cancel";
        if (data) {
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
                //  this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }
    onConfirmClick() {
        this.dialogRef.close(true);
    }
}
ErrorDialog.ɵfac = function ErrorDialog_Factory(t) { return new (t || ErrorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
ErrorDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorDialog, selectors: [["error-dialog"]], decls: 12, vars: 2, consts: [[1, "error-message"], [1, "content"], ["align", "center"], ["mat-raised-button", "", "color", "primary", "tabindex", "1", 3, "click"]], template: function ErrorDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1")(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "error_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "mat-dialog-content")(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-actions", 2)(10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorDialog_Template_button_click_10_listener() { return ctx.onConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.confirmButtonText);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 88631:
/*!*******************************************************!*\
  !*** ./src/app/Forms/Login/authentication.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.authChangeSub = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.authChanged$ = this.authChangeSub.asObservable();
        this.userDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.userData$ = this.userDataSubject.asObservable();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
        this.logout = () => {
            localStorage.removeItem("token");
            this.sendAuthStateChangeNotification(false);
        };
    }
    Login(formData) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Accounts/Login', formData);
    }
    getUserData() {
        if (!this.userDataSubject.value) {
            const userData = localStorage.getItem('userData');
            if (userData) {
                this.userDataSubject.next(JSON.parse(userData));
            }
        }
        return this.userData$;
    }
    saveUserData(data) {
        this.userDataSubject.next(data);
    }
    sendAuthStateChangeNotification(isAuthenticated) {
        this.authChangeSub.next(isAuthenticated);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99667:
/*!******************************************************************************!*\
  !*** ./src/app/Forms/Master/exchange/add-exchange/add-exchange.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddExchangeComponent": () => (/* binding */ AddExchangeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../master-second.service */ 8703);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ag-grid-angular */ 79771);
























const _c0 = ["select"];
function AddExchangeComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "ExCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddExchangeComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddExchangeComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "FMCCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddExchangeComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "MemberId is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddExchangeComponent_mat_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r14.name, " ");
} }
function AddExchangeComponent_mat_option_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const DDL_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", DDL_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", DDL_r15.name, " ");
} }
function AddExchangeComponent_mat_option_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", tax_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tax_r16.name, " ");
} }
function AddExchangeComponent_mat_error_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Rate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddExchangeComponent_mat_error_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "DeliveryRate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddExchangeComponent_mat_option_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", exchange_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", exchange_r17.name, " ");
} }
class AddExchangeComponent {
    constructor(appSettings, snackBar, formBuilder, dialogRef, data, _masterService, _masterSecondService, dialog) {
        this.appSettings = appSettings;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._masterService = _masterService;
        this._masterSecondService = _masterSecondService;
        this.dialog = dialog;
        this.exchangeTaxList = [];
        this.accountAllSellected = false;
        this.accountExchangeList = [];
        this.isRowSelected = false;
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
                headerName: 'Added account Exchange list',
                children: [
                    {
                        headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
                        maxWidth: 110, resizable: true
                    },
                    { headerName: 'TaxName', field: 'taxName', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'Account', field: 'accountName', filter: true, sorting: true, resizable: true, flex: 1, },
                ]
            }];
        this.taxDetailsColumnDefs = [{
                headerName: 'Added TaxDetails Exchange list',
                children: [
                    {
                        headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
                        maxWidth: 110, resizable: true
                    },
                    { headerName: 'TaxName', field: 'taxName', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'FromDT', field: 'fromDt', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'ToDt', field: 'toDt', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'InsType', field: 'instrumentType', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'Rate', field: 'rate', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'Rate Delivery', field: 'rateDelivery', filter: true, sorting: true, resizable: true, flex: 1, },
                ]
            }];
        this.selectedId = data.id;
        if (data.id == null) {
            this.selectedId = 0;
        }
    }
    checkExchangeSelect() {
        if (this.selectedId == 0) {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
                data: {
                    message: 'Please select or save exchange to add account exchange',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
        }
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        eGui.innerHTML = `<button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    onGridAccountClick(params) {
        if (params.event.target.dataset.action == "delete") {
            const dialogRef = this.dialog.open(src_app_Forms_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
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
                    this._masterSecondService.deleteExchangeAccount(params.data.id).subscribe((res) => {
                        this.getExchangeAccountList();
                        this.showToaster(res.message, !res.isSuccess);
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
        if (params.event.target.dataset.action == "delete") {
            const dialogRef = this.dialog.open(src_app_Forms_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
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
                    this._masterSecondService.deleteExchangeTax(params.data.id).subscribe((res) => {
                        this.getExchangeTaxList();
                    });
                }
            });
        }
    }
    /* to filter select account dropdown*/
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.accountList = this.accountList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
    }
    /* for adding exchange detail*/
    bindFormControls() {
        this.exchangeMasterForm = this.formBuilder.group({
            'exCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'fmccode': [''],
            'memberId': [''],
            'future': [false],
            'convertCurrency': [false],
            'lotwise': [false],
            'options': [false],
            'cash': [false],
            'id': [0]
        });
    }
    /* for adding tax account detail*/
    bindAccountExchangeControls() {
        this.exchangeForm = this.formBuilder.group({
            'exchangeId': [this.selectedId, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'taxId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'accountId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'id': [0]
        });
    }
    onGridReady(event) { this.gridApi = event.api; }
    accountAllSelection() {
        this.accountAllSellected = true;
        var isAllChecked = this.select.options.first.selected;
        this.select.options.forEach((item, index) => {
            if (isAllChecked) {
                item.select();
            }
            else {
                item.deselect();
            }
        });
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([this._masterService.getApplyOn(), this._masterService.getTaxType(), this._masterService.getAccount(), this._masterService.getInstrumentList()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
            this.applyOnList = response[0];
            this.accountApplyOnList = response[1];
            this.accountList = response[2];
            this.instrumentList = response[3];
        })).subscribe(res => {
        });
        if (this.selectedId != 0) {
            this.getExchangeAccountList();
            this.getExchangeTaxList();
        }
    }
    getExchangeInfo() {
        this._masterSecondService.getExchangeId(this.selectedId).subscribe((res) => {
            this.exchangeMasterForm.get('exCode').setValue(res.exCode);
            this.exchangeMasterForm.get('name').setValue(res.name);
            this.exchangeMasterForm.get('fmccode').setValue(res.fmccode);
            this.exchangeMasterForm.get('memberId').setValue(res.memberId);
            this.exchangeMasterForm.get('future').setValue(res.future);
            this.exchangeMasterForm.get('convertCurrency').setValue(res.convertCurrency);
            this.exchangeMasterForm.get('lotwise').setValue(res.lotwise);
            this.exchangeMasterForm.get('options').setValue(res.options);
            this.exchangeMasterForm.get('cash').setValue(res.cash);
            this.exchangeMasterForm.get('id').setValue(res.id);
        });
    }
    getExchangeAccountList() {
        this._masterSecondService.getExchangeAccountList(this.selectedId).subscribe((res) => {
            this.accountExchangeList = res;
        });
    }
    getExchangeTaxList() {
        this._masterSecondService.getExchangeTaxList(this.selectedId).subscribe((res) => {
            this.exchangeTaxList = res;
        });
    }
    onSubmit(values) {
        var body = this.exchangeMasterForm.value;
        if (this.exchangeMasterForm.valid) {
            this._masterSecondService.saveExchange(body).subscribe(result => {
                if (result.isSuccess) {
                    this.dialogRef.close();
                }
                else {
                    this.showToaster(result.message, true);
                }
            }, err => {
                console.log(err);
            });
        }
    }
    deleteAccountExchange() {
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
            this._masterSecondService.deleteAccountTax(selectedRecord).subscribe(result => {
                this.getExchangeAccountList();
            });
        }
    }
    onAccountExchangeSubmit(values) {
        if (this.selectedId == 0) {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
                data: {
                    message: 'Please select or save tax to add account tax',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
        }
        this.exchangeForm.controls['exchangeId'].setValue(this.selectedId);
        var body = this.exchangeForm.value;
        if (this.exchangeForm.valid) {
            this._masterSecondService.saveExchangeAccount(body).subscribe(result => {
                this.getExchangeAccountList();
                this.resetForm(this.exchangeForm);
            });
        }
    }
    resetForm(myForm) {
        myForm.reset();
        myForm.get('id').setValue(0);
        Object.keys(myForm.controls).forEach(key => {
            myForm.get(key).setErrors(null);
        });
    }
    onSubmitExchangeTax(values) {
        if (this.selectedId == 0) {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
                data: {
                    message: 'Please select or save tax to add account tax',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
        }
        this.exchangeDetailsForm.controls['exchangeId'].setValue(this.selectedId);
        var body = this.exchangeDetailsForm.value;
        body.updatedBy = this.selectedId;
        body.updatedDate = new Date();
        body.taxName = "";
        body.exName = "";
        if (this.exchangeDetailsForm.valid) {
            this._masterSecondService.saveExchangeTax(body).subscribe(result => {
                this.getExchangeTaxList();
                this.resetForm(this.exchangeDetailsForm);
            });
        }
    }
    ngOnInit() {
        this.bindFormControls();
        this.bindAccountExchangeControls();
        this.bindTaxFormControls();
        this.initialApiCalls();
        if (this.selectedId != 0) {
            this.getExchangeInfo();
        }
        else {
            this.exchangeMasterForm.get('id').setValue(0);
        }
    }
    bindTaxFormControls() {
        this.exchangeDetailsForm = this.formBuilder.group({
            'exchangeId': [this.selectedId, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'taxId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'rate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'instrumentType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'rateDelivery': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'fromDt': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'toDt': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'id': [0],
        });
    }
    close() {
        this.dialogRef.close();
    }
}
AddExchangeComponent.ɵfac = function AddExchangeComponent_Factory(t) { return new (t || AddExchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_4__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
AddExchangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddExchangeComponent, selectors: [["app-add-exchange"]], viewQuery: function AddExchangeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, decls: 136, vars: 30, consts: [[1, "heading", "mb-10"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["label", "Details"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "tab-party-details-parent"], [1, "white-block", "pb-0"], ["fxFlex", "100", "fxFlex.gt-sm", "50", "fxFlex.sm", "50"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "name", "formControlName", "exCode", "type", "text"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "name", "formControlName", "name", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "FMCCode", "formControlName", "fmccode", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "MemberId", "formControlName", "memberId", "type", "text"], ["formControlName", "future", 1, "pl-10"], ["formControlName", "convertCurrency", 1, "pl-10"], ["formControlName", "lotwise", 1, "pl-10"], ["formControlName", "options", 1, "pl-10"], ["formControlName", "cash", 1, "pl-10"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], ["label", "Accounts"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Account", "panelClass", "custom-select-panel", "formControlName", "accountId"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Account", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Tax Type", "formControlName", "taxId"], [1, "col-xl-12", "mt-2", "position-relative"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "240px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked"], ["label", "Tax Details"], [1, "tab-tax-details-parent", "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["placeholder", "Select Tax", "formControlName", "taxId"], ["fxFlex", "100", "fxFlex.gt-sm", "16", "fxFlex.sm", "50"], ["matInput", "", "autocomplete", "off", "placeholder", "IntraDay", "formControlName", "rate", "type", "number"], ["matInput", "", "autocomplete", "off", "placeholder", "DeliveryRate", "formControlName", "rateDelivery", "type", "number"], ["matInput", "", "formControlName", "fromDt", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "To", "formControlName", "toDt", 3, "matDatepicker"], ["picker2", ""], ["placeholder", "Select InsType", "formControlName", "instrumentType"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "250px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked"], [3, "value"]], template: function AddExchangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Add Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddExchangeComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-tab-group")(7, "mat-tab", 3)(8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AddExchangeComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(ctx.exchangeMasterForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "h3")(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 7)(15, "mat-form-field", 8)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "ExCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AddExchangeComponent_mat_error_19_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 7)(21, "mat-form-field", 8)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AddExchangeComponent_mat_error_25_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 7)(27, "mat-form-field", 8)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "FMCCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AddExchangeComponent_mat_error_31_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 7)(33, "mat-form-field", 8)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "MemberId");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AddExchangeComponent_mat_error_37_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 7)(39, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Future");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "ConvertCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Lotwise");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 19)(50, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddExchangeComponent_Template_button_click_50_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-tab", 22)(55, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AddExchangeComponent_Template_form_ngSubmit_55_listener() { return ctx.onAccountExchangeSubmit(ctx.exchangeForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 5)(57, "div", 6)(58, "h3")(59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, " Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 7)(62, "div", 23)(63, "mat-form-field", 24)(64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Select Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-select", 25, 26)(68, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function AddExchangeComponent_Template_input_input_68_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, AddExchangeComponent_mat_option_70_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 7)(72, "mat-form-field", 30)(73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Tax Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "mat-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, AddExchangeComponent_mat_option_76_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 19)(78, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddExchangeComponent_Template_button_click_78_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 32)(83, "ag-grid-angular", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function AddExchangeComponent_Template_ag_grid_angular_cellClicked_83_listener($event) { return ctx.onGridAccountClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "mat-tab", 34)(85, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AddExchangeComponent_Template_form_ngSubmit_85_listener() { return ctx.onSubmitExchangeTax(ctx.exchangeDetailsForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 35)(87, "div", 6)(88, "h3")(89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Tax Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 36)(92, "mat-form-field", 30)(93, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Tax type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, AddExchangeComponent_mat_option_96_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 38)(98, "mat-form-field", 8)(99, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](102, AddExchangeComponent_mat_error_102_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 38)(104, "mat-form-field", 8)(105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Delivery Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, AddExchangeComponent_mat_error_108_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 38)(110, "mat-form-field", 8)(111, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "input", 41)(114, "mat-datepicker-toggle", 42)(115, "mat-datepicker", null, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 38)(118, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](119, "input", 44)(120, "mat-datepicker-toggle", 42)(121, "mat-datepicker", null, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 38)(124, "mat-form-field", 30)(125, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "InsType");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "mat-select", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](128, AddExchangeComponent_mat_option_128_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 19)(130, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddExchangeComponent_Template_button_click_130_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "div", 47)(135, "ag-grid-angular", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function AddExchangeComponent_Template_ag_grid_angular_cellClicked_135_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](116);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.exchangeMasterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.exchangeMasterForm.controls.exCode.errors == null ? null : ctx.exchangeMasterForm.controls.exCode.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.exchangeMasterForm.controls.name.errors == null ? null : ctx.exchangeMasterForm.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.exchangeMasterForm.controls.fmccode.errors == null ? null : ctx.exchangeMasterForm.controls.fmccode.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.exchangeMasterForm.controls.memberId.errors == null ? null : ctx.exchangeMasterForm.controls.memberId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.exchangeMasterForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.exchangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.accountList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.accountApplyOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.exchangeForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.accountExchangeList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.exchangeDetailsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.accountApplyOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.exchangeDetailsForm.controls.rate.errors == null ? null : ctx.exchangeDetailsForm.controls.rate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.exchangeDetailsForm.controls.rateDelivery.errors == null ? null : ctx.exchangeDetailsForm.controls.rateDelivery.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.instrumentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.exchangeDetailsForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.exchangeTaxList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.taxDetailsColumnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTab, ag_grid_angular__WEBPACK_IMPORTED_MODULE_22__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZXhjaGFuZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 86464:
/*!*************************************************************!*\
  !*** ./src/app/Forms/Master/exchange/exchange.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeComponent": () => (/* binding */ ExchangeComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _add_exchange_add_exchange_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-exchange/add-exchange.component */ 99667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master-second.service */ 8703);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ 79771);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);













class ExchangeComponent {
    constructor(appSettings, snackBar, dialog, _masterService, _masterSecondService) {
        this.appSettings = appSettings;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this._masterService = _masterService;
        this._masterSecondService = _masterSecondService;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                flex: 1,
                sortable: true,
                wraptext: true,
                resizable: true
            }
        };
        this.columnDefs = [
            {
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
                maxWidth: 110, resizable: true, filter: false
            },
            { headerName: 'ExCode', field: 'exCode', flex: 1 },
            { headerName: 'Name', field: 'name', flex: 2 },
            { headerName: 'FMCCode', field: 'fmccode', flex: 1 },
            { headerName: 'Future', field: 'future', flex: 1 },
            { headerName: 'Options', field: 'options', flex: 1 },
            { headerName: 'Cash', field: 'cash', flex: 1 },
            { headerName: 'MemberId', field: 'memberId', flex: 1 },
            { headerName: 'ConvertCurrency', field: 'convertCurrency', flex: 1 },
            { headerName: 'Lotwise', field: 'lotwise', flex: 1 },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getExchangeList();
    }
    getExchangeList() {
        this._masterSecondService.getExchangeList().subscribe((results) => {
            this.exchangeList = results;
        });
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>
                        <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    onGridClick(params) {
        if (params.event.target.dataset.action == "edit") {
            this.openExchangeDialog(params.data.id);
        }
        if (params.event.target.dataset.action == "delete") {
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
                    this._masterSecondService.deleteExchange(params.data.id).subscribe((res) => {
                        this.getExchangeList();
                        this.showToaster(res.message, !res.isSuccess);
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
    openExchangeDialog(user) {
        let dialogRef = this.dialog.open(_add_exchange_add_exchange_component__WEBPACK_IMPORTED_MODULE_1__.AddExchangeComponent, {
            data: { id: user }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getExchangeList();
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
ExchangeComponent.ɵfac = function ExchangeComponent_Factory(t) { return new (t || ExchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_4__.MasterSecondService)); };
ExchangeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ExchangeComponent, selectors: [["app-exchange"]], viewQuery: function ExchangeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 8, vars: 5, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"]], template: function ExchangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ExchangeComponent_Template_button_click_2_listener() { return ctx.openExchangeDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Add Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "ag-grid-angular", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function ExchangeComponent_Template_ag_grid_angular_cellClicked_7_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.exchangeList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__.AgGridAngular, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGNoYW5nZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8703:
/*!*******************************************************!*\
  !*** ./src/app/Forms/Master/master-second.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterSecondService": () => (/* binding */ MasterSecondService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class MasterSecondService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    }
    deleteTax(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/deleteTax/' + id, { headers: this.headers });
    }
    deleteItemGroup(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/deleteItemGroup/' + id, { headers: this.headers });
    }
    deleteExchange(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/deleteExchange/' + id, { headers: this.headers });
    }
    deleteSymbolMapping(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/deleteSymbolMapping/' + id, { headers: this.headers });
    }
    deleteTradeFileType(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/deleteTradeFileType/' + id, { headers: this.headers });
    }
    deleteInterest(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/deleteInterest/' + id, { headers: this.headers });
    }
    deleteExchangeTax(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/deleteExchangeTax/' + id, { headers: this.headers });
    }
    deleteExchangeAccount(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/deleteExchangeAccount/' + id, { headers: this.headers });
    }
    getApplyOnTaxAccountDDL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Common/getApplyOnTaxAccountDDL', { headers: this.headers });
    }
    addAccountTax(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/SaveAccountTax', data, { headers: this.headers });
    }
    addItemGroup(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/AddItemGroup', data, { headers: this.headers });
    }
    saveExchangeAccount(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/SaveExchangeAccount', data, { headers: this.headers });
    }
    saveInterest(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/SaveInterest', data, { headers: this.headers });
    }
    saveSymbolMapping(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/saveSymbolMapping', data, { headers: this.headers });
    }
    saveTradeFileType(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/SaveTradeFileType', data, { headers: this.headers });
    }
    saveExchangeTax(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/SaveExchangeTax', data, { headers: this.headers });
    }
    saveTax(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/SaveTax', data, { headers: this.headers });
    }
    saveItemGroup(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/saveItemGroup', data, { headers: this.headers });
    }
    saveExchange(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/SaveExchange', data, { headers: this.headers });
    }
    getTaxById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getTaxId/' + id, { headers: this.headers });
    }
    getItemGroupId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getItemGroupId/' + id, { headers: this.headers });
    }
    getInterestId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getInterestId/' + id, { headers: this.headers });
    }
    getSymbolMappingId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getSymbolMappingId/' + id, { headers: this.headers });
    }
    getTradeFileId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getTradeFileId/' + id, { headers: this.headers });
    }
    getExchangeId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getExchangeId/' + id, { headers: this.headers });
    }
    getTax() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getTaxList', { headers: this.headers });
    }
    getItemGroupNameList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getItemGroupNameList', { headers: this.headers });
    }
    getExchangeList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getExchangeList', { headers: this.headers });
    }
    getSymbolMappingList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getSymbolMappingList', { headers: this.headers });
    }
    getTradeFileList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getTradeFileList', { headers: this.headers });
    }
    getInterestList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getInterestList', { headers: this.headers });
    }
    getAccountInterestList(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getAccountInterestList/' + id, { headers: this.headers });
    }
    getTaxAccountList(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getAccountTaxList/' + id, { headers: this.headers });
    }
    getItemGroupList(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getItemGroupList/' + id, { headers: this.headers });
    }
    getExchangeAccountList(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getExchangeAccountList/' + id, { headers: this.headers });
    }
    getExchangeTaxList(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getExchangeTaxList/' + id, { headers: this.headers });
    }
    getSharingSetupList(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getSharingSetupList', data, { headers: this.headers });
    }
    getSharingAddValidation(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getSharingAddValidation', data, { headers: this.headers });
    }
    getTaxAccountId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getAccountTaxId/' + id, { headers: this.headers });
    }
    deleteAccountTax(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/deleteAccountTax', data, { headers: this.headers });
    }
    removeMultipleItemGroup(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/removeMultipleItemGroup', data, { headers: this.headers });
    }
    getApplyOnFileShareDDL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getApplyOnFileShareDDL', { headers: this.headers });
    }
    saveSharing(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/SaveSharing', data, { headers: this.headers });
    }
    updateSingleSharing(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/updateSingleSharing', data, { headers: this.headers });
    }
    lockSharing(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/lockSharing', data, { headers: this.headers });
    }
}
MasterSecondService.ɵfac = function MasterSecondService_Factory(t) { return new (t || MasterSecondService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
MasterSecondService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MasterSecondService, factory: MasterSecondService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60808:
/*!************************************************!*\
  !*** ./src/app/Forms/Master/master.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterService": () => (/* binding */ MasterService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class MasterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    }
    getAccounts() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getAccountList', { headers: this.headers });
    }
    getState() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/GetState', { headers: this.headers });
    }
    getAcGoup() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getacgroup', { headers: this.headers });
    }
    getAcHead() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getAcHead', { headers: this.headers });
    }
    getInstrument() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getInstrument', { headers: this.headers });
    }
    getOption() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getOption', { headers: this.headers });
    }
    getCityListByStateId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getCity/' + id, { headers: this.headers });
    }
    getAccountById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getAccountId/' + id, { headers: this.headers });
    }
    deleteAccountById(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/deleteAccount/' + id, { headers: this.headers });
    }
    saveAccount(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/saveAccount', data, { headers: this.headers });
    }
    getTransporter() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/gettransporterlist', { headers: this.headers });
    }
    getFileCodeList(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getFileCodeList/' + id, { headers: this.headers });
    }
    getItemListExchange(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getItemListExchange/' + id, { headers: this.headers });
    }
    getFileCodeId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getFileCodeId/' + id, { headers: this.headers });
    }
    deleteAcFileCode(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/deleteAcFileCode/' + id, { headers: this.headers });
    }
    saveAcFileCode(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/SaveAcFileCode', data, { headers: this.headers });
    }
    saveTransporter(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/saveTransporter', data, { headers: this.headers });
    }
    getCityList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getCityList', { headers: this.headers });
    }
    getTaxType() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getTaxName', { headers: this.headers });
    }
    getExchangeName() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getExchangeNameDLL', { headers: this.headers });
    }
    getExchangeSaudaListDDL(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getExchangeSaudaListDDL/' + id, { headers: this.headers });
    }
    getSaudaListDDL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getSaudaListDDL', { headers: this.headers });
    }
    saveItem(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/saveItem', data, { headers: this.headers });
    }
    getItemById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getItemId/' + id, { headers: this.headers });
    }
    deleteItem(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteItem/' + id, { headers: this.headers });
    }
    getSaudaList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getSaudaList', { headers: this.headers });
    }
    getItemListDrp() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getItemListDDL', { headers: this.headers });
    }
    getApplyOnQtyDDL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getApplyOnQtyDDL', { headers: this.headers });
    }
    getApplyOnDDL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getApplyOnDDL', { headers: this.headers });
    }
    getInstrumentList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getInstrument', { headers: this.headers });
    }
    getOptionList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getOption', { headers: this.headers });
    }
    saveSauda(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/saveSauda', data, { headers: this.headers });
    }
    getSaudaById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getSaudaId/' + id, { headers: this.headers });
    }
    deleteSauda(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteSauda/' + id, { headers: this.headers });
    }
    getProductById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getProductId/' + id, { headers: this.headers });
    }
    deleteProduct(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteProduct/' + id, { headers: this.headers });
    }
    saveProduct(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/SaveProduct', data, { headers: this.headers });
    }
    getAccountTaxList(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getAccountTaxList/' + id, { headers: this.headers });
    }
    saveAccountTax(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/saveAccountTax', data, { headers: this.headers });
    }
    getAccountTaxById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getAccountTaxId/' + id, { headers: this.headers });
    }
    deleteAccountTax(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteAccountTax/' + id, { headers: this.headers });
    }
    saveContract(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/SaveContract', data, { headers: this.headers });
    }
    importItem(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/importItem', data, { headers: this.headers });
    }
    getContractById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getContractId/' + id, { headers: this.headers });
    }
    deleteContract(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteContract/' + id, { headers: this.headers });
    }
    getSlabDDL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getBrokeageSlabDDL/', { headers: this.headers });
    }
    getSlabList(slabId) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + `master/getBrokeageSlabList/${slabId}`, { headers: this.headers });
    }
    getCompanyById(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getCompanyId/' + id, { headers: this.headers });
    }
    saveCompany(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/SaveCompany', data, { headers: this.headers });
    }
    getBranchDDLList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getBranchDDL', { headers: this.headers });
    }
    getFilterBranchAccounts(branchIds) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getFilterBranchAccounts/' + branchIds, { headers: this.headers });
    }
    saveBrokerageSlabName(slabName) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + `master/SaveBrokerageSlabName?name=${slabName}`, { headers: this.headers });
    }
    deleteSlabMaster(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteSlabMaster/' + id, { headers: this.headers });
    }
    deleteSlabDetail(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteSlabDetail/' + id, { headers: this.headers });
    }
    deleteBrokerageSetup(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteBrokerageSetup/' + id, { headers: this.headers });
    }
    deleteSubBrokerageSetup(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteSubBrokerageSetup/' + id, { headers: this.headers });
    }
    saveBrokerageSlab(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/SaveBrokerageSlab', data, { headers: this.headers });
    }
    getBrokerageSlabId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getBrokerageSlabId/' + id, { headers: this.headers });
    }
    applySlab(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/applyBrokerageSlab', data, { headers: this.headers });
    }
    getAccount() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getAccountDDL', { headers: this.headers });
    }
    saveBrokerageSetup(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/SaveBrokerageSetup', data, { headers: this.headers });
    }
    saveSubBrokerageSetup(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/saveSubBrokerageSetup', data, { headers: this.headers });
    }
    updateSingleBrokerage(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/updateSingleBrokerage', data, { headers: this.headers });
    }
    updateSingleSubBrokerage(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/updateSingleSubBrokerage', data, { headers: this.headers });
    }
    lockBrokerage(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/lockBrokerage', data, { headers: this.headers });
    }
    lockSubBrokerage(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/lockSubBrokerage', data, { headers: this.headers });
    }
    getBrokeageSetupList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getBrokeageSetupList/', { headers: this.headers });
    }
    getBrokerageSetupId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getBrokerageSetupId/' + id, { headers: this.headers });
    }
    deleteBranch(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteBranch/' + id, { headers: this.headers });
    }
    deleteAcHead(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/deleteAcHead/' + id, { headers: this.headers });
    }
    getApplyOn() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Common/getApplyOnTaxDDL', { headers: this.headers });
    }
    getSharingApplyOnDDL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Common/getSharingApplyOnDDL', { headers: this.headers });
    }
    getAccountHead() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getAcHead', { headers: this.headers });
    }
    saveAccountHead(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/SaveAcHead', data, { headers: this.headers });
    }
    saveBranch(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/saveBranch', data, { headers: this.headers });
    }
    getBranchList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getBranchList', { headers: this.headers });
    }
    getBranchId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getBranchId/' + id, { headers: this.headers });
    }
    getBranchAccountsID(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getBranchAccounts/' + id, { headers: this.headers });
    }
    addBranchAccount(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/AddBranchAccount', data, { headers: this.headers });
    }
    deleteBranchAccount(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/deleteBranchAccount', data, { headers: this.headers });
    }
    getApplyOnTaxAccountDDL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Common/getApplyOnTaxAccountDDL', { headers: this.headers });
    }
    getAccountsForBranch(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getAccountsForBranch/' + id, { headers: this.headers });
    }
    getAccountsAddedinBranch(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getBranchAccountList/' + id, { headers: this.headers });
    }
    getAccountsAddedinAcHead(headId) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getHeadAccountList/' + headId, { headers: this.headers });
    }
    getAcHeadId(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getAcHeadId/' + id, { headers: this.headers });
    }
    addAcHead(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/AddHeadAccount', data, { headers: this.headers });
    }
    deleteAcHeadAccount(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/deleteHeadAccount', data, { headers: this.headers });
    }
    getApplyOnFileShareDDL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Common/getApplyOnFileShareDDL', { headers: this.headers });
    }
    getAccountSelfShareEdit(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getAccountSelfShareEdit/' + id, { headers: this.headers });
    }
    deleteAccountSelfShare(id) {
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/deleteAccountSelfShare/' + id, { headers: this.headers });
    }
    saveAccountSelfShare(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/saveAccountSelfShare', data, { headers: this.headers });
    }
    getAccountSelfShareList(accountId) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'master/getAccountSelfShareList/' + accountId, { headers: this.headers });
    }
    createUser(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'User/createUser', data, { headers: this.headers });
    }
}
MasterService.ɵfac = function MasterService_Factory(t) { return new (t || MasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
MasterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MasterService, factory: MasterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13145:
/*!************************************************************************!*\
  !*** ./src/app/Forms/common/directive/currency-formatter.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyFormatterDirective": () => (/* binding */ CurrencyFormatterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


class CurrencyFormatterDirective {
    constructor(el) {
        this.el = el;
    }
    onBlur(value) {
        // Remove any non-numeric characters
        const numericValue = value.replace(/[^0-9.]/g, '');
        // Format the value with two decimal places and add ".00"
        const formattedValue = parseFloat(numericValue).toFixed(2);
        // Update the input element with the formatted value
        this.el.nativeElement.value = formattedValue;
    }
}
CurrencyFormatterDirective.ɵfac = function CurrencyFormatterDirective_Factory(t) { return new (t || CurrencyFormatterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
CurrencyFormatterDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CurrencyFormatterDirective, selectors: [["", "appCurrencyFormatter", ""]], hostBindings: function CurrencyFormatterDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CurrencyFormatterDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event.target.value); });
    } } });


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 63704);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);







class AppComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 12, consts: [["id", "app", 1, "app", 3, "dir", "ngClass"], ["id", "app-spinner"], ["color", "primary"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fixed-header", ctx.settings.fixedHeader)("horizontal-menu", ctx.settings.menu == "horizontal")("compact", ctx.settings.menuType == "compact")("mini", ctx.settings.menuType == "mini");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx.settings.rtl ? "rtl" : "ltr")("ngClass", ctx.settings.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", !ctx.settings.loadingSpinner);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Dir, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], styles: [".app[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#app-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 0.5;\n  transition: visibility 0.5s, opacity 0.3s linear;\n}\n\n#app-spinner.hide[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n}\n\n#app-spinner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  letter-spacing: 0.02em;\n  opacity: 0;\n  text-transform: uppercase;\n  animation: loading-text-opacity 2s linear 0s infinite normal;\n}\n\n@keyframes loading-text-opacity {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBS0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFHQSxnREFBQTtBQUNKOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBRVI7O0FBQUk7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBSUEsNERBQUE7QUFFUjs7QUFFQTtFQUNJO0lBQUssVUFBQTtFQUVQO0VBREU7SUFBSyxVQUFBO0VBSVA7RUFIRTtJQUFLLFVBQUE7RUFNUDtFQUxFO0lBQUssVUFBQTtFQVFQO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYm90dG9tOjA7XHJcbn1cclxuXHJcbiNhcHAtc3Bpbm5lcntcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuM3MgbGluZWFyO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgICAmLmhpZGV7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7IFxyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAtbW96LWFuaW1hdGlvbjogbG9hZGluZy10ZXh0LW9wYWNpdHkgMnMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcclxuICAgICAgICAtby1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmctdGV4dC1vcGFjaXR5IDJzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nLXRleHQtb3BhY2l0eSAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmctdGV4dC1vcGFjaXR5IHtcclxuICAgIDAlICB7b3BhY2l0eTogMH1cclxuICAgIDIwJSB7b3BhY2l0eTogMH1cclxuICAgIDUwJSB7b3BhY2l0eTogMX1cclxuICAgIDEwMCV7b3BhY2l0eTogMH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgbG9hZGluZy10ZXh0LW9wYWNpdHkge1xyXG4gICAgMCUgIHtvcGFjaXR5OiAwfVxyXG4gICAgMjAlIHtvcGFjaXR5OiAwfVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxfVxyXG4gICAgMTAwJXtvcGFjaXR5OiAwfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSAge29wYWNpdHk6IDB9XHJcbiAgICAyMCUge29wYWNpdHk6IDB9XHJcbiAgICA1MCUge29wYWNpdHk6IDF9XHJcbiAgICAxMDAle29wYWNpdHk6IDB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBsb2FkaW5nLXRleHQtb3BhY2l0eSB7XHJcbiAgICAwJSAge29wYWNpdHk6IDB9XHJcbiAgICAyMCUge29wYWNpdHk6IDB9XHJcbiAgICA1MCUge29wYWNpdHk6IDF9XHJcbiAgICAxMDAle29wYWNpdHk6IDB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ 28758);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular-calendar */ 65610);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 58617);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/pipes/pipes.module */ 39045);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.component */ 37664);
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/blank/blank.component */ 97276);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/search/search.component */ 31164);
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ 64289);
/* harmony import */ var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/errors/error/error.component */ 47853);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/components/sidenav/sidenav.component */ 25597);
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/components/menu/vertical-menu/vertical-menu.component */ 92359);
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */ 85359);
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/components/breadcrumb/breadcrumb.component */ 52333);
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/components/flags-menu/flags-menu.component */ 25566);
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/components/fullscreen/fullscreen.component */ 97721);
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/components/applications/applications.component */ 84751);
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/components/messages/messages.component */ 93833);
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme/components/user-menu/user-menu.component */ 94460);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ag-grid-angular */ 79771);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _Forms_Master_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Forms/Master/exchange/exchange.component */ 86464);
/* harmony import */ var _service_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/auth-interceptor.service */ 12471);
/* harmony import */ var _service_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/loading-interceptor.service */ 75429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 22560);





































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [
        _app_settings__WEBPACK_IMPORTED_MODULE_10__.AppSettings,
        { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__.PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
        { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__.OverlayContainer, useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_0__.CustomOverlayContainer },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HTTP_INTERCEPTORS,
            useClass: _service_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_21__.AuthInterceptor,
            multi: true,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HTTP_INTERCEPTORS,
            useClass: _service_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_22__.LoadingInterceptor,
            multi: true,
        },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_30__.AgGridModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
        _agm_core__WEBPACK_IMPORTED_MODULE_31__.AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I'
        }),
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__.PerfectScrollbarModule,
        angular_calendar__WEBPACK_IMPORTED_MODULE_32__.CalendarModule.forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_32__.DateAdapter,
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_33__.adapterFactory
        }),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
        _app_routing__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
        _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__.PagesComponent,
        _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_6__.BlankComponent,
        _pages_search_search_component__WEBPACK_IMPORTED_MODULE_7__.SearchComponent,
        _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__.NotFoundComponent,
        _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_9__.ErrorComponent,
        _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__.SidenavComponent,
        _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_12__.VerticalMenuComponent,
        _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_13__.HorizontalMenuComponent,
        _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__.BreadcrumbComponent,
        _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_15__.FlagsMenuComponent,
        _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_16__.FullScreenComponent,
        _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_17__.ApplicationsComponent,
        _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_18__.MessagesComponent,
        _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_19__.UserMenuComponent,
        _Forms_Master_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_20__.ExchangeComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_30__.AgGridModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule, _agm_core__WEBPACK_IMPORTED_MODULE_31__.AgmCoreModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__.PerfectScrollbarModule, angular_calendar__WEBPACK_IMPORTED_MODULE_32__.CalendarModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
        _app_routing__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule] }); })();


/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pages.component */ 37664);
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/blank/blank.component */ 97276);
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/search/search.component */ 31164);
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ 64289);
/* harmony import */ var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/errors/error/error.component */ 47853);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);
/* harmony import */ var _guards_auth_child_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth-child.guard */ 71992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);










const routes = [
    {
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
        canActivateChild: [_guards_auth_child_guard__WEBPACK_IMPORTED_MODULE_6__.AuthChildGuard],
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
        children: [
            { path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-charts_fesm2020_swimlane-ngx-charts_mjs"), __webpack_require__.e("src_app_pages_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 71659)).then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("src_app_pages_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/users/users.module */ 40535)).then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            { path: 'logs', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_Forms_Logs_logs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Forms/Logs/logs.module */ 90703)).then(m => m.LogsModule), data: { breadcrumb: 'Logs' } },
            { path: 'user-roles', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination___ivy_ngcc___dist_ngx-pagination_js"), __webpack_require__.e("default-src_app_Forms_User_change-password_change-password_component_ts-src_app_Forms_User_in-691acf"), __webpack_require__.e("src_app_Forms_User_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/Forms/User/user.module */ 61424)).then(m => m.UserModule), data: { breadcrumb: 'Users & Roles' } },
            { path: 'master', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Forms_User_change-password_change-password_component_ts-src_app_Forms_User_in-691acf"), __webpack_require__.e("common"), __webpack_require__.e("src_app_Forms_Master_master_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Forms/Master/master.module */ 22259)).then(m => m.MasterModule), data: { breadcrumb: 'Master' } },
            { path: 'ui', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_ui_ui_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ui/ui.module */ 8204)).then(m => m.UiModule), data: { breadcrumb: 'UI' } },
            { path: 'form-controls', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_form-controls_form-controls_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/form-controls/form-controls.module */ 38562)).then(m => m.FormControlsModule), data: { breadcrumb: 'Form Controls' } },
            { path: 'tables', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tables_tables_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tables/tables.module */ 24272)).then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },
            { path: 'icons', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/icons/icons.module */ 64684)).then(m => m.IconsModule), data: { breadcrumb: 'Material Icons' } },
            { path: 'drag-drop', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_drag-drop_drag-drop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/drag-drop/drag-drop.module */ 95901)).then(m => m.DragDropModule), data: { breadcrumb: 'Drag & Drop' } },
            { path: 'schedule', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_schedule_schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/schedule/schedule.module */ 21839)).then(m => m.ScheduleModule), data: { breadcrumb: 'Schedule' } },
            { path: 'mailbox', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_mailbox_mailbox_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/mailbox/mailbox.module */ 57609)).then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
            { path: 'chat', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chat/chat.module */ 35501)).then(m => m.ChatModule), data: { breadcrumb: 'Chat' } },
            { path: 'maps', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/maps/maps.module */ 5177)).then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-charts_fesm2020_swimlane-ngx-charts_mjs"), __webpack_require__.e("src_app_pages_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/charts/charts.module */ 29313)).then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dynamic-menu_dynamic-menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dynamic-menu/dynamic-menu.module */ 89414)).then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'profile', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 88558)).then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } },
            { path: 'blank', component: _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, data: { breadcrumb: 'Search' } },
            { path: 'entry', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_Forms_Entry_entry_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Forms/Entry/entry.module */ 89000)).then(m => m.EntryModule), data: { breadcrumb: 'Entry' } },
            { path: 'reports', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_Forms_Reports_reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Forms/Reports/reports.module */ 9466)).then(m => m.ReportsModule), data: { breadcrumb: 'Reports' } },
            { path: 'imports', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_Forms_Imports_imports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Forms/Imports/imports.module */ 24186)).then(m => m.ImportsModule), data: { breadcrumb: 'Imports' } },
        ]
    },
    { path: 'landing', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/landing/landing.module */ 97241)).then(m => m.LandingModule) },
    { path: 'login', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Forms_Login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/Forms/Login/login.module */ 66566)).then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 60207)).then(m => m.RegisterModule) },
    { path: 'error', component: _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard, _guards_auth_child_guard__WEBPACK_IMPORTED_MODULE_6__.AuthChildGuard], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_8__.PreloadAllModules,
            relativeLinkResolution: 'legacy',
            // useHash: true
        }), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 4588:
/*!***************************************!*\
  !*** ./src/app/app.settings.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": () => (/* binding */ Settings)
/* harmony export */ });
class Settings {
    constructor(name, loadingSpinner, fixedHeader, sidenavIsOpened, sidenavIsPinned, sidenavUserBlock, menu, menuType, theme, rtl, hasFooter) {
        this.name = name;
        this.loadingSpinner = loadingSpinner;
        this.fixedHeader = fixedHeader;
        this.sidenavIsOpened = sidenavIsOpened;
        this.sidenavIsPinned = sidenavIsPinned;
        this.sidenavUserBlock = sidenavUserBlock;
        this.menu = menu;
        this.menuType = menuType;
        this.theme = theme;
        this.rtl = rtl;
        this.hasFooter = hasFooter;
    }
}


/***/ }),

/***/ 1182:
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettings": () => (/* binding */ AppSettings)
/* harmony export */ });
/* harmony import */ var _app_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.settings.model */ 4588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class AppSettings {
    constructor() {
        this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_0__.Settings('Sauda Web', //theme name
        true, //loadingSpinner
        true, //fixedHeader
        true, //sidenavIsOpened
        true, //sidenavIsPinned  
        true, //sidenavUserBlock 
        'vertical', //horizontal , vertical
        'default', //default, compact, mini
        'teal-light', //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
        false, // true = rtl, false = ltr
        true // true = has footer, false = no footer
        );
    }
}
AppSettings.ɵfac = function AppSettings_Factory(t) { return new (t || AppSettings)(); };
AppSettings.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppSettings, factory: AppSettings.ɵfac });


/***/ }),

/***/ 71992:
/*!********************************************!*\
  !*** ./src/app/guards/auth-child.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthChildGuard": () => (/* binding */ AuthChildGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);



class AuthChildGuard {
    constructor(router) {
        this.router = router;
    }
    canActivateChild() {
        const token = localStorage.getItem('token');
        if (token) {
            return true; // User is authenticated
        }
        else {
            this.router.navigate(['/login']); // Redirect to the login page
            return false;
        }
    }
}
AuthChildGuard.ɵfac = function AuthChildGuard_Factory(t) { return new (t || AuthChildGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthChildGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthChildGuard, factory: AuthChildGuard.ɵfac });


/***/ }),

/***/ 95107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 97276:
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankComponent": () => (/* binding */ BlankComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/app.service */ 46935);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ 79771);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);






class BlankComponent {
    constructor(appSettings, _appService) {
        this.appSettings = appSettings;
        this._appService = _appService;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'Name' },
            { name: 'Mobile' },
            { name: 'email' }
        ];
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                flex: 1,
                sortable: true,
                wraptext: true,
                resizable: true
            }
        };
        this.columnDefs = [
            {
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
                maxWidth: 110, resizable: true
            },
            { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
            { headerName: 'Opbal', field: 'opbal', filter: true, sorting: true, resizable: true },
            { headerName: 'Mobile', field: 'mobile', filter: true, sorting: true, resizable: true }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getAccountList();
    }
    onActivate(event) {
        console.log('Activate Event', event);
    }
    getAccountList() {
        this._appService.getAccounts().subscribe((results) => {
            debugger;
            this.accountList = results;
            console.log(this.accountList);
        });
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>
                      <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    onGridClick(params) {
        debugger;
        if (params.event.target.dataset.action == "edit") {
            alert('edit clicked');
        }
        if (params.event.target.dataset.action == "delete") {
            alert('delete clicked');
        }
    }
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService)); };
BlankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank"]], viewQuery: function BlankComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 5, vars: 4, consts: [[1, "row"], ["mat-flat-button", "", "color", "primary", 1, "m-1"], [1, "col-xl-12"], [1, "ag-theme-alpine", 2, "height", "535px", 3, "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"]], template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "ag-grid-angular", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cellClicked", function BlankComponent_Template_ag_grid_angular_cellClicked_4_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rowData", ctx.accountList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__.AgGridAngular, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 47853:
/*!*******************************************************!*\
  !*** ./src/app/pages/errors/error/error.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);








class ErrorComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    goHome() {
        this.router.navigate(['/']);
    }
    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 20, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "h-100"], ["fxFlex", "80", "fxFlex.gt-sm", "30", "fxFlex.sm", "60"], [1, "p-0", "mat-elevation-z24", "box"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "bg-primary", "box-header"], ["mat-fab", "", "color", "accent", 1, "mat-elevation-z12"], [1, "error"], ["fxLayout", "column", "fxLayoutAlign", "end center", 1, "box-content"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mat-elevation-z12", "box-content-inner"], [1, "box-content-header", "server-error"], [1, "box-text"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mat-elevation-z12", "box-button", 3, "click"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container")(1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "div", 3)(5, "button", 4)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content", 6)(11, "mat-card", 7)(12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Internal server error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Opps, something went wrong.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "You can go to home page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_18_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "GO HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContainer], encapsulation: 2 });


/***/ }),

/***/ 64289:
/*!***************************************************************!*\
  !*** ./src/app/pages/errors/not-found/not-found.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);










class NotFoundComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    searchResult() {
        this.router.navigate(['/search']);
    }
    ngAfterViewInit() {
        this.settings.loadingSpinner = false;
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 20, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "h-100"], ["fxFlex", "80", "fxFlex.gt-sm", "30", "fxFlex.sm", "60"], [1, "p-0", "mat-elevation-z24", "box"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "bg-primary", "box-header"], ["mat-fab", "", "color", "accent", 1, "mat-elevation-z12"], [1, "error"], ["fxLayout", "column", "fxLayoutAlign", "end center", 1, "box-content"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mat-elevation-z12", "box-content-inner"], [1, "box-text"], [1, "w-100"], ["matInput", "", "placeholder", "Enter search keyword..."], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "mat-elevation-z12", "box-button", 3, "click"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container")(1, "div", 0)(2, "div", 1)(3, "mat-card", 2)(4, "div", 3)(5, "button", 4)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content", 6)(11, "mat-card", 7)(12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Opps, it seems that this page does not exist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "If you are sure it should, search for it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_18_listener() { return ctx.searchResult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer], encapsulation: 2 });


/***/ }),

/***/ 37664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/components/menu/menu.service */ 67091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/extended */ 63704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/components/sidenav/sidenav.component */ 25597);
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/components/menu/horizontal-menu/horizontal-menu.component */ 85359);
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/components/breadcrumb/breadcrumb.component */ 52333);
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/components/flags-menu/flags-menu.component */ 25566);
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/components/fullscreen/fullscreen.component */ 97721);
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/components/applications/applications.component */ 84751);
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/components/messages/messages.component */ 93833);
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../theme/components/user-menu/user-menu.component */ 94460);



























const _c0 = ["sidenav"];
const _c1 = ["backToTop"];
function PagesComponent_mat_sidenav_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-sidenav", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-sidenav");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("opened", ctx_r0.settings.sidenavIsOpened)("mode", ctx_r0.settings.sidenavIsPinned ? "side" : "over");
} }
function PagesComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.toggleSidenav()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function PagesComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.settings.sidenavUserBlock = !ctx_r14.settings.sidenavUserBlock); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function PagesComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.closeSubMenus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PagesComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.closeSubMenus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Sauda Web");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function PagesComponent_mat_toolbar_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-toolbar", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-horizontal-menu", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("fixed-top", !ctx_r5.settings.fixedHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("menuParentId", 0);
} }
function PagesComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div")(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Copyright \u00A9 2019 All Rights Reserved");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} }
function PagesComponent_mat_radio_button_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-radio-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", menu_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menu_r20);
} }
function PagesComponent_mat_radio_button_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-radio-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuType_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", menuType_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](menuType_r21);
} }
class PagesComponent {
    constructor(appSettings, router, menuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.menuService = menuService;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.lastScrollTop = 0;
        this.showBackToTop = false;
        this.toggleSearchBar = false;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        if (window.innerWidth <= 768) {
            this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
        }
        this.menuOption = this.settings.menu;
        this.menuTypeOption = this.settings.menuType;
        this.defaultMenu = this.settings.menu;
    }
    ngAfterViewInit() {
        setTimeout(() => { this.settings.loadingSpinner = false; }, 300);
        this.backToTop.nativeElement.style.display = 'none';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd) {
                if (!this.settings.sidenavIsPinned) {
                    this.sidenav.close();
                }
                if (window.innerWidth <= 768) {
                    this.sidenav.close();
                }
            }
        });
        if (this.settings.menu == "vertical")
            this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
    }
    chooseMenu() {
        this.settings.menu = this.menuOption;
        this.defaultMenu = this.menuOption;
        this.router.navigate(['/']);
    }
    chooseMenuType() {
        this.settings.menuType = this.menuTypeOption;
    }
    changeTheme(theme) {
        this.settings.theme = theme;
    }
    toggleSidenav() {
        this.sidenav.toggle();
    }
    onPsScrollY(event) {
        (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
        if (this.settings.menu == 'horizontal') {
            if (this.settings.fixedHeader) {
                var currentScrollTop = (event.target.scrollTop > 56) ? event.target.scrollTop : 0;
                if (currentScrollTop > this.lastScrollTop) {
                    document.querySelector('#horizontal-menu').classList.add('sticky');
                    event.target.classList.add('horizontal-menu-hidden');
                }
                else {
                    document.querySelector('#horizontal-menu').classList.remove('sticky');
                    event.target.classList.remove('horizontal-menu-hidden');
                }
                this.lastScrollTop = currentScrollTop;
            }
            else {
                if (event.target.scrollTop > 56) {
                    document.querySelector('#horizontal-menu').classList.add('sticky');
                    event.target.classList.add('horizontal-menu-hidden');
                }
                else {
                    document.querySelector('#horizontal-menu').classList.remove('sticky');
                    event.target.classList.remove('horizontal-menu-hidden');
                }
            }
        }
    }
    scrollToTop() {
        this.pss.forEach(ps => {
            if (ps.elementRef.nativeElement.id == 'main' || ps.elementRef.nativeElement.id == 'main-content') {
                ps.scrollToTop(0, 250);
            }
        });
    }
    onWindowResize() {
        if (window.innerWidth <= 768) {
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.settings.menu = 'vertical';
        }
        else {
            (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = true;
            this.settings.sidenavIsPinned = true;
        }
    }
    closeSubMenus() {
        let menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService)); };
PagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], viewQuery: function PagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.backToTop = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.pss = _t);
    } }, hostBindings: function PagesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("resize", function PagesComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService])], decls: 97, vars: 23, consts: [["class", "sidenav mat-elevation-z6", 3, "opened", "mode", 4, "ngIf"], ["id", "main", "perfectScrollbar", "", 3, "disabled", "psScrollY"], ["color", "primary", 1, "flex-p-x"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "w-100"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxShow", "false", "fxShow.gt-xs", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "routerLink", "/", "class", "small-logo", 3, "click", 4, "ngIf"], ["class", "logo", "routerLink", "/", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxShow", "false", "fxShow.gt-xs", "", 1, "search-bar"], ["method", "get"], ["type", "text", "placeholder", "Type to search...", 1, "mat-elevation-z3"], ["mat-icon-button", "", "type", "button", 3, "click"], ["fxShow", "false", "fxShow.gt-sm", ""], ["fxShow", "false", "fxShow.gt-xs", ""], ["id", "horizontal-menu", "color", "primary", "class", "horizontal-menu flex-p-x transition-2", 3, "fixed-top", 4, "ngIf"], ["id", "main-content", "perfectScrollbar", "", 1, "inner-sidenav-content", "transition-2", 3, "disabled", "psScrollY"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "class", "footer bg-primary", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "options-icon", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "back-to-top", 3, "click"], ["backToTop", ""], ["position", "end", 1, "options"], ["options", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "control", "mat-elevation-z1"], ["perfectScrollbar", ""], ["fxLayout", "column", 1, "control"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["labelPosition", "before", 3, "checked", "change"], [3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], [1, "skin-primary", "indigo-light", 3, "click"], [1, "skin-secondary"], [1, "skin-primary", "teal-light", 3, "click"], [1, "skin-primary", "red-light", 3, "click"], [1, "skin-primary", "blue-dark", 3, "click"], [1, "skin-primary", "green-dark", 3, "click"], [1, "skin-primary", "pink-dark", 3, "click"], [1, "sidenav", "mat-elevation-z6", 3, "opened", "mode"], ["sidenav", ""], ["mat-icon-button", "", 3, "click"], ["fxShow", "false", "fxShow.gt-xs", "", "mat-icon-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", "routerLink", "/", 1, "small-logo", 3, "click"], ["routerLink", "/", 1, "logo", 3, "click"], ["id", "horizontal-menu", "color", "primary", 1, "horizontal-menu", "flex-p-x", "transition-2"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "w-100"], [3, "menuParentId"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "footer", "bg-primary"], [3, "value"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, PagesComponent_mat_sidenav_1_Template, 3, 2, "mat-sidenav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-sidenav-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("psScrollY", function PagesComponent_Template_mat_sidenav_content_psScrollY_2_listener($event) { return ctx.onPsScrollY($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-toolbar", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, PagesComponent_button_6_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, PagesComponent_button_7_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, PagesComponent_a_8_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, PagesComponent_a_9_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_Template_button_click_14_listener() { return ctx.toggleSearchBar = !ctx.toggleSearchBar; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "app-flags-menu", 14)(18, "app-fullscreen")(19, "app-applications", 14)(20, "app-messages", 15)(21, "app-user-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, PagesComponent_mat_toolbar_22_Template, 3, 3, "mat-toolbar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("psScrollY", function PagesComponent_Template_div_psScrollY_23_listener($event) { return ctx.onPsScrollY($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, PagesComponent_div_27_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](36); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](_r8.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_31_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "arrow_upward");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "mat-sidenav", 22, 23)(37, "div", 24)(38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 25)(41, "div", 26)(42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 27)(45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Fixed header");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "mat-slide-toggle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_47_listener() { return ctx.settings.fixedHeader = !ctx.settings.fixedHeader; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 27)(49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "RTL");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "mat-slide-toggle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_51_listener() { return ctx.settings.rtl = !ctx.settings.rtl; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 27)(53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Has Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "mat-slide-toggle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_55_listener() { return ctx.settings.hasFooter = !ctx.settings.hasFooter; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 26)(57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Choose menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "mat-radio-group", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function PagesComponent_Template_mat_radio_group_ngModelChange_59_listener($event) { return ctx.menuOption = $event; })("change", function PagesComponent_Template_mat_radio_group_change_59_listener() { return ctx.chooseMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, PagesComponent_mat_radio_button_60_Template, 2, 2, "mat-radio-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div", 26)(62, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "Choose menu type");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "mat-radio-group", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function PagesComponent_Template_mat_radio_group_ngModelChange_64_listener($event) { return ctx.menuTypeOption = $event; })("change", function PagesComponent_Template_mat_radio_group_change_64_listener() { return ctx.chooseMenuType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](65, PagesComponent_mat_radio_button_65_Template, 2, 2, "mat-radio-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "div", 26)(67, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "Choose theme skin");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 31)(70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_70_listener() { return ctx.changeTheme("indigo-light"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_72_listener() { return ctx.changeTheme("teal-light"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_74_listener() { return ctx.changeTheme("red-light"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_76_listener() { return ctx.changeTheme("blue-dark"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_78_listener() { return ctx.changeTheme("green-dark"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PagesComponent_Template_div_click_80_listener() { return ctx.changeTheme("pink-dark"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](81, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "div", 26)(83, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "Sidenav options");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 27)(86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Opened sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](88, "mat-slide-toggle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_88_listener() { return ctx.settings.sidenavIsOpened = !ctx.settings.sidenavIsOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "div", 27)(90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, "Pinned sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "mat-slide-toggle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_92_listener() { return ctx.settings.sidenavIsPinned = !ctx.settings.sidenavIsPinned; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 27)(94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, "Sidenav user info");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "mat-slide-toggle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function PagesComponent_Template_mat_slide_toggle_change_96_listener() { return ctx.settings.sidenavUserBlock = !ctx.settings.sidenavUserBlock; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.settings.menu == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.settings.fixedHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.settings.menu == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.settings.menu == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.settings.menu == "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.settings.menu == "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("show", ctx.toggleSearchBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.settings.menu == "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.settings.fixedHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("has-footer", ctx.settings.hasFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.settings.hasFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.settings.fixedHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.settings.rtl);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.settings.hasFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.menuOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.menuTypeOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.menuTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.settings.sidenavIsOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.settings.sidenavIsPinned);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.settings.sidenavUserBlock);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavContent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggle, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__.SidenavComponent, _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalMenuComponent, _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_5__.FlagsMenuComponent, _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_6__.FullScreenComponent, _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_7__.ApplicationsComponent, _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__.MessagesComponent, _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_9__.UserMenuComponent], styles: [".sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  overflow: hidden;\n  border: none !important;\n}\n\n.horizontal-menu[_ngcontent-%COMP%] {\n  padding: 0;\n  position: relative;\n  z-index: 9;\n  height: 0;\n}\n\n.horizontal-menu.sticky[_ngcontent-%COMP%] {\n  height: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.horizontal-menu.sticky.fixed-top[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  height: 56px;\n  overflow: visible;\n}\n\n.inner-sidenav-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 12px;\n  min-height: calc(100% - (56px + 8px*2));\n}\n\n.inner-sidenav-content[_ngcontent-%COMP%]   .has-footer[_ngcontent-%COMP%] {\n  min-height: calc(100% - (34px + 56px));\n}\n\n.inner-sidenav-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  height: 56px;\n  margin: 0 -12px -8px -12px;\n  padding: 0 16px;\n}\n\n.options[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 250px;\n  overflow: hidden;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 6px 0;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 32px solid;\n  border-left: 32px solid transparent;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.indigo-light[_ngcontent-%COMP%] {\n  background-color: #3F51B5;\n  border: 1px solid #3F51B5;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.indigo-light[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #ececec;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.teal-light[_ngcontent-%COMP%] {\n  background-color: #009688;\n  border: 1px solid #009688;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.teal-light[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #ececec;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.red-light[_ngcontent-%COMP%] {\n  background-color: #F44336;\n  border: 1px solid #F44336;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.red-light[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #ececec;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.blue-dark[_ngcontent-%COMP%] {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.blue-dark[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #262626;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.green-dark[_ngcontent-%COMP%] {\n  background-color: #388E3C;\n  border: 1px solid #388E3C;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.green-dark[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #262626;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.pink-dark[_ngcontent-%COMP%] {\n  background-color: #D81B60;\n  border: 1px solid #D81B60;\n}\n\n.options[_ngcontent-%COMP%]   .control[_ngcontent-%COMP%]   .skin-primary.pink-dark[_ngcontent-%COMP%]   .skin-secondary[_ngcontent-%COMP%] {\n  border-bottom-color: #262626;\n}\n\n.options[_ngcontent-%COMP%]   .mat-radio-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.options[_ngcontent-%COMP%]   .mat-radio-group[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin: 2px 0;\n}\n\n.options[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.options[_ngcontent-%COMP%]   .ps[_ngcontent-%COMP%] {\n  height: calc(100% - 48px);\n}\n\n.op-image[_ngcontent-%COMP%] {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.options-icon[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 110px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.options-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  animation: spin 8s linear infinite;\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n}\n\n.back-to-top[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.search-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.show[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLmNvbXBvbmVudC5zY3NzIiwiLi5cXHRoZW1lXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlDRVk7RUREWixnQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBR0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUNJO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUFRO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxZQ2pCSztFRGtCTCxpQkFBQTtBQUVaOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQ3pCZTtFRDBCZixTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7QUFBRjs7QUFDRTtFQUNFLHNDQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQ3BCWTtFRHFCWiwwQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxZQ3hDWTtFRHlDWixnQkFBQTtBQUFKOztBQUNJO0VBQ0ksaUJBQUE7QUFDUjs7QUFBUTtFQUNJLGNBQUE7QUFFWjs7QUFBUTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7QUFFWjs7QUFBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVaOztBQURZO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtBQUdoQjs7QUFEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFHaEI7O0FBRmdCO0VBQ0ksNEJBQUE7QUFJcEI7O0FBRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBR2hCOztBQUZnQjtFQUNJLDRCQUFBO0FBSXBCOztBQURZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQUdoQjs7QUFGZ0I7RUFDSSw0QkFBQTtBQUlwQjs7QUFEWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFHaEI7O0FBRmdCO0VBQ0ksNEJBQUE7QUFJcEI7O0FBRFk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBR2hCOztBQUZnQjtFQUNJLDRCQUFBO0FBSXBCOztBQURZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQUdoQjs7QUFGZ0I7RUFDSSw0QkFBQTtBQUlwQjs7QUFDSTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7QUFDUjs7QUFBUTtFQUNJLGFBQUE7QUFFWjs7QUFDSTtFQUNJLFlBQUE7QUFDUjs7QUFDSTtFQUNJLHlCQUFBO0FBQ1I7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFESTtFQUdJLGtDQUFBO0FBR1I7O0FBV0E7RUFDSTtJQUNJLHlCQUFBO0VBRU47QUFDRjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFBSTtFQUNJLFlBQUE7QUFFUjs7QUFLUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZaOztBQUdZO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUFEZiIsImZpbGUiOiJwYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uc2lkZW5hdntcclxuICAgIHdpZHRoOiAkc2lkZW5hdi13aWR0aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7ICBcclxufVxyXG4uaG9yaXpvbnRhbC1tZW51e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk7ICAgIFxyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgJi5zdGlja3l7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmLmZpeGVkLXRvcHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogJGhvcml6b250YWwtbWVudS1oZWlnaHQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmlubmVyLXNpZGVuYXYtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDokdG9vbGJhci1oZWlnaHQ7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGVmdDowO1xyXG4gIHJpZ2h0OjA7ICBcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICgjeyR0b29sYmFyLWhlaWdodH0gKyAjeyRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZ30qMikpO1xyXG4gIC5oYXMtZm9vdGVyeyAgXHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAoMzRweCArICN7JGZvb3Rlci1oZWlnaHR9KSk7XHJcbiAgfVxyXG4gIC5mb290ZXJ7XHJcbiAgICBoZWlnaHQ6ICRmb290ZXItaGVpZ2h0O1xyXG4gICAgbWFyZ2luOiAwIC0xMnB4IC04cHggLTEycHg7IFxyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbnN7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogJHNpZGVuYXYtd2lkdGg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLmNvbnRyb2x7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEycHggMCA2cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraW4tcHJpbWFyeXtcclxuICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXHJcbiAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDsgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMzJweCBzb2xpZDsgXHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMzJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmluZGlnby1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM0Y1MUI1O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi50ZWFsLWxpZ2h0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDk2ODg7XHJcbiAgICAgICAgICAgICAgICAuc2tpbi1zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VjZWNlYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnJlZC1saWdodHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjQ0MzM2O1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ibHVlLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAyNzdiZDtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZ3JlZW4tZGFya3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODhFM0M7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg4RTNDO1xyXG4gICAgICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5waW5rLWRhcmt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDgxQjYwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q4MUI2MDtcclxuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1yYWRpby1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtc2xpZGUtdG9nZ2xle1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5wc3tcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xyXG4gICAgfVxyXG59XHJcbi5vcC1pbWFnZXtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggI2NjYztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuLm9wdGlvbnMtaWNvbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTEwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIC5tYXQtaWNvbntcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiA4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBzcGluIHsgXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyBcclxuICAgIH0gXHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxyXG4gICAgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIHNwaW4geyBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFjay10by10b3B7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgICAgXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWJhcntcclxuICAgIGZvcm17XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgICYuc2hvd3tcclxuICAgICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbiR0b29sYmFyLWhlaWdodDogNTZweDsgXHJcbiRob3Jpem9udGFsLW1lbnUtaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XHJcblxyXG4kc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiAxNTZweDtcclxuJG1pbmktc2lkZW5hdi11c2VyLWJsb2NrLWhlaWdodDogNzBweDtcclxuXHJcbiRmbGV4LWRpc3RhbmNlOiA4cHg7XHJcbiRpbm5lci1zaWRlbmF2LWNvbnRlbnQtcGFkZGluZzogJGZsZXgtZGlzdGFuY2U7XHJcblxyXG4vL0xvZ2luLCBSZWdpc3RlciwgRXJyb3JzIGJveFxyXG4kYm94LWhlaWdodDogMTg2cHg7XHJcbiRib3gtcG9zaXRpb246IDM0cHg7XHJcbiRyZWdpc3Rlci1ib3gtaGVpZ2h0OiAzMDBweDtcclxuXHJcbiRmb290ZXItaGVpZ2h0OiA1NnB4OyAiXX0= */"] });


/***/ }),

/***/ 31164:
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);


class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 4, vars: 0, consts: [["fxLayout", "row wrap"], ["fxFlex", "", 1, "flex-p"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search results...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective], encapsulation: 2 });


/***/ }),

/***/ 46935:
/*!****************************************!*\
  !*** ./src/app/service/app.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class AppService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    }
    saveAccountsData(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'saveAccounts', data, { headers: this.headers });
    }
    changePassword(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'User/change-password', data, { headers: this.headers });
    }
    getAccounts() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Customer/getCustomer', { headers: this.headers });
    }
    getitems() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getitemlist', { headers: this.headers });
    }
    tradeFileType() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Common/tradeFileType', { headers: this.headers });
    }
    deleteAccount(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'deleteAccount/' + id, { headers: this.headers });
    }
    getCity() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/GetState', { headers: this.headers });
    }
    saveAccount(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/saveAccount', data, { headers: this.headers });
    }
    getProduct() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getProductList', { headers: this.headers });
    }
    getContract(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getContractList/' + id, { headers: this.headers });
    }
    getContractListItemImport(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getContractListItemImport/' + id, { headers: this.headers });
    }
    getCompany() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getCompanyList', { headers: this.headers });
    }
    getBrokerageSetupList(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getBrokeageSetupList', data, { headers: this.headers });
    }
    getSubBrokeageList(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getSubBrokeageList', data, { headers: this.headers });
    }
    getBrokerageAddValidation(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getBrokerageAddValidation', data, { headers: this.headers });
    }
    getSubBrokerageAddValidation(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getSubBrokerageAddValidation', data, { headers: this.headers });
    }
    getBrokerageSetupListAccount(accountId) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Master/getAcBrokeageSetupList/' + accountId, { headers: this.headers });
    }
    getTax() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'MasterSecond/getTaxList', { headers: this.headers });
    }
    getIntrestApplyOnDDL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Common/getIntrestApplyOnDDL', { headers: this.headers });
    }
    getIntrestTypeDLL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Common/getIntrestTypeDLL', { headers: this.headers });
    }
    getPostVoucherDLL() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Common/getPostVoucherDLL', { headers: this.headers });
    }
    getUserList() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'User/getUserList', { headers: this.headers });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AppService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12471:
/*!*****************************************************!*\
  !*** ./src/app/service/auth-interceptor.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);





class AuthInterceptor {
    constructor(snackBar, router) {
        this.snackBar = snackBar;
        this.router = router;
    }
    intercept(req, next) {
        // Retrieve the authorization token from your authentication service
        const authToken = localStorage.getItem('token');
        // Clone the request and add the Authorization header
        const authReq = req.clone({
            // setHeaders: { Authorization: `Bearer ${authToken}` },
            headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        });
        return next.handle(authReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.catchError)((error) => {
            console.log('error', error);
            if (error.status === 401) {
                this.showToaster('Login session got expired.', true);
                localStorage.clear();
                this.router.navigate(['login']);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
        }));
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
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 75429:
/*!********************************************************!*\
  !*** ./src/app/service/loading-interceptor.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.settings */ 1182);




class LoadingInterceptor {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    intercept(req, next) {
        this.settings.loadingSpinner = true;
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
            this.settings.loadingSpinner = false;
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings)); };
LoadingInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 62681);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _Forms_common_directive_currency_formatter_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Forms/common/directive/currency-formatter.directive */ 13145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


































class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__.MatStepperModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__.MatStepperModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_Forms_common_directive_currency_formatter_directive__WEBPACK_IMPORTED_MODULE_0__.CurrencyFormatterDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__.MatStepperModule], exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__.MatTooltipModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__.MatStepperModule,
        _Forms_common_directive_currency_formatter_directive__WEBPACK_IMPORTED_MODULE_0__.CurrencyFormatterDirective] }); })();


/***/ }),

/***/ 84751:
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/applications/applications.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsComponent": () => (/* binding */ ApplicationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);








class ApplicationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApplicationsComponent.ɵfac = function ApplicationsComponent_Factory(t) { return new (t || ApplicationsComponent)(); };
ApplicationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationsComponent, selectors: [["app-applications"]], decls: 66, vars: 2, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["appsMenuTrigger", "matMenuTrigger"], [1, "toolbar-dropdown-menu", "applications", 3, "overlapTrigger"], ["appsMenu", "matMenu"], [3, "mouseleave"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "header"], ["cols", "3", "rowHeight", "1:1"], ["mat-button", ""], [1, "muted-text"]], template: function ApplicationsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 2, 3)(6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function ApplicationsComponent_Template_span_mouseleave_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.closeMenu()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-toolbar", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Applications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card")(11, "mat-grid-list", 7)(12, "mat-grid-tile")(13, "button", 8)(14, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-grid-tile")(19, "button", 8)(20, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-grid-tile")(25, "button", 8)(26, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-grid-tile")(31, "button", 8)(32, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-grid-tile")(37, "button", 8)(38, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-grid-tile")(43, "button", 8)(44, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-grid-tile")(49, "button", 8)(50, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "library_books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-grid-tile")(55, "button", 8)(56, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-grid-tile")(61, "button", 8)(62, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridTile, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar], styles: [".applications .mat-toolbar, .applications .mat-toolbar-row {\n  height: 40px !important;\n  min-height: 40px !important;\n}\n.applications .header {\n  width: 250px;\n  font-size: 16px;\n}\n.applications .mat-card {\n  padding: 0;\n}\n.applications .mat-card .mat-button {\n  height: 100%;\n}\n.applications .mat-card .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFBUjtBQUVJO0VBQ0ksVUFBQTtBQUFSO0FBQ1E7RUFDSSxZQUFBO0FBQ1o7QUFBWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRWhCIiwiZmlsZSI6ImFwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBsaWNhdGlvbnN7XHJcbiAgICAubWF0LXRvb2xiYXIsIC5tYXQtdG9vbGJhci1yb3d7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJke1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 52333:
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/breadcrumb/breadcrumb.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);









function BreadcrumbComponent_div_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BreadcrumbComponent_div_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.closeSubMenus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0) { return [a0]; };
function BreadcrumbComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const breadcrumb_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", i_r6 == ctx_r2.breadcrumbs.length - 1)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, breadcrumb_r5.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](breadcrumb_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", i_r6 != ctx_r2.breadcrumbs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](breadcrumb_r5.name);
} }
function BreadcrumbComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BreadcrumbComponent_div_0_a_3_Template, 5, 0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BreadcrumbComponent_div_0_div_4_Template, 5, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.router.url != "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumbs);
} }
class BreadcrumbComponent {
    constructor(appSettings, router, activatedRoute, title) {
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' > ' + breadcrumb.name;
                });
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        });
    }
    parseRoute(node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
    closeSubMenus() {
        let menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title)); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 1, vars: 1, consts: [["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100", 1, "flex-p"], ["fxLayout", "row", 1, "breadcrumb"], ["routerLink", "/", "class", "breadcrumb-item", "fxLayout", "row", "fxLayoutAlign", "start center", 3, "click", 4, "ngIf"], ["class", "breadcrumb-item", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["routerLink", "/", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "breadcrumb-item", 3, "click"], [1, "breadcrumb-title"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "breadcrumb-item"], [3, "hidden", "routerLink"], [1, "breadcrumb-title", "active", 3, "hidden"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BreadcrumbComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.router.url != "/");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".breadcrumb[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.breadcrumb[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n  padding: 0 6px;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-title.active[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  content: \"/\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFFUjtBQUFJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQUk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBRVIiLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1ie1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgLm1hdC1pY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi10aXRsZS5hY3RpdmV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLmJyZWFkY3J1bWItaXRlbSsuYnJlYWRjcnVtYi1pdGVtOmJlZm9yZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcclxuICAgICAgICBjb250ZW50OiBcIi9cIjtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 25566:
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/flags-menu/flags-menu.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlagsMenuComponent": () => (/* binding */ FlagsMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 88589);





class FlagsMenuComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
    }
}
FlagsMenuComponent.ɵfac = function FlagsMenuComponent_Factory(t) { return new (t || FlagsMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings)); };
FlagsMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FlagsMenuComponent, selectors: [["app-flags-menu"]], decls: 22, vars: 2, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["flagsMenuTrigger", "matMenuTrigger"], [1, "toolbar-dropdown-menu", "flags", 3, "overlapTrigger"], ["flagsMenu", "matMenu"], [3, "mouseleave"], ["mat-menu-item", ""], ["src", "assets/img/flags/gb.svg", "width", "20", "alt", "english"], ["src", "assets/img/flags/de.svg", "width", "20", "alt", "german"], ["src", "assets/img/flags/fr.svg", "width", "20", "alt", "french"], ["src", "assets/img/flags/ru.svg", "width", "20", "alt", "russian"], ["src", "assets/img/flags/tr.svg", "width", "20", "alt", "turkish"]], template: function FlagsMenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "flag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", 2, 3)(6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function FlagsMenuComponent_Template_span_mouseleave_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.closeMenu()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " German ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " French ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Russian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Turkish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTrigger", false);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger], styles: [".flags img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYWdzLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUFSIiwiZmlsZSI6ImZsYWdzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxhZ3N7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICAgIC5tYXQtbWVudS1pdGVte1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIH1cclxufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 97721:
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/fullscreen/fullscreen.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenComponent": () => (/* binding */ FullScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);





const _c0 = ["expand"];
const _c1 = ["compress"];
function FullScreenComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FullScreenComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fullscreen_exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FullScreenComponent {
    constructor() {
        this.toggle = false;
    }
    requestFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    }
    ;
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    }
    ;
    getFullscreen() {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    }
    onFullScreenChange() {
        let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    }
}
FullScreenComponent.ɵfac = function FullScreenComponent_Factory(t) { return new (t || FullScreenComponent)(); };
FullScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullScreenComponent, selectors: [["app-fullscreen"]], viewQuery: function FullScreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.expand = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.compress = _t.first);
    } }, hostBindings: function FullScreenComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullScreenComponent_click_HostBindingHandler() { return ctx.getFullscreen(); })("resize", function FullScreenComponent_resize_HostBindingHandler() { return ctx.onFullScreenChange(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 2, consts: [["mat-icon-button", "", 1, "full-screen"], [4, "ngIf"], ["expand", ""], ["compress", ""]], template: function FullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FullScreenComponent_mat_icon_1_Template, 3, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullScreenComponent_mat_icon_2_Template, 3, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggle);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 85359:
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": () => (/* binding */ HorizontalMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu.service */ 67091);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);












const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { exact: true }; };
function HorizontalMenuComponent_div_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6)(1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxLayoutAlign", ctx_r2.settings.menuType == "default" ? "start center" : "center center")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, menu_r1.routerLink))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1))("matTooltip", menu_r1.title)("matTooltipDisabled", ctx_r2.settings.menuType == "mini" ? "false" : "true")("id", "horizontal-menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.title);
} }
function HorizontalMenuComponent_div_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 9)(1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxLayoutAlign", ctx_r3.settings.menuType == "default" ? "start center" : "center center")("matTooltip", menu_r1.title)("matTooltipDisabled", ctx_r3.settings.menuType == "mini" ? "false" : "true")("id", "horizontal-menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", menu_r1.href || "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", menu_r1.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.title);
} }
function HorizontalMenuComponent_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 9)(1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxLayoutAlign", ctx_r4.settings.menuType == "default" ? "start center" : "center center")("matTooltip", menu_r1.title)("matTooltipDisabled", ctx_r4.settings.menuType == "mini" ? "false" : "true")("id", "horizontal-menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.title);
} }
function HorizontalMenuComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-horizontal-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "horizontal-sub-menu-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("menuParentId", menu_r1.id);
} }
function HorizontalMenuComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalMenuComponent_div_1_a_1_Template, 5, 11, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HorizontalMenuComponent_div_1_a_2_Template, 5, 8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HorizontalMenuComponent_div_1_a_3_Template, 5, 6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HorizontalMenuComponent_div_1_div_4_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.routerLink && !menu_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.href && !menu_r1.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.hasSubMenu);
} }
class HorizontalMenuComponent {
    constructor(appSettings, menuService, router) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.menuItems = this.menuService.getHorizontalMenuItems();
        this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                if (this.settings.fixedHeader) {
                    let mainContent = document.getElementById('main-content');
                    if (mainContent) {
                        mainContent.scrollTop = 0;
                    }
                }
                else {
                    document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
            }
        });
    }
}
HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) { return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HorizontalMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HorizontalMenuComponent, selectors: [["app-horizontal-menu"]], viewQuery: function HorizontalMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
    } }, inputs: { menuParentId: "menuParentId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService])], decls: 2, vars: 2, consts: [["fxLayoutAlign", "start center", 3, "fxLayout"], ["class", "horizontal-menu-item w-100", 4, "ngFor", "ngForOf"], [1, "horizontal-menu-item", "w-100"], ["mat-button", "", "fxLayout", "row", "routerLinkActive", "active-link", "matTooltipPosition", "above", 3, "fxLayoutAlign", "routerLink", "routerLinkActiveOptions", "matTooltip", "matTooltipDisabled", "id", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "matTooltipPosition", "above", 3, "fxLayoutAlign", "matTooltip", "matTooltipDisabled", "id", 4, "ngIf"], ["class", "horizontal-sub-menu", 3, "id", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "routerLinkActive", "active-link", "matTooltipPosition", "above", 3, "fxLayoutAlign", "routerLink", "routerLinkActiveOptions", "matTooltip", "matTooltipDisabled", "id"], [1, "horizontal-menu-icon"], [1, "horizontal-menu-title"], ["mat-button", "", "fxLayout", "row", "matTooltipPosition", "above", 3, "fxLayoutAlign", "matTooltip", "matTooltipDisabled", "id"], [1, "horizontal-sub-menu", 3, "id"], [3, "menuParentId"]], template: function HorizontalMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HorizontalMenuComponent_div_1_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxLayout", ctx.menuParentId == 0 ? "row" : "column");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, HorizontalMenuComponent], styles: [".horizontal-menu-item {\n  position: relative;\n}\n.horizontal-menu-item .mat-button {\n  height: 56px;\n  font-weight: 400;\n}\n.horizontal-menu-item .horizontal-menu-icon {\n  margin-right: 5px;\n}\n.horizontal-menu-item .horizontal-sub-menu {\n  position: absolute;\n  width: 190px;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n.horizontal-menu-item .horizontal-sub-menu .mat-button {\n  width: 100%;\n  height: 36px;\n}\n.horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible;\n}\n.horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtbWVudS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjtBQUNJO0VBQ0ksWUNGUztFREdULGdCQUFBO0FBQ1I7QUFDSTtFQUNJLGlCQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUdBLHFDQUFBO0FBQ1I7QUFBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRVo7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNBO0VBQ0ksVUFBQTtFQUNBLE1BQUE7QUFFSiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG4uaG9yaXpvbnRhbC1tZW51LWl0ZW17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBoZWlnaHQ6ICRob3Jpem9udGFsLW1lbnUtaGVpZ2h0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAuaG9yaXpvbnRhbC1tZW51LWljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuaG9yaXpvbnRhbC1zdWItbWVudXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgICBcclxuICAgICAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ob3Jpem9udGFsLW1lbnUtaXRlbTpob3ZlciA+IC5ob3Jpem9udGFsLXN1Yi1tZW51e1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG4uaG9yaXpvbnRhbC1zdWItbWVudSAuaG9yaXpvbnRhbC1zdWItbWVudXtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbn0iLCIkZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuJHRvb2xiYXItaGVpZ2h0OiA1NnB4OyBcclxuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcclxuXHJcbiRzaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDE1NnB4O1xyXG4kbWluaS1zaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiA3MHB4O1xyXG5cclxuJGZsZXgtZGlzdGFuY2U6IDhweDtcclxuJGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nOiAkZmxleC1kaXN0YW5jZTtcclxuXHJcbi8vTG9naW4sIFJlZ2lzdGVyLCBFcnJvcnMgYm94XHJcbiRib3gtaGVpZ2h0OiAxODZweDtcclxuJGJveC1wb3NpdGlvbjogMzRweDtcclxuJHJlZ2lzdGVyLWJveC1oZWlnaHQ6IDMwMHB4O1xyXG5cclxuJGZvb3Rlci1oZWlnaHQ6IDU2cHg7ICJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 76529:
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
class Menu {
    constructor(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
}


/***/ }),

/***/ 67091:
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 51501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class MenuService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    getVerticalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_0__.verticalMenuItems;
    }
    getHorizontalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_0__.horizontalMenuItems;
    }
    expandActiveSubMenu(menu) {
        let url = this.location.path();
        let routerLink = url; // url.substring(1, url.length);
        let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
            let menuItem = activeMenuItem[0];
            while (menuItem.parentId != 0) {
                let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
                menuItem = parentMenuItem;
                this.toggleMenuItem(menuItem.id);
            }
        }
    }
    toggleMenuItem(menuId) {
        let menuItem = document.getElementById('menu-item-' + menuId);
        let subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    }
    closeOtherSubMenus(menu, menuId) {
        let currentMenuItem = menu.filter(item => item.id == menuId)[0];
        if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach(item => {
                if (item.id != menuId) {
                    let subMenu = document.getElementById('sub-menu-' + item.id);
                    let menuItem = document.getElementById('menu-item-' + item.id);
                    if (subMenu) {
                        if (subMenu.classList.contains('show')) {
                            subMenu.classList.remove('show');
                            menuItem.classList.remove('expanded');
                        }
                    }
                }
            });
        }
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });


/***/ }),

/***/ 51501:
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "horizontalMenuItems": () => (/* binding */ horizontalMenuItems),
/* harmony export */   "verticalMenuItems": () => (/* binding */ verticalMenuItems)
/* harmony export */ });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ 76529);

const verticalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(2, 'Master', null, null, 'computer', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Account', '/master/account', null, 'account_circle', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Item', '/master/item', null, 'widgets', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Company', '/master/company', null, 'business', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Sauda', '/master/sauda', null, 'web_stories', null, false, 2),
    //new Menu(3, 'Product', '/master/product', null, 'category', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Contract Master', '/master/contract-master', null, 'assignment', null, false, 2),
    // new Menu(3, 'Brokerage Slab', '/master/brokerage-slab', null, 'segment', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Brokerage Setup', '/master/brokerage-setup', null, 'manage_accounts', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Sub Brokerage', '/master/sub-brokerage-setup', null, 'manage_accounts', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Sharing Setup', '/master/sharing-setup', null, 'manage_accounts', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Branch', '/master/branch', null, 'schema', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Tax', '/master/tax', null, 'payments', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Trade File', '/master/trade-file', null, 'payments', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Exchange', '/master/exchange', null, 'change_circle', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Interest Master', '/master/interest-master', null, 'paid', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Account Head', '/master/account-head', null, 'manage_accounts', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Symbol Mapping', '/master/symbol-mapping', null, 'account_tree', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(3, 'Item Group', '/master/item-group', null, 'group_work', null, false, 2),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(4, 'Users & Roles', '/user-roles', null, 'supervisor_account', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(4, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(4, 'Logs', '/logs', null, 'folder_closed', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(5, 'Entries', null, null, 'card_membership', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(6, 'Voucher', '/entry/voucher', null, 'confirmation_number', null, false, 5),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(7, 'Trade', '/entry/trade-contract', null, 'card_membership', null, false, 5),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(8, 'Closing Rate', '/pagenotfound', null, 'card_membership', null, false, 5),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(9, 'Partywise Closing', '/pagenotfound', null, 'card_membership', null, false, 5),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(10, 'Balance Transfer', '/pagenotfound', null, 'card_membership', null, false, 5),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(11, 'Trade Closing Transfer', '/pagenotfound', null, 'card_membership', null, false, 5),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(12, 'Voucher Trade Delete', '/pagenotfound', null, 'card_membership', null, false, 5),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(13, 'Imports', null, null, 'outbox', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(14, 'Trade', '/imports/trade', null, 'outbox', null, false, 13),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(17, 'Scripts', '/imports/scripts', null, 'outbox', null, false, 13),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(15, 'Closing Rate', '/pagenotfound', null, 'outbox', null, false, 13),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(16, 'Live Rate', '/pagenotfound', null, 'outbox', null, false, 13),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(6, 'Reports', null, null, 'outbox', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(7, 'Trail Balance', '/reports/trail-balance', null, 'outbox', null, false, 6),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(8, 'Ledger Report', '/reports/ledger-report', null, 'outbox', null, false, 6),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(8, 'Trade Register', '/reports/trade-register', null, 'outbox', null, false, 6),
    //new Menu(5, 'UI Features', null, null, 'computer', null, true, 0),
    //new Menu(6, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 5),
    //new Menu(7, 'Cards', '/ui/cards', null, 'card_membership', null, false, 5),
    //new Menu(8, 'Lists', '/ui/lists', null, 'list', null, false, 5),
    //new Menu(9, 'Grids', '/ui/grids', null, 'grid_on', null, false, 5),
    //new Menu(10, 'Tabs', '/ui/tabs', null, 'tab', null, false, 5),
    //new Menu(11, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 5),
    //new Menu(12, 'Chips', '/ui/chips', null, 'label', null, false, 5),
    //new Menu(13, 'Progress', '/ui/progress', null, 'data_usage', null, false, 5),
    //new Menu(14, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 5),
    //new Menu(15, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 5),
    //new Menu(16, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 5),
    //new Menu(17, 'Dynamic Menu', '/dynamic-menu', null, 'format_list_bulleted', null, false, 0),
    //new Menu(18, 'Mailbox', '/mailbox', null, 'email', null, false, 0),
    //new Menu(19, 'Chat', '/chat', null, 'chat', null, false, 0),
    //new Menu(20, 'Form Controls', null, null, 'dvr', null, true, 0),
    //new Menu(21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20),
    //new Menu(22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20),
    //new Menu(23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20),
    //new Menu(24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20),
    //new Menu(25, 'Input', '/form-controls/input', null, 'input', null, false, 20),
    //new Menu(26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20),
    //new Menu(27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20),
    //new Menu(28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20),
    //new Menu(29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),
    //new Menu(30, 'Tables', null, null, 'view_module', null, true, 0),
    //new Menu(31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30),
    //new Menu(32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30),
    //new Menu(33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    //new Menu(34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    //new Menu(35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
    //new Menu(36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30),
    //new Menu(40, 'Pages', null, null, 'library_books', null, true, 0),
    //new Menu(43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
    //new Menu(44, 'Register', '/register', null, 'person_add', null, false, 40),
    //new Menu(45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    //new Menu(46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    //new Menu(47, 'Error', '/error', null, 'warning', null, false, 40),
    //new Menu(48, 'Landing', '/landing', null, 'filter', null, false, 40),
    //new Menu(49, 'Profile', null, null, 'person', null, true, 40),
    //new Menu(50, 'Projects', '/profile/projects', null, 'note', null, false, 49),
    //new Menu(51, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 49),
    //new Menu(55, 'Schedule', '/schedule', null, 'event', null, false, 0),
    //new Menu(66, 'Maps', null, null, 'map', null, true, 0),
    //new Menu(67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66),
    //new Menu(68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66),
    //new Menu(70, 'Charts', null, null, 'multiline_chart', null, true, 0),
    //new Menu(71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
    //new Menu(72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
    //new Menu(73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
    //new Menu(74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70),
    //new Menu(81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 0),
    //new Menu(85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 0),
    //new Menu(140, 'Level 1', null, null, 'more_horiz', null, true, 0),
    //new Menu(141, 'Level 2', null, null, 'folder_open', null, true, 140),
    //new Menu(142, 'Level 3', null, null, 'folder_open', null, true, 141),
    //new Menu(143, 'Level 4', null, null, 'folder_open', null, true, 142),
    //new Menu(144, 'Level 5', null, 'http://themeseason.com', 'link', null, false, 143),
    //new Menu(200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 0)
];
const horizontalMenuItems = [
//new Menu (1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
//new Menu (2, 'Users', '/users', null, 'supervisor_account', null, false, 0), 
//new Menu (3, 'UI Features', null, null, 'computer', null, true, 0),   
//new Menu (4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),  
//new Menu (5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3), 
//new Menu (6, 'Lists', '/ui/lists', null, 'list', null, false, 3), 
//new Menu (7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3), 
//new Menu (8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3), 
//new Menu (9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3), 
//new Menu (10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
//new Menu (11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3), 
//new Menu (12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3), 
//new Menu (13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3), 
//new Menu (14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
//new Menu (16, 'Mailbox', '/mailbox', null, 'email', null, false, 40), 
//new Menu (17, 'Chat', '/chat', null, 'chat', null, false, 40), 
//new Menu (20, 'Form Controls', null, null, 'dvr', null, true, 0), 
//new Menu (21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20), 
//new Menu (22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20), 
//new Menu (23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20), 
//new Menu (24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20), 
//new Menu (25, 'Input', '/form-controls/input', null, 'input', null, false, 20), 
//new Menu (26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20), 
//new Menu (27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20), 
//new Menu (28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20), 
//new Menu (29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),    
//new Menu (30, 'Tables', null, null, 'view_module', null, true, 0),
//new Menu (31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30), 
//new Menu (32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30), 
//new Menu (33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
//new Menu (34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
//new Menu (35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
//new Menu (36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30), 
//new Menu (70, 'Charts', null, null, 'multiline_chart', null, true, 0),
//new Menu (71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
//new Menu (72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
//new Menu (73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
//new Menu (74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70), 
//new Menu (66, 'Maps', null, null, 'map', null, true, 70),
//new Menu (67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66),
//new Menu (68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66),
//new Menu (81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 3), 
//new Menu (85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 3),
//new Menu (40, 'Pages', null, null, 'library_books', null, true, 0),
//new Menu (43, 'Login', '/login', null, 'exit_to_app', null, false, 40),    
//new Menu (44, 'Register', '/register', null, 'person_add', null, false, 40),
//new Menu (45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
//new Menu (46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
//new Menu (47, 'Error', '/error', null, 'warning', null, false, 40),
//new Menu (48, 'Landing', '/landing', null, 'filter', null, false, 40),
//new Menu (49, 'Profile', null, null, 'person', null, true, 40),
//new Menu (50, 'Projects', '/profile/projects', null, 'note', null, false, 49),    
//new Menu (51, 'User Info', '/profile/user-info', null, 'perm_contact_calendar', null, false, 49),
//new Menu (55, 'Schedule', '/schedule', null, 'event', null, false, 40),
//new Menu (200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 40)
];


/***/ }),

/***/ 92359:
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": () => (/* binding */ VerticalMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu.service */ 67091);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);












const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return { exact: true }; };
function VerticalMenuComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onClick(menu_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxLayoutAlign", ctx_r2.settings.menuType == "default" ? "start center" : "center center")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, menu_r1.routerLink))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1))("matTooltip", menu_r1.title)("matTooltipDisabled", ctx_r2.settings.menuType == "mini" ? "false" : "true")("id", "menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.title);
} }
function VerticalMenuComponent_div_0_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.onClick(menu_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxLayoutAlign", ctx_r3.settings.menuType == "default" ? "start center" : "center center")("matTooltip", menu_r1.title)("matTooltipDisabled", ctx_r3.settings.menuType == "mini" ? "false" : "true")("id", "menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", menu_r1.href || "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", menu_r1.target || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.title);
} }
function VerticalMenuComponent_div_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.onClick(menu_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fxLayoutAlign", ctx_r4.settings.menuType == "default" ? "start center" : "center center")("matTooltip", menu_r1.title)("matTooltipDisabled", ctx_r4.settings.menuType == "mini" ? "false" : "true")("id", "menu-item-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r1.title);
} }
function VerticalMenuComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-vertical-menu", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "sub-menu-" + menu_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("menuItems", ctx_r5.menuItems)("menuParentId", menu_r1.id);
} }
function VerticalMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VerticalMenuComponent_div_0_a_1_Template, 5, 11, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VerticalMenuComponent_div_0_a_2_Template, 5, 8, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, VerticalMenuComponent_div_0_a_3_Template, 7, 6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VerticalMenuComponent_div_0_div_4_Template, 2, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.routerLink && !menu_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.href && !menu_r1.subMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.hasSubMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r1.hasSubMenu);
} }
class VerticalMenuComponent {
    constructor(appSettings, menuService, router) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.onClickMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                if (this.settings.fixedHeader) {
                    let mainContent = document.getElementById('main-content');
                    if (mainContent) {
                        mainContent.scrollTop = 0;
                    }
                }
                else {
                    document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
            }
        });
    }
    onClick(menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuItems, menuId);
        this.onClickMenuItem.emit(menuId);
    }
}
VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) { return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
VerticalMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VerticalMenuComponent, selectors: [["app-vertical-menu"]], inputs: { menuItems: "menuItems", menuParentId: "menuParentId" }, outputs: { onClickMenuItem: "onClickMenuItem" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService])], decls: 1, vars: 1, consts: [["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "menu-item"], ["mat-button", "", "fxLayout", "row", "routerLinkActive", "active-link", "matTooltipPosition", "after", 3, "fxLayoutAlign", "routerLink", "routerLinkActiveOptions", "matTooltip", "matTooltipDisabled", "id", "click", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "matTooltipPosition", "after", 3, "fxLayoutAlign", "matTooltip", "matTooltipDisabled", "id", "click", 4, "ngIf"], ["class", "sub-menu", 3, "id", 4, "ngIf"], ["mat-button", "", "fxLayout", "row", "routerLinkActive", "active-link", "matTooltipPosition", "after", 3, "fxLayoutAlign", "routerLink", "routerLinkActiveOptions", "matTooltip", "matTooltipDisabled", "id", "click"], [1, "menu-icon"], [1, "menu-title"], ["mat-button", "", "fxLayout", "row", "matTooltipPosition", "after", 3, "fxLayoutAlign", "matTooltip", "matTooltipDisabled", "id", "click"], [1, "menu-expand-icon", "transition-2"], [1, "sub-menu", 3, "id"], [3, "menuItems", "menuParentId"]], template: function VerticalMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.parentMenu);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, VerticalMenuComponent], styles: [".menu-icon {\n  margin-right: 12px;\n}\n\n.menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  width: 100%;\n  font-weight: 400;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 40px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 60px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 80px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 100px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 120px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 140px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 160px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 180px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 200px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 20px;\n}\n\n.sub-menu.show {\n  max-height: 900px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUo7O0FBSUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURSOztBQUdZO0VBR0kseUJBQUE7QUFEaEI7O0FBTUk7RUFDSSxrQkFBQTtBQUpSOztBQVFBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBR0EscUNBQUE7QUFOSjs7QUM1QlE7RUFLUSxrQkFBQTtBRDBCaEI7O0FDL0JRO0VBS1Esa0JBQUE7QUQ2QmhCOztBQ2xDUTtFQUtRLGtCQUFBO0FEZ0NoQjs7QUNyQ1E7RUFLUSxtQkFBQTtBRG1DaEI7O0FDeENRO0VBS1EsbUJBQUE7QURzQ2hCOztBQzNDUTtFQUtRLG1CQUFBO0FEeUNoQjs7QUM5Q1E7RUFLUSxtQkFBQTtBRDRDaEI7O0FDakRRO0VBS1EsbUJBQUE7QUQrQ2hCOztBQ3BEUTtFQUtRLG1CQUFBO0FEa0RoQjs7QUFwQkk7RUFDSSxrQkFBQTtBQXNCUjs7QUFwQkk7RUFDSSxpQkFBQTtFQUdBLG9DQUFBO0FBc0JSIiwiZmlsZSI6InZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21peGluc1wiO1xyXG5cclxuLm1lbnUtaWNvbntcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4ubWVudS1leHBhbmQtaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWVudS1pdGVte1xyXG4gICAgLm1hdC1idXR0b257XHJcbiAgICAgICAgcGFkZGluZzogMDsgICAgXHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4OyBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICYuZXhwYW5kZWR7XHJcbiAgICAgICAgICAgIC5tZW51LWV4cGFuZC1pY29ue1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi5zdWItbWVudXtcclxuICAgIEBpbmNsdWRlIG1lbnUtbGV2ZWwtcGFkZGluZygnbHRyJyk7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgXHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgICBcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDsgICAgICBcclxuICAgIH0gXHJcbiAgICAmLnNob3d7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTAwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgfSAgICBcclxufSIsIkBtaXhpbiBtZW51LWxldmVsLXBhZGRpbmcoJGRpcmVjdGlvbil7XHJcbiAgICAkZWxlbTogJyc7XHJcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoIDEwIHtcclxuICAgICAgICAkZWxlbTogaWYoJGkgPT0gMiwgXCIuc3ViLW1lbnVcIiwgc2VsZWN0b3ItbmVzdCgkZWxlbSwgXCIuc3ViLW1lbnVcIikpOyAgICAgIFxyXG4gICAgICAgICN7JGVsZW0gKyAnIC5tYXQtYnV0dG9uJ30geyBcclxuICAgICAgICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJydGxcIiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICogJGk7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBAZWxzZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweCAqICRpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 93833:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.service */ 30660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _pipes_profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/profilePicture/profilePicture.pipe */ 77965);














function MessagesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "message");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "profilePicture");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 13)(8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const message_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", message_r7.image || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, message_r7.name), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", message_r7.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r7.text);
} }
function MessagesComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-progress-bar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const file_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r8.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r8.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", file_r8.color)("value", file_r8.value);
} }
function MessagesComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "event");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MessagesComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8)(1, "div", 16)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const meeting_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](meeting_r9.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](meeting_r9.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](meeting_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](meeting_r9.text);
} }
class MessagesComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.selectedTab = 1;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    ngOnInit() {
    }
    openMessagesMenu() {
        this.trigger.openMenu();
        this.selectedTab = 0;
    }
    onMouseLeave() {
        this.trigger.closeMenu();
    }
    stopClickPropagate(event) {
        event.stopPropagation();
        event.preventDefault();
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_messages_service__WEBPACK_IMPORTED_MODULE_0__.MessagesService)); };
MessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], viewQuery: function MessagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_messages_service__WEBPACK_IMPORTED_MODULE_0__.MessagesService])], decls: 21, vars: 6, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor", "click"], [1, "toolbar-dropdown-menu", "messages", 3, "overlapTrigger"], ["messagesMenu", "matMenu"], ["backgroundColor", "primary", 3, "selectedIndex", "click"], ["mat-tab-label", ""], ["perfectScrollbar", "", 1, "content"], ["fxLayout", "column", "fxLayoutAlign", "none"], ["mat-button", "", 4, "ngFor", "ngForOf"], ["mat-button", ""], ["width", "50", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "none", 1, "w-100"], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], [1, "name"], [1, "info"], [1, "text", "muted-text"], ["mode", "indeterminate", 1, "example-margin", 3, "color", "value"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "row-1"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MessagesComponent_Template_button_click_0_listener() { return ctx.openMessagesMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-menu", 1, 2)(5, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MessagesComponent_Template_mat_tab_group_click_5_listener($event) { return ctx.stopClickPropagate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MessagesComponent_ng_template_7_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MessagesComponent_button_10_Template, 13, 6, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MessagesComponent_ng_template_12_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-card", 5)(14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MessagesComponent_button_15_Template, 8, 4, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MessagesComponent_ng_template_17_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-card", 5)(19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, MessagesComponent_button_20_Template, 11, 4, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("overlapTrigger", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx.selectedTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.meetings);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuTrigger, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBar, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _pipes_profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePicturePipe], styles: [".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px;\n}\n.messages .content {\n  padding: 0;\n  height: 250px;\n}\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px;\n}\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px;\n}\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px;\n}\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left;\n}\n.messages .mat-button {\n  padding: 8px;\n}\n.messages .mat-button .mat-button-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.messages .mat-button .mat-icon {\n  height: 16px;\n  font-size: 12px;\n  width: 12px;\n  vertical-align: middle;\n}\n.messages .row-1 {\n  box-shadow: 0 0 5px #ccc;\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FBQVI7QUFFSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FBQVI7QUFFSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVJO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDWjtBQUNRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDWjtBQUVJO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlc3tcclxuICAgIC5tYXQtdGFiLWxhYmVse1xyXG4gICAgICAgIG1pbi13aWR0aDogOTMuM3B4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICBzcGFuLm5hbWV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgc3Bhbi5pbmZve1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICBzcGFuLnRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9ICBcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvdy0xe1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDEzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 30660:
/*!***************************************************************!*\
  !*** ./src/app/theme/components/messages/messages.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesService": () => (/* binding */ MessagesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class MessagesService {
    constructor() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'gradus.zip',
                size: '~6.2 MB',
                value: '47',
                color: 'primary'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33',
                color: 'accent'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60',
                color: 'warn'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80',
                color: 'primary'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55',
                color: 'warn'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75',
                color: 'accent'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                color: 'danger'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                color: 'primary'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                color: 'info'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                color: 'warning'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                color: 'success'
            }
        ];
    }
    getMessages() {
        return this.messages;
    }
    getFiles() {
        return this.files;
    }
    getMeetings() {
        return this.meetings;
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(); };
MessagesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessagesService, factory: MessagesService.ɵfac });


/***/ }),

/***/ 25597:
/*!***************************************************************!*\
  !*** ./src/app/theme/components/sidenav/sidenav.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavComponent": () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.service */ 67091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/vertical-menu/vertical-menu.component */ 92359);










function SidenavComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidenavComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeSubMenus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Sauda Web");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SidenavComponent__svg_svg_4__svg_path_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "path", 12);
} }
function SidenavComponent__svg_svg_4__svg_path_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "path", 13);
} }
function SidenavComponent__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidenavComponent__svg_svg_4_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.settings.sidenavIsPinned = !ctx_r6.settings.sidenavIsPinned); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidenavComponent__svg_svg_4__svg_path_1_Template, 1, 0, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidenavComponent__svg_svg_4__svg_path_2_Template, 1, 0, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.settings.sidenavIsPinned);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.settings.sidenavIsPinned);
} }
class SidenavComponent {
    constructor(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.userImage = '../assets/img/users/user.jpg';
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems();
    }
    closeSubMenus() {
        let menu = document.getElementById("vertical-menu");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService)); };
SidenavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService])], decls: 8, vars: 7, consts: [["color", "primary", 1, "sidenav-header", 3, "fxLayoutAlign"], ["routerLink", "/", 1, "small-logo", 3, "click"], ["src", "../../../../assets/img/app/logo.png", "alt", ""], ["class", "logo", "routerLink", "/", 3, "click", 4, "ngIf"], ["class", "pin", 3, "click", 4, "ngIf"], [1, "sidenav-menu-outer"], ["id", "vertical-menu"], [3, "menuItems", "menuParentId"], ["routerLink", "/", 1, "logo", 3, "click"], [1, "pin", 3, "click"], ["d", "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z", 4, "ngIf"], ["d", "M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z", 4, "ngIf"], ["d", "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"], ["d", "M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_1_listener() { return ctx.closeSubMenus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidenavComponent_a_3_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidenavComponent__svg_svg_4_Template, 3, 2, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "perfect-scrollbar", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-vertical-menu", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fxLayoutAlign", ctx.settings.menuType != "mini" ? "space-between center" : "center center");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.settings.menuType == "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.settings.menuType != "mini");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("user-block-show", ctx.settings.sidenavUserBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menuItems", ctx.menuItems)("menuParentId", 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuComponent], styles: [".pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor;\n}\n\n.sidenav-header {\n  padding: 0 10px !important;\n}\n\n.user-block {\n  height: 0;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.user-block img {\n  width: 80px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n\n.user-block .user-info-wrapper {\n  padding: 0 6px;\n  margin: 6px 0;\n  width: 100%;\n}\n\n.user-block .user-info-wrapper .user-info {\n  text-align: center;\n}\n\n.user-block .user-info-wrapper .user-info .name {\n  font-size: 15px;\n}\n\n.user-block .user-info-wrapper .user-info .position {\n  font-size: 13px;\n}\n\n.user-block.show {\n  height: 156px;\n}\n\n.sidenav-menu-outer .ps {\n  height: calc(100% - 56px);\n}\n\n.sidenav-menu-outer.user-block-show .ps {\n  height: calc(100% - 56px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLDBCQUFBO0FBREo7O0FBSUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQVI7O0FBRUk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBUjs7QUFDUTtFQUNJLGtCQUFBO0FBQ1o7O0FBQVk7RUFDSSxlQUFBO0FBRWhCOztBQUFZO0VBQ0ksZUFBQTtBQUVoQjs7QUFFSTtFQUNJLGFDaENvQjtBRGdDNUI7O0FBS0k7RUFDSSx5QkFBQTtBQUZSOztBQUtRO0VBQ0kseUJBQUE7QUFIWiIsImZpbGUiOiJzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5waW57XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNpZGVuYXYtaGVhZGVye1xyXG4gICAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2VyLWJsb2Nre1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgICB6LWluZGV4OiAxOyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47ICBcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogODBweDsgXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICAgICAgXHJcbiAgICB9XHJcbiAgICAudXNlci1pbmZvLXdyYXBwZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAudXNlci1pbmZve1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBvc2l0aW9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgICYuc2hvd3tcclxuICAgICAgICBoZWlnaHQ6ICRzaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0O1xyXG4gICAgfSAgICAgIFxyXG59IFxyXG5cclxuLnNpZGVuYXYtbWVudS1vdXRlcntcclxuICAgIC5wc3tcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvb2xiYXItaGVpZ2h0fSk7IFxyXG4gICAgfSAgICAgICBcclxuICAgICYudXNlci1ibG9jay1zaG93e1xyXG4gICAgICAgIC5wc3sgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7JHRvb2xiYXItaGVpZ2h0fSk7IFxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0iLCIkZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuJHRvb2xiYXItaGVpZ2h0OiA1NnB4OyBcclxuJGhvcml6b250YWwtbWVudS1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcclxuXHJcbiRzaWRlbmF2LXdpZHRoOiAyNTBweDtcclxuJHNpZGVuYXYtdXNlci1ibG9jay1oZWlnaHQ6IDE1NnB4O1xyXG4kbWluaS1zaWRlbmF2LXVzZXItYmxvY2staGVpZ2h0OiA3MHB4O1xyXG5cclxuJGZsZXgtZGlzdGFuY2U6IDhweDtcclxuJGlubmVyLXNpZGVuYXYtY29udGVudC1wYWRkaW5nOiAkZmxleC1kaXN0YW5jZTtcclxuXHJcbi8vTG9naW4sIFJlZ2lzdGVyLCBFcnJvcnMgYm94XHJcbiRib3gtaGVpZ2h0OiAxODZweDtcclxuJGJveC1wb3NpdGlvbjogMzRweDtcclxuJHJlZ2lzdGVyLWJveC1oZWlnaHQ6IDMwMHB4O1xyXG5cclxuJGZvb3Rlci1oZWlnaHQ6IDU2cHg7ICJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 94460:
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuComponent": () => (/* binding */ UserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Forms_Login_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Forms/Login/authentication.service */ 88631);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);








class UserMenuComponent {
    constructor(_authService, router) {
        this._authService = _authService;
        this.router = router;
        this.userImage = '../assets/img/users/user.jpg';
        this.userData = {};
    }
    ngOnInit() {
        this._authService.getUserData().subscribe(res => {
            console.log('first', res);
            this.userData = res || {};
        });
    }
    onLogout() {
        this._authService.logout();
        this.router.navigate(['/login']);
    }
}
UserMenuComponent.ɵfac = function UserMenuComponent_Factory(t) { return new (t || UserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Forms_Login_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
UserMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserMenuComponent, selectors: [["app-user-menu"]], decls: 33, vars: 3, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["userMenuTrigger", "matMenuTrigger"], [1, "toolbar-dropdown-menu", "user-menu", 3, "overlapTrigger"], ["userMenu", "matMenu"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "user-info"], ["mat-menu-item", "", "routerLink", "/profile/projects"], ["mat-menu-item", "", "routerLink", "settings"], ["mat-menu-item", "", "routerLink", "help"], [1, "divider"], ["mat-menu-item", "", 3, "click"]], template: function UserMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", 2, 3)(6, "mat-toolbar", 4)(7, "div", 5)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6)(13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 7)(18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 8)(23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserMenuComponent_Template_a_click_28_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTrigger", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userData.userName);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important;\n}\n.user-menu .user-info {\n  width: 230px;\n}\n.user-menu .user-info p {\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n}\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHdCQUFBO0FBQVI7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUNRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQVIiLCJmaWxlIjoidXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbWVudXtcclxuICAgIC5tYXQtdG9vbGJhciwgLm1hdC10b29sYmFyLXJvd3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudXNlci1pbmZve1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1tZW51LWl0ZW17XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG59Il19 */"], encapsulation: 2 });


/***/ }),

/***/ 35698:
/*!***********************************************************!*\
  !*** ./src/app/theme/pipes/pagination/pagination.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationPipe": () => (/* binding */ PaginationPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PaginationPipe {
    transform(data, args) {
        if (!args) {
            args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
            };
        }
        return this.paginate(data, args.pageSize, args.pageIndex);
    }
    paginate(array, page_size, page_number) {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }
}
PaginationPipe.ɵfac = function PaginationPipe_Factory(t) { return new (t || PaginationPipe)(); };
PaginationPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pagination", type: PaginationPipe, pure: true });


/***/ }),

/***/ 39045:
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination/pagination.pipe */ 35698);
/* harmony import */ var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profilePicture/profilePicture.pipe */ 77965);
/* harmony import */ var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/chat-person-search.pipe */ 45918);
/* harmony import */ var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/user-search.pipe */ 7542);
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truncate/truncate.pipe */ 86945);
/* harmony import */ var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/mail-search.pipe */ 96555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);








class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_0__.PaginationPipe,
        _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePicturePipe,
        _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_2__.ChatPersonSearchPipe,
        _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_3__.UserSearchPipe,
        _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__.TruncatePipe,
        _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_5__.MailSearchPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule], exports: [_pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_0__.PaginationPipe,
        _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_1__.ProfilePicturePipe,
        _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_2__.ChatPersonSearchPipe,
        _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_3__.UserSearchPipe,
        _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_4__.TruncatePipe,
        _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_5__.MailSearchPipe] }); })();


/***/ }),

/***/ 77965:
/*!*******************************************************************!*\
  !*** ./src/app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePicturePipe": () => (/* binding */ ProfilePicturePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ProfilePicturePipe {
    transform(input, ext = 'jpg') {
        return '../assets/img/profile/' + input + '.' + ext;
    }
}
ProfilePicturePipe.ɵfac = function ProfilePicturePipe_Factory(t) { return new (t || ProfilePicturePipe)(); };
ProfilePicturePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "profilePicture", type: ProfilePicturePipe, pure: true });


/***/ }),

/***/ 45918:
/*!***************************************************************!*\
  !*** ./src/app/theme/pipes/search/chat-person-search.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPersonSearchPipe": () => (/* binding */ ChatPersonSearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ChatPersonSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(message => {
                if (message.author) {
                    return message.author.search(searchText) !== -1;
                }
            });
        }
    }
}
ChatPersonSearchPipe.ɵfac = function ChatPersonSearchPipe_Factory(t) { return new (t || ChatPersonSearchPipe)(); };
ChatPersonSearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ChatPersonSearchPipe", type: ChatPersonSearchPipe, pure: true });


/***/ }),

/***/ 96555:
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/mail-search.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailSearchPipe": () => (/* binding */ MailSearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class MailSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(mail => {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    }
}
MailSearchPipe.ɵfac = function MailSearchPipe_Factory(t) { return new (t || MailSearchPipe)(); };
MailSearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "MailSearch", type: MailSearchPipe, pure: true });


/***/ }),

/***/ 7542:
/*!********************************************************!*\
  !*** ./src/app/theme/pipes/search/user-search.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSearchPipe": () => (/* binding */ UserSearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class UserSearchPipe {
    transform(value, args) {
        let searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(user => {
                if (user.profile.name) {
                    return user.profile.name.search(searchText) !== -1;
                }
                else {
                    return user.username.search(searchText) !== -1;
                }
            });
        }
    }
}
UserSearchPipe.ɵfac = function UserSearchPipe_Factory(t) { return new (t || UserSearchPipe)(); };
UserSearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "UserSearchPipe", type: UserSearchPipe, pure: false });


/***/ }),

/***/ 86945:
/*!*******************************************************!*\
  !*** ./src/app/theme/pipes/truncate/truncate.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TruncatePipe {
    transform(value, args) {
        let limit = args > 0 ? parseInt(args) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });


/***/ }),

/***/ 28758:
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomOverlayContainer": () => (/* binding */ CustomOverlayContainer)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class CustomOverlayContainer extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayContainer {
    _createContainer() {
        let container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    }
}
CustomOverlayContainer.ɵfac = /*@__PURE__*/ function () { let ɵCustomOverlayContainer_BaseFactory; return function CustomOverlayContainer_Factory(t) { return (ɵCustomOverlayContainer_BaseFactory || (ɵCustomOverlayContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomOverlayContainer)))(t || CustomOverlayContainer); }; }();
CustomOverlayContainer.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomOverlayContainer, factory: CustomOverlayContainer.ɵfac });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: "https://backofficeapi.saralaccount.com/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map