(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addtareat-addtareat-module"],{

/***/ "./src/app/addtareat/addtareat.module.ts":
/*!***********************************************!*\
  !*** ./src/app/addtareat/addtareat.module.ts ***!
  \***********************************************/
/*! exports provided: AddtareatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtareatPageModule", function() { return AddtareatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addtareat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addtareat.page */ "./src/app/addtareat/addtareat.page.ts");







var routes = [
    {
        path: '',
        component: _addtareat_page__WEBPACK_IMPORTED_MODULE_6__["AddtareatPage"]
    }
];
var AddtareatPageModule = /** @class */ (function () {
    function AddtareatPageModule() {
    }
    AddtareatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addtareat_page__WEBPACK_IMPORTED_MODULE_6__["AddtareatPage"]]
        })
    ], AddtareatPageModule);
    return AddtareatPageModule;
}());



/***/ }),

/***/ "./src/app/addtareat/addtareat.page.html":
/*!***********************************************!*\
  !*** ./src/app/addtareat/addtareat.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\" (click)=\"salir()\">\n      <ion-button>\n        <ion-icon slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button slot=\"end\" fill=\"outline\" color=\"tertiary\">Guadar</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<div class=\"fondo\">\n  <div class=\"form3\">\n    <ion-toolbar>\n      <h1>Nueva Tarea </h1>\n    </ion-toolbar>\n  </div>\n</div>\n\n<ion-content class=\"fondo\">\n  <div class=\"form2\">\n    <ion-list>\n      <ion-item>\n        <ion-input placeholder=\"Titulo\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input placeholder=\"Descripcion\"></ion-input>\n      </ion-item>\n      <ion-item-divider color=\"light\">\n        <ion-label>Responsable:</ion-label>\n      </ion-item-divider>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"person\" color=\"tertiary\"></ion-icon>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item-divider color=\"light\">\n        <ion-label>Observadores:</ion-label>\n      </ion-item-divider>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"person\" color=\"tertiary\"></ion-icon>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item-divider color=\"light\">\n        <ion-label>Participantes:</ion-label>\n      </ion-item-divider>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"person\" color=\"tertiary\"></ion-icon>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item-divider color=\"light\">\n        <ion-label>Archivos:</ion-label>\n      </ion-item-divider>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"attach\" color=\"tertiary\"></ion-icon>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item-divider color=\"light\"></ion-item-divider>\n      <ion-item>\n        <ion-label>Fecha Inicio</ion-label>\n        <ion-datetime value=\"1990-02-19\" placeholder=\"Seleccionar\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Hora Inicio</ion-label>\n        <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1990-02-19T07:43Z\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Fecha Fin</ion-label>\n        <ion-datetime value=\"1990-02-20\" placeholder=\"Seleccionar\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Hora Fin</ion-label>\n        <ion-datetime display-format=\"h:mm A\" picker-format=\"h:mm A\" value=\"1996-02-19T07:43Z\"></ion-datetime>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/addtareat/addtareat.page.scss":
/*!***********************************************!*\
  !*** ./src/app/addtareat/addtareat.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form1 {\n  padding: 10px 10px 5px;\n  background-color: #1a83c8; }\n  .form1 ion-toolbar {\n    background: #1a83c8; }\n  .form1 padding {\n    color: #1a83c8; }\n  .form1 .fondo {\n    background-color: #ffffff; }\n  .form2 {\n  padding: 10px 20px 8px;\n  --background: #f0e1c3; }\n  .form3 {\n  background-color: white;\n  padding: 16px 0px 16px;\n  text-align: center; }\n  .form3 h1 {\n    color: #1a83c8;\n    margin-top: 10px;\n    font-size: 30px;\n    font-family: serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkdGFyZWF0L0M6XFx4YW1wcFxcaHRkb2NzXFxDYXJkaW9jZW50cm9NYW50YVxcaW5pY2lvL3NyY1xcYXBwXFxhZGR0YXJlYXRcXGFkZHRhcmVhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxzQkFBc0I7RUFDdEIseUJBQXlCLEVBQUE7RUFIN0I7SUFNUSxtQkFBbUIsRUFBQTtFQU4zQjtJQVNRLGNBQWMsRUFBQTtFQVR0QjtJQWVHLHlCQUF5QixFQUFBO0VBSTVCO0VBQ0ksc0JBQXNCO0VBQ3RCLHFCQUFhLEVBQUE7RUFFakI7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBO0VBSHRCO0lBUVEsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGR0YXJlYXQvYWRkdGFyZWF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtMXtcclxuIFxyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTgzYzg7XHJcbiAgIFxyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFhODNjODtcclxuICAgIH1cclxuICAgIHBhZGRpbmcge1xyXG4gICAgICAgIGNvbG9yOiAjMWE4M2M4O1xyXG4gICAgfVxyXG5cclxuICBcclxuIC5mb25kb3tcclxuXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxyXG4gfVxyXG4gICAgXHJcbn1cclxuLmZvcm0ye1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDhweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2YwZTFjMztcclxufVxyXG4uZm9ybTN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE2cHggMHB4IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxuIFxyXG4gICAgXHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6ICMxYTgzYzg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gICAgICAgLy8gYmFja2dyb3VuZDojMWE4M2M4O1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/addtareat/addtareat.page.ts":
/*!*********************************************!*\
  !*** ./src/app/addtareat/addtareat.page.ts ***!
  \*********************************************/
/*! exports provided: AddtareatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtareatPage", function() { return AddtareatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AddtareatPage = /** @class */ (function () {
    function AddtareatPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AddtareatPage.prototype.ngOnInit = function () {
    };
    AddtareatPage.prototype.salir = function () {
        // this.navCtrl.pop();
        this.navCtrl.navigateBack('/tareas');
    };
    AddtareatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addtareat',
            template: __webpack_require__(/*! ./addtareat.page.html */ "./src/app/addtareat/addtareat.page.html"),
            styles: [__webpack_require__(/*! ./addtareat.page.scss */ "./src/app/addtareat/addtareat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AddtareatPage);
    return AddtareatPage;
}());



/***/ })

}]);
//# sourceMappingURL=addtareat-addtareat-module.js.map