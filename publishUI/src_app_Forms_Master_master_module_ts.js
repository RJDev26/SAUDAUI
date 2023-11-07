"use strict";
(self["webpackChunkgradus"] = self["webpackChunkgradus"] || []).push([["src_app_Forms_Master_master_module_ts"],{

/***/ 32197:
/*!*******************************************************************************************!*\
  !*** ./src/app/Forms/Dialog/confirmation-dialog/confirmation-account-dialog.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationAccountDialog": () => (/* binding */ ConfirmationAccountDialog)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);








class ConfirmationAccountDialog {
    // Other component code  
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = "Are you sure?";
        this.confirmButtonText = "Yes";
        this.cancelButtonText = "Cancel";
        this.checked = false;
        this.MTM = false;
        this.submitClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
        this.submitClicked.emit({ checked: this.checked, MTM: this.MTM });
    }
}
ConfirmationAccountDialog.ɵfac = function ConfirmationAccountDialog_Factory(t) { return new (t || ConfirmationAccountDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
ConfirmationAccountDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationAccountDialog, selectors: [["confirmation-account-dialog"]], outputs: { submitClicked: "submitClicked" }, decls: 18, vars: 5, consts: [[1, "error-message"], [1, "content"], [1, "mb-10"], [1, "pl-10", 3, "ngModel", "ngModelChange"], [1, "pl-10", "ml-15", 3, "ngModel", "ngModelChange"], ["align", "center"], ["mat-raised-button", "", "color", "primary", "tabindex", "1", 3, "click"], ["mat-raised-button", "", "color", "warn", "mat-dialog-close", "", "tabindex", "-1"]], template: function ConfirmationAccountDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1")(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "mat-dialog-content")(7, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmationAccountDialog_Template_mat_checkbox_ngModelChange_9_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Show In Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConfirmationAccountDialog_Template_mat_checkbox_ngModelChange_11_listener($event) { return ctx.MTM = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "In Party MTM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-dialog-actions", 5)(14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationAccountDialog_Template_button_click_14_listener() { return ctx.onConfirmClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.MTM);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.confirmButtonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cancelButtonText);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckbox, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 43055:
/*!*********************************************************************!*\
  !*** ./src/app/Forms/Master/account-head/account-head.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountHeadComponent": () => (/* binding */ AccountHeadComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _add_account_head_add_account_head_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-account-head/add-account-head.component */ 25800);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ 79771);












class AccountHeadComponent {
    constructor(snackBar, appSettings, _masterService, dialog) {
        this.snackBar = snackBar;
        this.appSettings = appSettings;
        this._masterService = _masterService;
        this.dialog = dialog;
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
        };
        this.columnDefs = [
            {
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true, filter: false
            },
            { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getAccountHeadList();
    }
    getAccountHeadList() {
        this._masterService.getAccountHead().subscribe((results) => {
            this.accountHeadList = results;
        });
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit</button>
                          <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    openAccountHeadDialog(selectedAccountHeadId) {
        let dialogRef = this.dialog.open(_add_account_head_add_account_head_component__WEBPACK_IMPORTED_MODULE_0__.AddAccountHeadComponent, {
            data: {
                branchID: selectedAccountHeadId,
            }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getAccountHeadList();
        });
    }
    onGridReady(event) { }
    onGridClick(params) {
        if (params.event.target.dataset.action == "edit") {
            this.openAccountHeadDialog(params.data.id);
        }
        if (params.event.target.dataset.action == "delete") {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
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
                    this._masterService.deleteAcHead(params.data.id).subscribe((res) => {
                        this.getAccountHeadList();
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
}
AccountHeadComponent.ɵfac = function AccountHeadComponent_Factory(t) { return new (t || AccountHeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
AccountHeadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AccountHeadComponent, selectors: [["app-branch"]], viewQuery: function AccountHeadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 10, vars: 5, consts: [[1, "row"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", 1, "mt-2"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked", "gridReady"]], template: function AccountHeadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountHeadComponent_Template_button_click_4_listener() { return ctx.openAccountHeadDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Add Account Head ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "ag-grid-angular", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cellClicked", function AccountHeadComponent_Template_ag_grid_angular_cellClicked_9_listener($event) { return ctx.onGridClick($event); })("gridReady", function AccountHeadComponent_Template_ag_grid_angular_gridReady_9_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.accountHeadList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWhlYWQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 25800:
/*!******************************************************************************************!*\
  !*** ./src/app/Forms/Master/account-head/add-account-head/add-account-head.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAccountHeadComponent": () => (/* binding */ AddAccountHeadComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ 79771);















function AddAccountHeadComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddAccountHeadComponent {
    constructor(snackBar, formBuilder, dialog, data, _masterService, dialogRef) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.data = data;
        this._masterService = _masterService;
        this.dialogRef = dialogRef;
        this.accountList = [];
        this.selectedAccountHeadID = 0;
        this.AcHeadAccountList = [];
        this.agGridOptions = {
            suppressRowHoverHighlight: true,
        };
        this.isRowSelected = false;
        this.columnDefsSelectAc = [{
                headerName: 'Select account',
                children: [
                    {
                        headerName: '', editable: false, width: 5, minwidth: 5, maxwidth: 5, resizable: false, checkboxSelection: true, headerCheckboxSelection: true,
                    },
                    //{
                    //  headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
                    //},
                    { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true, flex: 1 },
                ]
            }];
        this.columnDefs = [{
                headerName: 'Added account list',
                children: [
                    {
                        headerName: '', editable: false, width: 5, minwidth: 5, maxwidth: 5, resizable: false, checkboxSelection: true, headerCheckboxSelection: true,
                    },
                    //{
                    //  headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true
                    //},
                    { headerName: 'Account', field: 'name', filter: true, sorting: true, resizable: true, flex: 1 },
                ]
            }];
        this.selectedAccountHeadID = data.branchID;
        console.log(data);
    }
    ngOnInit() {
        this.bindFormControls();
        this.getAccounts();
        this.getAcHeadAccountList();
        this.getApiData();
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    onGridReady(event) { this.gridApi = event.api; }
    onGridReadySelectAc(event) { this.gridApiSelectAc = event.api; }
    getAcHeadAccountList() {
        this._masterService.getAccountsAddedinAcHead(this.selectedAccountHeadID).subscribe((res) => {
            this.AcHeadAccountList = res;
        });
    }
    getAccounts() {
        this._masterService.getAccountsForBranch(this.selectedAccountHeadID).subscribe((res) => {
            this.accountList = res;
        });
    }
    getApiData() {
        if (this.selectedAccountHeadID) {
            this._masterService.getAcHeadId(this.selectedAccountHeadID).subscribe((res) => {
                this.nameForm.patchValue({
                    name: res.name
                });
            });
            this.getAcHeadAccountList();
        }
        //this._masterService.getAccountsForBranch(this.selectedBranchID).subscribe((response) => {
        //  this.accountList = response;
        //  this.filteredAccountList = response;
        //});
    }
    checkSelectedRowSelectAc(event) {
        var selectedRow = this.gridApiSelectAc.getSelectedRows();
        if (selectedRow.length > 0) {
            this.isRowSelected = true;
        }
        else {
            this.isRowSelected = false;
        }
    }
    checkSelectedRow(event) {
        var selectedRow = this.gridApi.getSelectedRows();
        if (selectedRow.length > 0) {
            this.isRowSelected = true;
        }
        else {
            this.isRowSelected = false;
        }
    }
    selectAccounts() {
        var selectAccount = this.gridApiSelectAc.getSelectedRows();
        const body = {
            dropDownVMs: selectAccount,
            AcHeadId: this.selectedAccountHeadID
        };
        this._masterService.addAcHead(body).subscribe(result => {
            this.getAcHeadAccountList();
        });
    }
    removeAccounts() {
        var selectAccount = this.gridApi.getSelectedRows();
        const body = {
            dropDownVMs: selectAccount,
            AcHeadId: this.selectedAccountHeadID
        };
        this._masterService.deleteAcHeadAccount(body).subscribe(result => {
            if (result.isSuccess) {
                this.showToaster(result.message);
            }
            else {
                this.showToaster(result.message, true);
            }
            /* this.selectedBranchID = result.id;*/
            this.getAcHeadAccountList();
        });
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
    bindFormControls() {
        this.nameForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            //'id': [this.selectedAccountHeadID, Validators.required]
        });
    }
    onSubmit(values) {
        var h = this.gridApi.getSelectedRows();
        var body = this.nameForm.value;
        if (this.nameForm.valid) {
            body.id = this.selectedAccountHeadID;
            this._masterService.saveAccountHead(body).subscribe(result => {
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
    close() {
        this.dialogRef.close();
    }
}
AddAccountHeadComponent.ɵfac = function AddAccountHeadComponent_Factory(t) { return new (t || AddAccountHeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef)); };
AddAccountHeadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddAccountHeadComponent, selectors: [["app-add-account-head"]], decls: 41, vars: 17, consts: [[1, "heading", "mb-10"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["label", "Account"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "tab-party-details-parent"], [1, "white-block", "pb-0"], ["fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "Name", "formControlName", "name", "type", "text"], [4, "ngIf"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], ["label", "Account Head"], [1, "row", "account-head"], ["fxFlex", "40"], ["headerHeight", "34", 1, "ag-theme-material", "mt-2", 2, "height", "300px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "rowSelection", "rowMultiSelectWithClick", "defaultColDef", "gridReady", "selectionChanged"], ["fxFlex", "15", 1, "text-center"], [1, "pt-10", "mb-10"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], ["fxFlex", "45"]], template: function AddAccountHeadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Account Head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddAccountHeadComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-tab-group")(7, "mat-tab", 3)(8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddAccountHeadComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(ctx.nameForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "h3")(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7)(15, "mat-form-field", 8)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddAccountHeadComponent_mat_error_19_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddAccountHeadComponent_Template_button_click_21_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-tab", 14)(26, "div", 15)(27, "div", 16)(28, "ag-grid-angular", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function AddAccountHeadComponent_Template_ag_grid_angular_gridReady_28_listener($event) { return ctx.onGridReadySelectAc($event); })("selectionChanged", function AddAccountHeadComponent_Template_ag_grid_angular_selectionChanged_28_listener($event) { return ctx.checkSelectedRowSelectAc($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddAccountHeadComponent_Template_button_click_31_listener() { return ctx.selectAccounts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-icon")(33, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " arrow_forward_ios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddAccountHeadComponent_Template_button_click_35_listener() { return ctx.removeAccounts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-icon")(37, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " arrow_back_ios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 21)(40, "ag-grid-angular", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gridReady", function AddAccountHeadComponent_Template_ag_grid_angular_gridReady_40_listener($event) { return ctx.onGridReady($event); })("selectionChanged", function AddAccountHeadComponent_Template_ag_grid_angular_selectionChanged_40_listener($event) { return ctx.checkSelectedRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.nameForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameForm.controls.name.errors == null ? null : ctx.nameForm.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.nameForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowData", ctx.accountList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefsSelectAc)("rowSelection", "multiple")("rowMultiSelectWithClick", true)("defaultColDef", ctx.agGridOptions.defaultColDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowData", ctx.AcHeadAccountList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("rowSelection", "multiple")("rowMultiSelectWithClick", true)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular], styles: [".account-head[_ngcontent-%COMP%] {\n  width: 61.875rem;\n}\n\n.white-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hY2NvdW50LWhlYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKIiwiZmlsZSI6ImFkZC1hY2NvdW50LWhlYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1oZWFkIHtcclxuICAgIHdpZHRoOiA2MS44NzVyZW07XHJcbn1cclxuLndoaXRlLWJsb2NrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 63736:
/*!******************************************************************************!*\
  !*** ./src/app/Forms/Master/account/account-dialog/add-account.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAccountComponent": () => (/* binding */ AddAccountComponent),
/* harmony export */   "emailValidator": () => (/* binding */ emailValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _shared_common_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/common-utility */ 70556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master-second.service */ 8703);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../service/app.service */ 46935);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _account_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account.model */ 42151);
















function AddAccountComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "ShortCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "OpeningBal is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select ACGroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 57)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const acGroupObj_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", acGroupObj_r25.name)("id", acGroupObj_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](acGroupObj_r25.name);
  }
}

function AddAccountComponent_mat_error_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select ACHead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_option_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 57)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const acHeadObj_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", acHeadObj_r26.name)("id", acHeadObj_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](acHeadObj_r26.name);
  }
}

function AddAccountComponent_mat_error_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please select City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_option_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 57)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const cityObj_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", cityObj_r27.name)("id", cityObj_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cityObj_r27.name);
  }
}

function AddAccountComponent_mat_error_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Pan number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_error_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_error_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "GST No is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_error_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_error_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Telegram is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_error_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Telegram number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AddAccountComponent_mat_option_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r28.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r28.name, " ");
  }
}

function AddAccountComponent_ng_container_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-self-share-tab", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedAccountId", ctx_r21.selectedAccountId);
  }
}

function AddAccountComponent_ng_container_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-brokerage-tab", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedAccountId", ctx_r22.selectedAccountId);
  }
}

function AddAccountComponent_ng_container_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-add-intereset", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedAccountId", ctx_r23.selectedAccountId);
  }
}

function AddAccountComponent_ng_container_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-file-code-tab", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedAccountId", ctx_r24.selectedAccountId);
  }
}

class AddAccountComponent {
  constructor(formBuilder, _masterSeconedService, dialogRef, user, _masterService, dialog, _appService, snackBar) {
    this.formBuilder = formBuilder;
    this._masterSeconedService = _masterSeconedService;
    this.dialogRef = dialogRef;
    this.user = user;
    this._masterService = _masterService;
    this.dialog = dialog;
    this._appService = _appService;
    this.snackBar = snackBar;
    this.isFileCodeTabActive = false;
    this.isInterestTabActive = false;
    this.isSelfShareTabActive = false;
    this.isBrokerageTabActive = false;
    this.isAnythingEmitted = null;
    this.acGroupCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.cityCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.acHeadCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.selectedAccountId = 0;
    this.formSubmitted = false;
    this.agGridOptions = {
      defaultColDef: {
        filter: true,
        flex: 1,
        sortable: true,
        wraptext: true,
        resizable: true
      }
    };
    this.bindFormControls();

    if (this.user == null) {
      this.selectedAccountId = 0;
    } else {
      this.selectedAccountId = this.user.id;
    }
  }

  ngAfterViewInit() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    for (var trigger of this.triggerCollection.toArray()) {
      this.subscription = trigger.panelClosingActions.subscribe(e => {
        if (!e || !e.source) {
          if (this.acGroupCtrl.dirty) {
            this.acGroupCtrl.setValue('');
          }

          if (this.acHeadCtrl.dirty) {
            this.acHeadCtrl.setValue('');
          }

          if (this.cityCtrl.dirty) {
            this.cityCtrl.setValue('');
          }
        }
      });
    }
  }

  bindFormControls() {
    this.personalForm = this.formBuilder.group({
      'ShortCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      'Name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      'OpeningBal': [],
      'City': [''],
      'Email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([emailValidator])],
      'PanNo': [''],
      'Gstinno': [''],
      'Phone': [''],
      'AcGroup': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      'AcHead': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      'Address': [''],
      'TelegramNo': [''],
      'TelegramId': [''],
      'Id': [0],
      'brokerId': [0],
      'DrCr': ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      'ApplyTax': [false],
      'ApplyFutureCutBrok': [true],
      'ApplyOptionCutBrok': [true]
    });
  }

  handleTabChange(event) {
    if (event.index === 1) {
      this.isSelfShareTabActive = true;
    }

    if (event.index === 2) {
      this.isBrokerageTabActive = true;
    }

    if (event.index === 3) {
      // Assuming "FileCode" tab has index 1
      this.isInterestTabActive = true;
    }

    if (event.index === 4) {
      // Assuming "FileCode" tab has index 1
      this.isFileCodeTabActive = true;
    }
  }

  resetForm(myForm) {
    myForm.reset();
    myForm.get('id').setValue(0);
    Object.keys(myForm.controls).forEach(key => {
      myForm.get(key).setErrors(null);
    });
  }
  /* to filter select account dropdown*/


  onInputBrokerChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filterBrokerList = this.brokerList.filter(data => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });

    if (searchInput === '') {
      this.filterBrokerList = [...this.brokerList];
    }
  }

  bindFilterFntoList() {
    this.filteredCity = this.cityCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(cityObj => {
      return cityObj ? this._filterCity(cityObj) : this.cityList.slice();
    }));
    this.filteredacGroup = this.acGroupCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(acGroupObj => {
      return acGroupObj ? this._filterACGroup(acGroupObj) : this.acGroupList.slice();
    }));
    this.filteredacHead = this.acHeadCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(acHeadObj => {
      return acHeadObj ? this._filterACHead(acHeadObj) : this.acHeadList.slice();
    }));
  }

  initialApiCalls() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([this._masterService.getAcGoup(), this._masterService.getAcHead(), this._masterService.getCityList(), this._masterService.getTaxType(), this._masterService.getAccount(), this._masterService.getApplyOnFileShareDDL(), this._masterService.getAccounts()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
      this.acGroupList = response[0];
      this.acHeadList = response[1];
      this.cityList = response[2];
      this.acList = response[4];
      this.applyOnFileShare = response[5];
      this.brokerList = response[6];
      this.filterBrokerList = response[6];
      this.bindFilterFntoList();
    })).subscribe(res => {
      this.getValuesInEditMode();
    });
  }

  getValuesInEditMode() {
    if (this.user) {
      const acGroup = this.acGroupList.find(obj => obj.id === this.user.accountGroupId);
      const acHead = this.acHeadList.find(obj => obj.id === this.user.accountHeadId);
      const optedCity = this.cityList.find(obj => obj.id === this.user.cityId);
      this.bindValuesInEditMode(acGroup, optedCity, acHead);
      console.log(this.user);
    }
  }

  bindValuesInEditMode(acGroup, optedCity, acHead) {
    this.personalForm.setValue({
      'ShortCode': this.user.shortCode,
      'Name': this.user.name,
      'OpeningBal': _shared_common_utility__WEBPACK_IMPORTED_MODULE_0__.CommonUtility.formatNumber(this.user.openingBal),
      'City': optedCity ? optedCity.name : '',
      'Email': this.user.email,
      'PanNo': this.user.panNo,
      'Gstinno': this.user.gstinno,
      'Phone': this.user.phone,
      'AcGroup': acGroup ? acGroup.name : '',
      'AcHead': acHead ? acHead.name : '',
      'Address': this.user.address,
      'TelegramNo': this.user.telegramNo,
      'TelegramId': this.user.telegramId,
      'Id': this.user.id,
      'brokerId': this.user.brokerId,
      'DrCr': this.user.drCr,
      'ApplyTax': this.user.applyTax,
      'ApplyFutureCutBrok': this.user.applyFutureCutBrok,
      'ApplyOptionCutBrok': this.user.applyOptionCutBrok
    });
    this.acGroupCtrl.setValue(acGroup.name);
    this.acHeadCtrl.setValue(acHead.name);
    this.cityCtrl.setValue(optedCity.name);
  }

  onGroupChange(event) {
    this.personalForm.controls['AcGroup'].setValue(this.acGroupCtrl.value);
  }

  onHeadChange(event) {
    this.personalForm.controls['AcHead'].setValue(this.acHeadCtrl.value);
  }

  ngOnInit() {
    this.initialApiCalls();
  }

  _filterACGroup(value) {
    const filterValue = value.toLowerCase();
    return this.acGroupList.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  _filterACHead(value) {
    const filterValue = value.toLowerCase();
    return this.acHeadList.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  _filterCity(value) {
    const filterValue = value.toLowerCase();
    return this.cityList.filter(city => city.name.toLowerCase().includes(filterValue));
  }

  getAcGroupId(name) {
    const cityObj = this.acGroupList.find(city => city.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    return cityObj?.id;
  }

  getCityId(name) {
    const cityObj = this.cityList.find(city => city.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    return cityObj?.id;
  }

  getAcHeadId(name) {
    const cityObj = this.acHeadList.find(city => city.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    return cityObj?.id;
  }

  onSubmit(values) {
    this.personalForm.controls['OpeningBal'].setValue(Number(this.personalForm.get('OpeningBal').value));
    var body = this.personalForm.value;
    body.accountGroupId = this.getAcGroupId(this.acGroupCtrl.value);
    body.accountHeadId = this.getAcHeadId(this.acHeadCtrl.value);
    body.CityId = this.getCityId(this.cityCtrl.value);

    if (this.personalForm.valid) {
      //const body = JSON.stringify(addFormData);
      this._masterService.saveAccount(body).subscribe(result => {
        console.log("result", result);
        this.showToaster(result.message, "Success");
        this.formSubmitted = true; // this.dialogRef.close();
      }, err => {
        this.showToaster(err.message, "Error");
        console.log(err);
      });
    }
  }

  showToaster(message, Label) {
    this.snackBar.open(message, Label, {
      duration: 3000
    });
  }

  close() {
    this.dialogRef.close();
  }

}

AddAccountComponent.ɵfac = function AddAccountComponent_Factory(t) {
  return new (t || AddAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_1__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar));
};

AddAccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddAccountComponent,
  selectors: [["app-account-dialog"]],
  viewQuery: function AddAccountComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.triggerCollection = _t);
    }
  },
  decls: 146,
  vars: 34,
  consts: [[1, "heading", "mb-10"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], [3, "selectedTabChange"], ["label", "Details"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "tab-party-details-parent"], [1, "white-block"], ["fxFlex", "100", "fxFlex.gt-sm", "12", "fxFlex.sm", "12"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "ShortCode", "formControlName", "ShortCode", "type", "text"], [4, "ngIf"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["matInput", "", "autocomplete", "off", "placeholder", "Name", "formControlName", "Name", "type", "text"], ["fxFlex", "100", "fxFlex.gt-sm", "28", "fxFlex.sm", "25"], ["appearance", "outline", 1, "small"], ["matInput", "", "autocomplete", "off", "placeholder", "OpeningBal", "formControlName", "OpeningBal", "type", "number"], ["formControlName", "DrCr"], ["value", "DR", "checked", "", 1, "mx-1", "pl-10"], ["value", "CR", 1, "ml-15"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "aria-label", "ACGroup", "formControlName", "AcGroup", 3, "matAutocomplete", "formControl"], [3, "optionSelected"], ["auto1", "matAutocomplete"], [3, "value", "id", 4, "ngFor", "ngForOf"], ["matInput", "", "aria-label", "ACHead", "formControlName", "AcHead", 3, "matAutocomplete", "formControl"], ["auto2", "matAutocomplete"], ["fxFlex", "100", "fxFlex.gt-sm", "10", "fxFlex.sm", "50", 1, "pt-10"], ["checked", "", 1, "pl-10"], ["matInput", "", "aria-label", "CityObj", "formControlName", "City", 3, "matAutocomplete", "formControl"], ["auto3", "matAutocomplete"], ["fxFlex", "100", "fxFlex.gt-sm", "40", "fxFlex.sm", "50"], ["matInput", "", "placeholder", "Enter address", "formControlName", "Address", "rows", "1"], ["matInput", "", "autocomplete", "off", "placeholder", "Pan Number", "formControlName", "PanNo", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Email", "formControlName", "Email", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "GST No", "formControlName", "Gstinno", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Phone Number", "formControlName", "Phone", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Telegram Id", "formControlName", "TelegramId", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Telegram No", "formControlName", "TelegramNo", "type", "text"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Broker", "panelClass", "custom-select-panel", "formControlName", "brokerId"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Broker", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "ApplyTax", 1, "pl-10"], ["formControlName", "ApplyFutureCutBrok", 1, "pl-10"], ["formControlName", "ApplyOptionCutBrok", 1, "pl-10", "ml-7"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], ["label", "Self Share"], ["label", "Brokerage"], ["label", "Interest"], ["label", "FileCode"], [3, "value", "id"], [3, "value"], [3, "selectedAccountId"]],
  template: function AddAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Add Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAccountComponent_Template_a_click_2_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-tab-group", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectedTabChange", function AddAccountComponent_Template_mat_tab_group_selectedTabChange_6_listener($event) {
        return ctx.handleTabChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-tab", 4)(8, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AddAccountComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit(ctx.personalForm.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "h3")(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8)(15, "mat-form-field", 9)(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Short Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AddAccountComponent_mat_error_19_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12)(21, "mat-form-field", 9)(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AddAccountComponent_mat_error_25_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 14)(27, "mat-form-field", 15)(28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Opening Bal");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AddAccountComponent_mat_error_31_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-radio-group", 17)(33, "mat-radio-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Dr.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-radio-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Cr.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 20)(38, "mat-form-field", 21)(39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Account Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, AddAccountComponent_mat_error_42_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-autocomplete", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("optionSelected", function AddAccountComponent_Template_mat_autocomplete_optionSelected_43_listener($event) {
        return ctx.onGroupChange($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, AddAccountComponent_mat_option_45_Template, 3, 3, "mat-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](46, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 20)(48, "mat-form-field", 21)(49, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Account Head");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, AddAccountComponent_mat_error_52_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-autocomplete", 23, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("optionSelected", function AddAccountComponent_Template_mat_autocomplete_optionSelected_53_listener($event) {
        return ctx.onHeadChange($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, AddAccountComponent_mat_option_55_Template, 3, 3, "mat-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 28)(58, "mat-checkbox", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 7)(61, "h3")(62, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 12)(65, "mat-form-field", 21)(66, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "City");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, AddAccountComponent_mat_error_69_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "mat-autocomplete", null, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, AddAccountComponent_mat_option_72_Template, 3, 3, "mat-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](73, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 32)(75, "mat-form-field", 9)(76, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "textarea", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 12)(80, "mat-form-field", 9)(81, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Pan Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, AddAccountComponent_mat_error_84_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 12)(86, "mat-form-field", 9)(87, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, AddAccountComponent_mat_error_90_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 12)(92, "mat-form-field", 9)(93, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "GST No");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](95, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, AddAccountComponent_mat_error_96_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 12)(98, "mat-form-field", 9)(99, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](102, AddAccountComponent_mat_error_102_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 12)(104, "mat-form-field", 9)(105, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "Telegram Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, AddAccountComponent_mat_error_108_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 12)(110, "mat-form-field", 9)(111, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Telegram No");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](114, AddAccountComponent_mat_error_114_Template, 2, 0, "mat-error", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "div", 12)(116, "div", 40)(117, "mat-form-field", 41)(118, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Select Broker");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "mat-select", 42, 43)(122, "input", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function AddAccountComponent_Template_input_input_122_listener($event) {
        return ctx.onInputBrokerChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, AddAccountComponent_mat_option_124_Template, 2, 2, "mat-option", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 12)(126, "mat-checkbox", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "Apply Tax");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 32)(129, "mat-checkbox", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "Apply Future Cut Brok");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "mat-checkbox", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Apply Option Cut Brok");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 50)(134, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddAccountComponent_Template_button_click_134_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "mat-tab", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](139, AddAccountComponent_ng_container_139_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "mat-tab", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](141, AddAccountComponent_ng_container_141_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](142, "mat-tab", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](143, AddAccountComponent_ng_container_143_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "mat-tab", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](145, AddAccountComponent_ng_container_145_Template, 2, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](44);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](54);

      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](71);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.personalForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.ShortCode.errors == null ? null : ctx.personalForm.controls.ShortCode.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.Name.errors == null ? null : ctx.personalForm.controls.Name.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.OpeningBal.errors == null ? null : ctx.personalForm.controls.OpeningBal.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r4)("formControl", ctx.acGroupCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.AcGroup.errors == null ? null : ctx.personalForm.controls.AcGroup.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](46, 28, ctx.filteredacGroup));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r7)("formControl", ctx.acHeadCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.AcHead.errors == null ? null : ctx.personalForm.controls.AcHead.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 30, ctx.filteredacHead));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r10)("formControl", ctx.cityCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.City.errors == null ? null : ctx.personalForm.controls.City.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](73, 32, ctx.filteredCity));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.PanNo.errors == null ? null : ctx.personalForm.controls.PanNo.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.Email.errors == null ? null : ctx.personalForm.controls.Email.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.Gstinno.errors == null ? null : ctx.personalForm.controls.Gstinno.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.Phone.errors == null ? null : ctx.personalForm.controls.Phone.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.TelegramId.errors == null ? null : ctx.personalForm.controls.TelegramId.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.personalForm.controls.TelegramNo.errors == null ? null : ctx.personalForm.controls.TelegramNo.errors.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filterBrokerList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.personalForm.valid || !ctx.personalForm.dirty && !ctx.formSubmitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSelfShareTabActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isBrokerageTabActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isInterestTabActive);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isFileCodeTabActive);
    }
  },
  styles: [".heading[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n}\n\n.pl-10[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUoiLCJmaWxlIjoiYWRkLWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZyB7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbn1cclxuLnBsLTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufSJdfQ== */"]
});
function emailValidator(control) {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

  if (control.value && !emailRegexp.test(control.value)) {
    return {
      invalidEmail: true
    };
  }
}

/***/ }),

/***/ 9956:
/*!**********************************************************************************************!*\
  !*** ./src/app/Forms/Master/account/account-dialog/add-intereset/add-intereset.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddInteresetComponent": () => (/* binding */ AddInteresetComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../master-second.service */ 8703);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ag-grid-angular */ 79771);



















function AddInteresetComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r13.name, " ");
} }
function AddInteresetComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r14.name, " ");
} }
function AddInteresetComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r15.name, " ");
} }
function AddInteresetComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "yearDays is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddInteresetComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Int Rate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class AddInteresetComponent {
    constructor(dialogRef, formBuilder, _appService, _masterSeconedService, dialog, snackBar) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this._appService = _appService;
        this._masterSeconedService = _masterSeconedService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.interestMasterList = [];
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                flex: 1,
                sortable: true,
                wraptext: true,
                resizable: true
            }
        };
        this.columnItemDefs = [
            {
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
                maxWidth: 110, resizable: true
            },
            { headerName: 'Account Name', field: 'acName', filter: true, sorting: true, resizable: true },
            { headerName: 'ApplyOn', field: 'applyOnName', filter: true, sorting: true, resizable: true },
            { headerName: 'From Date', field: 'fromDtFormat', filter: true, sorting: true, resizable: true },
            { headerName: 'To Date', field: 'toDtFormat', filter: true, sorting: true, resizable: true },
            { headerName: 'Type', field: 'typeName', filter: true, sorting: true, resizable: true },
            { headerName: 'Post Vouchers', field: 'postVouchersName', filter: true, sorting: true, resizable: true },
            { headerName: 'Int Rate', field: 'intRate', filter: true, sorting: true, resizable: true },
            { headerName: 'Year Days', field: 'yearDays', filter: true, sorting: true, resizable: true },
        ];
    }
    ngOnInit() {
        this.bindItemFormControls();
        this.initialItemApiCalls();
    }
    bindItemFormControls() {
        this.itemForm = this.formBuilder.group({
            'accountId': this.selectedAccountId,
            'type': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'applyOn': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'postVouchers': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'intRate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'yearDays': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'fromDt': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'toDt': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'id': [0]
        });
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit " data-action="edit">edit </button>
                    <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    close() {
        this.dialogRef.close();
    }
    initialItemApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([this._appService.getIntrestApplyOnDDL(), this._appService.getIntrestTypeDLL(), this._appService.getPostVoucherDLL()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => {
            this.applyOnList = response[0];
            this.filterApplyOnList = response[0];
            this.typeList = response[1];
            this.filterTypeList = response[1];
            this.postVoucherList = response[2];
            this.filterPostVoucherList = response[2];
        })).subscribe(res => {
        });
        if (this.selectedAccountId) {
            this.getInterestList();
        }
    }
    handleTabChange(event) {
        if (event.index === 3) { // Assuming "Interest" tab has index 1
            // Make your API calls here
            console.log('Interest tab clicked, triggering API calls...');
        }
    }
    editInterestItem(id) {
        this._masterSeconedService.getInterestId(id).subscribe((res) => {
            this.itemForm.get('accountId').setValue(this.selectedAccountId);
            this.itemForm.get('type').setValue(res.type);
            this.itemForm.get('applyOn').setValue(res.applyOn);
            this.itemForm.get('postVouchers').setValue(res.postVouchers);
            this.itemForm.get('intRate').setValue(res.intRate);
            this.itemForm.get('yearDays').setValue(res.yearDays);
            this.itemForm.get('fromDt').setValue(res.fromDt);
            this.itemForm.get('toDt').setValue(res.toDt);
            this.itemForm.get('id').setValue(res.id);
        });
    }
    getInterestList() {
        this._masterSeconedService.getAccountInterestList(this.selectedAccountId).subscribe((results) => {
            this.interestMasterList = results;
        });
    }
    onItemSubmit(values) {
        if (this.selectedAccountId == 0) {
            const dialogRef = this.dialog.open(src_app_Forms_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
                data: {
                    message: 'Please select or save account to save account Interest',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
        }
        else {
            var body = this.itemForm.value;
            if (this.itemForm.valid) {
                //const body = JSON.stringify(addFormData);
                this._masterSeconedService.saveInterest(body).subscribe(result => {
                    console.log("result", result);
                    this.getInterestList();
                    this.resetForm(this.itemForm);
                    this.snackBar.open("Interest save sucessfully", "Success", {
                        duration: 3000,
                    });
                }, err => {
                    console.log(err);
                });
            }
        }
    }
    onGridClick(params) {
        if (params.event.target.dataset.action == "edit") {
            this.editInterestItem(params.data.id);
        }
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
                    this._masterSeconedService.deleteInterest(params.data.id).subscribe((res) => {
                        this.getInterestList();
                        if (res.isSuccess) {
                            this.showToaster(res.message);
                        }
                        else {
                            this.showToaster(res.message, true);
                        }
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
    /* to filter select account dropdown*/
    onInputTypeChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filterTypeList = this.typeList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filterTypeList = [...this.typeList];
        }
    }
    onInputApplyOnChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filterApplyOnList = this.applyOnList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filterApplyOnList = [...this.applyOnList];
        }
    }
    onInputVoucherChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filterPostVoucherList = this.postVoucherList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filterPostVoucherList = [...this.postVoucherList];
        }
    }
    resetForm(myForm) {
        myForm.reset();
        myForm.get('id').setValue(0);
        Object.keys(myForm.controls).forEach(key => {
            myForm.get(key).setErrors(null);
        });
    }
}
AddInteresetComponent.ɵfac = function AddInteresetComponent_Factory(t) { return new (t || AddInteresetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_3__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar)); };
AddInteresetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddInteresetComponent, selectors: [["app-add-intereset"]], inputs: { selectedAccountId: "selectedAccountId" }, decls: 69, vars: 16, consts: [["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Type", "panelClass", "custom-select-panel", "formControlName", "type"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Type", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Select ApplyOn", "panelClass", "custom-select-panel", "formControlName", "applyOn"], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search ApplyOn", 1, "milti-search-box", 3, "input"], ["placeholder", "Select Post Voucher", "panelClass", "custom-select-panel", "formControlName", "postVouchers"], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Post Voucher", 1, "milti-search-box", 3, "input"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "Year Days", "formControlName", "yearDays", "type", "number"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "Int Rate", "formControlName", "intRate", "type", "number"], ["matInput", "", "formControlName", "fromDt", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["itemFormpicker1", ""], ["matInput", "", "placeholder", "To", "formControlName", "toDt", 3, "matDatepicker"], ["itemFormpicker2", ""], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "250px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"], [3, "value"]], template: function AddInteresetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AddInteresetComponent_Template_form_ngSubmit_0_listener() { return ctx.onItemSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "h3")(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "mat-form-field", 5)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Select Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-select", 6, 7)(13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function AddInteresetComponent_Template_input_input_13_listener($event) { return ctx.onInputTypeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AddInteresetComponent_mat_option_15_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 3)(17, "div", 4)(18, "mat-form-field", 5)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Select ApplyOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-select", 11, 7)(23, "input", 12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function AddInteresetComponent_Template_input_input_23_listener($event) { return ctx.onInputApplyOnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AddInteresetComponent_mat_option_25_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 3)(27, "div", 4)(28, "mat-form-field", 5)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Select Post Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-select", 13, 7)(33, "input", 14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function AddInteresetComponent_Template_input_input_33_listener($event) { return ctx.onInputVoucherChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AddInteresetComponent_mat_option_35_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 3)(37, "mat-form-field", 15)(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Year Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, AddInteresetComponent_mat_error_41_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 3)(43, "mat-form-field", 15)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Int Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, AddInteresetComponent_mat_error_47_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 3)(49, "mat-form-field", 15)(50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "input", 19)(53, "mat-datepicker-toggle", 20)(54, "mat-datepicker", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 3)(57, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "input", 22)(59, "mat-datepicker-toggle", 20)(60, "mat-datepicker", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 24)(63, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddInteresetComponent_Template_button_click_63_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 27)(68, "ag-grid-angular", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cellClicked", function AddInteresetComponent_Template_ag_grid_angular_cellClicked_68_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](55);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filterTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filterApplyOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filterPostVoucherList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.yearDays.errors == null ? null : ctx.itemForm.controls.yearDays.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.intRate.errors == null ? null : ctx.itemForm.controls.intRate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.interestMasterList)("pagination", true)("columnDefs", ctx.columnItemDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaW50ZXJlc2V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 31610:
/*!**********************************************************************************************!*\
  !*** ./src/app/Forms/Master/account/account-dialog/brokerage-tab/brokerage-tab.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrokerageTabComponent": () => (/* binding */ BrokerageTabComponent)
