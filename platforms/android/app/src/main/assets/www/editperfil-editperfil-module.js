(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editperfil-editperfil-module"],{

/***/ "./src/app/editperfil/editperfil.module.ts":
/*!*************************************************!*\
  !*** ./src/app/editperfil/editperfil.module.ts ***!
  \*************************************************/
/*! exports provided: EditperfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditperfilPageModule", function() { return EditperfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editperfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editperfil.page */ "./src/app/editperfil/editperfil.page.ts");







var routes = [
    {
        path: '',
        component: _editperfil_page__WEBPACK_IMPORTED_MODULE_6__["EditperfilPage"]
    }
];
var EditperfilPageModule = /** @class */ (function () {
    function EditperfilPageModule() {
    }
    EditperfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editperfil_page__WEBPACK_IMPORTED_MODULE_6__["EditperfilPage"]]
        })
    ], EditperfilPageModule);
    return EditperfilPageModule;
}());



/***/ }),

/***/ "./src/app/editperfil/editperfil.page.html":
/*!*************************************************!*\
  !*** ./src/app/editperfil/editperfil.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Editar Perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"menu2\">\n    <!--material-design-background-->\n    <ion-row>\n      <ion-col size=\"4\">\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-avatar>\n          <img class=\"iavatar1\" src=\"/assets/sinfoto.jpg\" alt=\"\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\">\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"form\">\n    <ion-list *ngFor=\"let data of datos\">\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"person\" color=\"tertiary\"></ion-icon>\n        <ion-label color=\"medium\" position=\"stacked\">Nombres</ion-label>\n        <ion-input name=\"name\" [(ngModel)]='username'>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"person\" color=\"tertiary\"></ion-icon>\n        <ion-label color=\"medium\" position=\"stacked\">Apellidos</ion-label>\n        <ion-input name=\"apellido\" [(ngModel)]='apellido'>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"transgender\" color=\"tertiary\"></ion-icon>\n        <ion-label color=\"medium\" position=\"stacked\">Sexo:</ion-label>\n        <ion-select class=\"tama\" [(ngModel)]=\"sexo\" placeholder=\"{{sexo}}\" name=\"sexo\">\n          <ion-select-option value=\"Femenino\">Femenino</ion-select-option>\n          <ion-select-option value=\"Masculino\">Masculino</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"calendar\" color=\"tertiary\"></ion-icon>\n        <ion-label color=\"medium\" position=\"stacked\">Fecha de Nacimiento</ion-label>\n        <ion-input type=\"date\" [(ngModel)]='fecha'>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"compass\" color=\"tertiary\"></ion-icon>\n        <ion-label color=\"medium\" position=\"stacked\">Dirección</ion-label>\n        <ion-input name=\"direccion\" [(ngModel)]='direccion'>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"phone-portrait\" color=\"tertiary\"></ion-icon>\n        <ion-label color=\"medium\" position=\"stacked\">Teléfono</ion-label>\n        <ion-input name=\"celular\" [(ngModel)]='celular'>\n        </ion-input>\n      </ion-item>\n      <ion-item class=\"fuent\">\n        <ion-icon slot=\"start\" name=\"star\" color=\"tertiary\"></ion-icon>\n        <ion-label color=\"medium\" position=\"stacked\">Intereses</ion-label>\n        <ion-textarea name=\"intereses\" type=\"text\" placeholder=\"Escribe tu intereses aqui....\" [(ngModel)]=\"intereses\">\n        </ion-textarea>\n      </ion-item>\n      <ion-item-divider lines=\"none\" color=\"light\">\n        <ion-label>Social:</ion-label>\n      </ion-item-divider>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"logo-facebook\" color=\"dark\"></ion-icon>\n        <ion-input name=\"facebook\" placeholder=\"Facebook\" [(ngModel)]='facebook'></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"logo-twitter\" color=\"dark\"></ion-icon>\n        <ion-input name=\"twitter\" placeholder=\"Twitter\" [(ngModel)]='twitter'></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"logo-instagram\" color=\"dark\"></ion-icon>\n        <ion-input name=\"instagram\" type=\"email\" placeholder=\"Instagram\" [(ngModel)]='instagram'></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class=\"contorno\">\n    <ion-button color=\"danger\" type=\"submit\" (click)=\"actualizar()\" expand=\"block\">Actualizar Perfil\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/editperfil/editperfil.page.scss":
/*!*************************************************!*\
  !*** ./src/app/editperfil/editperfil.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu2 {\n  padding: 40px 10px 10px;\n  height: 160px;\n  color: white; }\n  .menu2 .name {\n    text-align: center;\n    margin-top: 3px;\n    font-weight: 500;\n    margin-bottom: 3px; }\n  .menu2 .e-mail {\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 5px; }\n  .iavatar1 {\n  width: 300% !important;\n  height: 300% !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n  border-radius: 50% !important;\n  overflow: hidden !important;\n  border: 2px solid #0a0458 !important; }\n  .form {\n  padding: 16px 40px 16px; }\n  .contorno {\n  padding: 0px 40px 16px; }\n  ion-title {\n  font-family: menu; }\n  .fuent {\n  font-size: 13px; }\n  .fuent ion-select {\n    max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHBlcmZpbC9DOlxceGFtcHBcXGh0ZG9jc1xcQ2FyZGlvY2VudHJvTWFudGFcXGluaWNpby9zcmNcXGFwcFxcZWRpdHBlcmZpbFxcZWRpdHBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQXlCLEVBQUE7RUFIN0I7SUFLTSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQVJ4QjtJQVdNLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7RUFHdEI7RUFDRSxzQkFBcUI7RUFDckIsdUJBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixvQ0FBb0MsRUFBQTtFQUdwQztFQUNJLHVCQUF1QixFQUFBO0VBRTNCO0VBQ0Usc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSxpQkFBaUIsRUFBQTtFQUdyQjtFQUNFLGVBQWUsRUFBQTtFQURqQjtJQUdHLGVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRwZXJmaWwvZWRpdHBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudTJ7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDEwcHggMTBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgLm5hbWUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgfVxyXG4gICAgLmUtbWFpbCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaWF2YXRhcjEgIHsgICAgIFxyXG4gICAgd2lkdGg6MzAwJSAhaW1wb3J0YW50OyAgXHJcbiAgICBoZWlnaHQgOiAzMDAlICFpbXBvcnRhbnQ7ICBcclxuICAgIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemUgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwYTA0NTggIWltcG9ydGFudDtcclxuICAgIC8vcGFkZGluZzogLjVlbTtcclxuICAgIH1cclxuICAgIC5mb3Jte1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggNDBweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRvcm5ve1xyXG4gICAgICBwYWRkaW5nOiAwcHggNDBweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtZW51O1xyXG4gIH1cclxuXHJcbiAgLmZ1ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/editperfil/editperfil.page.ts":
/*!***********************************************!*\
  !*** ./src/app/editperfil/editperfil.page.ts ***!
  \***********************************************/
