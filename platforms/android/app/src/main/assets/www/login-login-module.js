(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <div id=\"div1\">\n    <form #form=\"ngForm\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <div text-center class=\"espacio\">\n              <img src=\"/assets/logo1.png\" alt=\"\">\n            </div>\n            <div text-center class=\"text\">\n              <h1>TASK CONTROL</h1>\n            </div>\n            <div text-center>\n              <h1></h1>\n            </div>\n            <div padding>\n              <ion-item color=\"light\">\n                <ion-input text-center name=\"email\" type=\"email\" placeholder=\"your@email.com\" [(ngModel)]=\"email\">\n                </ion-input>\n              </ion-item>\n              <ion-item color=\"light\">\n                <ion-input border-color=\"danger\" text-center name=\"password\" type=\"password\" placeholder=\"Password\"\n                  [(ngModel)]=\"password\"></ion-input>\n              </ion-item>\n            </div>\n            <div padding>\n              <ion-button color=\"success\" type=\"submit\" [disabled]=\"form.invalid\" (click)=\"prosesLogin()\"\n                expand=\"block\">Login</ion-button>\n            </div>\n            <div text-center padding>\n              Si no tienes cuenta, por favor <a routerLink='/register'>\n                registrate</a> primero!\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-menu {\n  --width: 500px; }\n\n.bordes {\n  padding: 50px 10px 0px 10px; }\n\n#div1 {\n  background-image: url(\"/assets/fondolog1.png\");\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%; }\n\n.text {\n  color: #312d79; }\n\n.espacio {\n  padding: 60px 0px 0px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXHhhbXBwXFxodGRvY3NcXENhcmRpb2NlbnRyb01hbnRhXFxpbmljaW8vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFRLEVBQUE7O0FBRVo7RUFDRSwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSw4Q0FBOEM7RUFDOUMsc0JBQXNCO0VBQ3RCLDJCQUE0QjtFQUM1QixZQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUliO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWN1c3RvbS1tZW51IHtcclxuICAgIC0td2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuLmJvcmRlc3tcclxuICBwYWRkaW5nOiA1MHB4IDEwcHggMHB4IDEwcHg7XHJcbn1cclxuI2RpdjF7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ZvbmRvbG9nMS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udGV4dHtcclxuICBjb2xvcjogIzMxMmQ3OTtcclxufVxyXG5cclxuLmVzcGFjaW8ge1xyXG4gIHBhZGRpbmc6IDYwcHggMHB4IDBweCAwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");








var LoginPage = /** @class */ (function () {
    function LoginPage(router, postPvdr, storage, navCtrl, menu, toastCtrl) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.email = "";
        this.nombre = null;
        this.informacion = null;
        this.password = "";
        this.user = [];
        this.per = [];
    }
    LoginPage.prototype.ngOnInit = function () {
        this.menu.close('first');
        //  this.menu.swipeEnable(false, 'first');
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false, 'first');
    };
    LoginPage.prototype.prosesLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.email != "" && this.password != "")) return [3 /*break*/, 1];
                        body = {
                            email: this.email,
                            password: btoa(this.password)
                        };
                        this.postPvdr.postLogin(body).subscribe(function (data) {
                            // var alertpesan = data.msg;
                            if (data.length != 0) {
                                _this.user = (data);
                                //console.log(data);
                                _this.postPvdr.sendListSource(data);
                                _this.storage.set('session_storage', data);
                                //this.storage.get('session_storage').then((val) => {
                                //this.postPvdr.sendListSource(val);
                                //console.log(val);
                                //  });
                                console.log(data);
                                _this.router.navigate(['/tabs']);
                                _this.email = "";
                                _this.password = "";
                            }
                            else {
                                console.log("falso");
                                _this.Validar();
                            }
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Campos Vacios. Por favor, ingrese datos en los campos',
                            duration: 3000
                        })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.Validar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'El nombre de usuario y contrasenias son incorrectos. Por favor intentalo nuevamente',
                            duration: 5000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.formRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map