/* harmony export */ });
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/common-utility */ 70556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../master.service */ 60808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master-second.service */ 8703);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ 79771);












class BrokerageTabComponent {
    constructor(_masterService, dialogRef, formBuilder, _appService, _masterSeconedService, dialog, snackBar) {
        this._masterService = _masterService;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this._appService = _appService;
        this._masterSeconedService = _masterSeconedService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.brokerageList = [];
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                flex: 1,
                sortable: true,
                wraptext: true,
                resizable: true
            }
        };
        this.columnDefsBrok = [
            { headerName: 'ApplyOn', field: 'applyOnName', filter: true, sorting: true, resizable: true },
            { headerName: 'Apply OnQty', field: 'applyOnQtyName', filter: true, sorting: true, resizable: true },
            { field: 'Intraday BrokRate', headerName: 'IntradayBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.intradayBrokRate), type: 'rightAligned' },
            { headerName: 'Delivery BrokRate', field: 'deliveryBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.deliveryBrokRate), type: 'rightAligned' },
            /*{ headerName: 'HigherSide Only', minWidth: 120, maxWidth: 120, field: 'higherSideOnly', filter: true, sorting: true, resizable: true },*/
            { headerName: 'Instrument', field: 'instrumentType', filter: true, sorting: true, resizable: true },
            { headerName: 'RateRange1', field: 'rateRange1', filter: true, sorting: true, resizable: true, valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.rateRange1), type: 'rightAligned' },
            { headerName: 'RateRange2', field: 'rateRange2', filter: true, sorting: true, resizable: true, valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.rateRange2), type: 'rightAligned' },
            { headerName: 'Exchange', field: 'exchange', filter: true, sorting: true, resizable: true },
            { headerName: 'Item', field: 'item', filter: true, sorting: true, resizable: true },
            /*    { headerName: 'IntradaySingleSideOnly', field: 'intradaySingleSideOnly', filter: true, sorting: true, resizable: true },*/
            { headerName: 'FromDT', field: 'fromDT', filter: true, sorting: true, resizable: true },
            { headerName: 'ToDT', field: 'toDT', filter: true, sorting: true, resizable: true },
        ];
    }
    ngOnInit() {
        this.bindBrokerageControls();
    }
    bindBrokerageControls() {
        if (this.selectedAccountId) {
            this.getBrokerageSetupList();
        }
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit " data-action="edit">edit </button>
                    <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    close() {
        this.dialogRef.close();
    }
    getBrokerageSetupList() {
        this._appService.getBrokerageSetupListAccount(this.selectedAccountId).subscribe((results) => {
            this.brokerageList = results;
        });
    }
    onBrokerageClick(params) {
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
                    this._masterService.deleteBrokerageSetup(params.data.id).subscribe((res) => {
                        if (res.isSuccess) {
                            this.showToaster(res.message);
                            this.getBrokerageSetupList();
                        }
                        else {
                            this.showToaster(res.message, true);
                        }
                    });
                }
            });
        }
    }
    onBrokerageSave(values) {
        if (this.selectedAccountId == 0) {
            const dialogRef = this.dialog.open(src_app_Forms_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
                data: {
                    message: 'Please select or save account to save account tax',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
        }
        else {
            console.log(values);
            this.brokerageForm.controls['accountId'].setValue(this.selectedAccountId);
            var body = this.brokerageForm.value;
            console.log(body);
            if (this.brokerageForm.valid) {
                this._masterService.saveBrokerageSetup(body).subscribe(result => {
                    console.log("result", result);
                    // this.dialogRef.close();
                    this.snackBar.open("Brokerage details saved successfully.", "Success", {
                        duration: 3000,
                    });
                    this.resetForm(this.brokerageForm);
                    this.getBrokerageSetupList();
                });
            }
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
}
BrokerageTabComponent.ɵfac = function BrokerageTabComponent_Factory(t) { return new (t || BrokerageTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_5__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar)); };
BrokerageTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BrokerageTabComponent, selectors: [["app-brokerage-tab"]], inputs: { selectedAccountId: "selectedAccountId" }, decls: 2, vars: 5, consts: [[1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "250px", "width", "1200px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked"]], template: function BrokerageTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "ag-grid-angular", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cellClicked", function BrokerageTabComponent_Template_ag_grid_angular_cellClicked_1_listener($event) { return ctx.onBrokerageClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowData", ctx.brokerageList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefsBrok)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicm9rZXJhZ2UtdGFiLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 73285:
/*!**********************************************************************************************!*\
  !*** ./src/app/Forms/Master/account/account-dialog/file-code-tab/file-code-tab.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileCodeTabComponent": () => (/* binding */ FileCodeTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master.service */ 60808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../master-second.service */ 8703);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ag-grid-angular */ 79771);



















function FileCodeTabComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r4.name, " ");
} }
function FileCodeTabComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "FileCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class FileCodeTabComponent {
    constructor(_masterService, dialogRef, formBuilder, _appService, _masterSeconedService, dialog, snackBar) {
        this._masterService = _masterService;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this._appService = _appService;
        this._masterSeconedService = _masterSeconedService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.interestMasterList = [];
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                flex: 1,
                sortable: true,
                wraptext: true,
                resizable: true
            }
        };
        this.columnItemDefs = [
            {
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
                maxWidth: 110, resizable: true
            },
            { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
            { headerName: 'FileCode', field: 'fileCode', filter: true, sorting: true, resizable: true },
        ];
    }
    ngOnInit() {
        this.bindItemFormControls();
        this.initialItemApiCalls();
    }
    bindItemFormControls() {
        this.itemForm = this.formBuilder.group({
            'accountId': this.selectedAccountId,
            'exId': [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'fileCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'id': [0]
        });
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit " data-action="edit">edit </button>
                    <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    close() {
        this.dialogRef.close();
    }
    initialItemApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([this._masterService.getExchangeName()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
            this.exchangeList = response[0];
            this.filterExchangeList = response[0];
        })).subscribe(res => {
        });
        if (this.selectedAccountId) {
            this.getInterestList();
        }
    }
    handleTabChange(event) {
        if (event.index === 3) { // Assuming "Interest" tab has index 1
            // Make your API calls here
            console.log('Interest tab clicked, triggering API calls...');
        }
    }
    editInterestItem(id) {
        this._masterService.getFileCodeId(id).subscribe((res) => {
            this.itemForm.get('accountId').setValue(this.selectedAccountId);
            this.itemForm.get('exId').setValue(res.exId);
            this.itemForm.get('fileCode').setValue(res.fileCode);
            this.itemForm.get('id').setValue(res.id);
        });
    }
    getInterestList() {
        this._masterService.getFileCodeList(this.selectedAccountId).subscribe((results) => {
            this.interestMasterList = results;
        });
    }
    onItemSubmit(values) {
        if (this.selectedAccountId == 0) {
            const dialogRef = this.dialog.open(src_app_Forms_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
                data: {
                    message: 'Please select or save account to save FileCode.',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
        }
        else {
            var body = this.itemForm.value;
            if (this.itemForm.valid) {
                //const body = JSON.stringify(addFormData);
                this._masterService.saveAcFileCode(body).subscribe(result => {
                    console.log("result", result);
                    this.getInterestList();
                    this.resetForm(this.itemForm);
                    this.snackBar.open("FileCode details saved sucessfully", "Success", {
                        duration: 3000,
                    });
                }, err => {
                    console.log(err);
                });
            }
        }
    }
    onGridClick(params) {
        if (params.event.target.dataset.action == "edit") {
            this.editInterestItem(params.data.id);
        }
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
                    this._masterService.deleteAcFileCode(params.data.id).subscribe((res) => {
                        this.getInterestList();
                        this.showToaster('Deleted Successfully.');
                    });
                }
            });
        }
    }
    showToaster(message) {
        this.snackBar.open(message, "Success", {
            duration: 3000,
        });
    }
    /* to filter select account dropdown*/
    onInputExchangeChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filterExchangeList = this.exchangeList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filterExchangeList = [...this.exchangeList];
        }
    }
    resetForm(myForm) {
        myForm.reset();
        myForm.get('id').setValue(0);
        Object.keys(myForm.controls).forEach(key => {
            myForm.get(key).setErrors(null);
        });
    }
}
FileCodeTabComponent.ɵfac = function FileCodeTabComponent_Factory(t) { return new (t || FileCodeTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_4__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar)); };
FileCodeTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FileCodeTabComponent, selectors: [["app-file-code-tab"]], inputs: { selectedAccountId: "selectedAccountId" }, decls: 29, vars: 9, consts: [["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "50", "fxFlex.sm", "50"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Exchange", "panelClass", "custom-select-panel", "formControlName", "exId"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Type", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "FileCode", "formControlName", "fileCode", "type", "text"], [4, "ngIf"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "250px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"], [3, "value"]], template: function FileCodeTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function FileCodeTabComponent_Template_form_ngSubmit_0_listener() { return ctx.onItemSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "h3")(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "mat-form-field", 5)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Select Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-select", 6, 7)(13, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function FileCodeTabComponent_Template_input_input_13_listener($event) { return ctx.onInputExchangeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, FileCodeTabComponent_mat_option_15_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 3)(17, "mat-form-field", 11)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "FileCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, FileCodeTabComponent_mat_error_21_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 14)(23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FileCodeTabComponent_Template_button_click_23_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17)(28, "ag-grid-angular", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function FileCodeTabComponent_Template_ag_grid_angular_cellClicked_28_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filterExchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.fileCode.errors == null ? null : ctx.itemForm.controls.fileCode.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.interestMasterList)("pagination", true)("columnDefs", ctx.columnItemDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLWNvZGUtdGFiLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5942:
/*!************************************************************************************************!*\
  !*** ./src/app/Forms/Master/account/account-dialog/self-share-tab/self-share-tab.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelfShareTabComponent": () => (/* binding */ SelfShareTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/common-utility */ 70556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../master.service */ 60808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master-second.service */ 8703);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ag-grid-angular */ 79771);





















function SelfShareTabComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", exchange_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", exchange_r6.name, " ");
} }
function SelfShareTabComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applyOn_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", applyOn_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", applyOn_r7.name, " ");
} }
function SelfShareTabComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "DeliveryRate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SelfShareTabComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", account_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", account_r8.name, " ");
} }
class SelfShareTabComponent {
    constructor(_masterService, dialogRef, formBuilder, _appService, _masterSeconedService, dialog, snackBar) {
        this._masterService = _masterService;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this._appService = _appService;
        this._masterSeconedService = _masterSeconedService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.accountSelfShareList = [];
        this.agGridOptions = {
            defaultColDef: {
                filter: true,
                flex: 1,
                sortable: true,
                wraptext: true,
                resizable: true
            }
        };
        //self share list defination
        this.columnDefs = [
            {
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80,
                maxWidth: 110, resizable: true
            },
            { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
            { headerName: 'ContraAccount', field: 'contraName', filter: true, sorting: true, resizable: true },
            { headerName: 'FromDt', field: 'fromDtString', filter: true, sorting: true, resizable: true },
            { headerName: 'ToDt', field: 'toDtString', filter: true, sorting: true, resizable: true },
            { headerName: 'ApplyOn', field: 'applyOnName', filter: true, sorting: true, resizable: true },
            { headerName: 'Rate', field: 'rate', filter: true, sorting: true, resizable: true, valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.intradayRate), type: 'rightAligned' },
        ];
    }
    ngOnInit() {
        this.bindacSelfShareFormControls();
        this.initialApiCalls();
    }
    bindacSelfShareFormControls() {
        this.acSelfShareForm = this.formBuilder.group({
            'accountId': [0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            'contraId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            'exId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            'rate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            'applyOn': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            'fromDt': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            'toDt': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            'id': [0],
        });
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-edit " data-action="edit">edit </button>
                    <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    close() {
        this.dialogRef.close();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([this._masterService.getExchangeName(), this._masterService.getAccount(), this._masterService.getApplyOnFileShareDDL(),]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(response => {
            this.exchangeList = response[0];
            this.acList = response[1];
            this.applyOnFileShare = response[2];
        })).subscribe(res => {
        });
        if (this.selectedAccountId) {
            this.getAccountSelfShareList();
        }
    }
    handleTabChange(event) {
        if (event.index === 3) { // Assuming "Interest" tab has index 1
            // Make your API calls here
            console.log('Interest tab clicked, triggering API calls...');
        }
    }
    getAccountSelfShareList() {
        this._masterService.getAccountSelfShareList(this.selectedAccountId).subscribe((results) => {
            this.accountSelfShareList = results;
        });
    }
    onSelfShare(values) {
        if (this.selectedAccountId == 0) {
            const dialogRef = this.dialog.open(src_app_Forms_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
                data: {
                    message: 'Please select or save account to save account tax',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
        }
        else {
            this.acSelfShareForm.controls['rate'].setValue(Number(this.acSelfShareForm.get('rate').value));
            this.acSelfShareForm.controls['accountId'].setValue(this.selectedAccountId);
            var body = this.acSelfShareForm.value;
            if (this.acSelfShareForm.valid) {
                //const body = JSON.stringify(addFormData);
                this._masterService.saveAccountSelfShare(body).subscribe(result => {
                    console.log("result", result);
                    this.snackBar.open("Self Share details saved sucessfully.", "Success", {
                        duration: 3000,
                    });
                    // this.dialogRef.close();
                    this.getAccountSelfShareList();
                    this.resetForm(this.acSelfShareForm);
                }, err => {
                    console.log(err);
                });
            }
        }
    }
    bindSelfShareFormInEditMode(res) {
        this.acSelfShareForm.setValue({
            'exId': res.exId,
            'rate': src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(res.rate),
            'fromDt': res.fromDt,
            'toDt': res.toDt,
            'id': res.id,
            'applyOn': res.applyOn,
            'contraId': res.contraId,
            'accountId': res.accountId
        });
    }
    //account Self share clicked 
    onSelfShareClick(params) {
        if (params.event.target.dataset.action == "edit") {
            this._masterService.getAccountSelfShareEdit(params.data.id).subscribe((res) => {
                this.bindSelfShareFormInEditMode(res);
            });
        }
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
                    this._masterService.deleteAccountSelfShare(params.data.id).subscribe((res) => {
                        this.getAccountSelfShareList();
                        if (res.isSuccess) {
                            this.showToaster(res.message);
                        }
                        else {
                            this.showToaster(res.message, true);
                        }
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
    resetForm(myForm) {
        myForm.reset();
        myForm.get('id').setValue(0);
        Object.keys(myForm.controls).forEach(key => {
            myForm.get(key).setErrors(null);
        });
    }
}
SelfShareTabComponent.ɵfac = function SelfShareTabComponent_Factory(t) { return new (t || SelfShareTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_5__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar)); };
SelfShareTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SelfShareTabComponent, selectors: [["app-self-share-tab"]], inputs: { selectedAccountId: "selectedAccountId" }, decls: 51, vars: 15, consts: [["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "tab-tax-details-parent", "tab-party-details-parent"], [1, "white-block", "pb-0"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Exchange", "formControlName", "exId"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "14", "fxFlex.sm", "50"], ["appearance", "outline"], ["matInput", "", "formControlName", "fromDt", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "To", "formControlName", "toDt", 3, "matDatepicker"], ["picker2", ""], ["fxFlex", "100", "fxFlex.gt-sm", "13", "fxFlex.sm", "50"], ["placeholder", "Select value", "formControlName", "applyOn"], ["matInput", "", "autocomplete", "off", "placeholder", "Rate", "formControlName", "rate", "type", "number"], [4, "ngIf"], ["fxFlex", "100", "fxFlex.gt-sm", "30", "fxFlex.sm", "50"], ["placeholder", "Select Exchange", "formControlName", "contraId"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "250px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked"], [3, "value"]], template: function SelfShareTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SelfShareTabComponent_Template_form_ngSubmit_0_listener() { return ctx.onSelfShare(ctx.acSelfShareForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "h3")(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Self Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3)(7, "mat-form-field", 4)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SelfShareTabComponent_mat_option_11_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 7)(13, "mat-form-field", 8)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 9)(17, "mat-datepicker-toggle", 10)(18, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 7)(21, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 12)(23, "mat-datepicker-toggle", 10)(24, "mat-datepicker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 14)(27, "mat-form-field", 4)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Apply On");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, SelfShareTabComponent_mat_option_31_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 7)(33, "mat-form-field", 8)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, SelfShareTabComponent_mat_error_37_Template, 2, 0, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 18)(39, "mat-form-field", 4)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Contra Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, SelfShareTabComponent_mat_option_43_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 20)(45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SelfShareTabComponent_Template_button_click_45_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 23)(50, "ag-grid-angular", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cellClicked", function SelfShareTabComponent_Template_ag_grid_angular_cellClicked_50_listener($event) { return ctx.onSelfShareClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.acSelfShareForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.applyOnFileShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.acSelfShareForm.controls.rate.errors == null ? null : ctx.acSelfShareForm.controls.rate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.acList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.acSelfShareForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowData", ctx.accountSelfShareList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxmLXNoYXJlLXRhYi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 77266:
/*!***********************************************************!*\
  !*** ./src/app/Forms/Master/account/account.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _shared_common_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/common-utility */ 70556);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _account_dialog_add_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-dialog/add-account.component */ 63736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ 79771);













class AccountComponent {
    constructor(appSettings, snackBar, _masterService, dialog) {
        this.appSettings = appSettings;
        this.snackBar = snackBar;
        this._masterService = _masterService;
        this.dialog = dialog;
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
                resizable: true,
            }
        };
        this.columnDefs = [
            {
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 60,
                maxWidth: 90, resizable: false, filter: false
            },
            { headerName: 'Code', field: 'shortCode', },
            { headerName: 'Name', field: 'name', flex: 2 },
            { headerName: 'Opbal', field: 'openingBal', flex: 1, valueFormatter: params => Number(_shared_common_utility__WEBPACK_IMPORTED_MODULE_0__.CommonUtility.formatNumber(params.data.openingBal)).toFixed(2), type: 'rightAligned' },
            { headerName: 'PhoneNo', field: 'PhoneNo', flex: 1 },
            { headerName: 'Head', field: 'acHead', flex: 1 },
            { headerName: 'Group', field: 'acGroup' },
            { headerName: 'CreatedDate', field: 'createdDateString' },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getAccountList();
    }
    onGridReady(params) {
        /*  params.api.sizeColumnsToFit();*/
    }
    onActivate(event) {
        console.log('Activate Event', event);
    }
    getAccountList() {
        this._masterService.getAccounts().subscribe((results) => {
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
        eGui.innerHTML = `<button class="material-icons action-button-edit " data-action="edit">edit </button>
                      <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    onGridClick(params) {
        if (params.event.target.dataset.action == "edit") {
            this._masterService.getAccountById(params.data.id).subscribe((res) => {
                console.log(res);
                this.openUserDialog(res);
            });
        }
        if (params.event.target.dataset.action == "delete") {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
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
                    this._masterService.deleteAccountById(params.data.id).subscribe((res) => {
                        this.getAccountList();
                        if (res.isSuccess) {
                            this.showToaster(res.message);
                        }
                        else {
                            this.showToaster(res.message, true);
                        }
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
    openUserDialog(user) {
        let dialogRef = this.dialog.open(_account_dialog_add_account_component__WEBPACK_IMPORTED_MODULE_2__.AddAccountComponent, {
            data: user
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getAccountList();
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
AccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-blank"]], viewQuery: function AccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 13, vars: 5, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "primary", 1, "delete-slab", "icon-btn"], [1, "material-icons-outlined"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "520px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked", "gridReady"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon")(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " file_download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_7_listener() { return ctx.openUserDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Add Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5)(12, "ag-grid-angular", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function AccountComponent_Template_ag_grid_angular_cellClicked_12_listener($event) { return ctx.onGridClick($event); })("gridReady", function AccountComponent_Template_ag_grid_angular_gridReady_12_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.accountList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular], styles: [".cell-wrap-text[_ngcontent-%COMP%] {\r\n  white-space: normal !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VsbC13cmFwLXRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 42151:
/*!*******************************************************!*\
  !*** ./src/app/Forms/Master/account/account.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Account": () => (/* binding */ Account)
/* harmony export */ });
class Account {
}


/***/ }),

/***/ 27588:
/*!****************************************************************************************!*\
  !*** ./src/app/Forms/Master/branch/add-branch-account/add-branch-account.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBranchAccountComponent": () => (/* binding */ AddBranchAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_confirmation_account_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/confirmation-account-dialog.component */ 32197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ag-grid-angular */ 79771);



















function AddBranchAccountComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Branch Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddBranchAccountComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r8.name, " ");
} }
function AddBranchAccountComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", option_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r9.name, " ");
} }
function AddBranchAccountComponent_mat_error_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Chat Id is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddBranchAccountComponent {
    constructor(snackBar, formBuilder, dialog, data, _masterService, dialogRef) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.data = data;
        this._masterService = _masterService;
        this.dialogRef = dialogRef;
        this.accountList = [];
        this.branchIDAccountList = [];
        this.isRowSelected = false;
        this.showInReport = false;
        this.filteredHeadList = [];
        this.agGridOptions = {
            suppressRowHoverHighlight: true,
        };
        this.columnDefsSelectAc = [{
                headerName: 'Select account',
                children: [
                    {
                        headerName: '', editable: false, width: 5, minwidth: 5, maxwidth: 5, resizable: false, checkboxSelection: true, headerCheckboxSelection: true,
                    },
                    { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true, flex: 1 },
                ]
            }
        ];
        this.columnDefs = [{
                headerName: 'Added account list',
                children: [
                    {
                        headerName: '', editable: false, width: 5, minwidth: 5, maxwidth: 5, resizable: false, checkboxSelection: true, headerCheckboxSelection: true,
                    },
                    { headerName: 'Account', field: 'account', filter: true, sorting: true, resizable: true, flex: 1 },
                    { headerName: 'show In Report', field: 'showInReport', filter: false, sorting: false, resizable: true, flex: 1 },
                    { headerName: 'is Party MTM', field: 'isPartyMTM', filter: false, sorting: false, resizable: true, flex: 1 }
                ]
            }
        ];
        this.selectedBranchID = data.branchID;
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
    ngOnInit() {
        this.bindFormControls();
        this.getBranchAccountIDs();
        this.getAccounts();
        this.getApiData();
    }
    actionCellRenderer(params) {
        let eGui = document.createElement("div");
        let editingCells = params.api.getEditingCells();
        let isCurrentRowEditing = editingCells.some((cell) => {
            return cell.rowIndex === params.node.rowIndex;
        });
        eGui.innerHTML = `<button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
        return eGui;
    }
    onGridReady(event) { this.gridApi = event.api; }
    onGridReadySelectAc(event) { this.gridApiSelectAc = event.api; }
    getBranchAccountIDs() {
        this._masterService.getAccountsAddedinBranch(this.selectedBranchID).subscribe((res) => {
            this.branchIDAccountList = res;
        });
    }
    getAccounts() {
        this._masterService.getAccountsForBranch(this.selectedBranchID).subscribe((res) => {
            this.accountList = res;
        });
    }
    getApiData() {
        if (this.selectedBranchID) {
            this._masterService.getBranchId(this.selectedBranchID).subscribe((res) => {
                this.branchForm.patchValue({
                    name: res.name
                });
            });
            this.getBranchAccountIDs();
        }
    }
    checkSelectedRowSelectAc(event) {
        var selectedRow = this.gridApiSelectAc.getSelectedRows();
        if (selectedRow.length > 0) {
            this.isRowSelected = true;
        }
        else {
            this.isRowSelected = false;
        }
    }
    checkSelectedRow(event) {
        var selectedRow = this.gridApi.getSelectedRows();
        if (selectedRow.length > 0) {
            this.isRowSelected = true;
        }
        else {
            this.isRowSelected = false;
        }
    }
    onSubmitFromDialog(checked, MTM) {
        var selectAccount = this.gridApiSelectAc.getSelectedRows();
        const body = {
            dropDownVMs: selectAccount,
            BranchId: this.selectedBranchID,
            showInReport: checked,
            isPartyMTM: MTM
        };
        this._masterService.addBranchAccount(body).subscribe(result => {
            this.getBranchAccountIDs();
        });
    }
    selectAccounts() {
        var dialogRef = this.dialog.open(src_app_Forms_Dialog_confirmation_dialog_confirmation_account_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationAccountDialog, {
            data: {
                message: 'Please select option',
                content: ``,
                buttonText: {
                    ok: 'Submit',
                    cancel: 'Cancel'
                }
            }
        });
        dialogRef.componentInstance.submitClicked.subscribe((res) => {
            debugger;
            this.onSubmitFromDialog(res.checked, res.MTM);
        });
    }
    removeAccounts() {
        var selectAccount = this.gridApi.getSelectedRows();
        const body = {
            dropDownVMs: selectAccount,
            BranchId: this.selectedBranchID
        };
        this._masterService.deleteBranchAccount(body).subscribe(res => {
            /* this.selectedBranchID = result.id;*/
            if (res.isSuccess) {
                this.showToaster(res.message);
                this.getBranchAccountIDs();
            }
            else {
                this.showToaster(res.message, true);
            }
        });
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([this._masterService.getAccount()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            this.filteredHeadList = response[0];
            this.accountList = response[0];
        })).subscribe(res => {
        });
    }
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredHeadList = this.accountList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filteredHeadList = [...this.accountList];
        }
    }
    bindFormControls() {
        this.branchForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'headId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'contraAcId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'chatid': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            // 'id': [this.selectedBranchID]
            'id': [0]
        });
        this.accountForm = this.formBuilder.group({
            'accountIds': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
        this.initialApiCalls();
    }
    onSubmit(values) {
        var h = this.gridApi.getSelectedRows();
        var body = this.branchForm.value;
        if (this.branchForm.valid) {
            this._masterService.saveBranch(body).subscribe(result => {
                this.dialogRef.close();
                this.selectedBranchID = result.id;
            });
        }
    }
    onAccountSubmit(values) {
        if (!this.selectedBranchID) {
            alert('Please save branch');
            return;
        }
        var body = this.accountForm.value;
        console.log(body);
        const reqObj = {
            "branchId": this.selectedBranchID,
            "accountIds": body.accountIds.join()
        };
        if (this.accountForm.valid) {
            this._masterService.addBranchAccount(reqObj).subscribe(result => {
                console.log("result", result);
                this.getBranchAccountIDs();
            });
        }
    }
    close() {
        this.dialogRef.close();
    }
}
AddBranchAccountComponent.ɵfac = function AddBranchAccountComponent_Factory(t) { return new (t || AddBranchAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_1__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef)); };
AddBranchAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddBranchAccountComponent, selectors: [["app-add-account"]], decls: 67, vars: 20, consts: [[1, "heading", "mb-10"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["label", "Branch"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "tab-party-details-parent"], [1, "white-block", "pb-0"], ["fxFlex", "100", "fxFlex.gt-sm", "33.33", "fxFlex.sm", "33.33"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "item Name", "formControlName", "name", "type", "text"], [4, "ngIf"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Head", "panelClass", "custom-select-panel", "formControlName", "headId"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Head", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Select Contra Id", "panelClass", "custom-select-panel", "formControlName", "contraAcId"], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Contra Id", 1, "milti-search-box", 3, "input"], ["matInput", "", "autocomplete", "off", "placeholder", "Chat Id", "formControlName", "chatid", "type", "text"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], ["label", "Account"], [1, "row", "branch-account"], ["fxFlex", "40"], ["headerHeight", "34", 1, "ag-theme-material", "mt-2", 2, "height", "300px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "rowSelection", "rowMultiSelectWithClick", "defaultColDef", "gridReady", "selectionChanged"], ["fxFlex", "15", 1, "text-center"], [1, "pt-10", "mb-10"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], ["fxFlex", "45"], [3, "value"]], template: function AddBranchAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddBranchAccountComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-tab-group")(7, "mat-tab", 3)(8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddBranchAccountComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(ctx.branchForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "h3")(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7)(15, "mat-form-field", 8)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddBranchAccountComponent_mat_error_19_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7)(21, "div", 11)(22, "mat-form-field", 12)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Select Head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-select", 13, 14)(27, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddBranchAccountComponent_Template_input_input_27_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AddBranchAccountComponent_mat_option_29_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 7)(31, "div", 11)(32, "mat-form-field", 12)(33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Contra Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-select", 18, 14)(37, "input", 19, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function AddBranchAccountComponent_Template_input_input_37_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, AddBranchAccountComponent_mat_option_39_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 7)(41, "mat-form-field", 8)(42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Chat Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, AddBranchAccountComponent_mat_error_45_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 21)(47, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddBranchAccountComponent_Template_button_click_47_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-tab", 24)(52, "div", 25)(53, "div", 26)(54, "ag-grid-angular", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gridReady", function AddBranchAccountComponent_Template_ag_grid_angular_gridReady_54_listener($event) { return ctx.onGridReadySelectAc($event); })("selectionChanged", function AddBranchAccountComponent_Template_ag_grid_angular_selectionChanged_54_listener($event) { return ctx.checkSelectedRowSelectAc($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 28)(56, "div", 29)(57, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddBranchAccountComponent_Template_button_click_57_listener() { return ctx.selectAccounts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-icon")(59, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " arrow_forward_ios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddBranchAccountComponent_Template_button_click_61_listener() { return ctx.removeAccounts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "mat-icon")(63, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " arrow_back_ios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 31)(66, "ag-grid-angular", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("gridReady", function AddBranchAccountComponent_Template_ag_grid_angular_gridReady_66_listener($event) { return ctx.onGridReady($event); })("selectionChanged", function AddBranchAccountComponent_Template_ag_grid_angular_selectionChanged_66_listener($event) { return ctx.checkSelectedRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.branchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.branchForm.controls.name.errors == null ? null : ctx.branchForm.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredHeadList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredHeadList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.branchForm.controls.chatid.errors == null ? null : ctx.branchForm.controls.chatid.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.branchForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rowData", ctx.accountList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefsSelectAc)("rowSelection", "multiple")("rowMultiSelectWithClick", true)("defaultColDef", ctx.agGridOptions.defaultColDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rowData", ctx.branchIDAccountList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("rowSelection", "multiple")("rowMultiSelectWithClick", true)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTab, ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__.AgGridAngular], styles: [".delete-icon[_ngcontent-%COMP%] {\n  top: 0.75rem;\n}\n\n.branch-account[_ngcontent-%COMP%] {\n  width: 61.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1icmFuY2gtYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUoiLCJmaWxlIjoiYWRkLWJyYW5jaC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZS1pY29uIHtcclxuICAgIHRvcDogMC43NXJlbTtcclxufVxyXG4uYnJhbmNoLWFjY291bnQge1xyXG4gICAgd2lkdGg6IDYxLjg3NXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 37523:
/*!*********************************************************!*\
  !*** ./src/app/Forms/Master/branch/branch.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BranchComponent": () => (/* binding */ BranchComponent)
/* harmony export */ });
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _add_branch_account_add_branch_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-branch-account/add-branch-account.component */ 27588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ 79771);












class BranchComponent {
    constructor(snackBar, appSettings, _appService, dialog, _masterService) {
        this.snackBar = snackBar;
        this.appSettings = appSettings;
        this._appService = _appService;
        this.dialog = dialog;
        this._masterService = _masterService;
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
        };
        this.columnDefs = [
            {
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, resizable: true, filter: false
            },
            { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
            { headerName: 'Head', field: 'headId', filter: true, sorting: true, resizable: true },
            { headerName: 'Contra Id', field: 'contraAcId', filter: true, sorting: true, resizable: true },
            { headerName: 'Chat Id', field: 'chatId', filter: true, sorting: true, resizable: true }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getLoadData();
    }
    getLoadData() {
        this._masterService.getBranchList().subscribe((response) => { this.slabList = response; });
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
    openAccountDialog(selectedBranchId) {
        let dialogRef = this.dialog.open(_add_branch_account_add_branch_account_component__WEBPACK_IMPORTED_MODULE_1__.AddBranchAccountComponent, {
            data: {
                branchID: selectedBranchId,
            }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getLoadData();
        });
    }
    onGridReady(event) { }
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
            this.openAccountDialog(params.data.id);
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
                    this._masterService.deleteBranch(params.data.id).subscribe((res) => {
                        if (res.isSuccess) {
                            this.getLoadData();
                            this.showToaster(res.message);
                        }
                        else {
                            this.showToaster(res.message, true);
                        }
                    });
                }
            });
        }
    }
}
BranchComponent.ɵfac = function BranchComponent_Factory(t) { return new (t || BranchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService)); };
BranchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BranchComponent, selectors: [["app-branch"]], decls: 11, vars: 5, consts: [[1, "row"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "mt-2"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked", "gridReady"]], template: function BranchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BranchComponent_Template_button_click_5_listener() { return ctx.openAccountDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Add Branch ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5)(10, "ag-grid-angular", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function BranchComponent_Template_ag_grid_angular_cellClicked_10_listener($event) { return ctx.onGridClick($event); })("gridReady", function BranchComponent_Template_ag_grid_angular_gridReady_10_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.slabList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 79134:
/*!***********************************************************************************************!*\
  !*** ./src/app/Forms/Master/brokerage-setup/add-setup-details/add-setup-details.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSetupDetailsComponent": () => (/* binding */ AddSetupDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);

















function AddSetupDetailsComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add Brokerage\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddSetupDetailsComponent_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Modify Brokerage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddSetupDetailsComponent_ng_template_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Brokerage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddSetupDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddSetupDetailsComponent_ng_template_1_h2_0_Template, 2, 0, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddSetupDetailsComponent_ng_template_1_h2_1_Template, 2, 0, "h2", 22);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isEditMode == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isEditMode == 2);
} }
function AddSetupDetailsComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
function AddSetupDetailsComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
} }
function AddSetupDetailsComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "DeliveryBrokeRate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddSetupDetailsComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "IntraDayBrokeRate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddSetupDetailsComponent {
    constructor(datePipe, formBuilder, dialogRef, data, _appService) {
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        this.salbId = data.slabId;
        this.parentData = data;
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'applyOn': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'applyOnQty': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'deliveryBrokRate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'intradayBrokRate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'intradaySingleSideonly': [false],
            'id': [0],
        });
        this.initialApiCalls();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([this._appService.getExchangeName(), this._appService.getInstrumentList(), this._appService.getItemListDrp(),
            this._appService.getApplyOnQtyDDL(),
            this._appService.getApplyOnDDL(),
            this._appService.getAccount(),
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            this.exchangeList = response[0];
            this.instrumentList = response[1];
            this.itemList = response[2];
            this.applyOnQtyList = response[3];
            this.applyOnList = response[4];
            this.accountList = response[5];
        })).subscribe(res => {
        });
    }
    ngOnInit() {
        this.bindFormControls();
        this.isEditMode = this.parentData.isEditMode;
        if (this.parentData.isEditMode === 2 && this.parentData.editParms) {
            this.getSelectedSlabDetailsInfo(this.parentData.editParms);
        }
    }
    getSelectedSlabDetailsInfo(editParms) {
        this.itemForm.patchValue({
            applyOn: editParms.applyOn,
            applyOnQty: editParms.applyOnQty,
            deliveryBrokRate: editParms.deliveryBrokRate,
            intradayBrokRate: editParms.intradayBrokRate,
            intradaySingleSideonly: editParms.intradaySingleSideonly
        });
    }
    close() {
        this.dialogRef.close();
    }
    onSubmit(values) {
        console.log(values);
        var body = this.itemForm.value;
        console.log(body);
        body.slabId = this.salbId;
        body.id = this.parentData.isEditMode;
        body.accounts = this.parentData.accountIds.filter((val) => val != -1);
        ;
        body.fromDate = this.datePipe.transform(this.parentData.fromDt, 'yyyy-MM-dd');
        body.toDate = this.datePipe.transform(this.parentData.toDt, 'yyyy-MM-dd');
        body.instrumentType = this.parentData.instrumentType;
        body.itemGroupId = this.parentData.itemGroupIds;
        body.higherSideOnly = false;
        if (this.itemForm.valid) {
            //const body = JSON.stringify(addFormData);
            if (this.parentData.isEditMode === 2) {
                body.id = this.parentData.editParms.id;
                this._appService.updateSingleBrokerage(body).subscribe(result => {
                    this.dialogRef.close();
                });
            }
            else {
                this._appService.saveBrokerageSetup(body).subscribe(result => {
                    console.log("result", result);
                    this.dialogRef.close();
                });
            }
        }
    }
}
AddSetupDetailsComponent.ɵfac = function AddSetupDetailsComponent_Factory(t) { return new (t || AddSetupDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
AddSetupDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddSetupDetailsComponent, selectors: [["app-add-setup-details"]], decls: 45, vars: 8, consts: [["class", "heading", 4, "ngIf", "ngIfElse"], ["modifyEditHeading", ""], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Item", "formControlName", "applyOn"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Select Item", "formControlName", "applyOnQty"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "item Code", "formControlName", "deliveryBrokRate", "type", "number"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "item Code", "formControlName", "intradayBrokRate", "type", "number"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", 1, "pt-5", "pb-5", "pl-10"], ["formControlName", "intradaySingleSideonly"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [1, "heading"], ["class", "heading", 4, "ngIf"], [3, "value"]], template: function AddSetupDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddSetupDetailsComponent_h2_0_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddSetupDetailsComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSetupDetailsComponent_Template_a_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3)(5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddSetupDetailsComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "h3")(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Brokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "mat-form-field", 8)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "ApplyOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddSetupDetailsComponent_mat_option_18_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7)(20, "mat-form-field", 8)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "ApplyOnQTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AddSetupDetailsComponent_mat_option_24_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7)(26, "mat-form-field", 12)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "DeliveryBrokeRate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AddSetupDetailsComponent_mat_error_30_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7)(32, "mat-form-field", 12)(33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "IntraDayBrokeRate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AddSetupDetailsComponent_mat_error_36_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16)(38, "mat-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Intradaysingleside");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18)(41, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSetupDetailsComponent_Template_button_click_41_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEditMode == 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applyOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applyOnQtyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.deliveryBrokRate.errors == null ? null : ctx.itemForm.controls.deliveryBrokRate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.intradayBrokRate.errors == null ? null : ctx.itemForm.controls.intradayBrokRate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2V0dXAtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 75002:
/*!***************************************************************************!*\
  !*** ./src/app/Forms/Master/brokerage-setup/brokerage-setup.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrokerageSetupComponent": () => (/* binding */ BrokerageSetupComponent)
/* harmony export */ });
/* harmony import */ var C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _add_setup_details_add_setup_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-setup-details/add-setup-details.component */ 79134);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common-utility */ 70556);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _lock_brokerage_lock_brokerage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock-brokerage/lock-brokerage.component */ 42439);
/* harmony import */ var _view_item_group_view_item_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-item-group/view-item-group.component */ 54731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../master-second.service */ 8703);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ag-grid-angular */ 79771);


























