(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vertarea-vertarea-module"],{

/***/ "./src/app/vertarea/vertarea.module.ts":
/*!*********************************************!*\
  !*** ./src/app/vertarea/vertarea.module.ts ***!
  \*********************************************/
/*! exports provided: VertareaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertareaPageModule", function() { return VertareaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vertarea_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vertarea.page */ "./src/app/vertarea/vertarea.page.ts");







var routes = [
    {
        path: '',
        component: _vertarea_page__WEBPACK_IMPORTED_MODULE_6__["VertareaPage"]
    }
];
var VertareaPageModule = /** @class */ (function () {
    function VertareaPageModule() {
    }
    VertareaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vertarea_page__WEBPACK_IMPORTED_MODULE_6__["VertareaPage"]]
        })
    ], VertareaPageModule);
    return VertareaPageModule;
}());



/***/ }),

/***/ "./src/app/vertarea/vertarea.page.html":
/*!*********************************************!*\
  !*** ./src/app/vertarea/vertarea.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"trans\" class=\"fond\">\n    <ion-title></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tareas\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"ocultar1\" (click)=\"confirmaract()\">\n      <ion-button slot=\"end\" fill=\"outline\">Terminar Tarea</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let tarea of datos\" class=\"fuente\">\n    <ion-item-divider color=\"light\">\n      <ion-icon slot=\"start\" name=\"send\" color=\"dark\"></ion-icon>\n      <h3 class=\"center\"> <b>{{tarea.Nombre}}</b> </h3>\n    </ion-item-divider>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <label> Descripción: </label>\n      <ion-icon slot=\"start\" name=\"list-box\" color=\"dark\"></ion-icon>\n      <ion-text>\n        <p>\n          {{ tarea.Descripcion }}\n        </p>\n      </ion-text>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <ion-icon slot=\"start\" name=\"time\" color=\"dark\">\n      </ion-icon>\n      <label> Estado: </label>\n      <p>\n        {{ tarea.Estado_Tarea }}\n      </p>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <label> Fecha Inicio: </label>\n      <ion-icon slot=\"start\" name=\"clock\" color=\" dark\"></ion-icon>\n      <p> {{ tarea.FechaInicio }} {{ tarea.Hora_Inicio }}</p>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"taicon\">\n      <label> Fecha Fin: </label>\n      <ion-icon slot=\"start\" name=\"clock\" color=\"dark\"></ion-icon>\n      <p> {{ tarea.FechaFin }} {{ tarea.Hora_Fin }}</p>\n    </ion-item>\n    <ion-item-divider color=\"light\">\n    </ion-item-divider>\n    <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text>\n          <ion-label> <b> Responsable: </b> </ion-label>\n        </ion-text>\n        <p *ngFor=\"let res of tarea.responsables\">\n          <ion-icon slot=\"start\" name=\"person\" color=\"dark\"> </ion-icon>\n          {{ res.usuario.Nombre }} {{ res.usuario.Apellido }}\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text>\n          <ion-label> <b>Observadores:</b> </ion-label>\n        </ion-text>\n        <p *ngFor=\"let obs of tarea.observadores\">\n          <ion-icon slot=\"start\" name=\"person\" color=\"dark\"> </ion-icon>\n          {{ obs.usuario.Nombre }} {{ obs.usuario.Apellido }}\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text>\n          <ion-label> <b> Participantes:</b> </ion-label>\n        </ion-text>\n        <p *ngFor=\"let par of tarea.participantes\">\n          <ion-icon slot=\"start\" name=\"person\" color=\"dark\"> </ion-icon>\n          {{ par.usuario.Nombre }} {{ par.usuario.Apellido }}\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item-divider color=\"light\">\n      <ion-label>Archivos:</ion-label>\n    </ion-item-divider>\n    <ion-item *ngFor=\"let doc of tarea.documento\">\n      {{doc.Descripcion}}\n    </ion-item>\n    <ion-item-divider color=\"light\">\n    </ion-item-divider>\n    \n    <ion-item lines=\"none\">\n      \n    </ion-item>\n    <ion-item-divider color=\"light\" buttons (click)=\"open = !open\" class=\"sub-item2\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\" *ngIf=\"!open\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"arrow-dropdown\" *ngIf=\"open\"></ion-icon>\n      <ion-label>SUBTAREAS</ion-label>\n    </ion-item-divider>\n    <div *ngIf=\"open\">\n      <ion-item *ngFor=\"let sub of tarea.sub_tareas\" class=\"bord\">\n        <ion-icon slot=\"start\" name=\"send\" color=\"tertiary\"></ion-icon>\n        <ion-label (click)=\"mostrartarea(sub.Id_tarea)\">\n          <ion-text>\n            <ion-label> {{ sub.Nombre }} </ion-label>\n          </ion-text>\n          <p> <b>Estado: </b>{{ sub.Estado_Tarea }} <b>Límite:</b> {{ sub.FechaFin}} </p>\n        </ion-label>\n        <ion-icon slot=\"end\" name=\"eye\" color=\"tertiary\" (click)=\"mostrartarea(sub.Id_tarea)\"></ion-icon>\n      </ion-item>\n    </div>\n    <ion-item-divider color=\"light\" buttons (click)=\"tarea.open = !tarea.open\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\" *ngIf=\"!tarea.open\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"arrow-dropdown\" *ngIf=\"tarea.open\"></ion-icon>\n      <ion-label>OBSERVACIONES:</ion-label>\n    </ion-item-divider>\n    <div *ngIf=\"tarea.open\" class=\"message-text bord\">\n      <ion-content class=\"chat\" delegate-handle=\"chatScroll\">\n        <div class=\"message-list\" *ngFor=\"let com of comentarios\">\n          <ion-item class=\"message-text\">\n            <ion-avatar slot=\"start\">\n              <img src=\"/assets/sinfoto.jpg\">\n            </ion-avatar>\n            <ion-label>\n              <h2> <b>{{ com.usuario.Nombre }} {{ com.usuario.Apellido }}</b> </h2>\n              <ion-text>\n                <p> {{ com.Descripcion }} </p>\n              </ion-text>\n              <p> {{com.Fecha}} &nbsp; &nbsp; &nbsp; <b\n                  (click)=\"mostrarObs(com.sub_observaciones,com.usuario.Nombre, com.usuario.Apellido, com.Descripcion, com.Fecha, com.Id_Tarea, com.Id_Usuario, com.Id_Observacion)\">Respuestas(0)\n                  &nbsp; &nbsp; &nbsp; Responder</b>\n                &nbsp; &nbsp; <b buttons (click)=\"com.open = !com.open\">\n                  <ion-icon slot=\"end\" name=\"arrow-dropdown\" *ngIf=\"!com.open\"></ion-icon>\n                  <ion-icon slot=\"end\" name=\"arrow-dropup\" *ngIf=\"com.open\"></ion-icon>\n                </b>\n              </p>\n            </ion-label>\n          </ion-item>\n          <ion-list *ngIf=\"com.open\">\n            <ion-item *ngFor=\"let subo of com.sub_observaciones\" class=\"sub-item1\">\n              <ion-avatar slot=\"start\">\n                <img src=\"/assets/sinfoto.jpg\">\n              </ion-avatar>\n              <ion-label class=\"text\">\n                <h3> <b>{{ subo.usuario.Nombre }} {{ subo.usuario.Apellido }}</b> </h3>\n                <h3>\n                  <ion-text> {{ subo.Descripcion }} </ion-text>\n                </h3>\n                <p> {{subo.Fecha}} &nbsp; &nbsp; &nbsp; <b>Eliminar</b></p>\n              </ion-label>\n            </ion-item>\n            <ion-item class=\"sub-item1\">\n              <ion-textarea placeholder=\"Escribe tu observacion aqui...\" [(ngModel)]='comentario1'></ion-textarea>\n              <ion-buttons>\n                <ion-button (click)=\"enviarSubComentario(com.Id_Tarea, com.Id_Observacion)\">\n                  <ion-icon slot=\"end\" name=\"send\" color=\"dark\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </ion-item>\n            <ion-item-divider color=\"light\">\n            </ion-item-divider>\n          </ion-list>\n        </div>\n      </ion-content>\n    </div>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item>\n      <ion-textarea placeholder=\"Escribe tu observación aquí...\" [(ngModel)]='comentario'></ion-textarea>\n      <ion-buttons>\n        <ion-button (click)=\"enviarComentario()\">\n          <ion-icon slot=\"end\" name=\"send\" color=\"dark\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/vertarea/vertarea.page.scss":
/*!*********************************************!*\
  !*** ./src/app/vertarea/vertarea.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\n.fuente label {\n  font-size: 14px;\n  color: black; }\n\n.fuente p {\n  font-size: 14px;\n  color: gray;\n  margin: 5px 5px 5px 10px; }\n\n.fuente b {\n  color: black; }\n\nion-list {\n  padding: 0px 0px 15px 0px; }\n\nh3 {\n  margin: 5px 0px;\n  font-size: 16px; }\n\nion-label {\n  margin: 5px 0px 0px 0px;\n  font-size: 14px; }\n\nion-label b {\n    font-size: 14px; }\n\nion-label ion-icon {\n    font-size: 17px; }\n\nion-item-divider ion-icon {\n  font-size: 25px;\n  padding-right: 10px; }\n\n.taicon ion-icon {\n  font-size: 17px; }\n\n.bord {\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.bord p {\n    font-size: 10px;\n    display: flexbox;\n    margin: 0px 5px 0px 0px; }\n\n.bord p b {\n      font-size: 10px; }\n\n.bord ion-text {\n    font-size: 14px; }\n\n.bord ion-text p {\n      font-size: 14px;\n      color: black;\n      text-align: justify; }\n\n.fond {\n  background: #cfd6dd; }\n\n.butn {\n  margin: 0 auto;\n  display: inline-block; }\n\n.chat {\n  height: 400px;\n  background: #E0DAD6;\n  background-repeat: no-repeat;\n  background-size: 100%; }\n\n.message-list {\n  margin-top: 12px;\n  padding: 0px 0px; }\n\n.message-wrapper {\n  margin-bottom: 9px; }\n\n.message-text {\n  padding: 0px 0px; }\n\n.text h3 {\n  font-size: 12px; }\n\n.text b {\n  font-size: 12px;\n  color: darkgray; }\n\n.sub-item1 {\n  padding-left: 15px; }\n\n.sub-item1 ion-textarea {\n    padding: 10px 0px 0px 0px;\n    font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVydGFyZWEvQzpcXHhhbXBwXFxodGRvY3NcXENhcmRpb2NlbnRyb01hbnRhXFxpbmljaW8vc3JjXFxhcHBcXHZlcnRhcmVhXFx2ZXJ0YXJlYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFHSSxlQUFlO0VBQ2YsWUFBbUIsRUFBQTs7QUFKdkI7RUFPSyxlQUFlO0VBQ2YsV0FBVztFQUNYLHdCQUF3QixFQUFBOztBQVQ3QjtFQWFLLFlBQVksRUFBQTs7QUFHakI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUlqQjtFQUNFLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBRmpCO0lBSUksZUFBZSxFQUFBOztBQUpuQjtJQU9JLGVBQWUsRUFBQTs7QUFJbkI7RUFFSSxlQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBSXZCO0VBRUksZUFBYyxFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFGbkI7SUFJRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBOztBQU56QjtNQVFJLGVBQWUsRUFBQTs7QUFSbkI7SUFhRSxlQUFlLEVBQUE7O0FBYmpCO01BZUksZUFBZTtNQUNmLFlBQVk7TUFDWixtQkFBbUIsRUFBQTs7QUFLdkI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGdCQUFnQixFQUFBOztBQUtsQjtFQUVJLGVBQWUsRUFBQTs7QUFGbkI7RUFPSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUluQjtFQUNFLGtCQUFrQixFQUFBOztBQURwQjtJQUdJLHlCQUF5QjtJQUN6QixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92ZXJ0YXJlYS92ZXJ0YXJlYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZ1ZW50ZSB7ICAgXHJcblxyXG4gICAgbGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIH1cclxuICAgICBwe1xyXG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICBtYXJnaW46IDVweCA1cHggNXB4IDEwcHg7XHJcbiAgICAgfVxyXG5cclxuICAgICBie1xyXG4gICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgIH1cclxuICB9XHJcbiAgaW9uLWxpc3R7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDE1cHggMHB4O1xyXG4gIH1cclxuXHJcbiAgaDN7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYntcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1pdGVtLWRpdmlkZXIge1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhaWNvbntcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6MTdweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJvcmR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleGJveDtcclxuICAgIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xyXG4gICAgYntcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwe1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICB9XHJcbiAgfVxyXG5cclxuICAuZm9uZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2ZkNmRkO1xyXG4gIH1cclxuLy9jZW50cmFyIGJvdG4gXHJcbiAgLmJ1dG4ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuY2hhdCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UwREFENjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZS1saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gIH1cclxuICAubWVzc2FnZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICB9XHJcbiAgXHJcbiAgIC5tZXNzYWdlLXRleHQge1xyXG4gICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgIFxyXG4gIH1cclxuIFxyXG4gXHJcbiAgLnRleHR7XHJcbiAgICBoM3tcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgIFxyXG5cclxuICAgIH1cclxuICAgIGJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6IGRhcmtncmF5O1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLnN1Yi1pdGVtMSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBpb24tdGV4dGFyZWF7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgXHJcbiAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vertarea/vertarea.page.ts":
/*!*******************************************!*\
  !*** ./src/app/vertarea/vertarea.page.ts ***!
  \*******************************************/
