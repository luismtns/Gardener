(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ladding-ladding-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/ladding/ladding.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ladding/ladding.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<ion-slides #ladding_slider pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let item of ladding_itens\" class=\"ladding\">\n      <div class=\"ladding__header\">\n          <img src=\"/assets/images/logo_v1_branco.png\" class=\"img-fluid logo\" alt=\"Logo Gardener\">\n          <a (click)=\"skipLadding()\">\n            pular\n          </a>\n      </div>\n      <h1 class=\"ladding__step\">\n        <span class=\"ladding__step--title\">\n          passo\n        </span>\n        {{item.step}}\n      </h1>\n      <div class=\"menu\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"12\">\n            <h3 [innerHTML]=\"item.title\" class=\"menu__title\"></h3>\n            <p [innerHTML]=\"item.text\" class=\"menu__text\">\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-align-items-center ion-justify-content-around\" *ngIf=\"!item.last\">\n          <ion-col (click)=\"ladding_slider.slidePrev()\" class=\"ion-text-left\">\n            <a >voltar</a>\n          </ion-col>\n          <ion-col class=\"ion-text-end\">\n            <button (click)=\"ladding_slider.slideNext()\" class=\"btn-primary btn-primary--small\">\n              <ion-icon name=\"arrow-round-forward\"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-align-items-center ion-justify-content-around\" *ngIf=\"item.last\">\n          <ion-col size=\"12\">\n            <button (click)=\"skipLadding()\" class=\"btn-primary\">\n              Começar\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  </ion-content>"

/***/ }),

/***/ "./src/app/ladding/ladding.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ladding/ladding.module.ts ***!
  \*******************************************/
/*! exports provided: LaddingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddingPageModule", function() { return LaddingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ladding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ladding.page */ "./src/app/ladding/ladding.page.ts");







const routes = [
    {
        path: '',
        component: _ladding_page__WEBPACK_IMPORTED_MODULE_6__["LaddingPage"]
    }
];
let LaddingPageModule = class LaddingPageModule {
};
LaddingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ladding_page__WEBPACK_IMPORTED_MODULE_6__["LaddingPage"]]
    })
], LaddingPageModule);



/***/ }),

/***/ "./src/app/ladding/ladding.page.scss":
/*!*******************************************!*\
  !*** ./src/app/ladding/ladding.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ladding {\n  background: var(--ion-color-dark) url(\"/assets/images/background_dash.jpg\") no-repeat center top;\n  background-size: cover;\n  background-position: center center;\n  height: 100vh;\n  position: relative;\n  display: block;\n}\n.ladding__header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 1em 1em;\n}\n.ladding__header a {\n  color: var(--ion-color-light);\n  text-decoration: underline;\n}\n.ladding__header .logo {\n  max-height: 4em;\n}\n.ladding__step {\n  font-size: 6em;\n  color: var(--ion-color-light);\n  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);\n  margin: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0 0.5em;\n  margin: 0 auto;\n  position: relative;\n  margin-top: 0.5em;\n  font-weight: bold;\n}\n.ladding__step--title {\n  font-size: 0.3em;\n  color: var(--ion-color-light);\n  text-shadow: none;\n  margin: 0;\n  font-weight: normal;\n  position: absolute;\n  left: 0;\n}\n.ladding .menu {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  max-height: 75vh;\n  min-height: 30vh;\n  overflow-x: auto;\n  background-color: rgba(33, 33, 33, 0.8);\n  border-radius: 2.5em 2.5em 0 0;\n  padding: 0.5em 2em 2em;\n  -webkit-transition: height 0.6s ease-in;\n  transition: height 0.6s ease-in;\n}\n.ladding .menu__title {\n  font-size: 1em;\n  text-align: left;\n  color: #ffffff;\n  margin-bottom: 1em;\n  width: 100%;\n  text-align: center;\n}\n.ladding .menu__title strong {\n  font-size: 1.2em;\n}\n.ladding .menu__text {\n  font-size: 0.8em;\n  text-align: left;\n  color: var(--ion-color-primary);\n  margin-top: 0;\n  margin-bottom: 1em;\n  width: 100%;\n  text-align: left;\n  font-weight: normal;\n}\n.ladding .menu a {\n  color: var(--ion-color-light);\n}\n.ladding .menu .btn-primary {\n  margin-right: 1em;\n}\n.ladding .menu .input-icon {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.ladding .menu .input-icon ion-icon {\n  color: #FFFFFF;\n  background-color: rgba(255, 255, 255, 0.1);\n  padding: 0.85em;\n  font-size: 1em;\n}\n.ladding .menu .btn-primary--small {\n  margin-right: 0;\n}\n.ladding .menu .btn-primary--small ion-icon {\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFkZGluZy9DOlxcVXNlcnNcXEx1aXNcXERvY3VtZW50c1xcR2FyZGVuZXJfQXBwXFxHYXJkZW5lci9zcmNcXGFwcFxcbGFkZGluZ1xcbGFkZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2xhZGRpbmcvbGFkZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnR0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRERJO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtBQ0dOO0FEREk7RUFDRSxlQUFBO0FDR047QURBRTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLDhDQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEREk7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUNHTjtBREFFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1Q0FBQTtFQUFBLCtCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0dOO0FERk07RUFDRSxnQkFBQTtBQ0lSO0FEREk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dOO0FEREk7RUFDRSw2QkFBQTtBQ0dOO0FEREk7RUFDRSxpQkFBQTtBQ0dOO0FEREk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNHTjtBREZNO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNJUjtBRERJO0VBQ0UsZUFBQTtBQ0dOO0FERk07RUFDRSxjQUFBO0FDSVIiLCJmaWxlIjoic3JjL2FwcC9sYWRkaW5nL2xhZGRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhZGRpbmd7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspIHVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9kYXNoLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gICZfX2hlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMWVtIDFlbTtcclxuICAgIGF7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICAgIC5sb2dve1xyXG4gICAgICBtYXgtaGVpZ2h0OiA0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX3N0ZXB7XHJcbiAgICBmb250LXNpemU6IDZlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAmLS10aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAwLjNlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1lbnV7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDc1dmg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDMzLCAzMywgMC44KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIuNWVtIDIuNWVtIDAgMDtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDJlbSAyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC42cyBlYXNlLWluO1xyXG4gICAgJl9fdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBzdHJvbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOztcclxuICAgIH1cclxuICAgIC5idG4tcHJpbWFyeXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtaWNvbntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuODVlbTtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1wcmltYXJ5LS1zbWFsbHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIi5sYWRkaW5nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspIHVybChcIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfZGFzaC5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubGFkZGluZ19faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxZW0gMWVtO1xufVxuLmxhZGRpbmdfX2hlYWRlciBhIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmxhZGRpbmdfX2hlYWRlciAubG9nbyB7XG4gIG1heC1oZWlnaHQ6IDRlbTtcbn1cbi5sYWRkaW5nX19zdGVwIHtcbiAgZm9udC1zaXplOiA2ZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxhZGRpbmdfX3N0ZXAtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjNlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cbi5sYWRkaW5nIC5tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNzV2aDtcbiAgbWluLWhlaWdodDogMzB2aDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMzMsIDMzLCAwLjgpO1xuICBib3JkZXItcmFkaXVzOiAyLjVlbSAyLjVlbSAwIDA7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbSAyZW07XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjZzIGVhc2UtaW47XG59XG4ubGFkZGluZyAubWVudV9fdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sYWRkaW5nIC5tZW51X190aXRsZSBzdHJvbmcge1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxhZGRpbmcgLm1lbnVfX3RleHQge1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmxhZGRpbmcgLm1lbnUgYSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuLmxhZGRpbmcgLm1lbnUgLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4ubGFkZGluZyAubWVudSAuaW5wdXQtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxhZGRpbmcgLm1lbnUgLmlucHV0LWljb24gaW9uLWljb24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBwYWRkaW5nOiAwLjg1ZW07XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmxhZGRpbmcgLm1lbnUgLmJ0bi1wcmltYXJ5LS1zbWFsbCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5sYWRkaW5nIC5tZW51IC5idG4tcHJpbWFyeS0tc21hbGwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ladding/ladding.page.ts":
/*!*****************************************!*\
  !*** ./src/app/ladding/ladding.page.ts ***!
  \*****************************************/
