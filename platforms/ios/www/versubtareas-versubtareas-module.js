(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["versubtareas-versubtareas-module"],{

/***/ "./src/app/versubtareas/versubtareas.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/versubtareas/versubtareas.module.ts ***!
  \*****************************************************/
/*! exports provided: VersubtareasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersubtareasPageModule", function() { return VersubtareasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _versubtareas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./versubtareas.page */ "./src/app/versubtareas/versubtareas.page.ts");







var routes = [
    {
        path: '',
        component: _versubtareas_page__WEBPACK_IMPORTED_MODULE_6__["VersubtareasPage"]
    }
];
var VersubtareasPageModule = /** @class */ (function () {
    function VersubtareasPageModule() {
    }
    VersubtareasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_versubtareas_page__WEBPACK_IMPORTED_MODULE_6__["VersubtareasPage"]]
        })
    ], VersubtareasPageModule);
    return VersubtareasPageModule;
}());



/***/ }),

/***/ "./src/app/versubtareas/versubtareas.page.html":
/*!*****************************************************!*\
  !*** ./src/app/versubtareas/versubtareas.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Subtareas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <div *ngFor=\"let subt of subtareas\">\n      <ion-item buttons (click)=\"subt.open = !subt.open\" class=\"sub-item2\">\n        <ion-icon slot=\"end\" name=\"arrow-dropright\" *ngIf=\"!subt.open\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"arrow-dropdown\" *ngIf=\"subt.open\"></ion-icon>\n        <ion-label>\n          <ion-text>\n            <h2> {{ subt.Nombre }}</h2>\n          </ion-text>\n          <p> <b>Descrpcion: </b>{{ subt.Descripcion }} </p>\n          <p> <b>Estado: </b>{{ subt.Estado_Tarea }} <b>Límite:</b> {{ subt.FechaFin}} </p>\n          <p *ngFor=\"let resp of subt.responsables\"> <b> Responsable:</b> {{resp.usuario.Nombre}}\n            {{resp.usuario.Apellido}}</p>\n        </ion-label>\n      </ion-item>\n      <div *ngIf=\"subt.open\">\n        <ion-item *ngFor=\"let sub of subt.sub_tareas\" class=\"sub-item1\">\n          <ion-icon name=\"remove\" class=\"icon\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <ion-text>\n              <ion-label> {{ sub.Nombre }} </ion-label>\n            </ion-text>\n            <p> <b>Estado: </b>{{ sub.Estado_Tarea }} <b>Limite:</b> {{ sub.FechaFin}} </p>\n          </ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/versubtareas/versubtareas.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/versubtareas/versubtareas.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-item1 {\n  padding-left: 3px;\n  font-size: small; }\n  .sub-item1 p {\n    font-size: 12px; }\n  .sub-item2 {\n  padding-right: 0px;\n  font-size: small; }\n  .sub-item2 p {\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyc3VidGFyZWFzL0M6XFx4YW1wcFxcaHRkb2NzXFxDYXJkaW9jZW50cm9NYW50YVxcaW5pY2lvL3NyY1xcYXBwXFx2ZXJzdWJ0YXJlYXNcXHZlcnN1YnRhcmVhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7RUFGcEI7SUFJUSxlQUFlLEVBQUE7RUFPdkI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFGcEI7SUFJUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92ZXJzdWJ0YXJlYXMvdmVyc3VidGFyZWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItaXRlbTEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgLy8gY29sb3I6IzY4NmI3MjtcclxufVxyXG5cclxuLnN1Yi1pdGVtMiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/versubtareas/versubtareas.page.ts":
/*!***************************************************!*\
  !*** ./src/app/versubtareas/versubtareas.page.ts ***!
  \***************************************************/
/*! exports provided: VersubtareasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersubtareasPage", function() { return VersubtareasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");



var VersubtareasPage = /** @class */ (function () {
    function VersubtareasPage(postPvdr) {
        this.postPvdr = postPvdr;
        this.subtareas = [];
    }
    VersubtareasPage.prototype.ngOnInit = function () {
        this.subtareas = this.postPvdr.Gsubta;
    };
    VersubtareasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-versubtareas',
            template: __webpack_require__(/*! ./versubtareas.page.html */ "./src/app/versubtareas/versubtareas.page.html"),
            styles: [__webpack_require__(/*! ./versubtareas.page.scss */ "./src/app/versubtareas/versubtareas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"]])
    ], VersubtareasPage);
    return VersubtareasPage;
}());



/***/ })

}]);
//# sourceMappingURL=versubtareas-versubtareas-module.js.map