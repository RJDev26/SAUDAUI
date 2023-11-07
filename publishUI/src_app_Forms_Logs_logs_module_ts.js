"use strict";
(self["webpackChunkgradus"] = self["webpackChunkgradus"] || []).push([["src_app_Forms_Logs_logs_module_ts"],{

/***/ 90703:
/*!*******************************************!*\
  !*** ./src/app/Forms/Logs/logs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsModule": () => (/* binding */ LogsModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ 39045);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ 79771);
/* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logs/logs.component */ 32333);
/* harmony import */ var _logs_new_account_log_new_account_log_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logs/new-account-log/new-account-log.component */ 12154);
/* harmony import */ var _logs_missing_trade_missing_trade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logs/missing-trade/missing-trade.component */ 89679);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);














const routes = [
    { path: '', component: _logs_logs_component__WEBPACK_IMPORTED_MODULE_3__.LogsComponent, pathMatch: 'full' }
];
class LogsModule {
}
LogsModule.ɵfac = function LogsModule_Factory(t) { return new (t || LogsModule)(); };
LogsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LogsModule });
LogsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe,
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MAT_DATE_LOCALE, useValue: 'en-GB' }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LogsModule, { declarations: [_logs_logs_component__WEBPACK_IMPORTED_MODULE_3__.LogsComponent,
        _logs_new_account_log_new_account_log_component__WEBPACK_IMPORTED_MODULE_4__.NewAccountLogComponent,
        _logs_missing_trade_missing_trade_component__WEBPACK_IMPORTED_MODULE_5__.MissingTradeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridModule] }); })();


/***/ }),

/***/ 56546:
/*!********************************************!*\
  !*** ./src/app/Forms/Logs/logs.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsService": () => (/* binding */ LogsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class LogsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    }
    logType() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Common/logType', { headers: this.headers });
    }
    getImportLog(data) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Import/getImportLog', data, { headers: this.headers });
    }
    getMissingSymbol(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Import/getMissingSymbol/' + id, { headers: this.headers });
    }
    getNewAccount(id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl + 'Import/getNewAccount/' + id, { headers: this.headers });
    }
}
LogsService.ɵfac = function LogsService_Factory(t) { return new (t || LogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
LogsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LogsService, factory: LogsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32333:
/*!***************************************************!*\
  !*** ./src/app/Forms/Logs/logs/logs.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsComponent": () => (/* binding */ LogsComponent)
/* harmony export */ });
/* harmony import */ var C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/common-utility */ 70556);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _missing_trade_missing_trade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./missing-trade/missing-trade.component */ 89679);
/* harmony import */ var _new_account_log_new_account_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-account-log/new-account-log.component */ 12154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _Login_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Login/authentication.service */ 88631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _Master_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Master/master.service */ 60808);
/* harmony import */ var _Master_master_second_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Master/master-second.service */ 8703);
/* harmony import */ var _logs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logs.service */ 56546);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ag-grid-angular */ 79771);


























const _c0 = ["select"];
const _c1 = ["selectAccount"];

function LogsComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r5.name, " ");
  }
}

