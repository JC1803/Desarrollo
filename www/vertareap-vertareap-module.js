(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vertareap-vertareap-module"],{

/***/ "./src/app/vertareap/vertareap.module.ts":
/*!***********************************************!*\
  !*** ./src/app/vertareap/vertareap.module.ts ***!
  \***********************************************/
/*! exports provided: VertareapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertareapPageModule", function() { return VertareapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vertareap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vertareap.page */ "./src/app/vertareap/vertareap.page.ts");







var routes = [
    {
        path: '',
        component: _vertareap_page__WEBPACK_IMPORTED_MODULE_6__["VertareapPage"]
    }
];
var VertareapPageModule = /** @class */ (function () {
    function VertareapPageModule() {
    }
    VertareapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vertareap_page__WEBPACK_IMPORTED_MODULE_6__["VertareapPage"]]
        })
    ], VertareapPageModule);
    return VertareapPageModule;
}());



/***/ }),

/***/ "./src/app/vertareap/vertareap.page.html":
/*!***********************************************!*\
  !*** ./src/app/vertareap/vertareap.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"trans\" class=\"fond\">\n    <ion-title></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tpersonal\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"ocultar\" (click)=\"confirmaract()\">\n      <ion-button slot=\"end\" fill=\"outline\">Terminar Tarea</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let tarea of datos\" class=\"fuente\">\n    <ion-item-divider color=\"light\">\n      <ion-icon slot=\"start\" name=\"send\" color=\"dark\"></ion-icon>\n      <h3 class=\"center\"> <b>{{tarea.Nombre}}</b> </h3>\n    </ion-item-divider>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <label> Descripción: </label>\n      <ion-icon slot=\"start\" name=\"list-box\" color=\"dark\"></ion-icon>\n      <ion-text>\n        <p>\n          {{ tarea.Descripcion }}\n        </p>\n      </ion-text>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <ion-icon slot=\"start\" name=\"time\" color=\"dark\">\n      </ion-icon>\n      <label> Estado: </label>\n      <p>\n        {{ tarea.Estado_Tarea }}\n      </p>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <label> Fecha Inicio: </label>\n      <ion-icon slot=\"start\" name=\"clock\" color=\" dark\"></ion-icon>\n      <p> {{ tarea.FechaInicio }} {{ tarea.Hora_Inicio }}</p>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <label> Fecha Fin: </label>\n      <ion-icon slot=\"start\" name=\"clock\" color=\"dark\"></ion-icon>\n      <p> {{ tarea.FechaFin }} {{ tarea.Hora_Fin }}</p>\n    </ion-item>\n    <ion-item-divider color=\"light\">\n    </ion-item-divider>\n    <ion-item lines=\"none\">\n      <label> <b> Responsable: </b> </label>\n      <p>\n        {{ tarea.usuario.Nombre }} {{ tarea.usuario.Apellido }}\n      </p>\n    </ion-item>\n    <ion-item-divider color=\"light\">\n      <ion-label>Archivos:</ion-label>\n    </ion-item-divider>\n    <ion-item *ngFor=\"let doc of tarea.documento\">\n      {{doc.Descripcion}}\n    </ion-item>\n    <ion-item-divider color=\"light\">\n    </ion-item-divider>\n\n    <ion-item lines=\"none\">\n     \n    </ion-item>\n\n    <ion-item-divider color=\"light\" buttons (click)=\"open = !open\" class=\"sub-item2\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\" *ngIf=\"!open\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"arrow-dropdown\" *ngIf=\"open\"></ion-icon>\n      <ion-label>SUBTAREAS</ion-label>\n    </ion-item-divider>\n\n    <div *ngIf=\"open\">\n      <ion-item *ngFor=\"let sub of tarea.sub_tareas\" class=\"bord\">\n        <ion-icon slot=\"start\" name=\"send\" color=\"tertiary\"></ion-icon>\n        <ion-label>\n          <ion-text>\n            <ion-label> {{ sub.Nombre }} </ion-label>\n          </ion-text>\n          <p> {{ sub.Descripcion}} </p>\n          <p> <b>Estado: </b>{{ sub.Estado_Tarea }} <b>Límite:</b> {{ sub.FechaFin}} </p>\n        </ion-label>\n      </ion-item>\n    </div>\n    <!--ion-item lines=\"none\">  \n              <ion-button class=\"butn\" color=\"secondary\" (click)=\"addTareap()\" > Crear Subtarea </ion-button>\n              </ion-item-->\n\n    <ion-card>\n      <ion-card-header text-center class=\"btn\" button (click)=\"collapseCard = !collapseCard\" class=\"organ\">\n        <ion-card-title class=\"texto1\">\n          Crear Subtarea\n        </ion-card-title>\n        <ion-icon name=\"add\" slot=\"end\"></ion-icon>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"collapseCard\">\n        <ion-item>\n          <ion-input placeholder=\"Titulo\" [(ngModel)]=\"nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder=\"Descripcion\" [(ngModel)]=\"descripcion\"></ion-input>\n        </ion-item>\n        <ion-item-divider></ion-item-divider>\n        <ion-item>\n          <ion-label>Fecha Inicio</ion-label>\n          <ion-datetime value=\"fechai\" placeholder=\"Seleccionar\" displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"fechai\"\n            cancelText=\"Cancelar\" doneText=\"Aceptar\" min=\"{{ tarea.FechaInicio }}\" max=\"{{ tarea.FechaFin }}\" picker-format=\"YYYY MMM DD\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Hora Inicio</ion-label>\n          <ion-datetime value=\"horaf\" placeholder=\"Seleccionar\" display-format=\"HH:mm\" picker-format=\"HH:mm\"\n            [(ngModel)]=\"horai\" cancelText=\"Cancelar\" min=\"{{ tarea.Hora_Inicio }}\"  doneText=\"Aceptar\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Fecha Fin</ion-label>\n          <ion-datetime value=\"fechaf\" placeholder=\"Seleccionar\" displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"fechaf\"\n            cancelText=\"Cancelar\" doneText=\"Aceptar\" min=\"{{fechai}}\" max=\"{{ tarea.FechaFin }}\" picker-format=\"YYYY MMM DD\"> ></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Hora Fin</ion-label>\n          <ion-datetime value=\"horaf\" placeholder=\"Seleccionar\" display-format=\"HH:mm\" picker-format=\"HH:mm\"\n            [(ngModel)]=\"horaf\" cancelText=\"Cancelar\" doneText=\"Aceptar\"   ></ion-datetime>\n        </ion-item>\n        <ion-item-divider color=\"light\">\n        </ion-item-divider>\n        <ion-item>\n          <ion-button fill=\"outline\" class=\"butn\" color=\"dark\" expand=\"block\" (click)=\"guardarSubtarea()\">Guardar\n          </ion-button>\n          <ion-button fill=\"outline\" class=\"butn\" color=\"danger\" expand=\"block\"\n            (click)=\"collapseCard = !collapseCard ; limpiar()\">Cancelar</ion-button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item-divider color=\"light\" buttons (click)=\"tarea.open = !tarea.open\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\" *ngIf=\"!tarea.open\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"arrow-dropdown\" *ngIf=\"tarea.open\"></ion-icon>\n      <ion-label>OBSERVACIONES:</ion-label>\n    </ion-item-divider>\n    <ion-item *ngIf=\"tarea.open\" lines=\"none\">\n      <ion-content class=\"conte\" delegate-handle=\"chatScroll\">\n        <div class=\"conte2\" *ngFor=\"let com of comentarios\">\n          <ion-item class=\"conte3\">\n            <ion-avatar slot=\"start\">\n              <img src=\"/assets/sinfoto.jpg\">\n            </ion-avatar>\n            <ion-label>\n              <h2> <b>{{ com.usuario.Nombre }} {{ com.usuario.Apellido }}</b> </h2>\n              <h3>\n                <ion-text> {{ com.Descripcion }} </ion-text>\n              </h3>\n              <p> {{com.Fecha}} &nbsp; &nbsp; &nbsp; <b>{{ com.usuario.email }}</b></p>\n              <p> </p>\n            </ion-label>\n          </ion-item>\n        </div>\n      </ion-content>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item>\n      <ion-textarea placeholder=\"Escribe tu observación aquí...\" [(ngModel)]='comentario'></ion-textarea>\n      <ion-buttons>\n        <ion-button (click)=\"enviarComentario()\">\n          <ion-icon slot=\"end\" name=\"send\" color=\"dark\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/vertareap/vertareap.page.scss":
/*!***********************************************!*\
  !*** ./src/app/vertareap/vertareap.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\n.fuente label {\n  font-size: 14px;\n  color: black; }\n\n.fuente p {\n  font-size: 14px;\n  color: gray;\n  margin: 5px 5px 5px 10px; }\n\n.fuente b {\n  color: black; }\n\nion-list {\n  padding: 0px 0px 15px 0px; }\n\nh3 {\n  margin: 5px 0px;\n  font-size: 16px; }\n\nion-label {\n  margin: 5px 0px 0px 0px;\n  font-size: 14px; }\n\nion-label b {\n    font-size: 14px; }\n\nion-label ion-icon {\n    font-size: 17px; }\n\nion-item-divider ion-icon {\n  font-size: 25px;\n  padding-right: 10px; }\n\n.taicon ion-icon {\n  font-size: 17px; }\n\n.bord {\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.bord p {\n    font-size: 10px;\n    display: flexbox;\n    margin: 0px 5px 0px 0px; }\n\n.bord p b {\n      font-size: 10px; }\n\n.fond {\n  background: #cfd6dd; }\n\n.butn {\n  margin: 0 auto;\n  display: inline-block; }\n\n.col ion-button {\n  color: #3e5ad4; }\n\n.conte {\n  height: 400px;\n  background: #E0DAD6;\n  background-repeat: no-repeat;\n  background-size: 100%; }\n\n.conte2 {\n  padding: 0px 0px;\n  margin-top: 12px; }\n\n.conte3 {\n  padding: 0px 0px; }\n\n.organ {\n  --color: #ffffff;\n  background: #ce1616d9;\n  font-size: 15px; }\n\n.texto1 {\n  --color: #ffffff;\n  font-size: 15px; }\n\n.texto1 ion-label {\n    --color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVydGFyZWFwL0M6XFx4YW1wcFxcaHRkb2NzXFxDYXJkaW9jZW50cm9NYW50YVxcaW5pY2lvL3NyY1xcYXBwXFx2ZXJ0YXJlYXBcXHZlcnRhcmVhcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFHSSxlQUFlO0VBQ2YsWUFBbUIsRUFBQTs7QUFKdkI7RUFPSyxlQUFlO0VBQ2YsV0FBVztFQUNYLHdCQUF3QixFQUFBOztBQVQ3QjtFQWFLLFlBQVksRUFBQTs7QUFHakI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUlqQjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBRmpCO0lBSUksZUFBZSxFQUFBOztBQUpuQjtJQU9JLGVBQWUsRUFBQTs7QUFJbkI7RUFFSSxlQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBSXZCO0VBRUksZUFBYyxFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFGbkI7SUFJRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBOztBQU56QjtNQVFJLGVBQWUsRUFBQTs7QUFLbkI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBRU0sY0FBYyxFQUFBOztBQU1wQjtFQUNBLGFBQWE7RUFDWixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNDLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBUTtFQUNSLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsZ0JBQVE7RUFDUixlQUFlLEVBQUE7O0FBRmhCO0lBSUcsZ0JBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZlcnRhcmVhcC92ZXJ0YXJlYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mdWVudGUgeyAgIFxyXG5cclxuICAgIGxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICAgcHtcclxuICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgbWFyZ2luOiA1cHggNXB4IDVweCAxMHB4O1xyXG4gICAgIH1cclxuXHJcbiAgICAgYntcclxuICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICB9XHJcbiAgfVxyXG4gIGlvbi1saXN0e1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAxNXB4IDBweDtcclxuICB9XHJcblxyXG4gIGgze1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taXRlbS1kaXZpZGVyIHtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6MjVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWljb257XHJcbiAgICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOjE3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ib3Jke1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXhib3g7XHJcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDBweDtcclxuICAgIGJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgfVxyXG5cclxuICAuZm9uZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2ZkNmRkO1xyXG4gIH1cclxuLy9jZW50cmFyIGJvdG4gXHJcbiAgLmJ1dG4ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuY29sIHtcclxuICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBjb2xvcjogIzNlNWFkNDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAuY29udGUge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgIGJhY2tncm91bmQ6ICNFMERBRDY7XHJcbiAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuIH1cclxuIC5jb250ZTJ7XHJcbiAgcGFkZGluZzogMHB4IDBweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIFxyXG59XHJcblxyXG4uY29udGUzIHtcclxuICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gIFxyXG59XHJcbi5vcmdhbntcclxuICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNjZTE2MTZkOTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcblxyXG59XHJcbiAudGV4dG8xe1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGlvbi1sYWJlbHtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/vertareap/vertareap.page.ts":
/*!*********************************************!*\
  !*** ./src/app/vertareap/vertareap.page.ts ***!
  \*********************************************/
