(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='tertiary'>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Registro</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-label class=\"textor\" padding>\n    <h1> Crear cuenta nueva </h1>\n    <p> !Empecemos! Ingresa tus datos\n      para crear una cuenta nueva</p>\n  </ion-label>\n\n  <form #form=\"ngForm\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"person\" color=\"tertiary\"></ion-icon>\n              <ion-input name=\"name\" type=\"text\" placeholder=\"Nombre\" [(ngModel)]='username'></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"person\" color=\"tertiary\"></ion-icon>\n              <ion-input name=\"apellido\" type=\"text\" placeholder=\"Apellido\" [(ngModel)]=\"apellido\"></ion-input>\n            </ion-item>\n            <ion-item class=\"margenes\">\n              <ion-icon slot=\"start\" name=\"calendar\" color=\"tertiary\"></ion-icon>\n              <ion-label color=\"medium\">Fecha de Nacimiento:</ion-label>\n              <ion-input class=\"margenes\" name=\"fechanac\" type=\"date\" placeholder=\"Fecha Nacimento\"\n                [(ngModel)]=\"fechanac\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"card\" color=\"tertiary\"></ion-icon>\n              <ion-input name=\"cedula\" type=\"text\" placeholder=\"Cédula\" [(ngModel)]=\"cedula\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"mail\" color=\"tertiary\"></ion-icon>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"email\" [(ngModel)]='email'></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"compass\" color=\"tertiary\"></ion-icon>\n              <ion-input name=\"direccion\" type=\"text\" placeholder=\"Dirección\" [(ngModel)]=\"direccion\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"phone-portrait\" color=\"tertiary\"></ion-icon>\n              <ion-input name=\"celular\" type=\"text\" placeholder=\"Número Móvil\" [(ngModel)]=\"celular\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"transgender\" color=\"tertiary\"></ion-icon>\n              <ion-label color=\"medium\">Sexo:</ion-label>\n              <ion-select class=\"tama\" [(ngModel)]=\"sexo\" placeholder=\"Seleccione\" name=\"sexo\">\n                <ion-select-option value=\"Femenino\">Femenino</ion-select-option>\n                <ion-select-option value=\"Masculino\">Masculino</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"people\" color=\"tertiary\"></ion-icon>\n              <ion-label color=\"medium\">Tipo Usuario:</ion-label>\n              <ion-select class=\"tama\" placeholder=\"Seleccione\" [(ngModel)]=\"tipousuario\" okText=\"Ok\"\n                cancelText=\"Cancelar\" name=\"area\">\n                <ion-select-option value=\"1\">Empleado</ion-select-option>\n                <ion-select-option value=\"2\">Administrador</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"fuent\">\n              <ion-icon slot=\"start\" name=\"business\" color=\"tertiary\"></ion-icon>\n              <ion-label color=\"medium\">Área:</ion-label>\n              <ion-select interface=\"action-sheet\" class=\"tama\" (ionChange)=\"clicAre($event)\" placeholder=\"Seleccione\"\n                [(ngModel)]=\"area\" okText=\"Ok\" cancelText=\"Cancelar\" name=\"sexo\">\n                <ion-select-option *ngFor=\"let ar of areas\" value=\"{{ ar.Id_Area }}\">{{ ar.Descripcion }}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item lines=\"none\" class=\"fuent\">\n              <ion-icon slot=\"start\" name=\"today\" color=\"tertiary\"></ion-icon>\n              <ion-label color=\"medium\">Subarea:</ion-label>\n              <ion-select class=\"tama\" (ionChange)=\"clicSuba($event)\" placeholder=\"Seleccione\" [(ngModel)]=\"subarea\"\n                okText=\"Ok\" cancelText=\"Cancelar\" name=\"sexo\">\n                <ion-select-option *ngFor=\"let sub of subareas\" value=\"{{ sub.Id_Sub_Area }}\">{{ sub.Descripcion }}\n                </ion-select-option>\n\n              </ion-select>\n            </ion-item>\n            <ion-item class=\"fuent\">\n              <ion-icon slot=\"start\" name=\"briefcase\" color=\"tertiary\"></ion-icon>\n              <ion-label color=\"medium\">Rol:</ion-label>\n              <ion-select class=\"tama\" placeholder=\"Seleccione\" [(ngModel)]=\"rol\" okText=\"Ok\" cancelText=\"Cancelar\"\n                name=\"sexo\">\n                <ion-select-option *ngFor=\"let ro of roles\" value=\"{{ ro.Id_Roles}}\">{{ ro.Descripcion }}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"lock\" color=\"tertiary\"></ion-icon>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" [(ngModel)]='password'></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"lock\" color=\"tertiary\"></ion-icon>\n              <ion-input name=\"confirm\" type=\"password\" placeholder=\"Password again\" [(ngModel)]=\"confirm_password\">\n              </ion-input>\n            </ion-item>\n            <ion-item class=\"fuent\">\n              <ion-icon slot=\"start\" name=\"star\" color=\"tertiary\"></ion-icon>\n              <ion-textarea name=\"intereses\" type=\"text\" placeholder=\"Escribe tus intereses aqui....\"\n                [(ngModel)]=\"intereses\"></ion-textarea>\n            </ion-item>\n            <ion-item-divider lines=\"none\">\n              <ion-label>Social:</ion-label>\n            </ion-item-divider>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"logo-facebook\" color=\"dark\"></ion-icon>\n              <ion-input name=\"facebook\" placeholder=\"Facebook\" [(ngModel)]='facebook'></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"logo-twitter\" color=\"dark\"></ion-icon>\n              <ion-input name=\"twitter\" placeholder=\"Twitter\" [(ngModel)]='twitter'></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"logo-instagram\" color=\"dark\"></ion-icon>\n              <ion-input name=\"instagram\" type=\"email\" placeholder=\"Instagram\" [(ngModel)]='instagram'></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button color=\"primary\" fill=\"outline\" expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\"\n              expand=\"block\" (click)=\"registro()\">Registrar</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textor {\n  text-align: center; }\n\n.alertDanger {\n  background-color: white;\n  text-align: center;\n  color: black; }\n\n.alertDanger button {\n    color: #11a349; }\n\n.fondo {\n  background-color: rgba(143, 194, 224, 0.979); }\n\n.tama {\n  color: #505152;\n  font-size: 85%; }\n\n.fuent {\n  font-size: 15px; }\n\n.fuent ion-select {\n    max-width: 100%; }\n\n.fuent ion-input {\n    align-items: center; }\n\n.colorb {\n  background-color: #0093d9; }\n\n.margenes {\n  display: block;\n  font-size: 14px;\n  color: darkgray;\n  padding: 0px 0px 0px 0px; }\n\n.margenes ion-input {\n    padding: 0px 0px 0px 0px; }\n\n.margenes ion-item {\n    padding: 0px 0px 0px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXHhhbXBwXFxodGRvY3NcXENhcmRpb2NlbnRyb01hbnRhXFxpbmljaW8vc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQW1CLEVBQUE7O0FBSHZCO0lBS1EsY0FBdUIsRUFBQTs7QUFHOUI7RUFDRyw0Q0FBNEMsRUFBQTs7QUFHaEQ7RUFDSSxjQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBT2xCO0VBQ0csZUFBZSxFQUFBOztBQURsQjtJQUdJLGVBQWMsRUFBQTs7QUFIbEI7SUFNSSxtQkFBbUIsRUFBQTs7QUFJdkI7RUFDSSx5QkFBeUIsRUFBQTs7QUFLN0I7RUFJSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZix3QkFBd0IsRUFBQTs7QUFQNUI7SUFFTSx3QkFBd0IsRUFBQTs7QUFGOUI7SUFRZ0Isd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dG9yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYWxlcnREYW5nZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgY29sb3I6IHJnYigxNywgMTYzLCA3Myk7XHJcbiAgICB9XHJcbn1cclxuIC5mb25kbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MywgMTk0LCAyMjQsIDAuOTc5KTtcclxuXHJcbiB9XHJcbi50YW1hIHtcclxuICAgIGNvbG9yOiByZ2IoODAsIDgxLCA4Mik7XHJcbiAgICBmb250LXNpemU6IDg1JTtcclxuXHJcbiAgICBcclxuICAgXHJcbn1cclxuXHJcblxyXG4uZnVlbnQge1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgIGlvbi1zZWxlY3R7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgfVxyXG4gICBpb24taW5wdXR7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICB9XHJcbn1cclxuXHJcbi5jb2xvcmJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5M2Q5O1xyXG59XHJcblxyXG5cclxuXHJcbi5tYXJnZW5lcyB7XHJcbiAgICBpb24taW5wdXR7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgIH1cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgaW9uLWl0ZW17ICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4OyB9XHJcbiAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, postPvdr, storage, alertController, toastCtrl, httpClient, menu) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.httpClient = httpClient;
        this.menu = menu;
        this.areas = [];
        this.area = "";
        this.roles = [];
        this.rol = "";
        this.subarea = "";
        this.registros = [];
        this.iduser = "";
        this.facebook = "";
        this.twitter = "";
        this.instagram = "";
        this.intereses = "";
        this.username = "";
        this.apellido = "";
        this.cedula = "";
        this.email = "";
        this.direccion = "";
        this.celular = "";
        this.password = "";
        this.confirm_password = "";
        this.sexo = "";
        this.tipousuario = "";
    }
    RegisterPage.prototype.ngOnInit = function () {
        // this.menu.enable(false,'first');
        var _this = this;
        this.postPvdr.getArea().subscribe(function (data) {
            if (data != null) {
                //console.log(data.json());
                _this.areas = data;
                //this.areas =Object.values(data);
            }
        }, function (error) {
            console.error(error);
        });
    };
    RegisterPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false, 'first');
    };
    RegisterPage.prototype.clicAre = function ($event) {
        var _this = this;
        this.subareas = [""];
        this.roles = [""];
        console.log(this.area);
        this.postPvdr.getSubareas(this.area).subscribe(function (dato) {
            _this.subareas = dato;
        });
        this.rol = "";
    };
    RegisterPage.prototype.clicSuba = function ($event) {
        var _this = this;
        console.log(this.subarea);
        this.postPvdr.getRoles(this.subarea).subscribe(function (dato) {
            _this.roles = dato;
        });
    };
    RegisterPage.prototype.registro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, toast, toast, toast, toast, toast, toast, toast, toast, toast, toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.username == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta Nombre',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 2:
                        if (!(this.apellido == "")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta Apellido',
                                duration: 3000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 4:
                        if (!(this.fechanac == null)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta Fecha de nacimiento',
                                duration: 3000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 6:
                        if (!(this.cedula == "")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta cedula',
                                duration: 3000
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 8:
                        if (!(this.direccion == "")) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta Direccion',
                                duration: 3000
                            })];
                    case 9:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 10:
                        if (!(this.password == "")) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta Password',
                                duration: 3000
                            })];
                    case 11:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 12:
                        if (!(this.cedula == "")) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta número de celular',
                                duration: 3000
                            })];
                    case 13:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 14:
                        if (!(this.sexo == "")) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta su sexo',
                                duration: 3000
                            })];
                    case 15:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 16:
                        if (!(this.tipousuario == "")) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta Apellido',
                                duration: 3000
                            })];
                    case 17:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 18:
                        if (!(this.area == "")) return [3 /*break*/, 20];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta seleccionar área',
                                duration: 3000
                            })];
                    case 19:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 20:
                        if (!(this.subarea == "")) return [3 /*break*/, 22];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta seleccionar subarea',
                                duration: 3000
                            })];
                    case 21:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 22:
                        if (!(this.rol == "")) return [3 /*break*/, 24];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta seleccionar rol',
                                duration: 3000
                            })];
                    case 23:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 24:
                        if (!(this.intereses == "")) return [3 /*break*/, 26];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta intereses',
                                duration: 3000
                            })];
                    case 25:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 26:
                        if (!(this.password != this.confirm_password)) return [3 /*break*/, 28];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'No coiniciden las passwords',
                                duration: 3000
                            })];
                    case 27:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 28:
                        if (!(this.email == "")) return [3 /*break*/, 30];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta email',
                                duration: 3000
                            })];
                    case 29:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 31];
                    case 30:
                        body = {
                            Nombre: this.username,
                            Apellido: this.apellido,
                            Cedula: this.cedula,
                            email: this.email,
                            Direccion: this.direccion,
                            Celular: this.celular,
                            Sexo: this.sexo,
                            Id_tipo_Usuarios: this.tipousuario,
                            Password: btoa(this.password),
                            Instagram: this.instagram,
                            Twitter: this.twitter,
                            Facebook: this.facebook,
                            Fecha_Nacimiento: this.fechanac,
                            Intereses: this.intereses
                            //aksi: 'register'
                        };
                        console.log(body);
                        this.postPvdr.postUser(body)
                            .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alertpesan, alert, body2, toast, toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        this.registro = data;
                                        this.iduser = data.Id_Usuario;
                                        console.log(this.iduser);
                                        return [4 /*yield*/, this.alertController.create({
                                                header: 'FELICITACIONES',
                                                message: 'El registro ha sido exitoso',
                                                cssClass: 'alertDanger',
                                                buttons: ['OK']
                                            })];
                                    case 1:
                                        alert = _a.sent();
                                        console.log(this.iduser);
                                        body2 = {
                                            Id_Area: this.area,
                                            Id_Roles: this.rol,
                                            Id_Usuario: this.iduser
                                        };
                                        console.log(body2);
                                        this.postPvdr.postUsuariosRoles(body2).subscribe(function (datos) {
                                        });
                                        return [4 /*yield*/, alert.present()];
                                    case 2:
                                        _a.sent();
                                        if (!data.succesful) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.toastCtrl.create({
                                                message: 'Register succesful',
                                                duration: 3000
                                            })];
                                    case 3:
                                        toast = _a.sent();
                                        toast.present();
                                        return [3 /*break*/, 6];
                                    case 4: return [4 /*yield*/, this.toastCtrl.create({
                                            message: alertpesan,
                                            duration: 3000
                                        })];
                                    case 5:
                                        toast = _a.sent();
                                        toast.present();
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); });
                        this.router.navigate(['/login']);
                        _a.label = 31;
                    case 31: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map