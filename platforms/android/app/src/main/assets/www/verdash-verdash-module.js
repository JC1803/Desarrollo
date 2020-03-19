(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verdash-verdash-module"],{

/***/ "./src/app/verdash/verdash.module.ts":
/*!*******************************************!*\
  !*** ./src/app/verdash/verdash.module.ts ***!
  \*******************************************/
/*! exports provided: VerdashPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerdashPageModule", function() { return VerdashPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verdash_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verdash.page */ "./src/app/verdash/verdash.page.ts");








var routes = [
    {
        path: '',
        component: _verdash_page__WEBPACK_IMPORTED_MODULE_7__["VerdashPage"]
    }
];
var VerdashPageModule = /** @class */ (function () {
    function VerdashPageModule() {
    }
    VerdashPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__["RoundProgressModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_verdash_page__WEBPACK_IMPORTED_MODULE_7__["VerdashPage"]]
        })
    ], VerdashPageModule);
    return VerdashPageModule;
}());



/***/ }),

/***/ "./src/app/verdash/verdash.page.html":
/*!*******************************************!*\
  !*** ./src/app/verdash/verdash.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  >\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/actividades\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Detalles de Avances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider color=\"light\"> </ion-item-divider>\n  <ion-item>\n    <ion-label position=\"stacked\" >Año</ion-label>\n    <ion-datetime displayFormat=\"YYYY\" value=\"anio\" [(ngModel)]=\"anio\" picker-format=\"YYYY\" placeholder=\"Seleccionar\"  cancelText=\"Cancelar\" doneText=\"Aceptar\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">Mes</ion-label>\n    <ion-datetime displayFormat=\"M\" value=\"mes\" [(ngModel)]=\"mes\" picker-format=\"M\" placeholder=\"Seleccionar\"  cancelText=\"Cancelar\" doneText=\"Aceptar\"></ion-datetime>\n  </ion-item>\n  <ion-button expand=\"block\" color=\"tertiary\" (click)=\"cargardash()\">Cargar resultados</ion-button>\n  <ion-item-divider color=\"light\"> </ion-item-divider>\n  <h3 text-center>{{mensaje}} </h3>\n  <canvas #doughnutCanvas></canvas>\n\n  <ion-item-divider color=\"light\"> </ion-item-divider>\n  <ion-list>\n    <ion-list-header>\n      <ion-label class=\"text\">Efectividad: {{(datosefectividad.Efectividad)}}%</ion-label>\n    </ion-list-header>\n    <div class=\"ronda\">\n      <round-progress   [semicircle]=\"true\"  [current]=\"datosefectividad.Efectividad\" [max]=\"max1\"\n      [duration]=\"5000\"\n      [animation]=\"'easeInOutQuart'\"\n      [color]=\"'#3738ef'\"\n      [animationDelay]=\"0\"></round-progress>\n    </div>\n  </ion-list>\n  <ion-item-divider color=\"light\"> </ion-item-divider>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/verdash/verdash.page.scss":
/*!*******************************************!*\
  !*** ./src/app/verdash/verdash.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-progress-bar {\n  height: 10px;\n  --background:#4ce18e;\n  --buffer-background: #4ce18e; }\n\n.ronda {\n  color: #362f8c; }\n\n.ronda round-progress {\n    margin: 5% 25% 0% 20%; }\n\n.text {\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyZGFzaC9DOlxceGFtcHBcXGh0ZG9jc1xcQ2FyZGlvY2VudHJvTWFudGFcXGluaWNpby9zcmNcXGFwcFxcdmVyZGFzaFxcdmVyZGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osb0JBQWE7RUFDYiw0QkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBSVEscUJBQXFCLEVBQUE7O0FBSzdCO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmVyZGFzaC92ZXJkYXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1wcm9ncmVzcy1iYXJ7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IzRjZTE4ZTtcclxuICAgIC0tYnVmZmVyLWJhY2tncm91bmQ6ICM0Y2UxOGU7XHJcbn1cclxuXHJcbi5yb25kYSB7XHJcbiAgICBjb2xvcjogIzM2MmY4YztcclxuICAgXHJcbiAgICByb3VuZC1wcm9ncmVzc3tcclxuICAgICAgICBtYXJnaW46IDUlIDI1JSAwJSAyMCU7XHJcbiAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/verdash/verdash.page.ts":
/*!*****************************************!*\
  !*** ./src/app/verdash/verdash.page.ts ***!
  \*****************************************/
