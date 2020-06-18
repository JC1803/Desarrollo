(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bienvenido-bienvenido-module"],{

/***/ "./src/app/bienvenido/bienvenido.module.ts":
/*!*************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.module.ts ***!
  \*************************************************/
/*! exports provided: BienvenidoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPageModule", function() { return BienvenidoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bienvenido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bienvenido.page */ "./src/app/bienvenido/bienvenido.page.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _bienvenido_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidoPage"]
    }
];
var BienvenidoPageModule = /** @class */ (function () {
    function BienvenidoPageModule() {
    }
    BienvenidoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__["RoundProgressModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _bienvenido_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidoPage"] }])
            ],
            declarations: [_bienvenido_page__WEBPACK_IMPORTED_MODULE_6__["BienvenidoPage"]]
        })
    ], BienvenidoPageModule);
    return BienvenidoPageModule;
}());



/***/ }),

/***/ "./src/app/bienvenido/bienvenido.page.html":
/*!*************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content fullscreen>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  <div class=\"fondo5\" padding>  \n   \n  <ion-card  class=\"colores\">\n    <ion-card-header class=\"fondo4\">\n      <ion-card-title>\n        <h2 text-center>Avances de <b> Tareas</b></h2>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <h3 text-center> <b>Tareas Laborales </b></h3>\n      <canvas #doughnutCanvas></canvas>\n      <p text-center> <b>Terminadas:</b> {{ (datosdash.Total_Terminada * 100) / datosdash.Total_Responsables | number:'1.1-2'}}% </p>\n      <p text-center> <b>Pendientes:</b> {{ (datosdash.Total_Pendiente * 100) / datosdash.Total_Responsables | number:'1.1-2'}}% </p>\n      <p text-center> <b>Vencidas:</b> {{ (datosdash.Total_Vencida * 100) / datosdash.Total_Responsables | number:'1.1-2'}}% </p>\n      <ion-button class=\"botones\" fill=\"outline\" slot=\"end\" (click)=\"irdashboard()\">Ver Detalles</ion-button>\n          </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <ion-card-header class=\"fondo1\">\n              <ion-card-title>\n                <h2>Tareas Laborales <b> Pendientes</b></h2>\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-item *ngFor=\"let  laboral of tareasreci\">\n                <ion-icon slot=\"start\" name=\"checkbox-outline\"></ion-icon>\n                <p  (click)=\"mostrartareat(laboral.Id_Tarea)\">\n                  {{laboral.tarea.Nombre}}\n                </p>\n                <ion-note slot=\"end\">\n                  <p><b>Limite:</b>{{ laboral.tarea.FechaFin }} </p>\n                </ion-note>\n              </ion-item>\n              <ion-item (click)=\"irtareas()\">\n                <p> Ver todas </p>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n          <ion-card >\n            <ion-card-header class=\"fondo2\">\n              <ion-card-title>\n                <h2>Reuniones <b> Vigentes</b></h2>\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-item *ngFor=\"let  reunion of reunionvigentes\">\n                <ion-icon slot=\"start\" name=\"paper-plane\"></ion-icon>\n                <p (click)=\"mostrarreunion(reunion.Id_Reunion, reunion.motivo, reunion.asistencia)\">\n                  {{reunion.reunion.Tema}}\n                </p>\n                <ion-note slot=\"end\">\n                  <p><b>Fecha:</b>{{ reunion.reunion.FechadeReunion }} </p>\n                </ion-note>\n              </ion-item>\n              <ion-item (click)=\"irreunion()\">\n                <p> Ver todas </p>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n          <ion-card >\n            <ion-card-header class=\"fondo3\">\n              <ion-card-title>\n                <h2>Tareas <b> Personales</b></h2>\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-item *ngFor=\"let  personal of tareasp\">\n                <ion-icon slot=\"start\" name=\"checkbox-outline\"></ion-icon>\n                <p  (click)=\"mostrartareat(personal.Id_tarea)\">\n                  {{personal.Nombre}}\n                </p>\n                <ion-note slot=\"end\">\n                  <p><b>Limite:</b>{{ personal.FechaFin }} </p>\n                </ion-note>\n              </ion-item>\n              <ion-item (click)=\"irtareasp()\">\n                <p> Ver todas </p>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n          </div>\n          </ion-content>"

/***/ }),

