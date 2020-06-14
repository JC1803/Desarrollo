(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verreunion-verreunion-module"],{

/***/ "./src/app/verreunion/verreunion.module.ts":
/*!*************************************************!*\
  !*** ./src/app/verreunion/verreunion.module.ts ***!
  \*************************************************/
/*! exports provided: VerreunionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerreunionPageModule", function() { return VerreunionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verreunion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verreunion.page */ "./src/app/verreunion/verreunion.page.ts");







var routes = [
    {
        path: '',
        component: _verreunion_page__WEBPACK_IMPORTED_MODULE_6__["VerreunionPage"]
    }
];
var VerreunionPageModule = /** @class */ (function () {
    function VerreunionPageModule() {
    }
    VerreunionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_verreunion_page__WEBPACK_IMPORTED_MODULE_6__["VerreunionPage"]]
        })
    ], VerreunionPageModule);
    return VerreunionPageModule;
}());



/***/ }),

/***/ "./src/app/verreunion/verreunion.page.html":
/*!*************************************************!*\
  !*** ./src/app/verreunion/verreunion.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"trans\" class=\"fond\">\n    <ion-title></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/reunion\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"ocultarbotones\" (click)=\"confirmarAsist()\" slot=\"end\">\n      <ion-button slot=\"end\" fill=\"outline\">Asistir</ion-button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"ocultarbotones\" slot=\"end\" (click)=\"rechazarAsist()\">\n      <ion-button slot=\"end\" fill=\"outline\">Inasistir</ion-button>\n    </ion-buttons>\n    <ion-title>Reunion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"fuente\" *ngFor=\"let  reu of datos\">\n    <ion-item-divider color=\"light\">\n      <ion-icon slot=\"start\" name=\"cafe\" color=\"dark\"></ion-icon>\n      <h3 class=\"center\"> <b>{{reu.Tema }}</b> </h3>\n    </ion-item-divider>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <label> Conclusion: </label>\n      <ion-icon slot=\"start\" name=\"list-box\" color=\"dark\"></ion-icon>\n      <ion-text>\n        <p>\n          {{reu.Conclusion}}\n        </p>\n      </ion-text>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <ion-icon slot=\"start\" name=\"time\" color=\"dark\">\n      </ion-icon>\n      <label> Estado: </label>\n      <p>\n        {{reu.Estado}}\n      </p>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <label> Fecha Inicio: </label>\n      <ion-icon slot=\"start\" name=\"clock\" color=\" dark\"></ion-icon>\n      <p>\n        {{reu.FechadeReunion}}\n      </p>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <label> Asistencia: </label>\n      <ion-icon slot=\"start\" name=\"checkbox-outline\" color=\" dark\"></ion-icon>\n      <p>\n        {{valor}}\n      </p>\n    </ion-item>\n    <ion-item-divider color=\"light\">\n    </ion-item-divider>\n    <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text>\n          <label> <b> Responsable: </b> </label>\n        </ion-text>\n        <p *ngFor=\"let  res of reu.responsables\">\n          <ion-icon slot=\"start\" name=\"person\" color=\"dark\"> </ion-icon>\n          {{res.usuario.Nombre}} {{res.usuario.Apellido}}\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text>\n          <ion-label> <b> Participantes:</b> </ion-label>\n        </ion-text>\n        <p *ngFor=\"let  par of reu.participantes\">\n          <ion-icon slot=\"start\" name=\"person\" color=\"dark\"> </ion-icon>\n          {{par.usuario.Nombre}} {{par.usuario.Apellido}}\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item-divider color=\"light\">\n      <ion-label>Itinerarios:</ion-label>\n    </ion-item-divider>\n    <ion-item class=\"taicon esp\">\n      <p> {{ reu.Orden_del_Dia}} </p>\n      <ion-icon slot=\"start\" name=\"arrow-dropright-circle\" color=\"dark\"></ion-icon>\n    </ion-item>\n    <ion-item-divider color=\"light\" buttons (click)=\"open = !open\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\" *ngIf=\"!open\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"arrow-dropdown\" *ngIf=\"open\"></ion-icon>\n      <ion-label>Opiniones:</ion-label>\n    </ion-item-divider>\n    <div *ngIf=\"open\" class=\"message-text bord\">\n      <ion-content class=\"chat\" delegate-handle=\"chatScroll\">\n        <div class=\"message-list\" *ngFor=\"let com of comentarios\">\n          <ion-item class=\"message-text\">\n            <ion-avatar slot=\"start\">\n              <img src=\"/assets/sinfoto.jpg\">\n            </ion-avatar>\n            <ion-label>\n              <h2> <b>{{ com.usuario.Nombre }} {{ com.usuario.Apellido }}</b> </h2>\n              <ion-text>\n                <p> {{ com.Descripcion }} </p>\n              </ion-text>\n              <p> {{com.Fecha}} &nbsp; &nbsp; &nbsp; <b\n                  (click)=\"mostrarObs(com.sub_observaciones,com.usuario.Nombre, com.usuario.Apellido, com.Descripcion, com.Fecha, com.Id_Tarea, com.Id_Usuario, com.Id_Observacion)\">Respuestas(0)\n                  &nbsp; &nbsp; &nbsp; Responder</b>\n                &nbsp; &nbsp; <b buttons (click)=\"com.open = !com.open\">\n                  <ion-icon slot=\"end\" name=\"arrow-dropdown\" *ngIf=\"!com.open\"></ion-icon>\n                  <ion-icon slot=\"end\" name=\"arrow-dropup\" *ngIf=\"com.open\"></ion-icon>\n                </b>\n              </p>\n            </ion-label>\n          </ion-item>\n          <ion-list *ngIf=\"com.open\">\n            <ion-item *ngFor=\"let subo of com.sub_observaciones\" class=\"sub-item1\">\n              <ion-avatar slot=\"start\">\n                <img src=\"/assets/sinfoto.jpg\">\n              </ion-avatar>\n              <ion-label class=\"text\">\n                <h3> <b>{{ subo.usuario.Nombre }} {{ subo.usuario.Apellido }}</b> </h3>\n                <h3>\n                  <ion-text> {{ subo.Descripcion }} </ion-text>\n                </h3>\n                <p> {{subo.Fecha}} &nbsp; &nbsp; &nbsp; <b>Eliminar</b></p>\n              </ion-label>\n            </ion-item>\n            <ion-item class=\"sub-item1\">\n              <ion-textarea placeholder=\"Escribe tu observacion aqui...\" [(ngModel)]='comentario1'></ion-textarea>\n              <ion-buttons>\n                <ion-button (click)=\"enviarSubComentario(com.Id_Reunion, com.Id_observacion_reunion)\">\n                  <ion-icon slot=\"end\" name=\"send\" color=\"dark\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </ion-item>\n            <ion-item-divider color=\"light\">\n            </ion-item-divider>\n          </ion-list>\n        </div>\n      </ion-content>\n    </div>\n  </ion-list>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-item>\n      <ion-textarea placeholder=\"Escribe tu opinión aquí...\" [(ngModel)]='comentario'></ion-textarea>\n      <ion-buttons>\n        <ion-button (click)=\"enviarComentario()\">\n          <ion-icon slot=\"end\" name=\"send\" color=\"dark\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/verreunion/verreunion.page.scss":
/*!*************************************************!*\
  !*** ./src/app/verreunion/verreunion.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\n.fuente label {\n  font-size: 14px;\n  color: black; }\n\n.fuente p {\n  font-size: 14px;\n  color: gray;\n  margin: 5px 5px 5px 10px; }\n\n.fuente b {\n  color: black; }\n\nion-list {\n  padding: 0px 0px 15px 0px; }\n\nh3 {\n  margin: 5px 0px;\n  font-size: 16px; }\n\nion-label {\n  margin: 5px 0px 0px 0px;\n  font-size: 14px; }\n\nion-label b {\n    font-size: 14px; }\n\nion-label ion-icon {\n    font-size: 17px; }\n\nion-item-divider ion-icon {\n  font-size: 25px;\n  padding-right: 10px; }\n\n.taicon ion-icon {\n  font-size: 17px; }\n\n.bord {\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.bord p {\n    font-size: 10px;\n    display: flexbox;\n    margin: 0px 5px 0px 0px; }\n\n.bord p b {\n      font-size: 10px; }\n\n.bord p ion-text {\n      font-size: 14px; }\n\n.bord p ion-text p {\n        font-size: 14px;\n        color: black;\n        text-align: justify; }\n\n.fond {\n  background: #cfd6dd; }\n\n.butn {\n  margin: 0 auto;\n  display: inline-block; }\n\n.col ion-button {\n  color: #3e5ad4; }\n\n.esp p {\n  margin: 5px 0px; }\n\n.message-text {\n  padding: 0px 0px; }\n\n.chat {\n  height: 400px;\n  background: #E0DAD6;\n  background-repeat: no-repeat;\n  background-size: 100%; }\n\n.message-list {\n  margin-top: 12px;\n  padding: 0px 0px; }\n\n.sub-item1 {\n  padding-left: 15px; }\n\n.sub-item1 ion-textarea {\n    padding: 10px 0px 0px 0px;\n    font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVycmV1bmlvbi9DOlxceGFtcHBcXGh0ZG9jc1xcQ2FyZGlvY2VudHJvTWFudGFcXGluaWNpby9zcmNcXGFwcFxcdmVycmV1bmlvblxcdmVycmV1bmlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFHSSxlQUFlO0VBQ2YsWUFBbUIsRUFBQTs7QUFKdkI7RUFPSyxlQUFlO0VBQ2YsV0FBVztFQUNYLHdCQUF3QixFQUFBOztBQVQ3QjtFQWFLLFlBQVksRUFBQTs7QUFHakI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUlqQjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBRmpCO0lBSUksZUFBZSxFQUFBOztBQUpuQjtJQU9JLGVBQWUsRUFBQTs7QUFJbkI7RUFFSSxlQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBSXZCO0VBRUksZUFBYyxFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFGbkI7SUFJRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBOztBQU56QjtNQVFJLGVBQWUsRUFBQTs7QUFSbkI7TUFXSSxlQUFlLEVBQUE7O0FBWG5CO1FBYU0sZUFBZTtRQUNmLFlBQVk7UUFDWixtQkFBbUIsRUFBQTs7QUFNekI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBRU0sY0FBYyxFQUFBOztBQUlwQjtFQUVRLGVBQWUsRUFBQTs7QUFHdkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRHBCO0lBR0kseUJBQXlCO0lBQ3pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZlcnJldW5pb24vdmVycmV1bmlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZ1ZW50ZSB7ICAgXHJcblxyXG4gICAgbGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIH1cclxuICAgICBwe1xyXG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICBtYXJnaW46IDVweCA1cHggNXB4IDEwcHg7XHJcbiAgICAgfVxyXG5cclxuICAgICBie1xyXG4gICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgIH1cclxuICB9XHJcbiAgaW9uLWxpc3R7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDE1cHggMHB4O1xyXG4gIH1cclxuXHJcbiAgaDN7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYntcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhaWNvbntcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6MTdweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJvcmR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleGJveDtcclxuICAgIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xyXG4gICAgYntcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgfVxyXG5cclxuICAuZm9uZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2ZkNmRkO1xyXG4gIH1cclxuLy9jZW50cmFyIGJvdG4gXHJcbiAgLmJ1dG4ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuY29sIHtcclxuICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBjb2xvcjogIzNlNWFkNDtcclxuXHJcbiAgICAgIH1cclxuICB9XHJcbiAgLmVzcCB7XHJcbiAgICAgIHB7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLm1lc3NhZ2UtdGV4dCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIC5jaGF0IHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBEQUQ2O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICB9XHJcbiAgLm1lc3NhZ2UtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5zdWItaXRlbTEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgaW9uLXRleHRhcmVhe1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/verreunion/verreunion.page.ts":
/*!***********************************************!*\
  !*** ./src/app/verreunion/verreunion.page.ts ***!
  \***********************************************/
