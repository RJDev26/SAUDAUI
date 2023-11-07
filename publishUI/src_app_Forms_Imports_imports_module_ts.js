"use strict";
(self["webpackChunkgradus"] = self["webpackChunkgradus"] || []).push([["src_app_Forms_Imports_imports_module_ts"],{

/***/ 24186:
/*!*************************************************!*\
  !*** ./src/app/Forms/Imports/imports.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportsModule": () => (/* binding */ ImportsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ 79771);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _scripts_scripts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/scripts.component */ 43753);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-dropzone */ 92522);
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade/trade.component */ 95766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);











const routes = [
    { path: '', redirectTo: 'scripts', pathMatch: 'full' },
    { path: 'scripts', component: _scripts_scripts_component__WEBPACK_IMPORTED_MODULE_1__.ScriptsComponent, data: { breadcrumb: 'Scripts' } },
    { path: 'trade', component: _trade_trade_component__WEBPACK_IMPORTED_MODULE_2__.TradeComponent, data: { breadcrumb: 'Trade' } },
];
class ImportsModule {
}
ImportsModule.ɵfac = function ImportsModule_Factory(t) { return new (t || ImportsModule)(); };
ImportsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ImportsModule });
ImportsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe,
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE, useValue: 'en-GB' }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__.AgGridModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_9__.NgxDropzoneModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ImportsModule, { declarations: [_scripts_scripts_component__WEBPACK_IMPORTED_MODULE_1__.ScriptsComponent,
        _trade_trade_component__WEBPACK_IMPORTED_MODULE_2__.TradeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__.AgGridModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_9__.NgxDropzoneModule] }); })();


/***/ }),

/***/ 54247:
/*!**************************************************!*\
  !*** ./src/app/Forms/Imports/imports.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptsService": () => (/* binding */ ScriptsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class ScriptsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    }
    ImportScript(formData) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Import/importScript', formData);
    }
    ImportTrade(formData) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Import/tradeScript', formData);
    }
}
ScriptsService.ɵfac = function ScriptsService_Factory(t) { return new (t || ScriptsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ScriptsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScriptsService, factory: ScriptsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43753:
/*!************************************************************!*\
  !*** ./src/app/Forms/Imports/scripts/scripts.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptsComponent": () => (/* binding */ ScriptsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _imports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imports.service */ 54247);
/* harmony import */ var _Master_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Master/master.service */ 60808);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-dropzone */ 92522);















function ScriptsComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", exchange_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", exchange_r3.name, " ");
} }
function ScriptsComponent_ngx_dropzone_preview_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-dropzone-preview", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("removed", function ScriptsComponent_ngx_dropzone_preview_16_Template_ngx_dropzone_preview_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const f_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onRemove(f_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", f_r4.name, " (", f_r4.type, ")");
} }
function ScriptsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Only CSV files are allowed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ScriptsComponent {
    constructor(snackBar, _scriptsService, _masterService, appSettings) {
        this.snackBar = snackBar;
        this._scriptsService = _scriptsService;
        this._masterService = _masterService;
        this.appSettings = appSettings;
        this.files = [];
        this.lotFile = false;
        this.settings = this.appSettings.settings;
    }
    isExcelFile(file) {
        const allowedExtensions = ['.csv', '.xlsx', '.xls'];
        const fileExtension = file.name.toLowerCase().slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);
        return allowedExtensions.includes('.' + fileExtension);
    }
    onSelect(event) {
        console.log(event);
        this.showError = false;
        this.files = [];
        // Filter out non-Excel files
        const excelFiles = event.addedFiles.filter(this.isExcelFile);
        if (!excelFiles.length) {
            this.showError = true;
        }
        this.files.push(...excelFiles);
    }
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
    ngOnInit() {
        this.getExchangeList();
    }
    getExchangeList() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([this._masterService.getExchangeName()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            this.exchangeList = response[0];
        })).subscribe(res => {
        });
    }
    submit() {
        if (this.files.length > 0 && this.selectedExId) {
            this.files.forEach((file, idx, array) => {
                let fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onloadend = (e) => {
                    const formData = new FormData();
                    formData.append("files", this.files[0], file.name);
                    formData.append("exCode", this.selectedExId);
                    formData.append("lotFile", String(this.lotFile));
                    //formData.append('listid' this.listid);
                    //formData.append('userId', this.userId);
                    if (idx == array.length - 1) {
                        this.settings.loadingSpinner = true;
                        this._scriptsService.ImportScript(formData).subscribe(res => {
                            console.log("result", res);
                            this.resetForm();
                            this.settings.loadingSpinner = false;
                            this.showToaster(res.message, !res.isSuccess);
                        }, err => {
                            console.log(err);
                            this.settings.loadingSpinner = false;
                        });
                    }
                };
            });
        }
    }
    resetForm() {
        this.selectedExId = '';
        this.files = [];
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
ScriptsComponent.ɵfac = function ScriptsComponent_Factory(t) { return new (t || ScriptsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_imports_service__WEBPACK_IMPORTED_MODULE_0__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Master_master_service__WEBPACK_IMPORTED_MODULE_1__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings)); };
ScriptsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ScriptsComponent, selectors: [["app-scripts"]], decls: 21, vars: 6, consts: [[1, "row", "paret-form"], ["fxLayout", "row", 1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "15"], ["color", "primary", 3, "ngModel", "ngModelChange"], [1, "script-main"], [1, "drop-box"], [3, "change"], [3, "multiple", "removable", "removed", 4, "ngFor", "ngForOf"], ["class", "error-message", 4, "ngIf"], [1, "text-end"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], [3, "value"], [3, "multiple", "removable", "removed"], [1, "error-message"]], template: function ScriptsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ScriptsComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedExId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ScriptsComponent_mat_option_7_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ScriptsComponent_Template_mat_slide_toggle_ngModelChange_9_listener($event) { return ctx.lotFile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Lot File");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "ngx-dropzone", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ScriptsComponent_Template_ngx_dropzone_change_13_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ngx-dropzone-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Drop File here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ScriptsComponent_ngx_dropzone_preview_16_Template, 3, 4, "ngx-dropzone-preview", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ScriptsComponent_div_17_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13)(19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScriptsComponent_Template_button_click_19_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedExId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.lotFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.selectedExId || !ctx.files.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggle, ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__.NgxDropzoneLabelDirective, ngx_dropzone__WEBPACK_IMPORTED_MODULE_15__.NgxDropzonePreviewComponent], styles: [".script-main[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.script-main[_ngcontent-%COMP%]   .drop-box[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.script-main[_ngcontent-%COMP%]   .drop-box[_ngcontent-%COMP%]   ngx-dropzone[_ngcontent-%COMP%] {\n  height: 240px;\n}\n.script-main[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7QUFFUjtBQURRO0VBQ0ksYUFBQTtBQUdaO0FBQUk7RUFDSSxVQUFBO0FBRVIiLCJmaWxlIjoic2NyaXB0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JpcHQtbWFpbiB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIC5kcm9wLWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbmd4LWRyb3B6b25lIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZXJyb3ItbWVzc2FnZXtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 95766:
/*!********************************************************!*\
  !*** ./src/app/Forms/Imports/trade/trade.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TradeComponent": () => (/* binding */ TradeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _imports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imports.service */ 54247);
/* harmony import */ var _Master_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Master/master.service */ 60808);
/* harmony import */ var _Master_master_second_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Master/master-second.service */ 8703);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-dropzone */ 92522);














function TradeComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exchange_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", exchange_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", exchange_r3.name, " ");
} }
function TradeComponent_ngx_dropzone_preview_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-dropzone-preview", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("removed", function TradeComponent_ngx_dropzone_preview_13_Template_ngx_dropzone_preview_removed_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const f_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onRemove(f_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multiple", true)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", f_r4.name, " (", f_r4.type, ")");
} }
function TradeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Only CSV files are allowed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class TradeComponent {
    constructor(snackBar, _scriptsService, _masterService, _masterSeconedService) {
        this.snackBar = snackBar;
        this._scriptsService = _scriptsService;
        this._masterService = _masterService;
        this._masterSeconedService = _masterSeconedService;
        this.files = [];
        this.lotFile = false;
    }
    isExcelFile(file) {
        const allowedExtensions = ['.csv', '.xlsx', '.xls'];
        const fileExtension = file.name.toLowerCase().slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);
        return allowedExtensions.includes('.' + fileExtension);
    }
    onSelect(event) {
        console.log(event);
        this.showError = false;
        this.files = [];
        // Filter out non-Excel files
        const excelFiles = event.addedFiles.filter(this.isExcelFile);
        if (!excelFiles.length) {
            this.showError = true;
        }
        this.files.push(...excelFiles);
    }
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
    ngOnInit() {
        this.getExchangeList();
    }
    getExchangeList() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([this._masterSeconedService.getTradeFileList()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            this.exchangeList = response[0];
        })).subscribe(res => {
        });
    }
    submit() {
        if (this.files.length > 0 && this.selectedExId) {
            this.files.forEach((file, idx, array) => {
                let fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onloadend = (e) => {
                    const formData = new FormData();
                    formData.append("files", this.files[0], file.name);
                    formData.append("fileTypeId", this.selectedExId);
                    // formData.append("lotFile", String(this.lotFile));
                    if (idx == array.length - 1) {
                        this._scriptsService.ImportTrade(formData).subscribe(res => {
                            console.log("result", res);
                            this.resetForm();
                            this.showToaster(res.message, !res.isSuccess);
                        }, err => {
                            console.log(err);
                        });
                    }
                };
            });
        }
    }
    resetForm() {
        this.selectedExId = '';
        this.files = [];
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
TradeComponent.ɵfac = function TradeComponent_Factory(t) { return new (t || TradeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_imports_service__WEBPACK_IMPORTED_MODULE_0__.ScriptsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Master_master_service__WEBPACK_IMPORTED_MODULE_1__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Master_master_second_service__WEBPACK_IMPORTED_MODULE_2__.MasterSecondService)); };
TradeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TradeComponent, selectors: [["app-trade"]], decls: 18, vars: 5, consts: [[1, "row", "paret-form"], ["fxLayout", "row", 1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "20", "fxFlex.sm", "50"], ["appearance", "outline", 1, "example-full-width"], ["placeholder", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "script-main"], [1, "drop-box"], [3, "change"], [3, "multiple", "removable", "removed", 4, "ngFor", "ngForOf"], ["class", "error-message", 4, "ngIf"], [1, "text-end"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], [3, "value"], [3, "multiple", "removable", "removed"], [1, "error-message"]], template: function TradeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "FileType");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TradeComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedExId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TradeComponent_mat_option_7_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "ngx-dropzone", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function TradeComponent_Template_ngx_dropzone_change_10_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ngx-dropzone-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Drop File here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TradeComponent_ngx_dropzone_preview_13_Template, 3, 4, "ngx-dropzone-preview", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, TradeComponent_div_14_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TradeComponent_Template_button_click_16_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedExId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.exchangeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showError);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.files.length || !ctx.selectedExId);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__.NgxDropzoneLabelDirective, ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__.NgxDropzonePreviewComponent], styles: [".script-main[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJ0cmFkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JpcHQtbWFpbntcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 92522:
/*!*************************************************************!*\
  !*** ./node_modules/ngx-dropzone/fesm2020/ngx-dropzone.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxDropzoneComponent": () => (/* binding */ NgxDropzoneComponent),
/* harmony export */   "NgxDropzoneImagePreviewComponent": () => (/* binding */ NgxDropzoneImagePreviewComponent),
/* harmony export */   "NgxDropzoneLabelDirective": () => (/* binding */ NgxDropzoneLabelDirective),
/* harmony export */   "NgxDropzoneModule": () => (/* binding */ NgxDropzoneModule),
/* harmony export */   "NgxDropzonePreviewComponent": () => (/* binding */ NgxDropzonePreviewComponent),
/* harmony export */   "NgxDropzoneRemoveBadgeComponent": () => (/* binding */ NgxDropzoneRemoveBadgeComponent),
/* harmony export */   "NgxDropzoneVideoPreviewComponent": () => (/* binding */ NgxDropzoneVideoPreviewComponent)
/* harmony export */ });
/* harmony import */ var C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 34497);







