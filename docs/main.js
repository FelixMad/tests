(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VzF":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "lGQG");



class AuthGuard {
    constructor(auth) {
        this.auth = auth;
    }
    canActivate(route, state) {
        return this.auth.isAuthenticated$;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "/1Hp":
/*!***************************************************************!*\
  !*** ./src/app/components/list-topic/list-topic.component.ts ***!
  \***************************************************************/
/*! exports provided: ListTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTopicComponent", function() { return ListTopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/topic", a1]; };
function ListTopicComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topic_r2.numberName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, topic_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topic_r2.name, " ");
} }
function ListTopicComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cargando temas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Espere por favor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListTopicComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListTopicComponent.ɵfac = function ListTopicComponent_Factory(t) { return new (t || ListTopicComponent)(); };
ListTopicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListTopicComponent, selectors: [["app-list-topic"]], inputs: { topics: "topics", cargando: "cargando" }, decls: 7, vars: 2, consts: [[1, "row"], [1, "col-12"], ["class", "row mb-1", 4, "ngFor", "ngForOf"], ["class", "alert alert-info text-center mt-3 animated fadeIn faster", 4, "ngIf"], [1, "row", "mb-1"], [1, "col-1", "pr-0", "small", "text-center"], [1, "col-11", "small"], [3, "routerLink"], [1, "alert", "alert-info", "text-center", "mt-3", "animated", "fadeIn", "faster"], [1, "alert-heading"], [1, "fa", "fa-refresh", "fa-spin", "fa-2x"], [1, "mb-0"]], template: function ListTopicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Temas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListTopicComponent_div_5_Template, 6, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListTopicComponent_div_6_Template, 7, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topics);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC10b3BpYy9saXN0LXRvcGljLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListTopicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-topic',
                templateUrl: './list-topic.component.html',
                styleUrls: ['./list-topic.component.css']
            }]
    }], function () { return []; }, { topics: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cargando: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\felix\angular-form-tests\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3OJA":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function UserComponent_pre_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, profile_r1));
} }
class UserComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.userProfile$.subscribe(perfil => {
            //this.nameUser = perfil.name;
            //console.log(perfil.name);
        });
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 4, vars: 3, consts: [[4, "ngIf"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Perfil de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserComponent_pre_2_Template, 6, 3, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.auth.userProfile$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "A+vS":
/*!***************************************************************!*\
  !*** ./src/app/components/form-topic/form-topic.component.ts ***!
  \***************************************************************/
/*! exports provided: FormTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTopicComponent", function() { return FormTopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/question */ "RHvB");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class FormTopicComponent {
    constructor(questionService, router) {
        this.questionService = questionService;
        this.router = router;
        this.topic = new src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_2__["Topic"]();
    }
    ngOnInit() {
    }
    guardarTopic(form) {
        if (form.invalid) {
            console.log('Formulario de Temas no valido');
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Espere',
            text: 'Guardando información',
            allowOutsideClick: false
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading();
        let peticion;
        peticion = this.questionService.crearTopic(this.topic);
        peticion.subscribe(resp => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: this.topic.numberName + ' - ' + this.topic.name,
                text: 'Se actualizó correctamente',
            });
            this.router.navigateByUrl('/form-data');
        });
    }
}
FormTopicComponent.ɵfac = function FormTopicComponent_Factory(t) { return new (t || FormTopicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
FormTopicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormTopicComponent, selectors: [["app-form-topic"]], decls: 20, vars: 2, consts: [[1, "row"], [1, "col-1"], [1, "col-9"], [1, "col-2"], [3, "ngSubmit"], ["f", "ngForm"], [1, "row", "mb-2"], ["type", "text", "name", "number", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "name", "name", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fa", "fa-save"]], template: function FormTopicComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Formulario de temas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "N\u00BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormTopicComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.guardarTopic(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormTopicComponent_Template_input_ngModelChange_13_listener($event) { return ctx.topic.numberName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormTopicComponent_Template_input_ngModelChange_15_listener($event) { return ctx.topic.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Guardar tema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.topic.numberName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.topic.name);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS10b3BpYy9mb3JtLXRvcGljLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormTopicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-topic',
                templateUrl: './form-topic.component.html',
                styleUrls: ['./form-topic.component.css']
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuYc":
/*!********************************************!*\
  !*** ./src/app/pages/tag/tag.component.ts ***!
  \********************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/question */ "RHvB");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TagComponent_ng_container_19_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const i_r4 = ctx_r8.index;
    const question_r3 = ctx_r8.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r3.topic.numberName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r3.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r3.correct, " ");
} }
function TagComponent_ng_container_19_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagComponent_ng_container_19_ng_container_1_ng_container_1_ng_container_1_Template, 11, 4, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sTag_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sTag_r6.id == ctx_r5.tag.id);
} }
function TagComponent_ng_container_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagComponent_ng_container_19_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const question_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", question_r3.tags);
} }
function TagComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagComponent_ng_container_19_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.questions);
} }
function TagComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cargando");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Espere por favor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TagComponent {
    constructor(questionService, router, route) {
        this.questionService = questionService;
        this.router = router;
        this.route = route;
        this.tag = new src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_1__["Tag"]();
        this.questions = [];
        this.cargando = false;
    }
    ngOnInit() {
        this.cargando = true;
        const id = this.route.snapshot.paramMap.get('id');
        this.questionService.getTag(id)
            .subscribe((resp) => {
            this.tag = resp;
            this.tag.id = id;
        });
        this.questionService.getQuestions()
            .subscribe(resp => {
            this.questions = resp;
            this.cargando = false;
        });
    }
}
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagComponent, selectors: [["app-tag"]], decls: 21, vars: 3, consts: [[1, "row"], [1, "col-6"], [1, "col-6", "text-right"], ["routerLink", "/list", 1, "btn", "btn-danger", "mt-3"], [1, "fa", "fa-arrow-left"], [1, "text-white", "bg-dark", "pt-2", "pb-2", "mb-1"], [1, "col-1", "text-center", "small"], [1, "col-8", "small"], [4, "ngIf"], ["class", "alert alert-info text-center mt-3 animated fadeIn faster", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-info", "text-center", "mt-3", "animated", "fadeIn", "faster"], [1, "alert-heading"], [1, "fa", "fa-refresh", "fa-spin", "fa-2x"], [1, "mb-0"]], template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Regresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Tema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Pregunta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Respuesta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TagComponent_ng_container_19_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TagComponent_div_20_Template, 7, 0, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tag: ", ctx.tag.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhZy90YWcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tag',
                templateUrl: './tag.component.html',
                styleUrls: ['./tag.component.css']
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "GF8i":
/*!*************************************************************!*\
  !*** ./src/app/components/form-tags/form-tags.component.ts ***!
  \*************************************************************/
/*! exports provided: FormTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTagsComponent", function() { return FormTagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/question */ "RHvB");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function FormTagsComponent_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este tag est\u00E1 repetido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormTagsComponent {
    constructor(questionService, router) {
        this.questionService = questionService;
        this.router = router;
        this.reloadTags = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tag = new src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_2__["Tag"]();
        this.tags = [];
    }
    ngOnInit() {
        this.tags = JSON.parse(localStorage.getItem("tags"));
        this.repeated = false;
        if (!this.tags) {
            this.questionService.getTags()
                .subscribe(resp => {
                this.tags = resp;
                localStorage.setItem("tags", JSON.stringify(resp));
            });
        }
    }
    guardarTag(form) {
        this.repeated = false;
        if (form.invalid) {
            console.log('Formulario de Tags no valido');
            return;
        }
        this.tags.forEach(element => {
            if (element.name == this.tag.name) {
                console.log("Este tag está repetido");
                this.repeated = true;
                return;
            }
        });
        if (!this.repeated) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Espere',
                text: 'Guardando información',
                allowOutsideClick: false
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading();
            let peticion;
            peticion = this.questionService.crearTag(this.tag);
            peticion.subscribe(resp => {
                localStorage.removeItem("tags");
                this.tag.name = "";
                this.questionService.getTags()
                    .subscribe(resp => {
                    this.tags = resp;
                    localStorage.setItem("tags", JSON.stringify(resp));
                    this.tags = JSON.parse(localStorage.getItem("tags"));
                    this.reloadTags.emit(this.tags);
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: this.tag.name,
                    text: 'Se actualizó correctamente',
                });
                //this.router.navigateByUrl('/form-data');
            });
        }
    }
}
FormTagsComponent.ɵfac = function FormTagsComponent_Factory(t) { return new (t || FormTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
FormTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormTagsComponent, selectors: [["app-form-tags"]], outputs: { reloadTags: "reloadTags" }, decls: 13, vars: 4, consts: [[3, "ngSubmit"], ["t", "ngForm"], [1, "row", "mb-2"], [1, "col-6"], ["type", "text", "name", "tag", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fa", "fa-save"], [1, "text-danger"]], template: function FormTagsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Formulario tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormTagsComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.guardarTag(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormTagsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.tag.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormTagsComponent_small_8_Template, 2, 0, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Guardar tag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", ctx.repeated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tag.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.repeated);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS10YWdzL2Zvcm0tdGFncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-tags',
                templateUrl: './form-tags.component.html',
                styleUrls: ['./form-tags.component.css']
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { reloadTags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ILRW":
/*!************************************************!*\
  !*** ./src/app/pages/tests/tests.component.ts ***!
  \************************************************/
/*! exports provided: TestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsComponent", function() { return TestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/question */ "RHvB");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a1) { return ["/tests-topic", a1]; };
function TestsComponent_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestsComponent_div_2_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const topic_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.callTopicQuestion(topic_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, topic_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", topic_r5.numberName, ". ", topic_r5.name, " ");
} }
function TestsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestsComponent_div_2_a_1_Template, 2, 5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.countTopics(topic_r5.id));
} }
function TestsComponent_div_6_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.titleQuestion, ":");
} }
function TestsComponent_div_6_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.questionNote);
} }
function TestsComponent_div_6_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A1Correcto!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestsComponent_div_6_ng_container_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A1Incorrecto!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestsComponent_div_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestsComponent_div_6_ng_container_5_div_2_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TestsComponent_div_6_ng_container_5_div_3_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.answerChoosed && ctx_r13.answerSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.answerChoosed && !ctx_r13.answerSuccess);
} }
function TestsComponent_div_6_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestsComponent_div_6_div_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.checkAnswer(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correcto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestsComponent_div_6_div_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestsComponent_div_6_div_6_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.checkAnswer(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Incorrecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestsComponent_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestsComponent_div_6_div_6_button_2_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TestsComponent_div_6_div_6_button_4_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.question);
} }
function TestsComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestsComponent_div_6_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.nextQuestions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Siguiente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestsComponent_div_6_h3_1_Template, 2, 1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TestsComponent_div_6_p_4_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TestsComponent_div_6_ng_container_5_Template, 4, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TestsComponent_div_6_div_6_Template, 5, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestsComponent_div_6_div_7_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.titleQuestion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.answerChoosed && ctx_r1.questionNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.answerChoosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.answerChoosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.answerChoosed);
} }
const _c1 = function (a1) { return ["/form-data", a1]; };
function TestsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar pregunta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r2.idSendQ));
} }
function TestsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cargando listado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Espere por favor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return ["/tests-tags", a1]; };
function TestsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestsComponent_div_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const tag_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.callTagQuestion(tag_r26.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, tag_r26.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r26.name);
} }
class TestsComponent {
    constructor(questionService, router, route, auth) {
        this.questionService = questionService;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.cargando = false;
        this.allQuestions = [];
        this.dataQuestions = [];
        this.topics = [];
        this.tags = [];
        this.users = [];
        this.questionsUser = [];
        this.questionUser = new src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        const path = this.route.snapshot.url[0].path;
        this.tags = JSON.parse(localStorage.getItem("tags"));
        this.topics = JSON.parse(localStorage.getItem("topics"));
        this.allQuestions = JSON.parse(localStorage.getItem("questions"));
        this.users = JSON.parse(localStorage.getItem("users"));
        this.questionsUser = JSON.parse(localStorage.getItem("questionsUser"));
        this.QuestionTypeTitle = "Pregunta general";
        this.answerCorrect = false;
        this.answerChoosed = false;
        this.cargando = true;
        this.i = 0;
        if (!this.allQuestions) {
            this.questionService.getQuestions()
                .subscribe(resp => {
                this.dataQuestions = resp;
                this.allQuestions = resp;
                localStorage.setItem("questions", JSON.stringify(resp));
                this.cargando = false;
                if (path == "tests-topic") {
                    this.callTopicQuestion(id);
                }
                else if (path == "tests-tags") {
                    this.callTagQuestion(id);
                }
            });
        }
        else {
            this.cargando = false;
            this.dataQuestions = this.allQuestions;
            if (path == "tests-topic") {
                this.callTopicQuestion(id);
            }
            else if (path == "tests-tags") {
                this.callTagQuestion(id);
            }
        }
        if (!this.topics) {
            this.questionService.getTopics().subscribe(resp => {
                this.topics = resp;
                localStorage.setItem("topics", JSON.stringify(resp));
            });
        }
        if (!this.tags) {
            this.questionService.getTags().subscribe(resp => {
                this.tags = resp;
                localStorage.setItem("tags", JSON.stringify(resp));
            });
        }
        this.auth.userProfile$.subscribe(perfil => {
            this.emailUser = perfil.email;
            if (!this.users) {
                this.questionService.getUsers().subscribe(resp => {
                    this.users = resp;
                    localStorage.setItem("users", JSON.stringify(this.users));
                    this.users.forEach(resp => {
                        if (resp.email == this.emailUser) {
                            return this.idUser = resp.id;
                        }
                    });
                });
            }
            else {
                this.users.forEach(resp => {
                    if (resp.email == this.emailUser) {
                        return this.idUser = resp.id;
                    }
                });
            }
            if (!this.questionsUser) {
                this.questionService.getQuestionsUser(this.idUser)
                    .subscribe(resp => {
                    this.questionsUser = resp;
                    localStorage.setItem("questionsUser", JSON.stringify(resp));
                    this.nextQuestions();
                });
            }
            else {
                this.nextQuestions();
            }
        });
    }
    nextQuestions() {
        this.answerChoosed = false;
        this.titleQuestion = "";
        this.i = Math.floor(Math.random() * this.dataQuestions.length);
        this.questionUser.n_corrects = 0;
        this.questionUser.n_questions = 0;
        delete this.questionNote;
        if (this.questionsUser) {
            this.questionsUser.forEach(item => {
                if (item.id == this.dataQuestions[this.i].id) {
                    this.questionUser.n_corrects = item.n_corrects;
                    this.questionUser.n_questions = item.n_questions;
                }
            });
        }
        if (this.dataQuestions[this.i].note) {
            this.questionNote = this.dataQuestions[this.i].note;
        }
        this.question = this.dataQuestions[this.i].question;
        this.answerCorrect = this.dataQuestions[this.i].correct;
        this.idSendQ = this.dataQuestions[this.i].id;
        this.titleQuestion = this.dataQuestions[this.i].title;
    }
    countTopics(idTopic) {
        let i = 0;
        this.allQuestions.forEach(question => {
            if (idTopic == question.topic.id) {
                i++;
            }
        });
        return i;
    }
    callTopicQuestion(idTopic) {
        this.i = 0;
        this.dataQuestions = [];
        this.allQuestions.forEach(question => {
            if (idTopic == question.topic.id) {
                this.dataQuestions.push(question);
            }
        });
        this.topics.forEach(topic => {
            if (idTopic == topic.id) {
                this.QuestionTypeTitle = "Pregunta del Tema: " + topic.numberName + ". " + topic.name;
            }
        });
        return this.nextQuestions();
    }
    callTagQuestion(idTag) {
        this.i = 0;
        this.dataQuestions = [];
        this.allQuestions.forEach(question => {
            question.tags.forEach(tag => {
                if (idTag == tag.id) {
                    this.dataQuestions.push(question);
                }
            });
        });
        this.tags.forEach(tag => {
            if (idTag == tag.id) {
                this.QuestionTypeTitle = "Pregunta de la etiqueta: " + tag.name;
            }
        });
        return this.nextQuestions();
    }
    checkAnswer(answer) {
        this.answerSuccess = false;
        this.answerChoosed = true;
        if (this.answerCorrect == answer) {
            this.questionUser.n_corrects++;
            this.answerSuccess = true;
        }
        this.questionUser.n_questions++;
        this.questionService.updateQuestionsUser(this.questionUser, this.idUser, this.idSendQ)
            .subscribe(resp => {
            Object.keys(resp).forEach(key => {
                this.questionUser[key] = resp[key];
            });
            let count = false;
            this.questionsUser.forEach(element => {
                if (element.id == this.idSendQ) {
                    element.n_corrects = this.questionUser.n_corrects;
                    element.n_questions = this.questionUser.n_questions;
                    count = true;
                }
            });
            if (!count) {
                let element = new src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
                element.id = this.idSendQ;
                element.n_corrects = this.questionUser.n_corrects;
                element.n_questions = this.questionUser.n_questions;
                this.questionsUser.push(element);
            }
            localStorage.setItem("questionsUser", JSON.stringify(this.questionsUser));
        });
    }
    guardarUser(form) {
        if (form.invalid) {
            console.log('Formulario de Preguntas no valido');
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Espere',
            text: 'Guardando información',
            allowOutsideClick: false
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading();
        let peticion;
        peticion.subscribe(resp => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                text: 'Se actualizó correctamente',
            });
            this.router.navigateByUrl('/list');
        });
    }
}
TestsComponent.ɵfac = function TestsComponent_Factory(t) { return new (t || TestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
TestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestsComponent, selectors: [["app-tests"]], decls: 11, vars: 6, consts: [[1, "row"], [1, "col-3"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [1, "col-7"], [1, "text-center", "mb-4"], ["class", "p-5 rounded border border-dark bg-light text-dark", 4, "ngIf"], ["class", "text-center mt-4", 4, "ngIf"], ["class", "alert alert-info text-center mt-3 animated fadeIn faster", 4, "ngIf"], [1, "col-2"], ["class", "mb-1", 4, "ngFor", "ngForOf"], [1, "mb-2"], ["class", "small", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["routerLinkActive", "active", 1, "small", 3, "routerLink", "click"], [1, "p-5", "rounded", "border", "border-dark", "bg-light", "text-dark"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], [4, "ngIf"], ["class", "row mt-5", 4, "ngIf"], [1, "text-center", "mt-4"], [1, "row", "no-gutters"], ["class", "alert alert-primary mt-4 text-center w-100", 4, "ngIf"], ["class", "alert alert-danger mt-4 text-center w-100", 4, "ngIf"], [1, "alert", "alert-primary", "mt-4", "text-center", "w-100"], [1, "alert", "alert-danger", "mt-4", "text-center", "w-100"], [1, "row", "mt-5"], [1, "col-6", "text-right"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], [1, "col-6"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-arrow-right"], [1, "btn", "btn-info", "mr-2", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "alert", "alert-info", "text-center", "mt-3", "animated", "fadeIn", "faster"], [1, "alert-heading"], [1, "fa", "fa-refresh", "fa-spin", "fa-2x"], [1, "mb-0"], [1, "mb-1"], [1, "white-space-pre", "rounded", "text-white", "bg-warning", "p-1", "cursor-pointer"]], template: function TestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestsComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TestsComponent_div_6_Template, 8, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestsComponent_div_7_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestsComponent_div_8_Template, 7, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TestsComponent_div_10_Template, 4, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topics);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.QuestionTypeTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.answerChoosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3RzL3Rlc3RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tests',
                templateUrl: './tests.component.html',
                styleUrls: ['./tests.component.css']
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "RHvB":
/*!****************************************!*\
  !*** ./src/app/interfaces/question.ts ***!
  \****************************************/
/*! exports provided: Question, Tag, Topic, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class Question {
}
class Tag {
}
class Topic {
}
class User {
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.localAuthSetup();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "mb-5"], [1, "container", "animated", "fadeIn", "faster"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "UcdY":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class QuestionService {
    constructor(http) {
        this.http = http;
        this.url = 'https://preguntas-lengua.firebaseio.com';
    }
    crearArregloTag(tagsObj) {
        const tags = [];
        Object.keys(tagsObj).forEach(key => {
            const tag = tagsObj[key];
            tag.id = key;
            tags.push(tag);
        });
        if (tagsObj === null) {
            return [];
        }
        return tags;
    }
    crearArregloQuestion(questionObj) {
        const questions = [];
        Object.keys(questionObj).forEach(key => {
            const question = questionObj[key];
            question.id = key;
            questions.push(question);
        });
        if (questionObj === null) {
            return [];
        }
        return questions;
    }
    crearArregloQuestionUser(questionUserObj) {
        const questionsUser = [];
        Object.keys(questionUserObj).forEach(key => {
            const questionUser = questionUserObj[key];
            questionUser.id = key;
            questionsUser.push(questionUser);
        });
        if (questionUserObj === null) {
            return [];
        }
        return questionsUser;
    }
    crearArregloTopic(topicObj) {
        const topics = [];
        Object.keys(topicObj).forEach(key => {
            const topic = topicObj[key];
            topic.id = key;
            topics.push(topic);
        });
        if (topicObj === null) {
            return [];
        }
        return topics;
    }
    crearArregloUser(userObj) {
        const users = [];
        Object.keys(userObj).forEach(key => {
            const user = userObj[key];
            user.id = key;
            users.push(user);
        });
        if (userObj === null) {
            return [];
        }
        return users;
    }
    getUsers() {
        return this.http.get(` ${this.url}/user.json `)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.crearArregloUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1500));
    }
    getQuestions() {
        return this.http.get(` ${this.url}/question.json `)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.crearArregloQuestion), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1500));
    }
    getQuestionsUser(idUser) {
        return this.http.get(`${this.url}/user/${idUser}/question.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.crearArregloQuestionUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1500));
    }
    getTopics() {
        return this.http.get(` ${this.url}/topic.json `)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.crearArregloTopic), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1500));
    }
    getTags() {
        return this.http.get(` ${this.url}/tag.json `)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.crearArregloTag), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1500));
    }
    getQuestion(id) {
        return this.http.get(`${this.url}/question/${id}.json`);
    }
    getTag(id) {
        return this.http.get(`${this.url}/tag/${id}.json`);
    }
    getTopic(id) {
        return this.http.get(`${this.url}/topic/${id}.json`);
    }
    getQuestionUser(idUser, idQuestion) {
        return this.http.get(`${this.url}/user/${idUser}/question/${idQuestion}.json`);
    }
    /*
    getQuestionsUser( idUser: string ){
      return this.http.get(`${ this.url }/user/${ idUser }/question.json`);
    }*/
    crearTopic(topic) {
        return this.http.post(`${this.url}/topic.json`, topic)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp => {
            //topic.id = resp;
            return topic;
        })));
    }
    crearTag(tag) {
        return this.http.post(`${this.url}/tag.json`, tag)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp => {
            //question.id = resp.;
            return tag;
        })));
    }
    crearQuestion(question) {
        return this.http.post(`${this.url}/question.json`, question)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp => {
            //question.id = resp.;
            return question;
        })));
    }
    crearUser(user) {
        return this.http.post(`${this.url}/user.json`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp => {
            //topic.id = resp;
            return user;
        })));
    }
    borrarAudio(id) {
        return this.http.delete(`${this.url}/question/${id}.json`);
    }
    updateQuestionsUser(question, idUser, idQuestion) {
        return this.http.put(`${this.url}/user/${idUser}/question/${idQuestion}.json`, question);
    }
    actualizarQuestion(question) {
        const questionTemp = Object.assign({}, question);
        delete questionTemp.id;
        return this.http.put(`${this.url}/question/${question.id}.json`, questionTemp);
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_form_data_form_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/form-data/form-data.component */ "dq7V");
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/list/list.component */ "kzYG");
/* harmony import */ var _components_form_tags_form_tags_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/form-tags/form-tags.component */ "GF8i");
/* harmony import */ var _components_form_question_form_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/form-question/form-question.component */ "nLLy");
/* harmony import */ var _components_list_tags_list_tags_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/list-tags/list-tags.component */ "rMhl");
/* harmony import */ var _pages_tag_tag_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/tag/tag.component */ "BuYc");
/* harmony import */ var _components_list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/list-questions/list-questions.component */ "farS");
/* harmony import */ var _components_form_topic_form_topic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/form-topic/form-topic.component */ "A+vS");
/* harmony import */ var _pages_topic_topic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/topic/topic.component */ "tKgD");
/* harmony import */ var _components_list_topic_list_topic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/list-topic/list-topic.component */ "/1Hp");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/user/user.component */ "3OJA");
/* harmony import */ var _pages_tests_tests_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/tests/tests.component */ "ILRW");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _pages_form_data_form_data_component__WEBPACK_IMPORTED_MODULE_7__["FormDataComponent"],
        _pages_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
        _components_form_tags_form_tags_component__WEBPACK_IMPORTED_MODULE_9__["FormTagsComponent"],
        _components_form_question_form_question_component__WEBPACK_IMPORTED_MODULE_10__["FormQuestionComponent"],
        _components_list_tags_list_tags_component__WEBPACK_IMPORTED_MODULE_11__["ListTagsComponent"],
        _pages_tag_tag_component__WEBPACK_IMPORTED_MODULE_12__["TagComponent"],
        _components_list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_13__["ListQuestionsComponent"],
        _components_form_topic_form_topic_component__WEBPACK_IMPORTED_MODULE_14__["FormTopicComponent"],
        _pages_topic_topic_component__WEBPACK_IMPORTED_MODULE_15__["TopicComponent"],
        _components_list_topic_list_topic_component__WEBPACK_IMPORTED_MODULE_16__["ListTopicComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        _pages_user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
        _pages_tests_tests_component__WEBPACK_IMPORTED_MODULE_20__["TestsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _pages_form_data_form_data_component__WEBPACK_IMPORTED_MODULE_7__["FormDataComponent"],
                    _pages_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
                    _components_form_tags_form_tags_component__WEBPACK_IMPORTED_MODULE_9__["FormTagsComponent"],
                    _components_form_question_form_question_component__WEBPACK_IMPORTED_MODULE_10__["FormQuestionComponent"],
                    _components_list_tags_list_tags_component__WEBPACK_IMPORTED_MODULE_11__["ListTagsComponent"],
                    _pages_tag_tag_component__WEBPACK_IMPORTED_MODULE_12__["TagComponent"],
                    _components_list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_13__["ListQuestionsComponent"],
                    _components_form_topic_form_topic_component__WEBPACK_IMPORTED_MODULE_14__["FormTopicComponent"],
                    _pages_topic_topic_component__WEBPACK_IMPORTED_MODULE_15__["TopicComponent"],
                    _components_list_topic_list_topic_component__WEBPACK_IMPORTED_MODULE_16__["ListTopicComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                    _pages_user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                    _pages_tests_tests_component__WEBPACK_IMPORTED_MODULE_20__["TestsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dq7V":
/*!********************************************************!*\
  !*** ./src/app/pages/form-data/form-data.component.ts ***!
  \********************************************************/
/*! exports provided: FormDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataComponent", function() { return FormDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_form_question_form_question_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/form-question/form-question.component */ "nLLy");
/* harmony import */ var _components_form_tags_form_tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/form-tags/form-tags.component */ "GF8i");
/* harmony import */ var _components_form_topic_form_topic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form-topic/form-topic.component */ "A+vS");