const _c0 = ["select"];
const _c1 = ["selectAccount"];

function BrokerageSetupComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r12.name, " ");
  }
}

function BrokerageSetupComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r13.name, " ");
  }
}

function BrokerageSetupComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r14.name, " ");
  }
}

function BrokerageSetupComponent_mat_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const exchange_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", exchange_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", exchange_r15.name, " ");
  }
}

class BrokerageSetupComponent {
  constructor(datePipe, snackBar, appSettings, _appService, dialog, _masterService, _masterSecondService) {
    this.datePipe = datePipe;
    this.snackBar = snackBar;
    this.appSettings = appSettings;
    this._appService = _appService;
    this.dialog = dialog;
    this._masterService = _masterService;
    this._masterSecondService = _masterSecondService;
    this.brokeragesetupList = [];
    this.branchAllSellected = false;
    this.agGridOptions = {
      defaultColDef: {
        filter: true,
        flex: 1,
        sortable: true,
        wraptext: true,
        resizable: true,
        minWidth: 100
      },
      suppressRowHoverHighlight: true //suppressSizeToFit: true,

    };
    this.columnDefs = [{
      headerName: 'Action',
      field: 'fileIcon',
      cellRenderer: this.actionCellRenderer,
      resizable: true,
      filter: false
    }, {
      headerName: 'ApplyOn',
      field: 'applyOnName',
      filter: true,
      sorting: true,
      resizable: true
    }, {
      headerName: 'Apply OnQty',
      field: 'applyOnQtyName',
      filter: true,
      sorting: true,
      resizable: true
    }, {
      field: 'Intraday BrokRate',
      headerName: 'IntradayBrokRate',
      filter: true,
      sorting: true,
      resizable: true,
      valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_3__.CommonUtility.formatNumber(params.data.intradayBrokRate)
    }, {
      headerName: 'Delivery BrokRate',
      field: 'deliveryBrokRate',
      filter: true,
      sorting: true,
      resizable: true,
      valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_3__.CommonUtility.formatNumber(params.data.deliveryBrokRate)
    },
    /*{ headerName: 'HigherSide Only', minWidth: 120, maxWidth: 120, field: 'higherSideOnly', filter: true, sorting: true, resizable: true },*/
    {
      headerName: 'Instrument',
      field: 'instrumentType',
      filter: true,
      sorting: true,
      resizable: true
    },
    /*    { headerName: 'IntradaySingleSideOnly', field: 'intradaySingleSideOnly', filter: true, sorting: true, resizable: true },*/
    {
      headerName: 'FromDT',
      field: 'fromDT',
      filter: true,
      sorting: true,
      resizable: true
    }, {
      headerName: 'ToDT',
      field: 'toDT',
      filter: true,
      sorting: true,
      resizable: true
    }];
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.fetchDropdownData();
    this.getBrokerageSetupList();
  }

  onGridReady(event) {}

  getBrokerageSetupList() {
    if (this.areRequiredValuesSelected()) {
      var accountIds = this.accountIds.filter(val => val != -1);
      var req = {
        "itemGroupId": this.itemGroupIds,
        "accounts": accountIds,
        "fromDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
        "toDate": this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
        "instrumentType": this.instrumentType
      };

      this._appService.getBrokerageSetupList(req).subscribe(results => {
        this.searchedData = req;
        this.brokeragesetupList = results.data;
      });
    }
  }

  getBrokerageAddValidation() {
    var _this = this;

    return (0,C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accountIds = _this.accountIds.filter(val => val != "-1");

      const req = {
        itemGroupId: _this.itemGroupIds,
        accounts: accountIds,
        fromDate: _this.datePipe.transform(_this.fromDt, 'yyyy-MM-dd'),
        toDate: _this.datePipe.transform(_this.toDt, 'yyyy-MM-dd'),
        instrumentType: _this.instrumentType
      };

      try {
        const results = yield _this._appService.getBrokerageAddValidation(req).toPromise();

        if (results.message) {
          _this.showToaster(results.message);

          _this.searchedData = req;
          _this.brokeragesetupList = results.data;
          return results.message;
        } else {
          return results.message;
        }
      } catch (error) {
        // Handle error here
        console.error('Error during validation:', error);
        return '';
      }
    })();
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError ? 6000 : 3000;
    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass
    });
  }

  areRequiredValuesSelected() {
    return this.accountIds && this.itemGroupIds && this.instrumentType && this.fromDt && this.toDt;
  }

  fetchDropdownData() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([this._masterService.getBranchDDLList(), this._masterService.getInstrumentList(), this._masterService.getAccount(), this._masterSecondService.getItemGroupNameList(), this._appService.getCompany()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(response => {
      this.branchList = response[0];
      this.filteredProviders = response[0];
      this.instrumentList = response[1];
      this.instrumentList = response[1];
      this.accountList = response[2];
      this.filteredAccountList = response[2];
      this.itemGroupIdList = response[3];
      this.filteredItemGroup = response[3];
      this.companydetails = response[4];
      this.fromDt = new Date(this.companydetails[0].finBeginDt);
      this.toDt = new Date(this.companydetails[0].finEndDt);
    })).subscribe(res => {});
  }

  actionCellRenderer(params) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some(cell => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>
                      <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
    return eGui;
  }

  onInputChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredProviders = this.branchList.filter(data => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onInputItemGroupChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredItemGroup = this.itemGroupIdList.filter(data => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onInputAccountListChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredAccountList = this.accountList.filter(data => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  branchAllSelection() {
    this.branchAllSellected = true;
    var isAllChecked = this.select.options.first.selected;
    this.select.options.forEach((item, index) => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }

      if (index === this.select.options.length - 1) {
        this.onBranchChange([], true);
      }
    });
  }

  accountAllSelection() {
    var isAllChecked = this.selectAccount.options.first.selected;
    this.selectAccount.options.forEach(item => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }
    });
  }

  onKey(value) {
    this.branchList = this.search(value);
  }

  search(value) {
    let filter = value.toLowerCase();
    return this.branchList.filter(option => option.toLowerCase().startsWith(filter));
  }

  onBranchChange(event, isLastIndex) {
    if (this.branchAllSellected && !isLastIndex) {
      return;
    }

    if (this.branchIds.length < 2 && this.branchIds[0] == '-1') {
      return;
    } //event.source.options._results[1]._selected = true;
    //event.source.options._results[1]._active = true;


    if (this.branchIds) {
      this._masterService.getFilterBranchAccounts(this.branchIds).subscribe(response => {
        this.accountList = response;
        this.filteredAccountList = this.accountList;
      });
    }
  }

  addBrokerage(event) {}

  openSlabDetailsDialog(event) {
    var _this2 = this;

    return (0,C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isValid = yield _this2.getBrokerageAddValidation();

      if (isValid == '' && event === 'add') {
        const dialogRef = _this2.dialog.open(_add_setup_details_add_setup_details_component__WEBPACK_IMPORTED_MODULE_1__.AddSetupDetailsComponent, {
          data: {
            selectedSlabId: null,
            fromDt: _this2.fromDt,
            toDt: _this2.toDt,
            branchIds: _this2.branchIds,
            accountIds: _this2.accountIds,
            itemGroupIds: _this2.itemGroupIds,
            instrumentType: _this2.instrumentType,
            isEditMode: 0
          }
        });

        dialogRef.afterClosed().subscribe(user => {
          _this2.getBrokerageSetupList();
        });
      } else if (isValid !== '' && event === 'lock') {
        const dialogRef = _this2.dialog.open(_lock_brokerage_lock_brokerage_component__WEBPACK_IMPORTED_MODULE_4__.LockBrokerageComponent, {
          data: {
            selectedSlabId: null,
            fromDt: _this2.fromDt,
            toDt: _this2.toDt,
            branchIds: _this2.branchIds,
            accountIds: _this2.accountIds,
            itemGroupIds: _this2.itemGroupIds,
            instrumentType: _this2.instrumentType,
            isEditMode: 0
          }
        });

        dialogRef.afterClosed().subscribe(user => {
          _this2.getBrokerageSetupList();
        });
      }
    })();
  }

  openModifySetupDialog() {
    const dialogRef = this.dialog.open(_add_setup_details_add_setup_details_component__WEBPACK_IMPORTED_MODULE_1__.AddSetupDetailsComponent, {
      data: {
        selectedSlabId: null,
        fromDt: this.fromDt,
        toDt: this.toDt,
        branchIds: this.branchIds,
        accountIds: this.accountIds,
        itemGroupIds: this.itemGroupIds,
        instrumentType: this.instrumentType,
        isEditMode: 1
      }
    });
    dialogRef.afterClosed().subscribe(user => {
      this.getBrokerageSetupList();
    });
  }

  onFromDateChange() {
    console.log("fromDt changed:", this.fromDt);
  }

  openEditBrokerageDetails(params) {
    const dialogRef = this.dialog.open(_add_setup_details_add_setup_details_component__WEBPACK_IMPORTED_MODULE_1__.AddSetupDetailsComponent, {
      data: {
        selectedSlabId: null,
        fromDt: this.searchedData.fromDate,
        toDt: this.searchedData.toDate,
        branchIds: this.searchedData.branchIds,
        accountIds: this.searchedData.accounts,
        itemGroupIds: this.searchedData.itemGroupId,
        instrumentType: this.searchedData.instrumentType,
        isEditMode: 2,
        editParms: params
      }
    });
    dialogRef.afterClosed().subscribe(user => {
      this.getBrokerageSetupList();
    });
  }

  onGridClick(params) {
    if (params.event.target.dataset.action == "edit") {
      this.openEditBrokerageDetails(params.data);
    }

    if (params.event.target.dataset.action == "delete") {
      const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialog, {
        data: {
          message: 'Do you really want to delete this record?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });
      dialogRef.afterClosed().subscribe(confirmed => {
        if (confirmed) {
          this._masterService.deleteBrokerageSetup(params.data.id).subscribe(res => {
            if (res.isSuccess) {
              this.showToaster(res.message);
              this.getBrokerageSetupList();
            } else {
              this.showToaster(res.message, true);
            }
          });
        }
      });
    }
  }

  viewAllItemGroups() {
    let dialogRef = this.dialog.open(_view_item_group_view_item_group_component__WEBPACK_IMPORTED_MODULE_5__.ViewItemGroupComponent, {
      data: {
        id: this.itemGroupIds
      }
    });
    dialogRef.afterClosed().subscribe(user => {});
  }

}

BrokerageSetupComponent.ɵfac = function BrokerageSetupComponent_Factory(t) {
  return new (t || BrokerageSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_7__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_8__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_9__.MasterSecondService));
};

BrokerageSetupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: BrokerageSetupComponent,
  selectors: [["app-brokerage-setup"]],
  viewQuery: function BrokerageSetupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.selectAccount = _t.first);
    }
  },
  decls: 83,
  vars: 23,
  consts: [[1, "row"], [1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "15"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Branch", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange", "selectionChange"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Branch", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "placeholder", "Select Account", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["selectAccount", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Account", 1, "milti-search-box", 3, "input"], ["value", "-1", 3, "click"], ["fxFlex", "100", "fxFlex.gt-sm", "23", "fxFlex.sm", "23"], ["matTooltip", "View All Item", "matTooltipPosition", "above", 1, "info-icon", 3, "click"], ["placeholder", "Select Item Group", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Item Group", 1, "milti-search-box", 3, "input"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select InsType", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "calendar"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "To", 3, "matDatepicker", "ngModel", "ngModelChange"], ["picker2", ""], ["fxFlex", "100", "fxFlex.gt-sm", "7", "fxFlex.sm", "7"], ["mat-raised-button", "", "color", "primary", 1, "search-icon-btn", 3, "disabled", "click"], [1, "btn-group"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Lock Brokerage", "matTooltipPosition", "above", 1, "icon-btn", 3, "disabled", "click"], [1, "lock-icon"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Modify Brokerage", "matTooltipPosition", "above", 1, "icon-btn", 3, "disabled", "click"], [1, "edit-icon"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Add Brokerage", "matTooltipPosition", "above", 1, "icon-btn", 3, "disabled", "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked", "gridReady"], [3, "value"]],
  template: function BrokerageSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Select Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-select", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BrokerageSetupComponent_Template_mat_select_ngModelChange_8_listener($event) {
        return ctx.branchIds = $event;
      })("selectionChange", function BrokerageSetupComponent_Template_mat_select_selectionChange_8_listener($event) {
        return ctx.onBranchChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function BrokerageSetupComponent_Template_input_input_10_listener($event) {
        return ctx.onInputChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, BrokerageSetupComponent_mat_option_12_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "div", 4)(16, "mat-form-field", 5)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Select Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-select", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BrokerageSetupComponent_Template_mat_select_ngModelChange_19_listener($event) {
        return ctx.accountIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 13, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function BrokerageSetupComponent_Template_input_input_21_listener($event) {
        return ctx.onInputAccountListChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerageSetupComponent_Template_mat_option_click_23_listener() {
        return ctx.accountAllSelection();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Select All");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, BrokerageSetupComponent_mat_option_25_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 15)(27, "div", 3)(28, "div", 4)(29, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerageSetupComponent_Template_mat_icon_click_29_listener() {
        return ctx.viewAllItemGroups();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "info");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-form-field", 5)(32, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Select Item Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "mat-select", 17, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BrokerageSetupComponent_Template_mat_select_ngModelChange_34_listener($event) {
        return ctx.itemGroupIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "input", 18, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function BrokerageSetupComponent_Template_input_input_36_listener($event) {
        return ctx.onInputItemGroupChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, BrokerageSetupComponent_mat_option_38_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 2)(40, "div", 3)(41, "div", 4)(42, "mat-form-field", 19)(43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Instrument Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "mat-select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BrokerageSetupComponent_Template_mat_select_ngModelChange_45_listener($event) {
        return ctx.instrumentType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, BrokerageSetupComponent_mat_option_46_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 2)(48, "div", 3)(49, "div", 4)(50, "mat-form-field", 21)(51, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BrokerageSetupComponent_Template_input_ngModelChange_53_listener($event) {
        return ctx.fromDt = $event;
      })("ngModelChange", function BrokerageSetupComponent_Template_input_ngModelChange_53_listener() {
        return ctx.onFromDateChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "mat-datepicker-toggle", 23)(55, "mat-datepicker", null, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 2)(58, "div", 3)(59, "div", 4)(60, "mat-form-field", 21)(61, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function BrokerageSetupComponent_Template_input_ngModelChange_63_listener($event) {
        return ctx.toDt = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "mat-datepicker-toggle", 23)(65, "mat-datepicker", null, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 27)(68, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerageSetupComponent_Template_button_click_68_listener() {
        return ctx.getBrokerageSetupList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div", 29)(72, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerageSetupComponent_Template_button_click_72_listener() {
        return ctx.openSlabDetailsDialog("lock");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "mat-icon", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "lock");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerageSetupComponent_Template_button_click_75_listener() {
        return ctx.openModifySetupDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "mat-icon", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "exposure");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function BrokerageSetupComponent_Template_button_click_78_listener() {
        return ctx.openSlabDetailsDialog("add");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "add_to_queue");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 35)(82, "ag-grid-angular", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cellClicked", function BrokerageSetupComponent_Template_ag_grid_angular_cellClicked_82_listener($event) {
        return ctx.onGridClick($event);
      })("gridReady", function BrokerageSetupComponent_Template_ag_grid_angular_gridReady_82_listener($event) {
        return ctx.onGridReady($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](56);

      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](66);

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.branchIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredProviders);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.accountIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredAccountList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.itemGroupIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredItemGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.instrumentType);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.instrumentList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r10)("ngModel", ctx.fromDt);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r11)("ngModel", ctx.toDt);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowData", ctx.brokeragesetupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, ag_grid_angular__WEBPACK_IMPORTED_MODULE_26__.AgGridAngular],
  styles: [".mat-input-element[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.search-icon-btn[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  line-height: 2.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb2tlcmFnZS1zZXR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFFSiIsImZpbGUiOiJicm9rZXJhZ2Utc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uc2VhcmNoLWljb24tYnRuIHtcclxuICAgIGhlaWdodDogMi4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xyXG59Il19 */"]
});

/***/ }),

/***/ 42439:
/*!*****************************************************************************************!*\
  !*** ./src/app/Forms/Master/brokerage-setup/lock-brokerage/lock-brokerage.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockBrokerageComponent": () => (/* binding */ LockBrokerageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);















class LockBrokerageComponent {
    constructor(snackBar, datePipe, formBuilder, dialogRef, data, _appService) {
        this.snackBar = snackBar;
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        this.parentData = data;
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'lockBrokDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
    }
    ngOnInit() {
        this.bindFormControls();
    }
    close() {
        this.dialogRef.close();
    }
    onSubmit(values) {
        console.log(values);
        debugger;
        var body = this.itemForm.value;
        console.log(body);
        body.lockBrokDate = this.datePipe.transform(body.lockBrokDate, 'yyyy-MM-dd');
        body.id = this.parentData.isEditMode;
        body.accounts = this.parentData.accountIds.filter((val) => val != -1);
        ;
        body.fromDate = this.datePipe.transform(this.parentData.fromDt, 'yyyy-MM-dd');
        body.toDate = this.datePipe.transform(this.parentData.toDt, 'yyyy-MM-dd');
        body.instrumentType = this.parentData.instrumentType;
        body.itemGroupId = this.parentData.itemGroupIds;
        body.higherSideOnly = false;
        if (this.itemForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._appService.lockBrokerage(body).subscribe(result => {
                console.log("result", result);
                this.showToaster(result.message);
                this.dialogRef.close();
            });
        }
    }
    showToaster(message) {
        this.snackBar.open(message, "Success", {
            duration: 3000,
        });
    }
}
LockBrokerageComponent.ɵfac = function LockBrokerageComponent_Factory(t) { return new (t || LockBrokerageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
LockBrokerageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LockBrokerageComponent, selectors: [["app-lock-brokerage"]], decls: 25, vars: 4, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], [1, "dropdown-wrapper"], ["appearance", "outline"], ["matInput", "", "formControlName", "lockBrokDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["lockPicker", ""], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"]], template: function LockBrokerageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LockBrokerageComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LockBrokerageComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Loak Brokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Lock Brokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 8)(17, "mat-datepicker-toggle", 9)(18, "mat-datepicker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11)(21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LockBrokerageComponent_Template_button_click_21_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NrLWJyb2tlcmFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 54731:
/*!*******************************************************************************************!*\
  !*** ./src/app/Forms/Master/brokerage-setup/view-item-group/view-item-group.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewItemGroupComponent": () => (/* binding */ ViewItemGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../master-second.service */ 8703);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ 79771);












const _c0 = ["select"];
class ViewItemGroupComponent {
    constructor(appSettings, formBuilder, dialogRef, data, _masterService, _masterSecondService, dialog, snackBar) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._masterService = _masterService;
        this._masterSecondService = _masterSecondService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.accountAllSellected = false;
        this.itemGroupList = [];
        this.isRowSelected = false;
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
        };
        this.columnDefs = [
            { headerName: 'Exchange Name', field: 'exName', filter: true, sorting: true, resizable: true, flex: 1, },
            { headerName: 'Item Name', field: 'itemName', filter: true, sorting: true, resizable: true, flex: 1, },
        ];
        this.selectedId = data.id;
        if (data.id == null) {
            this.selectedId = 0;
        }
    }
    checkTaxSelect() {
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
    }
    /* to filter select account dropdown*/
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.accountList = this.accountList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
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
        if (this.selectedId != 0) {
            this.getItemGroupList();
        }
    }
    getItemGroupList() {
        this._masterSecondService.getItemGroupList(this.selectedId).subscribe((res) => {
            this.itemGroupList = res;
        });
    }
    ngOnInit() {
        this.initialApiCalls();
    }
    close() {
        this.dialogRef.close();
    }
}
ViewItemGroupComponent.ɵfac = function ViewItemGroupComponent_Factory(t) { return new (t || ViewItemGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_3__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar)); };
ViewItemGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViewItemGroupComponent, selectors: [["app-view-item-group"]], viewQuery: function ViewItemGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, decls: 9, vars: 5, consts: [[1, "brokerage-setup-item"], [1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], [1, "col-xl-12", "position-relative"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "240px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "gridReady"]], template: function ViewItemGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ViewItemGroupComponent_Template_a_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 3)(5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "ag-grid-angular", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("gridReady", function ViewItemGroupComponent_Template_ag_grid_angular_gridReady_8_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.itemGroupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWl0ZW0tZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 56483:
/*!********************************************************************************************!*\
  !*** ./src/app/Forms/Master/brokerage-slab/add-slab-details/add-slab-details.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSlabDetailsComponent": () => (/* binding */ AddSlabDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
















function AddSlabDetailsComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", exchange_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", exchange_r9.name, " ");
} }
function AddSlabDetailsComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
} }
function AddSlabDetailsComponent_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
} }
function AddSlabDetailsComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r12.name, " ");
} }
function AddSlabDetailsComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "IntraDayBrokeRate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddSlabDetailsComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "DeliveryBrokeRate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddSlabDetailsComponent_mat_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", exchange_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", exchange_r13.name, " ");
} }
function AddSlabDetailsComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Range1 is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddSlabDetailsComponent_mat_error_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Range2 is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddSlabDetailsComponent {
    constructor(formBuilder, dialogRef, data, _appService) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        this.salbId = data.slabId;
        this.selectedSlabDetailsId = data.selectedSlabId;
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'exchangeId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'applyOn': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'applyOnQty': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'itemId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'instrumentType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'deliveryBrokRate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'intradayBrokRate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'rateRange1': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'rateRange2': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'intradaySingleSideonly': [false],
        });
        this.initialApiCalls();
    }
    close() {
        this.dialogRef.close();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([this._appService.getExchangeName(), this._appService.getInstrumentList(), this._appService.getItemListDrp(),
            this._appService.getApplyOnQtyDDL(),
            this._appService.getApplyOnDDL()
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            this.exchangeList = response[0];
            this.instrumentList = response[1];
            this.itemList = response[2];
            this.applyOnQtyList = response[3];
            this.applyOnList = response[4];
        })).subscribe(res => {
        });
    }
    ngOnInit() {
        this.bindFormControls();
        if (this.selectedSlabDetailsId) {
            this.getSelectedSlabDetailsInfo();
        }
    }
    getSelectedSlabDetailsInfo() {
        this._appService.getBrokerageSlabId(this.selectedSlabDetailsId).subscribe((res) => {
            this.itemForm.patchValue({
                exchangeId: res.exchangeId,
                applyOn: res.applyOn,
                applyOnQty: res.applyOnQty,
                itemId: res.itemId,
                instrumentType: res.instrumentType,
                deliveryBrokRate: res.deliveryBrokRate,
                intradayBrokRate: res.intradayBrokRate,
                rateRange1: res.rateRange1,
                rateRange2: res.rateRange2,
                intradaySingleSideonly: res.intradaySingleSideonly
            });
        });
    }
    onSubmit(values) {
        console.log(values);
        var body = this.itemForm.value;
        console.log(body);
        body.slabId = this.salbId;
        if (this.selectedSlabDetailsId) {
            body.id = this.selectedSlabDetailsId;
        }
        if (this.itemForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._appService.saveBrokerageSlab(body).subscribe(result => {
                console.log("result", result);
                this.dialogRef.close();
            });
        }
    }
}
AddSlabDetailsComponent.ɵfac = function AddSlabDetailsComponent_Factory(t) { return new (t || AddSlabDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
AddSlabDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddSlabDetailsComponent, selectors: [["app-add-slab-details"]], decls: 74, vars: 11, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Tax", "formControlName", "exchangeId"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Select Item", "formControlName", "itemId"], ["placeholder", "Select Item", "formControlName", "applyOnQty"], ["placeholder", "Select Item", "formControlName", "applyOn"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "item Code", "formControlName", "intradayBrokRate", "type", "number"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "item Code", "formControlName", "deliveryBrokRate", "type", "number"], ["placeholder", "Select InsType", "formControlName", "instrumentType"], ["matInput", "", "autocomplete", "off", "placeholder", "Range2", "formControlName", "rateRange1", "type", "number"], ["matInput", "", "autocomplete", "off", "placeholder", "Range", "formControlName", "rateRange2", "type", "number"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", 1, "pt-5", "pb-5", "pl-10"], ["formControlName", "intradaySingleSideonly"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [3, "value"]], template: function AddSlabDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSlabDetailsComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddSlabDetailsComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddSlabDetailsComponent_mat_option_17_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "mat-form-field", 7)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddSlabDetailsComponent_mat_option_23_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6)(25, "mat-form-field", 7)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "ApplyOnQTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddSlabDetailsComponent_mat_option_29_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 6)(31, "mat-form-field", 7)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "ApplyOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AddSlabDetailsComponent_mat_option_35_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6)(37, "mat-form-field", 13)(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "IntraDayBrokeRate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AddSlabDetailsComponent_mat_error_41_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6)(43, "mat-form-field", 13)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "DeliveryBrokeRate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AddSlabDetailsComponent_mat_error_47_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 6)(49, "mat-form-field", 7)(50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Instrument Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, AddSlabDetailsComponent_mat_option_53_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 6)(55, "mat-form-field", 13)(56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Range1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, AddSlabDetailsComponent_mat_error_59_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 6)(61, "mat-form-field", 13)(62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Range2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, AddSlabDetailsComponent_mat_error_65_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 20)(67, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Intradaysingleside");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 22)(70, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSlabDetailsComponent_Template_button_click_70_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.itemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applyOnQtyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applyOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.intradayBrokRate.errors == null ? null : ctx.itemForm.controls.intradayBrokRate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.deliveryBrokRate.errors == null ? null : ctx.itemForm.controls.deliveryBrokRate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.instrumentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.rateRange1.errors == null ? null : ctx.itemForm.controls.rateRange1.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.rateRange2.errors == null ? null : ctx.itemForm.controls.rateRange2.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2xhYi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 14778:
/*!****************************************************************************!*\
  !*** ./src/app/Forms/Master/brokerage-slab/add-slab/add-slab.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSlabComponent": () => (/* binding */ AddSlabComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 68562);











function AddSlabComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Slab Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddSlabComponent {
    constructor(formBuilder, _masterService, dialogRef) {
        this.formBuilder = formBuilder;
        this._masterService = _masterService;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.bindFormControls();
    }
    bindFormControls() {
        this.slabForm = this.formBuilder.group({
            'Name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    onSubmit(values) {
        var body = this.slabForm.value;
        console.log(body);
        if (this.slabForm.valid) {
            this._masterService.saveBrokerageSlabName(body.Name).subscribe(result => {
                console.log("result", result);
                this.dialogRef.close();
            });
        }
    }
    close() {
        this.dialogRef.close();
    }
}
AddSlabComponent.ɵfac = function AddSlabComponent_Factory(t) { return new (t || AddSlabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
AddSlabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddSlabComponent, selectors: [["app-add-slab"]], decls: 23, vars: 3, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "item Name", "formControlName", "Name", "type", "text"], [4, "ngIf"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"]], template: function AddSlabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Slab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSlabComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddSlabComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.slabForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Master Slab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddSlabComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSlabComponent_Template_button_click_19_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.slabForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.slabForm.controls.Name.errors == null ? null : ctx.slabForm.controls.Name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.slabForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput], styles: [".white-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zbGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImFkZC1zbGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRlLWJsb2NrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ 32426:
/*!*************************************************************************!*\
  !*** ./src/app/Forms/Master/brokerage-slab/brokerage-slab.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrokerageSlabComponent": () => (/* binding */ BrokerageSlabComponent)
/* harmony export */ });
/* harmony import */ var _add_slab_add_slab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-slab/add-slab.component */ 14778);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _add_slab_details_add_slab_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-slab-details/add-slab-details.component */ 56483);
/* harmony import */ var src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/common-utility */ 70556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ag-grid-angular */ 79771);

















function BrokerageSlabComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r1.name, " ");
} }
class BrokerageSlabComponent {
    constructor(appSettings, _masterService, dialog) {
        this.appSettings = appSettings;
        this._masterService = _masterService;
        this.dialog = dialog;
        this.slabList = [];
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
            { field: 'applyOnName', headerName: 'Apply On', filter: true, sorting: true, resizable: true },
            { field: 'applyOnQtyName', headerName: 'ApplyOnQty', filter: true, sorting: true, resizable: true },
            { field: 'intradayBrokRate', headerName: 'IntradayBrokRate', filter: true, sorting: true, resizable: true, valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_3__.CommonUtility.formatNumber(params.data.intradayBrokRate), type: 'rightAligned' },
            { field: 'deliveryBrokRate', headerName: 'DeliveryBroRate', filter: true, sorting: true, resizable: true, valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_3__.CommonUtility.formatNumber(params.data.deliveryBrokRate), type: 'rightAligned' },
            { field: 'higherSideOnly', headerName: 'HigherSideOnly', cellRenderer: 'booleanCellRenderer', filter: true, sorting: true, resizable: true },
            { field: 'intradaySingleSideOnly', headerName: 'IntradaySingleSide', cellRenderer: 'booleanCellRenderer', filter: true, sorting: true, resizable: true },
            { field: 'instrumentType', headerName: 'InstrumentType', filter: true, sorting: true, resizable: true },
            { field: 'exchange', headerName: 'Exchange', filter: true, sorting: true, resizable: true },
            { field: 'item', headerName: 'Item', filter: true, sorting: true, resizable: true },
            { field: 'rateRange1', headerName: 'Range1', filter: true, sorting: true, resizable: true, valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_3__.CommonUtility.formatNumber(params.data.rateRange1), type: 'rightAligned' },
            { field: 'rateRange2', headerName: 'Range2', filter: true, sorting: true, resizable: true, valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_3__.CommonUtility.formatNumber(params.data.rateRange2), type: 'rightAligned' }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.fetchDropdownData();
    }
    fetchDropdownData() {
        this._masterService.getSlabDDL().subscribe((response) => {
            this.dropdownData = response;
            this.slabId = response[0].id;
            this.onDropdownChange();
        });
    }
    onDropdownChange() {
        if (this.slabId) {
            this._masterService.getSlabList(this.slabId).subscribe(response => {
                this.slabList = response;
            });
        }
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
    openAddSlabDialog() {
        let dialogRef = this.dialog.open(_add_slab_add_slab_component__WEBPACK_IMPORTED_MODULE_0__.AddSlabComponent);
        dialogRef.afterClosed().subscribe(user => {
            this.fetchDropdownData();
        });
    }
    openSlabDetailsDialog() {
        let dialogRef = this.dialog.open(_add_slab_details_add_slab_details_component__WEBPACK_IMPORTED_MODULE_2__.AddSlabDetailsComponent, {
            data: {
                slabId: this.slabId
            }
        });
        dialogRef.afterClosed().subscribe(user => {
            this._masterService.getSlabList(this.slabId).subscribe(response => {
                this.slabList = response;
            });
        });
    }
    openDeleteSlabDialog() {
        const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
            data: {
                message: 'Do you really want to delete this Slab?',
                buttonText: {
                    ok: 'Yes',
                    cancel: 'No'
                }
            }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
            if (confirmed) {
                this._masterService.deleteSlabMaster(this.slabId).subscribe((res) => {
                    this.fetchDropdownData();
                });
            }
        });
    }
    onGridClick(params) {
        if (params.event.target.dataset.action == "edit") {
            this.slabId = params.data.id;
            this.openSlabDetailsDialog();
        }
        if (params.event.target.dataset.action == "delete") {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
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
                    this._masterService.deleteSlabDetail(params.data.id).subscribe((res) => {
                        this.fetchDropdownData();
                    });
                }
            });
        }
    }
}
BrokerageSlabComponent.ɵfac = function BrokerageSlabComponent_Factory(t) { return new (t || BrokerageSlabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_5__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
BrokerageSlabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BrokerageSlabComponent, selectors: [["app-blank"]], decls: 29, vars: 6, consts: [[1, "row"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "mt-2"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Slab", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", 3, "click"], ["mat-raised-button", "", 1, "delete-btn", "icon-btn", "ml-15", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "icon-btn", 3, "click"], [1, "material-icons-outlined"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-balham", 2, "height", "535px", 3, "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"], [3, "value"]], template: function BrokerageSlabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-form-field", 4)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Select Slab");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function BrokerageSlabComponent_Template_mat_select_ngModelChange_7_listener($event) { return ctx.slabId = $event; })("selectionChange", function BrokerageSlabComponent_Template_mat_select_selectionChange_7_listener() { return ctx.onDropdownChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BrokerageSlabComponent_mat_option_8_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BrokerageSlabComponent_Template_button_click_9_listener() { return ctx.openAddSlabDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Add Slab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BrokerageSlabComponent_Template_button_click_13_listener() { return ctx.openDeleteSlabDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "delete_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Delete Slab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div")(18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BrokerageSlabComponent_Template_button_click_18_listener() { return ctx.openDeleteSlabDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-icon")(20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, " file_download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BrokerageSlabComponent_Template_button_click_23_listener() { return ctx.openSlabDetailsDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Add Slab Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 12)(28, "ag-grid-angular", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cellClicked", function BrokerageSlabComponent_Template_ag_grid_angular_cellClicked_28_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.slabId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.dropdownData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowData", ctx.slabList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_16__.AgGridAngular], styles: [".dropdown-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.custom-select[_ngcontent-%COMP%] {\n  width: 200px; \n  height: 36px; \n}\n\n.custom-select-panel[_ngcontent-%COMP%] {\n  max-height: 250px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb2tlcmFnZS1zbGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUEsRUFBQSwwQkFBQTtFQUNBLFlBQUEsRUFBQSwyQkFBQTtBQURKOztBQUlFO0VBQ0UsaUJBQUEsRUFBQSxrREFBQTtBQURKIiwiZmlsZSI6ImJyb2tlcmFnZS1zbGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgXHJcbiAgLmRyb3Bkb3duLXdyYXBwZXIgc2VsZWN0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMjAwcHg7IC8qIFNldCB0aGUgZGVzaXJlZCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAzNnB4OyAvKiBTZXQgdGhlIGRlc2lyZWQgaGVpZ2h0ICovXHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNlbGVjdC1wYW5lbCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDsgLyogU2V0IHRoZSBkZXNpcmVkIG1heCBoZWlnaHQgZm9yIHRoZSBzZWxlY3QgYm94ICovXHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 55422:
/*!******************************************************************************!*\
  !*** ./src/app/Forms/Master/company/company-dialog/add-company.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCompanyComponent": () => (/* binding */ AddCompanyComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);



















function AddCompanyComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r13.name, " ");
} }
function AddCompanyComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "State is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_mat_error_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_mat_error_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Pin is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_mat_error_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Unique customer id is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_mat_error_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Settlement Positing in % id is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddCompanyComponent {
    constructor(snackBar, formBuilder, dialogRef, data, _appService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        this.cityCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
        this.selectedId = data.id;
        if (data.id == null) {
            this.selectedId = 0;
        }
    }
    bindFormControls() {
        this.companyForm = this.formBuilder.group({
            'name': [],
            'address': [],
            'city': [''],
            'finBeginDt': [''],
            'finEndDt': [''],
            'state': [''],
            'phone': [''],
            'email': [''],
            'pin': [''],
            'uniqcusomerId': [''],
            'ApplyOptionsMTM': [false],
            'ApplyCashMTM': [false],
            'ApplyInvoice': [false],
            'ApplyOnlyBrokerage': [false],
            'ApplySubBrokerage': [false],
            'CheckRates': [false],
            'ShowLots': [false],
            'ApplySharing': [false],
            'ApplyDecimalQty': [false],
            'ApplyMargin': [false],
            'ApplyContractNote': [false],
            'RoundingOff': [false],
            'RateRangeEnable': [false],
            'settlementPostingInPercentage': [0],
            'id': [0]
        });
    }
    bindFilterFntoList() {
        this.filteredStates = this.stateCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(stateObj => {
            return stateObj ? this._filterStates(stateObj) : this.stateList.slice();
        }));
    }
    getCompanyInfo() {
        this._appService.getCompanyById(this.selectedId).subscribe((res) => {
            debugger;
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([this._appService.getState()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            this.stateList = response[0];
            this.bindFilterFntoList();
        })).subscribe(res => {
            //this.getValuesInEditMode();
        });
    }
    ngOnInit() {
        this._appService.getCityList().subscribe(res => {
            this.filteredCityNameList = res;
            this.cityNameList = res;
            this.bindFormControls();
            if (this.selectedId != 0) {
                this.getCompanyInfo();
            }
            else {
                this.companyForm.get('id').setValue(0);
            }
        });
    }
    onSubmit(event) {
        var body = this.companyForm.value;
        body.CityId = this.getCityId(this.cityCtrl.value);
        if (this.companyForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._appService.saveCompany(body).subscribe(result => {
                console.log("result", result);
                // this.formSubmitted = true;
                this.dialogRef.close();
            }, err => {
                this.showToaster(err.message, true);
                console.log(err);
            });
        }
    }
    onInputCityChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredCityNameList = this.cityNameList.filter((data) => {
            const prov = data.itemCode.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filteredCityNameList = [...this.cityNameList];
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
    _filterCity(value) {
        const filterValue = value.toLowerCase();
        return this.cityList.filter(state => state.item2.toLowerCase().includes(filterValue));
    }
    getCityId(name) {
        const cityObj = this.cityList?.find((city) => city.item2.toLocaleLowerCase() === name.toLocaleLowerCase());
        return cityObj?.item1;
    }
    _filterStates(value) {
        const filterValue = value.toLowerCase();
        return this.stateList.filter(state => state.name.toLowerCase().includes(filterValue));
    }
    close() {
        this.dialogRef.close();
    }
}
AddCompanyComponent.ɵfac = function AddCompanyComponent_Factory(t) { return new (t || AddCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
AddCompanyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddCompanyComponent, selectors: [["app-company-dialog"]], decls: 135, vars: 14, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "Name", "formControlName", "name", "type", "text"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "address", "formControlName", "address", "type", "text"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "50"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select City", "panelClass", "custom-select-panel", "formControlName", "city"], ["selectType", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search City", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "finBeginDt", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "formControlName", "finEndDt", 3, "matDatepicker"], ["picker2", ""], ["matInput", "", "autocomplete", "off", "placeholder", "state", "formControlName", "state", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Phone", "formControlName", "phone", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Email", "formControlName", "email", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Pin", "formControlName", "pin", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Unique customer id", "formControlName", "uniqcusomerId", "type", "text"], [1, "white-block"], [1, "tab-party-details-parent", "align-center"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", 1, "pt-5", "pb-5", "pl-10"], ["formControlName", "ApplyOptionsMTM"], ["formControlName", "ApplyCashMTM"], ["formControlName", "ApplyInvoice"], ["formControlName", "ApplyOnlyBrokerage"], ["formControlName", "ApplySubBrokerage"], ["formControlName", "CheckRates"], ["formControlName", "ShowLots"], ["formControlName", "ApplySharing"], ["formControlName", "ApplyDecimalQty"], ["formControlName", "ApplyMargin"], ["formControlName", "ApplyContractNote"], ["formControlName", "RoundingOff"], ["formControlName", "RateRangeEnable"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", 1, "pt-10"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "settlementPostingInPercentage", "type", "number"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase"], [3, "value"]], template: function AddCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCompanyComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddCompanyComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.companyForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Company Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddCompanyComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "mat-form-field", 7)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddCompanyComponent_mat_error_23_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11)(25, "div", 12)(26, "mat-form-field", 13)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Select City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-select", 14, 15)(31, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddCompanyComponent_Template_input_input_31_listener($event) { return ctx.onInputCityChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AddCompanyComponent_mat_option_33_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6)(35, "mat-form-field", 7)(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Financial Year Begin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 19)(39, "mat-datepicker-toggle", 20)(40, "mat-datepicker", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6)(43, "mat-form-field", 7)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Financial Year End");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 22)(47, "mat-datepicker-toggle", 20)(48, "mat-datepicker", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6)(51, "mat-form-field", 7)(52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, AddCompanyComponent_mat_error_55_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 6)(57, "mat-form-field", 7)(58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, AddCompanyComponent_mat_error_61_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 6)(63, "mat-form-field", 7)(64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, AddCompanyComponent_mat_error_67_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 6)(69, "mat-form-field", 7)(70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, AddCompanyComponent_mat_error_73_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 6)(75, "mat-form-field", 7)(76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Unique customer id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, AddCompanyComponent_mat_error_79_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 29)(81, "h3")(82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Company Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 30)(85, "div", 31)(86, "mat-checkbox", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "ApplyOptionsMTM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 31)(89, "mat-checkbox", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "ApplyCashMTM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 31)(92, "mat-checkbox", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "ApplyInvoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 31)(95, "mat-checkbox", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "ApplyOnlyBrokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 31)(98, "mat-checkbox", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "ApplySubBrokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 31)(101, "mat-checkbox", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "CheckRates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 31)(104, "mat-checkbox", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "ShowLots");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 31)(107, "mat-checkbox", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "ApplySharing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 31)(110, "mat-checkbox", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "ApplyDecimalQty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 31)(113, "mat-checkbox", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "ApplyMargin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 31)(116, "mat-checkbox", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "ApplyContractNote");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 31)(119, "mat-checkbox", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "RoundingOff");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 31)(122, "mat-checkbox", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "RateRangeEnable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 45)(125, "mat-form-field", 7)(126, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Settlement Positing in %");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, AddCompanyComponent_mat_error_129_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 47)(131, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_131_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.companyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.name.errors == null ? null : ctx.companyForm.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.address.errors == null ? null : ctx.companyForm.controls.address.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredCityNameList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.state.errors == null ? null : ctx.companyForm.controls.state.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.phone.errors == null ? null : ctx.companyForm.controls.phone.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.email.errors == null ? null : ctx.companyForm.controls.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.pin.errors == null ? null : ctx.companyForm.controls.pin.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.uniqcusomerId.errors == null ? null : ctx.companyForm.controls.uniqcusomerId.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.companyForm.controls.settlementPostingInPercentage.errors == null ? null : ctx.companyForm.controls.settlementPostingInPercentage.errors.required);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 24392:
/*!***********************************************************!*\
  !*** ./src/app/Forms/Master/company/company.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyComponent": () => (/* binding */ CompanyComponent)
/* harmony export */ });
/* harmony import */ var _company_dialog_add_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-dialog/add-company.component */ 55422);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ 79771);








class CompanyComponent {
    constructor(appSettings, _appService, dialog, _masterService) {
        this.appSettings = appSettings;
        this._appService = _appService;
        this.dialog = dialog;
        this._masterService = _masterService;
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
                resizable: true,
                minWidth: 100,
            }
        };
        this.columnDefs = [
            {
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 60,
                maxWidth: 80, resizable: false, filter: false
            },
            { headerName: 'Name', field: 'name', flex: 2 },
            { headerName: 'Address', field: 'address', flex: 1 },
            { headerName: 'City', field: 'city', flex: 1 },
            { headerName: 'Pin', field: 'pin', flex: 1 },
            { headerName: 'State', field: 'state', flex: 1 },
            { headerName: 'Phone', field: 'phone', flex: 1 },
            { headerName: 'Email', field: 'email', flex: 1 },
            { headerName: 'FinBegin Date', field: 'finBeginDtString', flex: 1 },
            { headerName: 'FinEnd Date', field: 'finEndDtString', flex: 1 },
            { headerName: 'UniqueCusId', field: 'uniqcusomerId', flex: 1 }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getcompanyList();
    }
    getcompanyList() {
        this._appService.getCompany().subscribe((results) => {
            this.companyList = results;
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
        if (params.event.target.dataset.action == "edit") {
            this.openCompanyDialog(params.data.id);
        }
    }
    openCompanyDialog(user) {
        let dialogRef = this.dialog.open(_company_dialog_add_company_component__WEBPACK_IMPORTED_MODULE_0__.AddCompanyComponent, {
            data: { id: user }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getcompanyList();
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService)); };
CompanyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-blank"]], viewQuery: function CompanyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 3, vars: 5, consts: [[1, "row"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"]], template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ag-grid-angular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cellClicked", function CompanyComponent_Template_ag_grid_angular_cellClicked_2_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.companyList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 27685:
/*!******************************************************************************************************!*\
  !*** ./src/app/Forms/Master/contract-master/contract-master-dialog/add-contract-master.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContractMasterComponent": () => (/* binding */ AddContractMasterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
















function AddContractMasterComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", exchange_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", exchange_r7.name, " ");
} }
function AddContractMasterComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "symbol is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddContractMasterComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Strike Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddContractMasterComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instrumentType_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", instrumentType_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", instrumentType_r8.name, " ");
} }
function AddContractMasterComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const optionType_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", optionType_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", optionType_r9.name, " ");
} }
function AddContractMasterComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tradeable Lot is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddContractMasterComponent {
    constructor(formBuilder, dialogRef, data, _appService) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        this.selectedId = data.id;
        if (data.id == null) {
            this.selectedId = 0;
        }
    }
    bindFormControls() {
        this.contractForm = this.formBuilder.group({
            'ExId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'symbol': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'strikePrice': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'instrumentType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'optionType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'tradeableLot': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'maturity': [],
            'id': [0]
        });
        this.initialApiCalls();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([this._appService.getExchangeName(), this._appService.getInstrument(), this._appService.getOption()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            this.exchangeList = response[0];
            this.InstrumentTypeList = response[1];
            this.OptionTypeList = response[2];
        })).subscribe(res => {
        });
    }
    getInstrumentInfo() {
        this._appService.getContractById(this.selectedId).subscribe((res) => {
            this.contractForm.get('symbol').setValue(res.symbol);
            this.contractForm.get('strikePrice').setValue(res.strikePrice);
            this.contractForm.get('instrumentType').setValue(res.instrumentType);
            this.contractForm.get('optionType').setValue(res.optionType);
            this.contractForm.get('tradeableLot').setValue(res.tradeableLot);
            this.contractForm.get('maturity').setValue(res.maturity);
            this.contractForm.get('id').setValue(res.id);
            this.contractForm.get('ExId').setValue(res.exId);
        });
    }
    onSubmit(values) {
        this.contractForm.controls['symbol'].setValue(String(this.contractForm.get('symbol').value));
        this.contractForm.controls['strikePrice'].setValue(Number(this.contractForm.get('strikePrice').value));
        this.contractForm.controls['instrumentType'].setValue(String(this.contractForm.get('instrumentType').value));
        this.contractForm.controls['optionType'].setValue(String(this.contractForm.get('optionType').value));
        this.contractForm.controls['tradeableLot'].setValue(Number(this.contractForm.get('tradeableLot').value));
        //this.contractForm.controls['maturity'].setValue(String(this.contractForm.get('maturity').value));
        var body = this.contractForm.value;
        if (this.contractForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._appService.saveContract(body).subscribe(result => {
                console.log("result", result);
                this.dialogRef.close();
            }, err => {
                console.log(err);
            });
        }
    }
    ngOnInit() {
        this.bindFormControls();
        if (this.selectedId != 0) {
            this.getInstrumentInfo();
        }
        else {
            this.contractForm.get('id').setValue(0);
        }
    }
    close() {
        this.dialogRef.close();
    }
}
AddContractMasterComponent.ɵfac = function AddContractMasterComponent_Factory(t) { return new (t || AddContractMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
AddContractMasterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddContractMasterComponent, selectors: [["app-contract-master-dialog"]], decls: 61, vars: 9, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "", "formControlName", "ExId"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "symbol", "type", "text"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "strikePrice", "type", "text"], ["placeholder", "", "formControlName", "instrumentType"], ["placeholder", "", "formControlName", "optionType"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "tradeableLot", "type", "text"], ["matInput", "", "formControlName", "maturity", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["Maturity", ""], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase"], [3, "value"]], template: function AddContractMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Contract Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddContractMasterComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddContractMasterComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.contractForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Contract Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddContractMasterComponent_mat_option_17_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "mat-form-field", 10)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddContractMasterComponent_mat_error_23_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6)(25, "mat-form-field", 10)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Strike Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddContractMasterComponent_mat_error_29_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 6)(31, "mat-form-field", 7)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Instrument Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AddContractMasterComponent_mat_option_35_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6)(37, "mat-form-field", 7)(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Option Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AddContractMasterComponent_mat_option_41_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6)(43, "mat-form-field", 10)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Tradeable Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AddContractMasterComponent_mat_error_47_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 6)(49, "mat-form-field", 10)(50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Maturity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 17)(53, "mat-datepicker-toggle", 18)(54, "mat-datepicker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 20)(57, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddContractMasterComponent_Template_button_click_57_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contractForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contractForm.controls.symbol.errors == null ? null : ctx.contractForm.controls.symbol.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contractForm.controls.strikePrice.errors == null ? null : ctx.contractForm.controls.strikePrice.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.InstrumentTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.OptionTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contractForm.controls.tradeableLot.errors == null ? null : ctx.contractForm.controls.tradeableLot.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r6);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29udHJhY3QtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 92472:
/*!***************************************************************************!*\
  !*** ./src/app/Forms/Master/contract-master/contract-master.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractMasterComponent": () => (/* binding */ ContractMasterComponent)
/* harmony export */ });
/* harmony import */ var _contract_master_dialog_add_contract_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contract-master-dialog/add-contract-master.component */ 27685);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _shared_common_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/common-utility */ 70556);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ag-grid-angular */ 79771);



















function ContractMasterComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", exchange_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", exchange_r1.name, " ");
} }
class ContractMasterComponent {
    constructor(appSettings, _appService, dialog, _masterService) {
        this.appSettings = appSettings;
        this._appService = _appService;
        this.dialog = dialog;
        this._masterService = _masterService;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.contractList = [];
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
            { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
            { headerName: 'InstrumentType', field: 'insName', filter: true, sorting: true, resizable: true },
            { headerName: 'Symbol', field: 'symbol', filter: true, sorting: true, resizable: true },
            { headerName: 'Item Name', field: 'itemName', filter: true, sorting: true, resizable: true },
            { headerName: 'Maturity', field: 'maturityDate', filter: true, sorting: true, resizable: true },
            { headerName: 'OptionType', field: 'optionType', filter: true, sorting: true, resizable: true },
            { headerName: 'StrikePrice', field: 'strikePrice', filter: true, sorting: true, resizable: true, valueFormatter: params => _shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.strikePrice), type: 'rightAligned' },
            { headerName: 'TradeableLot', field: 'tradeableLot', filter: true, sorting: true, resizable: true, valueFormatter: params => _shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.tradeableLot), type: 'rightAligned' },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getExchangeList();
    }
    getExchangeList() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([this._masterService.getExchangeName()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
            this.exchangeList = response[0];
        })).subscribe(res => {
        });
    }
    getcontractList(id) {
        this._appService.getContract(id).subscribe((results) => {
            this.contractList = results;
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
    onBranchChange(event) {
        console.log(event);
        this.getcontractList(this.selectedExId);
    }
    onGridClick(params) {
        debugger;
        if (params.event.target.dataset.action == "edit") {
            this.openCompanyDialog(params.data.id);
        }
        if (params.event.target.dataset.action == "delete") {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
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
                    this._masterService.deleteContract(params.data.id).subscribe((res) => {
                        this.getcontractList(this.selectedExId);
                    });
                }
            });
        }
    }
    openCompanyDialog(user) {
        let dialogRef = this.dialog.open(_contract_master_dialog_add_contract_master_component__WEBPACK_IMPORTED_MODULE_0__.AddContractMasterComponent, {
            data: { id: user }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getcontractList(this.selectedExId);
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
ContractMasterComponent.ɵfac = function ContractMasterComponent_Factory(t) { return new (t || ContractMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_5__.MasterService)); };
ContractMasterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ContractMasterComponent, selectors: [["app-blank"]], viewQuery: function ContractMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 15, vars: 7, consts: [[1, "row", "paret-form"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "icon-btn"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef"], [3, "value"]], template: function ContractMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ContractMasterComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedExId = $event; })("selectionChange", function ContractMasterComponent_Template_mat_select_selectionChange_6_listener($event) { return ctx.onBranchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ContractMasterComponent_mat_option_7_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div")(9, "button", 6)(10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "ag-grid-angular", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.selectedExId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowData", ctx.contractList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cmFjdC1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 39916:
/*!***************************************************************************************************!*\
  !*** ./src/app/Forms/Master/interest-master/add-interest-master/add-interest-master.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddInterestMasterComponent": () => (/* binding */ AddInterestMasterComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master-second.service */ 8703);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);


















function AddInterestMasterComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r16.name, " ");
} }
function AddInterestMasterComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r17.name, " ");
} }
function AddInterestMasterComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r18.name, " ");
} }
function AddInterestMasterComponent_mat_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r19.name, " ");
} }
function AddInterestMasterComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "yearDays is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddInterestMasterComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Int Rate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AddInterestMasterComponent {
    constructor(formBuilder, dialogRef, data, _masterService, _masterSeconedService, _appService) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._masterService = _masterService;
        this._masterSeconedService = _masterSeconedService;
        this._appService = _appService;
        this.filteredAccountList = [];
        this.selectedId = data.id;
        if (data.id == null) {
            this.selectedId = 0;
        }
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'accountId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            'type': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            'applyOn': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            'postVouchers': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            'intRate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            'yearDays': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            'fromDt': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            'toDt': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            'id': ['0']
        });
        this.initialApiCalls();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([this._appService.getIntrestApplyOnDDL(), this._masterService.getAccount(), this._appService.getIntrestTypeDLL(), this._appService.getPostVoucherDLL()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
            this.applyOnList = response[0];
            this.filterApplyOnList = response[0];
            this.filteredAccountList = response[1];
            this.accountList = response[1];
            this.typeList = response[2];
            this.filterTypeList = response[2];
            this.postVoucherList = response[3];
            this.filterPostVoucherList = response[3];
        })).subscribe(res => {
        });
    }
    getItemInfo() {
        this._masterSeconedService.getInterestId(this.selectedId).subscribe((res) => {
            this.itemForm.get('accountId').setValue(res.accountId);
            this.itemForm.get('type').setValue(res.type);
            this.itemForm.get('applyOn').setValue(res.applyOn);
            this.itemForm.get('postVouchers').setValue(res.postVouchers);
            this.itemForm.get('intRate').setValue(res.intRate);
            this.itemForm.get('yearDays').setValue(res.yearDays);
            this.itemForm.get('fromDt').setValue(res.fromDt);
            this.itemForm.get('toDt').setValue(res.toDt);
            this.itemForm.get('id').setValue(res.id);
        });
    }
    /* to filter select account dropdown*/
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredAccountList = this.accountList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filteredAccountList = [...this.accountList];
        }
    }
    /* to filter select account dropdown*/
    onInputTypeChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filterTypeList = this.typeList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filterTypeList = [...this.typeList];
        }
    }
    onInputApplyOnChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filterApplyOnList = this.applyOnList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filterApplyOnList = [...this.applyOnList];
        }
    }
    onInputVoucherChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filterPostVoucherList = this.postVoucherList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filterPostVoucherList = [...this.postVoucherList];
        }
    }
    onSubmit(values) {
        var body = this.itemForm.value;
        if (this.itemForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._masterSeconedService.saveInterest(body).subscribe(result => {
                console.log("result", result);
                this.dialogRef.close();
            }, err => {
                console.log(err);
            });
        }
    }
    ngOnInit() {
        this.bindFormControls();
        if (this.selectedId != 0) {
            this.getItemInfo();
        }
        else {
            this.itemForm.get('id').setValue(0);
        }
    }
    close() {
        this.dialogRef.close();
    }
}
AddInterestMasterComponent.ɵfac = function AddInterestMasterComponent_Factory(t) { return new (t || AddInterestMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_1__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService)); };
AddInterestMasterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddInterestMasterComponent, selectors: [["app-add-interest-master"]], decls: 83, vars: 12, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Account", "panelClass", "custom-select-panel", "formControlName", "accountId"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Account", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Select Type", "panelClass", "custom-select-panel", "formControlName", "type"], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Type", 1, "milti-search-box", 3, "input"], ["placeholder", "Select ApplyOn", "panelClass", "custom-select-panel", "formControlName", "applyOn"], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search ApplyOn", 1, "milti-search-box", 3, "input"], ["placeholder", "Select Post Voucher", "panelClass", "custom-select-panel", "formControlName", "postVouchers"], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Post Voucher", 1, "milti-search-box", 3, "input"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "Year Days", "formControlName", "yearDays", "type", "number"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "Int Rate", "formControlName", "intRate", "type", "number"], ["matInput", "", "formControlName", "fromDt", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "To", "formControlName", "toDt", 3, "matDatepicker"], ["picker2", ""], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [3, "value"]], template: function AddInterestMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddInterestMasterComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddInterestMasterComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "mat-form-field", 8)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Select Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-select", 9, 10)(19, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddInterestMasterComponent_Template_input_input_19_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AddInterestMasterComponent_mat_option_21_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 6)(23, "div", 7)(24, "mat-form-field", 8)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Select Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-select", 14, 10)(29, "input", 15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddInterestMasterComponent_Template_input_input_29_listener($event) { return ctx.onInputTypeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddInterestMasterComponent_mat_option_31_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 6)(33, "div", 7)(34, "mat-form-field", 8)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Select ApplyOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-select", 16, 10)(39, "input", 17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddInterestMasterComponent_Template_input_input_39_listener($event) { return ctx.onInputApplyOnChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, AddInterestMasterComponent_mat_option_41_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 6)(43, "div", 7)(44, "mat-form-field", 8)(45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Select Post Voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "mat-select", 18, 10)(49, "input", 19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddInterestMasterComponent_Template_input_input_49_listener($event) { return ctx.onInputVoucherChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, AddInterestMasterComponent_mat_option_51_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 6)(53, "mat-form-field", 20)(54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Year Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, AddInterestMasterComponent_mat_error_57_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 6)(59, "mat-form-field", 20)(60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Int Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, AddInterestMasterComponent_mat_error_63_Template, 2, 0, "mat-error", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 6)(65, "mat-form-field", 20)(66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "input", 24)(69, "mat-datepicker-toggle", 25)(70, "mat-datepicker", null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 6)(73, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "input", 27)(75, "mat-datepicker-toggle", 25)(76, "mat-datepicker", null, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 29)(79, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddInterestMasterComponent_Template_button_click_79_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](71);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredAccountList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filterTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filterApplyOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filterPostVoucherList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.yearDays.errors == null ? null : ctx.itemForm.controls.yearDays.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.intRate.errors == null ? null : ctx.itemForm.controls.intRate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect], styles: [".user-form[_ngcontent-%COMP%]   .form-field-outer[_ngcontent-%COMP%] {\n  width: 280px;\n}\n\n.user-form[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=add-item.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pbnRlcmVzdC1tYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUNFLGlEQUFBIiwiZmlsZSI6ImFkZC1pbnRlcmVzdC1tYXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1mb3JtIC5mb3JtLWZpZWxkLW91dGVyIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItZm9ybSAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG4gIC8qIyBzb3VyY2VNYXBwaW5nVVJMPWFkZC1pdGVtLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"] });


/***/ }),

