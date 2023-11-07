"use strict";
(self["webpackChunkgradus"] = self["webpackChunkgradus"] || []).push([["src_app_Forms_User_user_module_ts"],{

/***/ 76915:
/*!**********************************************!*\
  !*** ./src/app/Forms/User/user.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoleComponent": () => (/* binding */ UserRoleComponent)
/* harmony export */ });
/* harmony import */ var _invite_user_invite_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invite-user/invite-user.component */ 6441);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ 41369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/app.service */ 46935);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _Master_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Master/master.service */ 60808);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ 79771);












class UserRoleComponent {
    constructor(appSettings, _appService, dialog, _masterService) {
        this.appSettings = appSettings;
        this._appService = _appService;
        this.dialog = dialog;
        this._masterService = _masterService;
        this.userList = [];
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
            { headerName: 'First Name', field: 'firstName', filter: true, sorting: true, resizable: true },
            { headerName: 'Last Name', field: 'lastName', filter: true, sorting: true, resizable: true },
            { headerName: 'User Name', field: 'userName', filter: true, sorting: true, resizable: true },
            { headerName: 'Email', field: 'email', filter: true, sorting: true, resizable: true },
            { headerName: 'Status', field: 'isActive', filter: true, sorting: true, resizable: true, cellRenderer: (params) => {
                    return params.value ? 'Active' : 'Inactive';
                } },
            {
                headerName: '',
                cellRenderer: () => 'Change Password',
                field: 'changePassword',
                filter: false,
                sorting: false,
                resizable: true,
            },
        ];
        this.settings = this.appSettings.settings;
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
            this.inviteUserDialog(params.data.id);
        }
        if (params.column && params.column.getColDef().field === 'changePassword') {
            this.dialog.open(_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.changePasswordComponent, {
                data: { id: params.data.id }
            });
        }
    }
    getUserList() {
        this._appService.getUserList().subscribe((results) => {
            this.userList = results.data;
        });
    }
    ngOnInit() {
        this.getUserList();
    }
    inviteUserDialog(user) {
        let dialogRef = this.dialog.open(_invite_user_invite_user_component__WEBPACK_IMPORTED_MODULE_0__.InviteUserComponent, {
            data: { id: user }
        });
        dialogRef.afterClosed().subscribe(user => {
            this.getUserList();
        });
    }
}
UserRoleComponent.ɵfac = function UserRoleComponent_Factory(t) { return new (t || UserRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Master_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService)); };
UserRoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UserRoleComponent, selectors: [["app-user"]], decls: 12, vars: 5, consts: [[1, "row"], ["fxLayout", "row", 1, "mt-2", "flex-end"], ["mat-raised-button", "", "color", "accent", 1, "icon-btn", "ml-15", "create-user", 3, "click"], [1, "user-tab"], ["label", "Users"], [1, "col-xl-12", "mt-2"], ["headerHeight", "34", 1, "ag-theme-material", 2, "height", "535px", 3, "rowHeight", "rowData", "pagination", "columnDefs", "defaultColDef", "cellClicked"], ["label", "Roles"]], template: function UserRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserRoleComponent_Template_button_click_2_listener() { return ctx.inviteUserDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Create User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-tab-group", 3)(7, "mat-tab", 4)(8, "div", 5)(9, "ag-grid-angular", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cellClicked", function UserRoleComponent_Template_ag_grid_angular_cellClicked_9_listener($event) { return ctx.onGridClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Roles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", 31)("rowData", ctx.userList)("pagination", true)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.agGridOptions.defaultColDef);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular], styles: [".user-tab[_ngcontent-%COMP%] {\n  margin-top: -35px;\n}\n\n.create-user[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBRUoiLCJmaWxlIjoidXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLXRhYiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcclxufVxyXG4uY3JlYXRlLXVzZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMztcclxufSJdfQ== */"] });


/***/ }),

/***/ 61424:
/*!*******************************************!*\
  !*** ./src/app/Forms/User/user.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ 39045);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ 76915);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ 79771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);











const routes = [
    { path: '', component: _user_component__WEBPACK_IMPORTED_MODULE_3__.UserRoleComponent, pathMatch: 'full' }
];
class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__.AgGridModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__.UserRoleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_0__.NgxPaginationModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__.AgGridModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_Forms_User_user_module_ts.js.map