/*! exports provided: VerdashPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerdashPage", function() { return VerdashPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");




var VerdashPage = /** @class */ (function () {
    function VerdashPage(postPvdr) {
        this.postPvdr = postPvdr;
        this.datos = [];
        this.datosefectividad = [];
        this.max1 = 1;
    }
    VerdashPage.prototype.ngOnInit = function () {
        var _this = this;
        this.anio = null;
        this.mes = null;
        this.postPvdr.$getListSource.subscribe(function (list) {
            //console.log(list)
            _this.datos = list;
            _this.id = _this.datos[0].Id_Usuario;
            console.log(_this.id);
        });
        if (this.postPvdr.Gdash == '2') {
            this.mensaje = "Resultados Laborales";
        }
        else if (this.postPvdr.Gdash == '3') {
            this.mensaje = "Resultados Personales";
        }
        this.cargardash();
    };
    //Funcion que estructura el grafico
    VerdashPage.prototype.getChart = function (context, chartType, data, options) {
        return new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](context, {
            data: data,
            options: options,
            type: chartType
        });
    };
    //Funcion que define el grafico
    VerdashPage.prototype.getDoughnutChart = function () {
        var data = {
            labels: ['Terminadas', 'Pendientes', 'Vencidas'],
            datasets: [{
                    label: 'Teste Chart',
                    data: [this.datosdash.Total_Terminada, this.datosdash.Total_Pendiente, this.datosdash.Total_Vencida],
                    backgroundColor: [
                        "rgb(31, 184, 23)",
                        "rgb(233, 233, 87)",
                        "rgb(255, 0, 0)",
                    ]
                }]
        };
        return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
    };
    VerdashPage.prototype.getDoughnutChart1 = function () {
        var data = {
            labels: ['Terminadas', 'Pendientes', 'Vencidas'],
            datasets: [{
                    label: 'Teste Chart',
                    data: [3, 3, 3],
                    backgroundColor: [
                        "rgb(31, 184, 23)",
                        "rgb(233, 233, 87)",
                        "rgb(255, 0, 0)",
                    ]
                }]
        };
        return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
    };
    VerdashPage.prototype.cargarDashLaboral = function () {
        var _this = this;
        console.log(this.mes.substr(5, 2));
        console.log(this.anio.substr(0, 4));
        this.postPvdr.getdasboardLaboral(this.id, this.anio.substr(0, 4), this.mes.substr(5, 2))
            .subscribe(function (data) {
            if (data != null) {
                //this.postPvdr.Gresta= data.json();
                _this.datosdash = data;
                console.log(_this.datosdash);
            }
        }, function (error) {
            console.error(error);
        });
    };
    VerdashPage.prototype.cargarDashPersonal = function () {
        var _this = this;
        console.log(this.mes.substr(5, 2));
        console.log(this.anio);
        this.postPvdr.getdasboardPersonal(this.id, this.anio.substr(0, 4), this.mes.substr(5, 2))
            .subscribe(function (data) {
            if (data != null) {
                //this.postPvdr.Gresta= data.json();
                _this.datosdash = data;
                console.log(_this.datosdash);
            }
        }, function (error) {
            console.error(error);
        });
    };
    VerdashPage.prototype.cargarEfectividadLaboral = function () {
        var _this = this;
        this.postPvdr.getEfectividadLaboral(this.id, this.anio.substr(0, 4), this.mes.substr(5, 2))
            .subscribe(function (data) {
            if (data != null) {
                //this.postPvdr.Gresta= data.json();
                _this.datosefectividad = data;
                console.log(_this.datosefectividad);
            }
        }, function (error) {
            console.error(error);
        });
    };
    VerdashPage.prototype.cargarEfectividadPersonal = function () {
        var _this = this;
        this.postPvdr.getEfectividadPersonal(this.id, this.anio.substr(0, 4), this.mes.substr(5, 2))
            .subscribe(function (data) {
            if (data != null) {
                //this.postPvdr.Gresta= data.json();
                _this.datosefectividad = data;
                console.log(_this.datosefectividad);
            }
        }, function (error) {
            console.error(error);
        });
    };
    //funcion  para evaluar el tipo de grafico a lanzar
    VerdashPage.prototype.cargardash = function () {
        if (this.mes == null || this.anio == null) {
            this.doughnutChart = this.getDoughnutChart1();
        }
        else {
            if (this.postPvdr.Gdash == '2') {
                this.cargarDashLaboral();
                this.cargarEfectividadLaboral();
                this.doughnutChart = this.getDoughnutChart();
            }
            else if (this.postPvdr.Gdash == '3') {
                this.cargarDashPersonal();
                this.cargarEfectividadPersonal();
                this.doughnutChart = this.getDoughnutChart();
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("doughnutCanvas"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VerdashPage.prototype, "doughnutCanvas", void 0);
    VerdashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verdash',
            template: __webpack_require__(/*! ./verdash.page.html */ "./src/app/verdash/verdash.page.html"),
            styles: [__webpack_require__(/*! ./verdash.page.scss */ "./src/app/verdash/verdash.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"]])
    ], VerdashPage);
    return VerdashPage;
}());



/***/ })

}]);
//# sourceMappingURL=verdash-verdash-module.js.map