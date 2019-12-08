(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<div class=\"login\">\n  <img src=\"/assets/images/logo_v1_branco.png\" class=\"img-fluid login__logo\" alt=\"Logo Gardener\">\n  <h5 class=\"login__subtitle\">\n    Faça sol ou faça chuva, cultive no conforto do seu lar.\n  </h5>\n  <div class=\"menu\">\n    <h3 class=\"menu__title\">\n        Seja bem-vindo ao seu<br>\n        <strong>mais novo Cultivo Indoor!</strong>\n    </h3>\n    <div *ngIf=\"!show_login&&!show_register\">\n      <button (click)=\"changeLoginRegister('L')\" class=\"btn-primary\">Entrar</button>\n      <button (click)=\"changeLoginRegister('R')\" class=\"btn-secondary\">Cadastrar</button>\n    </div>\n    <div *ngIf=\"show_login\">\n      <form [formGroup]=\"validations_form\" (submit)=\"loginUser(validations_form.value)\">\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-margin-bottom\" size=\"12\">\n              <div class=\"input-icon\">\n                <ion-icon name=\"at\"></ion-icon>\n                <ion-input type=\"email\" formControlName=\"email\" placeholder=\"email@dominio.com\"></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-margin-bottom\" size=\"12\">\n              <div class=\"input-icon\">\n                <ion-icon name=\"lock\"></ion-icon>\n                <ion-input type=\"password\" formControlName=\"password\" placeholder=\"••••••••••••••••\"></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"8\">\n              <a routerLink=\"recuperar-senha\">Esqueceu a senha?</a>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-text-end\">\n              <button type=\"submit\" class=\"btn-primary btn-primary--small\"><ion-icon name=\"arrow-round-forward\"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <label class=\"error-message\">{{error_message}}</label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <p>Ainda não tem conta?</p>\n              <a (click)=\"changeLoginRegister('R')\">Cadastre-se</a>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n    <div *ngIf=\"show_register\">\n      <form [formGroup]=\"register_form\" (submit)=\"tryRegister(register_form.value)\">\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"ion-margin-bottom\" size=\"12\">\n              <div class=\"input-icon\">\n                <ion-icon name=\"person\"></ion-icon>\n                <ion-input type=\"text\" formControlName=\"nome\" placeholder=\"Seu nome, por favor!\"></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-margin-bottom\" size=\"12\">\n              <div class=\"input-icon\">\n                <ion-icon name=\"phone-portrait\"></ion-icon>\n                <ion-input type=\"tel\" formControlName=\"telefone\"  mask=\"(00)00000-0000\" placeholder=\"Insira seu telefone e DDD\"></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-margin-bottom\" size=\"12\">\n              <div class=\"input-icon\">\n                <ion-icon name=\"at\"></ion-icon>\n                <ion-input type=\"email\" formControlName=\"email\" placeholder=\"email@dominio.com\"></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-margin-bottom\" size=\"12\">\n              <div class=\"input-icon\">\n                <ion-icon name=\"lock\"></ion-icon>\n                <ion-input type=\"password\" formControlName=\"password\" placeholder=\"••••••••••••••••\"></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"8\">\n              <a routerLink=\"recuperar-senha\">Esqueceu a senha?</a>\n            </ion-col>\n            <ion-col size=\"4\" class=\"ion-text-end\">\n              <button type=\"submit\" class=\"btn-primary btn-primary--small\"><ion-icon name=\"arrow-round-forward\"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <p>Já é cadastrado?</p>\n              <a (click)=\"changeLoginRegister('L')\">Entre aqui! :)</a>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n  </div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask-ionic */ "./node_modules/ngx-mask-ionic/fesm2015/ngx-mask-ionic.js");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_7__["NgxMaskIonicModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  display: block;\n  height: 100%;\n  width: 100%;\n  background: var(--ion-color-dark) url(\"/assets/images/background_home.jpg\") no-repeat center top;\n  background-size: cover;\n  position: relative;\n  top: 0;\n  padding: 1em;\n}\n.login__logo {\n  height: 5em;\n}\n.login__title {\n  font-size: 2em;\n  color: #ffffff;\n  margin: 1em 0 0;\n  font-weight: bold;\n}\n.login__subtitle {\n  font-size: 0.8em;\n  color: #ffffff;\n}\n.menu {\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  max-height: 75vh;\n  min-height: 30vh;\n  overflow-x: auto;\n  margin: 0 -1em;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 2.5em 2.5em 0 0;\n  padding: 0.5em 2em 2em;\n  -webkit-transition: height 0.6s ease-in;\n  transition: height 0.6s ease-in;\n}\n.menu__title {\n  font-size: 1em;\n  text-align: left;\n  color: #ffffff;\n  margin-bottom: 1em;\n}\n.menu__title strong {\n  font-size: 1.2em;\n}\n.menu .btn-primary {\n  margin-right: 1em;\n}\n.menu .input-icon {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.menu .input-icon ion-icon {\n  color: #FFFFFF;\n  background-color: rgba(255, 255, 255, 0.1);\n  padding: 0.85em;\n  font-size: 1em;\n}\n.menu .btn-primary--small {\n  margin-right: 0;\n}\n.menu .btn-primary--small ion-icon {\n  font-size: 2em;\n}\np {\n  color: var(--ion-color-light);\n  margin: 0 0 1em;\n  font-size: 0.8em;\n}\na {\n  color: var(--ion-color-light);\n  margin: 0 0 1em;\n  font-size: 0.8em;\n  text-decoration: underline;\n}\na:hover {\n  color: var(--ion-color-light-shade);\n}\n.error-message {\n  color: var(--ion-color-danger);\n  font-size: 0.8em;\n}\nion-input {\n  --background: rgba(255,255,255,0.1);\n  --color: #FFFFFF;\n  --padding-bottom: var(--padding);\n  --padding-end: var(--padding);\n  --padding-start: var(--padding);\n  --padding-top: var(--padding);\n  --placeholder-color:var(--ion-color-primary);\n  --placeholder-opacity: 0.8;\n}\nion-input.ion-invalid.ion-touched {\n  outline: 1px solid rgba(255, 0, 0, 0.4);\n}\n.ion-input-icon {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: rgba(154, 154, 154, 0.25) 0px 0px 70px;\n  padding: var(--padding);\n}\n.ion-input-icon ion-icon {\n  color: var(--ion-color-primary-tint);\n  padding: 0.85em;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxMdWlzXFxEb2N1bWVudHNcXEdhcmRlbmVyX0FwcFxcR2FyZGVuZXIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxMdWlzXFxEb2N1bWVudHNcXEdhcmRlbmVyX0FwcFxcR2FyZGVuZXIvc3JjXFx0aGVtZVxcZm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0dBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtBQ0VKO0FEQUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNFSjtBRENBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0VBQUEsK0JBQUE7QUNFRjtBRERFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDR0o7QURGSTtFQUNFLGdCQUFBO0FDSU47QURERTtFQUNFLGlCQUFBO0FDR0o7QURERTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0dKO0FERkk7RUFDRSxjQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0lOO0FEREU7RUFDRSxlQUFBO0FDR0o7QURGSTtFQUNFLGNBQUE7QUNJTjtBREFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHRjtBRERBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0lGO0FESEU7RUFDRSxtQ0FBQTtBQ0tKO0FEREE7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0FDSUY7QUN0RkE7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLDBCQUFBO0FEeUZGO0FDdkZBO0VBQ0UsdUNBQUE7QUQwRkY7QUN4RkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrREFBQTtFQUNBLHVCQUFBO0FEMkZGO0FDMUZFO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRDRGSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspIHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9ob21lLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgJl9fbG9nb3tcclxuICAgIGhlaWdodDogNWVtO1xyXG4gIH1cclxuICAmX190aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDFlbSAwIDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgJl9fc3VidGl0bGV7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcbi5tZW51e1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbiAgbWluLWhlaWdodDogMzB2aDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG1hcmdpbjogMCAtMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcclxuICBib3JkZXItcmFkaXVzOiAyLjVlbSAyLjVlbSAwIDA7XHJcbiAgcGFkZGluZzogMC41ZW0gMmVtIDJlbTtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC42cyBlYXNlLWluO1xyXG4gICZfX3RpdGxle1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBzdHJvbmd7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeXtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gIH1cclxuICAuaW5wdXQtaWNvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gICAgICBwYWRkaW5nOiAwLjg1ZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuLXByaW1hcnktLXNtYWxse1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5we1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIG1hcmdpbjogMCAwIDFlbTtcclxuICBmb250LXNpemU6MC44ZW07XHJcbn1cclxuYXtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBtYXJnaW46IDAgMCAxZW07XHJcbiAgZm9udC1zaXplOjAuOGVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICB9XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdle1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG5cclxufVxyXG5AaW1wb3J0ICcuLy4uLy4uL3RoZW1lL2Zvcm0nOyIsIi5sb2dpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyaykgdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9ob21lLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5sb2dpbl9fbG9nbyB7XG4gIGhlaWdodDogNWVtO1xufVxuLmxvZ2luX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAxZW0gMCAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5sb2dpbl9fc3VidGl0bGUge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtYXgtaGVpZ2h0OiA3NXZoO1xuICBtaW4taGVpZ2h0OiAzMHZoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW46IDAgLTFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiAyLjVlbSAyLjVlbSAwIDA7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbSAyZW07XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjZzIGVhc2UtaW47XG59XG4ubWVudV9fdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5tZW51X190aXRsZSBzdHJvbmcge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLm1lbnUgLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4ubWVudSAuaW5wdXQtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1lbnUgLmlucHV0LWljb24gaW9uLWljb24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nOiAwLjg1ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLm1lbnUgLmJ0bi1wcmltYXJ5LS1zbWFsbCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tZW51IC5idG4tcHJpbWFyeS0tc21hbGwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDJlbTtcbn1cblxucCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBtYXJnaW46IDAgMCAxZW07XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbmEge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgbWFyZ2luOiAwIDAgMWVtO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAtLWNvbG9yOiAjRkZGRkZGO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFkZGluZyk7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFkZGluZyk7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmcpO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjg7XG59XG5cbmlvbi1pbnB1dC5pb24taW52YWxpZC5pb24tdG91Y2hlZCB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMC40KTtcbn1cblxuLmlvbi1pbnB1dC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTU0LCAxNTQsIDE1NCwgMC4yNSkgMHB4IDBweCA3MHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcbn1cbi5pb24taW5wdXQtaWNvbiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgcGFkZGluZzogMC44NWVtO1xuICBmb250LXNpemU6IDFlbTtcbn0iLCJpb24taW5wdXR7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgLS1jb2xvclx0OiAjRkZGRkZGO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmcpO1xyXG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZGRpbmcpO1xyXG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFkZGluZyk7XHJcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZyk7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjg7XHJcbn1cclxuaW9uLWlucHV0Lmlvbi1pbnZhbGlkLmlvbi10b3VjaGVke1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMC40KTtcclxufVxyXG4uaW9uLWlucHV0LWljb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgxNTQsMTU0LDE1NCwwLjI1KSAwcHggMHB4IDcwcHg7XHJcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XHJcbiAgaW9uLWljb257XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XHJcbiAgICBwYWRkaW5nOiAwLjg1ZW07XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginPage = class LoginPage {
    constructor(navCtrl, authService, formBuilder, router, alertController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertController = alertController;
        this.show_login = false;
        this.show_register = false;
        this.error_message = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'E-mail não pode estar vazio!' },
                { type: 'email', message: 'Por favor, insira um e-mail válido!' }
            ],
            'password': [
                { type: 'required', message: 'Senha não pode estar vazio!' },
                { type: 'minlength', message: 'A senha precisa de pelo menos 8 caracteres.' }
            ]
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
        });
        this.register_form = this.formBuilder.group({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            telefone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
        });
    }
    changeLoginRegister(login_type) {
        if (!login_type) {
            return false;
        }
        if (login_type == 'L') {
            this.show_login = true;
            this.show_register = false;
        }
        else if (login_type == 'R') {
            this.show_login = false;
            this.show_register = true;
        }
        else {
            return false;
        }
    }
    loginUser(value) {
        if (this.validations_form.invalid) {
            return false;
        }
        this.authService.loginUser(value)
            .then(res => {
            this.error_message = "";
            this.router.navigate(['/dashboard/tab1']);
        }, err => {
            console.log(err);
            this.error_message = err.message;
        });
    }
    tryRegister(value) {
        if (this.register_form.invalid) {
            return false;
        }
        this.authService.registerUser(value)
            .then(res => {
            console.log(res);
            this.error_message = "";
            this.successRegisterAlert();
            this.changeLoginRegister('L');
        }, err => {
            console.log(err);
            this.error_message = err.message;
        });
    }
    successRegisterAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cadastrado com sucesso!',
                message: 'Continue no login com os dados cadastrados.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map