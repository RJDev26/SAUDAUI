"use strict";
(self["webpackChunkgradus"] = self["webpackChunkgradus"] || []).push([["src_app_pages_users_users_module_ts"],{

/***/ 57349:
/*!******************************************************************!*\
  !*** ./src/app/pages/users/user-dialog/user-dialog.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDialogComponent": () => (/* binding */ UserDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.model */ 59028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 15892);

















function UserDialogComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDialogComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDialogComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDialogComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username isn't long enough, minimum of 5 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDialogComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDialogComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password isn't long enough, minimum of 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDialogComponent_p_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Registration date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, ctx_r7.user.settings.registrationDate, "dd MMMM, yyyy 'at' HH:mm"));
} }
function UserDialogComponent_p_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Last joined date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 1, ctx_r8.user.settings.joinedDate, "dd MMMM, yyyy 'at' HH:mm"));
} }
function UserDialogComponent_span_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDialogComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserDialogComponent {
    constructor(dialogRef, user, fb) {
        this.dialogRef = dialogRef;
        this.user = user;
        this.fb = fb;
        this.passwordHide = true;
        this.form = this.fb.group({
            id: null,
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5)])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)])],
            profile: this.fb.group({
                name: null,
                surname: null,
                birthday: null,
                gender: null,
                image: null
            }),
            work: this.fb.group({
                company: null,
                position: null,
                salary: null
            }),
            contacts: this.fb.group({
                email: null,
                phone: null,
                address: null
            }),
            social: this.fb.group({
                facebook: null,
                twitter: null,
                google: null
            }),
            settings: this.fb.group({
                isActive: null,
                isDeleted: null,
                registrationDate: null,
                joinedDate: null
            })
        });
    }
    ngOnInit() {
        if (this.user) {
            this.form.setValue(this.user);
        }
        else {
            this.user = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User();
            this.user.profile = new _user_model__WEBPACK_IMPORTED_MODULE_0__.UserProfile();
            this.user.work = new _user_model__WEBPACK_IMPORTED_MODULE_0__.UserWork();
            this.user.contacts = new _user_model__WEBPACK_IMPORTED_MODULE_0__.UserContacts();
            this.user.social = new _user_model__WEBPACK_IMPORTED_MODULE_0__.UserSocial();
            this.user.settings = new _user_model__WEBPACK_IMPORTED_MODULE_0__.UserSettings();
        }
    }
    close() {
        this.dialogRef.close();
    }
}
UserDialogComponent.ɵfac = function UserDialogComponent_Factory(t) { return new (t || UserDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder)); };
UserDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserDialogComponent, selectors: [["app-user-dialog"]], decls: 87, vars: 17, consts: [["mat-dialog-title", ""], [4, "ngIf"], ["mat-dialog-content", ""], [1, "user-form", 3, "formGroup"], [1, "vertical-tabs"], ["label", "Basic"], ["fxLayout", "column", 1, "form-field-outer"], [1, "w-100"], ["matInput", "", "formControlName", "username", "required", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["label", "Personal", "formGroupName", "profile"], ["matInput", "", "placeholder", "Name", "formControlName", "name"], ["matInput", "", "placeholder", "Surname", "formControlName", "surname"], ["matInput", "", "placeholder", "Birthday", "formControlName", "birthday", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["birthday", ""], ["formControlName", "gender"], ["value", "male", "labelPosition", "before"], ["value", "female", "labelPosition", "before"], ["matInput", "", "placeholder", "Image url", "formControlName", "image"], ["label", "Work", "formGroupName", "work"], ["matInput", "", "placeholder", "Company", "formControlName", "company"], ["matInput", "", "placeholder", "Position", "formControlName", "position"], ["matInput", "", "placeholder", "Salary", "formControlName", "salary"], ["matPrefix", ""], ["matSuffix", ""], ["label", "Contacts", "formGroupName", "contacts"], ["matInput", "", "placeholder", "Email", "formControlName", "email"], ["matInput", "", "placeholder", "Phone", "formControlName", "phone"], ["matInput", "", "placeholder", "Address", "formControlName", "address"], ["label", "Social life", "formGroupName", "social"], ["matInput", "", "placeholder", "Facebook", "formControlName", "facebook"], ["matInput", "", "placeholder", "Twitter", "formControlName", "twitter"], ["matInput", "", "placeholder", "Google", "formControlName", "google"], ["label", "Settings", "formGroupName", "settings"], ["formControlName", "isActive"], ["formControlName", "isDeleted"], ["mat-dialog-actions", "", "fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "disabled"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function UserDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserDialogComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserDialogComponent_span_2_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " user");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "form", 3)(6, "mat-tab-group", 4)(7, "mat-tab", 5)(8, "div", 6)(9, "mat-form-field", 7)(10, "mat-placeholder")(11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UserDialogComponent_mat_error_15_Template, 2, 0, "mat-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserDialogComponent_mat_error_16_Template, 2, 0, "mat-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 7)(18, "mat-placeholder")(19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "vpn_key");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserDialogComponent_Template_mat_icon_click_23_listener() { return ctx.passwordHide = !ctx.passwordHide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UserDialogComponent_mat_error_25_Template, 2, 0, "mat-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UserDialogComponent_mat_error_26_Template, 2, 0, "mat-error", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-tab", 11)(28, "div", 6)(29, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 14)(35, "mat-datepicker-toggle", 15)(36, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-radio-group", 17)(39, "mat-radio-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-radio-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-tab", 21)(46, "div", 6)(47, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "$\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-tab", 27)(58, "div", 6)(59, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-tab", 31)(66, "div", 6)(67, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mat-tab", 35)(74, "div", 6)(75, "mat-checkbox", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-checkbox", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Blocked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, UserDialogComponent_p_79_Template, 6, 4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, UserDialogComponent_p_80_Template, 6, 4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 38)(82, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, UserDialogComponent_span_83_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, UserDialogComponent_span_84_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserDialogComponent_Template_button_click_85_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.username.errors == null ? null : ctx.form.controls.username.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.username.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.passwordHide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.passwordHide ? "visibility" : "visibility_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.password.errors == null ? null : ctx.form.controls.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form.controls.password.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.form.value)("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.id);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatPlaceholder, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTab, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: [".user-form[_ngcontent-%COMP%]   .form-field-outer[_ngcontent-%COMP%] {\n  width: 280px;\n}\n.user-form[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtBQUFSIiwiZmlsZSI6InVzZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItZm9ybXtcclxuICAgIC5mb3JtLWZpZWxkLW91dGVye1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgIH1cclxuICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 59028:
/*!*******************************************!*\
  !*** ./src/app/pages/users/user.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "UserContacts": () => (/* binding */ UserContacts),
/* harmony export */   "UserProfile": () => (/* binding */ UserProfile),
/* harmony export */   "UserSettings": () => (/* binding */ UserSettings),
/* harmony export */   "UserSocial": () => (/* binding */ UserSocial),
/* harmony export */   "UserWork": () => (/* binding */ UserWork)
/* harmony export */ });
class User {
}
class UserProfile {
}
class UserWork {
}
class UserContacts {
}
class UserSocial {
}
class UserSettings {
}


/***/ }),

/***/ 31524:
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ 59028);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 47198);
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-dialog/user-dialog.component */ 57349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 56722);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _theme_pipes_search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/pipes/search/user-search.pipe */ 7542);





















