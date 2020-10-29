(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["other-small-tasks-other-small-tasks-module"],{

/***/ "./src/app/features/pages/other-small-tasks/other-small-tasks.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/pages/other-small-tasks/other-small-tasks.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OtherSmallTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherSmallTasksComponent", function() { return OtherSmallTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class OtherSmallTasksComponent {
    constructor(router) {
        this.router = router;
        this.todayNumber = Date.now();
        this.todayDate = new Date();
        this.todayString = new Date().toDateString();
        this.todayISOString = new Date().toISOString();
        this.propertyBinding = true;
    }
    ngOnInit() {
        //PropertyBinding Example
        setTimeout(() => {
            this.propertyBinding = false;
        }, 4000);
    }
    routeToRegistrationForm() {
        this.router.navigate(['../pages/registration-form']);
    }
}
OtherSmallTasksComponent.ɵfac = function OtherSmallTasksComponent_Factory(t) { return new (t || OtherSmallTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
OtherSmallTasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtherSmallTasksComponent, selectors: [["app-other-small-tasks"]], decls: 22, vars: 17, consts: [[1, "scrollbar-thin"], [1, "date"], [1, "buttons"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function OtherSmallTasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " GeeksforGeeks is a computer science portal with a huge variety of well written and explained computer science and programming articles, quizzes and interview questions. The portal also has dedicated GATE preparation and competitive programming sections.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherSmallTasksComponent_Template_button_click_20_listener() { return ctx.routeToRegistrationForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("DateTime as Milliseconds : ", ctx.todayNumber, " datepipe:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, ctx.todayNumber), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("DateTime as object : ", ctx.todayDate, " datepipe:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, ctx.todayDate), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("DateTime as string : ", ctx.todayString, " datepipe:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, ctx.todayString), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("DateTime as iso string : ", ctx.todayISOString, " datepipe:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 15, ctx.todayISOString), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.propertyBinding);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".scrollbar-thin[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  height: 150px;\n  width: 200px;\n  overflow-y: scroll;\n}\n\ndiv[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\ndiv[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvb3RoZXItc21hbGwtdGFza3Mvb3RoZXItc21hbGwtdGFza3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFDQTtFQUNDLG9EQUFBO0VBQ0EsbUJBQUE7QUFFRCIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3BhZ2VzL290aGVyLXNtYWxsLXRhc2tzL290aGVyLXNtYWxsLXRhc2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGJhci10aGluIHsgXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47IFxyXG4gICAgaGVpZ2h0OiAxNTBweDsgXHJcbiAgICB3aWR0aDogMjAwcHg7IFxyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyBcclxufSBcclxuZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTJweDtcclxufVxyXG4gICAgXHJcbmRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherSmallTasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-other-small-tasks',
                templateUrl: './other-small-tasks.component.html',
                styleUrls: ['./other-small-tasks.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/pages/other-small-tasks/other-small-tasks.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/pages/other-small-tasks/other-small-tasks.module.ts ***!
  \******************************************************************************/
/*! exports provided: OtherSmallTasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherSmallTasksModule", function() { return OtherSmallTasksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _other_small_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other-small-tasks.component */ "./src/app/features/pages/other-small-tasks/other-small-tasks.component.ts");






const routes = [
    {
        path: '',
        component: _other_small_tasks_component__WEBPACK_IMPORTED_MODULE_3__["OtherSmallTasksComponent"],
    }
];
class OtherSmallTasksModule {
}
OtherSmallTasksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OtherSmallTasksModule });
OtherSmallTasksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OtherSmallTasksModule_Factory(t) { return new (t || OtherSmallTasksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OtherSmallTasksModule, { declarations: [_other_small_tasks_component__WEBPACK_IMPORTED_MODULE_3__["OtherSmallTasksComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OtherSmallTasksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_other_small_tasks_component__WEBPACK_IMPORTED_MODULE_3__["OtherSmallTasksComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=other-small-tasks-other-small-tasks-module.js.map