/***/ "./src/app/bienvenido/bienvenido.page.scss":
/*!*************************************************!*\
  !*** ./src/app/bienvenido/bienvenido.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px; }\n\n.swiper-slide {\n  display: block; }\n\nion-slide > h2 {\n  margin-top: 2.8rem; }\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0; }\n\n.espacio1 {\n  padding: 0px 0px 20px 0px; }\n\nion-card {\n  --background: #fbfcff8c; }\n\n.current {\n  color: #a2631f;\n  position: absolute;\n  margin: 37% 25% 0% 33%;\n  font-weight: 400;\n  font-size: 2rem; }\n\nh3 {\n  color: #a2631f; }\n\nround-progress {\n  margin: 5% 25% 0% 3%; }\n\nh2 {\n  font-size: 17px; }\n\n.colores p {\n  color: #a2631f;\n  margin: 10px 0px 5px 0px;\n  font-size: 15px; }\n\n.fondo1 {\n  --background:#e7ebef; }\n\n.fondo2 {\n  --background:#e7ebef; }\n\n.fondo3 {\n  --background:#e7ebef; }\n\n.fondo4 {\n  --background:#f6f6f8; }\n\n.fondo5 {\n  background: #efefef;\n  background-size: cover;\n  background-position: center; }\n\np {\n  font-size: 12px; }\n\nion-note {\n  margin: 0px 0px 0px 5px; }\n\n.botones {\n  color: #1fb817;\n  --border-color: #f6f6f8;\n  font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmllbnZlbmlkby9DOlxceGFtcHBcXGh0ZG9jc1xcQ2FyZGlvY2VudHJvTWFudGFcXGluaWNpby9zcmNcXGFwcFxcYmllbnZlbmlkb1xcYmllbnZlbmlkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBb0I7RUFDcEIsNEJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksY0FBYyxFQUFBOztBQUVoQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdoQjtFQUNBLHlCQUF5QixFQUFBOztBQUd6QjtFQUNFLHVCQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVuQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFFSSxvQkFBb0IsRUFBQTs7QUFFeEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBR0ksY0FBYztFQUNaLHdCQUF3QjtFQUN4QixlQUFlLEVBQUE7O0FBSXJCO0VBQ0Usb0JBQWEsRUFBQTs7QUFHZjtFQUNFLG9CQUFhLEVBQUE7O0FBR2Y7RUFDQyxvQkFBYSxFQUFBOztBQUdkO0VBQ0Usb0JBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMkJBQTRCLEVBQUE7O0FBSTlCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNBLGNBQWE7RUFDYix1QkFBZTtFQUNmLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JpZW52ZW5pZG8vYmllbnZlbmlkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxuICB9XHJcblxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgaW9uLXNsaWRlID4gaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMi44cmVtO1xyXG4gIH1cclxuICBpb24tc2xpZGUgPiBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDM2cHggMDtcclxuICB9XHJcblxyXG4gIC5lc3BhY2lvMXtcclxuICBwYWRkaW5nOiAwcHggMHB4IDIwcHggMHB4O1xyXG4gIH0gXHJcblxyXG4gIGlvbi1jYXJke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmJmY2ZmOGM7XHJcbiAgfVxyXG5cclxuICAuY3VycmVudCB7XHJcbiAgICBjb2xvcjogI2EyNjMxZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMzclIDI1JSAwJSAzMyU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbmgze1xyXG4gIGNvbG9yOiAjYTI2MzFmO1xyXG59XHJcbnJvdW5kLXByb2dyZXNze1xyXG4gICAgXHJcbiAgICBtYXJnaW46IDUlIDI1JSAwJSAzJTtcclxufVxyXG5oMntcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5jb2xvcmVze1xyXG5cclxuICBwe1xyXG4gICAgY29sb3I6ICNhMjYzMWY7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwcHggNXB4IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvbmRvMSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiNlN2ViZWY7XHJcblxyXG59XHJcbi5mb25kbzIge1xyXG4gIC0tYmFja2dyb3VuZDojZTdlYmVmO1xyXG4gIFxyXG59XHJcbi5mb25kbzMge1xyXG4gLS1iYWNrZ3JvdW5kOiNlN2ViZWY7XHJcbiAgICBcclxufVxyXG4uZm9uZG80IHtcclxuICAtLWJhY2tncm91bmQ6I2Y2ZjZmODtcclxuXHJcbiAgfVxyXG4uZm9uZG81e1xyXG4gIGJhY2tncm91bmQ6I2VmZWZlZjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA7XHJcbiBcclxufVxyXG5cclxucHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1ub3Rle1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG59XHJcblxyXG4uYm90b25lc3tcclxuY29sb3I6IzFmYjgxNztcclxuLS1ib3JkZXItY29sb3I6ICNmNmY2Zjg7XHJcbmZvbnQtc2l6ZTogMTBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/bienvenido/bienvenido.page.ts":
/*!***********************************************!*\
  !*** ./src/app/bienvenido/bienvenido.page.ts ***!
  \***********************************************/