function UsersComponent_div_22_div_1_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", user_r7.profile.name, " ", user_r7.profile.surname, "");
} }
function UsersComponent_div_22_div_1_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "User blocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsersComponent_div_22_div_1_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 40);
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("blocked", user_r7.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", user_r7.profile.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function UsersComponent_div_22_div_1_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("blocked", user_r7.settings.isDeleted);
} }
function UsersComponent_div_22_div_1_mat_icon_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsersComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "mat-card", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, UsersComponent_div_22_div_1_h3_3_Template, 2, 2, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, UsersComponent_div_22_div_1_h3_4_Template, 2, 0, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 22, 23)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-menu", 24, 25)(11, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseleave", function UsersComponent_div_22_div_1_Template_span_mouseleave_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r10.closeMenu()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_div_22_div_1_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const user_r7 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.openUserDialog(user_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_div_22_div_1_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const user_r7 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.deleteUser(user_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 28)(23, "div", 29)(24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, UsersComponent_div_22_div_1_img_25_Template, 1, 3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, UsersComponent_div_22_div_1_img_26_Template, 1, 2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, UsersComponent_div_22_div_1_mat_icon_27_Template, 2, 0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 34)(29, "mat-slide-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UsersComponent_div_22_div_1_Template_mat_slide_toggle_change_29_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const user_r7 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](user_r7.settings.isDeleted = !user_r7.settings.isDeleted); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 36)(31, "p", 37)(32, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "card_membership");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "p", 37)(37, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "mail_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "p", 37)(42, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "p", 37)(47, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "p", 37)(52, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "date_range");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](56, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !user_r7.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r7.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r7.profile.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !user_r7.profile.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r7.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", user_r7.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("blocked", user_r7.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r7.work.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r7.contacts.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r7.contacts.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r7.contacts.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](56, 14, user_r7.settings.joinedDate, "dd MMMM, yyyy 'at' HH:mm"), "");
} }
const _c0 = function (a1) { return { itemsPerPage: 6, currentPage: a1 }; };
function UsersComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UsersComponent_div_22_div_1_Template, 57, 17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "UserSearchPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 4, ctx_r2.users, ctx_r2.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, ctx_r2.page)));
} }
function UsersComponent_div_23_div_1_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", user_r24.profile.name, " ", user_r24.profile.surname, "");
} }
function UsersComponent_div_23_div_1_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "User blocked");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsersComponent_div_23_div_1_img_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 40);
} if (rf & 2) {
    const user_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("blocked", user_r24.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", user_r24.profile.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function UsersComponent_div_23_div_1_img_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    const user_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("blocked", user_r24.settings.isDeleted);
} }
function UsersComponent_div_23_div_1_mat_icon_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsersComponent_div_23_div_1_mat_icon_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "person_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsersComponent_div_23_div_1_mat_icon_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsersComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44)(1, "mat-card", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, UsersComponent_div_23_div_1_h3_3_Template, 2, 2, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, UsersComponent_div_23_div_1_h3_4_Template, 2, 0, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 22, 23)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-menu", 24, 25)(11, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseleave", function UsersComponent_div_23_div_1_Template_span_mouseleave_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r27.closeMenu()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_div_23_div_1_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const user_r24 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.openUserDialog(user_r24)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_div_23_div_1_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const user_r24 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.deleteUser(user_r24)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 28)(23, "div", 45)(24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, UsersComponent_div_23_div_1_img_25_Template, 1, 3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, UsersComponent_div_23_div_1_img_26_Template, 1, 2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, UsersComponent_div_23_div_1_mat_icon_27_Template, 2, 0, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 34)(29, "mat-slide-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UsersComponent_div_23_div_1_Template_mat_slide_toggle_change_29_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38); const user_r24 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](user_r24.settings.isDeleted = !user_r24.settings.isDeleted); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 46)(31, "div", 47)(32, "p", 37)(33, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "business");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p", 37)(38, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "card_membership");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "p", 37)(43, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "attach_money");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 47)(48, "p", 37)(49, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "mail_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "p", 37)(54, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "call");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "p", 37)(59, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 48)(64, "p", 37)(65, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "event_available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](69, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "p", 37)(71, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "date_range");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](75, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, UsersComponent_div_23_div_1_mat_icon_77_Template, 2, 0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, UsersComponent_div_23_div_1_mat_icon_78_Template, 2, 0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const user_r24 = ctx.$implicit;
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !user_r24.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r24.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r24.profile.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !user_r24.profile.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r24.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", user_r24.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("blocked", user_r24.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r24.work.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r24.work.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r24.work.salary);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r24.contacts.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r24.contacts.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r24.contacts.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Registration ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](69, 20, user_r24.settings.registrationDate, "dd MMMM, yyyy 'at' HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Joined ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](75, 23, user_r24.settings.joinedDate, "dd MMMM, yyyy 'at' HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r24.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !user_r24.settings.isDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r24.settings.isDeleted ? "Blocked" : "Active");
} }
function UsersComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UsersComponent_div_23_div_1_Template, 81, 26, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "UserSearchPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 4, ctx_r3.users, ctx_r3.searchText), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, ctx_r3.page)));
} }
function UsersComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "div", 44)(2, "mat-card", 50)(3, "pagination-controls", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function UsersComponent_div_24_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r42.onPageChanged($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function UsersComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class UsersComponent {
    constructor(appSettings, dialog, usersService) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.usersService = usersService;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.users = null; //for show spinner each time
        this.usersService.getUsers().subscribe(users => this.users = users);
    }
    addUser(user) {
        this.usersService.addUser(user).subscribe(user => this.getUsers());
    }
    updateUser(user) {
        this.usersService.updateUser(user).subscribe(user => this.getUsers());
    }
    deleteUser(user) {
        this.usersService.deleteUser(user.id).subscribe(user => this.getUsers());
    }
    onPageChanged(event) {
        this.page = event;
        this.getUsers();
        if (this.settings.fixedHeader) {
            document.getElementById('main-content').scrollTop = 0;
        }
        else {
            document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
    }
    openUserDialog(user) {
        let dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_2__.UserDialogComponent, {
            data: user
        });
        dialogRef.afterClosed().subscribe(user => {
            if (user) {
                (user.id) ? this.updateUser(user) : this.addUser(user);
            }
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService)); };
UsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService])], decls: 26, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "flex-p"], ["fxLayout", "row"], ["appearance", "legacy"], ["controls", "matButtonToggleGroup"], ["value", "add", 3, "click"], ["value", "search"], [1, "user-search"], [1, "user-search-input"], ["matInput", "", "placeholder", "Search user by name...", "name", "search", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["appearance", "legacy", "value", "grid"], ["viewType", "matButtonToggleGroup"], ["value", "grid"], ["value", "list"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", "class", "user-spinner", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100", "fxFlex.gt-md", "33.3", "fxFlex.md", "50", "class", "flex-p", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-md", "33.3", "fxFlex.md", "50", 1, "flex-p"], [1, "p-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "bg-primary"], ["class", "user-name", 4, "ngIf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menuTrigger", "matMenuTrigger"], ["xPosition", "before", "overlapTrigger", "true"], ["menu", "matMenu"], [3, "mouseleave"], ["mat-menu-item", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "user-content"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutAlign", "center center"], [1, "user-img"], ["class", "transition-2", 3, "src", "blocked", 4, "ngIf"], ["src", "assets/img/users/default-user.jpg", "class", "transition-2", 3, "blocked", 4, "ngIf"], ["class", "warn-color", 4, "ngIf"], [1, "user-social"], ["color", "primary", 3, "checked", "change"], ["fxFlex", "70", "fxLayout", "column", 1, "user-details", "transition-2"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "muted-text"], [1, "user-name"], [1, "transition-2", 3, "src"], ["src", "assets/img/users/default-user.jpg", 1, "transition-2"], [1, "warn-color"], ["fxFlex", "100", "class", "flex-p", 4, "ngFor", "ngForOf"], ["fxFlex", "100", 1, "flex-p"], ["fxFlex", "20", "fxFlex.xs", "30", "fxLayout", "column", "fxLayoutAlign", "center center"], ["fxFlex", "80", "fxFlex.xs", "70", "fxLayout", "row", "fxLayout.xs", "column", 1, "user-details", "transition-2"], ["fxFlex", "30", "fxFlex.xs", "100", "fxLayout", "column"], ["fxFlex", "40", "fxFlex.xs", "100", "fxLayout", "column"], ["class", "muted-text", 4, "ngIf"], [1, "p-0", "text-center"], ["autoHide", "true", "maxSize", "3", 1, "gradus-pagination", 3, "pageChange"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "user-spinner"], ["color", "primary"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-button-toggle-group", 2, 3)(4, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersComponent_Template_mat_button_toggle_click_4_listener() { return ctx.openUserDialog(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "person_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-button-toggle", 5)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 6)(11, "mat-form-field", 7)(12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UsersComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9)(14, "mat-button-toggle-group", 10, 11)(16, "mat-button-toggle", 12)(17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "view_module");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-button-toggle", 13)(20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "view_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, UsersComponent_div_22_Template, 4, 9, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, UsersComponent_div_23_Template, 4, 9, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, UsersComponent_div_24_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, UsersComponent_div_25_Template, 2, 0, "div", 15);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", _r0.value == "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r1.value == "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r1.value == "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.users);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__.MatButtonToggle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe, _theme_pipes_search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__.UserSearchPipe], styles: [".user-name {\n  padding: 0 12px;\n  font-weight: 400;\n}\n\n.user-content {\n  padding: 10px;\n}\n\n.user-content .user-img {\n  position: relative;\n}\n\n.user-content .user-img img {\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n}\n\n.user-content .user-img img.blocked {\n  opacity: 0.5;\n}\n\n.user-content .user-img .mat-icon {\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  font-size: 96px;\n  height: 96px;\n  width: 96px;\n}\n\n.user-content .mat-slide-toggle {\n  margin-top: 15px;\n}\n\n.user-content .user-details span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.user-content .user-details .mat-icon {\n  padding: 2px 10px;\n}\n\n.user-content .user-details.blocked {\n  opacity: 0.5;\n}\n\n.user-search {\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.user-search .mat-form-field {\n  width: 100% !important;\n  text-align: center !important;\n  height: 36px;\n}\n\n.user-search .mat-form-field-infix {\n  padding: 5px;\n}\n\n.user-search .mat-input-element {\n  text-align: center;\n}\n\n.user-search.show {\n  width: 100%;\n  overflow: visible;\n}\n\n.user-spinner {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBREk7RUFDSSxrQkFBQTtBQUdSOztBQUZRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlaOztBQUhZO0VBQ0ksWUFBQTtBQUtoQjs7QUFGUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFJWjs7QUFESTtFQUNJLGdCQUFBO0FBR1I7O0FBQVE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFWjs7QUFBUTtFQUNJLGlCQUFBO0FBRVo7O0FBQVE7RUFDSSxZQUFBO0FBRVo7O0FBR0E7RUFDSSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUNJO0VBQ0ksc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFDUjs7QUFDSTtFQUNJLFlBQUE7QUFDUjs7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUFPLFFBQUE7RUFBVSxTQUFBO0VBQVcsT0FBQTtBQUdoQyIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW5hbWV7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi51c2VyLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLnVzZXItaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgJi5ibG9ja2Vke1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC04cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC04cHg7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTZweDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LXNsaWRlLXRvZ2dsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItZGV0YWlsc3tcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgICAgICB9IFxyXG4gICAgICAgICYuYmxvY2tlZHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi51c2VyLXNlYXJjaHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAubWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7ICAgICAgICBcclxuICAgIH1cclxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWlucHV0LWVsZW1lbnR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJi5zaG93e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4udXNlci1zcGlubmVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6MDtcclxufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 18851:
/*!*******************************************!*\
  !*** ./src/app/pages/users/users.data.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersData": () => (/* binding */ UsersData)