class FormDataComponent {
    constructor() {
        this.tags = [];
    }
    ngOnInit() {
    }
    addTags($event) {
        this.tags = $event;
    }
}
FormDataComponent.ɵfac = function FormDataComponent_Factory(t) { return new (t || FormDataComponent)(); };
FormDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormDataComponent, selectors: [["app-form-data"]], decls: 5, vars: 1, consts: [[3, "tags"], [1, "mt-4"], [3, "reloadTags"]], template: function FormDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-form-question", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-form-tags", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reloadTags", function FormDataComponent_Template_app_form_tags_reloadTags_2_listener($event) { return ctx.addTags($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-form-topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx.tags);
    } }, directives: [_components_form_question_form_question_component__WEBPACK_IMPORTED_MODULE_1__["FormQuestionComponent"], _components_form_tags_form_tags_component__WEBPACK_IMPORTED_MODULE_2__["FormTagsComponent"], _components_form_topic_form_topic_component__WEBPACK_IMPORTED_MODULE_3__["FormTopicComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0tZGF0YS9mb3JtLWRhdGEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-data',
                templateUrl: './form-data.component.html',
                styleUrls: ['./form-data.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "farS":
/*!***********************************************************************!*\
  !*** ./src/app/components/list-questions/list-questions.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQuestionsComponent", function() { return ListQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function ListQuestionsComponent_div_9_div_13_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListQuestionsComponent_div_9_div_13_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tags_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tags_r10.name, " ");
} }
function ListQuestionsComponent_div_9_div_13_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 32);
} }
function ListQuestionsComponent_div_9_div_13_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
} }
const _c0 = function (a1) { return ["/topic", a1]; };
const _c1 = function (a1) { return ["/form-data", a1]; };
function ListQuestionsComponent_div_9_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListQuestionsComponent_div_9_div_13_span_9_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListQuestionsComponent_div_9_div_13_span_12_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListQuestionsComponent_div_9_div_13_i_14_Template, 1, 0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListQuestionsComponent_div_9_div_13_i_15_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListQuestionsComponent_div_9_div_13_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const question_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.borrarElemento(question_r4, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r4.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, question_r4.topic.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r4.topic.numberName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r4.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r4.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", question_r4.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r4.correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !question_r4.correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, question_r4.id));
} }
const _c2 = function (a1) { return { itemsPerPage: 20, currentPage: a1 }; };
function ListQuestionsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Tema ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Pregunta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Respuesta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListQuestionsComponent_div_9_div_13_Template, 22, 14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pagination-controls", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ListQuestionsComponent_div_9_Template_pagination_controls_pageChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 1, ctx_r0.questions, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r0.p)));
} }
function ListQuestionsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No hay registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListQuestionsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cargando listado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Espere por favor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListQuestionsComponent {
    constructor(questionService) {
        this.questionService = questionService;
        this.p = 1;
    }
    ngOnInit() {
    }
    borrarElemento(question, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: '¿Estás seguro?',
            text: `¿Está seguro que desea borrar a ${question.question} ?`,
            showConfirmButton: true,
            showCancelButton: true
        }).then(resp => {
            if (resp.value) {
                this.questions.splice(i, 1);
                this.questionService.borrarAudio(question.id).subscribe();
                localStorage.removeItem("questions");
            }
        });
    }
}
ListQuestionsComponent.ɵfac = function ListQuestionsComponent_Factory(t) { return new (t || ListQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"])); };
ListQuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListQuestionsComponent, selectors: [["app-list-questions"]], inputs: { questions: "questions", cargando: "cargando" }, decls: 12, vars: 3, consts: [[1, "row"], [1, "col-6"], [1, "col-6", "text-right"], ["routerLink", "/form-data/nuevo", 1, "btn", "btn-primary"], [1, "fa", "fa-plus"], ["class", "mt-3 animated fadeIn faster", 4, "ngIf"], ["class", "alert alert-warning text-center mt-3 animated fadeIn faster", 4, "ngIf"], ["class", "alert alert-info text-center mt-3 animated fadeIn faster", 4, "ngIf"], [1, "mt-3", "animated", "fadeIn", "faster"], [1, "text-white", "bg-dark", "pt-2", "pb-2"], [1, "col-1", "small", "text-center"], [1, "col-7", "small"], [1, "col-1", "small", "text-center", "p-0"], [1, "col-2"], [1, "table"], ["class", "table__row", 4, "ngFor", "ngForOf"], [1, "mt-3", "text-center"], [3, "pageChange"], [1, "table__row"], [1, "row", "pb-2", "pt-2"], [3, "routerLink"], [4, "ngIf"], ["class", "rounded text-white bg-warning pl-1 pr-1 mr-1", 4, "ngFor", "ngForOf"], ["class", "fa fa-check text-success", 4, "ngIf"], ["class", "fa fa-times text-danger", 4, "ngIf"], [1, "col-2", "text-center"], [1, "btn", "btn-info", "p-0", "w-50", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "btn", "btn-danger", "p-0", "w-50", 3, "click"], [1, "fa", "fa-trash"], [1, "m-0"], [1, "rounded", "text-white", "bg-warning", "pl-1", "pr-1", "mr-1"], [1, "fa", "fa-check", "text-success"], [1, "fa", "fa-times", "text-danger"], [1, "alert", "alert-warning", "text-center", "mt-3", "animated", "fadeIn", "faster"], [1, "alert-heading"], [1, "fa", "fa-exclamation", "fa-2x"], [1, "alert", "alert-info", "text-center", "mt-3", "animated", "fadeIn", "faster"], [1, "fa", "fa-refresh", "fa-spin", "fa-2x"], [1, "mb-0"]], template: function ListQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Preguntas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListQuestionsComponent_div_9_Template, 17, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListQuestionsComponent_div_10_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListQuestionsComponent_div_11_Template, 7, 0, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cargando && ctx.questions.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cargando && ctx.questions.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".table[_ngcontent-%COMP%]{\r\n}\r\n.table[_ngcontent-%COMP%]   .table__row[_ngcontent-%COMP%]:nth-of-type(8n + 1), .table[_ngcontent-%COMP%]   .table__row[_ngcontent-%COMP%]:nth-of-type(8n + 2), .table[_ngcontent-%COMP%]   .table__row[_ngcontent-%COMP%]:nth-of-type(8n + 3), .table[_ngcontent-%COMP%]   .table__row[_ngcontent-%COMP%]:nth-of-type(8n + 4){\r\n    background-color: #f8f9fa;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXF1ZXN0aW9ucy9saXN0LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7OztJQUlJLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1xdWVzdGlvbnMvbGlzdC1xdWVzdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxufVxyXG4udGFibGUgLnRhYmxlX19yb3c6bnRoLW9mLXR5cGUoOG4gKyAxKSxcclxuLnRhYmxlIC50YWJsZV9fcm93Om50aC1vZi10eXBlKDhuICsgMiksXHJcbi50YWJsZSAudGFibGVfX3JvdzpudGgtb2YtdHlwZSg4biArIDMpLFxyXG4udGFibGUgLnRhYmxlX19yb3c6bnRoLW9mLXR5cGUoOG4gKyA0KXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListQuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-questions',
                templateUrl: './list-questions.component.html',
                styleUrls: ['./list-questions.component.css']
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] }]; }, { questions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cargando: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NavbarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Perfil de usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gesti\u00F3n de datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Preguntas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", profile_r6.name, " ");
} }
function NavbarComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.auth.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.auth.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.userProfile$.subscribe(perfil => {
            //this.nameUser = perfil.name;
            //console.log(perfil);
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 8, consts: [[1, "bg-light"], [1, "container", "animated", "fadeIn", "faster"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["router-link", "home", 1, "navbar-brand"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/home", 1, "nav-link"], ["routerLinkActive", "active", "class", "nav-item", 4, "ngIf"], ["class", "mr-2 small", 4, "ngIf"], [1, "navbar-text"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["routerLink", "/user", 1, "nav-link"], ["routerLink", "/list", 1, "nav-link"], ["routerLink", "/tests", 1, "nav-link"], [1, "mr-2", "small"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_li_11_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavbarComponent_li_12_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_button_16_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_button_17_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, ctx.auth.userProfile$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "kzYG":
/*!**********************************************!*\
  !*** ./src/app/pages/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var _components_list_topic_list_topic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/list-topic/list-topic.component */ "/1Hp");
/* harmony import */ var _components_list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list-questions/list-questions.component */ "farS");
/* harmony import */ var _components_list_tags_list_tags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/list-tags/list-tags.component */ "rMhl");