/*! exports provided: VerreunionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerreunionPage", function() { return VerreunionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var VerreunionPage = /** @class */ (function () {
    function VerreunionPage(router, postPvdr, toastCtrl, alertController) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.datos = [];
        this.id = "";
        this.usuario = "";
        this.comentario = "";
        this.comentario1 = "";
        this.comentarios = [];
        this.asistencia = "";
        this.motivo = "";
    }
    VerreunionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.botones();
        this.cargarReunion();
        this.postPvdr.$getListSource.subscribe(function (data) {
            _this.usuario = data[0].Id_Usuario;
            // console.log(this.id);
        });
        this.fecha1 = new Date().toISOString().substr(0, 10);
        this.fecha2 = new Date().toISOString().substr(11, 8);
        // this.fecha= this.fecha1 +' '+ this.fecha2;
        this.fecha = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD HH:mm:ss');
        this.buscarobservacion();
    };
    VerreunionPage.prototype.cargarReunion = function () {
        var _this = this;
        this.postPvdr.$getListReunion.subscribe(function (list) {
            console.log(list);
            _this.datos = list;
            _this.id = list[0].Id_Reunion;
            //this.asistencia= list[0].asistencia;
            console.log(_this.postPvdr.Gasistencia);
            if (_this.postPvdr.Gasistencia == null && _this.postPvdr.Gmotivo == null) {
                _this.valor = "Si";
                _this.ocultarbotones = false;
            }
            else {
                if (_this.postPvdr.Gasistencia == '0' && _this.postPvdr.Gmotivo == null) {
                    _this.valor = "Sin confirmar";
                    _this.ocultarbotones = true;
                }
                else if (_this.postPvdr.Gasistencia == '0' && _this.postPvdr.Gmotivo != null) {
                    _this.valor = "No";
                    _this.ocultarbotones = false;
                }
                else if (_this.postPvdr.Gasistencia == '1' && _this.postPvdr.Gmotivo == null) {
                    _this.valor = "Si";
                    _this.ocultarbotones = false;
                }
            }
        });
    };
    // funcion para recargar datos al cambiar la asistencia
    VerreunionPage.prototype.recargar = function (motivo, asistencia) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(motivo);
                console.log(asistencia);
                this.postPvdr.Gmotivo = motivo;
                this.postPvdr.Gasistencia = asistencia;
                this.cargarReunion();
                if (asistencia == 0) {
                    this.valor = "Si";
                }
                else if (asistencia == 1) {
                    this.valor = "No";
                }
                return [2 /*return*/];
            });
        });
    };
    VerreunionPage.prototype.buscarobservacion = function () {
        var _this = this;
        this.postPvdr.buscarObsereu(this.id).subscribe(function (data) {
            _this.comentarios = data.json();
        });
    };
    //Funcion para ingresar comentarios 
    VerreunionPage.prototype.enviarComentario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.comentario == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'No hay comentario',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 3];
                    case 2:
                        body = {
                            Id_Reunion: this.id,
                            Id_Usuario: this.usuario,
                            Fecha: this.fecha,
                            Descripcion: this.comentario,
                            Tipo: "C"
                        };
                        console.log(body);
                        this.postPvdr.ingreObservr(body).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.comentario = "";
                                this.buscarobservacion();
                                return [2 /*return*/];
                            });
                        }); });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //Funcion para enviar subcomentarios
    VerreunionPage.prototype.enviarSubComentario = function (idre, idobser) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(idre);
                        if (!(this.comentario1 == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'No hay comentario',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 3];
                    case 2:
                        body = {
                            Id_Reunion: idre,
                            Id_Usuario: this.usuario,
                            Fecha: this.fecha,
                            Descripcion: this.comentario1,
                            Observacion_ID: idobser,
                            tipo: "S"
                        };
                        console.log(body);
                        this.postPvdr.ingreObservr(body).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.comentario1 = "";
                                this.buscarobservacion();
                                return [2 /*return*/];
                            });
                        }); });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //funcion para confirmar la asistencia de la reunion
    VerreunionPage.prototype.confirmarAsist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerta',
                            message: 'Confirma la asistencia de la reunion',
                            cssClass: 'alertDanger',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Aceptar',
                                    handler: function () {
                                        _this.vAsisitencia = 1;
                                        var body = {
                                            asistencia: _this.vAsisitencia,
                                            motivo: null,
                                        };
                                        _this.GuardarConfirmacion(body);
                                        console.log('Confirm Ok');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // funcion para rechzar la asistencia 
    VerreunionPage.prototype.rechazarAsist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerta',
                            message: 'Describa la razon de la inasistencia a la reunion',
                            cssClass: 'alertDanger',
                            inputs: [
                                {
                                    name: 'razon',
                                    type: 'text',
                                    placeholder: 'escriba aqui...'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Aceptar',
                                    handler: function (input) {
                                        _this.motivo = input.razon;
                                        _this.vAsisitencia = 0;
                                        var body = {
                                            asistencia: _this.vAsisitencia,
                                            motivo: _this.motivo,
                                        };
                                        _this.GuardarConfirmacion(body);
                                        console.log('Confirm Ok');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Funcion para guardar los cambios de la asitencia o inasitencia de la reunion
    VerreunionPage.prototype.GuardarConfirmacion = function (body) {
        var _this = this;
        this.postPvdr.actualizarAsist(this.usuario, this.id, body).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Asistencia guardada',
                            message: 'Exito...!',
                            cssClass: 'alertDanger',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.recargar(this.motivo, this.vAsisitencia);
                        return [2 /*return*/];
                }
            });
        }); });
        console.log(this.motivo);
    };
    //Funcion para ocultar o mostrar botones 
    VerreunionPage.prototype.botones = function () {
        this.ocultarbotones = this.postPvdr.Gbutunt1;
        if (this.postPvdr.Gtipo == "1" || this.postPvdr.Gtipo == "2") {
            this.ocultarbotones = false;
        }
    };
    VerreunionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verreunion',
            template: __webpack_require__(/*! ./verreunion.page.html */ "./src/app/verreunion/verreunion.page.html"),
            styles: [__webpack_require__(/*! ./verreunion.page.scss */ "./src/app/verreunion/verreunion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], VerreunionPage);
    return VerreunionPage;
}());



/***/ })

}]);
//# sourceMappingURL=verreunion-verreunion-module.js.map