/* harmony export */ });
class UsersData {
    createDb() {
        const users = [
            {
                id: 1,
                username: "pretty",
                password: "pretty123",
                profile: {
                    name: "Ashley",
                    surname: "Ahlberg",
                    birthday: new Date(1981, 2, 29),
                    gender: "female",
                    image: "assets/img/profile/ashley.jpg"
                },
                work: {
                    company: "Google",
                    position: "Product designer",
                    salary: 5000
                },
                contacts: {
                    email: "ashley@gmail.com",
                    phone: "(202) 756-9756",
                    address: "Washington"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2012-10-13T12:20:40.511Z",
                    joinedDate: "2017-04-21T18:25:43.511Z"
                }
            },
            {
                id: 2,
                username: "bruno.V",
                password: "bruno123",
                profile: {
                    name: "Bruno",
                    surname: "Vespa",
                    birthday: new Date(1992, 11, 20),
                    gender: "male",
                    image: "assets/img/profile/bruno.jpg"
                },
                work: {
                    company: "Dell EMC",
                    position: "Sale manager",
                    salary: 17000
                },
                contacts: {
                    email: "bruno@dell.com",
                    phone: "(415) 231-0332",
                    address: "San Francisco"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2011-01-05T08:45:23.511Z",
                    joinedDate: "2017-05-20T18:25:43.511Z"
                }
            },
            {
                id: 3,
                username: "andy.79",
                password: "andy123",
                profile: {
                    name: "Andy",
                    surname: "Warhol",
                    birthday: new Date(1979, 10, 21),
                    gender: "male",
                    image: "assets/img/avatars/avatar-3.png"
                },
                work: {
                    company: "Adecco",
                    position: "Product manager",
                    salary: 13000
                },
                contacts: {
                    email: "andy@adecco.com",
                    phone: "(212) 457-2308",
                    address: "New York"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2014-11-01T19:35:43.511Z",
                    joinedDate: "2017-06-28T15:25:43.511Z"
                }
            },
            {
                id: 4,
                username: "julia.a",
                password: "julia123",
                profile: {
                    name: "Julia",
                    surname: "Aniston",
                    birthday: new Date(1982, 6, 18),
                    gender: "female",
                    image: "assets/img/profile/julia.jpg"
                },
                work: {
                    company: "Apple",
                    position: "Sales manager",
                    salary: 18000
                },
                contacts: {
                    email: "julia@apple.com",
                    phone: "(224) 267-1346",
                    address: "Illinois, Chicago"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2015-12-06T11:10:20.511Z",
                    joinedDate: "2017-06-29T15:15:40.511Z"
                }
            },
            {
                id: 5,
                username: "lusia.m",
                password: "lusia123",
                profile: {
                    name: "Lusia",
                    surname: "Manuel",
                    birthday: new Date(1992, 12, 2),
                    gender: "female",
                    image: "assets/img/avatars/avatar-7.png"
                },
                work: {
                    company: "Alphabet",
                    position: "Office manager",
                    salary: 10000
                },
                contacts: {
                    email: "lusia@alphabet.com",
                    phone: "(224) 267-1346",
                    address: "California, Los Angeles"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: true,
                    registrationDate: "2014-01-10T10:20:20.511Z",
                    joinedDate: "2017-06-28T12:20:40.511Z"
                }
            },
            {
                id: 6,
                username: "adam.82",
                password: "adam123",
                profile: {
                    name: "Adam",
                    surname: "Sandler",
                    birthday: new Date(1987, 12, 24),
                    gender: "male",
                    image: "assets/img/profile/adam.jpg"
                },
                work: {
                    company: "General Electric",
                    position: "Product manager",
                    salary: 21000
                },
                contacts: {
                    email: "adam@gen-el.com",
                    phone: "(224) 267-1346",
                    address: "Texas, Houston"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: false,
                    registrationDate: "2016-11-16T12:20:20.511Z",
                    joinedDate: "2017-06-27T14:20:40.511Z"
                }
            },
            {
                id: 7,
                username: "tereza.s",
                password: "tereza123",
                profile: {
                    name: "Tereza",
                    surname: "Stiles",
                    birthday: new Date(1979, 7, 9),
                    gender: "female",
                    image: "assets/img/profile/tereza.jpg"
                },
                work: {
                    company: "Southwest Airlines",
                    position: "Sale manager",
                    salary: 31000
                },
                contacts: {
                    email: "tereza@airlines.com",
                    phone: "(214) 617-2614",
                    address: "Texas, Dallas"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2010-10-12T16:20:20.511Z",
                    joinedDate: "2017-06-29T15:20:40.511Z"
                }
            },
            {
                id: 8,
                username: "michael.b",
                password: "michael123",
                profile: {
                    name: "Michael",
                    surname: "Blair",
                    birthday: new Date(1978, 11, 15),
                    gender: "male",
                    image: "assets/img/profile/michael.jpg"
                },
                work: {
                    company: "Microsoft",
                    position: "Software developer",
                    salary: 50000
                },
                contacts: {
                    email: "michael@microsoft.com",
                    phone: "(267) 388-1637",
                    address: "Pennsylvania, Philadelphia"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: true,
                    isDeleted: false,
                    registrationDate: "2009-08-12T16:20:20.511Z",
                    joinedDate: "2017-06-30T11:30:40.511Z"
                }
            },
            {
                id: 9,
                username: "michelle.81",
                password: "michelle123",
                profile: {
                    name: "Michelle",
                    surname: "Ormond",
                    birthday: new Date(1981, 11, 18),
                    gender: "female",
                    image: "assets/img/avatars/avatar-5.png"
                },
                work: {
                    company: "Starbucks",
                    position: "Sale manager",
                    salary: 15000
                },
                contacts: {
                    email: "michelle@starbucks.com",
                    phone: "(267) 388-1637",
                    address: "Washington, Seattle"
                },
                social: {
                    facebook: "",
                    twitter: "",
                    google: ""
                },
                settings: {
                    isActive: false,
                    isDeleted: true,
                    registrationDate: "2012-11-10T18:20:20.511Z",
                    joinedDate: "2015-03-29T17:20:40.511Z"
                }
            }
        ];
        return { users };
    }
}


/***/ }),

/***/ 40535:
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-in-memory-web-api */ 31969);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 75595);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/pipes/pipes.module */ 39045);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ 31524);
/* harmony import */ var _users_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.data */ 18851);
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-dialog/user-dialog.component */ 57349);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ 79771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);















const routes = [
    { path: '', component: _users_component__WEBPACK_IMPORTED_MODULE_4__.UsersComponent, pathMatch: 'full' }
];
class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.InMemoryWebApiModule.forRoot(_users_data__WEBPACK_IMPORTED_MODULE_5__.UsersData, { delay: 500 }),
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__.UsersComponent,
        _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__.UserDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__.InMemoryWebApiModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridModule] }); })();


/***/ }),

/***/ 47198:
/*!**********************************************!*\
  !*** ./src/app/pages/users/users.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);


class UsersService {
    constructor(http) {
        this.http = http;
        this.url = "api/users";
    }
    getUsers() {
        return this.http.get(this.url);
    }
    addUser(user) {
        return this.http.post(this.url, user);
    }
    updateUser(user) {
        return this.http.put(this.url, user);
    }
    deleteUser(id) {
        return this.http.delete(this.url + "/" + id);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac });


/***/ }),