class ListComponent {
    constructor(questionService) {
        this.questionService = questionService;
        this.tags = [];
        this.topics = [];
        this.questions = [];
        this.cargandoTags = false;
        this.cargandoQuestions = false;
        this.cargandoTopics = false;
    }
    ngOnInit() {
        this.cargandoTags = true;
        this.cargandoQuestions = true;
        this.cargandoTopics = true;
        this.tags = JSON.parse(localStorage.getItem("tags"));
        this.topics = JSON.parse(localStorage.getItem("topics"));
        this.questions = JSON.parse(localStorage.getItem("questions"));
        if (!this.topics) {
            this.questionService.getTopics()
                .subscribe(resp => {
                this.topics = resp;
                localStorage.setItem("topics", JSON.stringify(resp));
                this.cargandoTopics = false;
            });
        }
        else {
            this.cargandoTopics = false;
        }
        if (!this.tags) {
            this.questionService.getTags()
                .subscribe(resp => {
                this.tags = resp;
                this.cargandoTags = false;
            });
        }
        else {
            this.cargandoTags = false;
        }
        if (!this.questions) {
            this.questionService.getQuestions()
                .subscribe(resp => {
                localStorage.setItem("questions", JSON.stringify(resp));
                this.questions = resp;
                this.cargandoQuestions = false;
                //this.countTags(this.questions, this.tags);
                this.countQuestions(this.questions);
                this.questions = this.questions.reverse();
            });
        }
        else {
            this.cargandoQuestions = false;
            //this.countTags(this.questions, this.tags);
            this.countQuestions(this.questions);
            this.questions = this.questions.reverse();
        }
    }
    countQuestions(questions) {
        this.numberQuestions = 0;
        questions.forEach(question => {
            this.numberQuestions++;
            question.number = this.numberQuestions;
        });
    }
    countTags(questions, tags) {
        tags.forEach(tag => {
            this.numberTag = 0;
            questions.forEach(tags => {
                tags.tags.forEach(tags => {
                    if (tag.id == tags.id) {
                        this.numberTag++;
                    }
                });
            });
            tag.number = this.numberTag;
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 7, vars: 7, consts: [[1, "row"], [1, "col-3"], [3, "topics", "cargando"], [1, "col-7"], [3, "questions", "cargando"], [1, "col-2"], [3, "tags", "questions", "cargando"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list-topic", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-list-questions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-list-tags", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("topics", ctx.topics)("cargando", ctx.cargandoTopics);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questions", ctx.questions)("cargando", ctx.cargandoQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx.tags)("questions", ctx.questions)("cargando", ctx.cargandoTags);
    } }, directives: [_components_list_topic_list_topic_component__WEBPACK_IMPORTED_MODULE_2__["ListTopicComponent"], _components_list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_3__["ListQuestionsComponent"], _components_list_tags_list_tags_component__WEBPACK_IMPORTED_MODULE_4__["ListTagsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "l2eg");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(router) {
        this.router = router;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
            domain: "dev-rx9pjzv6.eu.auth0.com",
            client_id: "P6IFyvEM1m159gekGV2762IZGYD2E7rb",
            redirect_uri: `${window.location.origin}`
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err)));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(client.isAuthenticated())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => this.loggedIn = res));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(client.handleRedirectCallback())));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = null;
        // On initial load, check authentication state with authorization server
        // Set up local auth streams if user is already authenticated
        this.localAuthSetup();
        // Handle redirect from Auth0 login
        this.handleAuthCallback();
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    getUser$(options) {
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(client.getUser(options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(user => this.userProfileSubject$.next(user)));
    }
    localAuthSetup() {
        // This should only be called on app initialization
        // Set up local authentication streams
        const checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])((loggedIn) => {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(loggedIn);
        }));
        checkAuth$.subscribe();
    }
    login(redirectPath = '/') {
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log in
            client.loginWithRedirect({
                redirect_uri: `${window.location.origin}`,
                appState: { target: redirectPath }
            });
        });
    }
    handleAuthCallback() {
        // Call when app reloads after user logs in with Auth0
        const params = window.location.search;
        if (params.includes('code=') && params.includes('state=')) {
            let targetRoute; // Path to redirect to after login processsed
            const authComplete$ = this.handleRedirectCallback$.pipe(
            // Have client, now call method to handle auth callback redirect
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(cbRes => {
                // Get and set target redirect route from callback results
                targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(() => {
                // Redirect callback complete; get user and login status
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
                    this.getUser$(),
                    this.isAuthenticated$
                ]);
            }));
            // Subscribe to authentication completion observable
            // Response will be an array of user and login status
            authComplete$.subscribe(([user, loggedIn]) => {
                // Redirect to target route after callback processing
                this.router.navigate([targetRoute]);
            });
        }
    }
    logout() {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log out
            client.logout({
                client_id: "EbcAqkY00ZwS64DBTE13v74TjCvyzIbb",
                returnTo: `${window.location.origin}`
            });
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "nLLy":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-question/form-question.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormQuestionComponent", function() { return FormQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/question */ "RHvB");
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function FormQuestionComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", topic_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", topic_r8.numberName, " - ", topic_r8.name, " ");
} }
function FormQuestionComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "este campo est\u00E1 vacio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormQuestionComponent_small_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "este campo est\u00E1 vacio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormQuestionComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormQuestionComponent_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.question.correct = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Correcto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormQuestionComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormQuestionComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.question.correct = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Incorrecto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormQuestionComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormQuestionComponent_span_47_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r14 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.deleteTag(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r13.name, " ");
} }
function FormQuestionComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormQuestionComponent_span_52_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const tag_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.addTag(tag_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r17.name);
} }
class FormQuestionComponent {
    constructor(questionService, router, route, _location) {
        this.questionService = questionService;
        this.router = router;
        this.route = route;
        this._location = _location;
        this.question = new src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
        this.cargando = false;
        this.topics = [];
        this.questions = [];
    }
    ngOnInit() {
        this.question.tags = [];
        this.question.topic = [];
        this.cargando = true;
        this.errorQuestion = false;
        this.errorTopic = false;
        this.tags = JSON.parse(localStorage.getItem("tags"));
        this.topics = JSON.parse(localStorage.getItem("topics"));
        this.questions = JSON.parse(localStorage.getItem("questions"));
        const id = this.route.snapshot.paramMap.get('id');
        if (!this.questions) {
            this.questionService.getQuestions()
                .subscribe(resp => {
                this.questions = resp;
                localStorage.setItem("questions", JSON.stringify(resp));
            });
        }
        if (!this.tags) {
            this.questionService.getTags()
                .subscribe(resp => {
                this.tags = resp;
                localStorage.setItem("tags", JSON.stringify(resp));
            });
        }
        if (!this.topics) {
            this.questionService.getTopics()
                .subscribe(resp => {
                this.topics = resp;
                localStorage.setItem("topics", JSON.stringify(resp));
            });
        }
        if (id !== 'nuevo') {
            this.questions.forEach(element => {
                if (id === element.id) {
                    this.question.topic = element.topic.id;
                    this.question.question = element.question;
                    this.question.note = element.note;
                    this.question.correct = element.correct;
                    this.question.title = element.title;
                    this.question.tags = element.tags;
                    this.question.id = element.id;
                }
            });
        }
        else {
            this.question.topic = 0;
        }
        this.sortTags();
    }
    sortTags() {
        let arraySort = [];
        let newTags = [];
        this.tags.forEach(tag => {
            arraySort.push(tag.name);
        });
        arraySort = arraySort.sort();
        arraySort.forEach(tagSort => {
            this.tags.forEach(tag => {
                if (tagSort == tag.name) {
                    newTags.push(tag);
                }
            });
        });
        return this.tags = newTags;
    }
    guardarQuestion(form) {
        this.topics.forEach(topic => {
            if (topic.id == this.question.topic) {
                this.question.topic = {
                    id: topic.id,
                    numberName: topic.numberName
                };
            }
        });
        if (form.invalid) {
            if (!this.question.topic) {
                this.errorTopic = true;
            }
            if (!this.question.question) {
                this.errorQuestion = true;
            }
            console.log('Formulario de Preguntas no valido');
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Espere',
            text: 'Guardando información',
            allowOutsideClick: false
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.showLoading();
        let peticion;
        if (this.question.id) {
            peticion = this.questionService.actualizarQuestion(this.question);
        }
        else {
            if (!this.question.correct) {
                this.question.correct = false;
            }
            peticion = this.questionService.crearQuestion(this.question);
        }
        peticion.subscribe(resp => {
            localStorage.removeItem("questions");
            this.questionService.getQuestions()
                .subscribe(resp => {
                this.questions = resp;
                localStorage.setItem("questions", JSON.stringify(resp));
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: this.question.title + ": " + this.question.question,
                    text: 'Se actualizó correctamente',
                });
                this._location.back();
            });
        });
    }
    addTag(tag) {
        if (!this.question.tags) {
            this.question.tags = [];
        }
        this.question.tags.push(tag);
    }
    deleteTag(i) {
        this.question.tags.splice(i, 1);
    }
}
FormQuestionComponent.ɵfac = function FormQuestionComponent_Factory(t) { return new (t || FormQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
FormQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormQuestionComponent, selectors: [["app-form-question"]], inputs: { tags: "tags" }, decls: 58, vars: 17, consts: [[1, "row"], [1, "col-6"], [1, "col-6", "text-right"], ["routerLink", "/list", 1, "btn", "btn-danger", "mt-3"], [1, "fa", "fa-arrow-left"], [1, "row", "animated", "fadeIn", "faster"], [1, "col"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", 2, "display", "none"], ["type", "text", "placeholder", "Firebase ID", "name", "id", "disabled", "disabled", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["name", "topic", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "name", "title", "placeholder", "Pregunta", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "question", "placeholder", "Respuesta", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "btn btn-outline-success w-50", "type", "button", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger w-50", "type", "button", 3, "click", 4, "ngIf"], ["type", "text", "name", "note", "placeholder", "Nota", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "rounded", "border", "pt-2", "pb-2"], ["class", "rounded text-white bg-info p-1 ml-1", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", "btn-primary", "w-25"], [1, "fa", "fa-save"], [1, "text-danger"], ["type", "button", 1, "btn", "btn-outline-success", "w-50", 3, "click"], [1, "fa", "fa-smile-o"], ["type", "button", 1, "btn", "btn-outline-danger", "w-50", 3, "click"], [1, "fa", "fa-ambulance"], [1, "rounded", "text-white", "bg-info", "p-1", "ml-1"], ["aria-hidden", "true", 1, "cursor-pointer", 3, "click"], [1, "small", "rounded", "text-white", "bg-warning", "p-1", "mr-1", "mb-1", "cursor-pointer", "d-inline-block", 3, "click"]], template: function FormQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Formulario pregunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Regresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormQuestionComponent_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.guardarQuestion(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Firebase ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormQuestionComponent_Template_input_ngModelChange_16_listener($event) { return ctx.question.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Este campo es autogenerado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormQuestionComponent_Template_select_ngModelChange_22_listener($event) { return ctx.question.topic = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Seleccione Tema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FormQuestionComponent_option_25_Template, 2, 3, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FormQuestionComponent_small_26_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pregunta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormQuestionComponent_Template_input_ngModelChange_30_listener($event) { return ctx.question.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Respuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormQuestionComponent_Template_input_ngModelChange_34_listener($event) { return ctx.question.question = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, FormQuestionComponent_small_35_Template, 2, 0, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FormQuestionComponent_button_37_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, FormQuestionComponent_button_38_Template, 3, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nota");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormQuestionComponent_Template_textarea_ngModelChange_42_listener($event) { return ctx.question.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, FormQuestionComponent_span_47_Template, 4, 1, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Listado de tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, FormQuestionComponent_span_52_Template, 3, 1, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.question.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", ctx.errorTopic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.question.topic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topics);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorQuestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.question.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-danger", ctx.errorQuestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.question.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorQuestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question.correct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.question.correct);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.question.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.question.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1xdWVzdGlvbi9mb3JtLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-question',
                templateUrl: './form-question.component.html',
                styleUrls: ['./form-question.component.css']
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, { tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "rMhl":
/*!*************************************************************!*\
  !*** ./src/app/components/list-tags/list-tags.component.ts ***!
  \*************************************************************/
/*! exports provided: ListTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTagsComponent", function() { return ListTagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/tag", a1]; };
function ListTagsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, tag_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", tag_r3.name, " (", tag_r3.number, ")");
} }
function ListTagsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No hay registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListTagsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cargando tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Espere por favor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListTagsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListTagsComponent.ɵfac = function ListTagsComponent_Factory(t) { return new (t || ListTagsComponent)(); };
ListTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListTagsComponent, selectors: [["app-list-tags"]], inputs: { tags: "tags", questions: "questions", cargando: "cargando" }, decls: 8, vars: 3, consts: [[1, "row"], [1, "col-12"], ["class", "mb-1", 4, "ngFor", "ngForOf"], ["class", "alert alert-warning text-center mt-3 animated fadeIn faster", 4, "ngIf"], ["class", "alert alert-info text-center mt-3 animated fadeIn faster", 4, "ngIf"], [1, "mb-1"], [1, "white-space-pre", "small", "rounded", "text-white", "bg-warning", "p-1", "cursor-pointer", 3, "routerLink"], [1, "alert", "alert-warning", "text-center", "mt-3", "animated", "fadeIn", "faster"], [1, "alert-heading"], [1, "fa", "fa-exclamation", "fa-2x"], [1, "alert", "alert-info", "text-center", "mt-3", "animated", "fadeIn", "faster"], [1, "fa", "fa-refresh", "fa-spin", "fa-2x"], [1, "mb-0"]], template: function ListTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListTagsComponent_div_5_Template, 3, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListTagsComponent_div_6_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListTagsComponent_div_7_Template, 7, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cargando && ctx.tags.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cargando);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC10YWdzL2xpc3QtdGFncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-tags',
                templateUrl: './list-tags.component.html',
                styleUrls: ['./list-tags.component.css']
            }]
    }], function () { return []; }, { tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], questions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cargando: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "tKgD":
/*!************************************************!*\
  !*** ./src/app/pages/topic/topic.component.ts ***!
  \************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/question */ "RHvB");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/question.service */ "UcdY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");









function TopicComponent_div_17_ng_container_20_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function TopicComponent_div_17_ng_container_20_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function TopicComponent_div_17_ng_container_20_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r4.title, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r4.question, " ");
} }
function TopicComponent_div_17_ng_container_20_span_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopicComponent_div_17_ng_container_20_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopicComponent_div_17_ng_container_20_span_10_span_2_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r4.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r4.question, " ");
} }
function TopicComponent_div_17_ng_container_20_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tags_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tags_r15.name, " ");
} }
function TopicComponent_div_17_ng_container_20_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r4.note);
} }
const _c0 = function (a1) { return ["/form-data", a1]; };
function TopicComponent_div_17_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TopicComponent_div_17_ng_container_20_i_6_Template, 1, 0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TopicComponent_div_17_ng_container_20_i_7_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TopicComponent_div_17_ng_container_20_span_9_Template, 5, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TopicComponent_div_17_ng_container_20_span_10_Template, 4, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TopicComponent_div_17_ng_container_20_span_12_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicComponent_div_17_ng_container_20_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const question_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.borrarElemento(question_r4, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TopicComponent_div_17_ng_container_20_div_22_Template, 5, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const question_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r4.number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r4.correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !question_r4.correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !question_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", question_r4.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r4.n_questions, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r4.n_corrects, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, question_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", question_r4.note);
} }
const _c1 = function (a1) { return { itemsPerPage: 1000, currentPage: a1 }; };
function TopicComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Pregunta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " N\u00BA de veces");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "preguntadas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " N\u00BA de veces");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "acertadas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TopicComponent_div_17_ng_container_20_Template, 24, 12, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pagination-controls", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TopicComponent_div_17_Template_pagination_controls_pageChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 1, ctx_r0.allQuestions, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r0.p)));
} }
function TopicComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cargando");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Espere por favor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopicComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicComponent_div_20_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const tag_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.filterQuestionsTagsTopics(tag_r21.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r21.name, " ");
} }
class TopicComponent {
    constructor(questionService, router, route, auth) {
        this.questionService = questionService;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.topic = new src_app_interfaces_question__WEBPACK_IMPORTED_MODULE_1__["Topic"]();
        this.topics = [];
        this.questions = [];
        this.questionsTopics = [];
        this.questionsUser = [];
        this.allQuestions = [];
        this.dataQuestions = [];
        this.topicTagsQuestions = [];
        this.tags = [];
        this.topicTags = [];
        this.users = [];
        this.p = 1;
        this.cargando = false;
        this.cargandoTags = false;
        this.cargandoTopics = false;
        this.cargandoUsers = false;
        this.cargandoQuestions = false;
        this.cargandoQuestionsUser = false;
    }
    ngOnInit() {
        this.cargando = true;
        this.cargandoTags = true;
        this.cargandoTopics = true;
        this.cargandoUsers = true;
        this.cargandoQuestions = true;
        this.cargandoQuestionsUser = true;
        const id = this.route.snapshot.paramMap.get('id');
        this.users = JSON.parse(localStorage.getItem("users"));
        this.tags = JSON.parse(localStorage.getItem("tags"));
        this.questionsUser = JSON.parse(localStorage.getItem("questionsUser"));
        this.topics = JSON.parse(localStorage.getItem("topics"));
        this.allQuestions = JSON.parse(localStorage.getItem("questions"));
        this.dataQuestions = this.allQuestions;
        this.auth.userProfile$.subscribe(perfil => {
            this.emailUser = perfil.email;
            if (!this.topics) {
                this.testCargas();
                this.cargandoTopics = false;
            }
            else {
                this.topics.forEach(topic => {
                    if (topic.id == id) {
                        this.topic = topic;
                    }
                });
                this.testCargas();
                this.cargandoTopics = false;
            }
            if (!this.tags) {
                this.questionService.getTags()
                    .subscribe(resp => {
                    this.tags = resp;
                    localStorage.setItem("tags", JSON.stringify(this.tags));
                    this.cargandoTags = false;
                    this.testCargas();
                });
            }
            else {
                this.cargandoTags = false;
                this.testCargas();
            }
            if (!this.allQuestions) {
                this.questionService.getQuestions()
                    .subscribe(resp => {
                    this.allQuestions = resp;
                    localStorage.setItem("questions", JSON.stringify(this.allQuestions));
                    this.allQuestions = this.getQuestionsTopics(id, this.allQuestions);
                    this.cargandoQuestions = false;
                    this.testCargas();
                });
            }
            else {
                this.allQuestions = this.getQuestionsTopics(id, this.allQuestions);
                this.cargandoQuestions = false;
                this.testCargas();
            }
            if (!this.users) {
                this.questionService.getUsers().subscribe(resp => {
                    this.users = resp;
                    localStorage.setItem("users", JSON.stringify(this.users));
                    this.users.forEach(resp => {
                        if (resp.email == this.emailUser) {
                            return this.idUser = resp.id;
                        }
                        this.cargandoUsers = false;
                        this.testCargas();
                    });
                });
            }
            else {
                this.users.forEach(resp => {
                    if (resp.email == this.emailUser) {
                        return this.idUser = resp.id;
                    }
                });
                this.cargandoUsers = false;
                this.testCargas();
            }
            if (!this.questionsUser) {
                this.questionService.getQuestionsUser(this.idUser)
                    .subscribe(resp => {
                    this.questionsUser = resp;
                    localStorage.setItem("questionsUser", JSON.stringify(resp));
                    this.cargandoQuestionsUser = false;
                    this.testCargas();
                });
            }
            else {
                this.cargandoQuestionsUser = false;
                this.testCargas();
            }
        });
    }
    testCargas() {
        if (!this.cargandoTags && !this.cargandoTopics && !this.cargandoUsers && !this.cargandoQuestions && !this.cargandoQuestionsUser) {
            this.cargando = false;
            this.allQuestions.reverse();
            this.mergeDatas();
            this.countQuestions(this.allQuestions);
            this.countTags(this.questions, this.tags);
            this.filterTagsTopics();
        }
    }
    filterQuestionsTagsTopics(id) {
        this.allQuestions.forEach(question => {
            if (question.tags) {
                question.tags.forEach(tag => {
                    if (tag.id == id) {
                        this.topicTagsQuestions.push(question);
                    }
                });
            }
        });
        this.allQuestions = this.topicTagsQuestions;
    }
    filterTagsTopics() {
        this.topicTags = [];
        this.tags.forEach(tag => {
            this.numberTag = 0;
            this.allQuestions.forEach(question => {
                if (question.tags) {
                    question.tags.forEach(questionTag => {
                        if (tag.id == questionTag.id && !this.numberTag) {
                            this.topicTags.push(tag);
                            this.numberTag++;
                        }
                    });
                }
            });
        });
    }
    mergeDatas() {
        this.questionsUser.forEach(questionUser => {
            this.dataQuestions.forEach(question => {
                if (questionUser.id == question.id) {
                    question.n_corrects = questionUser.n_corrects;
                    question.n_questions = questionUser.n_questions;
                }
            });
        });
    }
    countTags(questions, tags) {
        tags.forEach(tag => {
            this.numberTag = 0;
            questions.forEach(tags => {
                tags.tags.forEach(tags => {
                    if (tag.id == tags.id) {
                        this.numberTag++;
                    }
                });
            });
            tag.number = this.numberTag;
        });
    }
    countQuestions(questions) {
        this.numberQuestions = 0;
        questions.forEach(question => {
            this.numberQuestions++;
            question.number = this.numberQuestions;
        });
    }
    getQuestionsTopics(id, questions) {
        questions.forEach(question => {
            if (question.topic.id == id) {
                this.questionsTopics.push(question);
            }
        });
        return this.questionsTopics;
    }
    borrarElemento(question, i) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: '¿Estás seguro?',
            text: `¿Está seguro que desea borrar a ${question.title}: ${question.question} ?`,
            showConfirmButton: true,
            showCancelButton: true
        }).then(resp => {
            if (resp.value) {
                this.allQuestions.splice(i, 1);
                this.questionService.borrarAudio(question.id).subscribe();
                localStorage.removeItem("questions");
                this.questionService.getQuestions()
                    .subscribe(resp => {
                    this.allQuestions = resp;
                    localStorage.setItem("questions", JSON.stringify(this.allQuestions));
                    this.allQuestions = this.getQuestionsTopics(this.id, this.allQuestions);
                    this.cargandoQuestions = false;
                    this.testCargas();
                });
            }
        });
    }
}
TopicComponent.ɵfac = function TopicComponent_Factory(t) { return new (t || TopicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
TopicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopicComponent, selectors: [["app-topic"]], decls: 21, vars: 5, consts: [[1, "row"], [1, "col-8"], [1, "small"], [1, "col-4", "text-right"], ["routerLink", "/list", 1, "btn", "btn-danger", "mt-3", "mr-2"], [1, "fa", "fa-arrow-left"], ["routerLink", "/form-data/nuevo", 1, "btn", "btn-primary", "mt-3"], [1, "fa", "fa-plus"], [1, "col-9"], ["class", "animated fadeIn faster", 4, "ngIf"], ["class", "alert alert-info text-center mt-3 animated fadeIn faster", 4, "ngIf"], [1, "col-3"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [1, "animated", "fadeIn", "faster"], [1, "text-white", "bg-dark", "pt-2", "pb-2", "mb-1"], [1, "col-1", "small", "text-center"], [1, "col-7", "small"], [1, "col-1", "small", "text-center", "p-0"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "mt-3", "text-center"], [3, "pageChange"], [1, "table__row", "pt-1", "pb-1"], ["class", "fa fa-check text-success", 4, "ngIf"], ["class", "fa fa-times text-danger", 4, "ngIf"], [1, "col-7"], ["class", "row", 4, "ngIf"], ["class", "small", 4, "ngIf"], ["class", "small rounded text-white bg-warning pl-1 pr-1 mr-1", 4, "ngFor", "ngForOf"], [1, "btn", "btn-info", "p-0", "w-50", 3, "routerLink"], [1, "fa", "fa-pencil"], [1, "btn", "btn-danger", "p-0", "w-50", 3, "click"], [1, "fa", "fa-trash"], ["class", "row mt-2", 4, "ngIf"], [1, "m-0"], [1, "fa", "fa-check", "text-success"], [1, "fa", "fa-times", "text-danger"], [1, "col-6", "small"], [4, "ngIf"], [1, "small", "rounded", "text-white", "bg-warning", "pl-1", "pr-1", "mr-1"], [1, "row", "mt-2"], [1, "col-7", "small", "text-secondary"], [1, "alert", "alert-info", "text-center", "mt-3", "animated", "fadeIn", "faster"], [1, "alert-heading"], [1, "fa", "fa-refresh", "fa-spin", "fa-2x"], [1, "mb-0"], [1, "mb-2"], [1, "white-space-pre", "small", "rounded", "text-white", "bg-warning", "p-1", "cursor-pointer", 3, "click"]], template: function TopicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Regresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TopicComponent_div_17_Template, 24, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TopicComponent_div_18_Template, 7, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TopicComponent_div_20_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tema ", ctx.topic.numberName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.topic.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cargando && ctx.allQuestions.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topicTags);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"]], styles: [".table[_ngcontent-%COMP%]{\r\n}\r\n.table[_ngcontent-%COMP%]   .table__row[_ngcontent-%COMP%]:nth-of-type(8n + 1), .table[_ngcontent-%COMP%]   .table__row[_ngcontent-%COMP%]:nth-of-type(8n + 2), .table[_ngcontent-%COMP%]   .table__row[_ngcontent-%COMP%]:nth-of-type(8n + 3), .table[_ngcontent-%COMP%]   .table__row[_ngcontent-%COMP%]:nth-of-type(8n + 4){\r\n    background-color: #f8f9fa;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9waWMvdG9waWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7Ozs7SUFJSSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90b3BpYy90b3BpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xyXG59XHJcbi50YWJsZSAudGFibGVfX3JvdzpudGgtb2YtdHlwZSg4biArIDEpLFxyXG4udGFibGUgLnRhYmxlX19yb3c6bnRoLW9mLXR5cGUoOG4gKyAyKSxcclxuLnRhYmxlIC50YWJsZV9fcm93Om50aC1vZi10eXBlKDhuICsgMyksXHJcbi50YWJsZSAudGFibGVfX3JvdzpudGgtb2YtdHlwZSg4biArIDQpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topic',
                templateUrl: './topic.component.html',
                styleUrls: ['./topic.component.css']
            }]
    }], function () { return [{ type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.guard */ "+VzF");
/* harmony import */ var _pages_form_data_form_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/form-data/form-data.component */ "dq7V");
/* harmony import */ var _pages_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/list/list.component */ "kzYG");
/* harmony import */ var _pages_tag_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/tag/tag.component */ "BuYc");
/* harmony import */ var _pages_topic_topic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/topic/topic.component */ "tKgD");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/user/user.component */ "3OJA");
/* harmony import */ var _pages_tests_tests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/tests/tests.component */ "ILRW");













const routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'user', component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'tests', component: _pages_tests_tests_component__WEBPACK_IMPORTED_MODULE_10__["TestsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'tests-topic/:id', component: _pages_tests_tests_component__WEBPACK_IMPORTED_MODULE_10__["TestsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'tests-tags/:id', component: _pages_tests_tests_component__WEBPACK_IMPORTED_MODULE_10__["TestsComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'list', component: _pages_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'form-data/:id', component: _pages_form_data_form_data_component__WEBPACK_IMPORTED_MODULE_4__["FormDataComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'tag/:id', component: _pages_tag_tag_component__WEBPACK_IMPORTED_MODULE_6__["TagComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'topic/:id', component: _pages_topic_topic_component__WEBPACK_IMPORTED_MODULE_7__["TopicComponent"], canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map