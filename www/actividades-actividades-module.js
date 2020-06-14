(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actividades-actividades-module"],{

/***/ "./src/app/actividades/actividades.module.ts":
/*!***************************************************!*\
  !*** ./src/app/actividades/actividades.module.ts ***!
  \***************************************************/
/*! exports provided: ActividadesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadesPageModule", function() { return ActividadesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actividades_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actividades.page */ "./src/app/actividades/actividades.page.ts");








var routes = [
    {
        path: '',
        component: _actividades_page__WEBPACK_IMPORTED_MODULE_7__["ActividadesPage"]
    }
];
var ActividadesPageModule = /** @class */ (function () {
    function ActividadesPageModule() {
    }
    ActividadesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_6__["RoundProgressModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_actividades_page__WEBPACK_IMPORTED_MODULE_7__["ActividadesPage"]]
        })
    ], ActividadesPageModule);
    return ActividadesPageModule;
}());



/***/ }),

/***/ "./src/app/actividades/actividades.page.html":
/*!***************************************************!*\
  !*** ./src/app/actividades/actividades.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>DashBoard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"colorfondo\">\n  <h3  text-center> <b>Efectividad </b></h3>\n  <div class=\"current1\">{{ datosdash.Efectividad }}%</div>\n<div class=\"ronda\">\n  <round-progress   [semicircle]=\"true\"  [current]=\"datosdash.Efectividad\" [max]=\"max1\"\n  [duration]=\"5000\"\n  [animation]=\"'easeInOutQuart'\"\n  [color]=\"'#a3f8bf'\"\n  [animationDelay]=\"0\"></round-progress>\n</div>\n  <p>  </p>\n  <p>  </p>\n  <div padding>\n    <p  text-center> <b>Total de tareas Personales: </b> {{datosdash.Total_ResponsablesP}}</p>\n    <p text-center> <b>Total de tareas Laborales: </b> {{datosdash.Total_Responsables}} </p>\n  </div>\n  \n  <p>  </p>\n  <p>  </p>\n \n<ion-item-divider color=\"light\">\n  <ion-label>PROGRESO TAREAS </ion-label>\n</ion-item-divider>\n<div *ngIf=\"open\" class=\"ronda1\">\n\n  </div>\n\n  <ion-card class=\"graficas\">\n    <ion-card-header>\n     <h3> Tareas Laborales </h3> \n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas></canvas>\n      <p text-center> <b>Terminadas:</b> {{ (datosdash.Total_Terminada * 100) / datosdash.Total_Responsables | number:'1.1-2'}}% </p>\n      <p text-center> <b>Pendientes:</b> {{ (datosdash.Total_Pendiente * 100) / datosdash.Total_Responsables | number:'1.1-2'}}% </p>\n      <p text-center> <b>Vencidas:</b> {{ (datosdash.Total_Vencida * 100) / datosdash.Total_Responsables | number:'1.1-2'}}% </p>\n      <ion-button fill=\"outline\" slot=\"end\" (click)=\"verdash(2)\">Ver mas</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n    <h3>Tareas Personales </h3>  \n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas1></canvas>\n      <p text-center> <b>Terminadas:</b> {{ (datosdash.Total_TerminadaP * 100) / datosdash.Total_ResponsablesP | number:'1.1-2'}}% </p>\n      <p text-center> <b>Pendientes:</b> {{ (datosdash.Total_PendienteP * 100) / datosdash.Total_ResponsablesP | number:'1.1-2'}}%  </p>\n      <p text-center> <b>Vencidas:</b>{{ (datosdash.Total_VencidaP * 100) / datosdash.Total_ResponsablesP | number:'1.1-2'}}% </p>\n      <ion-button fill=\"outline\" slot=\"end\" (click)=\"verdash(3)\">Ver mas</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/actividades/actividades.page.scss":
/*!***************************************************!*\
  !*** ./src/app/actividades/actividades.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".current {\n  position: absolute;\n  margin: 24% 15% 0% 42%;\n  font-weight: 400;\n  font-size: 20px;\n  color: #362f8c; }\n\n.ronda {\n  color: #362f8c; }\n\n.ronda round-progress {\n    margin: 5% 25% 0% 20%; }\n\n.colorfondo {\n  background: #f2fbf7;\n  color: #362f8c;\n  background-size: cover; }\n\n.ronda1 {\n  color: #362f8c; }\n\n.ronda1 round-progress {\n    margin: 5% 25% 0% 25%; }\n\n.current1 {\n  position: absolute;\n  margin: 25% 25% 10% 45%;\n  font-weight: 400;\n  font-size: 2rem; }\n\np {\n  margin: 10px 0px 10px 0px;\n  font-size: 15px; }\n\n.esp {\n  padding: 20px 0px 0px 0px; }\n\n.graficas {\n  font-size: 15px; }\n\n.graficas p {\n    font-size: 13px; }\n\n.ubicacion p {\n  margin: 0px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZpZGFkZXMvQzpcXHhhbXBwXFxodGRvY3NcXENhcmRpb2NlbnRyb01hbnRhXFxpbmljaW8vc3JjXFxhcHBcXGFjdGl2aWRhZGVzXFxhY3RpdmlkYWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUlsQjtFQUNJLGNBQWMsRUFBQTs7QUFEbEI7SUFJUSxxQkFBcUIsRUFBQTs7QUFJN0I7RUFDSSxtQkFBbUI7RUFDbkIsY0FBZTtFQUNmLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWMsRUFBQTs7QUFEbEI7SUFHUSxxQkFBcUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0kseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFLbkI7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFFSSxlQUFlLEVBQUE7O0FBRm5CO0lBSVEsZUFBZSxFQUFBOztBQUl2QjtFQUVRLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aWRhZGVzL2FjdGl2aWRhZGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMjQlIDE1JSAwJSA0MiU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMzNjJmOGM7XHJcbiAgICBcclxufVxyXG5cclxuLnJvbmRhIHtcclxuICAgIGNvbG9yOiAjMzYyZjhjO1xyXG4gICBcclxuICAgIHJvdW5kLXByb2dyZXNze1xyXG4gICAgICAgIG1hcmdpbjogNSUgMjUlIDAlIDIwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbG9yZm9uZG97XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmYmY3O1xyXG4gICAgY29sb3I6ICMzNjJmOGMgO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnJvbmRhMSB7XHJcbiAgICBjb2xvcjogIzM2MmY4YztcclxuICAgIHJvdW5kLXByb2dyZXNze1xyXG4gICAgICAgIG1hcmdpbjogNSUgMjUlIDAlIDI1JTtcclxuICAgIH0gXHJcbn1cclxuLmN1cnJlbnQxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMjUlIDI1JSAxMCUgNDUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICBcclxufVxyXG4gXHJcbnB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5lc3B7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMHB4O1xyXG59XHJcbi5ncmFmaWNhc3tcclxuXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxufVxyXG5cclxuLnViaWNhY2lvbntcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/actividades/actividades.page.ts":
/*!*************************************************!*\
  !*** ./src/app/actividades/actividades.page.ts ***!
  \*************************************************/