/*! exports provided: VertareapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertareapPage", function() { return VertareapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





var VertareapPage = /** @class */ (function () {
    function VertareapPage(alertController, postPvdr, toastCtrl) {
        this.alertController = alertController;
        this.postPvdr = postPvdr;
        this.toastCtrl = toastCtrl;
        this.datos = [];
        this.comentarios = [];
        this.tareasdetalle = [];
        this.id = "";
        this.usuario = "";
        this.comentario = "";
        this.titulo = "";
        this.nombre = "";
        this.descripcion = "";
        this.ocultar = true;
        this.estado = "";
    }
    VertareapPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarTareas();
        this.botones();
        this.fecha1 = new Date().toISOString().substr(0, 10);
        this.fecha2 = new Date().toISOString().substr(11, 8);
        // this.fecha= this.fecha1 +' '+ this.fecha2;
        this.fecha = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD HH:mm:ss');
        this.creacion = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD');
        this.postPvdr.$getListSource.subscribe(function (data) {
            _this.usuario = data[0].Id_Usuario;
            console.log(_this.id);
        });
        this.buscarobservacion();
    };
    //Funcion para esconder o mostrar el boton de terminar tarea
    VertareapPage.prototype.botones = function () {
        console.log(this.ocultar);
        console.log(this.estado);
        // console.log(this.postPvdr.Gtipouser);
        if (this.estado == "Terminada") {
            this.ocultar = false;
        }
    };
    //Funcion para recargar las tarea cuando se crea una subtarea
    VertareapPage.prototype.recargarSubta = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.postPvdr.buscarTareas(id).subscribe(function (dato) {
                    if (dato != null) {
                        _this.tareasdetalle = dato;
                        console.log(dato);
                        _this.postPvdr.sendListTarea(_this.tareasdetalle);
                    }
                }, function (error) {
                    console.error(error);
                });
                return [2 /*return*/];
            });
        });
    };
    //Funcion para mostrar la tarea
    VertareapPage.prototype.cargarTareas = function () {
        var _this = this;
        this.postPvdr.$getLisTarea.subscribe(function (list) {
            console.log(list);
            _this.datos = list;
            _this.id = list[0].Id_tarea;
            _this.estado = list[0].Estado_Tarea;
        });
    };
    //funcion para buscar la observaciones que tiene la tarea
    VertareapPage.prototype.buscarobservacion = function () {
        var _this = this;
        this.postPvdr.buscarObser(this.id).subscribe(function (data) {
            _this.comentarios = data;
        });
    };
    // funcion para enviar la observacion a la tarea
    VertareapPage.prototype.enviarComentario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(new Date());
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
                            Id_Tarea: this.id,
                            Id_Usuario: this.usuario,
                            Descripcion: this.comentario,
                            Fecha: this.fecha,
                            tipo: "C"
                        };
                        this.postPvdr.ingreObserv(body).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
    //metodo que no lo uso
    VertareapPage.prototype.addTareap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Añadir Actividad',
                            inputs: [
                                {
                                    name: 'titulo',
                                    value: 'titulo',
                                    placeholder: 'Titulo'
                                },
                                {
                                    name: 'descrip',
                                    type: 'text',
                                    placeholder: 'Descripción'
                                },
                                // input date with min & max
                                {
                                    name: 'fechain',
                                    label: 'Fecha Inicio',
                                    type: 'date'
                                },
                                {
                                    name: 'horai',
                                    type: 'time'
                                },
                                {
                                    name: 'fechafin',
                                    label: 'Fecha Fin',
                                    type: 'date'
                                },
                                // input date without min nor max
                                {
                                    name: 'horaf',
                                    label: 'Hora Fin',
                                    type: 'time'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        _this.guardarSubtarea();
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
    //Funcion para guardar un subtarea
    VertareapPage.prototype.guardarSubtarea = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.nombre == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta Nombre de tarea',
                                duration: 3000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 2:
                        if (!(this.descripcion == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta Descripción',
                                duration: 3000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 4:
                        if (!(this.fechai == null)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta fecha de inicio de tarea',
                                duration: 3000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 6:
                        if (!(this.fechaf == null)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta fecha de fin de tarea',
                                duration: 3000
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 8:
                        if (!(this.horai == null)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta hora de inicio de tarea',
                                duration: 3000
                            })];
                    case 9:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 10:
                        if (!(this.horaf == null)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Falta hora final de tarea',
                                duration: 3000
                            })];
                    case 11:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 12:
                        body = {
                            // Id_Usuario: "118",
                            Id_Usuario: this.usuario,
                            Estado_Tarea: "Pendiente",
                            Id_Tipo_Tarea: "4",
                            Nombre: this.nombre,
                            FechaInicio: this.fechai,
                            FechaFin: this.fechaf,
                            FechaCreacion: this.creacion,
                            Descripcion: this.descripcion,
                            tareasIdTareas: this.id,
                            Hora_Inicio: this.horai,
                            Hora_Fin: this.horaf,
                            tip_tar: "S",
                            estadoEliminar: "0"
                        };
                        console.log(body);
                        this.postPvdr.postTareasP(body).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                                            message: 'Guardado',
                                            duration: 3000
                                        })];
                                    case 1:
                                        toast = _a.sent();
                                        toast.present();
                                        // this.personal.obtenerTareasp();
                                        this.recargarSubta(this.id);
                                        this.cargarTareas();
                                        this.limpiar();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    ;
    //Funcion para limpiar los iputs al ingresar subtarea
    VertareapPage.prototype.limpiar = function () {
        this.nombre = "";
        this.descripcion = "";
        this.fechai = null;
        this.fechaf = null;
        this.horaf = null;
        this.horai = null;
    };
    //Funcion para obtenr las tareas una vez que se ha actualizado algun campo
    VertareapPage.prototype.obtenerTareasp = function (id2) {
        var _this = this;
        this.postPvdr.getTareasP(id2).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.postPvdr.Globaltpersonal = data;
            }
        }, function (error) {
            console.error(error);
        });
    };
    //Funcion para confirmar la terminacion de una tarea
    VertareapPage.prototype.confirmaract = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerta',
                            message: 'Desea terminar con la Tarea',
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
                                        _this.terminarTarea();
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
    //Funcion para terminar la tarea guardar los cambios
    VertareapPage.prototype.terminarTarea = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body2 = {
                    Estado_Tarea: "Terminada",
                    FechaEntrega: this.fecha
                };
                this.postPvdr.postTarea(body2, this.id).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var toast;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.toastCtrl.create({
                                    message: 'Tarea finalizada con exito',
                                    duration: 4000
                                })];
                            case 1:
                                toast = _a.sent();
                                toast.present();
                                this.recargarSubta(this.id);
                                this.cargarTareas();
                                this.botones();
                                this.obtenerTareasp(this.usuario);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    VertareapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vertareap',
            template: __webpack_require__(/*! ./vertareap.page.html */ "./src/app/vertareap/vertareap.page.html"),
            styles: [__webpack_require__(/*! ./vertareap.page.scss */ "./src/app/vertareap/vertareap.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], VertareapPage);
    return VertareapPage;
}());



/***/ })

}]);
//# sourceMappingURL=vertareap-vertareap-module.js.map