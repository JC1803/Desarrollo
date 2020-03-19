(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["archivos-archivos-module"],{

/***/ "./src/app/archivos/archivos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/archivos/archivos.module.ts ***!
  \*********************************************/
/*! exports provided: ArchivosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivosPageModule", function() { return ArchivosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _archivos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./archivos.page */ "./src/app/archivos/archivos.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _archivos_page__WEBPACK_IMPORTED_MODULE_6__["ArchivosPage"]
    }
];
var ArchivosPageModule = /** @class */ (function () {
    function ArchivosPageModule() {
    }
    ArchivosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_archivos_page__WEBPACK_IMPORTED_MODULE_6__["ArchivosPage"]]
        })
    ], ArchivosPageModule);
    return ArchivosPageModule;
}());



/***/ }),

/***/ "./src/app/archivos/archivos.page.html":
/*!*********************************************!*\
  !*** ./src/app/archivos/archivos.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Archivos</ion-title>\n  </ion-toolbar>\n</ion-header>\n<div>\n  <ion-searchbar mode=\"ios\" animated showCancelButton=\"always\" (ionChange)=\"buscar($event)\"></ion-searchbar>\n</div>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\" *ngFor=\"let doc of archivos|filtro:textoBuscar : 'Nombre'\">\n        <img src=\"/assets/archivo.png\" />\n        <!--p> {{ doc.Ruta}} </p-->\n        <ion-text>\n          <p> {{doc.Descripcion}} </p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/archivos/archivos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/archivos/archivos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdm9zL2FyY2hpdm9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/archivos/archivos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/archivos/archivos.page.ts ***!
  \*******************************************/
/*! exports provided: ArchivosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivosPage", function() { return ArchivosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");




var ArchivosPage = /** @class */ (function () {
    function ArchivosPage(menu, postPvdr) {
        this.menu = menu;
        this.postPvdr = postPvdr;
        this.archivos = [];
        this.datos = [];
        this.id = "";
        this.textoBuscar = '';
    }
    ArchivosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.close();
        this.postPvdr.$getListSource.subscribe(function (list) {
            //console.log(list)
            _this.datos = list;
            _this.id = _this.datos[0].Id_Usuario;
            console.log(_this.id);
        });
        this.cargarArchivos();
    };
    ArchivosPage.prototype.cargarArchivos = function () {
        var _this = this;
        this.postPvdr.buscarDoc(this.id).subscribe(function (list) {
            //console.log(list)
            _this.archivos = list;
            console.log(_this.archivos);
        });
    };
    ArchivosPage.prototype.doRefresh = function (evento) {
        this.cargarArchivos();
        setTimeout(function () {
            evento.target.complete();
        }, 2000);
    };
    //Buscar en la barra de busqueda
    ArchivosPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    ArchivosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archivos',
            template: __webpack_require__(/*! ./archivos.page.html */ "./src/app/archivos/archivos.page.html"),
            styles: [__webpack_require__(/*! ./archivos.page.scss */ "./src/app/archivos/archivos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"]])
    ], ArchivosPage);
    return ArchivosPage;
}());



/***/ })

}]);
//# sourceMappingURL=archivos-archivos-module.js.map