function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1._remove($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

const _c0 = [[["ngx-dropzone-label"]]];
const _c1 = ["ngx-dropzone-label"];
const _c2 = ["fileInput"];

function NgxDropzoneComponent_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 2, ["*ngIf", "!_hasPreviews"]);
  }
}

const _c3 = [[["ngx-dropzone-preview"]], "*", [["ngx-dropzone-label"]]];
const _c4 = ["ngx-dropzone-preview", "*", "ngx-dropzone-label"];

function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1._remove($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function NgxDropzoneVideoPreviewComponent_video_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "video", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_video_0_Template_video_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "source", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.sanitizedVideoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}

function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3._remove($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

class NgxDropzoneLabelDirective {}

NgxDropzoneLabelDirective.ɵfac = function NgxDropzoneLabelDirective_Factory(t) {
  return new (t || NgxDropzoneLabelDirective)();
};

NgxDropzoneLabelDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: NgxDropzoneLabelDirective,
  selectors: [["ngx-dropzone-label"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneLabelDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'ngx-dropzone-label'
    }]
  }], null, null);
})();
/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
 */


function coerceBooleanProperty(value) {
  return value != null && `${value}` !== 'false';
}
/**
 * Whether the provided value is considered a number.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 */


function coerceNumberProperty(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value)) ? Number(value) : null;
}

class NgxDropzoneRemoveBadgeComponent {}

NgxDropzoneRemoveBadgeComponent.ɵfac = function NgxDropzoneRemoveBadgeComponent_Factory(t) {
  return new (t || NgxDropzoneRemoveBadgeComponent)();
};

NgxDropzoneRemoveBadgeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NgxDropzoneRemoveBadgeComponent,
  selectors: [["ngx-dropzone-remove-badge"]],
  decls: 3,
  vars: 0,
  consts: [["x1", "0", "y1", "0", "x2", "10", "y2", "10"], ["x1", "0", "y1", "10", "x2", "10", "y2", "0"]],
  template: function NgxDropzoneRemoveBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "line", 0)(2, "line", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneRemoveBadgeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-dropzone-remove-badge',
      template: `
    <svg>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  `,
      styles: [":host{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}:host:hover{background:#aeaeae}:host>svg{height:10px;width:10px}:host>svg>line{stroke-width:2px;stroke:#fff}\n"]
    }]
  }], null, null);
})();

var KEY_CODE;

(function (KEY_CODE) {
  KEY_CODE[KEY_CODE["BACKSPACE"] = 8] = "BACKSPACE";
  KEY_CODE[KEY_CODE["DELETE"] = 46] = "DELETE";
})(KEY_CODE || (KEY_CODE = {}));

class NgxDropzonePreviewComponent {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this._removable = false;
    /** Emitted when the element should be removed. */

    this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Make the preview item focusable using the tab key. */

    this.tabIndex = 0;
  }
  /** The file to preview. */


  set file(value) {
    this._file = value;
  }

  get file() {
    return this._file;
  }
  /** Allow the user to remove files. */


  get removable() {
    return this._removable;
  }

  set removable(value) {
    this._removable = coerceBooleanProperty(value);
  }

  keyEvent(event) {
    switch (event.keyCode) {
      case KEY_CODE.BACKSPACE:
      case KEY_CODE.DELETE:
        this.remove();
        break;

      default:
        break;
    }
  }
  /** We use the HostBinding to pass these common styles to child components. */


  get hostStyle() {
    const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;
    return this.sanitizer.bypassSecurityTrustStyle(styles);
  }
  /** Remove method to be used from the template. */


  _remove(event) {
    event.stopPropagation();
    this.remove();
  }
  /** Remove the preview item (use from component code). */


  remove() {
    if (this._removable) {
      this.removed.next(this.file);
    }
  }

  readFile() {
    var _this = this;

    return (0,C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = e => {
          resolve(e.target.result);
        };

        reader.onerror = e => {
          console.error(`FileReader failed on file ${_this.file.name}.`);
          reject(e);
        };

        if (!_this.file) {
          return reject('No file to read. Please provide a file using the [file] Input property.');
        }

        reader.readAsDataURL(_this.file);
      });
    })();
  }

}

