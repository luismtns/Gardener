(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab4/tab4.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"Header\">\n    <img src=\"/assets/images/logo_v1.png\" class=\"img-fluid Header__logo\" alt=\"Logo Gardener\">\n    <a (click)=\"logout()\">\n      Sair\n    </a>\n</header>\n<ion-content class=\"ion-padding\">\n  <h3 class=\"title_internal\">\n    <ion-icon name=\"person\"></ion-icon>\n    Perfil de {{user_info?.nome.substring(0,user_info?.nome.indexOf(' '))}}\n  </h3>\n  <form [formGroup]=\"register_form\" (submit)=\"updateUserForm(register_form.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-margin-bottom\" size=\"12\">\n          <div class=\"ion-input-icon\">\n            <ion-icon name=\"person\"></ion-icon>\n            <ion-input type=\"text\" formControlName=\"nome\" placeholder=\"Seu nome, por favor!\"></ion-input>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-margin-bottom\" size=\"12\">\n          <div class=\"ion-input-icon\">\n            <ion-icon name=\"phone-portrait\"></ion-icon>\n            <ion-input type=\"tel\" mask=\"(00)00000-0000\" formControlName=\"telefone\" placeholder=\"Insira seu telefone e DDD\"></ion-input>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"12\" class=\"ion-text-end\">\n          <button type=\"submit\" class=\"btn-primary\">\n            <ion-spinner *ngIf=\"spinner\" name=\"crescent\" color=\"primary\"></ion-spinner>\n            <ion-template *ngIf=\"!spinner\">\n              Atualizar\n            </ion-template>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");
/* harmony import */ var _components_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components/components.module */ "./src/app/components/components/components.module.ts");
/* harmony import */ var ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask-ionic */ "./node_modules/ngx-mask-ionic/fesm5/ngx-mask-ionic.js");









var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"] }]),
                _components_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_8__["NgxMaskIonicModule"]
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var Tab4Page = /** @class */ (function () {
    function Tab4Page(authService, router, navCtrl, formBuilder, alertController) {
        this.authService = authService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.error_message = '';
        this.spinner = false;
        this.register_form = this.formBuilder.group({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            telefone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)
            ])),
        });
        this.getUserDetails();
    }
    Tab4Page.prototype.getUserDetails = function () {
        var _this = this;
        this.authService.userDetails().then(function (res) {
            _this.user_info = res;
            console.log(_this.user_info);
            _this.register_form.get('nome').setValue(_this.user_info['nome']);
            var tel = _this.user_info['ddd'] + _this.user_info['telefone'];
            _this.register_form.get('telefone').setValue(tel);
        });
    };
    Tab4Page.prototype.updateUserForm = function (value) {
        var _this = this;
        if (this.register_form.invalid) {
            return false;
        }
        this.spinner = true;
        this.authService.updateUser(value)
            .then(function (res) {
            _this.spinner = false;
            _this.getUserDetails();
            _this.successAlert();
        }, function (err) {
            _this.spinner = false;
            console.log(err);
        });
    };
    Tab4Page.prototype.successAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Atualizado',
                            message: 'Dados atualizados com sucesso!',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.logout = function () {
        var _this = this;
        this.authService.logoutUser()
            .then(function (res) {
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
        });
    };
    Tab4Page.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: __webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab4/tab4.page.html"),
            styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module-es5.js.map