/***/ 34204:
/*!***************************************************************************!*\
  !*** ./src/app/Forms/Master/interest-master/interest-master.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterestMasterComponent": () => (/* binding */ InterestMasterComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _add_interest_master_add_interest_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-interest-master/add-interest-master.component */ 39916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master-second.service */ 8703);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ 79771);













class InterestMasterComponent {
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
            { headerName: 'Account Name', field: 'acName', filter: true, sorting: true, resizable: true },
            { headerName: 'ApplyOn', field: 'applyOnName', filter: true, sorting: true, resizable: true },
            { headerName: 'From Date', field: 'fromDtFormat', filter: true, sorting: true, resizable: true },
            { headerName: 'To Date', field: 'toDtFormat', filter: true, sorting: true, resizable: true },
            { headerName: 'Type', field: 'typeName', filter: true, sorting: true, resizable: true },
            { headerName: 'Post Vouchers', field: 'postVouchersName', filter: true, sorting: true, resizable: true },
            { headerName: 'Int Rate', field: 'intRate', filter: true, sorting: true, resizable: true },
            { headerName: 'Year Days', field: 'yearDays', filter: true, sorting: true, resizable: true },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getInterestList();
    }
    getInterestList() {
        this._masterSecondService.getInterestList().subscribe((results) => {
            this.interestMasterList = results;
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
            this.openAddIMDialog(params.data.id);
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
                    this._masterSecondService.deleteInterest(params.data.id).subscribe((res) => {
                        if (res.isSuccess) {
                            this.showToaster(res.message);
                            this.getInterestList();
                        }
                        else {
                            this.showToaster(res.message, true);
                        }
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
    openAddIMDialog(user) {
        let dialogRef = this.dialog.open(_add_interest_master_add_interest_master_component__WEBPACK_IMPORTED_MODULE_1__.AddInterestMasterComponent, {
            data: { id: user }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getInterestList();
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
InterestMasterComponent.ɵfac = function InterestMasterComponent_Factory(t) { return new (t || InterestMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_4__.MasterSecondService)); };
InterestMasterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InterestMasterComponent, selectors: [["app-interest-master"]], viewQuery: function InterestMasterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 8, vars: 5, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"]], template: function InterestMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InterestMasterComponent_Template_button_click_2_listener() { return ctx.openAddIMDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Add Interest Master ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "ag-grid-angular", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function InterestMasterComponent_Template_ag_grid_angular_cellClicked_7_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.interestMasterList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcmVzdC1tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 13300:
/*!************************************************************************************!*\
  !*** ./src/app/Forms/Master/item-group/add-item-group/add-item-group.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddItemGroupComponent": () => (/* binding */ AddItemGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../master-second.service */ 8703);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ag-grid-angular */ 79771);





















const _c0 = ["select"];
function AddItemGroupComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Group Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddItemGroupComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", exchange_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", exchange_r5.name, " ");
} }
function AddItemGroupComponent_mat_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r6.itemName, " ");
} }
class AddItemGroupComponent {
    constructor(appSettings, formBuilder, dialogRef, data, _masterService, _masterSecondService, dialog, snackBar) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._masterService = _masterService;
        this._masterSecondService = _masterSecondService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.accountAllSellected = false;
        this.itemGroupList = [];
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
                headerName: 'Added account Item Group list',
                children: [
                    {
                        headerName: '', editable: false, minwidth: 45, width: 45, maxwidth: 45, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
                    },
                    { headerName: 'Exchange Name', field: 'exName', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'Item Name', field: 'itemName', filter: true, sorting: true, resizable: true, flex: 1, },
                ]
            }];
        this.selectedId = data.id;
        if (data.id == null) {
            this.selectedId = 0;
        }
    }
    checkTaxSelect() {
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
    }
    /* to filter select account dropdown*/
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.accountList = this.accountList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
    }
    bindFormControls() {
        this.itemGroupNameForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'id': [0]
        });
    }
    bindExchangeFormControls() {
        this.exchangeForm = this.formBuilder.group({
            'accounts': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'id': [0]
        });
    }
    onExchangeSelection(selectedExchangeId) {
        if (selectedExchangeId) {
            this._masterService.getItemListExchange(selectedExchangeId).subscribe((response) => {
                this.accountList = response;
            }, (error) => {
                console.error('Error fetching item list:', error);
            });
        }
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([this._masterService.getExchangeName()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => {
            this.exchangeList = response[0];
        })).subscribe(res => {
        });
        if (this.selectedId != 0) {
            this.getItemGroupList();
        }
    }
    getItemGroupId() {
        this._masterSecondService.getItemGroupId(this.selectedId).subscribe((res) => {
            this.itemGroupNameForm.get('name').setValue(res.name);
            this.itemGroupNameForm.get('id').setValue(res.id);
            this.selectedName = res.name;
        });
    }
    getItemGroupList() {
        this._masterSecondService.getItemGroupList(this.selectedId).subscribe((res) => {
            this.itemGroupList = res;
        });
    }
    onSubmit(values) {
        this.itemGroupNameForm.controls['name'].setValue(String(this.itemGroupNameForm.get('name').value));
        var body = this.itemGroupNameForm.value;
        if (this.itemGroupNameForm.valid) {
            this._masterSecondService.saveItemGroup(body).subscribe(result => {
                console.log(result);
                if (result.isSuccess) {
                    this.selectedId = result.id;
                    this.itemGroupNameForm.get('id').setValue(result.id);
                    this.showToaster(result.message);
                }
                else {
                    this.showToaster(result.message, true);
                }
                // this.dialogRef.close();
            }, err => {
                console.log(err);
            });
        }
    }
    deleteItemGroup() {
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
            var req = selectedRecord.map(x => x.id);
            this._masterSecondService.removeMultipleItemGroup(req).subscribe(result => {
                this.getItemGroupList();
                this.showToaster(result);
            });
        }
    }
    showToaster(message, isError = false) {
        const panelClass = isError ? ['red-text'] : undefined;
        const label = isError ? "Error" : "Success";
        this.snackBar.open(message, label, {
            duration: 30000,
            panelClass: panelClass,
        });
    }
    onExchangeSubmit(values) {
        if (this.selectedId == 0) {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
                data: {
                    message: 'Please save Exchange to add Item Groups',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
            return;
        }
        var body = this.exchangeForm.value;
        //to remove select all option value that is '-1'
        body.accounts.forEach((value, index) => {
            if (value == '-1')
                body.accounts.splice(index, 1);
        });
        var req = {
            "groupId": this.selectedId,
            "itemList": body.accounts
        };
        if (this.exchangeForm.valid) {
            this._masterSecondService.addItemGroup(req).subscribe(result => {
                this.getItemGroupList();
            });
        }
    }
    ngOnInit() {
        this.bindFormControls();
        this.bindExchangeFormControls();
        this.initialApiCalls();
        if (this.selectedId != 0) {
            this.getItemGroupId();
        }
        else {
            this.itemGroupNameForm.get('id').setValue(0);
        }
    }
    close() {
        this.dialogRef.close();
    }
}
AddItemGroupComponent.ɵfac = function AddItemGroupComponent_Factory(t) { return new (t || AddItemGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_3__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar)); };
AddItemGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddItemGroupComponent, selectors: [["app-add-item-group"]], viewQuery: function AddItemGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, decls: 56, vars: 14, consts: [[1, "heading", "mb-10"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["label", "Item Group", 3, "click"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "tab-party-details-parent"], [1, "white-block", "pb-0"], ["fxFlex", "100", "fxFlex.gt-sm", "87", "fxFlex.sm", "87"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "Group Name", "formControlName", "name", "type", "text"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", "save-btn", "mt-4", 3, "disabled"], [1, "white-block", "pb-0", "mt-20"], ["fxFlex", "100", "fxFlex.gt-sm", "33.33", "fxFlex.sm", "33.33"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Exchange", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["multiple", "", "placeholder", "Select Account", "panelClass", "custom-select-panel", "formControlName", "accounts"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Item Group", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], ["value", "-1", 3, "click"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [1, "col-xl-12", "mt-2", "position-relative"], [1, "material-symbols-outlined", "delete-icon", 3, "click"], ["headerHeight", "34", 1, "ag-theme-material", "mt-2", 2, "height", "240px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "rowSelection", "rowMultiSelectWithClick", "defaultColDef", "gridReady"], [3, "value"]], template: function AddItemGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Add Item Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddItemGroupComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-tab-group")(7, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddItemGroupComponent_Template_mat_tab_click_7_listener() { return ctx.checkTaxSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AddItemGroupComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(ctx.itemGroupNameForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "h3")(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Group Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7)(15, "mat-form-field", 8)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Group Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AddItemGroupComponent_mat_error_19_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AddItemGroupComponent_Template_form_ngSubmit_22_listener() { return ctx.onExchangeSubmit(ctx.exchangeForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 5)(24, "div", 12)(25, "h3")(26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 13)(29, "mat-form-field", 14)(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function AddItemGroupComponent_Template_mat_select_selectionChange_32_listener($event) { return ctx.onExchangeSelection($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, AddItemGroupComponent_mat_option_33_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 13)(35, "div", 17)(36, "mat-form-field", 18)(37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Select Item Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-select", 19, 20)(41, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function AddItemGroupComponent_Template_input_input_41_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddItemGroupComponent_Template_mat_option_click_43_listener() { return ctx.accountAllSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, AddItemGroupComponent_mat_option_45_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 24)(47, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddItemGroupComponent_Template_button_click_47_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 27)(52, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddItemGroupComponent_Template_span_click_52_listener() { return ctx.deleteItemGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "delete_sweep");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "ag-grid-angular", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("gridReady", function AddItemGroupComponent_Template_ag_grid_angular_gridReady_55_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.itemGroupNameForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.itemGroupNameForm.controls.name.errors == null ? null : ctx.itemGroupNameForm.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.itemGroupNameForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.exchangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.accountList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.exchangeForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.itemGroupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("rowSelection", "multiple")("rowMultiSelectWithClick", true)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTab, ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__.AgGridAngular], styles: [".save-btn[_ngcontent-%COMP%] {\n  height: 34px;\n}\n\n.red-text[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.red-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n.red-text[_ngcontent-%COMP%]   .mat-simple-snack-bar-content[_ngcontent-%COMP%] {\n  color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pdGVtLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUFJO0VBQ0kscUJBQUE7QUFFUjs7QUFBSTtFQUNJLHFCQUFBO0FBRVIiLCJmaWxlIjoiYWRkLWl0ZW0tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2ZS1idG57XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5yZWQtdGV4dCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZGl2IHtcclxuICAgICAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWF0LXNpbXBsZS1zbmFjay1iYXItY29udGVudHtcclxuICAgICAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 17761:
/*!*****************************************************************!*\
  !*** ./src/app/Forms/Master/item-group/item-group.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemGroupComponent": () => (/* binding */ ItemGroupComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _add_item_group_add_item_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-item-group/add-item-group.component */ 13300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master-second.service */ 8703);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ 79771);













class ItemGroupComponent {
    constructor(appSettings, dialog, snackBar, _masterService, _masterSecondService) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this._masterService = _masterService;
        this._masterSecondService = _masterSecondService;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.taxList = [];
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
            { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getItemGroupNameList();
    }
    getItemGroupNameList() {
        this._masterSecondService.getItemGroupNameList().subscribe((results) => {
            this.taxList = results;
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
    showToaster(message) {
        this.snackBar.open(message, "Success", {
            duration: 6000,
        });
    }
    onGridClick(params) {
        if (params.event.target.dataset.action == "edit") {
            this.openTaxDialog(params.data.id);
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
                    this._masterSecondService.deleteItemGroup(params.data.id).subscribe((res) => {
                        this.getItemGroupNameList();
                        if (res.isSuccess) {
                            this.showToaster(res.message);
                        }
                    });
                }
            });
        }
    }
    openTaxDialog(user) {
        let dialogRef = this.dialog.open(_add_item_group_add_item_group_component__WEBPACK_IMPORTED_MODULE_1__.AddItemGroupComponent, {
            data: { id: user }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getItemGroupNameList();
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
ItemGroupComponent.ɵfac = function ItemGroupComponent_Factory(t) { return new (t || ItemGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_4__.MasterSecondService)); };
ItemGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ItemGroupComponent, selectors: [["app-item-group"]], viewQuery: function ItemGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 13, vars: 5, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "primary", 1, "delete-slab", "icon-btn"], [1, "material-icons-outlined"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"]], template: function ItemGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon")(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " file_download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemGroupComponent_Template_button_click_7_listener() { return ctx.openTaxDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Add Item Group ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5)(12, "ag-grid-angular", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function ItemGroupComponent_Template_ag_grid_angular_cellClicked_12_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.taxList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLWdyb3VwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 57632:
/*!********************************************************************************!*\
  !*** ./src/app/Forms/Master/item/contract-dialog/contract-dialog.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractDialogComponent": () => (/* binding */ ContractDialogComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var src_app_Forms_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Forms/Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ag-grid-angular */ 79771);

















function ContractDialogComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", exchange_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", exchange_r1.name, " ");
} }
class ContractDialogComponent {
    constructor(appSettings, _appService, dialogRef, dialog, _masterService) {
        this.appSettings = appSettings;
        this._appService = _appService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this._masterService = _masterService;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.contractList = [];
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
                headerName: '', editable: false, minwidth: 45, width: 45, maxwidth: 45, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
            },
            { headerName: 'Item Name', field: 'itemName', filter: true, sorting: true, resizable: true },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getExchangeList();
    }
    getExchangeList() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([this._masterService.getExchangeName()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(response => {
            this.exchangeList = response[0];
        })).subscribe(res => {
        });
    }
    getcontractList(id) {
        this._appService.getContractListItemImport(id).subscribe((results) => {
            this.contractList = results;
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
    onBranchChange(event) {
        console.log(event);
        this.getcontractList(this.selectedExId);
    }
    onGridReady(event) { this.gridApi = event.api; }
    onGridClick(params) {
    }
    close() {
        this.dialogRef.close();
    }
    importContractItems() {
        var selectedRecord = this.gridApi.getSelectedRows();
        if (selectedRecord.length == 0) {
            const dialogRef = this.dialog.open(src_app_Forms_Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialog, {
                data: {
                    message: 'Please select record to Import',
                    buttonText: {
                        ok: 'OK',
                    }
                }
            });
        }
        else {
            const reqObj = selectedRecord.map(i => i.id);
            this._masterService.importItem(reqObj).subscribe(result => {
                this.dialogRef.close();
            });
        }
    }
}
ContractDialogComponent.ɵfac = function ContractDialogComponent_Factory(t) { return new (t || ContractDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService)); };
ContractDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ContractDialogComponent, selectors: [["app-contract-dialog"]], viewQuery: function ContractDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 18, vars: 8, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], [1, "row", "paret-form", 2, "padding", "20px"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "delete-slab", "icon-btn", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "width", "990px", "height", "535px", 3, "rowData", "pagination", "rowHeight", "rowSelection", "columnDefs", "defaultColDef", "gridReady"], [3, "value"]], template: function ContractDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContractDialogComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ContractDialogComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.selectedExId = $event; })("selectionChange", function ContractDialogComponent_Template_mat_select_selectionChange_12_listener($event) { return ctx.onBranchChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ContractDialogComponent_mat_option_13_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContractDialogComponent_Template_button_click_14_listener() { return ctx.importContractItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 10)(17, "ag-grid-angular", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("gridReady", function ContractDialogComponent_Template_ag_grid_angular_gridReady_17_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedExId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.contractList)("pagination", true)("rowHeight", 31)("rowSelection", "multiple")("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__.AgGridAngular], styles: [".save-button[_ngcontent-%COMP%] {\n  max-width: 66px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyYWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJjb250cmFjdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2ZS1idXR0b24ge1xyXG4gICAgbWF4LXdpZHRoOiA2NnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 83722:
/*!*********************************************************************!*\
  !*** ./src/app/Forms/Master/item/item-dialog/add-item.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddItemComponent": () => (/* binding */ AddItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _common_directive_currency_formatter_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/directive/currency-formatter.directive */ 13145);


















function AddItemComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", exchange_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", exchange_r6.name, " ");
} }
function AddItemComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Item Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddItemComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Item Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddItemComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Exchange Symbol is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddItemComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "lot size value multiplier is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddItemComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Isin Code is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddItemComponent {
    constructor(snackBar, formBuilder, dialogRef, data, _appService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        this.selectedId = data.id;
        if (data.id == null) {
            this.selectedId = 0;
        }
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'ExId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            'itemCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            'itemName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            'exchangeSymbol': [],
            'lotSizeValueMultiplier': [],
            'IsinCode': [],
            'ApplyCtt': [true],
            'applyRiskManagementFees': [],
            'id': []
        });
        this.initialApiCalls();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([this._appService.getExchangeName()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            this.exchangeList = response[0];
        })).subscribe(res => {
        });
    }
    getItemInfo() {
        this._appService.getItemById(this.selectedId).subscribe((res) => {
            debugger;
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
    onSubmit(values) {
        if ((this.itemForm.get('ApplyCtt').value) == null) {
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
                if (result.isSuccess) {
                    console.log("result", result);
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
    showToaster(message, isError = false) {
        const panelClass = isError ? ['red-text'] : undefined;
        const label = isError ? "Error" : "Success";
        const time = isError ? 600000 : 300000;
        this.snackBar.open(message, label, {
            duration: time,
            panelClass: panelClass,
        });
    }
    populateFields() {
        if (!this.selectedId) {
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
        else {
            this.itemForm.get('id').setValue(0);
        }
    }
    close() {
        this.dialogRef.close();
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
AddItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["app-item-dialog"]], decls: 59, vars: 8, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Tax", "formControlName", "ExId"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "item Code", "formControlName", "itemCode", "type", "text", 3, "blur"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "item Name", "formControlName", "itemName", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Exchange Symbol", "formControlName", "exchangeSymbol", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "lot size value multiplier", "formControlName", "lotSizeValueMultiplier", "type", "number", "appCurrencyFormatter", ""], ["matInput", "", "autocomplete", "off", "placeholder", "Isin code", "formControlName", "IsinCode", "type", "text"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", 1, "pt-5", "pb-5", "pl-10"], ["formControlName", "ApplyCtt"], ["formControlName", "applyRiskManagementFees"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [3, "value"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddItemComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddItemComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AddItemComponent_mat_option_17_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6)(19, "mat-form-field", 10)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function AddItemComponent_Template_input_blur_22_listener() { return ctx.populateFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AddItemComponent_mat_error_23_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 6)(25, "mat-form-field", 10)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AddItemComponent_mat_error_29_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 6)(31, "mat-form-field", 10)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Exchange Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, AddItemComponent_mat_error_35_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 6)(37, "mat-form-field", 10)(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "lot size value multiplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AddItemComponent_mat_error_41_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 6)(43, "mat-form-field", 10)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Isin code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, AddItemComponent_mat_error_47_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 17)(49, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Apply Ctt");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 17)(52, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Apply Risk Management Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 20)(55, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_55_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.itemCode.errors == null ? null : ctx.itemForm.controls.itemCode.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.itemName.errors == null ? null : ctx.itemForm.controls.itemName.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.exchangeSymbol.errors == null ? null : ctx.itemForm.controls.exchangeSymbol.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.lotSizeValueMultiplier.errors == null ? null : ctx.itemForm.controls.lotSizeValueMultiplier.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.IsinCode.errors == null ? null : ctx.itemForm.controls.IsinCode.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _common_directive_currency_formatter_directive__WEBPACK_IMPORTED_MODULE_1__.CurrencyFormatterDirective], styles: [".user-form[_ngcontent-%COMP%]   .form-field-outer[_ngcontent-%COMP%] {\n  width: 280px;\n}\n.user-form[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtBQUFSIiwiZmlsZSI6ImFkZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItZm9ybXtcclxuICAgIC5mb3JtLWZpZWxkLW91dGVye1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgIH1cclxuICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 55667:
/*!*****************************************************!*\
  !*** ./src/app/Forms/Master/item/item.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemComponent": () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _shared_common_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/common-utility */ 70556);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _item_dialog_add_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-dialog/add-item.component */ 83722);
/* harmony import */ var _contract_dialog_contract_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contract-dialog/contract-dialog.component */ 57632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.settings */ 1182);
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ag-grid-angular */ 79771);














class ItemComponent {
    constructor(appSettings, _appService, dialog, _masterService) {
        this.appSettings = appSettings;
        this._appService = _appService;
        this.dialog = dialog;
        this._masterService = _masterService;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'Name' },
            { name: 'item' },
            { name: 'name' }
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
                maxWidth: 110, resizable: true, filter: false
            },
            { headerName: 'Code', field: 'itemCode', filter: true, sorting: true, resizable: true },
            { headerName: 'Item', field: 'itemName', filter: true, sorting: true, resizable: true },
            { headerName: 'ExSymbol', field: 'exchangeSymbol', filter: true, sorting: true, resizable: true },
            { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
            { headerName: 'LotSize', field: 'lotSizeValueMultiplier', filter: true, sorting: true, resizable: true, valueFormatter: params => _shared_common_utility__WEBPACK_IMPORTED_MODULE_0__.CommonUtility.formatNumber(params.data.lotSizeValueMultiplier), type: 'rightAligned' },
            { headerName: 'IsinCode', field: 'isinCode', filter: true, sorting: true, resizable: true },
            { headerName: 'ApplyCtt', field: 'applyCtt', filter: true, sorting: true, resizable: true },
            { headerName: 'ApplyRiskManagementFees', field: 'applyRiskManagementFees', filter: true, sorting: true, resizable: true }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getitemList();
    }
    onActivate(event) {
        console.log('Activate Event', event);
    }
    getitemList() {
        this._appService.getitems().subscribe((results) => {
            this.itemList = results;
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
            this.openUserDialog(params.data.id);
        }
        if (params.event.target.dataset.action == "delete") {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
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
                    this._masterService.deleteItem(params.data.id).subscribe((res) => {
                        this.getitemList();
                    });
                }
            });
        }
    }
    importContractMaster() {
        let dialogRef = this.dialog.open(_contract_dialog_contract_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ContractDialogComponent);
        dialogRef.afterClosed().subscribe(user => {
            this.getitemList();
        });
    }
    openUserDialog(user) {
        let dialogRef = this.dialog.open(_item_dialog_add_item_component__WEBPACK_IMPORTED_MODULE_2__.AddItemComponent, {
            data: { id: user }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getitemList();
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_4__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_6__.MasterService)); };
ItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-blank"]], viewQuery: function ItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 15, vars: 5, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "primary", 1, "import-btn-item", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "delete-slab", "icon-btn"], [1, "material-icons-outlined"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_2_listener() { return ctx.importContractMaster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 3)(5, "mat-icon")(6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " file_download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_9_listener() { return ctx.openUserDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Add Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 6)(14, "ag-grid-angular", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cellClicked", function ItemComponent_Template_ag_grid_angular_cellClicked_14_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.itemList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__.AgGridAngular], styles: [".import-btn-item[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1wb3J0LWJ0bi1pdGVte1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 22259:
/*!***********************************************!*\
  !*** ./src/app/Forms/Master/master.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterModule": () => (/* binding */ MasterModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/account.component */ 77266);
/* harmony import */ var _account_account_dialog_add_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/account-dialog/add-account.component */ 63736);
/* harmony import */ var _transporter_transporter_dialog_add_transporter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transporter/transporter-dialog/add-transporter.component */ 7984);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ag-grid-angular */ 79771);
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item/item.component */ 55667);
/* harmony import */ var _transporter_transporter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transporter/transporter.component */ 17630);
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company/company.component */ 24392);
/* harmony import */ var _company_company_dialog_add_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company/company-dialog/add-company.component */ 55422);
/* harmony import */ var _item_item_dialog_add_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item/item-dialog/add-item.component */ 83722);
/* harmony import */ var _sauda_sauda_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sauda/sauda.component */ 61425);
/* harmony import */ var _sauda_sauda_dialog_add_sauda_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sauda/sauda-dialog/add-sauda.component */ 18091);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.component */ 65554);
/* harmony import */ var _product_product_dialog_add_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/product-dialog/add-product.component */ 86571);
/* harmony import */ var _contract_master_contract_master_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contract-master/contract-master.component */ 92472);
/* harmony import */ var _contract_master_contract_master_dialog_add_contract_master_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contract-master/contract-master-dialog/add-contract-master.component */ 27685);
/* harmony import */ var _brokerage_slab_brokerage_slab_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./brokerage-slab/brokerage-slab.component */ 32426);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _brokerage_setup_brokerage_setup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./brokerage-setup/brokerage-setup.component */ 75002);
/* harmony import */ var _brokerage_slab_add_slab_details_add_slab_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./brokerage-slab/add-slab-details/add-slab-details.component */ 56483);
/* harmony import */ var _brokerage_slab_add_slab_add_slab_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./brokerage-slab/add-slab/add-slab.component */ 14778);
/* harmony import */ var _brokerage_setup_add_setup_details_add_setup_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./brokerage-setup/add-setup-details/add-setup-details.component */ 79134);
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./branch/branch.component */ 37523);
/* harmony import */ var _tax_master_tax_master_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tax-master/tax-master.component */ 85063);
/* harmony import */ var _tax_master_tax_dialog_add_tax_master_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tax-master/tax-dialog/add-tax-master.component */ 24328);
/* harmony import */ var _branch_add_branch_account_add_branch_account_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./branch/add-branch-account/add-branch-account.component */ 27588);
/* harmony import */ var _exchange_exchange_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./exchange/exchange.component */ 86464);
/* harmony import */ var _exchange_add_exchange_add_exchange_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./exchange/add-exchange/add-exchange.component */ 99667);
/* harmony import */ var _account_head_account_head_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./account-head/account-head.component */ 43055);
/* harmony import */ var _account_head_add_account_head_add_account_head_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./account-head/add-account-head/add-account-head.component */ 25800);
/* harmony import */ var _interest_master_interest_master_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./interest-master/interest-master.component */ 34204);
/* harmony import */ var _interest_master_add_interest_master_add_interest_master_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./interest-master/add-interest-master/add-interest-master.component */ 39916);
/* harmony import */ var _symbol_mapping_symbol_mapping_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./symbol-mapping/symbol-mapping.component */ 95155);
/* harmony import */ var _account_account_dialog_add_intereset_add_intereset_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./account/account-dialog/add-intereset/add-intereset.component */ 9956);
/* harmony import */ var _account_account_dialog_file_code_tab_file_code_tab_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./account/account-dialog/file-code-tab/file-code-tab.component */ 73285);
/* harmony import */ var _account_account_dialog_self_share_tab_self_share_tab_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./account/account-dialog/self-share-tab/self-share-tab.component */ 5942);
/* harmony import */ var _account_account_dialog_brokerage_tab_brokerage_tab_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./account/account-dialog/brokerage-tab/brokerage-tab.component */ 31610);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_account_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../Dialog/confirmation-dialog/confirmation-account-dialog.component */ 32197);
/* harmony import */ var _item_group_item_group_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./item-group/item-group.component */ 17761);
/* harmony import */ var _item_group_add_item_group_add_item_group_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./item-group/add-item-group/add-item-group.component */ 13300);
/* harmony import */ var _brokerage_setup_lock_brokerage_lock_brokerage_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./brokerage-setup/lock-brokerage/lock-brokerage.component */ 42439);
/* harmony import */ var _brokerage_setup_view_item_group_view_item_group_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./brokerage-setup/view-item-group/view-item-group.component */ 54731);
/* harmony import */ var _sub_brokerage_setup_sub_brokerage_setup_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./sub-brokerage-setup/sub-brokerage-setup.component */ 75836);
/* harmony import */ var _sub_brokerage_setup_sub_add_setup_details_sub_add_setup_details_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./sub-brokerage-setup/sub-add-setup-details/sub-add-setup-details.component */ 16380);
/* harmony import */ var _sub_brokerage_setup_sub_lock_brokerage_sub_lock_brokerage_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./sub-brokerage-setup/sub-lock-brokerage/sub-lock-brokerage.component */ 15399);
/* harmony import */ var _sharing_setup_sharing_setup_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./sharing-setup/sharing-setup.component */ 65720);
/* harmony import */ var _sharing_setup_add_sharing_setup_add_sharing_setup_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./sharing-setup/add-sharing-setup/add-sharing-setup.component */ 48965);
/* harmony import */ var _sharing_setup_lock_sharing_setup_lock_sharing_setup_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./sharing-setup/lock-sharing-setup/lock-sharing-setup.component */ 35728);
/* harmony import */ var _User_invite_user_invite_user_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../User/invite-user/invite-user.component */ 6441);
/* harmony import */ var _User_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../User/change-password/change-password.component */ 41369);
/* harmony import */ var _item_contract_dialog_contract_dialog_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./item/contract-dialog/contract-dialog.component */ 57632);
/* harmony import */ var _trade_file_trade_file_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./trade-file/trade-file.component */ 27455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/tabs */ 15892);








































