NgxDropzonePreviewComponent.ɵfac = function NgxDropzonePreviewComponent_Factory(t) {
  return new (t || NgxDropzonePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};

NgxDropzonePreviewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NgxDropzonePreviewComponent,
  selectors: [["ngx-dropzone-preview"]],
  hostVars: 3,
  hostBindings: function NgxDropzonePreviewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function NgxDropzonePreviewComponent_keyup_HostBindingHandler($event) {
        return ctx.keyEvent($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabindex", ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.hostStyle);
    }
  },
  inputs: {
    file: "file",
    removable: "removable"
  },
  outputs: {
    removed: "removed"
  },
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [[3, "click", 4, "ngIf"], [3, "click"]],
  template: function NgxDropzonePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template, 1, 0, "ngx-dropzone-remove-badge", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removable);
    }
  },
  dependencies: [NgxDropzoneRemoveBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzonePreviewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-dropzone-preview',
      template: `
		<ng-content select="ngx-dropzone-label"></ng-content>
		<ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
		</ngx-dropzone-remove-badge>
	`,
      styles: [":host{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host:hover,:host:focus{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host:hover ngx-dropzone-remove-badge,:host:focus ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer
    }];
  }, {
    file: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    removable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    removed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    keyEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keyup', ['$event']]
    }],
    hostStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['style']
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['tabindex']
    }]
  });
})();
/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */


class NgxDropzoneService {
  parseFileList(files, accept, maxFileSize, multiple) {
    const addedFiles = [];
    const rejectedFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);

      if (!this.isAccepted(file, accept)) {
        this.rejectFile(rejectedFiles, file, 'type');
        continue;
      }

      if (maxFileSize && file.size > maxFileSize) {
        this.rejectFile(rejectedFiles, file, 'size');
        continue;
      }

      if (!multiple && addedFiles.length >= 1) {
        this.rejectFile(rejectedFiles, file, 'no_multiple');
        continue;
      }

      addedFiles.push(file);
    }

    const result = {
      addedFiles,
      rejectedFiles
    };
    return result;
  }

  isAccepted(file, accept) {
    if (accept === '*') {
      return true;
    }

    const acceptFiletypes = accept.split(',').map(it => it.toLowerCase().trim());
    const filetype = file.type.toLowerCase();
    const filename = file.name.toLowerCase();
    const matchedFileType = acceptFiletypes.find(acceptFiletype => {
      // check for wildcard mimetype (e.g. image/*)
      if (acceptFiletype.endsWith('/*')) {
        return filetype.split('/')[0] === acceptFiletype.split('/')[0];
      } // check for file extension (e.g. .csv)


      if (acceptFiletype.startsWith(".")) {
        return filename.endsWith(acceptFiletype);
      } // check for exact mimetype match (e.g. image/jpeg)


      return acceptFiletype == filetype;
    });
    return !!matchedFileType;
  }

  rejectFile(rejectedFiles, file, reason) {
    const rejectedFile = file;
    rejectedFile.reason = reason;
    rejectedFiles.push(rejectedFile);
  }

}

NgxDropzoneService.ɵfac = function NgxDropzoneService_Factory(t) {
  return new (t || NgxDropzoneService)();
};

NgxDropzoneService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NgxDropzoneService,
  factory: NgxDropzoneService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();

class NgxDropzoneComponent {
  constructor(service) {
    this.service = service;
    /** Emitted when any files were added or rejected. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Set the accepted file types. Defaults to '*'. */

    this.accept = '*';
    this._disabled = false;
    this._multiple = true;
    this._maxFileSize = undefined;
    this._expandable = false;
    this._disableClick = false;
    this._processDirectoryDrop = false;
    this._isHovered = false;
  }