/***/ 10342:
/*!********************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/backend.service.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackendService": () => (/* binding */ BackendService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80155);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 63853);
/* harmony import */ var _http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-status-codes */ 20006);
/* harmony import */ var _delay_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay-response */ 78977);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ 33882);





/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 */

var BackendService =
/** @class */
function () {
  function BackendService(inMemDbService, config) {
    if (config === void 0) {
      config = {};
    }

    this.inMemDbService = inMemDbService;
    this.config = new _interfaces__WEBPACK_IMPORTED_MODULE_2__.InMemoryBackendConfig();
    this.requestInfoUtils = this.getRequestInfoUtils();
    var loc = this.getLocation('/');
    this.config.host = loc.host; // default to app web server host

    this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')

    Object.assign(this.config, config);
  }

  Object.defineProperty(BackendService.prototype, "dbReady", {
    ////  protected /////
    get: function () {
      if (!this.dbReadySubject) {
        // first time the service is called.
        this.dbReadySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
        this.resetDb();
      }

      return this.dbReadySubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(function (r) {
        return r;
      }));
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Process Request and return an Observable of Http Response object
   * in the manner of a RESTy web api.
   *
   * Expect URI pattern in the form :base/:collectionName/:id?
   * Examples:
   *   // for store with a 'customers' collection
   *   GET api/customers          // all customers
   *   GET api/customers/42       // the character with id=42
   *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
   *   GET api/customers.json/42  // ignores the ".json"
   *
   * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
   * Examples:
   *     POST commands/resetDb,
   *     GET/POST commands/config - get or (re)set the config
   *
   *   HTTP overrides:
   *     If the injected inMemDbService defines an HTTP method (lowercase)
   *     The request is forwarded to that method as in
   *     `inMemDbService.get(requestInfo)`
   *     which must return either an Observable of the response type
   *     for this http library or null|undefined (which means "keep processing").
   */

  BackendService.prototype.handleRequest = function (req) {
    var _this = this; //  handle the request when there is an in-memory database


    return this.dbReady.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.concatMap)(function () {
      return _this.handleRequest_(req);
    }));
  };

  BackendService.prototype.handleRequest_ = function (req) {
    var _this = this;

    var url = req.urlWithParams ? req.urlWithParams : req.url; // Try override parser
    // If no override parser or it returns nothing, use default parser

    var parser = this.bind('parseRequestUrl');
    var parsed = parser && parser(url, this.requestInfoUtils) || this.parseRequestUrl(url);
    var collectionName = parsed.collectionName;
    var collection = this.db[collectionName];
    var reqInfo = {
      req: req,
      apiBase: parsed.apiBase,
      collection: collection,
      collectionName: collectionName,
      headers: this.createHeaders({
        'Content-Type': 'application/json'
      }),
      id: this.parseId(collection, collectionName, parsed.id),
      method: this.getRequestMethod(req),
      query: parsed.query,
      resourceUrl: parsed.resourceUrl,
      url: url,
      utils: this.requestInfoUtils
    };
    var resOptions;

    if (/commands\/?$/i.test(reqInfo.apiBase)) {
      return this.commands(reqInfo);
    }

    var methodInterceptor = this.bind(reqInfo.method);

    if (methodInterceptor) {
      // InMemoryDbService intercepts this HTTP method.
      // if interceptor produced a response, return it.
      // else InMemoryDbService chose not to intercept; continue processing.
      var interceptorResponse = methodInterceptor(reqInfo);

      if (interceptorResponse) {
        return interceptorResponse;
      }

      ;
    }

    if (this.db[collectionName]) {
      // request is for a known collection of the InMemoryDbService
      return this.createResponse$(function () {
        return _this.collectionHandler(reqInfo);
      });
    }

    if (this.config.passThruUnknownUrl) {
      // unknown collection; pass request thru to a "real" backend.
      return this.getPassThruBackend().handle(req);
    } // 404 - can't handle this request


    resOptions = this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND, "Collection '" + collectionName + "' not found");
    return this.createResponse$(function () {
      return resOptions;
    });
  };
  /**
   * Add configured delay to response observable unless delay === 0
   */


  BackendService.prototype.addDelay = function (response) {
    var d = this.config.delay;
    return d === 0 ? response : (0,_delay_response__WEBPACK_IMPORTED_MODULE_1__.delayResponse)(response, d || 500);
  };
  /**
   * Apply query/search parameters as a filter over the collection
   * This impl only supports RegExp queries on string properties of the collection
   * ANDs the conditions together
   */


  BackendService.prototype.applyQuery = function (collection, query) {
    // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
    var conditions = [];
    var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
    query.forEach(function (value, name) {
      value.forEach(function (v) {
        return conditions.push({
          name: name,
          rx: new RegExp(decodeURI(v), caseSensitive)
        });
      });
    });
    var len = conditions.length;

    if (!len) {
      return collection;
    } // AND the RegExp conditions


    return collection.filter(function (row) {
      var ok = true;
      var i = len;

      while (ok && i) {
        i -= 1;
        var cond = conditions[i];
        ok = cond.rx.test(row[cond.name]);
      }

      return ok;
    });
  };
  /**
   * Get a method from the `InMemoryDbService` (if it exists), bound to that service
   */


  BackendService.prototype.bind = function (methodName) {
    var fn = this.inMemDbService[methodName];
    return fn ? fn.bind(this.inMemDbService) : undefined;
  };

  BackendService.prototype.bodify = function (data) {
    return this.config.dataEncapsulation ? {
      data: data
    } : data;
  };

  BackendService.prototype.clone = function (data) {
    return JSON.parse(JSON.stringify(data));
  };

  BackendService.prototype.collectionHandler = function (reqInfo) {
    // const req = reqInfo.req;
    var resOptions;

    switch (reqInfo.method) {
      case 'get':
        resOptions = this.get(reqInfo);
        break;

      case 'post':
        resOptions = this.post(reqInfo);
        break;

      case 'put':
        resOptions = this.put(reqInfo);
        break;

      case 'delete':
        resOptions = this.delete(reqInfo);
        break;

      default:
        resOptions = this.createErrorResponseOptions(reqInfo.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
        break;
    } // If `inMemDbService.responseInterceptor` exists, let it morph the response options


    var interceptor = this.bind('responseInterceptor');
    return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
  };
  /**
   * Commands reconfigure the in-memory web api service or extract information from it.
   * Commands ignore the latency delay and respond ASAP.
   *
   * When the last segment of the `apiBase` path is "commands",
   * the `collectionName` is the command.
   *
   * Example URLs:
   *   commands/resetdb (POST) // Reset the "database" to its original state
   *   commands/config (GET)   // Return this service's config object
   *   commands/config (POST)  // Update the config (e.g. the delay)
   *
   * Usage:
   *   http.post('commands/resetdb', undefined);
   *   http.get('commands/config');
   *   http.post('commands/config', '{"delay":1000}');
   */


  BackendService.prototype.commands = function (reqInfo) {
    var _this = this;

    var command = reqInfo.collectionName.toLowerCase();
    var method = reqInfo.method;
    var resOptions = {
      url: reqInfo.url
    };

    switch (command) {
      case 'resetdb':
        resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT;
        return this.resetDb(reqInfo).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.concatMap)(function () {
          return _this.createResponse$(function () {
            return resOptions;
          }, false
          /* no latency delay */
          );
        }));

      case 'config':
        if (method === 'get') {
          resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK;
          resOptions.body = this.clone(this.config); // any other HTTP method is assumed to be a config update
        } else {
          var body = this.getJsonBody(reqInfo.req);
          Object.assign(this.config, body);
          this.passThruBackend = undefined; // re-create when needed

          resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT;
        }

        break;

      default:
        resOptions = this.createErrorResponseOptions(reqInfo.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
    }

    return this.createResponse$(function () {
      return resOptions;
    }, false
    /* no latency delay */
    );
  };

  BackendService.prototype.createErrorResponseOptions = function (url, status, message) {
    return {
      body: {
        error: "" + message
      },
      url: url,
      headers: this.createHeaders({
        'Content-Type': 'application/json'
      }),
      status: status
    };
  };
  /**
   * Create a cold response Observable from a factory for ResponseOptions
   * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
   * @param withDelay - if true (default), add simulated latency delay from configuration
   */


  BackendService.prototype.createResponse$ = function (resOptionsFactory, withDelay) {
    if (withDelay === void 0) {
      withDelay = true;
    }

    var resOptions$ = this.createResponseOptions$(resOptionsFactory);
    var resp$ = this.createResponse$fromResponseOptions$(resOptions$);
    return withDelay ? this.addDelay(resp$) : resp$;
  };
  /**
   * Create a cold Observable of ResponseOptions.
   * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
   */


  BackendService.prototype.createResponseOptions$ = function (resOptionsFactory) {
    var _this = this;

    return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable(function (responseObserver) {
      var resOptions;

      try {
        resOptions = resOptionsFactory();
      } catch (error) {
        var err = error.message || error;
        resOptions = _this.createErrorResponseOptions('', _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.INTERNAL_SERVER_ERROR, "" + err);
      }

      var status = resOptions.status;

      try {
        resOptions.statusText = (0,_http_status_codes__WEBPACK_IMPORTED_MODULE_0__.getStatusText)(status);
      } catch (e) {
        /* ignore failure */
      }

      if ((0,_http_status_codes__WEBPACK_IMPORTED_MODULE_0__.isSuccess)(status)) {
        responseObserver.next(resOptions);
        responseObserver.complete();
      } else {
        responseObserver.error(resOptions);
      }

      return function () {}; // unsubscribe function
    });
  };

  BackendService.prototype.delete = function (_a) {
    var collection = _a.collection,
        collectionName = _a.collectionName,
        headers = _a.headers,
        id = _a.id,
        url = _a.url; // tslint:disable-next-line:triple-equals

    if (id == undefined) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND, "Missing \"" + collectionName + "\" id");
    }

    var exists = this.removeById(collection, id);
    return {
      headers: headers,
      status: exists || !this.config.delete404 ? _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT : _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND
    };
  };
  /**
   * Find first instance of item in collection by `item.id`
   * @param collection
   * @param id
   */


  BackendService.prototype.findById = function (collection, id) {
    return collection.find(function (item) {
      return item.id === id;
    });
  };
  /**
   * Generate the next available id for item in this collection
   * Use method from `inMemDbService` if it exists and returns a value,
   * else delegates to `genIdDefault`.
   * @param collection - collection of items with `id` key property
   */


  BackendService.prototype.genId = function (collection, collectionName) {
    var genId = this.bind('genId');

    if (genId) {
      var id = genId(collection, collectionName); // tslint:disable-next-line:triple-equals

      if (id != undefined) {
        return id;
      }
    }

    return this.genIdDefault(collection, collectionName);
  };
  /**
   * Default generator of the next available id for item in this collection
   * This default implementation works only for numeric ids.
   * @param collection - collection of items with `id` key property
   * @param collectionName - name of the collection
   */


  BackendService.prototype.genIdDefault = function (collection, collectionName) {
    if (!this.isCollectionIdNumeric(collection, collectionName)) {
      throw new Error("Collection '" + collectionName + "' id type is non-numeric or unknown. Can only generate numeric ids.");
    }

    var maxId = 0;
    collection.reduce(function (prev, item) {
      maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
    }, undefined);
    return maxId + 1;
  };

  BackendService.prototype.get = function (_a) {
    var collection = _a.collection,
        collectionName = _a.collectionName,
        headers = _a.headers,
        id = _a.id,
        query = _a.query,
        url = _a.url;
    var data = collection; // tslint:disable-next-line:triple-equals

    if (id != undefined && id !== '') {
      data = this.findById(collection, id);
    } else if (query) {
      data = this.applyQuery(collection, query);
    }

    if (!data) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
    }

    return {
      body: this.bodify(this.clone(data)),
      headers: headers,
      status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK
    };
  };
  /**
   * Get location info from a url, even on server where `document` is not defined
   */


  BackendService.prototype.getLocation = function (url) {
    if (!url.startsWith('http')) {
      // get the document iff running in browser
      var doc = typeof document === 'undefined' ? undefined : document; // add host info to url before parsing.  Use a fake host when not in browser.

      var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
      url = url.startsWith('/') ? base + url : base + '/' + url;
    }

    return (0,_interfaces__WEBPACK_IMPORTED_MODULE_2__.parseUri)(url);
  };

  ;
  /**
   * get or create the function that passes unhandled requests
   * through to the "real" backend.
   */

  BackendService.prototype.getPassThruBackend = function () {
    return this.passThruBackend ? this.passThruBackend : this.passThruBackend = this.createPassThruBackend();
  };
  /**
   * Get utility methods from this service instance.
   * Useful within an HTTP method override
   */


  BackendService.prototype.getRequestInfoUtils = function () {
    var _this = this;

    return {
      createResponse$: this.createResponse$.bind(this),
      findById: this.findById.bind(this),
      isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
      getConfig: function () {
        return _this.config;
      },
      getDb: function () {
        return _this.db;
      },
      getJsonBody: this.getJsonBody.bind(this),
      getLocation: this.getLocation.bind(this),
      getPassThruBackend: this.getPassThruBackend.bind(this),
      parseRequestUrl: this.parseRequestUrl.bind(this)
    };
  };

  BackendService.prototype.indexOf = function (collection, id) {
    return collection.findIndex(function (item) {
      return item.id === id;
    });
  };
  /** Parse the id as a number. Return original value if not a number. */


  BackendService.prototype.parseId = function (collection, collectionName, id) {
    if (!this.isCollectionIdNumeric(collection, collectionName)) {
      // Can't confirm that `id` is a numeric type; don't parse as a number
      // or else `'42'` -> `42` and _get by id_ fails.
      return id;
    }

    var idNum = parseFloat(id);
    return isNaN(idNum) ? id : idNum;
  };
  /**
   * return true if can determine that the collection's `item.id` is a number
   * This implementation can't tell if the collection is empty so it assumes NO
   * */


  BackendService.prototype.isCollectionIdNumeric = function (collection, collectionName) {
    // collectionName not used now but override might maintain collection type information
    // so that it could know the type of the `id` even when the collection is empty.
    return !!(collection && collection[0]) && typeof collection[0].id === 'number';
  };
  /**
   * Parses the request URL into a `ParsedRequestUrl` object.
   * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
   *
   * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
   *   When apiBase=undefined and url='http://localhost/api/collection/42'
   *     {base: 'api/', collectionName: 'collection', id: '42', ...}
   *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
   *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
   *   When apiBase='/' and url='http://localhost/collection'
   *     {base: '/', collectionName: 'collection', id: undefined, ...}
   *
   * The actual api base segment values are ignored. Only the number of segments matters.
   * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
   *
   * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
   */


  BackendService.prototype.parseRequestUrl = function (url) {
    try {
      var loc = this.getLocation(url);
      var drop = this.config.rootPath.length;
      var urlRoot = '';

      if (loc.host !== this.config.host) {
        // url for a server on a different host!
        // assume it's collection is actually here too.
        drop = 1; // the leading slash

        urlRoot = loc.protocol + '//' + loc.host + '/';
      }

      var path = loc.path.substring(drop);
      var pathSegments = path.split('/');
      var segmentIx = 0; // apiBase: the front part of the path devoted to getting to the api route
      // Assumes first path segment if no config.apiBase
      // else ignores as many path segments as are in config.apiBase
      // Does NOT care what the api base chars actually are.

      var apiBase = void 0; // tslint:disable-next-line:triple-equals

      if (this.config.apiBase == undefined) {
        apiBase = pathSegments[segmentIx++];
      } else {
        apiBase = (0,_interfaces__WEBPACK_IMPORTED_MODULE_2__.removeTrailingSlash)(this.config.apiBase.trim());

        if (apiBase) {
          segmentIx = apiBase.split('/').length;
        } else {
          segmentIx = 0; // no api base at all; unwise but allowed.
        }
      }

      apiBase += '/';
      var collectionName = pathSegments[segmentIx++]; // ignore anything after a '.' (e.g.,the "json" in "customers.json")

      collectionName = collectionName && collectionName.split('.')[0];
      var id = pathSegments[segmentIx++];
      var query = this.createQueryMap(loc.query);
      var resourceUrl = urlRoot + apiBase + collectionName + '/';
      return {
        apiBase: apiBase,
        collectionName: collectionName,
        id: id,
        query: query,
        resourceUrl: resourceUrl
      };
    } catch (err) {
      var msg = "unable to parse url '" + url + "'; original error: " + err.message;
      throw new Error(msg);
    }
  }; // Create entity
  // Can update an existing entity too if post409 is false.


  BackendService.prototype.post = function (_a) {
    var collection = _a.collection,
        collectionName = _a.collectionName,
        headers = _a.headers,
        id = _a.id,
        req = _a.req,
        resourceUrl = _a.resourceUrl,
        url = _a.url;
    var item = this.clone(this.getJsonBody(req)); // tslint:disable-next-line:triple-equals

    if (item.id == undefined) {
      try {
        item.id = id || this.genId(collection, collectionName);
      } catch (err) {
        var emsg = err.message || '';

        if (/id type is non-numeric/.test(emsg)) {
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.UNPROCESSABLE_ENTRY, emsg);
        } else {
          console.error(err);
          return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
        }
      }
    }

    if (id && id !== item.id) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.BAD_REQUEST, "Request id does not match item.id");
    } else {
      id = item.id;
    }

    var existingIx = this.indexOf(collection, id);
    var body = this.bodify(item);

    if (existingIx === -1) {
      collection.push(item);
      headers.set('Location', resourceUrl + '/' + id);
      return {
        headers: headers,
        body: body,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.CREATED
      };
    } else if (this.config.post409) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
    } else {
      collection[existingIx] = item;
      return this.config.post204 ? {
        headers: headers,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT
      } : // successful; no content
      {
        headers: headers,
        body: body,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK
      }; // successful; return entity
    }
  }; // Update existing entity
  // Can create an entity too if put404 is false.


  BackendService.prototype.put = function (_a) {
    var collection = _a.collection,
        collectionName = _a.collectionName,
        headers = _a.headers,
        id = _a.id,
        req = _a.req,
        url = _a.url;
    var item = this.clone(this.getJsonBody(req)); // tslint:disable-next-line:triple-equals

    if (item.id == undefined) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND, "Missing '" + collectionName + "' id");
    }

    if (id && id !== item.id) {
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
    } else {
      id = item.id;
    }

    var existingIx = this.indexOf(collection, id);
    var body = this.bodify(item);

    if (existingIx > -1) {
      collection[existingIx] = item;
      return this.config.put204 ? {
        headers: headers,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NO_CONTENT
      } : // successful; no content
      {
        headers: headers,
        body: body,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.OK
      }; // successful; return entity
    } else if (this.config.put404) {
      // item to update not found; use POST to create new item for this id.
      return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
    } else {
      // create new item for id not found
      collection.push(item);
      return {
        headers: headers,
        body: body,
        status: _http_status_codes__WEBPACK_IMPORTED_MODULE_0__.STATUS.CREATED
      };
    }
  };

  BackendService.prototype.removeById = function (collection, id) {
    var ix = this.indexOf(collection, id);

    if (ix > -1) {
      collection.splice(ix, 1);
      return true;
    }

    return false;
  };
  /**
   * Tell your in-mem "database" to reset.
   * returns Observable of the database because resetting it could be async
   */


  BackendService.prototype.resetDb = function (reqInfo) {
    var _this = this;

    this.dbReadySubject.next(false);
    var db = this.inMemDbService.createDb(reqInfo);
    var db$ = db instanceof rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable ? db : typeof db.then === 'function' ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(db) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(db);
    db$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe(function (d) {
      _this.db = d;

      _this.dbReadySubject.next(true);
    });
    return this.dbReady;
  };

  return BackendService;
}();