/*! exports provided: EditperfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditperfilPage", function() { return EditperfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EditperfilPage = /** @class */ (function () {
    function EditperfilPage(router, postPvdr, alertController, menu) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.alertController = alertController;
        this.menu = menu;
        this.datos = [];
        this.datosu = [];
        this.id = "";
        this.username = "";
        this.apellido = "";
        this.cedula = "";
        this.email = "";
        this.direccion = "";
        this.celular = "";
        this.sexo = "";
        this.fecha = "";
        this.intereses = "";
        this.facebook = "";
        this.twitter = "";
        this.instagram = "";
    }
    EditperfilPage.prototype.ngOnInit = function () {
        this.menu.enable(true, 'first');
        this.cargarDatosUsuarios();
    };
    EditperfilPage.prototype.cargarDatosUsuarios = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.postPvdr.$getListSource.subscribe(function (list) {
                    console.log(list);
                    _this.datos = list;
                    _this.id = _this.datos[0].Id_Usuario;
                    //console.log(this.sexo);
                    // console.log(this.id);
                });
                this.postPvdr.buscarUsers(this.id).subscribe(function (data) {
                    _this.postPvdr.Globalusuario = data;
                    _this.username = data.Nombre;
                    _this.apellido = data.Apellido;
                    _this.cedula = data.Cedula;
                    _this.email = data.email;
                    _this.direccion = data.Direccion;
                    _this.celular = data.Celular;
                    _this.sexo = data.Sexo;
                    _this.fecha = data.Fecha_Nacimiento;
                    _this.facebook = data.Facebook;
                    _this.twitter = data.Twitter;
                    _this.instagram = data.Instagram;
                    _this.intereses = data.Intereses;
                    _this.postPvdr.Globalusuario = data;
                    //console.log(this.datos);
                });
                return [2 /*return*/];
            });
        });
    };
    EditperfilPage.prototype.actualizar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    Nombre: this.username,
                    Apellido: this.apellido,
                    Cedula: this.cedula,
                    Direccion: this.direccion,
                    Celular: this.celular,
                    Sexo: this.sexo,
                    Instagram: this.instagram,
                    Twitter: this.twitter,
                    Facebook: this.facebook,
                    Fecha_Nacimiento: this.fecha,
                    Intereses: this.intereses
                };
                this.postPvdr.modUser(body, this.id).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertController.create({
                                    header: 'Datos Actualizados',
                                    message: 'Exito...!',
                                    cssClass: 'alertDanger',
                                    buttons: ['OK']
                                })];
                            case 1:
                                alert = _a.sent();
                                return [4 /*yield*/, alert.present()];
                            case 2:
                                _a.sent();
                                this.cargarDatosUsuarios();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    EditperfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editperfil',
            template: __webpack_require__(/*! ./editperfil.page.html */ "./src/app/editperfil/editperfil.page.html"),
            styles: [__webpack_require__(/*! ./editperfil.page.scss */ "./src/app/editperfil/editperfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], EditperfilPage);
    return EditperfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=editperfil-editperfil-module.js.map