  get _hasPreviews() {
    return !!this._previewChildren.length;
  }
  /** Disable any user interaction with the component. */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);

    if (this._isHovered) {
      this._isHovered = false;
    }
  }
  /** Allow the selection of multiple files. */


  get multiple() {
    return this._multiple;
  }

  set multiple(value) {
    this._multiple = coerceBooleanProperty(value);
  }
  /** Set the maximum size a single file may have. */


  get maxFileSize() {
    return this._maxFileSize;
  }

  set maxFileSize(value) {
    this._maxFileSize = coerceNumberProperty(value);
  }
  /** Allow the dropzone container to expand vertically. */


  get expandable() {
    return this._expandable;
  }

  set expandable(value) {
    this._expandable = coerceBooleanProperty(value);
  }
  /** Open the file selector on click. */


  get disableClick() {
    return this._disableClick;
  }

  set disableClick(value) {
    this._disableClick = coerceBooleanProperty(value);
  }
  /** Allow dropping directories. */


  get processDirectoryDrop() {
    return this._processDirectoryDrop;
  }

  set processDirectoryDrop(value) {
    this._processDirectoryDrop = coerceBooleanProperty(value);
  }
  /** Show the native OS file explorer to select files. */


  _onClick() {
    if (!this.disableClick) {
      this.showFileSelector();
    }
  }

  _onDragOver(event) {
    if (this.disabled) {
      return;
    }

    this.preventDefault(event);
    this._isHovered = true;
  }

  _onDragLeave() {
    this._isHovered = false;
  }

  _onDrop(event) {
    if (this.disabled) {
      return;
    }

    this.preventDefault(event);
    this._isHovered = false; // if processDirectoryDrop is not enabled or webkitGetAsEntry is not supported we handle the drop as usual

    if (!this.processDirectoryDrop || !DataTransferItem.prototype.webkitGetAsEntry) {
      this.handleFileDrop(event.dataTransfer.files); // if processDirectoryDrop is enabled and webkitGetAsEntry is supported we can extract files from a dropped directory
    } else {
      const droppedItems = event.dataTransfer.items;

      if (droppedItems.length > 0) {
        const droppedFiles = [];
        const droppedDirectories = []; // seperate dropped files from dropped directories for easier handling

        for (let i = 0; i < droppedItems.length; i++) {
          const entry = droppedItems[i].webkitGetAsEntry();

          if (entry.isFile) {
            droppedFiles.push(event.dataTransfer.files[i]);
          } else if (entry.isDirectory) {
            droppedDirectories.push(entry);
          }
        } // create a DataTransfer


        const droppedFilesList = new DataTransfer();
        droppedFiles.forEach(droppedFile => {
          droppedFilesList.items.add(droppedFile);
        }); // if no directory is dropped we are done and can call handleFileDrop

        if (!droppedDirectories.length && droppedFilesList.items.length) {
          this.handleFileDrop(droppedFilesList.files);
        } // if directories are dropped we extract the files from these directories one-by-one and add it to droppedFilesList


        if (droppedDirectories.length) {
          const extractFilesFromDirectoryCalls = [];

          for (const droppedDirectory of droppedDirectories) {
            extractFilesFromDirectoryCalls.push(this.extractFilesFromDirectory(droppedDirectory));
          } // wait for all directories to be proccessed to add the extracted files afterwards


          Promise.all(extractFilesFromDirectoryCalls).then(allExtractedFiles => {
            allExtractedFiles.reduce((a, b) => [...a, ...b]).forEach(extractedFile => {
              droppedFilesList.items.add(extractedFile);
            });
            this.handleFileDrop(droppedFilesList.files);
          });
        }
      }
    }
  }

  extractFilesFromDirectory(directory) {
    function getFileFromFileEntry(_x) {
      return _getFileFromFileEntry.apply(this, arguments);
    }

    function _getFileFromFileEntry() {
      _getFileFromFileEntry = (0,C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fileEntry) {
        try {
          return yield new Promise((resolve, reject) => fileEntry.file(resolve, reject));
        } catch (err) {
          console.log('Error converting a fileEntry to a File: ', err);
        }
      });
      return _getFileFromFileEntry.apply(this, arguments);
    }

    return new Promise((resolve, reject) => {
      const files = [];
      const dirReader = directory.createReader(); // we need this to be a recursion because of this issue: https://bugs.chromium.org/p/chromium/issues/detail?id=514087

      const readEntries = () => {
        dirReader.readEntries( /*#__PURE__*/function () {
          var _ref = (0,C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dirItems) {
            if (!dirItems.length) {
              resolve(files);
            } else {
              const fileEntries = dirItems.filter(dirItem => dirItem.isFile);

              for (const fileEntry of fileEntries) {
                const file = yield getFileFromFileEntry(fileEntry);
                files.push(file);
              }

              readEntries();
            }
          });

          return function (_x2) {
            return _ref.apply(this, arguments);
          };
        }());
      };

      readEntries();
    });
  }

  showFileSelector() {
    if (!this.disabled) {
      this._fileInput.nativeElement.click();
    }
  }

  _onFilesSelected(event) {
    const files = event.target.files;
    this.handleFileDrop(files); // Reset the native file input element to allow selecting the same file again

    this._fileInput.nativeElement.value = ''; // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.

    this.preventDefault(event);
  }

  handleFileDrop(files) {
    const result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
    this.change.next({
      addedFiles: result.addedFiles,
      rejectedFiles: result.rejectedFiles,
      source: this
    });
  }

  preventDefault(event) {
    event.preventDefault();
    event.stopPropagation();
  }

}