const routes = [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent, data: { breadcrumb: 'Account' } },
    { path: 'item', component: _item_item_component__WEBPACK_IMPORTED_MODULE_4__.ItemComponent, data: { breadcrumb: 'Item' } },
    { path: 'transporter', component: _transporter_transporter_component__WEBPACK_IMPORTED_MODULE_5__.TransporterComponent, data: { breadcrumb: 'Transporter' } },
    { path: 'company', component: _company_company_component__WEBPACK_IMPORTED_MODULE_6__.CompanyComponent, data: { breadcrumb: 'Company' } },
    { path: 'sauda', component: _sauda_sauda_component__WEBPACK_IMPORTED_MODULE_9__.SaudaComponent, data: { breadcrumb: 'Sauda' } },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_11__.ProductComponent, data: { breadcrumb: 'Product' } },
    { path: 'contract-master', component: _contract_master_contract_master_component__WEBPACK_IMPORTED_MODULE_13__.ContractMasterComponent, data: { breadcrumb: 'Contract Master' } },
    { path: 'brokerage-slab', component: _brokerage_slab_brokerage_slab_component__WEBPACK_IMPORTED_MODULE_15__.BrokerageSlabComponent, data: { breadcrumb: 'Brokerage Slab' } },
    { path: 'brokerage-setup', component: _brokerage_setup_brokerage_setup_component__WEBPACK_IMPORTED_MODULE_18__.BrokerageSetupComponent, data: { breadcrumb: 'Brokerage Setup' } },
    { path: 'sub-brokerage-setup', component: _sub_brokerage_setup_sub_brokerage_setup_component__WEBPACK_IMPORTED_MODULE_42__.SubBrokerageSetupComponent, data: { breadcrumb: 'Sub Brokerage Setup' } },
    { path: 'sharing-setup', component: _sharing_setup_sharing_setup_component__WEBPACK_IMPORTED_MODULE_45__.SharingSetupComponent, data: { breadcrumb: 'Sharing Setup' } },
    { path: 'branch', component: _branch_branch_component__WEBPACK_IMPORTED_MODULE_22__.BranchComponent, data: { breadcrumb: 'Branch' } },
    { path: 'tax', component: _tax_master_tax_master_component__WEBPACK_IMPORTED_MODULE_23__.TaxComponent, data: { breadcrumb: 'Tax' } },
    { path: 'trade-file', component: _trade_file_trade_file_component__WEBPACK_IMPORTED_MODULE_51__.TradeFileComponent, data: { breadcrumb: 'Trade File' } },
    { path: 'exchange', component: _exchange_exchange_component__WEBPACK_IMPORTED_MODULE_26__.ExchangeComponent, data: { breadcrumb: 'Exchange' } },
    { path: 'interest-master', component: _interest_master_interest_master_component__WEBPACK_IMPORTED_MODULE_30__.InterestMasterComponent, data: { breadcrumb: 'Interest Master' } },
    { path: 'account-head', component: _account_head_account_head_component__WEBPACK_IMPORTED_MODULE_28__.AccountHeadComponent, data: { breadcrumb: 'Account Head' } },
    { path: 'symbol-mapping', component: _symbol_mapping_symbol_mapping_component__WEBPACK_IMPORTED_MODULE_32__.SymbolMappingComponent, data: { breadcrumb: 'Symbol Mapping' } },
    { path: 'item-group', component: _item_group_item_group_component__WEBPACK_IMPORTED_MODULE_38__.ItemGroupComponent, data: { breadcrumb: 'Item Group' } },
];
class MasterModule {
}
MasterModule.ɵfac = function MasterModule_Factory(t) { return new (t || MasterModule)(); };
MasterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵdefineNgModule"]({ type: MasterModule });
MasterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_53__.DatePipe,
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MAT_DATE_LOCALE, useValue: 'en-GB' }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_53__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_55__.RouterModule.forChild(routes),
        _angular_forms__WEBPACK_IMPORTED_MODULE_56__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_56__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_57__.AgGridModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵsetNgModuleScope"](MasterModule, { declarations: [_account_account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent,
        _account_account_dialog_add_account_component__WEBPACK_IMPORTED_MODULE_2__.AddAccountComponent,
        _transporter_transporter_dialog_add_transporter_component__WEBPACK_IMPORTED_MODULE_3__.AddTransporterComponent,
        _item_item_component__WEBPACK_IMPORTED_MODULE_4__.ItemComponent,
        _item_item_dialog_add_item_component__WEBPACK_IMPORTED_MODULE_8__.AddItemComponent,
        _transporter_transporter_component__WEBPACK_IMPORTED_MODULE_5__.TransporterComponent,
        _company_company_component__WEBPACK_IMPORTED_MODULE_6__.CompanyComponent,
        _company_company_dialog_add_company_component__WEBPACK_IMPORTED_MODULE_7__.AddCompanyComponent,
        _sauda_sauda_component__WEBPACK_IMPORTED_MODULE_9__.SaudaComponent,
        _sauda_sauda_dialog_add_sauda_component__WEBPACK_IMPORTED_MODULE_10__.AddSaudaComponent,
        _product_product_component__WEBPACK_IMPORTED_MODULE_11__.ProductComponent,
        _product_product_dialog_add_product_component__WEBPACK_IMPORTED_MODULE_12__.AddProductComponent,
        _contract_master_contract_master_component__WEBPACK_IMPORTED_MODULE_13__.ContractMasterComponent,
        _contract_master_contract_master_dialog_add_contract_master_component__WEBPACK_IMPORTED_MODULE_14__.AddContractMasterComponent,
        _brokerage_slab_brokerage_slab_component__WEBPACK_IMPORTED_MODULE_15__.BrokerageSlabComponent,
        _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_16__.ConfirmationDialog,
        _Dialog_confirmation_dialog_confirmation_account_dialog_component__WEBPACK_IMPORTED_MODULE_37__.ConfirmationAccountDialog,
        _brokerage_setup_brokerage_setup_component__WEBPACK_IMPORTED_MODULE_18__.BrokerageSetupComponent,
        _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_17__.ErrorDialog,
        _brokerage_slab_add_slab_details_add_slab_details_component__WEBPACK_IMPORTED_MODULE_19__.AddSlabDetailsComponent,
        _brokerage_slab_add_slab_add_slab_component__WEBPACK_IMPORTED_MODULE_20__.AddSlabComponent,
        _account_account_dialog_add_account_component__WEBPACK_IMPORTED_MODULE_2__.AddAccountComponent,
        _brokerage_setup_add_setup_details_add_setup_details_component__WEBPACK_IMPORTED_MODULE_21__.AddSetupDetailsComponent,
        _branch_branch_component__WEBPACK_IMPORTED_MODULE_22__.BranchComponent,
        _tax_master_tax_master_component__WEBPACK_IMPORTED_MODULE_23__.TaxComponent,
        _tax_master_tax_dialog_add_tax_master_component__WEBPACK_IMPORTED_MODULE_24__.AddTaxComponent,
        _branch_add_branch_account_add_branch_account_component__WEBPACK_IMPORTED_MODULE_25__.AddBranchAccountComponent,
        _exchange_add_exchange_add_exchange_component__WEBPACK_IMPORTED_MODULE_27__.AddExchangeComponent,
        _account_head_account_head_component__WEBPACK_IMPORTED_MODULE_28__.AccountHeadComponent,
        _account_head_add_account_head_add_account_head_component__WEBPACK_IMPORTED_MODULE_29__.AddAccountHeadComponent,
        _interest_master_interest_master_component__WEBPACK_IMPORTED_MODULE_30__.InterestMasterComponent,
        _interest_master_add_interest_master_add_interest_master_component__WEBPACK_IMPORTED_MODULE_31__.AddInterestMasterComponent,
        _symbol_mapping_symbol_mapping_component__WEBPACK_IMPORTED_MODULE_32__.SymbolMappingComponent,
        _account_account_dialog_add_intereset_add_intereset_component__WEBPACK_IMPORTED_MODULE_33__.AddInteresetComponent,
        _account_account_dialog_file_code_tab_file_code_tab_component__WEBPACK_IMPORTED_MODULE_34__.FileCodeTabComponent,
        _account_account_dialog_self_share_tab_self_share_tab_component__WEBPACK_IMPORTED_MODULE_35__.SelfShareTabComponent,
        _account_account_dialog_brokerage_tab_brokerage_tab_component__WEBPACK_IMPORTED_MODULE_36__.BrokerageTabComponent,
        _item_group_item_group_component__WEBPACK_IMPORTED_MODULE_38__.ItemGroupComponent,
        _item_group_add_item_group_add_item_group_component__WEBPACK_IMPORTED_MODULE_39__.AddItemGroupComponent,
        _brokerage_setup_lock_brokerage_lock_brokerage_component__WEBPACK_IMPORTED_MODULE_40__.LockBrokerageComponent,
        _brokerage_setup_view_item_group_view_item_group_component__WEBPACK_IMPORTED_MODULE_41__.ViewItemGroupComponent,
        _sub_brokerage_setup_sub_brokerage_setup_component__WEBPACK_IMPORTED_MODULE_42__.SubBrokerageSetupComponent,
        _sub_brokerage_setup_sub_add_setup_details_sub_add_setup_details_component__WEBPACK_IMPORTED_MODULE_43__.SubAddSetupDetailsComponent,
        _sub_brokerage_setup_sub_lock_brokerage_sub_lock_brokerage_component__WEBPACK_IMPORTED_MODULE_44__.SubLockBrokerageComponent,
        _sharing_setup_sharing_setup_component__WEBPACK_IMPORTED_MODULE_45__.SharingSetupComponent,
        _sharing_setup_add_sharing_setup_add_sharing_setup_component__WEBPACK_IMPORTED_MODULE_46__.AddSharingSetupComponent,
        _sharing_setup_lock_sharing_setup_lock_sharing_setup_component__WEBPACK_IMPORTED_MODULE_47__.LockSharingSetupComponent,
        _User_invite_user_invite_user_component__WEBPACK_IMPORTED_MODULE_48__.InviteUserComponent,
        _User_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_49__.changePasswordComponent,
        _item_contract_dialog_contract_dialog_component__WEBPACK_IMPORTED_MODULE_50__.ContractDialogComponent,
        _trade_file_trade_file_component__WEBPACK_IMPORTED_MODULE_51__.TradeFileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_53__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_55__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_56__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_57__.AgGridModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵsetComponentScope"](_account_account_dialog_add_account_component__WEBPACK_IMPORTED_MODULE_2__.AddAccountComponent, function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_53__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_53__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_56__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_56__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultFlexDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_59__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_59__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_60__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_61__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_62__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_64__.MatInput, _angular_material_radio__WEBPACK_IMPORTED_MODULE_65__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_65__.MatRadioButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_66__.MatSelect, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_67__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_67__.MatTab, _account_account_dialog_add_intereset_add_intereset_component__WEBPACK_IMPORTED_MODULE_33__.AddInteresetComponent,
    _account_account_dialog_file_code_tab_file_code_tab_component__WEBPACK_IMPORTED_MODULE_34__.FileCodeTabComponent,
    _account_account_dialog_self_share_tab_self_share_tab_component__WEBPACK_IMPORTED_MODULE_35__.SelfShareTabComponent,
    _account_account_dialog_brokerage_tab_brokerage_tab_component__WEBPACK_IMPORTED_MODULE_36__.BrokerageTabComponent]; }, function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_53__.AsyncPipe]; });
_angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵsetComponentScope"](_account_account_dialog_add_account_component__WEBPACK_IMPORTED_MODULE_2__.AddAccountComponent, function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_53__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_53__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_56__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_56__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_58__.DefaultFlexDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_59__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_59__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_60__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_61__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_62__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_64__.MatInput, _angular_material_radio__WEBPACK_IMPORTED_MODULE_65__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_65__.MatRadioButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_66__.MatSelect, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_67__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_67__.MatTab, _account_account_dialog_add_intereset_add_intereset_component__WEBPACK_IMPORTED_MODULE_33__.AddInteresetComponent,
    _account_account_dialog_file_code_tab_file_code_tab_component__WEBPACK_IMPORTED_MODULE_34__.FileCodeTabComponent,
    _account_account_dialog_self_share_tab_self_share_tab_component__WEBPACK_IMPORTED_MODULE_35__.SelfShareTabComponent,
    _account_account_dialog_brokerage_tab_brokerage_tab_component__WEBPACK_IMPORTED_MODULE_36__.BrokerageTabComponent]; }, function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_53__.AsyncPipe]; });


/***/ }),

/***/ 86571:
/*!******************************************************************************!*\
  !*** ./src/app/Forms/Master/product/product-dialog/add-product.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductComponent": () => (/* binding */ AddProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);















function AddProductComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", exchange_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", exchange_r8.name, " ");
} }
function AddProductComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Symbol is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Price unit is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "lot size is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "isincode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_mat_error_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Qty Unit is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddProductComponent_mat_error_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "security Group is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddProductComponent {
    constructor(formBuilder, dialogRef, data, _appService) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        this.selectedId = data.id;
        if (data.id == null) {
            this.selectedId = 0;
        }
    }
    bindFormControls() {
        this.productForm = this.formBuilder.group({
            'ExId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'symbol': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'priceUnit': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'description': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'lotSize': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'isincode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'qtyUnit': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'securityGroup': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'id': [0]
        });
        this.initialApiCalls();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([this._appService.getExchangeName()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            this.exchangeList = response[0];
        })).subscribe(res => {
        });
    }
    getProductInfo() {
        this._appService.getProductById(this.selectedId).subscribe((res) => {
            this.productForm.get('symbol').setValue(res.symbol);
            this.productForm.get('priceUnit').setValue(res.priceUnit);
            this.productForm.get('description').setValue(res.description);
            this.productForm.get('lotSize').setValue(res.lotSize);
            this.productForm.get('qtyUnit').setValue(res.qtyUnit);
            this.productForm.get('isincode').setValue(res.isincode);
            this.productForm.get('securityGroup').setValue(res.securityGroup);
            this.productForm.get('id').setValue(res.id);
            this.productForm.get('ExId').setValue(res.exId);
        });
    }
    onSubmit(values) {
        this.productForm.controls['symbol'].setValue(String(this.productForm.get('symbol').value));
        this.productForm.controls['priceUnit'].setValue(String(this.productForm.get('priceUnit').value));
        this.productForm.controls['description'].setValue(String(this.productForm.get('description').value));
        this.productForm.controls['lotSize'].setValue(Number(this.productForm.get('lotSize').value));
        this.productForm.controls['qtyUnit'].setValue(Number(this.productForm.get('qtyUnit').value));
        this.productForm.controls['isincode'].setValue(String(this.productForm.get('isincode').value));
        this.productForm.controls['securityGroup'].setValue(String(this.productForm.get('securityGroup').value));
        var body = this.productForm.value;
        debugger;
        //body.accountGroupId = this.getAcGroupId(this.acGroupCtrl.value);
        //body.accountHeadId = this.getAcHeadId(this.acHeadCtrl.value);
        //body.CityId = this.getCityId(this.cityCtrl.value);
        if (this.productForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._appService.saveProduct(body).subscribe(result => {
                console.log("result", result);
                this.dialogRef.close();
            }, err => {
                console.log(err);
            });
        }
    }
    ngOnInit() {
        this.bindFormControls();
        if (this.selectedId != 0) {
            this.getProductInfo();
        }
        else {
            this.productForm.get('id').setValue(0);
        }
    }
    close() {
        this.dialogRef.close();
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
AddProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-product-dialog"]], decls: 65, vars: 9, consts: [[1, "heading", "mb-0"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "", "formControlName", "ExId"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "symbol", "type", "text"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "priceUnit", "type", "text"], ["fxFlex", "100", "fxFlex.gt-sm", "40", "fxFlex.sm", "50"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "description", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "lotSize", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "isincode", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "qtyUnit", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "securityGroup", "type", "text"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase"], [3, "value"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddProductComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.productForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddProductComponent_mat_option_17_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "mat-form-field", 10)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddProductComponent_mat_error_23_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6)(25, "mat-form-field", 10)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Price Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddProductComponent_mat_error_29_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "mat-form-field", 10)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AddProductComponent_mat_error_35_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6)(37, "mat-form-field", 10)(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Lot Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AddProductComponent_mat_error_41_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6)(43, "mat-form-field", 10)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Isin Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AddProductComponent_mat_error_47_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 6)(49, "mat-form-field", 10)(50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Qty Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, AddProductComponent_mat_error_53_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 14)(55, "mat-form-field", 10)(56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Security Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, AddProductComponent_mat_error_59_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 20)(61, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_61_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.controls.symbol.errors == null ? null : ctx.productForm.controls.symbol.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.controls.priceUnit.errors == null ? null : ctx.productForm.controls.priceUnit.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.controls.description.errors == null ? null : ctx.productForm.controls.description.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.controls.lotSize.errors == null ? null : ctx.productForm.controls.lotSize.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.controls.isincode.errors == null ? null : ctx.productForm.controls.isincode.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.controls.qtyUnit.errors == null ? null : ctx.productForm.controls.qtyUnit.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productForm.controls.securityGroup.errors == null ? null : ctx.productForm.controls.securityGroup.errors.required);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 65554:
/*!***********************************************************!*\
  !*** ./src/app/Forms/Master/product/product.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _product_dialog_add_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-dialog/add-product.component */ 86571);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _shared_common_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/common-utility */ 70556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ 79771);













class ProductComponent {
    constructor(appSettings, _appService, dialog, _masterService) {
        this.appSettings = appSettings;
        this._appService = _appService;
        this.dialog = dialog;
        this._masterService = _masterService;
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
            { headerName: 'Exchange', field: 'exName', filter: true, sorting: true, resizable: true },
            { headerName: 'Symbol', field: 'symbol', filter: true, sorting: true, resizable: true },
            { headerName: 'PriceUnit', field: 'priceUnit', filter: true, sorting: true, resizable: true },
            { headerName: 'Description', field: 'description', filter: true, sorting: true, resizable: true },
            { headerName: 'LotSize', field: 'lotSize', filter: true, sorting: true, resizable: true, valueFormatter: params => _shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.lotSize), type: 'rightAligned' },
            { headerName: 'QtyUnit', field: 'qtyUnit', filter: true, sorting: true, resizable: true },
            { headerName: 'Isincode', field: 'isincode', filter: true, sorting: true, resizable: true },
            { headerName: 'SecurityGroup', field: 'securityGroup', filter: true, sorting: true, resizable: true },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getproductList();
    }
    getproductList() {
        this._appService.getProduct().subscribe((results) => {
            this.productList = results;
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
            this.openSaudaDialog(params.data.id);
        }
        if (params.event.target.dataset.action == "delete") {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
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
                    this._masterService.deleteProduct(params.data.id).subscribe((res) => {
                        this.getproductList();
                    });
                }
            });
        }
    }
    openSaudaDialog(user) {
        let dialogRef = this.dialog.open(_product_dialog_add_product_component__WEBPACK_IMPORTED_MODULE_0__.AddProductComponent, {
            data: { id: user }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getproductList();
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_5__.MasterService)); };
ProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-blank"]], viewQuery: function ProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 13, vars: 5, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "primary", 1, "delete-slab", "icon-btn"], [1, "material-icons-outlined"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon")(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " file_download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_7_listener() { return ctx.openSaudaDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Add Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 5)(12, "ag-grid-angular", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cellClicked", function ProductComponent_Template_ag_grid_angular_cellClicked_12_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.productList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 18091:
/*!************************************************************************!*\
  !*** ./src/app/Forms/Master/sauda/sauda-dialog/add-sauda.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSaudaComponent": () => (/* binding */ AddSaudaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 57371);

















function AddSaudaComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
} }
function AddSaudaComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "saudaCode is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddSaudaComponent_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", exchange_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", exchange_r9.name, " ");
} }
function AddSaudaComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r10.name, " ");
} }
function AddSaudaComponent_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "strikePrice is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddSaudaComponent {
    constructor(snackBar, formBuilder, dialogRef, data, _appService) {
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        debugger;
        this.selectedId = data.id;
        if (data.id == null) {
            this.selectedId = 0;
        }
    }
    bindFormControls() {
        this.saudaForm = this.formBuilder.group({
            'itemId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'saudaCode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'maturity': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'instrumentType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'optionType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'strikePrice': [],
            'firstTradingDate': [],
            'lastTradingDate': [],
            'id': [],
        });
    }
    ngOnInit() {
        this.bindFormControls();
        this.initialApiCalls();
        if (this.selectedId != 0) {
            this.getInfo();
        }
        else {
            this.saudaForm.get('id').setValue(0);
        }
    }
    getInfo() {
        this._appService.getSaudaById(this.selectedId).subscribe((res) => {
            debugger;
            this.saudaForm.get('itemId').setValue(res.itemId);
            this.saudaForm.get('saudaCode').setValue(res.saudaCode);
            this.saudaForm.get('maturity').setValue(res.maturity);
            this.saudaForm.get('instrumentType').setValue(res.instrumentType);
            this.saudaForm.get('optionType').setValue(res.optionType);
            this.saudaForm.get('strikePrice').setValue(res.strikePrice);
            this.saudaForm.get('firstTradingDate').setValue(res.firstTradingDate);
            this.saudaForm.get('lastTradingDate').setValue(res.lastTradingDate);
            this.saudaForm.get('id').setValue(res.id);
        });
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([this._appService.getInstrumentList(), this._appService.getOptionList(),
            this._appService.getItemListDrp()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            debugger;
            this.instrumentList = response[0];
            this.optionType = response[1];
            this.itemList = response[2];
        })).subscribe(res => {
        });
    }
    onKey(event) {
        this.itemList = this.search(event);
    }
    search(value) {
        let filter = value.toLowerCase();
        return this.itemList.filter(option => option.toLowerCase().startsWith(filter));
    }
    onSubmit(values) {
        //if ((this.saudaForm.get('ApplyCtt').value) == null) {
        //  this.saudaForm.controls['ApplyCtt'].setValue(false);
        //}
        //if ((this.saudaForm.get('applyRiskManagementFees').value) == null) {
        //  this.saudaForm.controls['applyRiskManagementFees'].setValue(false);
        //}
        this.saudaForm.controls['strikePrice'].setValue(Number(this.saudaForm.get('strikePrice').value));
        var body = this.saudaForm.value;
        debugger;
        //body.accountGroupId = this.getAcGroupId(this.acGroupCtrl.value);
        //body.accountHeadId = this.getAcHeadId(this.acHeadCtrl.value);
        //body.CityId = this.getCityId(this.cityCtrl.value);
        if (this.saudaForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._appService.saveSauda(body).subscribe(result => {
                if (result.isSuccess) {
                    console.log("result", result);
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
    showToaster(message, isError = false) {
        const panelClass = isError ? ['red-text'] : undefined;
        const label = isError ? "Error" : "Success";
        const time = isError ? 600000 : 300000;
        this.snackBar.open(message, label, {
            duration: time,
            panelClass: panelClass,
        });
    }
    close() {
        this.dialogRef.close();
    }
}
AddSaudaComponent.ɵfac = function AddSaudaComponent_Factory(t) { return new (t || AddSaudaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
AddSaudaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddSaudaComponent, selectors: [["app-sauda-dialog"]], decls: 71, vars: 13, consts: [[1, "heading", "mb-0"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Item", "formControlName", "itemId"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "saudaCode", "type", "text"], [4, "ngIf"], ["matInput", "", "formControlName", "maturity", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["Maturity", ""], ["placeholder", "Select InsType", "formControlName", "instrumentType"], ["placeholder", "Select Option", "formControlName", "optionType"], ["matInput", "", "autocomplete", "off", "placeholder", "", "formControlName", "strikePrice", "type", "number"], ["matInput", "", "formControlName", "firstTradingDate", 3, "matDatepicker"], ["FirstTradingDate", ""], ["matInput", "", "formControlName", "lastTradingDate", 3, "matDatepicker"], ["LastTradingDate", ""], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [3, "value"]], template: function AddSaudaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sauda Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSaudaComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddSaudaComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.saudaForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Sauda Master Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddSaudaComponent_mat_option_17_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6)(19, "mat-form-field", 10)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sauda Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddSaudaComponent_mat_error_23_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6)(25, "mat-form-field", 10)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Maturity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 13)(29, "mat-datepicker-toggle", 14)(30, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6)(33, "mat-form-field", 7)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Instrument Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AddSaudaComponent_mat_option_37_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 6)(39, "mat-form-field", 7)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Option Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AddSaudaComponent_mat_option_43_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 6)(45, "mat-form-field", 10)(46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Strike Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, AddSaudaComponent_mat_error_49_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6)(51, "mat-form-field", 10)(52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "First Trading Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 19)(55, "mat-datepicker-toggle", 14)(56, "mat-datepicker", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 6)(59, "mat-form-field", 10)(60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Last Trading Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 21)(63, "mat-datepicker-toggle", 14)(64, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 23)(67, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSaudaComponent_Template_button_click_67_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](57);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.saudaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.itemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.saudaForm.controls.saudaCode.errors == null ? null : ctx.saudaForm.controls.saudaCode.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.instrumentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.optionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.saudaForm.controls.strikePrice.errors == null ? null : ctx.saudaForm.controls.strikePrice.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.saudaForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2F1ZGEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 61425:
/*!*******************************************************!*\
  !*** ./src/app/Forms/Master/sauda/sauda.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaudaComponent": () => (/* binding */ SaudaComponent)
/* harmony export */ });
/* harmony import */ var _sauda_dialog_add_sauda_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sauda-dialog/add-sauda.component */ 18091);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _shared_common_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/common-utility */ 70556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ 79771);











class SaudaComponent {
    constructor(appSettings, dialog, _masterService) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this._masterService = _masterService;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'Name' },
            { name: 'item' },
            { name: 'name' }
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
                maxWidth: 110, resizable: true, filter: false
            },
            { headerName: 'Item', field: 'itemName', filter: true, sorting: true, resizable: true },
            { headerName: 'SaudaCode', field: 'saudaCode', filter: true, sorting: true, resizable: true },
            { headerName: 'Maturity', field: 'maturityDate', filter: true, sorting: true, resizable: true },
            { headerName: 'InsType', field: 'insName', filter: true, sorting: true, resizable: true },
            { headerName: 'OptionType', field: 'optionType', filter: true, sorting: true, resizable: true },
            { headerName: 'StrikePrice', field: 'strikePrice', filter: true, sorting: true, resizable: true, valueFormatter: params => _shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.strikePrice), type: 'rightAligned' },
            { headerName: 'FirstTradingDate', field: 'firstTradingDt', filter: true, sorting: true, resizable: true },
            { headerName: 'LastTradingDate', field: 'lastTradingDt', filter: true, sorting: true, resizable: true }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getList();
    }
    onActivate(event) {
        console.log('Activate Event', event);
    }
    getList() {
        this._masterService.getSaudaList().subscribe((results) => {
            this.itemList = results;
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
            this.openDialog(params.data.id);
        }
        if (params.event.target.dataset.action == "delete") {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
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
                    this._masterService.deleteSauda(params.data.id).subscribe((res) => {
                        this.getList();
                    });
                }
            });
        }
    }
    openDialog(user) {
        let dialogRef = this.dialog.open(_sauda_dialog_add_sauda_component__WEBPACK_IMPORTED_MODULE_0__.AddSaudaComponent, {
            data: { id: user }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getList();
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
SaudaComponent.ɵfac = function SaudaComponent_Factory(t) { return new (t || SaudaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService)); };
SaudaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SaudaComponent, selectors: [["app-blank"]], decls: 13, vars: 5, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "primary", 1, "delete-slab", "icon-btn"], [1, "material-icons-outlined"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"]], template: function SaudaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon")(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " file_download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaudaComponent_Template_button_click_7_listener() { return ctx.openDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Add Sauda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5)(12, "ag-grid-angular", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function SaudaComponent_Template_ag_grid_angular_cellClicked_12_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.itemList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXVkYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 48965:
/*!*********************************************************************************************!*\
  !*** ./src/app/Forms/Master/sharing-setup/add-sharing-setup/add-sharing-setup.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSharingSetupComponent": () => (/* binding */ AddSharingSetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master-second.service */ 8703);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);

















function AddSharingSetupComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add Sub Brokerage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddSharingSetupComponent_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Modify Sub Brokerage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddSharingSetupComponent_ng_template_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Edit Sub Brokerage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddSharingSetupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddSharingSetupComponent_ng_template_1_h2_0_Template, 2, 0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddSharingSetupComponent_ng_template_1_h2_1_Template, 2, 0, "h2", 18);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isEditMode == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isEditMode == 2);
} }
function AddSharingSetupComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r7.name, " ");
} }
function AddSharingSetupComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Share Value is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddSharingSetupComponent {
    constructor(datePipe, formBuilder, dialogRef, data, _appService, _masterSecondService) {
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        this._masterSecondService = _masterSecondService;
        this.salbId = data.slabId;
        this.parentData = data;
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'applyOn': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            'shareValue': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            'id': [0],
        });
        this.initialApiCalls();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([this._appService.getSharingApplyOnDDL(),
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            this.applyOnList = response[0];
        })).subscribe(res => {
        });
    }
    ngOnInit() {
        this.bindFormControls();
        this.isEditMode = this.parentData.isEditMode;
        if (this.parentData.isEditMode === 2 && this.parentData.editParms) {
            this.getSelectedSlabDetailsInfo(this.parentData.editParms);
        }
    }
    getSelectedSlabDetailsInfo(editParms) {
        this.itemForm.patchValue({
            applyOn: editParms.applyOn,
            shareValue: editParms.shareValue,
        });
    }
    close() {
        this.dialogRef.close();
    }
    onSubmit(values) {
        console.log(values);
        var body = this.itemForm.value;
        console.log(body);
        body.slabId = this.salbId;
        body.id = this.parentData.isEditMode;
        body.branchId = this.parentData.branchIds;
        body.accounts = this.parentData.accountIds.filter((val) => val != -1);
        body.fromDate = this.datePipe.transform(this.parentData.fromDt, 'yyyy-MM-dd');
        body.toDate = this.datePipe.transform(this.parentData.toDt, 'yyyy-MM-dd');
        body.exchanges = this.parentData.exchangeIds.filter((val) => val != -1);
        body.higherSideOnly = false;
        if (this.itemForm.valid) {
            //const body = JSON.stringify(addFormData);
            if (this.parentData.isEditMode === 2) {
                body.id = this.parentData.editParms.id;
                this._masterSecondService.updateSingleSharing(body).subscribe(result => {
                    this.dialogRef.close();
                });
            }
            else {
                this._masterSecondService.saveSharing(body).subscribe(result => {
                    console.log("result", result);
                    this.dialogRef.close();
                });
            }
        }
    }
}
AddSharingSetupComponent.ɵfac = function AddSharingSetupComponent_Factory(t) { return new (t || AddSharingSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_1__.MasterSecondService)); };
AddSharingSetupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddSharingSetupComponent, selectors: [["app-add-sharing-setup"]], decls: 30, vars: 6, consts: [["class", "heading", 4, "ngIf", "ngIfElse"], ["modifyEditHeading", ""], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "50", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Item", "formControlName", "applyOn"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "Share Value", "formControlName", "shareValue", "type", "number"], [4, "ngIf"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [1, "heading"], ["class", "heading", 4, "ngIf"], [3, "value"]], template: function AddSharingSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddSharingSetupComponent_h2_0_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddSharingSetupComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSharingSetupComponent_Template_a_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3)(5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddSharingSetupComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "h3")(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sub Brokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "mat-form-field", 8)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "ApplyOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AddSharingSetupComponent_mat_option_18_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7)(20, "mat-form-field", 11)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "share Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AddSharingSetupComponent_mat_error_24_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 14)(26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSharingSetupComponent_Template_button_click_26_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isEditMode == 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.applyOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.shareValue.errors == null ? null : ctx.itemForm.controls.shareValue.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2hhcmluZy1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 35728:
/*!***********************************************************************************************!*\
  !*** ./src/app/Forms/Master/sharing-setup/lock-sharing-setup/lock-sharing-setup.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockSharingSetupComponent": () => (/* binding */ LockSharingSetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master-second.service */ 8703);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);















class LockSharingSetupComponent {
    constructor(snackBar, datePipe, formBuilder, dialogRef, data, _masterSecondService) {
        this.snackBar = snackBar;
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._masterSecondService = _masterSecondService;
        this.parentData = data;
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'lockBrokDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
    }
    ngOnInit() {
        this.bindFormControls();
    }
    close() {
        this.dialogRef.close();
    }
    onSubmit(values) {
        console.log(values);
        debugger;
        var body = this.itemForm.value;
        console.log(body);
        body.lockBrokDate = this.datePipe.transform(body.lockBrokDate, 'yyyy-MM-dd');
        body.id = this.parentData.isEditMode;
        body.accounts = this.parentData.accountIds.filter((val) => val != -1);
        body.branchId = this.parentData.branchIds;
        body.fromDate = this.datePipe.transform(this.parentData.fromDt, 'yyyy-MM-dd');
        body.toDate = this.datePipe.transform(this.parentData.toDt, 'yyyy-MM-dd');
        body.exchanges = this.parentData.exchangeIds.filter((val) => val != -1);
        body.higherSideOnly = false;
        if (this.itemForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._masterSecondService.lockSharing(body).subscribe(result => {
                console.log("result", result);
                this.showToaster(result.message);
                this.dialogRef.close();
            });
        }
    }
    showToaster(message) {
        this.snackBar.open(message, "Success", {
            duration: 3000,
        });
    }
}
LockSharingSetupComponent.ɵfac = function LockSharingSetupComponent_Factory(t) { return new (t || LockSharingSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_0__.MasterSecondService)); };
LockSharingSetupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LockSharingSetupComponent, selectors: [["app-lock-sharing-setup"]], decls: 25, vars: 4, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], [1, "dropdown-wrapper"], ["appearance", "outline"], ["matInput", "", "formControlName", "lockBrokDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["lockPicker", ""], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"]], template: function LockSharingSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LockSharingSetupComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LockSharingSetupComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Loak Brokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Lock Brokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 8)(17, "mat-datepicker-toggle", 9)(18, "mat-datepicker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11)(21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LockSharingSetupComponent_Template_button_click_21_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NrLXNoYXJpbmctc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 65720:
/*!***********************************************************************!*\
  !*** ./src/app/Forms/Master/sharing-setup/sharing-setup.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharingSetupComponent": () => (/* binding */ SharingSetupComponent)
/* harmony export */ });
/* harmony import */ var C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _add_sharing_setup_add_sharing_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-sharing-setup/add-sharing-setup.component */ 48965);
/* harmony import */ var _lock_sharing_setup_lock_sharing_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lock-sharing-setup/lock-sharing-setup.component */ 35728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../master-second.service */ 8703);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ag-grid-angular */ 79771);
























const _c0 = ["select"];
const _c1 = ["selectAccount"];
const _c2 = ["selectExchange"];

function SharingSetupComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r11.name, " ");
  }
}

function SharingSetupComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r12.name, " ");
  }
}

function SharingSetupComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r13.name, " ");
  }
}

class SharingSetupComponent {
  constructor(datePipe, snackBar, appSettings, _appService, dialog, _masterService, _masterSecondService) {
    this.datePipe = datePipe;
    this.snackBar = snackBar;
    this.appSettings = appSettings;
    this._appService = _appService;
    this.dialog = dialog;
    this._masterService = _masterService;
    this._masterSecondService = _masterSecondService;
    this.brokeragesetupList = [];
    this.branchAllSellected = false;
    this.agGridOptions = {
      defaultColDef: {
        filter: true,
        flex: 1,
        sortable: true,
        wraptext: true,
        resizable: true,
        minWidth: 100
      },
      suppressRowHoverHighlight: true //suppressSizeToFit: true,

    };
    this.columnDefs = [{
      headerName: 'Action',
      field: 'fileIcon',
      cellRenderer: this.actionCellRenderer,
      resizable: true,
      filter: false
    }, {
      headerName: 'ApplyOn',
      field: 'applyOnName',
      filter: true,
      sorting: true,
      resizable: true
    }, // { headerName: 'Apply OnQty',  field: 'applyOnQtyName', filter: true, sorting: true, resizable: true },
    {
      headerName: 'Exchange',
      minWidth: 120,
      maxWidth: 120,
      field: 'exchange',
      filter: true,
      sorting: true,
      resizable: true
    }, {
      headerName: 'Share Value',
      field: 'shareValue',
      filter: true,
      sorting: true,
      resizable: true
    },
    /*    { headerName: 'IntradaySingleSideOnly', field: 'intradaySingleSideOnly', filter: true, sorting: true, resizable: true },*/
    {
      headerName: 'FromDT',
      field: 'fromDT',
      filter: true,
      sorting: true,
      resizable: true
    }, {
      headerName: 'ToDT',
      field: 'toDT',
      filter: true,
      sorting: true,
      resizable: true
    }];
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.fetchDropdownData();
    this.getBrokerageSetupList();
  }