/***/ }),

/***/ 78977:
/*!*******************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/delay-response.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delayResponse": () => (/* binding */ delayResponse)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 90833);
 // Replaces use of RxJS delay. See v0.5.4.

/** adds specified delay (in ms) to both next and error channels of the response observable */

function delayResponse(response$, delayMs) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
    var completePending = false;
    var nextPending = false;
    var subscription = response$.subscribe(function (value) {
      nextPending = true;
      setTimeout(function () {
        observer.next(value);

        if (completePending) {
          observer.complete();
        }
      }, delayMs);
    }, function (error) {
      return setTimeout(function () {
        return observer.error(error);
      }, delayMs);
    }, function () {
      completePending = true;

      if (!nextPending) {
        observer.complete();
      }
    });
    return function () {
      return subscription.unsubscribe();
    };
  });
}

/***/ }),

/***/ 58159:
/*!********************************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-backend.service.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClientBackendService": () => (/* binding */ HttpClientBackendService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ 33882);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _http_status_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-status-codes */ 20006);
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.service */ 10342);




var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var __param = undefined && undefined.__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};







/**
 * For Angular `HttpClient` simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create an in-memory data store class that implements `InMemoryDbService`.
 * Call `config` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpClientModule } from '@angular/common/http';
 * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */

var HttpClientBackendService =
/** @class */
function (_super) {
  __extends(HttpClientBackendService, _super);

  function HttpClientBackendService(inMemDbService, config, xhrFactory) {
    var _this = _super.call(this, inMemDbService, config) || this;

    _this.xhrFactory = xhrFactory;
    return _this;
  }

  HttpClientBackendService.prototype.handle = function (req) {
    try {
      return this.handleRequest(req);
    } catch (error) {
      var err = error.message || error;
      var resOptions_1 = this.createErrorResponseOptions(req.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_1__.STATUS.INTERNAL_SERVER_ERROR, "" + err);
      return this.createResponse$(function () {
        return resOptions_1;
      });
    }
  }; ////  protected overrides /////


  HttpClientBackendService.prototype.getJsonBody = function (req) {
    return req.body;
  };

  HttpClientBackendService.prototype.getRequestMethod = function (req) {
    return (req.method || 'get').toLowerCase();
  };

  HttpClientBackendService.prototype.createHeaders = function (headers) {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(headers);
  };

  HttpClientBackendService.prototype.createQueryMap = function (search) {
    var map = new Map();

    if (search) {
      var params_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
        fromString: search
      });
      params_1.keys().forEach(function (p) {
        return map.set(p, params_1.getAll(p));
      });
    }

    return map;
  };

  HttpClientBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
    return resOptions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (opts) {
      return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse(opts);
    }));
  };

  HttpClientBackendService.prototype.createPassThruBackend = function () {
    try {
      return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpXhrBackend(this.xhrFactory);
    } catch (ex) {
      ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
      throw ex;
    }
  };

  HttpClientBackendService = __decorate([__param(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject)(_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig)), __param(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional)()), __metadata("design:paramtypes", [_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService, _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfigArgs, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.XhrFactory])], HttpClientBackendService);

  HttpClientBackendService.ɵfac = function HttpClientBackendService_Factory(t) {
    return new (t || HttpClientBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.XhrFactory));
  };

  HttpClientBackendService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: HttpClientBackendService,
    factory: function (t) {
      return HttpClientBackendService.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](HttpClientBackendService, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable
    }], function () {
      return [{
        type: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService
      }, {
        type: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfigArgs,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject,
          args: [_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Optional
        }]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.XhrFactory
      }];
    }, null);
  })();

  return HttpClientBackendService;
}(_backend_service__WEBPACK_IMPORTED_MODULE_2__.BackendService);



/***/ }),

/***/ 18066:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-client-in-memory-web-api.module.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpClientInMemoryWebApiModule": () => (/* binding */ HttpClientInMemoryWebApiModule),
/* harmony export */   "httpClientInMemBackendServiceFactory": () => (/* binding */ httpClientInMemBackendServiceFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ 33882);
/* harmony import */ var _http_client_backend_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client-backend.service */ 58159);
////// HttpClient-Only version ////


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 // Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported

function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
  var backend = new _http_client_backend_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientBackendService(dbService, options, xhrFactory);
  return backend;
}

var HttpClientInMemoryWebApiModule =
/** @class */
function () {
  function HttpClientInMemoryWebApiModule() {}

  HttpClientInMemoryWebApiModule_1 = HttpClientInMemoryWebApiModule;
  /**
  *  Redirect the Angular `HttpClient` XHR calls
  *  to in-memory data store that implements `InMemoryDbService`.
  *  with class that implements InMemoryDbService and creates an in-memory database.
  *
  *  Usually imported in the root application module.
  *  Can import in a lazy feature module too, which will shadow modules loaded earlier
  *
  * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
  * @param {InMemoryBackendConfigArgs} [options]
  *
  * @example
  * HttpInMemoryWebApiModule.forRoot(dbCreator);
  * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
  */

  HttpClientInMemoryWebApiModule.forRoot = function (dbCreator, options) {
    return {
      ngModule: HttpClientInMemoryWebApiModule_1,
      providers: [{
        provide: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService,
        useClass: dbCreator
      }, {
        provide: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig,
        useValue: options
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpBackend,
        useFactory: httpClientInMemBackendServiceFactory,
        deps: [_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService, _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.XhrFactory]
      }]
    };
  };
  /**
  *
  * Enable and configure the in-memory web api in a lazy-loaded feature module.
  * Same as `forRoot`.
  * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
  */


  HttpClientInMemoryWebApiModule.forFeature = function (dbCreator, options) {
    return HttpClientInMemoryWebApiModule_1.forRoot(dbCreator, options);
  };

  var HttpClientInMemoryWebApiModule_1;

  HttpClientInMemoryWebApiModule.ɵfac = function HttpClientInMemoryWebApiModule_Factory(t) {
    return new (t || HttpClientInMemoryWebApiModule)();
  };

  HttpClientInMemoryWebApiModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: HttpClientInMemoryWebApiModule
  });
  HttpClientInMemoryWebApiModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HttpClientInMemoryWebApiModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
      args: [{}]
    }], function () {
      return [];
    }, null);
  })();

  return HttpClientInMemoryWebApiModule;
}();



/***/ }),