/*! exports provided: ActividadesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadesPage", function() { return ActividadesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ActividadesPage = /** @class */ (function () {
    function ActividadesPage(menu, postPvdr, router) {
        this.menu = menu;
        this.postPvdr = postPvdr;
        this.router = router;
        this.datos = [];
        this.id = "";
        this.max = 0;
        this.max1 = 1;
        this.max2 = 0;
        this.current1 = 55; //terminadas
        this.current2 = 10; //vencidas
    }
    ActividadesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.close();
        this.postPvdr.$getListSource.subscribe(function (list) {
            //console.log(list)
            _this.datos = list;
            _this.id = _this.datos[0].Id_Usuario;
            console.log(_this.id);
        });
        this.cargarValores();
    };
    ActividadesPage.prototype.cargarValores = function () {
        var _this = this;
        this.postPvdr.getdasboard(this.id)
            .subscribe(function (data) {
            if (data != null) {
                //this.postPvdr.Gresta= data.json();
                _this.datosdash = data;
                console.log(_this.datosdash);
            }
        }, function (error) {
            console.error(error);
        });
        this.calculopercent();
    };
    ActividadesPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.doughnutChart = _this.getDoughnutChart();
            _this.doughnutChart1 = _this.getDoughnutChart1();
        }, 250);
    };
    ActividadesPage.prototype.getChart = function (context, chartType, data, options) {
        return new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](context, {
            data: data,
            options: options,
            type: chartType
        });
    };
    ActividadesPage.prototype.getDoughnutChart = function () {
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
    ActividadesPage.prototype.getDoughnutChart1 = function () {
        var data = {
            labels: ['Terminadas', 'Pendientes', 'Vencidas'],
            datasets: [{
                    label: 'Teste Chart',
                    data: [this.datosdash.Total_TerminadaP, this.datosdash.Total_PendienteP, this.datosdash.Total_VencidaP],
                    backgroundColor: [
                        "rgb(31, 184, 23)",
                        "rgb(233, 233, 87)",
                        "rgb(255, 0, 0)",
                    ]
                }]
        };
        return this.getChart(this.doughnutCanvas1.nativeElement, 'doughnut', data);
    };
    //Calcula el procentaje
    ActividadesPage.prototype.calculopercent = function () {
    };
    ActividadesPage.prototype.verdash = function (valor) {
        this.postPvdr.Gdash = valor;
        this.router.navigate(['/verdash']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("doughnutCanvas"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActividadesPage.prototype, "doughnutCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("doughnutCanvas1"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActividadesPage.prototype, "doughnutCanvas1", void 0);
    ActividadesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actividades',
            template: __webpack_require__(/*! ./actividades.page.html */ "./src/app/actividades/actividades.page.html"),
            styles: [__webpack_require__(/*! ./actividades.page.scss */ "./src/app/actividades/actividades.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ActividadesPage);
    return ActividadesPage;
}());



/***/ })

}]);
//# sourceMappingURL=actividades-actividades-module.js.map