/*! exports provided: LaddingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddingPage", function() { return LaddingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LaddingPage = class LaddingPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.ladding_itens = [
            {
                'step': '01',
                'title': '<strong>Olá, bem vindx ao Gardener!</strong><br>sua nova horta automática ;)',
                'text': 'Nas próximas telas explicaremos como fazer a conexão do app à sua estufa. Estamos aqui para facilitar o plantio e deixar sua vida mais saudável!',
                'last': false
            },
            {
                'step': '02',
                'title': 'Primeiramente, você irá fazer a conexão do seu aparelho com a sua estufa!',
                'text': 'Sua estufa Gardener e seu celular devem estar conectados via Bluetooth para fazer a devida conexão entre os dois dispositivos.',
                'last': false
            },
            {
                'step': '03',
                'title': 'Hora de selecionar seus pacotes de plantio!',
                'text': 'Após conectados, na tela inicial do seu App, você encontrará diversos pacotes de plantio, onde selecionamos quais vegetais poderão ser plantados na mesma estufa, de modo que não haja conflito no crescimento de suas plantas!',
                'last': false
            },
            {
                'step': '04',
                'title': 'Selecionou o pacote?<br>Hora de plantar!',
                'text': 'Cada pacote terão suas devidas informações, e após selecionada o de sua preferência, é só informar ao Gardener que as semenetes já foram plantadas na terra, e nós cuidaremos de todo resto!',
                'last': false
            },
            {
                'step': '05',
                'title': 'Agora é só aguardar sua colheita!',
                'text': 'Após iniciado o ciclo de plantio, o Gardener te informará sobre regas, temperatura de água e solo, e finalmente quando seus vegetais estiverem prontos para colheita!',
                'last': true
            }
        ];
    }
    ngOnInit() {
    }
    skipLadding() {
        this.authService.updateLadding(false).then(res => {
            this.router.navigate(['/dashboard/tab1']);
        });
    }
};
LaddingPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LaddingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ladding',
        template: __webpack_require__(/*! raw-loader!./ladding.page.html */ "./node_modules/raw-loader/index.js!./src/app/ladding/ladding.page.html"),
        styles: [__webpack_require__(/*! ./ladding.page.scss */ "./src/app/ladding/ladding.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LaddingPage);



/***/ })

}]);
//# sourceMappingURL=ladding-ladding-module-es2015.js.map