NgxDropzoneComponent.ɵfac = function NgxDropzoneComponent_Factory(t) {
  return new (t || NgxDropzoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxDropzoneService, 2));
};

NgxDropzoneComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NgxDropzoneComponent,
  selectors: [["ngx-dropzone"], ["", "ngx-dropzone", ""]],
  contentQueries: function NgxDropzoneComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgxDropzonePreviewComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._previewChildren = _t);
    }
  },
  viewQuery: function NgxDropzoneComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._fileInput = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function NgxDropzoneComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxDropzoneComponent_click_HostBindingHandler() {
        return ctx._onClick();
      })("dragover", function NgxDropzoneComponent_dragover_HostBindingHandler($event) {
        return ctx._onDragOver($event);
      })("dragleave", function NgxDropzoneComponent_dragleave_HostBindingHandler() {
        return ctx._onDragLeave();
      })("drop", function NgxDropzoneComponent_drop_HostBindingHandler($event) {
        return ctx._onDrop($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-dz-disabled", ctx.disabled)("expandable", ctx.expandable)("unclickable", ctx.disableClick)("ngx-dz-hovered", ctx._isHovered);
    }
  },
  inputs: {
    accept: "accept",
    disabled: "disabled",
    multiple: "multiple",
    maxFileSize: "maxFileSize",
    expandable: "expandable",
    disableClick: "disableClick",
    processDirectoryDrop: "processDirectoryDrop",
    id: "id",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedBy: ["aria-describedby", "ariaDescribedBy"]
  },
  outputs: {
    change: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NgxDropzoneService])],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 8,
  consts: [["type", "file", 3, "id", "multiple", "accept", "disabled", "change"], ["fileInput", ""], [4, "ngIf"]],
  template: function NgxDropzoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NgxDropzoneComponent_Template_input_change_0_listener($event) {
        return ctx._onFilesSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxDropzoneComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id)("multiple", ctx.multiple)("accept", ctx.accept)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._hasPreviews);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:-webkit-focus-ring-color auto 5px}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-dropzone, [ngx-dropzone]',
      providers: [NgxDropzoneService],
      template: "<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n  (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n  [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n",
      styles: [":host{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}:host.ngx-dz-hovered{border-style:solid}:host.ngx-dz-disabled{opacity:.5;cursor:no-drop;pointer-events:none}:host.expandable{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}:host.unclickable{cursor:default}:host ::ng-deep ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}:host input{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}:host input:focus+::ng-deep ngx-dropzone-label{outline:1px dotted #000;outline:-webkit-focus-ring-color auto 5px}\n"]
    }]
  }], function () {
    return [{
      type: NgxDropzoneService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
      }]
    }];
  }, {
    _previewChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [NgxDropzonePreviewComponent, {
        descendants: true
      }]
    }],
    _fileInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['fileInput', {
        static: true
      }]
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    accept: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.ngx-dz-disabled']
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxFileSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    expandable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.expandable']
    }],
    disableClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.unclickable']
    }],
    processDirectoryDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-describedby']
    }],
    _isHovered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.ngx-dz-hovered']
    }],
    _onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['click']
    }],
    _onDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['dragover', ['$event']]
    }],
    _onDragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['dragleave']
    }],
    _onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['drop', ['$event']]
    }]
  });
})();