  onGridReady(event) {}

  getBrokerageSetupList() {
    if (this.areRequiredValuesSelected()) {
      var accountIds = this.accountIds.filter(val => val != -1);
      var req = {
        "exchange": this.exchangeIds.filter(val => val != -1),
        "branchId": this.branchIds,
        "accounts": accountIds,
        "fromDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
        "toDate": this.datePipe.transform(this.toDt, 'yyyy-MM-dd')
      };

      this._masterSecondService.getSharingSetupList(req).subscribe(results => {
        this.searchedData = req;
        this.brokeragesetupList = results.data;
      });
    }
  }

  getBrokerageAddValidation() {
    var _this = this;

    return (0,C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accountIds = _this.accountIds.filter(val => val != "-1");

      const req = {
        branchId: _this.branchIds,
        itemGroupId: _this.itemGroupIds,
        accounts: accountIds,
        exchange: _this.exchangeIds.filter(val => val != "-1"),
        fromDate: _this.datePipe.transform(_this.fromDt, 'yyyy-MM-dd'),
        toDate: _this.datePipe.transform(_this.toDt, 'yyyy-MM-dd'),
        instrumentType: _this.instrumentType
      };

      try {
        const results = yield _this._masterSecondService.getSharingAddValidation(req).toPromise();

        if (results.message) {
          _this.showToaster(results.message);

          _this.searchedData = req;
          _this.brokeragesetupList = results.data;
          return results.message;
        } else {
          return results.message;
        }
      } catch (error) {
        // Handle error here
        console.error('Error during validation:', error);
        return '';
      }
    })();
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError ? 6000 : 3000;
    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass
    });
  }

  areRequiredValuesSelected() {
    return this.branchIds && this.accountIds && this.exchangeIds && this.fromDt && this.toDt;
  }

  fetchDropdownData() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([this._masterService.getBranchDDLList(), this._masterService.getAccount(), this._masterService.getExchangeName(), this._appService.getCompany()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(response => {
      this.branchList = response[0];
      this.filteredProviders = response[0]; // this.accountList = response[2];
      // this.filteredAccountList = response[2];

      this.exchangeList = response[2];
      this.filteredExchangeList = response[2];
      this.companydetails = response[3];
      this.fromDt = new Date(this.companydetails[0].finBeginDt);
      this.toDt = new Date(this.companydetails[0].finEndDt);
    })).subscribe(res => {});
  }

  actionCellRenderer(params) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some(cell => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>
                      <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
    return eGui;
  }

  onInputChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredProviders = this.branchList.filter(data => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onInputAccountListChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredAccountList = this.accountList.filter(data => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onInputExchangeChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredExchangeList = this.exchangeList.filter(data => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  branchAllSelection() {
    this.branchAllSellected = true;
    var isAllChecked = this.select.options.first.selected;
    this.select.options.forEach((item, index) => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }

      if (index === this.select.options.length - 1) {
        this.onBranchChange([], true);
      }
    });
  }

  accountAllSelection() {
    var isAllChecked = this.selectAccount.options.first.selected;
    this.selectAccount.options.forEach(item => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }
    });
  }

  exchangeAllSelection() {
    var isAllChecked = this.selectExchange.options.first.selected;
    this.selectExchange.options.forEach(item => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }
    });
  }

  onKey(value) {
    this.branchList = this.search(value);
  }

  search(value) {
    let filter = value.toLowerCase();
    return this.branchList.filter(option => option.toLowerCase().startsWith(filter));
  }

  onBranchChange(event, isLastIndex) {
    if (this.branchAllSellected && !isLastIndex) {
      return;
    }

    if (this.branchIds.length < 2 && this.branchIds[0] == '-1') {
      return;
    } //event.source.options._results[1]._selected = true;
    //event.source.options._results[1]._active = true;


    if (this.branchIds) {
      this._masterService.getFilterBranchAccounts(this.branchIds).subscribe(response => {
        this.accountList = response;
        this.filteredAccountList = this.accountList;
      });
    }
  }

  addBrokerage(event) {}

  openSlabDetailsDialog(event) {
    var _this2 = this;

    return (0,C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isValid = yield _this2.getBrokerageAddValidation();

      if (isValid == '' && event === 'add') {
        const dialogRef = _this2.dialog.open(_add_sharing_setup_add_sharing_setup_component__WEBPACK_IMPORTED_MODULE_2__.AddSharingSetupComponent, {
          data: {
            selectedSlabId: null,
            fromDt: _this2.fromDt,
            toDt: _this2.toDt,
            branchIds: _this2.branchIds,
            accountIds: _this2.accountIds,
            exchangeIds: _this2.exchangeIds,
            isEditMode: 0
          }
        });

        dialogRef.afterClosed().subscribe(user => {
          _this2.getBrokerageSetupList();
        });
      } else if (isValid !== '' && event === 'lock') {
        const dialogRef = _this2.dialog.open(_lock_sharing_setup_lock_sharing_setup_component__WEBPACK_IMPORTED_MODULE_3__.LockSharingSetupComponent, {
          data: {
            selectedSlabId: null,
            fromDt: _this2.fromDt,
            toDt: _this2.toDt,
            branchIds: _this2.branchIds,
            accountIds: _this2.accountIds,
            exchangeIds: _this2.exchangeIds,
            isEditMode: 0
          }
        });

        dialogRef.afterClosed().subscribe(user => {
          _this2.getBrokerageSetupList();
        });
      }
    })();
  }

  openModifySetupDialog() {
    const dialogRef = this.dialog.open(_add_sharing_setup_add_sharing_setup_component__WEBPACK_IMPORTED_MODULE_2__.AddSharingSetupComponent, {
      data: {
        selectedSlabId: null,
        fromDt: this.fromDt,
        toDt: this.toDt,
        branchIds: this.branchIds,
        accountIds: this.accountIds,
        exchangeIds: this.exchangeIds,
        isEditMode: 1
      }
    });
    dialogRef.afterClosed().subscribe(user => {
      this.getBrokerageSetupList();
    });
  }

  onFromDateChange() {
    console.log("fromDt changed:", this.fromDt);
  }

  openEditBrokerageDetails(params) {
    const dialogRef = this.dialog.open(_add_sharing_setup_add_sharing_setup_component__WEBPACK_IMPORTED_MODULE_2__.AddSharingSetupComponent, {
      data: {
        selectedSlabId: null,
        fromDt: this.searchedData.fromDate,
        toDt: this.searchedData.toDate,
        branchIds: this.searchedData.branchId,
        accountIds: this.searchedData.accounts,
        exchangeIds: this.searchedData.exchange,
        isEditMode: 2,
        editParms: params
      }
    });
    dialogRef.afterClosed().subscribe(user => {
      this.getBrokerageSetupList();
    });
  }

  onGridClick(params) {
    if (params.event.target.dataset.action == "edit") {
      this.openEditBrokerageDetails(params.data);
    }

    if (params.event.target.dataset.action == "delete") {
      const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
        data: {
          message: 'Do you really want to delete this record?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });
      dialogRef.afterClosed().subscribe(confirmed => {
        if (confirmed) {
          this._masterService.deleteSubBrokerageSetup(params.data.id).subscribe(res => {
            if (res.isSuccess) {
              this.showToaster(res.message);
              this.getBrokerageSetupList();
            } else {
              this.showToaster(res.message, true);
            }
          });
        }
      });
    }
  }

}

SharingSetupComponent.ɵfac = function SharingSetupComponent_Factory(t) {
  return new (t || SharingSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_6__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_7__.MasterSecondService));
};

SharingSetupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SharingSetupComponent,
  selectors: [["app-sharing-setup"]],
  viewQuery: function SharingSetupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.selectAccount = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.selectExchange = _t.first);
    }
  },
  decls: 75,
  vars: 21,
  consts: [[1, "row"], [1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "20"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Branch", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange", "selectionChange"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Branch", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "placeholder", "Select Account", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["selectAccount", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Account", 1, "milti-search-box", 3, "input"], ["value", "-1", 3, "click"], ["multiple", "", "placeholder", "Select Exchange", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["selectExchange", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Exchange", 1, "milti-search-box", 3, "input"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "15"], ["appearance", "outline", 1, "calendar"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "To", 3, "matDatepicker", "ngModel", "ngModelChange"], ["picker2", ""], ["fxFlex", "100", "fxFlex.gt-sm", "7", "fxFlex.sm", "7"], ["mat-raised-button", "", "color", "primary", 1, "search-icon-btn", 3, "disabled", "click"], [1, "btn-group"], ["mat-raised-button", "", "matTooltip", "Lock Sharing", "matTooltipPosition", "above", "color", "accent", 1, "icon-btn", 3, "disabled", "click"], [1, "lock-icon"], ["mat-raised-button", "", "matTooltip", "Modify Sahring", "matTooltipPosition", "above", "color", "accent", 1, "icon-btn", "ml-15", 3, "disabled", "click"], [1, "edit-icon"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Add Sharing", "matTooltipPosition", "above", 1, "icon-btn", 3, "disabled", "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked", "gridReady"], [3, "value"]],
  template: function SharingSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Select Branch *");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-select", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SharingSetupComponent_Template_mat_select_ngModelChange_8_listener($event) {
        return ctx.branchIds = $event;
      })("selectionChange", function SharingSetupComponent_Template_mat_select_selectionChange_8_listener($event) {
        return ctx.onBranchChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function SharingSetupComponent_Template_input_input_10_listener($event) {
        return ctx.onInputChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, SharingSetupComponent_mat_option_12_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "div", 4)(16, "mat-form-field", 5)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Select Account *");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-select", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SharingSetupComponent_Template_mat_select_ngModelChange_19_listener($event) {
        return ctx.accountIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "input", 13, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function SharingSetupComponent_Template_input_input_21_listener($event) {
        return ctx.onInputAccountListChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SharingSetupComponent_Template_mat_option_click_23_listener() {
        return ctx.accountAllSelection();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Select All");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, SharingSetupComponent_mat_option_25_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "mat-form-field", 5)(30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Select Exchange *");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-select", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SharingSetupComponent_Template_mat_select_ngModelChange_32_listener($event) {
        return ctx.exchangeIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "input", 17, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function SharingSetupComponent_Template_input_input_34_listener($event) {
        return ctx.onInputExchangeChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SharingSetupComponent_Template_mat_option_click_36_listener() {
        return ctx.exchangeAllSelection();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Select All");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, SharingSetupComponent_mat_option_38_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 18)(40, "div", 3)(41, "div", 4)(42, "mat-form-field", 19)(43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SharingSetupComponent_Template_input_ngModelChange_45_listener($event) {
        return ctx.fromDt = $event;
      })("ngModelChange", function SharingSetupComponent_Template_input_ngModelChange_45_listener() {
        return ctx.onFromDateChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "mat-datepicker-toggle", 21)(47, "mat-datepicker", null, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 18)(50, "div", 3)(51, "div", 4)(52, "mat-form-field", 19)(53, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SharingSetupComponent_Template_input_ngModelChange_55_listener($event) {
        return ctx.toDt = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "mat-datepicker-toggle", 21)(57, "mat-datepicker", null, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 25)(60, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SharingSetupComponent_Template_button_click_60_listener() {
        return ctx.getBrokerageSetupList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 27)(64, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SharingSetupComponent_Template_button_click_64_listener() {
        return ctx.openSlabDetailsDialog("lock");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "mat-icon", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "lock");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SharingSetupComponent_Template_button_click_67_listener() {
        return ctx.openModifySetupDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "mat-icon", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "exposure");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SharingSetupComponent_Template_button_click_70_listener() {
        return ctx.openSlabDetailsDialog("add");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "add_to_queue");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 33)(74, "ag-grid-angular", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cellClicked", function SharingSetupComponent_Template_ag_grid_angular_cellClicked_74_listener($event) {
        return ctx.onGridClick($event);
      })("gridReady", function SharingSetupComponent_Template_ag_grid_angular_gridReady_74_listener($event) {
        return ctx.onGridReady($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](48);

      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](58);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.branchIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.filteredProviders);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.accountIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.filteredAccountList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.exchangeIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.filteredExchangeList);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r9)("ngModel", ctx.fromDt);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r10)("ngModel", ctx.toDt);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowData", ctx.brokeragesetupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, ag_grid_angular__WEBPACK_IMPORTED_MODULE_24__.AgGridAngular],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyaW5nLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 16380:
/*!***********************************************************************************************************!*\
  !*** ./src/app/Forms/Master/sub-brokerage-setup/sub-add-setup-details/sub-add-setup-details.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubAddSetupDetailsComponent": () => (/* binding */ SubAddSetupDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);

















function SubAddSetupDetailsComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add Sub Brokerage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubAddSetupDetailsComponent_ng_template_1_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Modify Sub Brokerage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubAddSetupDetailsComponent_ng_template_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Sub Brokerage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubAddSetupDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SubAddSetupDetailsComponent_ng_template_1_h2_0_Template, 2, 0, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubAddSetupDetailsComponent_ng_template_1_h2_1_Template, 2, 0, "h2", 22);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isEditMode == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isEditMode == 2);
} }
function SubAddSetupDetailsComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
} }
function SubAddSetupDetailsComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
} }
function SubAddSetupDetailsComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "DeliveryBrokeRate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SubAddSetupDetailsComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "IntraDayBrokeRate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SubAddSetupDetailsComponent {
    constructor(datePipe, formBuilder, dialogRef, data, _appService) {
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        this.salbId = data.slabId;
        this.parentData = data;
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'applyOn': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'applyOnQty': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'deliveryBrokRate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'intradayBrokRate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            'intradaySingleSideonly': [false],
            'id': [0],
        });
        this.initialApiCalls();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([this._appService.getExchangeName(), this._appService.getInstrumentList(), this._appService.getItemListDrp(),
            this._appService.getApplyOnQtyDDL(),
            this._appService.getApplyOnDDL(),
            this._appService.getAccount(),
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            this.exchangeList = response[0];
            this.instrumentList = response[1];
            this.itemList = response[2];
            this.applyOnQtyList = response[3];
            this.applyOnList = response[4];
            this.accountList = response[5];
        })).subscribe(res => {
        });
    }
    ngOnInit() {
        this.bindFormControls();
        this.isEditMode = this.parentData.isEditMode;
        if (this.parentData.isEditMode === 2 && this.parentData.editParms) {
            this.getSelectedSlabDetailsInfo(this.parentData.editParms);
        }
    }
    getSelectedSlabDetailsInfo(editParms) {
        this.itemForm.patchValue({
            applyOn: editParms.applyOn,
            applyOnQty: editParms.applyOnQty,
            deliveryBrokRate: editParms.deliveryBrokRate,
            intradayBrokRate: editParms.intradayBrokRate,
            intradaySingleSideonly: editParms.intradaySingleSideonly
        });
    }
    close() {
        this.dialogRef.close();
    }
    onSubmit(values) {
        console.log(values);
        var body = this.itemForm.value;
        console.log(body);
        body.slabId = this.salbId;
        body.id = this.parentData.isEditMode;
        body.branchId = this.parentData.branchIds;
        body.accounts = this.parentData.accountIds.filter((val) => val != -1);
        ;
        body.fromDate = this.datePipe.transform(this.parentData.fromDt, 'yyyy-MM-dd');
        body.toDate = this.datePipe.transform(this.parentData.toDt, 'yyyy-MM-dd');
        body.instrumentType = this.parentData.instrumentType;
        body.itemGroupId = this.parentData.itemGroupIds;
        body.higherSideOnly = false;
        if (this.itemForm.valid) {
            //const body = JSON.stringify(addFormData);
            if (this.parentData.isEditMode === 2) {
                body.id = this.parentData.editParms.id;
                this._appService.updateSingleSubBrokerage(body).subscribe(result => {
                    this.dialogRef.close();
                });
            }
            else {
                this._appService.saveSubBrokerageSetup(body).subscribe(result => {
                    console.log("result", result);
                    this.dialogRef.close();
                });
            }
        }
    }
}
SubAddSetupDetailsComponent.ɵfac = function SubAddSetupDetailsComponent_Factory(t) { return new (t || SubAddSetupDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
SubAddSetupDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SubAddSetupDetailsComponent, selectors: [["app-sub-add-setup-details"]], decls: 45, vars: 8, consts: [["class", "heading", 4, "ngIf", "ngIfElse"], ["modifyEditHeading", ""], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select Item", "formControlName", "applyOn"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Select Item", "formControlName", "applyOnQty"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "item Code", "formControlName", "deliveryBrokRate", "type", "number"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "item Code", "formControlName", "intradayBrokRate", "type", "number"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50", 1, "pt-5", "pb-5", "pl-10"], ["formControlName", "intradaySingleSideonly"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], [1, "heading"], ["class", "heading", 4, "ngIf"], [3, "value"]], template: function SubAddSetupDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SubAddSetupDetailsComponent_h2_0_Template, 2, 0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubAddSetupDetailsComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubAddSetupDetailsComponent_Template_a_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3)(5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SubAddSetupDetailsComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "h3")(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sub Brokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "mat-form-field", 8)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "ApplyOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SubAddSetupDetailsComponent_mat_option_18_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7)(20, "mat-form-field", 8)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "ApplyOnQTY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SubAddSetupDetailsComponent_mat_option_24_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7)(26, "mat-form-field", 12)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "DeliveryBrokeRate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, SubAddSetupDetailsComponent_mat_error_30_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7)(32, "mat-form-field", 12)(33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "IntraDayBrokeRate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, SubAddSetupDetailsComponent_mat_error_36_Template, 2, 0, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16)(38, "mat-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Intradaysingleside");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18)(41, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubAddSetupDetailsComponent_Template_button_click_41_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEditMode == 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applyOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applyOnQtyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.deliveryBrokRate.errors == null ? null : ctx.itemForm.controls.deliveryBrokRate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.intradayBrokRate.errors == null ? null : ctx.itemForm.controls.intradayBrokRate.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItYWRkLXNldHVwLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 75836:
/*!***********************************************************************************!*\
  !*** ./src/app/Forms/Master/sub-brokerage-setup/sub-brokerage-setup.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubBrokerageSetupComponent": () => (/* binding */ SubBrokerageSetupComponent)
/* harmony export */ });
/* harmony import */ var C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/common-utility */ 70556);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _sub_add_setup_details_sub_add_setup_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub-add-setup-details/sub-add-setup-details.component */ 16380);
/* harmony import */ var _sub_lock_brokerage_sub_lock_brokerage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-lock-brokerage/sub-lock-brokerage.component */ 15399);
/* harmony import */ var _brokerage_setup_view_item_group_view_item_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../brokerage-setup/view-item-group/view-item-group.component */ 54731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../master-second.service */ 8703);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ag-grid-angular */ 79771);


























const _c0 = ["select"];
const _c1 = ["selectAccount"];

function SubBrokerageSetupComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r12.name, " ");
  }
}

function SubBrokerageSetupComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r13.name, " ");
  }
}

function SubBrokerageSetupComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r14.name, " ");
  }
}

function SubBrokerageSetupComponent_mat_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const exchange_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", exchange_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", exchange_r15.name, " ");
  }
}