/***/ 20006:
/*!**********************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/http-status-codes.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATUS": () => (/* binding */ STATUS),
/* harmony export */   "STATUS_CODE_INFO": () => (/* binding */ STATUS_CODE_INFO),
/* harmony export */   "getStatusText": () => (/* binding */ getStatusText),
/* harmony export */   "isSuccess": () => (/* binding */ isSuccess)
/* harmony export */ });
var STATUS = {
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANTENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  TEMPORARY_REDIRECT: 307,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  IM_A_TEAPOT: 418,
  UPGRADE_REQUIRED: 426,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  PROCESSING: 102,
  MULTI_STATUS: 207,
  IM_USED: 226,
  PERMANENT_REDIRECT: 308,
  UNPROCESSABLE_ENTRY: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
/*tslint:disable:quotemark max-line-length one-line */

var STATUS_CODE_INFO = {
  '100': {
    'code': 100,
    'text': 'Continue',
    'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
    'spec_title': 'RFC7231#6.2.1',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.1'
  },
  '101': {
    'code': 101,
    'text': 'Switching Protocols',
    'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
    'spec_title': 'RFC7231#6.2.2',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.2'
  },
  '200': {
    'code': 200,
    'text': 'OK',
    'description': '\"The request has succeeded.\"',
    'spec_title': 'RFC7231#6.3.1',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
  },
  '201': {
    'code': 201,
    'text': 'Created',
    'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
    'spec_title': 'RFC7231#6.3.2',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
  },
  '202': {
    'code': 202,
    'text': 'Accepted',
    'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
    'spec_title': 'RFC7231#6.3.3',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
  },
  '203': {
    'code': 203,
    'text': 'Non-Authoritative Information',
    'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
    'spec_title': 'RFC7231#6.3.4',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
  },
  '204': {
    'code': 204,
    'text': 'No Content',
    'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
    'spec_title': 'RFC7231#6.3.5',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
  },
  '205': {
    'code': 205,
    'text': 'Reset Content',
    'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
    'spec_title': 'RFC7231#6.3.6',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
  },
  '206': {
    'code': 206,
    'text': 'Partial Content',
    'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
    'spec_title': 'RFC7233#4.1',
    'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.1'
  },
  '300': {
    'code': 300,
    'text': 'Multiple Choices',
    'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
    'spec_title': 'RFC7231#6.4.1',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
  },
  '301': {
    'code': 301,
    'text': 'Moved Permanently',
    'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
    'spec_title': 'RFC7231#6.4.2',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
  },
  '302': {
    'code': 302,
    'text': 'Found',
    'description': '\"The target resource resides temporarily under a different URI.\"',
    'spec_title': 'RFC7231#6.4.3',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
  },
  '303': {
    'code': 303,
    'text': 'See Other',
    'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
    'spec_title': 'RFC7231#6.4.4',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
  },
  '304': {
    'code': 304,
    'text': 'Not Modified',
    'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
    'spec_title': 'RFC7232#4.1',
    'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.1'
  },
  '305': {
    'code': 305,
    'text': 'Use Proxy',
    'description': '*deprecated*',
    'spec_title': 'RFC7231#6.4.5',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
  },
  '307': {
    'code': 307,
    'text': 'Temporary Redirect',
    'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
    'spec_title': 'RFC7231#6.4.7',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
  },
  '400': {
    'code': 400,
    'text': 'Bad Request',
    'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
    'spec_title': 'RFC7231#6.5.1',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
  },
  '401': {
    'code': 401,
    'text': 'Unauthorized',
    'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
    'spec_title': 'RFC7235#6.3.1',
    'spec_href': 'http://tools.ietf.org/html/rfc7235#section-3.1'
  },
  '402': {
    'code': 402,
    'text': 'Payment Required',
    'description': '*reserved*',
    'spec_title': 'RFC7231#6.5.2',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
  },
  '403': {
    'code': 403,
    'text': 'Forbidden',
    'description': '\"The server understood the request but refuses to authorize it.\"',
    'spec_title': 'RFC7231#6.5.3',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
  },
  '404': {
    'code': 404,
    'text': 'Not Found',
    'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
    'spec_title': 'RFC7231#6.5.4',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
  },
  '405': {
    'code': 405,
    'text': 'Method Not Allowed',
    'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
    'spec_title': 'RFC7231#6.5.5',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
  },
  '406': {
    'code': 406,
    'text': 'Not Acceptable',
    'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
    'spec_title': 'RFC7231#6.5.6',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
  },
  '407': {
    'code': 407,
    'text': 'Proxy Authentication Required',
    'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
    'spec_title': 'RFC7231#6.3.2',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
  },
  '408': {
    'code': 408,
    'text': 'Request Timeout',
    'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
    'spec_title': 'RFC7231#6.5.7',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
  },
  '409': {
    'code': 409,
    'text': 'Conflict',
    'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
    'spec_title': 'RFC7231#6.5.8',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
  },
  '410': {
    'code': 410,
    'text': 'Gone',
    'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
    'spec_title': 'RFC7231#6.5.9',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
  },
  '411': {
    'code': 411,
    'text': 'Length Required',
    'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
    'spec_title': 'RFC7231#6.5.10',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
  },
  '412': {
    'code': 412,
    'text': 'Precondition Failed',
    'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
    'spec_title': 'RFC7232#4.2',
    'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.2'
  },
  '413': {
    'code': 413,
    'text': 'Payload Too Large',
    'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
    'spec_title': 'RFC7231#6.5.11',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
  },
  '414': {
    'code': 414,
    'text': 'URI Too Long',
    'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
    'spec_title': 'RFC7231#6.5.12',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
  },
  '415': {
    'code': 415,
    'text': 'Unsupported Media Type',
    'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
    'spec_title': 'RFC7231#6.5.13',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
  },
  '416': {
    'code': 416,
    'text': 'Range Not Satisfiable',
    'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
    'spec_title': 'RFC7233#4.4',
    'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.4'
  },
  '417': {
    'code': 417,
    'text': 'Expectation Failed',
    'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
    'spec_title': 'RFC7231#6.5.14',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
  },
  '418': {
    'code': 418,
    'text': 'I\'m a teapot',
    'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
    'spec_title': 'RFC 2324',
    'spec_href': 'https://tools.ietf.org/html/rfc2324'
  },
  '426': {
    'code': 426,
    'text': 'Upgrade Required',
    'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
    'spec_title': 'RFC7231#6.5.15',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
  },
  '500': {
    'code': 500,
    'text': 'Internal Server Error',
    'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
    'spec_title': 'RFC7231#6.6.1',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
  },
  '501': {
    'code': 501,
    'text': 'Not Implemented',
    'description': '\"The server does not support the functionality required to fulfill the request.\"',
    'spec_title': 'RFC7231#6.6.2',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
  },
  '502': {
    'code': 502,
    'text': 'Bad Gateway',
    'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
    'spec_title': 'RFC7231#6.6.3',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
  },
  '503': {
    'code': 503,
    'text': 'Service Unavailable',
    'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
    'spec_title': 'RFC7231#6.6.4',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
  },
  '504': {
    'code': 504,
    'text': 'Gateway Time-out',
    'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
    'spec_title': 'RFC7231#6.6.5',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
  },
  '505': {
    'code': 505,
    'text': 'HTTP Version Not Supported',
    'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
    'spec_title': 'RFC7231#6.6.6',
    'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
  },
  '102': {
    'code': 102,
    'text': 'Processing',
    'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
    'spec_title': 'RFC5218#10.1',
    'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.1'
  },
  '207': {
    'code': 207,
    'text': 'Multi-Status',
    'description': '\"Status for multiple independent operations.\"',
    'spec_title': 'RFC5218#10.2',
    'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.2'
  },
  '226': {
    'code': 226,
    'text': 'IM Used',
    'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
    'spec_title': 'RFC3229#10.4.1',
    'spec_href': 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
  },
  '308': {
    'code': 308,
    'text': 'Permanent Redirect',
    'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
    'spec_title': 'RFC7238',
    'spec_href': 'http://tools.ietf.org/html/rfc7238'
  },
  '422': {
    'code': 422,
    'text': 'Unprocessable Entity',
    'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
    'spec_title': 'RFC5218#10.3',
    'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.3'
  },
  '423': {
    'code': 423,
    'text': 'Locked',
    'description': '\"The source or destination resource of a method is locked.\"',
    'spec_title': 'RFC5218#10.4',
    'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.4'
  },
  '424': {
    'code': 424,
    'text': 'Failed Dependency',
    'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
    'spec_title': 'RFC5218#10.5',
    'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.5'
  },
  '428': {
    'code': 428,
    'text': 'Precondition Required',
    'description': '\"The origin server requires the request to be conditional.\"',
    'spec_title': 'RFC6585#3',
    'spec_href': 'http://tools.ietf.org/html/rfc6585#section-3'
  },
  '429': {
    'code': 429,
    'text': 'Too Many Requests',
    'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
    'spec_title': 'RFC6585#4',
    'spec_href': 'http://tools.ietf.org/html/rfc6585#section-4'
  },
  '431': {
    'code': 431,
    'text': 'Request Header Fields Too Large',
    'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
    'spec_title': 'RFC6585#5',
    'spec_href': 'http://tools.ietf.org/html/rfc6585#section-5'
  },
  '451': {
    'code': 451,
    'text': 'Unavailable For Legal Reasons',
    'description': '\"The server is denying access to the resource in response to a legal demand.\"',
    'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
    'spec_href': 'http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
  },
  '506': {
    'code': 506,
    'text': 'Variant Also Negotiates',
    'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
    'spec_title': 'RFC2295#8.1',
    'spec_href': 'http://tools.ietf.org/html/rfc2295#section-8.1'
  },
  '507': {
    'code': 507,
    'text': 'Insufficient Storage',
    'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
    'spec_title': 'RFC5218#10.6',
    'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.6'
  },
  '511': {
    'code': 511,
    'text': 'Network Authentication Required',
    'description': '\"The client needs to authenticate to gain network access.\"',
    'spec_title': 'RFC6585#6',
    'spec_href': 'http://tools.ietf.org/html/rfc6585#section-6'
  }
};
/**
 * get the status text from StatusCode
 */

function getStatusText(status) {
  return STATUS_CODE_INFO[status].text || 'Unknown Status';
}
/**
 * Returns true if the the Http Status Code is 200-299 (success)
 */

function isSuccess(status) {
  return status >= 200 && status < 300;
}
;

/***/ }),