/*! exports provided: BienvenidoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidoPage", function() { return BienvenidoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");









var BienvenidoPage = /** @class */ (function () {
    function BienvenidoPage(menu, _navCtrl, activatedRoute, postPvdr, storage, router, platform
    //private navPr: NavParams
    ) {
        this.menu = menu;
        this._navCtrl = _navCtrl;
        this.activatedRoute = activatedRoute;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.router = router;
        this.platform = platform;
        this.argumento = null;
        this.datos = [];
        this.id = "";
        this.max = 0;
        this.textoBuscar = '';
        this.tareasp = [];
        this.tareasreci = [];
        this.reunionvigentes = [];
        this.mostrtap = [];
        this.mostrtal = [];
        this.mostrreu = [];
    }
    BienvenidoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.close();
        this.postPvdr.$getListSource.subscribe(function (list) {
            _this.datos = list;
            _this.id = _this.datos[0].Id_Usuario;
            console.log(list);
            console.log(_this.id);
        });
        this.cargarValores();
        this.cargarTareasRecientes();
        this.cargarTareasPersonales();
        this.cargarReunionesVigentes();
    };
    BienvenidoPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.doughnutChart = _this.getDoughnutChart();
        }, 250);
    };
    BienvenidoPage.prototype.getChart = function (context, chartType, data, options) {
        return new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](context, {
            data: data,
            options: options,
            type: chartType
        });
    };
    BienvenidoPage.prototype.getDoughnutChart = function () {
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
    BienvenidoPage.prototype.cargarValores = function () {
        var _this = this;
        this.postPvdr.getdasboard(this.id)
            .subscribe(function (data) {
            if (data != null) {
                //this.postPvdr.Gresta= data.json();
                // this.datosdash = Object.values(data);
                _this.datosdash = data;
                console.log(_this.datosdash);
            }
        }, function (error) {
            console.error(error);
        });
    };
    BienvenidoPage.prototype.cargarTareasPersonales = function () {
        var _this = this;
        this.postPvdr.getTareasP(this.id).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.tareasp = data.filter(function (tareas) { return tareas.Estado_Tarea === "Pendiente"; });
                if (_this.tareasp.length > 3) {
                    _this.tareasp.length = 3;
                }
            }
        }, function (error) {
            console.error(error);
        });
    };
    BienvenidoPage.prototype.cargarTareasRecientes = function () {
        var _this = this;
        this.postPvdr.getTareasRes(this.id).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.tareasreci = data.filter(function (tareas) { return tareas.tarea.Estado_Tarea === "Pendiente" && tareas.tarea.Id_Tipo_Tarea === 5; });
                if (_this.tareasreci.length > 3) {
                    _this.tareasreci.length = 3;
                }
            }
        }, function (error) {
            console.error(error);
        });
    };
    BienvenidoPage.prototype.cargarReunionesVigentes = function () {
        var _this = this;
        this.postPvdr.getReuparti(this.id)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.reunionvigentes = data.filter(function (reunion) { return reunion.reunion.Estado === "Pendiente"; });
            }
            if (_this.reunionvigentes.length > 3) {
                _this.reunionvigentes.length = 3;
            }
        }, function (error) {
            console.error(error);
        });
    };
    BienvenidoPage.prototype.doRefresh = function (evento) {
        this.cargarValores();
        this.cargarTareasRecientes();
        this.cargarTareasPersonales();
        this.cargarReunionesVigentes();
        this.doughnutChart = this.getDoughnutChart();
        setTimeout(function () {
            evento.target.complete();
        }, 2000);
    };
    BienvenidoPage.prototype.irtareas = function () {
        this.router.navigate(['/tareas']);
    };
    BienvenidoPage.prototype.irreunion = function () {
        this.router.navigate(['/reunion']);
    };
    BienvenidoPage.prototype.irdashboard = function () {
        this.router.navigate(['/actividades']);
    };
    BienvenidoPage.prototype.irtareasp = function () {
        this.router.navigate(['/tpersonal']);
    };
    //Busqueda
    BienvenidoPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    BienvenidoPage.prototype.mostrartareap = function (id) {
        var _this = this;
        this.postPvdr.buscarTareas(id).subscribe(function (dato) {
            if (dato != null) {
                _this.mostrtap = dato;
                console.log(dato);
                _this.postPvdr.sendListTarea(_this.mostrtap);
                _this.router.navigate(['/vertareap']);
            }
        }, function (error) {
            console.error(error);
        });
    };
    BienvenidoPage.prototype.mostrartareat = function (id) {
        var _this = this;
        this.postPvdr.buscarTareas(id).subscribe(function (dato) {
            if (dato != null) {
                _this.mostrtal = dato;
                console.log(dato);
                _this.postPvdr.sendListTarea(_this.mostrtal);
                _this.router.navigate(['/vertarea']);
            }
        }, function (error) {
            console.error(error);
        });
    };
    BienvenidoPage.prototype.mostrarreunion = function (id, motivo, asistencia) {
        var _this = this;
        this.postPvdr.getReunion(id).subscribe(function (dato) {
            if (dato != null) {
                _this.mostrreu = dato;
                console.log(_this.mostrreu);
                _this.postPvdr.sendListReunion(_this.mostrreu);
                _this.postPvdr.Gmotivo = motivo;
                _this.postPvdr.Gasistencia = asistencia;
                _this.router.navigate(['/verreunion']);
            }
        }, function (error) {
            console.error(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("doughnutCanvas"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BienvenidoPage.prototype, "doughnutCanvas", void 0);
    BienvenidoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bienvenido',
            template: __webpack_require__(/*! ./bienvenido.page.html */ "./src/app/bienvenido/bienvenido.page.html"),
            styles: [__webpack_require__(/*! ./bienvenido.page.scss */ "./src/app/bienvenido/bienvenido.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
            //private navPr: NavParams
        ])
    ], BienvenidoPage);
    return BienvenidoPage;
}());



/***/ })

}]);
//# sourceMappingURL=bienvenido-bienvenido-module.js.map