/*! exports provided: VertareaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertareaPage", function() { return VertareaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comentarios_comentarios_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comentarios/comentarios.page */ "./src/app/comentarios/comentarios.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







var VertareaPage = /** @class */ (function () {
    function VertareaPage(router, postPvdr, toastCtrl, modalCtr, alertController) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastCtrl = toastCtrl;
        this.modalCtr = modalCtr;
        this.alertController = alertController;
        this.datos = [];
        this.comentarios = [];
        this.tareasdetalle = [];
        this.id = "";
        this.usuario = "";
        this.comentario = "";
        this.comentario1 = "";
        this.estado = "";
    }
    VertareaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarTareas();
        this.botones();
        this.fecha1 = new Date().toISOString().substr(0, 10);
        this.fecha2 = new Date().toISOString().substr(11, 8);
        // this.fecha= this.fecha1 +' '+ this.fecha2;
        this.fecha = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm:ss');
        // console.log(this.fecha);
        this.postPvdr.$getListSource.subscribe(function (data) {
            _this.usuario = data[0].Id_Usuario;
            // console.log(this.id);
        });
        this.buscarobservacion();
    };
    //Funcion para recargar las tarea cuando se crea una subtarea
    VertareaPage.prototype.recargarSubta = function (id) {
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
    VertareaPage.prototype.cargarTareas = function () {
        var _this = this;
        this.postPvdr.$getLisTarea.subscribe(function (list) {
            console.log(list);
            _this.datos = list;
            _this.id = list[0].Id_tarea;
            _this.estado = list[0].Estado_Tarea;
        });
    };
    //Funcion para ocultar o mostrar el boton de terminar tarea
    VertareaPage.prototype.botones = function () {
        this.ocultar1 = this.postPvdr.Gbutunt;
        // console.log(this.ocultar1);
        //  console.log(this.estado);
        // console.log(this.postPvdr.Gtipouser);
        if (this.postPvdr.Gtipouser == "1" && this.estado == "Terminada") {
            this.ocultar1 = false;
        }
    };
    //Funcion para cargar las observaciones de la tarea
    VertareaPage.prototype.buscarobservacion = function () {
        var _this = this;
        this.postPvdr.buscarObser(this.id).subscribe(function (data) {
            _this.comentarios = data;
        });
    };
    //Funcion para ingresar comentarios 
    VertareaPage.prototype.enviarComentario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(new Date().toLocaleDateString());
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
    //Funcion para enviar subcomentarios
    VertareaPage.prototype.enviarSubComentario = function (idtar, idobser) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(idtar);
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
                            Id_Tarea: idtar,
                            Id_Usuario: this.usuario,
                            Descripcion: this.comentario1,
                            Fecha: this.fecha,
                            ObservacionID: idobser,
                            tipo: "S"
                        };
                        this.postPvdr.ingreObserv(body).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
    //funcion es para mostrar las observaciones opcion 2 (no la uso)
    VertareaPage.prototype.mostrarObs = function (obser, nombre, apellido, descrip, fech, idt, idu, ido) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtr.create({
                            component: _comentarios_comentarios_page__WEBPACK_IMPORTED_MODULE_5__["ComentariosPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                obser: obser,
                                nombre: nombre,
                                apellido: apellido,
                                descrip: descrip,
                                fech: fech,
                                idt: idt,
                                idu: idu,
                                ido: ido
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
    //funciona para almacenar las subtareas de subtareas
    VertareaPage.prototype.mostrartarea = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(id);
                this.postPvdr.buscarTareas(id).subscribe(function (dato) {
                    if (dato != null) {
                        //this.tarea1 = dato.json();
                        _this.postPvdr.Gsubta = dato;
                        console.log(dato);
                        _this.router.navigate(['/versubtareas']);
                    }
                }, function (error) {
                    console.error(error);
                });
                return [2 /*return*/];
            });
        });
    };
    //Funcion para obtenr las tareas una vez que se ha actualizado algun campo
    VertareaPage.prototype.obtenerTareasR = function (id2) {
        var _this = this;
        this.postPvdr.getTareasRes(id2)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.postPvdr.Gresta = data;
                _this.postPvdr.Gbutunt = false;
                _this.postPvdr.Gtipouser = "1";
            }
        }, function (error) {
            console.error(error);
        });
    };
    //Funcion para preguntar si desea terminar la tarea
    VertareaPage.prototype.confirmaract = function () {
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
    VertareaPage.prototype.terminarTarea = function () {
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
                                this.obtenerTareasR(this.usuario);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    VertareaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vertarea',
            template: __webpack_require__(/*! ./vertarea.page.html */ "./src/app/vertarea/vertarea.page.html"),
            styles: [__webpack_require__(/*! ./vertarea.page.scss */ "./src/app/vertarea/vertarea.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], VertareaPage);
    return VertareaPage;
}());



/***/ })

}]);
//# sourceMappingURL=vertarea-vertarea-module.js.map