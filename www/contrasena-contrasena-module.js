(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contrasena-contrasena-module"],{

/***/ "./src/app/contrasena/contrasena.module.ts":
/*!*************************************************!*\
  !*** ./src/app/contrasena/contrasena.module.ts ***!
  \*************************************************/
/*! exports provided: ContrasenaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrasenaPageModule", function() { return ContrasenaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contrasena_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contrasena.page */ "./src/app/contrasena/contrasena.page.ts");







var routes = [
    {
        path: '',
        component: _contrasena_page__WEBPACK_IMPORTED_MODULE_6__["ContrasenaPage"]
    }
];
var ContrasenaPageModule = /** @class */ (function () {
    function ContrasenaPageModule() {
    }
    ContrasenaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contrasena_page__WEBPACK_IMPORTED_MODULE_6__["ContrasenaPage"]]
        })
    ], ContrasenaPageModule);
    return ContrasenaPageModule;
}());



/***/ }),

/***/ "./src/app/contrasena/contrasena.page.html":
/*!*************************************************!*\
  !*** ./src/app/contrasena/contrasena.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Configuración</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"form3\">\n        <h2>CAMBIAR CONTRASEÑA </h2>\n    </div>\n    <div class=\"cuerpo\">\n        <ion-item>\n            <ion-icon slot=\"start\" name=\"lock\" color=\"medium\"></ion-icon>\n            <ion-input name=\"c1\" type=\"password\" placeholder=\"Contraseña Actual\" [(ngModel)]='c1'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon slot=\"start\" name=\"lock\" color=\"tertiary\"></ion-icon>\n            <ion-input name=\"c2\" type=\"password\" placeholder=\"Contraseña nueva\" [(ngModel)]=\"c2\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon slot=\"start\" name=\"lock\" color=\"tertiary\"></ion-icon>\n            <ion-input name=\"c3\" type=\"password\" placeholder=\"Contraseña nueva\" [(ngModel)]=\"c3\"></ion-input>\n        </ion-item>\n    </div>\n    <div class=\"contorno\">\n        <ion-button color=\"danger\" type=\"submit\" expand=\"block\" (click)=\"actuaContra()\">Guardar Cambios</ion-button>\n    </div>\n    <div class=\"contorno \">\n        <ion-button fill=\"outline\" color=\"danger\" type=\"submit\" expand=\"block\" [routerLink]=\"['/tabs/perfil']\">Cancelar\n        </ion-button>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/contrasena/contrasena.page.scss":
/*!*************************************************!*\
  !*** ./src/app/contrasena/contrasena.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cuerpo {\n  padding: 10px 40px 15px; }\n  .cuerpo ion-input {\n    font-size: smaller; }\n  .form3 {\n  padding: 8px 40px 16px;\n  text-align: center;\n  font-family: serif; }\n  .contorno {\n  padding: 10px 40px 0px; }\n  .colo ion-button {\n  background-color: #c1cac4; }\n  ion-title {\n  font-family: menu; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhc2VuYS9DOlxceGFtcHBcXGh0ZG9jc1xcQ2FyZGlvY2VudHJvTWFudGFcXGluaWNpby9zcmNcXGFwcFxcY29udHJhc2VuYVxcY29udHJhc2VuYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUIsRUFBQTtFQUQzQjtJQUVnQixrQkFBa0IsRUFBQTtFQUlsQztFQUNJLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxzQkFBc0IsRUFBQTtFQUd4QjtFQUNnQix5QkFBeUIsRUFBQTtFQUl6QztFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udHJhc2VuYS9jb250cmFzZW5hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdWVycG97XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHggMTVweDtcclxuICAgIGlvbi1pbnB1dHsgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICB9XHJcbiAgIFxyXG59XHJcbi5mb3JtM3tcclxuICAgIHBhZGRpbmc6IDhweCA0MHB4IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbn1cclxuLmNvbnRvcm5ve1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5jb2xve1xyXG4gICAgICBpb24tYnV0dG9ueyBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjYWM0OyB9XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxle1xyXG4gICAgICBmb250LWZhbWlseTogbWVudTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/contrasena/contrasena.page.ts":
/*!***********************************************!*\
  !*** ./src/app/contrasena/contrasena.page.ts ***!
  \***********************************************/
/*! exports provided: ContrasenaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrasenaPage", function() { return ContrasenaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContrasenaPage = /** @class */ (function () {
    function ContrasenaPage(postPvdr, toastCtrl, alertController, router) {
        this.postPvdr = postPvdr;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.router = router;
        this.id = "";
        this.c1 = "";
        this.c2 = "";
        this.c3 = "";
        this.contrasenia = "";
    }
    ContrasenaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.postPvdr.$getListSource.subscribe(function (list) {
            console.log(list);
            //this.dato= list;
            _this.id = list[0].Id_Usuario;
            _this.contrasenia = atob(list[0].Password);
            // console.log(this.id);
        });
    };
    ContrasenaPage.prototype.actuaContra = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.c1 == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta password Actual',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 11];
                    case 2:
                        if (!(this.c2 == "")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta la nueva Password',
                                duration: 3000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 11];
                    case 4:
                        if (!(this.c3 == "")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta la nueva Password',
                                duration: 3000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 11];
                    case 6:
                        if (!(this.c1 != this.contrasenia)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'La password actual es INCORRECTO',
                                duration: 3000
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 11];
                    case 8:
                        if (!(this.c2 != this.c3)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'No coiniciden las passwords',
                                duration: 3000
                            })];
                    case 9:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 11];
                    case 10:
                        body = {
                            Password: btoa(this.c2)
                        };
                        this.postPvdr.modUser(body, this.id)
                            .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.alertController.create({
                                            header: 'CAMBIO DE PASSWORD',
                                            message: 'Password actualizada',
                                            cssClass: 'alertDanger',
                                            buttons: ['OK']
                                        })];
                                    case 1:
                                        alert = _a.sent();
                                        return [4 /*yield*/, alert.present()];
                                    case 2:
                                        _a.sent();
                                        this.c1 = "";
                                        this.c2 = "";
                                        this.c3 = "";
                                        this.router.navigate(['/perfil']);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ContrasenaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contrasena',
            template: __webpack_require__(/*! ./contrasena.page.html */ "./src/app/contrasena/contrasena.page.html"),
            styles: [__webpack_require__(/*! ./contrasena.page.scss */ "./src/app/contrasena/contrasena.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContrasenaPage);
    return ContrasenaPage;
}());



/***/ })

}]);
//# sourceMappingURL=contrasena-contrasena-module.js.map