/***/ 56018:
/*!*****************************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/in-memory-web-api.module.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryWebApiModule": () => (/* binding */ InMemoryWebApiModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ 33882);
/* harmony import */ var _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client-in-memory-web-api.module */ 18066);
////// For apps with both Http and HttpClient ////


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InMemoryWebApiModule =
/** @class */
function () {
  function InMemoryWebApiModule() {}

  InMemoryWebApiModule_1 = InMemoryWebApiModule;
  /**
  *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
  *  to in-memory data store that implements `InMemoryDbService`.
  *  with class that implements InMemoryDbService and creates an in-memory database.
  *
  *  Usually imported in the root application module.
  *  Can import in a lazy feature module too, which will shadow modules loaded earlier
  *
  * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
  * @param {InMemoryBackendConfigArgs} [options]
  *
  * @example
  * InMemoryWebApiModule.forRoot(dbCreator);
  * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
  */

  InMemoryWebApiModule.forRoot = function (dbCreator, options) {
    return {
      ngModule: InMemoryWebApiModule_1,
      providers: [{
        provide: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService,
        useClass: dbCreator
      }, {
        provide: _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig,
        useValue: options
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpBackend,
        useFactory: _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_1__.httpClientInMemBackendServiceFactory,
        deps: [_interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryDbService, _interfaces__WEBPACK_IMPORTED_MODULE_0__.InMemoryBackendConfig, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.XhrFactory]
      }]
    };
  };
  /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */


  InMemoryWebApiModule.forFeature = function (dbCreator, options) {
    return InMemoryWebApiModule_1.forRoot(dbCreator, options);
  };

  var InMemoryWebApiModule_1;

  InMemoryWebApiModule.ɵfac = function InMemoryWebApiModule_Factory(t) {
    return new (t || InMemoryWebApiModule)();
  };

  InMemoryWebApiModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: InMemoryWebApiModule
  });
  InMemoryWebApiModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](InMemoryWebApiModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
      args: [{}]
    }], function () {
      return [];
    }, null);
  })();

  return InMemoryWebApiModule;
}();



/***/ }),

/***/ 31969:
/*!**********************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackendService": () => (/* reexport safe */ _backend_service__WEBPACK_IMPORTED_MODULE_0__.BackendService),
/* harmony export */   "HttpClientBackendService": () => (/* reexport safe */ _http_client_backend_service__WEBPACK_IMPORTED_MODULE_2__.HttpClientBackendService),
/* harmony export */   "HttpClientInMemoryWebApiModule": () => (/* reexport safe */ _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__.HttpClientInMemoryWebApiModule),
/* harmony export */   "InMemoryBackendConfig": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_5__.InMemoryBackendConfig),
/* harmony export */   "InMemoryBackendConfigArgs": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_5__.InMemoryBackendConfigArgs),
/* harmony export */   "InMemoryDbService": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_5__.InMemoryDbService),
/* harmony export */   "InMemoryWebApiModule": () => (/* reexport safe */ _in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__.InMemoryWebApiModule),
/* harmony export */   "STATUS": () => (/* reexport safe */ _http_status_codes__WEBPACK_IMPORTED_MODULE_1__.STATUS),
/* harmony export */   "STATUS_CODE_INFO": () => (/* reexport safe */ _http_status_codes__WEBPACK_IMPORTED_MODULE_1__.STATUS_CODE_INFO),
/* harmony export */   "getStatusText": () => (/* reexport safe */ _http_status_codes__WEBPACK_IMPORTED_MODULE_1__.getStatusText),
/* harmony export */   "httpClientInMemBackendServiceFactory": () => (/* reexport safe */ _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__.httpClientInMemBackendServiceFactory),
/* harmony export */   "isSuccess": () => (/* reexport safe */ _http_status_codes__WEBPACK_IMPORTED_MODULE_1__.isSuccess),
/* harmony export */   "parseUri": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_5__.parseUri),
/* harmony export */   "removeTrailingSlash": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_5__.removeTrailingSlash)
/* harmony export */ });
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend.service */ 10342);
/* harmony import */ var _http_status_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-status-codes */ 20006);
/* harmony import */ var _http_client_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-client-backend.service */ 58159);
/* harmony import */ var _in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./in-memory-web-api.module */ 56018);
/* harmony import */ var _http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-client-in-memory-web-api.module */ 18066);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interfaces */ 33882);







/***/ }),

/***/ 33882:
/*!***************************************************************************!*\
  !*** ./node_modules/angular-in-memory-web-api/__ivy_ngcc__/interfaces.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryBackendConfig": () => (/* binding */ InMemoryBackendConfig),
/* harmony export */   "InMemoryBackendConfigArgs": () => (/* binding */ InMemoryBackendConfigArgs),
/* harmony export */   "InMemoryDbService": () => (/* binding */ InMemoryDbService),
/* harmony export */   "parseUri": () => (/* binding */ parseUri),
/* harmony export */   "removeTrailingSlash": () => (/* binding */ removeTrailingSlash)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
* Interface for a class that creates an in-memory database
*
* Its `createDb` method creates a hash of named collections that represents the database
*
* For maximum flexibility, the service may define HTTP method overrides.
* Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
* If a request has a matching method, it will be called as in
* `get(info: requestInfo, db: {})` where `db` is the database object described above.
*/

var InMemoryDbService =
/** @class */
function () {
  function InMemoryDbService() {}

  return InMemoryDbService;
}();


/**
* Interface for InMemoryBackend configuration options
*/

var InMemoryBackendConfigArgs =
/** @class */
function () {
  function InMemoryBackendConfigArgs() {}

  return InMemoryBackendConfigArgs;
}();

 /////////////////////////////////

/**
*  InMemoryBackendService configuration options
*  Usage:
*    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
*
*  or if providing separately:
*    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
*/

var InMemoryBackendConfig =
/** @class */
function () {
  function InMemoryBackendConfig(config) {
    if (config === void 0) {
      config = {};
    }

    Object.assign(this, {
      // default config:
      caseSensitiveSearch: false,
      dataEncapsulation: false,
      delay: 500,
      delete404: false,
      passThruUnknownUrl: false,
      post204: true,
      post409: false,
      put204: true,
      put404: false,
      apiBase: undefined,
      host: undefined,
      rootPath: undefined // default value is actually set in InMemoryBackendService ctor

    }, config);
  }

  InMemoryBackendConfig = __decorate([__metadata("design:paramtypes", [InMemoryBackendConfigArgs])], InMemoryBackendConfig);

  InMemoryBackendConfig.ɵfac = function InMemoryBackendConfig_Factory(t) {
    return new (t || InMemoryBackendConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InMemoryBackendConfigArgs));
  };

  InMemoryBackendConfig.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InMemoryBackendConfig,
    factory: function (t) {
      return InMemoryBackendConfig.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryBackendConfig, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () {
      return [{
        type: InMemoryBackendConfigArgs
      }];
    }, null);
  })();

  return InMemoryBackendConfig;
}();


/** Return information (UriInfo) about a URI  */

function parseUri(str) {
  // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
  // tslint:disable-next-line:max-line-length
  var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var m = URL_REGEX.exec(str);
  var uri = {
    source: '',
    protocol: '',
    authority: '',
    userInfo: '',
    user: '',
    password: '',
    host: '',
    port: '',
    relative: '',
    path: '',
    directory: '',
    file: '',
    query: '',
    anchor: ''
  };
  var keys = Object.keys(uri);
  var i = keys.length;

  while (i--) {
    uri[keys[i]] = m[i] || '';
  }

  return uri;
}
function removeTrailingSlash(path) {
  return path.replace(/\/$/, '');
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_users_module_ts.js.map