class SubBrokerageSetupComponent {
  constructor(datePipe, snackBar, appSettings, _appService, dialog, _masterService, _masterSecondService) {
    this.datePipe = datePipe;
    this.snackBar = snackBar;
    this.appSettings = appSettings;
    this._appService = _appService;
    this.dialog = dialog;
    this._masterService = _masterService;
    this._masterSecondService = _masterSecondService;
    this.brokeragesetupList = [];
    this.branchAllSellected = false;
    this.agGridOptions = {
      defaultColDef: {
        filter: true,
        flex: 1,
        sortable: true,
        wraptext: true,
        resizable: true,
        minWidth: 100
      },
      suppressRowHoverHighlight: true //suppressSizeToFit: true,

    };
    this.columnDefs = [{
      headerName: 'Action',
      field: 'fileIcon',
      cellRenderer: this.actionCellRenderer,
      resizable: true,
      filter: false
    }, {
      headerName: 'ApplyOn',
      field: 'applyOnName',
      filter: true,
      sorting: true,
      resizable: true
    }, {
      headerName: 'Apply OnQty',
      field: 'applyOnQtyName',
      filter: true,
      sorting: true,
      resizable: true
    }, {
      field: 'Intraday BrokRate',
      headerName: 'IntradayBrokRate',
      filter: true,
      sorting: true,
      resizable: true,
      valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.intradayBrokRate)
    }, {
      headerName: 'Delivery BrokRate',
      field: 'deliveryBrokRate',
      filter: true,
      sorting: true,
      resizable: true,
      valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_2__.CommonUtility.formatNumber(params.data.deliveryBrokRate)
    },
    /*{ headerName: 'HigherSide Only', minWidth: 120, maxWidth: 120, field: 'higherSideOnly', filter: true, sorting: true, resizable: true },*/
    {
      headerName: 'Instrument',
      field: 'instrumentType',
      filter: true,
      sorting: true,
      resizable: true
    },
    /*    { headerName: 'IntradaySingleSideOnly', field: 'intradaySingleSideOnly', filter: true, sorting: true, resizable: true },*/
    {
      headerName: 'FromDT',
      field: 'fromDT',
      filter: true,
      sorting: true,
      resizable: true
    }, {
      headerName: 'ToDT',
      field: 'toDT',
      filter: true,
      sorting: true,
      resizable: true
    }];
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.fetchDropdownData();
    this.getBrokerageSetupList();
  }

  onGridReady(event) {}

  getBrokerageSetupList() {
    if (this.areRequiredValuesSelected()) {
      var accountIds = this.accountIds.filter(val => val != -1);
      var req = {
        "branchId": this.branchIds,
        "itemGroupId": this.itemGroupIds,
        "accounts": accountIds,
        "fromDate": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
        "toDate": this.datePipe.transform(this.toDt, 'yyyy-MM-dd'),
        "instrumentType": this.instrumentType
      };

      this._appService.getSubBrokeageList(req).subscribe(results => {
        this.searchedData = req;
        this.brokeragesetupList = results.data;
      });
    }
  }

  getBrokerageAddValidation() {
    var _this = this;

    return (0,C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accountIds = _this.accountIds.filter(val => val != "-1");

      const req = {
        branchId: _this.branchIds,
        itemGroupId: _this.itemGroupIds,
        accounts: accountIds,
        fromDate: _this.datePipe.transform(_this.fromDt, 'yyyy-MM-dd'),
        toDate: _this.datePipe.transform(_this.toDt, 'yyyy-MM-dd'),
        instrumentType: _this.instrumentType
      };

      try {
        const results = yield _this._appService.getSubBrokerageAddValidation(req).toPromise();

        if (results.message) {
          _this.showToaster(results.message);

          _this.searchedData = req;
          _this.brokeragesetupList = results.data;
          return results.message;
        } else {
          return results.message;
        }
      } catch (error) {
        // Handle error here
        console.error('Error during validation:', error);
        return '';
      }
    })();
  }

  showToaster(message, isError = false) {
    const panelClass = isError ? ['red-text'] : undefined;
    const label = isError ? "Error" : "Success";
    const time = isError ? 6000 : 3000;
    this.snackBar.open(message, label, {
      duration: time,
      panelClass: panelClass
    });
  }

  areRequiredValuesSelected() {
    return this.branchIds && this.accountIds && this.itemGroupIds && this.instrumentType && this.fromDt && this.toDt;
  }

  fetchDropdownData() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([this._masterService.getBranchDDLList(), this._masterService.getInstrumentList(), this._masterService.getAccount(), this._masterSecondService.getItemGroupNameList(), this._appService.getCompany()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(response => {
      this.branchList = response[0];
      this.filteredProviders = response[0];
      this.instrumentList = response[1];
      this.instrumentList = response[1]; // this.accountList = response[2];
      // this.filteredAccountList = response[2];

      this.itemGroupIdList = response[3];
      this.filteredItemGroup = response[3];
      this.companydetails = response[4];
      this.fromDt = new Date(this.companydetails[0].finBeginDt);
      this.toDt = new Date(this.companydetails[0].finEndDt);
    })).subscribe(res => {});
  }

  actionCellRenderer(params) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some(cell => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button class="material-icons action-button-edit" data-action="edit">edit </button>
                      <button class="material-icons action-button-red" delete data-action="delete">delete</button>`;
    return eGui;
  }

  onInputChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredProviders = this.branchList.filter(data => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onInputItemGroupChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredItemGroup = this.itemGroupIdList.filter(data => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  onInputAccountListChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredAccountList = this.accountList.filter(data => {
      const prov = data.name.toLowerCase();
      return prov.includes(searchInput);
    });
  }

  branchAllSelection() {
    this.branchAllSellected = true;
    var isAllChecked = this.select.options.first.selected;
    this.select.options.forEach((item, index) => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }

      if (index === this.select.options.length - 1) {
        this.onBranchChange([], true);
      }
    });
  }

  accountAllSelection() {
    var isAllChecked = this.selectAccount.options.first.selected;
    this.selectAccount.options.forEach(item => {
      if (isAllChecked) {
        item.select();
      } else {
        item.deselect();
      }
    });
  }

  onKey(value) {
    this.branchList = this.search(value);
  }

  search(value) {
    let filter = value.toLowerCase();
    return this.branchList.filter(option => option.toLowerCase().startsWith(filter));
  }

  onBranchChange(event, isLastIndex) {
    if (this.branchAllSellected && !isLastIndex) {
      return;
    }

    if (this.branchIds.length < 2 && this.branchIds[0] == '-1') {
      return;
    } //event.source.options._results[1]._selected = true;
    //event.source.options._results[1]._active = true;


    if (this.branchIds) {
      this._masterService.getFilterBranchAccounts(this.branchIds).subscribe(response => {
        this.accountList = response;
        this.filteredAccountList = this.accountList;
      });
    }
  }

  addBrokerage(event) {}

  openSlabDetailsDialog(event) {
    var _this2 = this;

    return (0,C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isValid = yield _this2.getBrokerageAddValidation();

      if (isValid == '' && event === 'add') {
        const dialogRef = _this2.dialog.open(_sub_add_setup_details_sub_add_setup_details_component__WEBPACK_IMPORTED_MODULE_3__.SubAddSetupDetailsComponent, {
          data: {
            selectedSlabId: null,
            fromDt: _this2.fromDt,
            toDt: _this2.toDt,
            branchIds: _this2.branchIds,
            accountIds: _this2.accountIds,
            itemGroupIds: _this2.itemGroupIds,
            instrumentType: _this2.instrumentType,
            isEditMode: 0
          }
        });

        dialogRef.afterClosed().subscribe(user => {
          _this2.getBrokerageSetupList();
        });
      } else if (isValid !== '' && event === 'lock') {
        const dialogRef = _this2.dialog.open(_sub_lock_brokerage_sub_lock_brokerage_component__WEBPACK_IMPORTED_MODULE_4__.SubLockBrokerageComponent, {
          data: {
            selectedSlabId: null,
            fromDt: _this2.fromDt,
            toDt: _this2.toDt,
            branchIds: _this2.branchIds,
            accountIds: _this2.accountIds,
            itemGroupIds: _this2.itemGroupIds,
            instrumentType: _this2.instrumentType,
            isEditMode: 0
          }
        });

        dialogRef.afterClosed().subscribe(user => {
          _this2.getBrokerageSetupList();
        });
      }
    })();
  }

  openModifySetupDialog() {
    const dialogRef = this.dialog.open(_sub_add_setup_details_sub_add_setup_details_component__WEBPACK_IMPORTED_MODULE_3__.SubAddSetupDetailsComponent, {
      data: {
        selectedSlabId: null,
        fromDt: this.fromDt,
        toDt: this.toDt,
        branchIds: this.branchIds,
        accountIds: this.accountIds,
        itemGroupIds: this.itemGroupIds,
        instrumentType: this.instrumentType,
        isEditMode: 1
      }
    });
    dialogRef.afterClosed().subscribe(user => {
      this.getBrokerageSetupList();
    });
  }

  onFromDateChange() {
    console.log("fromDt changed:", this.fromDt);
  }

  openEditBrokerageDetails(params) {
    const dialogRef = this.dialog.open(_sub_add_setup_details_sub_add_setup_details_component__WEBPACK_IMPORTED_MODULE_3__.SubAddSetupDetailsComponent, {
      data: {
        selectedSlabId: null,
        fromDt: this.searchedData.fromDate,
        toDt: this.searchedData.toDate,
        branchIds: this.searchedData.branchId,
        accountIds: this.searchedData.accounts,
        itemGroupIds: this.searchedData.itemGroupId,
        instrumentType: this.searchedData.instrumentType,
        isEditMode: 2,
        editParms: params
      }
    });
    dialogRef.afterClosed().subscribe(user => {
      this.getBrokerageSetupList();
    });
  }

  onGridClick(params) {
    if (params.event.target.dataset.action == "edit") {
      this.openEditBrokerageDetails(params.data);
    }

    if (params.event.target.dataset.action == "delete") {
      const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
        data: {
          message: 'Do you really want to delete this record?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });
      dialogRef.afterClosed().subscribe(confirmed => {
        if (confirmed) {
          this._masterService.deleteSubBrokerageSetup(params.data.id).subscribe(res => {
            this.getBrokerageSetupList();

            if (res.isSuccess) {
              this.showToaster(res.message);
            } else {
              this.showToaster(res.message, true);
            }
          });
        }
      });
    }
  }

  viewAllItemGroups() {
    let dialogRef = this.dialog.open(_brokerage_setup_view_item_group_view_item_group_component__WEBPACK_IMPORTED_MODULE_5__.ViewItemGroupComponent, {
      data: {
        id: this.itemGroupIds
      }
    });
    dialogRef.afterClosed().subscribe(user => {});
  }

}

SubBrokerageSetupComponent.ɵfac = function SubBrokerageSetupComponent_Factory(t) {
  return new (t || SubBrokerageSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_6__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_7__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_8__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_9__.MasterSecondService));
};

SubBrokerageSetupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: SubBrokerageSetupComponent,
  selectors: [["app-sub-brokerage-setup"]],
  viewQuery: function SubBrokerageSetupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.selectAccount = _t.first);
    }
  },
  decls: 83,
  vars: 23,
  consts: [[1, "row"], [1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "15"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Branch", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange", "selectionChange"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Branch", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "placeholder", "Select Account", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["selectAccount", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Account", 1, "milti-search-box", 3, "input"], ["value", "-1", 3, "click"], ["fxFlex", "100", "fxFlex.gt-sm", "23", "fxFlex.sm", "23"], ["matTooltip", "View All Item", "matTooltipPosition", "above", 1, "info-icon", 3, "click"], ["placeholder", "Select Item Group", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Item Group", 1, "milti-search-box", 3, "input"], ["fxFlex", "100", "fxFlex.gt-sm", "23", "fxFlex.sm", "15"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "Select InsType", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "calendar"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "To", 3, "matDatepicker", "ngModel", "ngModelChange"], ["picker2", ""], ["fxFlex", "100", "fxFlex.gt-sm", "7", "fxFlex.sm", "7"], ["mat-raised-button", "", "color", "primary", 1, "search-icon-btn", 3, "disabled", "click"], [1, "btn-group"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Lock Sub Brokerage", "matTooltipPosition", "above", 1, "icon-btn", 3, "disabled", "click"], [1, "lock-icon"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Modify Sub Brokerage", "matTooltipPosition", "above", 1, "icon-btn", 3, "disabled", "click"], [1, "edit-icon"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Add Sub Brokerage", "matTooltipPosition", "above", 1, "icon-btn", 3, "disabled", "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked", "gridReady"], [3, "value"]],
  template: function SubBrokerageSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Select Branch *");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-select", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SubBrokerageSetupComponent_Template_mat_select_ngModelChange_8_listener($event) {
        return ctx.branchIds = $event;
      })("selectionChange", function SubBrokerageSetupComponent_Template_mat_select_selectionChange_8_listener($event) {
        return ctx.onBranchChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function SubBrokerageSetupComponent_Template_input_input_10_listener($event) {
        return ctx.onInputChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, SubBrokerageSetupComponent_mat_option_12_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "div", 4)(16, "mat-form-field", 5)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Select Account *");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-select", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SubBrokerageSetupComponent_Template_mat_select_ngModelChange_19_listener($event) {
        return ctx.accountIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "input", 13, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function SubBrokerageSetupComponent_Template_input_input_21_listener($event) {
        return ctx.onInputAccountListChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubBrokerageSetupComponent_Template_mat_option_click_23_listener() {
        return ctx.accountAllSelection();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Select All");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, SubBrokerageSetupComponent_mat_option_25_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 15)(27, "div", 3)(28, "div", 4)(29, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubBrokerageSetupComponent_Template_mat_icon_click_29_listener() {
        return ctx.viewAllItemGroups();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "info");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-form-field", 5)(32, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Select Item Group *");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "mat-select", 17, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SubBrokerageSetupComponent_Template_mat_select_ngModelChange_34_listener($event) {
        return ctx.itemGroupIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "input", 18, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function SubBrokerageSetupComponent_Template_input_input_36_listener($event) {
        return ctx.onInputItemGroupChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, SubBrokerageSetupComponent_mat_option_38_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 19)(40, "div", 3)(41, "div", 4)(42, "mat-form-field", 20)(43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Instrument Type *");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "mat-select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SubBrokerageSetupComponent_Template_mat_select_ngModelChange_45_listener($event) {
        return ctx.instrumentType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, SubBrokerageSetupComponent_mat_option_46_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 19)(48, "div", 3)(49, "div", 4)(50, "mat-form-field", 22)(51, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SubBrokerageSetupComponent_Template_input_ngModelChange_53_listener($event) {
        return ctx.fromDt = $event;
      })("ngModelChange", function SubBrokerageSetupComponent_Template_input_ngModelChange_53_listener() {
        return ctx.onFromDateChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "mat-datepicker-toggle", 24)(55, "mat-datepicker", null, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 19)(58, "div", 3)(59, "div", 4)(60, "mat-form-field", 22)(61, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SubBrokerageSetupComponent_Template_input_ngModelChange_63_listener($event) {
        return ctx.toDt = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "mat-datepicker-toggle", 24)(65, "mat-datepicker", null, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 28)(68, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubBrokerageSetupComponent_Template_button_click_68_listener() {
        return ctx.getBrokerageSetupList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "div", 30)(72, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubBrokerageSetupComponent_Template_button_click_72_listener() {
        return ctx.openSlabDetailsDialog("lock");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "mat-icon", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "lock");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubBrokerageSetupComponent_Template_button_click_75_listener() {
        return ctx.openModifySetupDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "mat-icon", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "exposure");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubBrokerageSetupComponent_Template_button_click_78_listener() {
        return ctx.openSlabDetailsDialog("add");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "add_to_queue");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 36)(82, "ag-grid-angular", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cellClicked", function SubBrokerageSetupComponent_Template_ag_grid_angular_cellClicked_82_listener($event) {
        return ctx.onGridClick($event);
      })("gridReady", function SubBrokerageSetupComponent_Template_ag_grid_angular_gridReady_82_listener($event) {
        return ctx.onGridReady($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](56);

      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](66);

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.branchIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredProviders);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.accountIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredAccountList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.itemGroupIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredItemGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.instrumentType);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.instrumentList);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r10)("ngModel", ctx.fromDt);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r11)("ngModel", ctx.toDt);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowData", ctx.brokeragesetupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, ag_grid_angular__WEBPACK_IMPORTED_MODULE_26__.AgGridAngular],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItYnJva2VyYWdlLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 15399:
/*!*****************************************************************************************************!*\
  !*** ./src/app/Forms/Master/sub-brokerage-setup/sub-lock-brokerage/sub-lock-brokerage.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubLockBrokerageComponent": () => (/* binding */ SubLockBrokerageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);















class SubLockBrokerageComponent {
    constructor(snackBar, datePipe, formBuilder, dialogRef, data, _appService) {
        this.snackBar = snackBar;
        this.datePipe = datePipe;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._appService = _appService;
        this.parentData = data;
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'lockBrokDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
    }
    ngOnInit() {
        this.bindFormControls();
    }
    close() {
        this.dialogRef.close();
    }
    onSubmit(values) {
        console.log(values);
        debugger;
        var body = this.itemForm.value;
        console.log(body);
        body.lockBrokDate = this.datePipe.transform(body.lockBrokDate, 'yyyy-MM-dd');
        body.id = this.parentData.isEditMode;
        body.accounts = this.parentData.accountIds.filter((val) => val != -1);
        ;
        body.branchId = this.parentData.branchIds;
        body.fromDate = this.datePipe.transform(this.parentData.fromDt, 'yyyy-MM-dd');
        body.toDate = this.datePipe.transform(this.parentData.toDt, 'yyyy-MM-dd');
        body.instrumentType = this.parentData.instrumentType;
        body.itemGroupId = this.parentData.itemGroupIds;
        body.higherSideOnly = false;
        if (this.itemForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._appService.lockSubBrokerage(body).subscribe(result => {
                console.log("result", result);
                this.showToaster(result.message);
                this.dialogRef.close();
            });
        }
    }
    showToaster(message) {
        this.snackBar.open(message, "Success", {
            duration: 3000,
        });
    }
}
SubLockBrokerageComponent.ɵfac = function SubLockBrokerageComponent_Factory(t) { return new (t || SubLockBrokerageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
SubLockBrokerageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SubLockBrokerageComponent, selectors: [["app-sub-lock-brokerage"]], decls: 25, vars: 4, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], [1, "dropdown-wrapper"], ["appearance", "outline"], ["matInput", "", "formControlName", "lockBrokDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["lockPicker", ""], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"]], template: function SubLockBrokerageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubLockBrokerageComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SubLockBrokerageComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "h3")(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Loak Brokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "mat-form-field", 7)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Lock Brokerage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 8)(17, "mat-datepicker-toggle", 9)(18, "mat-datepicker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11)(21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubLockBrokerageComponent_Template_button_click_21_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItbG9jay1icm9rZXJhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 95155:
/*!*************************************************************************!*\
  !*** ./src/app/Forms/Master/symbol-mapping/symbol-mapping.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbolMappingComponent": () => (/* binding */ SymbolMappingComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master-second.service */ 8703);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ag-grid-angular */ 79771);



















function SymbolMappingComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r4.itemCode, " ");
} }
function SymbolMappingComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Symbol is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class SymbolMappingComponent {
    constructor(snackBar, appSettings, formBuilder, dialog, _appService, _masterService, _masterSecondService) {
        this.snackBar = snackBar;
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this._appService = _appService;
        this._masterService = _masterService;
        this._masterSecondService = _masterSecondService;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.filteredItemList = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.symbolMappingList = [];
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
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80, filter: false,
                maxWidth: 110, resizable: true
            },
            { headerName: 'ItemID', field: 'itemId', filter: true, sorting: true, resizable: true },
            { headerName: 'Item Name', field: 'itemName', filter: true, sorting: true, resizable: true },
            { headerName: 'Symbol', field: 'symbol', filter: true, sorting: true, resizable: true },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getSymbolMappingList();
        this.bindFormControls();
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'itemId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'symbol': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'id': [0]
        });
        this.getitemList();
    }
    getitemList() {
        this._appService.getitems().subscribe((results) => {
            this.itemList = results;
            this.filteredItemList = results;
        });
    }
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredItemList = this.itemList.filter((data) => {
            const prov = data.itemCode.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filteredItemList = [...this.itemList];
        }
    }
    onSubmit(values) {
        var body = this.itemForm.value;
        if (this.itemForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._masterSecondService.saveSymbolMapping(body).subscribe(result => {
                if (result.isSuccess) {
                    console.log("result", result);
                    this.getSymbolMappingList();
                    this.resetForm(this.itemForm);
                }
                else {
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
        const time = isError ? 600000 : 300000;
        this.snackBar.open(message, label, {
            duration: time,
            panelClass: panelClass,
        });
    }
    getSymbolMappingList() {
        this._masterSecondService.getSymbolMappingList().subscribe((results) => {
            this.symbolMappingList = results;
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
                    this._masterSecondService.deleteSymbolMapping(params.data.id).subscribe((res) => {
                        this.getSymbolMappingList();
                    });
                }
            });
        }
    }
    openExchangeDialog(id) {
        this._masterSecondService.getSymbolMappingId(id).subscribe((response) => {
            var res = response[0];
            this.itemForm.get('id').setValue(res.id);
            this.itemForm.get('symbol').setValue(res.symbol);
            this.itemForm.get('itemId').setValue(res.itemId);
        });
    }
    resetForm(myForm) {
        myForm.reset();
        myForm.get('id').setValue(0);
        Object.keys(myForm.controls).forEach(key => {
            myForm.get(key).setErrors(null);
        });
    }
    close() {
        this.resetForm(this.itemForm);
    }
}
SymbolMappingComponent.ɵfac = function SymbolMappingComponent_Factory(t) { return new (t || SymbolMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_4__.MasterSecondService)); };
SymbolMappingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SymbolMappingComponent, selectors: [["app-symbol-mapping"]], viewQuery: function SymbolMappingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 27, vars: 9, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end", "symbol-mapping"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Item", "panelClass", "custom-select-panel", "formControlName", "itemId"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Item", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "50"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "Symbol", "formControlName", "symbol", "type", "text"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", "save-btn", 3, "disabled"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"], [3, "value"]], template: function SymbolMappingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function SymbolMappingComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "mat-form-field", 7)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Select Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-select", 8, 9)(12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function SymbolMappingComponent_Template_input_input_12_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SymbolMappingComponent_mat_option_14_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 13)(16, "mat-form-field", 14)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, SymbolMappingComponent_mat_error_20_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SymbolMappingComponent_Template_button_click_23_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 19)(26, "ag-grid-angular", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function SymbolMappingComponent_Template_ag_grid_angular_cellClicked_26_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredItemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.symbol.errors == null ? null : ctx.itemForm.controls.symbol.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.symbolMappingList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__.AgGridAngular], styles: [".symbol-mapping[_ngcontent-%COMP%] {\n  flex-direction: column !important;\n}\n.symbol-mapping[_ngcontent-%COMP%]   .white-block[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.symbol-mapping[_ngcontent-%COMP%]   .white-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 30px;\n  line-height: 30px;\n  margin: 5px;\n}\n.symbol-mapping[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bWJvbC1tYXBwaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRVI7QUFEUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFHWjtBQUFJO0VBQ0ksa0JBQUE7QUFFUiIsImZpbGUiOiJzeW1ib2wtbWFwcGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zeW1ib2wtbWFwcGluZyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAud2hpdGUtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgLnNhdmUtYnRuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 24328:
/*!********************************************************************************!*\
  !*** ./src/app/Forms/Master/tax-master/tax-dialog/add-tax-master.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTaxComponent": () => (/* binding */ AddTaxComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../master-second.service */ 8703);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ag-grid-angular */ 79771);





















const _c0 = ["select"];
function AddTaxComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddTaxComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const apply_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", apply_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", apply_r6.name, " ");
} }
function AddTaxComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r7.name, " ");
} }
function AddTaxComponent_mat_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const DDL_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", DDL_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", DDL_r8.name, " ");
} }
class AddTaxComponent {
    constructor(snackBar, appSettings, formBuilder, dialogRef, data, _masterService, _masterSecondService, dialog) {
        this.snackBar = snackBar;
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._masterService = _masterService;
        this._masterSecondService = _masterSecondService;
        this.dialog = dialog;
        this.accountAllSellected = false;
        this.accountTaxList = [];
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
                headerName: 'Added account tax list',
                children: [
                    {
                        headerName: '', editable: false, minwidth: 45, width: 45, maxwidth: 45, resizable: false, sortable: false, filter: false, checkboxSelection: true, headerCheckboxSelection: true,
                    },
                    { headerName: 'Account', field: 'accountName', filter: true, sorting: true, resizable: true, flex: 1, },
                    { headerName: 'ApplyOn', field: 'applyOn', filter: true, sorting: true, resizable: true, flex: 1, },
                ]
            }];
        this.selectedId = data.id;
        if (data.id == null) {
            this.selectedId = 0;
        }
    }
    checkTaxSelect() {
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
    }
    /* to filter select account dropdown*/
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.accountList = this.accountList.filter((data) => {
            const prov = data.name.toLowerCase();
            return prov.includes(searchInput);
        });
    }
    /* for adding tax detail*/
    bindFormControls() {
        this.taxMasterForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'appliedOn': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'id': [0]
        });
    }
    /* for adding tax account detail*/
    bindAccountTaxControls() {
        this.taxForm = this.formBuilder.group({
            'taxId': [this.selectedId, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'applyOn': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            'accounts': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([this._masterService.getApplyOn(), this._masterService.getApplyOnTaxAccountDDL(), this._masterService.getAccount()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => {
            this.applyOnList = response[0];
            this.accountApplyOnList = response[1];
            this.accountList = response[2];
        })).subscribe(res => {
        });
        if (this.selectedId != 0) {
            this.getAccountTaxList();
        }
    }
    getTaxInfo() {
        this._masterSecondService.getTaxById(this.selectedId).subscribe((res) => {
            this.taxMasterForm.get('name').setValue(res.name);
            this.taxMasterForm.get('appliedOn').setValue(res.appliedOn);
            this.taxMasterForm.get('id').setValue(res.id);
            this.selectedName = res.name;
        });
    }
    getAccountTaxList() {
        this._masterSecondService.getTaxAccountList(this.selectedId).subscribe((res) => {
            this.accountTaxList = res;
        });
    }
    onSubmit(values) {
        this.taxMasterForm.controls['name'].setValue(String(this.taxMasterForm.get('name').value));
        this.taxMasterForm.controls['appliedOn'].setValue(String(this.taxMasterForm.get('appliedOn').value));
        var body = this.taxMasterForm.value;
        if (this.taxMasterForm.valid) {
            this._masterSecondService.saveTax(body).subscribe(result => {
                if (result.isSuccess) {
                    console.log("result", result);
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
    showToaster(message, isError = false) {
        const panelClass = isError ? ['red-text'] : undefined;
        const label = isError ? "Error" : "Success";
        const time = isError ? 600000 : 300000;
        this.snackBar.open(message, label, {
            duration: time,
            panelClass: panelClass,
        });
    }
    deleteAccountTax() {
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
                this.getAccountTaxList();
            });
        }
    }
    onAccountTaxSubmit(values) {
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
        var body = this.taxForm.value;
        //to remove select all option value that is '-1'
        body.accounts.forEach((value, index) => {
            if (value == '-1')
                body.accounts.splice(index, 1);
        });
        this.taxForm.controls['taxId'].setValue(this.selectedId);
        if (this.taxForm.valid) {
            this._masterSecondService.addAccountTax(body).subscribe(result => {
                this.getAccountTaxList();
            });
        }
    }
    ngOnInit() {
        this.bindFormControls();
        this.bindAccountTaxControls();
        this.initialApiCalls();
        if (this.selectedId != 0) {
            this.getTaxInfo();
        }
        else {
            this.taxMasterForm.get('id').setValue(0);
        }
    }
    close() {
        this.dialogRef.close();
    }
}
AddTaxComponent.ɵfac = function AddTaxComponent_Factory(t) { return new (t || AddTaxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_3__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog)); };
AddTaxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddTaxComponent, selectors: [["app-tax-dialog"]], viewQuery: function AddTaxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, decls: 66, vars: 16, consts: [[1, "heading", "mb-10"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["label", "Tax"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "tab-party-details-parent"], [1, "white-block", "pb-0"], ["fxFlex", "100", "fxFlex.gt-sm", "50", "fxFlex.sm", "50"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "name", "formControlName", "name", "type", "text"], [4, "ngIf"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "", "formControlName", "appliedOn"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", 3, "disabled"], ["label", "Account Tax ", 3, "click"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["multiple", "", "placeholder", "Select Account", "panelClass", "custom-select-panel", "formControlName", "accounts"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Account", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], ["value", "-1", 3, "click"], ["placeholder", "Select ApplyOn", "formControlName", "applyOn"], [1, "col-xl-12", "mt-2", "position-relative"], [1, "material-symbols-outlined", "delete-icon", 3, "click"], ["headerHeight", "34", 1, "ag-theme-material", "mt-2", 2, "height", "240px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "rowSelection", "rowMultiSelectWithClick", "defaultColDef", "gridReady"], [3, "value"]], template: function AddTaxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Add Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddTaxComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-tab-group")(7, "mat-tab", 3)(8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AddTaxComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(ctx.taxMasterForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "h3")(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Tax Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7)(15, "mat-form-field", 8)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AddTaxComponent_mat_error_19_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 7)(21, "mat-form-field", 11)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "ApplyOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, AddTaxComponent_mat_option_25_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 14)(27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddTaxComponent_Template_button_click_27_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddTaxComponent_Template_mat_tab_click_31_listener() { return ctx.checkTaxSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AddTaxComponent_Template_form_ngSubmit_32_listener() { return ctx.onAccountTaxSubmit(ctx.taxForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 5)(34, "div", 6)(35, "h3")(36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 7)(39, "div", 18)(40, "mat-form-field", 19)(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Select Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-select", 20, 21)(45, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function AddTaxComponent_Template_input_input_45_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddTaxComponent_Template_mat_option_click_47_listener() { return ctx.accountAllSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, AddTaxComponent_mat_option_49_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 7)(51, "mat-form-field", 11)(52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Apply On");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, AddTaxComponent_mat_option_55_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 14)(57, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddTaxComponent_Template_button_click_57_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 26)(62, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddTaxComponent_Template_span_click_62_listener() { return ctx.deleteAccountTax(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "delete_sweep");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "ag-grid-angular", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("gridReady", function AddTaxComponent_Template_ag_grid_angular_gridReady_65_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.taxMasterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.taxMasterForm.controls.name.errors == null ? null : ctx.taxMasterForm.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.applyOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.taxMasterForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.taxForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.selectedName, " Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.accountList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.accountApplyOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.taxForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rowData", ctx.accountTaxList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("rowSelection", "multiple")("rowMultiSelectWithClick", true)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTab, ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdGF4LW1hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 85063:
/*!*****************************************************************!*\
  !*** ./src/app/Forms/Master/tax-master/tax-master.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxComponent": () => (/* binding */ TaxComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _tax_dialog_add_tax_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax-dialog/add-tax-master.component */ 24328);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master-second.service */ 8703);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ 79771);












class TaxComponent {
    constructor(appSettings, dialog, _masterService, _masterSecondService) {
        this.appSettings = appSettings;
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
            { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
            { headerName: 'AppliedOn', field: 'applyOnName', filter: true, sorting: true, resizable: true }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.gettaxList();
    }
    gettaxList() {
        this._masterSecondService.getTax().subscribe((results) => {
            this.taxList = results;
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
            this.openTaxDialog(params.data.id);
        }
        if (params.event.target.dataset.action == "delete") {
            const dialogRef = this.dialog.open(_Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialog, {
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
                    this._masterSecondService.deleteTax(params.data.id).subscribe((res) => {
                        this.gettaxList();
                    });
                }
            });
        }
    }
    openTaxDialog(user) {
        let dialogRef = this.dialog.open(_tax_dialog_add_tax_master_component__WEBPACK_IMPORTED_MODULE_0__.AddTaxComponent, {
            data: { id: user }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.gettaxList();
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
TaxComponent.ɵfac = function TaxComponent_Factory(t) { return new (t || TaxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_4__.MasterSecondService)); };
TaxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TaxComponent, selectors: [["app-blank"]], viewQuery: function TaxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 13, vars: 5, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "primary", 1, "delete-slab", "icon-btn"], [1, "material-icons-outlined"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"]], template: function TaxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon")(4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " file_download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaxComponent_Template_button_click_7_listener() { return ctx.openTaxDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Add Tax ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5)(12, "ag-grid-angular", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function TaxComponent_Template_ag_grid_angular_cellClicked_12_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.taxList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXgtbWFzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 27455:
/*!*****************************************************************!*\
  !*** ./src/app/Forms/Master/trade-file/trade-file.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TradeFileComponent": () => (/* binding */ TradeFileComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _Dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Dialog/confirmation-dialog/confirmation-dialog.component */ 89045);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _master_second_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master-second.service */ 8703);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ag-grid-angular */ 79771);





















function TradeFileComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TradeFileComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r12.name, " ");
} }
function TradeFileComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r13.name, " ");
} }
function TradeFileComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r14.name, " ");
} }
function TradeFileComponent_mat_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r15.name, " ");
} }
class TradeFileComponent {
    constructor(snackBar, appSettings, formBuilder, dialog, _appService, _masterService, _masterSecondService) {
        this.snackBar = snackBar;
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this._appService = _appService;
        this._masterService = _masterService;
        this._masterSecondService = _masterSecondService;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.filteredTypeList = [];
        this.filterBrokerList = [];
        this.filterClientList = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.partyAs = [{ 'id': 'C', 'name': 'Client' }, { 'id': 'U', 'name': 'User Id' }, { 'id': 'F', 'name': 'Fixed Client' }];
        this.symbolMappingList = [];
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
                headerName: 'Action', field: 'fileIcon', cellRenderer: this.actionCellRenderer, minWidth: 80, filter: false,
                maxWidth: 110, resizable: true
            },
            { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
            { headerName: 'Broker', field: 'broker', filter: true, sorting: true, resizable: true },
            { headerName: 'Type', field: 'type', filter: true, sorting: true, resizable: true },
            { headerName: 'PartyAs', field: 'partyAs', filter: true, sorting: true, resizable: true },
            { headerName: 'ClientAc', field: 'clientAc', filter: true, sorting: true, resizable: true },
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getSymbolMappingList();
        this.bindFormControls();
    }
    bindFormControls() {
        this.itemForm = this.formBuilder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'type': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'broker': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'partyAs': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'clientAc': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            'id': [0]
        });
        this.itemForm.get('partyAs').valueChanges.subscribe((partyAsValue) => {
            if (partyAsValue === 'C' || partyAsValue === 'U') {
                // If 'partyAs' is 'C' or 'U', hide 'clientAc' and remove validation
                this.itemForm.get('clientAc').clearValidators();
                this.itemForm.get('clientAc').disable();
            }
            else if (partyAsValue === 'F') {
                // If 'partyAs' is 'F', show 'clientAc' and set it as required
                this.itemForm.get('clientAc').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.itemForm.get('clientAc').enable();
            }
            // Update the 'clientAc' validation
            this.itemForm.get('clientAc').updateValueAndValidity();
        });
        this.initialApiCalls();
    }
    initialApiCalls() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([this._appService.tradeFileType(), this._masterService.getAccount()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => {
            this.typeList = response[0];
            this.filteredTypeList = response[0];
            this.brokerList = response[1];
            this.filterBrokerList = response[1];
            this.clientList = response[1];
            this.filterClientList = response[1];
        })).subscribe(res => {
        });
    }
    onInputChange(event) {
        const searchInput = event.target.value.toLowerCase();
        this.filteredTypeList = this.typeList.filter((data) => {
            const prov = data.itemCode.toLowerCase();
            return prov.includes(searchInput);
        });
        if (searchInput === '') {
            this.filteredTypeList = [...this.typeList];
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
        if (this.itemForm.valid) {
            //const body = JSON.stringify(addFormData);
            this._masterSecondService.saveTradeFileType(body).subscribe(result => {
                if (result.isSuccess) {
                    console.log("result", result);
                    this.getSymbolMappingList();
                    this.resetForm(this.itemForm);
                }
                else {
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
        const time = isError ? 600000 : 300000;
        this.snackBar.open(message, label, {
            duration: time,
            panelClass: panelClass,
        });
    }
    getSymbolMappingList() {
        this._masterSecondService.getTradeFileList().subscribe((results) => {
            this.symbolMappingList = results;
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
                    this._masterSecondService.deleteTradeFileType(params.data.id).subscribe((res) => {
                        this.getSymbolMappingList();
                    });
                }
            });
        }
    }
    openExchangeDialog(id) {
        this._masterSecondService.getTradeFileId(id).subscribe((response) => {
            var res = response;
            this.itemForm.get('id').setValue(res.id);
            this.itemForm.get('name').setValue(res.name);
            this.itemForm.get('type').setValue(res.type);
            this.itemForm.get('broker').setValue(res.broker);
            this.itemForm.get('partyAs').setValue(res.partyAs);
            this.itemForm.get('clientAc').setValue(res.clientAc);
        });
    }
    resetForm(myForm) {
        myForm.reset();
        myForm.get('id').setValue(0);
        Object.keys(myForm.controls).forEach(key => {
            myForm.get(key).setErrors(null);
        });
    }
    close() {
        this.resetForm(this.itemForm);
    }
}
TradeFileComponent.ɵfac = function TradeFileComponent_Factory(t) { return new (t || TradeFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_master_second_service__WEBPACK_IMPORTED_MODULE_4__.MasterSecondService)); };
TradeFileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TradeFileComponent, selectors: [["app-trade-file"]], viewQuery: function TradeFileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 56, vars: 12, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end", "symbol-mapping"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "white-block", "pb-5"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "30"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "Name", "formControlName", "name", "type", "text"], [4, "ngIf"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "50"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select Type", "panelClass", "custom-select-panel", "formControlName", "type"], ["selectType", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Type", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["placeholder", "Select Broker", "panelClass", "custom-select-panel", "formControlName", "broker"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Broker", 1, "milti-search-box", 3, "input"], ["fxFlex", "100", "fxFlex.gt-sm", "12", "fxFlex.sm", "50"], ["placeholder", "Select PartyAs", "panelClass", "custom-select-panel", "formControlName", "partyAs"], ["selectPartyAs", ""], ["placeholder", "Select Client", "panelClass", "custom-select-panel", "formControlName", "clientAc"], ["selectClientAs", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search Client", 1, "milti-search-box", 3, "input"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "space-between", "", "fxFlex.sm", "50"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase", "save-btn", 3, "disabled"], ["type", "button", "mat-raised-button", "", "color", "warn", 3, "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"], [3, "value"]], template: function TradeFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function TradeFileComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(ctx.itemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "mat-form-field", 6)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, TradeFileComponent_mat_error_10_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "mat-form-field", 11)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Select Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-select", 12, 13)(18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function TradeFileComponent_Template_input_input_18_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, TradeFileComponent_mat_option_20_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 17)(22, "div", 10)(23, "mat-form-field", 11)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Select Broker");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-select", 18, 19)(28, "input", 20, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function TradeFileComponent_Template_input_input_28_listener($event) { return ctx.onInputBrokerChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, TradeFileComponent_mat_option_30_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 21)(32, "div", 10)(33, "mat-form-field", 11)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Select PartyAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-select", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, TradeFileComponent_mat_option_38_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 17)(40, "div", 10)(41, "mat-form-field", 11)(42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Select Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-select", 24, 25)(46, "input", 26, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function TradeFileComponent_Template_input_input_46_listener($event) { return ctx.onInputClientChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, TradeFileComponent_mat_option_48_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 27)(50, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TradeFileComponent_Template_button_click_52_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 30)(55, "ag-grid-angular", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function TradeFileComponent_Template_ag_grid_angular_cellClicked_55_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.itemForm.controls.name.errors == null ? null : ctx.itemForm.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filterBrokerList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.partyAs);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filterClientList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.itemForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.symbolMappingList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__.AgGridAngular], styles: [".save-btn[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWRlLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6InRyYWRlLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2ZS1idG4ge1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 7984:
/*!******************************************************************************************!*\
  !*** ./src/app/Forms/Master/transporter/transporter-dialog/add-transporter.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTransporterComponent": () => (/* binding */ AddTransporterComponent),
/* harmony export */   "emailValidator": () => (/* binding */ emailValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master.service */ 60808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _transporter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transporter.model */ 82198);













function AddTransporterComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddTransporterComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddTransporterComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Refrence is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddTransporterComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddTransporterComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AddTransporterComponent {
    constructor(formBuilder, dialogRef, user, _appService) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.user = user;
        this._appService = _appService;
        console.log(this.dialogRef);
    }
    bindFormControls() {
        this.transporterForm = this.formBuilder.group({
            'Name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            'Phone': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            'Address': [''],
            'City': [''],
            'Refrence': [''],
            'Email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, emailValidator])],
        });
    }
    ngOnInit() {
        this.bindFormControls();
        //this.initialApiCalls();
    }
    onSubmit(values) {
        if (this.transporterForm.valid) {
            let addFormData = {
                "Name": this.transporterForm.get('name').value,
                "Phone": this.transporterForm.get('phone').value,
                "Address": this.transporterForm.get('address').value,
                "City": this.transporterForm.get('city').value,
                "Refrence": this.transporterForm.get('refrence').value,
                "Email": this.transporterForm.get('email').value,
            };
            if (this.user.id) {
                addFormData['id'] = this.user.id;
            }
            const body = JSON.stringify(addFormData);
            this._appService.saveTransporter(body).subscribe(result => {
                console.log("result", result);
                this.dialogRef.close();
            }, err => {
                console.log(err);
            });
        }
    }
    close() {
        this.dialogRef.close();
    }
}
AddTransporterComponent.ɵfac = function AddTransporterComponent_Factory(t) { return new (t || AddTransporterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService)); };
AddTransporterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddTransporterComponent, selectors: [["add-transporter-dialog"]], decls: 48, vars: 6, consts: [[1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], ["fxLayout", "row wrap", 1, "user-form", 3, "formGroup", "ngSubmit"], [1, "tab-party-details-parent"], ["fxFlex", "100", "fxFlex.gt-sm", "25", "fxFlex.sm", "50"], ["appearance", "outline"], ["matInput", "", "autocomplete", "off", "placeholder", "Name", "formControlName", "Name", "type", "text"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "placeholder", "Phone", "formControlName", "Phone", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Refrence", "formControlName", "Refrence", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "Email", "formControlName", "Email", "type", "text"], ["matInput", "", "autocomplete", "off", "placeholder", "City", "formControlName", "City", "type", "text"], ["fxFlex", "100"], ["matInput", "", "placeholder", "Enter address", "formControlName", "Address"], ["fxFlex", "100", 1, "mt-2", "text-center", "space-between-btns"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "uppercase"]], template: function AddTransporterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add Transporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddTransporterComponent_Template_a_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2)(4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddTransporterComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.transporterForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddTransporterComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "mat-form-field", 6)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AddTransporterComponent_mat_error_19_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5)(21, "mat-form-field", 6)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Refrence");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AddTransporterComponent_mat_error_25_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 5)(27, "mat-form-field", 6)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AddTransporterComponent_mat_error_31_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 5)(33, "mat-form-field", 6)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, AddTransporterComponent_mat_error_37_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 13)(39, "mat-form-field", 6)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 15)(44, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddTransporterComponent_Template_button_click_44_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.transporterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.transporterForm.controls.Name.errors == null ? null : ctx.transporterForm.controls.Name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.transporterForm.controls.Phone.errors == null ? null : ctx.transporterForm.controls.Phone.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.transporterForm.controls.Refrence.errors == null ? null : ctx.transporterForm.controls.Refrence.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.transporterForm.controls.Email.errors == null ? null : ctx.transporterForm.controls.Email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.transporterForm.controls.City.errors == null ? null : ctx.transporterForm.controls.City.errors.required);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput], styles: [".heading[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC10cmFuc3BvcnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLXRyYW5zcG9ydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcge1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG59XHJcbiAgXHJcbiJdfQ== */"] });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}


/***/ }),

/***/ 17630:
/*!*******************************************************************!*\
  !*** ./src/app/Forms/Master/transporter/transporter.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransporterComponent": () => (/* binding */ TransporterComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _transporter_dialog_add_transporter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transporter-dialog/add-transporter.component */ 7984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../master.service */ 60808);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ 79771);










class TransporterComponent {
    constructor(appSettings, _masterService, dialog) {
        this.appSettings = appSettings;
        this._masterService = _masterService;
        this.dialog = dialog;
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
                maxWidth: 110, resizable: true
            },
            { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true },
            { headerName: 'Phone', field: 'phone', filter: true, sorting: true, resizable: true },
            { headerName: 'Address', field: 'address', filter: true, sorting: true, resizable: true },
            { headerName: 'City', field: 'city', filter: true, sorting: true, resizable: true },
            { headerName: 'Refrence', field: 'refrence', filter: true, sorting: true, resizable: true },
            { headerName: 'Email', field: 'email', filter: true, sorting: true, resizable: true }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getTransporterList();
    }
    getTransporterList() {
        this._masterService.getTransporter().subscribe((results) => {
            this.transporterList = results;
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
            this._masterService.getAccountById(params.data.id).subscribe((res) => {
                this.openTransporterDialog(res);
            });
        }
        if (params.event.target.dataset.action == "delete") {
            this._masterService.deleteAccountById(params.data.id).subscribe((res) => {
                this.getTransporterList();
            });
        }
    }
    openTransporterDialog(user) {
        let dialogRef = this.dialog.open(_transporter_dialog_add_transporter_component__WEBPACK_IMPORTED_MODULE_0__.AddTransporterComponent, {
            data: user
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getTransporterList();
            if (user) {
                /* (user.id) ? this.updateUser(user) : this.addUser(user);*/
            }
        });
    }
}
TransporterComponent.ɵfac = function TransporterComponent_Factory(t) { return new (t || TransporterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog)); };
TransporterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TransporterComponent, selectors: [["app-blank"]], viewQuery: function TransporterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 8, vars: 4, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "col-xl-12", "mt-2"], [1, "ag-theme-alpine", 2, "height", "535px", 3, "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"]], template: function TransporterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransporterComponent_Template_button_click_2_listener() { return ctx.openTransporterDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Add Transporter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "ag-grid-angular", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cellClicked", function TransporterComponent_Template_ag_grid_angular_cellClicked_7_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rowData", ctx.transporterList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc3BvcnRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 82198:
/*!***************************************************************!*\
  !*** ./src/app/Forms/Master/transporter/transporter.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Transporter": () => (/* binding */ Transporter)
/* harmony export */ });
class Transporter {
}


/***/ })

}]);
//# sourceMappingURL=src_app_Forms_Master_master_module_ts.js.map