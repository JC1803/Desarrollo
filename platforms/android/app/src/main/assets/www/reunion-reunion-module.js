(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reunion-reunion-module"],{

/***/ "./src/app/reunion/reunion.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reunion/reunion.module.ts ***!
  \*******************************************/
/*! exports provided: ReunionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReunionPageModule", function() { return ReunionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reunion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reunion.page */ "./src/app/reunion/reunion.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _reunion_page__WEBPACK_IMPORTED_MODULE_6__["ReunionPage"]
    }
];
var ReunionPageModule = /** @class */ (function () {
    function ReunionPageModule() {
    }
    ReunionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reunion_page__WEBPACK_IMPORTED_MODULE_6__["ReunionPage"]]
        })
    ], ReunionPageModule);
    return ReunionPageModule;
}());



/***/ }),

/***/ "./src/app/reunion/reunion.page.html":
/*!*******************************************!*\
  !*** ./src/app/reunion/reunion.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col size=\"4\" class=\"centrar\">\n        <ion-title> REUNION</ion-title>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-searchbar mode=\"ios\" animated showCancelButton=\"focus\" cancelButtonText=\"X\" (ionChange)=\"buscar($event)\">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<div>\n  <ion-item>\n    <ion-label color=\"medium\">Estado</ion-label>\n    <ion-select placeholder=\"Todas\" [(ngModel)]=\"estado\" name=\"estado\" okText=\"Ok\" cancelText=\"Cancelar\"\n      name=\"estadotarea\" value=\"Pendiente\" (ionChange)=\"segmentChanged($event)\">\n      <ion-select-option value=\"Pendiente\">Pendientes</ion-select-option>\n      <ion-select-option value=\"Terminada\">Terminadas</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"tipo\" scrollable (ionChange)=\"segmentChanged1($event1)\" value=\"1\">\n      <ion-segment-button value=\"1\" checked layout=\"icon-start\">\n        <ion-label class=\"espacio\">Creadas</ion-label>\n        <ion-icon name=\"hand\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"2\" layout=\"icon-start\">\n        <ion-label class=\"espacio\">Responsable</ion-label>\n        <ion-icon name=\"person\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"3\" layout=\"icon-start\">\n        <ion-label class=\"espacio\">Participante </ion-label>\n        <ion-icon name=\"contacts\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</div>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf=\"ocultar1== 1\">\n    <ion-list *ngFor=\"let  reu of reunion |filtro:textoBuscar : 'Tema'\">\n      <ion-item class=\"bord\" (click)=\"verreunions(reu.Id_Reunion,reu.motivo, reu.asistencia)\">\n        <ion-icon slot=\"start\" name=\"paper-plane\"></ion-icon>\n        <ion-text color=\"dark\">\n          <p class=\"letra1\">{{reu.Tema}} </p>\n          <p class=\"letra\"> <b> Fecha: </b> {{reu.FechadeReunion}} <b>Lugar:</b>{{reu.Lugar}} </p>\n        </ion-text>\n        <ion-note class=\"tamanio\" slot=\"end\" color=\"tertiary\">{{reu.Estado}}</ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf=\"ocultar1== 0\">\n    <ion-list *ngFor=\"let  reu of reunion\">\n      <ion-item class=\"bord\" (click)=\"verreunions(reu.Id_Reunion, reu.motivo, reu.asistencia)\">\n        <ion-icon slot=\"start\" name=\"paper-plane\"></ion-icon>\n        <ion-text color=\"dark\">\n          <p class=\"letra1\">{{reu.reunion.Tema}} </p>\n          <p class=\"letra\"> <b> Fecha: </b> {{reu.reunion.FechadeReunion}} <b>Lugar:</b>{{reu.reunion.Lugar}} </p>\n        </ion-text>\n        <ion-note class=\"tamanio\" slot=\"end\" color=\"tertiary\">{{reu.reunion.Estado}}</ion-note>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/reunion/reunion.page.scss":
/*!*******************************************!*\
  !*** ./src/app/reunion/reunion.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".letra {\n  font-size: 10px;\n  line-height: 12px;\n  padding: 4px 0px 5px 0px; }\n\n.botones {\n  margin: 0px 0px 0px 16px; }\n\n.centrar {\n  line-height: 50px;\n  align-items: center; }\n\nion-searchbar {\n  padding: 0px 7px;\n  font-size: 14px;\n  height: 50px; }\n\nion-col {\n  padding: 0px 5px;\n  height: 50px; }\n\nion-title {\n  font-family: menu;\n  padding: 0px 5px 0px; }\n\n.bord {\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.bord p {\n    color: black;\n    display: flexbox;\n    margin: 1px 5px 0px 0px; }\n\n.bord p b {\n      font-size: 10px; }\n\n.bord h2 {\n    font-size: 15px; }\n\n.form {\n  padding: 0px 40px 0px;\n  text-align: center;\n  font-family: serif; }\n\nion-segment-button {\n  --padding-start: unset;\n  --padding-end: unset;\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n  --border-color:#251f81;\n  --color: #a5b7ac;\n  --color-checked: #251f81; }\n\nion-segment-button ion-button {\n    --max-width: 500px; }\n\nion-segment-button ion-label {\n    font-size: smaller; }\n\nion-segment-button ion-icon {\n    font-size: 16px; }\n\n.sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button {\n  max-width: unset;\n  --background-checked: #251f81;\n  --color-checked: #ffffff;\n  /* font-size: 12px; */\n  /* line-height: 22px; */ }\n\n.espacio {\n  margin: 5px 5px; }\n\n.tamanio {\n  font-size: 12px; }\n\nion-list {\n  margin: 0px 0px; }\n\n.letra1 {\n  font-size: 13px;\n  text-align: justify;\n  padding: 10px 0px 0px 0px;\n  margin: 0px 0px 15px; }\n\n.letra1 p {\n    font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV1bmlvbi9DOlxceGFtcHBcXGh0ZG9jc1xcQ2FyZGlvY2VudHJvTWFudGFcXGluaWNpby9zcmNcXGFwcFxccmV1bmlvblxccmV1bmlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2IsaUJBQWlCO0VBQ2pCLHdCQUF3QixFQUFBOztBQUd4QjtFQUNJLHdCQUF3QixFQUFBOztBQUU1QjtFQUVJLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNsQixZQUFZLEVBQUE7O0FBR1Y7RUFDQyxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFxQixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFGbkI7SUFJRSxZQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBOztBQU56QjtNQVFJLGVBQWUsRUFBQTs7QUFSbkI7SUFZRSxlQUFlLEVBQUE7O0FBSWpCO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxzQkFBZ0I7RUFDaEIsb0JBQWM7RUFDZCxrQkFBYztFQUNkLHFCQUFpQjtFQUNsQixzQkFBZTtFQUdkLGdCQUFRO0VBQ1Isd0JBQWdCLEVBQUE7O0FBVGxCO0lBVWUsa0JBQVksRUFBQTs7QUFWM0I7SUFZRyxrQkFBa0IsRUFBQTs7QUFackI7SUFlSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUFxQjtFQUNyQix3QkFBZ0I7RUFDakIscUJBQUE7RUFDQSx1QkFBQSxFQUF3Qjs7QUFHMUI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNDLGVBQWUsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBS25CLHlCQUF5QjtFQUN6QixvQkFBb0IsRUFBQTs7QUFSdEI7SUFJSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXVuaW9uL3JldW5pb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldHJhIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgIHBhZGRpbmc6IDRweCAwcHggNXB4IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvdG9uZXMge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTZweDtcclxuICAgIH1cclxuICAgIC5jZW50cmFyIHtcclxuICAgICAgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgIGhlaWdodDogNTBweDtcclxuICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgaW9uLWNvbHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgfVxyXG4gICAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1lbnU7XHJcbiAgICAgICAgcGFkZGluZzowcHggNXB4IDBweCAgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9yZHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHB7XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4Ym94O1xyXG4gICAgICBtYXJnaW46IDFweCA1cHggMHB4IDBweDtcclxuICAgICAgYntcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmZvcm17XHJcbiAgICAgIHBhZGRpbmc6IDBweCA0MHB4IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICB9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IHVuc2V0O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiB1bnNldDsgXHJcbiAgICAgIC0tcGFkZGluZy10b3A6IDJweDsgXHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDJweDsgICBcclxuICAgICAtLWJvcmRlci1jb2xvcjojMjUxZjgxO1xyXG4gICAgIC8vLS1mb250LXNpemU6IDEycHg7XHJcbiAgICAgLy8tLWJhY2tncm91bmQtY2hlY2tlZDogI2QzZjhmMDtcclxuICAgICAgLS1jb2xvcjogI2E1YjdhYzs7XHJcbiAgICAgIC0tY29sb3ItY2hlY2tlZDogIzI1MWY4MTtcclxuICAgICBpb24tYnV0dG9uIHsgIC0tbWF4LXdpZHRoOiA1MDBweDsgfVxyXG4gICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgfVxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNjLWlvbi1zZWdtZW50LWlvcy1oaW9uLXRvb2xiYXIuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24sIGlvbi10b29sYmFyIC5zYy1pb24tc2VnbWVudC1pb3MtaC5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMjUxZjgxOztcclxuICAgICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xyXG4gICAgIC8qIGZvbnQtc2l6ZTogMTJweDsgKi9cclxuICAgICAvKiBsaW5lLWhlaWdodDogMjJweDsgKi9cclxuIH1cclxuICAgXHJcbiAgIC5lc3BhY2lvIHtcclxuICAgICBtYXJnaW46IDVweCA1cHg7XHJcbiAgIH1cclxuXHJcbiAgIC50YW1hbmlve1xyXG4gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgfVxyXG5cclxuICAgaW9uLWxpc3R7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbn1cclxuXHJcbi5sZXRyYTEge1xyXG4gIGZvbnQtc2l6ZTogMTNweDsgXHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAxM3B4OyBcclxuICAgXHJcbiAgfVxyXG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDE1cHg7XHJcbn0gICAiXX0= */"

/***/ }),