class LogsComponent {
  constructor(cdr, authService, datePipe, snackBar, appSettings, _appService, dialog, _masterService, _masterSecondService, _logSerice) {
    this.cdr = cdr;
    this.authService = authService;
    this.datePipe = datePipe;
    this.snackBar = snackBar;
    this.appSettings = appSettings;
    this._appService = _appService;
    this.dialog = dialog;
    this._masterService = _masterService;
    this._masterSecondService = _masterSecondService;
    this._logSerice = _logSerice;
    this.fromDt = new Date();
    this.toDt = new Date();
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
      headerName: 'TotalRows',
      field: 'totalRows'
    }, {
      headerName: 'ValidatedRows',
      field: 'validatedRows'
    }, {
      field: 'status',
      headerName: 'Status',
      valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_1__.CommonUtility.formatNumber(params.data.intradayBrokRate)
    }, {
      headerName: 'Filename',
      field: 'fileName',
      valueFormatter: params => src_app_shared_common_utility__WEBPACK_IMPORTED_MODULE_1__.CommonUtility.formatNumber(params.data.deliveryBrokRate)
    },
    /*{ headerName: 'HigherSide Only', minWidth: 120, maxWidth: 120, field: 'higherSideOnly',  },*/
    {
      headerName: 'CreatedBy',
      field: 'createdBy'
    },
    /*    { headerName: 'IntradaySingleSideOnly', field: 'intradaySingleSideOnly',  },*/
    {
      headerName: 'CreatedDate',
      field: 'createdDate',
      valueFormatter: params => {
        return this.datePipe.transform(params.value, 'dd/MM/yyyy HH:mm:ss');
      }
    }, {
      headerName: 'Show Missing Symbol',
      field: 'fileIcon',
      cellRenderer: this.actionCellRenderer,
      resizable: true,
      filter: false,
      minWidth: 200,
      maxWidth: 250
    }, {
      headerName: 'New Account',
      field: 'fileIcon',
      cellRenderer: this.actionNewCellRenderer,
      resizable: true,
      filter: false
    }];
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.fetchDropdownData();
    this.getBrokerageSetupList();
    this.userDataSubscription$ = this.authService.authChanged$.subscribe(res => {
      this.userData = res;
      console.log(res);
    }, err => {
      console.log('err', err);
    });
  }

  ngOnDestroy() {
    this.userDataSubscription$.unsubscribe();
  }

  onGridReady(event) {}

  getBrokerageSetupList() {
    if (this.areRequiredValuesSelected()) {
      console.log(this.userData);
      var req = {
        "logType": this.branchIds,
        "fromDt": this.datePipe.transform(this.fromDt, 'yyyy-MM-dd'),
        "toDt": this.datePipe.transform(this.toDt, 'yyyy-MM-dd')
      };

      this._logSerice.getImportLog(req).subscribe(results => {
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
    return this.branchIds && this.fromDt && this.toDt;
  }

  fetchDropdownData() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([this._logSerice.logType()]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(response => {
      this.branchList = response[0];
      this.filteredProviders = response[0];
    })).subscribe(res => {});
  }

  actionNewCellRenderer(params) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some(cell => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button  class="action-missing-trade" data-action="newaccount">New Account</button>`;
    return eGui;
  }

  actionCellRenderer(params) {
    let eGui = document.createElement("div");
    let editingCells = params.api.getEditingCells();
    let isCurrentRowEditing = editingCells.some(cell => {
      return cell.rowIndex === params.node.rowIndex;
    });
    eGui.innerHTML = `<button  class="action-missing-trade" data-action="missingtrade">Show Missing Symbol</button>`;
    return eGui;
  }

  onInputChange(event) {
    const searchInput = event.target.value.toLowerCase();
    this.filteredProviders = this.branchList.filter(data => {
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

  addBrokerage(event) {}

  openSlabDetailsDialog(event) {// const isValid = await this.getBrokerageAddValidation();
    // if (isValid == '' && event === 'add') {
    //   const dialogRef = this.dialog.open(AddSetupDetailsComponent, {
    //     data: {
    //       selectedSlabId: null,
    //       fromDt: this.fromDt,
    //       toDt: this.toDt,
    //       branchIds: this.branchIds,
    //       accountIds: this.accountIds,
    //       itemGroupIds: this.itemGroupIds,
    //       instrumentType: this.instrumentType,
    //       isEditMode: 0
    //     },
    //   });
    //   dialogRef.afterClosed().subscribe((user) => {
    //     this.getBrokerageSetupList();
    //   });
    // } else if(isValid !== '' && event === 'lock'){
    //   const dialogRef = this.dialog.open(LockBrokerageComponent, {
    //     data: {
    //       selectedSlabId: null,
    //       fromDt: this.fromDt,
    //       toDt: this.toDt,
    //       branchIds: this.branchIds,
    //       accountIds: this.accountIds,
    //       itemGroupIds: this.itemGroupIds,
    //       instrumentType: this.instrumentType,
    //       isEditMode: 0
    //     },
    //   });
    //   dialogRef.afterClosed().subscribe((user) => {
    //     this.getBrokerageSetupList();
    //   });
    // }

    return (0,C_Project_rohit_SAUDAUI_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  openModifySetupDialog() {// const dialogRef = this.dialog.open(AddSetupDetailsComponent, {
    //   data: {
    //     selectedSlabId: null,
    //     fromDt: this.fromDt,
    //     toDt: this.toDt,
    //     branchIds: this.branchIds,
    //     accountIds: this.accountIds,
    //     itemGroupIds: this.itemGroupIds,
    //     instrumentType: this.instrumentType,
    //     isEditMode: 1
    //   },
    // });
    // dialogRef.afterClosed().subscribe((user) => {
    //   this.getBrokerageSetupList();
    // });
  }

  onFromDateChange() {
    console.log("fromDt changed:", this.fromDt);
  }

  openEditBrokerageDetails(params) {
    const dialogRef = this.dialog.open(_missing_trade_missing_trade_component__WEBPACK_IMPORTED_MODULE_2__.MissingTradeComponent, {
      data: {
        id: params.id
      }
    });
    dialogRef.afterClosed().subscribe(user => {// this.getBrokerageSetupList();
    });
  }

  onGridClick(params) {
    if (params.event.target.dataset.action == "missingtrade") {
      this.openEditBrokerageDetails(params.data);
    }

    if (params.event.target.dataset.action == "newaccount") {
      this.openNewAccountDetails(params.data);
    }
  }

  openNewAccountDetails(params) {
    const dialogRef = this.dialog.open(_new_account_log_new_account_log_component__WEBPACK_IMPORTED_MODULE_3__.NewAccountLogComponent, {
      data: {
        id: params.id
      }
    });
    dialogRef.afterClosed().subscribe(user => {// this.getBrokerageSetupList();
    });
  }

  viewAllItemGroups() {// let dialogRef = this.dialog.open(ViewItemGroupComponent, {
    //   data: { id:this.itemGroupIds }
    // });
    // dialogRef.afterClosed().subscribe(user => {
    // });
  }

}

LogsComponent.ɵfac = function LogsComponent_Factory(t) {
  return new (t || LogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_Login_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_6__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_Master_master_service__WEBPACK_IMPORTED_MODULE_7__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_Master_master_second_service__WEBPACK_IMPORTED_MODULE_8__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_logs_service__WEBPACK_IMPORTED_MODULE_9__.LogsService));
};

LogsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: LogsComponent,
  selectors: [["app-logs"]],
  viewQuery: function LogsComponent_Query(rf, ctx) {
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
  decls: 39,
  vars: 14,
  consts: [[1, "row"], [1, "mt-2"], ["fxFlex", "100", "fxFlex.gt-sm", "15", "fxFlex.sm", "15"], [1, "dropdown-container"], [1, "dropdown-wrapper"], ["appearance", "outline", 1, "calendar"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "placeholder", "To", 3, "matDatepicker", "ngModel", "ngModelChange"], ["picker2", ""], ["appearance", "outline", 1, "select-slab-mat"], ["placeholder", "Select LogType", "panelClass", "custom-select-panel", 3, "ngModel", "ngModelChange"], ["select", ""], ["type", "text", "autocomplete", "off", "matInput", "", "placeholder", "Search LogType", 1, "milti-search-box", 3, "input"], ["multiUserSearch", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "7", "fxFlex.sm", "7"], ["mat-raised-button", "", "color", "primary", 1, "search-icon-btn", "bhaskar-reddy", 3, "disabled", "click"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "cellClicked", "gridReady"], [3, "value"]],
  template: function LogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "From");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function LogsComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.fromDt = $event;
      })("ngModelChange", function LogsComponent_Template_input_ngModelChange_8_listener() {
        return ctx.onFromDateChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "mat-datepicker-toggle", 7)(10, "mat-datepicker", null, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "div", 4)(15, "mat-form-field", 5)(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "To");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function LogsComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.toDt = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "mat-datepicker-toggle", 7)(20, "mat-datepicker", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 2)(23, "div", 3)(24, "div", 4)(25, "mat-form-field", 11)(26, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Select LogType");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "mat-select", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function LogsComponent_Template_mat_select_ngModelChange_28_listener($event) {
        return ctx.branchIds = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function LogsComponent_Template_input_input_30_listener($event) {
        return ctx.onInputChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, LogsComponent_mat_option_32_Template, 2, 2, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 17)(34, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LogsComponent_Template_button_click_34_listener() {
        return ctx.getBrokerageSetupList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 19)(38, "ag-grid-angular", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cellClicked", function LogsComponent_Template_ag_grid_angular_cellClicked_38_listener($event) {
        return ctx.onGridClick($event);
      })("gridReady", function LogsComponent_Template_ag_grid_angular_gridReady_38_listener($event) {
        return ctx.onGridReady($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](21);

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.fromDt);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.toDt);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.branchIds);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredProviders);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.areRequiredValuesSelected());
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rowData", ctx.brokeragesetupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelect, ag_grid_angular__WEBPACK_IMPORTED_MODULE_25__.AgGridAngular],
  styles: [".action-missing-trade[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  margin-right: 7px;\n  color: #ffb80a;\n  font-size: 12px;\n  line-height: 30px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoibG9ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24tbWlzc2luZy10cmFkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgY29sb3I6ICNmZmI4MGE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"]
});

/***/ }),

/***/ 89679:
/*!**************************************************************************!*\
  !*** ./src/app/Forms/Logs/logs/missing-trade/missing-trade.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissingTradeComponent": () => (/* binding */ MissingTradeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_Forms_Master_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Forms/Master/master.service */ 60808);
/* harmony import */ var _logs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logs.service */ 56546);
/* harmony import */ var src_app_Forms_Master_master_second_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Forms/Master/master-second.service */ 8703);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ 79771);













const _c0 = ["select"];
class MissingTradeComponent {
    constructor(appSettings, formBuilder, dialogRef, data, _masterService, _logServices, _masterSecondService, dialog, snackBar) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._masterService = _masterService;
        this._logServices = _logServices;
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
            { headerName: 'Symbol Name', field: 'symbolName', filter: true, sorting: true, resizable: true, flex: 1, },
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
        this._logServices.getMissingSymbol(this.selectedId).subscribe((res) => {
            this.itemGroupList = res.data;
        });
    }
    ngOnInit() {
        this.initialApiCalls();
    }
    close() {
        this.dialogRef.close();
    }
}
MissingTradeComponent.ɵfac = function MissingTradeComponent_Factory(t) { return new (t || MissingTradeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Forms_Master_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_logs_service__WEBPACK_IMPORTED_MODULE_3__.LogsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Forms_Master_master_second_service__WEBPACK_IMPORTED_MODULE_4__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)); };
MissingTradeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MissingTradeComponent, selectors: [["app-missing-trade"]], viewQuery: function MissingTradeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, decls: 9, vars: 5, consts: [[1, "brokerage-setup-item"], [1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], [1, "col-xl-12", "position-relative"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "500px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "gridReady"]], template: function MissingTradeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Missing Symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MissingTradeComponent_Template_a_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 3)(5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "ag-grid-angular", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("gridReady", function MissingTradeComponent_Template_ag_grid_angular_gridReady_8_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.itemGroupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXNzaW5nLXRyYWRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 12154:
/*!******************************************************************************!*\
  !*** ./src/app/Forms/Logs/logs/new-account-log/new-account-log.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAccountLogComponent": () => (/* binding */ NewAccountLogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _Dialog_confirmation_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Dialog/confirmation-dialog/error-dialog.component */ 44690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_Forms_Master_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Forms/Master/master.service */ 60808);
/* harmony import */ var _logs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logs.service */ 56546);
/* harmony import */ var src_app_Forms_Master_master_second_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Forms/Master/master-second.service */ 8703);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ 79771);













const _c0 = ["select"];
class NewAccountLogComponent {
    constructor(appSettings, formBuilder, dialogRef, data, _masterService, _logServices, _masterSecondService, dialog, snackBar) {
        this.appSettings = appSettings;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this._masterService = _masterService;
        this._logServices = _logServices;
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
            { headerName: 'Name', field: 'name', filter: true, sorting: true, resizable: true, flex: 1, },
            { headerName: 'Short Code', field: 'shortCode', filter: true, sorting: true, resizable: true, flex: 1, },
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
        this._logServices.getNewAccount(this.selectedId).subscribe((res) => {
            this.itemGroupList = res.data;
        });
    }
    ngOnInit() {
        this.initialApiCalls();
    }
    close() {
        this.dialogRef.close();
    }
}
NewAccountLogComponent.ɵfac = function NewAccountLogComponent_Factory(t) { return new (t || NewAccountLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_1__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Forms_Master_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_logs_service__WEBPACK_IMPORTED_MODULE_3__.LogsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Forms_Master_master_second_service__WEBPACK_IMPORTED_MODULE_4__.MasterSecondService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)); };
NewAccountLogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NewAccountLogComponent, selectors: [["app-new-account-log"]], viewQuery: function NewAccountLogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, decls: 9, vars: 5, consts: [[1, "brokerage-setup-item"], [1, "heading"], [1, "close-btn", 3, "click"], [1, "material-symbols-outlined"], [1, "col-xl-12", "position-relative"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "500px", 3, "rowData", "pagination", "rowHeight", "columnDefs", "defaultColDef", "gridReady"]], template: function NewAccountLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "New Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewAccountLogComponent_Template_a_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 3)(5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "ag-grid-angular", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("gridReady", function NewAccountLogComponent_Template_ag_grid_angular_gridReady_8_listener($event) { return ctx.onGridReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowData", ctx.itemGroupList)("pagination", true)("rowHeight", 31)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__.AgGridAngular], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctYWNjb3VudC1sb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_Forms_Logs_logs_module_ts.js.map