class NgxDropzoneImagePreviewComponent extends NgxDropzonePreviewComponent {
  constructor(sanitizer) {
    super(sanitizer);
    /** The image data source. */

    this.defaultImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.defaultImgLoading);
  }
  /** The file to preview. */


  set file(value) {
    this._file = value;
    this.renderImage();
  }

  get file() {
    return this._file;
  }

  ngOnInit() {
    this.renderImage();
  }

  renderImage() {
    this.readFile().then(img => setTimeout(() => this.imageSrc = img)).catch(err => console.error(err));
  }

}

NgxDropzoneImagePreviewComponent.ɵfac = function NgxDropzoneImagePreviewComponent_Factory(t) {
  return new (t || NgxDropzoneImagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};

NgxDropzoneImagePreviewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NgxDropzoneImagePreviewComponent,
  selectors: [["ngx-dropzone-image-preview"]],
  inputs: {
    file: "file"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: NgxDropzonePreviewComponent,
    useExisting: NgxDropzoneImagePreviewComponent
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [[3, "src"], [3, "click", 4, "ngIf"], [3, "click"]],
  template: function NgxDropzoneImagePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removable);
    }
  },
  dependencies: [NgxDropzoneRemoveBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:hover   img[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;border-radius:5px;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneImagePreviewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-dropzone-image-preview',
      template: `
    <img [src]="imageSrc" />
		<ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
      providers: [{
        provide: NgxDropzonePreviewComponent,
        useExisting: NgxDropzoneImagePreviewComponent
      }],
      styles: [":host{min-width:unset!important;max-width:unset!important;padding:0!important}:host:hover img,:host:focus img{opacity:.7}:host:hover ngx-dropzone-remove-badge,:host:focus ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host img{max-height:100%;border-radius:5px;opacity:.8}:host ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer
    }];
  }, {
    file: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

class NgxDropzoneVideoPreviewComponent extends NgxDropzonePreviewComponent {
  constructor(sanitizer) {
    super(sanitizer);
  }

  ngOnInit() {
    if (!this.file) {
      console.error('No file to read. Please provide a file using the [file] Input property.');
      return;
    }
    /**
     * We sanitize the URL here to enable the preview.
     * Please note that this could cause security issues!
     **/


    this.videoSrc = URL.createObjectURL(this.file);
    this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
  }

  ngOnDestroy() {
    URL.revokeObjectURL(this.videoSrc);
  }

}

NgxDropzoneVideoPreviewComponent.ɵfac = function NgxDropzoneVideoPreviewComponent_Factory(t) {
  return new (t || NgxDropzoneVideoPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};

NgxDropzoneVideoPreviewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NgxDropzoneVideoPreviewComponent,
  selectors: [["ngx-dropzone-video-preview"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: NgxDropzonePreviewComponent,
    useExisting: NgxDropzoneVideoPreviewComponent
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [["controls", "", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["controls", "", 3, "click"], [3, "src"], [3, "click"]],
  template: function NgxDropzoneVideoPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgxDropzoneVideoPreviewComponent_video_0_Template, 2, 1, "video", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sanitizedVideoSrc);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removable);
    }
  },
  dependencies: [NgxDropzoneRemoveBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:hover   video[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   video[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{max-height:100%;border-radius:5px}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneVideoPreviewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-dropzone-video-preview',
      template: `
    <video *ngIf="sanitizedVideoSrc" controls (click)="$event.stopPropagation()">
      <source [src]="sanitizedVideoSrc" />
    </video>
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
      providers: [{
        provide: NgxDropzonePreviewComponent,
        useExisting: NgxDropzoneVideoPreviewComponent
      }],
      styles: [":host{min-width:unset!important;max-width:unset!important;padding:0!important}:host:hover video,:host:focus video{opacity:.7}:host:hover ngx-dropzone-remove-badge,:host:focus ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host video{max-height:100%;border-radius:5px}:host ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer
    }];
  }, null);
})();

class NgxDropzoneModule {}

NgxDropzoneModule.ɵfac = function NgxDropzoneModule_Factory(t) {
  return new (t || NgxDropzoneModule)();
};

NgxDropzoneModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NgxDropzoneModule
});
NgxDropzoneModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      declarations: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent],
      exports: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-dropzone
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_Forms_Imports_imports_module_ts.js.map