/***/ "./src/app/reunion/reunion.page.ts":
/*!*****************************************!*\
  !*** ./src/app/reunion/reunion.page.ts ***!
  \*****************************************/
/*! exports provided: ReunionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReunionPage", function() { return ReunionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ReunionPage = /** @class */ (function () {
    function ReunionPage(menu, router, postPvdr) {
        this.menu = menu;
        this.router = router;
        this.postPvdr = postPvdr;
        this.reuniondetalle = [];
        this.datos = [];
        this.reunion = [];
        this.id = "";
        this.tipo = "";
        this.ocultar1 = "1";
        this.estado = "";
        this.responsable = [];
        this.participante = [];
        this.textoBuscar = '';
        this.ocultar1 = "1";
    }
    ReunionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.close();
        this.ocultar1 = "1";
        this.postPvdr.$getListSource.subscribe(function (list) {
            //console.log(list)
            _this.datos = list;
            _this.id = _this.datos[0].Id_Usuario;
            console.log(_this.id);
        });
        this.estado = "Pendiente";
        this.tipo = "1";
        this.cargarReunion();
        this.cargarpartiini();
        this.cragarreposableini();
    };
    ReunionPage.prototype.cargarReunion = function () {
        var _this = this;
        this.ocultar1 = "1";
        this.postPvdr.Gtipo == "1";
        this.postPvdr.Gbutunt1 = false;
        console.log(this.estado);
        this.postPvdr.getReunionEstado(this.id, this.estado)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                //this.postPvdr.Gresta= data.json();
                _this.reunion = data;
            }
        }, function (error) {
            console.error(error);
        });
    };
    ReunionPage.prototype.verreunions = function (id, motivo, asistencia) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //console.log(id);
                this.postPvdr.getReunion(id).subscribe(function (dato) {
                    if (dato != null) {
                        _this.reuniondetalle = dato;
                        console.log(_this.reuniondetalle);
                        _this.postPvdr.sendListReunion(_this.reuniondetalle);
                        _this.postPvdr.Gmotivo = motivo;
                        _this.postPvdr.Gasistencia = asistencia;
                        _this.router.navigate(['/verreunion']);
                    }
                }, function (error) {
                    console.error(error);
                });
                return [2 /*return*/];
            });
        });
    };
    //cargar datos en la matriz responsable inicialmente 
    ReunionPage.prototype.cragarreposableini = function () {
        var _this = this;
        this.postPvdr.Gtipo == "2";
        // this.postPvdr.Gbutunt1= false;
        this.postPvdr.getReurespon(this.id)
            .subscribe(function (data) {
            if (data != null) {
                _this.responsable = data;
            }
        }, function (error) {
            console.error(error);
        });
    };
    //cargar datos en la matriz participante inicialmente
    ReunionPage.prototype.cargarpartiini = function () {
        var _this = this;
        this.postPvdr.getReuparti(this.id)
            .subscribe(function (data) {
            if (data != null) {
                _this.participante = data;
                // this.postPvdr.Gbutunt1= true;
            }
        }, function (error) {
            console.error(error);
        });
    };
    //recarga la pagina
    //Carga responsable  cada vez que hay un cambio
    ReunionPage.prototype.cargarresponsable = function () {
        var _this = this;
        this.ocultar1 = "0";
        this.postPvdr.Gbutunt1 = false;
        this.postPvdr.getReurespon(this.id)
            .subscribe(function (data) {
            if (data != null) {
                // console.log(data.json());
                //this.postPvdr.Gresta= data.json();
                _this.responsable = data;
                console.log(_this.responsable);
            }
        }, function (error) {
            console.error(error);
        });
        if (this.estado == "Pendiente") {
            this.reunion = this.responsable.filter(function (responsable) { return responsable.reunion.Estado === "Pendiente"; });
            console.log(this.reunion);
        }
        else if (this.estado == "Terminada") {
            this.reunion = this.responsable.filter(function (responsable) { return responsable.reunion.Estado === "Terminada"; });
        }
    };
    //Carga participante cadas vez que hay cambio 
    ReunionPage.prototype.cargarparticipante = function () {
        var _this = this;
        this.ocultar1 = "0";
        this.postPvdr.Gbutunt1 = true;
        this.postPvdr.getReuparti(this.id)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                //this.postPvdr.Gresta= data.json();
                _this.participante = data;
            }
        }, function (error) {
            console.error(error);
        });
        console.log(this.estado);
        if (this.estado == "Pendiente") {
            this.reunion = this.participante.filter(function (participante) { return participante.reunion.Estado === "Pendiente"; });
            console.log(this.reunion);
        }
        else if (this.estado == "Terminada") {
            this.postPvdr.Gbutunt1 = false;
            this.reunion = this.participante.filter(function (participante) { return participante.reunion.Estado === "Terminada"; });
            console.log(this.reunion);
        }
    };
    // Funcion que filtara por estado
    ReunionPage.prototype.segmentChanged = function (ev) {
        if (this.estado == "Pendiente" && this.tipo == "1") {
            this.cargarReunion();
        }
        else if (this.estado == "Terminada" && this.tipo == "1") {
            this.cargarReunion();
        }
        else if (this.estado == "Pendiente" && this.tipo == "2") {
            this.cargarresponsable();
        }
        else if (this.estado == "Terminada" && this.tipo == "2") {
            this.cargarresponsable();
        }
        else if (this.estado == "Pendiente" && this.tipo == "3") {
            this.estado = "Pendiente";
            this.cargarparticipante();
        }
        else if (this.estado == "Terminada" && this.tipo == "3") {
            this.cargarparticipante();
        }
    };
    //Funcion que filtra por tipo de usuario (responsable, participante, creadas)
    ReunionPage.prototype.segmentChanged1 = function (ev) {
        if (this.estado == "Pendiente" && this.tipo == "1") {
            this.cargarReunion();
        }
        else if (this.estado == "Terminada" && this.tipo == "1") {
            this.cargarReunion();
        }
        else if (this.estado == "Pendiente" && this.tipo == "2") {
            this.estado = "Pendiente";
            this.cargarresponsable();
        }
        else if (this.estado == "Terminada" && this.tipo == "2") {
            this.estado = "Terminada";
            this.cargarresponsable();
        }
        else if (this.estado == "Pendiente" && this.tipo == "3") {
            this.estado = "Pendiente";
            this.cargarparticipante();
        }
        else if (this.estado == "Terminada" && this.tipo == "3") {
            this.estado = "Terminada";
            this.cargarparticipante();
        }
    };
    //busqueda 
    ReunionPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    //corregir esta nota
    ReunionPage.prototype.doRefresh = function (evento) {
        if (this.estado == "Pendiente" && this.tipo == "1") {
            this.cargarReunion();
        }
        else if (this.estado == "Terminada" && this.tipo == "1") {
            this.cargarReunion();
        }
        else if (this.estado == "Pendiente" && this.tipo == "2") {
            this.estado = "Pendiente";
            this.cargarresponsable();
        }
        else if (this.estado == "Terminada" && this.tipo == "2") {
            this.estado = "Terminada";
            this.cargarresponsable();
        }
        else if (this.estado == "Pendiente" && this.tipo == "3") {
            this.estado = "Pendiente";
            this.cargarparticipante();
        }
        else if (this.estado == "Terminada" && this.tipo == "3") {
            this.estado = "Terminada";
            this.cargarparticipante();
        }
        // this.cargarReunion();
        //this.cargarpartiini();
        //this.cargarparticipante();
        //this.cragarreposableini();
        setTimeout(function () {
            evento.target.complete();
        }, 2000);
    };
    ReunionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reunion',
            template: __webpack_require__(/*! ./reunion.page.html */ "./src/app/reunion/reunion.page.html"),
            styles: [__webpack_require__(/*! ./reunion.page.scss */ "./src/app/reunion/reunion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"]])
    ], ReunionPage);
    return ReunionPage;
}());



/***/ })

}]);
//# sourceMappingURL=reunion-reunion-module.js.map