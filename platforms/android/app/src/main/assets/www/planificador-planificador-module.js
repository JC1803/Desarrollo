(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planificador-planificador-module"],{

/***/ "./src/app/planificador/planificador.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/planificador/planificador.module.ts ***!
  \*****************************************************/
/*! exports provided: PlanificadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificadorPageModule", function() { return PlanificadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _planificador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planificador.page */ "./src/app/planificador/planificador.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _planificador_page__WEBPACK_IMPORTED_MODULE_6__["PlanificadorPage"]
    }
];
var PlanificadorPageModule = /** @class */ (function () {
    function PlanificadorPageModule() {
    }
    PlanificadorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_planificador_page__WEBPACK_IMPORTED_MODULE_6__["PlanificadorPage"]]
        })
    ], PlanificadorPageModule);
    return PlanificadorPageModule;
}());



/***/ }),

/***/ "./src/app/planificador/planificador.page.html":
/*!*****************************************************!*\
  !*** ./src/app/planificador/planificador.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Personal</ion-title>\n  </ion-toolbar>\n</ion-header>\n<div>\n  <ion-searchbar mode=\"ios\" animated showCancelButton=\"always\" (ionChange)=\"buscar($event)\"></ion-searchbar>\n</div>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item class=\"message-text\" *ngFor=\"let users of usuarios |filtro:textoBuscar : 'Apellido'\">\n      <ion-avatar slot=\"start\">\n        <img src=\"/assets/sinfoto.jpg\">\n      </ion-avatar>\n      <ion-label (click)=\"cargarDatosUsuario(users.Id_Usuario)\">\n        <h2> <b>{{ users.Nombre }} {{ users.Apellido }}</b> </h2>\n        <h3>\n          <ion-text> {{ users.Rol }} </ion-text>\n        </h3>\n        <p> <b> Area:</b>{{users.Area}} &nbsp; &nbsp; &nbsp; <b>Subarea:</b> {{users.Sub_Area}}</p>\n        <p> </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/planificador/planificador.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/planificador/planificador.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 11px; }\n\nh2 {\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbmlmaWNhZG9yL0M6XFx4YW1wcFxcaHRkb2NzXFxDYXJkaW9jZW50cm9NYW50YVxcaW5pY2lvL3NyY1xcYXBwXFxwbGFuaWZpY2Fkb3JcXHBsYW5pZmljYWRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGxhbmlmaWNhZG9yL3BsYW5pZmljYWRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG5oMntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/planificador/planificador.page.ts":
/*!***************************************************!*\
  !*** ./src/app/planificador/planificador.page.ts ***!
  \***************************************************/
/*! exports provided: PlanificadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificadorPage", function() { return PlanificadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _verperfil_verperfil_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../verperfil/verperfil.page */ "./src/app/verperfil/verperfil.page.ts");





var PlanificadorPage = /** @class */ (function () {
    function PlanificadorPage(menu, postPvdr, modalCtr) {
        this.menu = menu;
        this.postPvdr = postPvdr;
        this.modalCtr = modalCtr;
        this.usuarios = [];
        this.usuarios1 = [];
        this.rol = "";
        this.textoBuscar = '';
    }
    PlanificadorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.close();
        this.postPvdr.getUsers().subscribe(function (list) {
            _this.usuarios = list.json();
            console.log(_this.usuarios);
        });
    };
    PlanificadorPage.prototype.doRefresh = function (evento) {
        var _this = this;
        this.postPvdr.getUsers().subscribe(function (list) {
            _this.usuarios = list.json();
            console.log(_this.usuarios);
        });
        setTimeout(function () {
            evento.target.complete();
        }, 2000);
    };
    PlanificadorPage.prototype.cargarDatosUsuario = function (id) {
        var _this = this;
        this.postPvdr.buscarUsers(id).subscribe(function (data) {
            console.log(data);
            _this.postPvdr.Gusuarioc = data;
            _this.usuarios1 = data;
            _this.rol = data.Rol;
            _this, _this.perfilModal(_this.usuarios1, _this.rol);
            //this.datos= this.postPvdr.Globalusuario;
            // console.log(this.datos);
        });
    };
    PlanificadorPage.prototype.perfilModal = function (usuario, rol) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtr.create({
                            component: _verperfil_verperfil_page__WEBPACK_IMPORTED_MODULE_4__["VerperfilPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                usuario: usuario,
                                rol: rol
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PlanificadorPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    PlanificadorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planificador',
            template: __webpack_require__(/*! ./planificador.page.html */ "./src/app/planificador/planificador.page.html"),
            styles: [__webpack_require__(/*! ./planificador.page.scss */ "./src/app/planificador/planificador.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], PlanificadorPage);
    return PlanificadorPage;
}());



/***/ })

}]);
//# sourceMappingURL=planificador-planificador-module.js.map