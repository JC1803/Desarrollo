(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tareas-tareas-module"],{

/***/ "./src/app/tareas/tareas.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tareas/tareas.module.ts ***!
  \*****************************************/
/*! exports provided: TareasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareasPageModule", function() { return TareasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tareas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tareas.page */ "./src/app/tareas/tareas.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _tareas_page__WEBPACK_IMPORTED_MODULE_6__["TareasPage"]
    }
];
var TareasPageModule = /** @class */ (function () {
    function TareasPageModule() {
    }
    TareasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tareas_page__WEBPACK_IMPORTED_MODULE_6__["TareasPage"]]
        })
    ], TareasPageModule);
    return TareasPageModule;
}());



/***/ }),

/***/ "./src/app/tareas/tareas.page.html":
/*!*****************************************!*\
  !*** ./src/app/tareas/tareas.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-row>\n      <ion-col size=\"4\" class=\"centrar\">\n        <ion-title>Tareas</ion-title>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-searchbar mode=\"ios\" animated showCancelButton=\"always\" (ionChange)=\"buscar($event)\"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<div>\n  <ion-item>\n    <ion-label color=\"medium\">Estado</ion-label>\n    <ion-select interface=\"popover\" [(ngModel)]=\"tipousuario\" okText=\"Ok\" cancelText=\"Cancelar\" name=\"estadotarea\"\n      (ionChange)=\"segmentChanged1($event)\" value=\"1\">\n      <ion-select-option value=\"1\">Todas</ion-select-option>\n      <ion-select-option value=\"2\">Pendiente</ion-select-option>\n      <ion-select-option value=\"3\">Terminada</ion-select-option>\n      <ion-select-option value=\"4\">Vencida</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"tipo\" scrollable (ionChange)=\"segmentChanged($event)\" value=\"1\">\n      <ion-segment-button value=\"1\" checked layout=\"icon-start\">\n        <ion-label class=\"espacio\">Responsable</ion-label>\n        <ion-icon name=\"person\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"4\" layout=\"icon-start\">\n        <ion-label class=\"espacio\">Creadas </ion-label>\n        <ion-icon name=\"hand\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"3\" layout=\"icon-start\">\n        <ion-label class=\"espacio\">Participante</ion-label>\n        <ion-icon name=\"contacts\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value=\"2\" layout=\"icon-start\">\n        <ion-label class=\"espacio\">Observador</ion-label>\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</div>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"bordes\" *ngIf=\"ver== 1\">\n    <ion-list *ngFor=\"let  tarea of postPvdr.Gresta\">\n      <ion-item class=\"fuente  bord1\" (click)=\"mostrartarea(tarea.Id_Tarea)\">\n        <ion-icon slot=\"start\" name=\"checkbox-outline\"></ion-icon>\n        <ion-label>\n          <ion-text>\n            <ion-label>\n              {{tarea.tarea.Nombre}}\n            </ion-label>\n          </ion-text>\n          <p> <b>Estado: </b>{{ tarea.tarea.Estado_Tarea }} <b>Limite:</b> {{ tarea.tarea.FechaFin}} </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class=\"bordes\" *ngIf=\"ver== 0\">\n    <ion-list *ngFor=\"let  tarea of postPvdr.Gresta |filtro:textoBuscar : 'Nombre'\">\n      <ion-item class=\"fuente  bord1\" (click)=\"mostrartarea(tarea.Id_tarea)\">\n        <ion-icon slot=\"start\" name=\"checkbox-outline\"></ion-icon>\n        <ion-label>\n          <ion-text>\n            <ion-label>\n              {{tarea.Nombre}}\n            </ion-label>\n          </ion-text>\n          <p> <b>Estado: </b>{{ tarea.Estado_Tarea }} <b>Limite:</b> {{ tarea.FechaFin}} </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n  <!--ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"  [routerLink]=\"['/addtareat']\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-->\n</ion-content>"

/***/ }),

/***/ "./src/app/tareas/tareas.page.scss":
/*!*****************************************!*\
  !*** ./src/app/tareas/tareas.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button {\n  --padding-start: unset;\n  --padding-end: unset;\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n  --border-color:#251f81;\n  --color: #a5b7ac;\n  --color-checked: #251f81; }\n  ion-segment-button ion-button {\n    --max-width: 500px; }\n  ion-segment-button ion-label {\n    font-size: smaller; }\n  ion-segment-button ion-icon {\n    font-size: 16px; }\n  .bordes {\n  padding: 5px 10px; }\n  .sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button {\n  max-width: unset;\n  --background-checked: #251f81;\n  --color-checked: #ffffff;\n  /* font-size: 12px; */\n  /* line-height: 22px; */ }\n  .espacio {\n  margin: 5px 5px; }\n  .seleccion {\n  background: darkblue;\n  max-width: 50%; }\n  .seleccion ion-button {\n    font-size: 10px; }\n  .seleccion ion-select {\n    max-width: 100%; }\n  ion-title {\n  font-family: menu;\n  padding: 0px 5px 0px; }\n  .centrar {\n  line-height: 50px;\n  align-items: center; }\n  ion-searchbar {\n  padding: 0px 7px;\n  font-size: 14px;\n  height: 50px; }\n  ion-col {\n  padding: 0px 5px;\n  height: 50px; }\n  .fuente ion-label {\n  font-size: 14px; }\n  ion-list {\n  padding: 8px 0px 0px 0px;\n  margin: 0px 0px 0px 0px; }\n  .bord1 {\n  padding-right: 0px;\n  padding-left: 0px; }\n  .bord1 p {\n    color: black;\n    font-size: 10px;\n    display: flexbox;\n    margin: 2px 5px 0px 0px; }\n  .bord1 p b {\n      font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFyZWFzL0M6XFx4YW1wcFxcaHRkb2NzXFxDYXJkaW9jZW50cm9NYW50YVxcaW5pY2lvL3NyY1xcYXBwXFx0YXJlYXNcXHRhcmVhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzQkFBZ0I7RUFDaEIsb0JBQWM7RUFDZCxrQkFBYztFQUNkLHFCQUFpQjtFQUNsQixzQkFBZTtFQUdkLGdCQUFRO0VBQ1Isd0JBQWdCLEVBQUE7RUFUbEI7SUFVZSxrQkFBWSxFQUFBO0VBVjNCO0lBWUcsa0JBQWtCLEVBQUE7RUFackI7SUFlSSxlQUFlLEVBQUE7RUFHbkI7RUFDRSxpQkFBaUIsRUFBQTtFQUduQjtFQUNHLGdCQUFnQjtFQUNoQiw2QkFBcUI7RUFDckIsd0JBQWdCO0VBQ2pCLHFCQUFBO0VBQ0EsdUJBQUEsRUFBd0I7RUFHMUI7RUFDRSxlQUFlLEVBQUE7RUFJbEI7RUFDRSxvQkFBb0I7RUFDbkIsY0FBYyxFQUFBO0VBRmpCO0lBTUssZUFBZSxFQUFBO0VBTnBCO0lBU0ssZUFBYyxFQUFBO0VBS2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFxQixFQUFBO0VBR3pCO0VBRUUsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0VBR3JCO0VBQ0MsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZLEVBQUE7RUFHYjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFHZDtFQUVFLGVBQWMsRUFBQTtFQUloQjtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTtFQUV6QjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQUZuQjtJQUlFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0VBUHpCO01BU0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFyZWFzL3RhcmVhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB1bnNldDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IHVuc2V0OyBcclxuICAgIC0tcGFkZGluZy10b3A6IDJweDsgXHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAycHg7ICAgXHJcbiAgIC0tYm9yZGVyLWNvbG9yOiMyNTFmODE7XHJcbiAgIC8vLS1mb250LXNpemU6IDEycHg7XHJcbiAgIC8vLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNkM2Y4ZjA7XHJcbiAgICAtLWNvbG9yOiAjYTViN2FjOztcclxuICAgIC0tY29sb3ItY2hlY2tlZDogIzI1MWY4MTtcclxuICAgaW9uLWJ1dHRvbiB7ICAtLW1heC13aWR0aDogNTAwcHg7IH1cclxuICAgaW9uLWxhYmVsIHtcclxuICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYm9yZGVzIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNjLWlvbi1zZWdtZW50LWlvcy1oaW9uLXRvb2xiYXIuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24sIGlvbi10b29sYmFyIC5zYy1pb24tc2VnbWVudC1pb3MtaC5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzI1MWY4MTs7XHJcbiAgICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xyXG4gICAgLyogZm9udC1zaXplOiAxMnB4OyAqL1xyXG4gICAgLyogbGluZS1oZWlnaHQ6IDIycHg7ICovXHJcbn1cclxuICBcclxuICAuZXNwYWNpbyB7XHJcbiAgICBtYXJnaW46IDVweCA1cHg7XHJcbiAgfVxyXG5cclxuICAvL2VzIHBhcmEgaGFjZXIgcGVxdWVuaW8gZWwgc2VsZWN0IGEgbGEgbWl0YWQgZGUgc3UgdGFtYW5pb1xyXG4gLnNlbGVjY2lvbiB7XHJcbiAgIGJhY2tncm91bmQ6IGRhcmtibHVlO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7ICAgXHJcblxyXG5cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIGZvbnQtc2l6ZToxMHB4IDtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICBpb24tdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogbWVudTtcclxuICAgIHBhZGRpbmc6MHB4IDVweCAwcHggIDtcclxufVxyXG4vL2NlbnRyYXIgdGV4dG8gdmVydGljYWxtZW50ZVxyXG4uY2VudHJhciB7XHJcbiAgXHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiBwYWRkaW5nOiAwcHggN3B4O1xyXG4gZm9udC1zaXplOiAxNHB4O1xyXG4gaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pb24tY29se1xyXG4gIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZnVlbnRlIHtcclxuIGlvbi1sYWJlbHtcclxuICBmb250LXNpemU6MTRweDtcclxuIH1cclxuXHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgcGFkZGluZzogOHB4IDBweCAwcHggMHB4O1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcbi5ib3JkMXtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbnB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4Ym94O1xyXG4gIG1hcmdpbjogMnB4IDVweCAwcHggMHB4O1xyXG4gIGJ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG59XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tareas/tareas.page.ts":
/*!***************************************!*\
  !*** ./src/app/tareas/tareas.page.ts ***!
  \***************************************/
/*! exports provided: TareasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareasPage", function() { return TareasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TareasPage = /** @class */ (function () {
    function TareasPage(menu, router, postPvdr) {
        this.menu = menu;
        this.router = router;
        this.postPvdr = postPvdr;
        this.datos = [];
        this.id2 = "";
        this.tareas = [];
        this.tarea1 = [];
        this.valor = "";
        this.id1 = "";
        this.tipo = "";
        this.estado = "";
        this.ver = "1";
        this.tipousuario = "";
        this.responsable = [];
        this.participante = [];
        this.observador = [];
        this.creadas = [];
        this.textoBuscar = '';
    }
    TareasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.close();
        //extrae la lista de usuarios
        this.postPvdr.$getListSource.subscribe(function (list) {
            //console.log(list)
            _this.datos = list;
            _this.id2 = _this.datos[0].Id_Usuario;
            console.log(_this.id2);
        });
        this.tipo = "1";
        this.tipousuario = "1";
        //extraer todas las tareas donde el usuarip loggeado es responsable
        this.postPvdr.getTareasRes(this.id2).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                //ojo con la variable demora mucho en mostrar los datos
                _this.postPvdr.Gresta = data.filter(function (iniciartareas) { return iniciartareas.tarea.Id_Tipo_Tarea == 5; });
                _this.tareas = data;
                _this.postPvdr.Gbutunt = true;
                _this.postPvdr.Gtipouser = "1";
            }
        }, function (error) {
            console.error(error);
        });
        this.iniciarobservardor();
        this.iniciarparticipante();
        this.iniciarresponsable();
        this.iniciarcreadas();
    };
    TareasPage.prototype.cargarparticipante = function () {
        var _this = this;
        this.ver = "1";
        this.postPvdr.getTareasPart(this.id2)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.postPvdr.Gresta = data;
                _this.tareas = data;
                _this.postPvdr.Gbutunt = false;
                _this.postPvdr.Gtipouser = "3";
            }
        }, function (error) {
            console.error(error);
        });
    };
    TareasPage.prototype.cargarresposable = function () {
        var _this = this;
        this.ver = "1";
        this.postPvdr.getTareasRes(this.id2)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.postPvdr.Gresta = data.filter(function (iniciartareas) { return iniciartareas.tarea.Id_Tipo_Tarea == 5; });
            }
        }, function (error) {
            console.error(error);
        });
    };
    TareasPage.prototype.cargarobservador = function () {
        var _this = this;
        this.ver = "1";
        this.postPvdr.getTareasObser(this.id2)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.postPvdr.Gresta = data;
                _this.tareas = data;
                _this.postPvdr.Gbutunt = false;
                _this.postPvdr.Gtipouser = "2";
            }
        }, function (error) {
            console.error(error);
        });
    };
    TareasPage.prototype.cargarcreadas = function () {
        var _this = this;
        this.ver = "0";
        this.estado = "Pendiente";
        this.postPvdr.getTareasCreaP(this.estado, this.id2)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.postPvdr.Gresta = _this.creadas.filter(function (creadas) { return creadas.Id_Tipo_Tarea === "5"; });
                console.log(_this.responsable);
                //this.tareas = data.json();
                _this.postPvdr.Gbutunt = false;
                _this.postPvdr.Gtipouser = "4";
            }
        }, function (error) {
            console.error(error);
        });
    };
    //Funcion para filtro por estado
    TareasPage.prototype.segmentChanged1 = function (ev) {
        if (this.tipousuario == "1" && this.tipo == "1") {
            this.cargarresposable();
        }
        else if (this.tipousuario == "2" && this.tipo == "1") {
            this.ver = "1";
            this.postPvdr.Gresta = this.responsable.filter(function (responsable) { return responsable.tarea.Estado_Tarea === "Pendiente" && responsable.tarea.Id_Tipo_Tarea == 5; });
            console.log(this.responsable);
        }
        else if (this.tipousuario == "3" && this.tipo == "1") {
            this.ver = "1";
            this.postPvdr.Gresta = this.responsable.filter(function (responsable) { return responsable.tarea.Estado_Tarea === "Terminada" && responsable.tarea.Id_Tipo_Tarea == 5; });
            console.log(this.responsable);
        }
        else if (this.tipousuario == "4" && this.tipo == "1") {
            this.ver = "1";
            this.postPvdr.Gresta = this.responsable.filter(function (responsable) { return responsable.tarea.Estado_Tarea === "Vencida" && responsable.tarea.Id_Tipo_Tarea == 5; });
            console.log(this.responsable);
        }
        // Observador
        else if (this.tipousuario == "1" && this.tipo == "2") {
            this.ver = "1";
            this.cargarobservador();
        }
        else if (this.tipousuario == "2" && this.tipo == "2") {
            this.ver = "1";
            this.postPvdr.Gresta = this.observador.filter(function (observador) { return observador.tarea.Estado_Tarea === "Pendiente"; });
        }
        else if (this.tipousuario == "3" && this.tipo == "2") {
            this.ver = "1";
            this.postPvdr.Gresta = this.observador.filter(function (observador) { return observador.tarea.Estado_Tarea === "Terminada"; });
        }
        else if (this.tipousuario == "4" && this.tipo == "2") {
            this.ver = "1";
            this.postPvdr.Gresta = this.observador.filter(function (observador) { return observador.tarea.Estado_Tarea === "Vencida"; });
        }
        else 
        // Partcipante
        if (this.tipousuario == "1" && this.tipo == "3") {
            this.ver = "1";
            this.cargarparticipante();
        }
        else if (this.tipousuario == "2" && this.tipo == "3") {
            this.ver = "1";
            console.log(this.tipousuario);
            this.postPvdr.Gresta = this.participante.filter(function (participante) { return participante.tarea.Estado_Tarea === "Pendiente"; });
            // console.log(this.participante);
        }
        else if (this.tipousuario == "3" && this.tipo == "3") {
            this.ver = "1";
            this.postPvdr.Gresta = this.participante.filter(function (participante) { return participante.tarea.Estado_Tarea === "Terminada"; });
            // console.log(this.participante);
        }
        else if (this.tipousuario == "4" && this.tipo == "3") {
            this.ver = "1";
            this.postPvdr.Gresta = this.participante.filter(function (participante) { return participante.tarea.Estado_Tarea === "Vencida"; });
            // Creadas
        }
        else if (this.tipousuario == "1" && this.tipo == "4") {
            this.ver = "0";
            this.cargarcreadas();
        }
        else if (this.tipousuario == "2" && this.tipo == "4") {
            this.cargarcreadas();
        }
        else if (this.tipousuario == "3" && this.tipo == "4") {
            this.cargarcreadas();
        }
        else if (this.tipousuario == "4" && this.tipo == "4") {
            this.cargarcreadas();
        }
    };
    //Funcion para iniciar matrices 
    TareasPage.prototype.iniciarresponsable = function () {
        var _this = this;
        this.postPvdr.getTareasRes(this.id2)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.responsable = data;
            }
        }, function (error) {
            console.error(error);
        });
    };
    TareasPage.prototype.iniciarcreadas = function () {
        var _this = this;
        this.postPvdr.getTareasCreaP(this.estado, this.id2)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.creadas = data;
            }
        }, function (error) {
            console.error(error);
        });
    };
    TareasPage.prototype.iniciarparticipante = function () {
        var _this = this;
        this.postPvdr.getTareasPart(this.id2)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.participante = data;
            }
        }, function (error) {
            console.error(error);
        });
    };
    TareasPage.prototype.iniciarobservardor = function () {
        var _this = this;
        this.postPvdr.getTareasObser(this.id2)
            .subscribe(function (data) {
            if (data != null) {
                console.log(data);
                _this.observador = data;
            }
        }, function (error) {
            console.error(error);
        });
    };
    //Funcion para filtrar dependiendo del tipo de usuario observador participante y otros
    TareasPage.prototype.segmentChanged = function (ev) {
        // Responsable
        this.ver = "1";
        if (this.tipousuario == "1" && this.tipo == "1") {
            this.cargarresposable();
        }
        else if (this.tipousuario == "2" && this.tipo == "1") {
            this.ver = "1";
            this.postPvdr.Gresta = this.responsable.filter(function (responsable) { return responsable.tarea.Estado_Tarea === "Pendiente" && responsable.tarea.Id_Tipo_Tarea == 5; });
            console.log(this.responsable);
        }
        else if (this.tipousuario == "3" && this.tipo == "1") {
            this.ver = "1";
            this.postPvdr.Gresta = this.responsable.filter(function (responsable) { return responsable.tarea.Estado_Tarea === "Terminada" && responsable.tarea.Id_Tipo_Tarea == 5; });
            console.log(this.responsable);
        }
        else if (this.tipousuario == "4" && this.tipo == "1") {
            this.ver = "1";
            this.postPvdr.Gresta = this.responsable.filter(function (responsable) { return responsable.tarea.Estado_Tarea === "Vencida" && responsable.tarea.Id_Tipo_Tarea == 5; });
            console.log(this.responsable);
        }
        // Observador
        else if (this.tipousuario == "1" && this.tipo == "2") {
            this.ver = "1";
            this.cargarobservador();
        }
        else if (this.tipousuario == "2" && this.tipo == "2") {
            this.ver = "1";
            this.postPvdr.Gresta = this.observador.filter(function (observador) { return observador.tarea.Estado_Tarea === "Pendiente"; });
        }
        else if (this.tipousuario == "3" && this.tipo == "2") {
            this.ver = "1";
            this.postPvdr.Gresta = this.observador.filter(function (observador) { return observador.tarea.Estado_Tarea === "Terminada"; });
        }
        else if (this.tipousuario == "4" && this.tipo == "2") {
            this.ver = "1";
            this.postPvdr.Gresta = this.observador.filter(function (observador) { return observador.tarea.Estado_Tarea === "Vencida"; });
        }
        else 
        // Partcipante
        if (this.tipousuario == "1" && this.tipo == "3") {
            this.ver = "1";
            this.cargarparticipante();
        }
        else if (this.tipousuario == "2" && this.tipo == "3") {
            this.ver = "1";
            console.log(this.tipousuario);
            this.postPvdr.Gresta = this.participante.filter(function (participante) { return participante.tarea.Estado_Tarea === "Pendiente"; });
            // console.log(this.participante);
        }
        else if (this.tipousuario == "3" && this.tipo == "3") {
            this.ver = "1";
            this.postPvdr.Gresta = this.participante.filter(function (participante) { return participante.tarea.Estado_Tarea === "Terminada"; });
            // console.log(this.participante);
        }
        else if (this.tipousuario == "4" && this.tipo == "3") {
            this.ver = "1";
            this.postPvdr.Gresta = this.participante.filter(function (participante) { return participante.tarea.Estado_Tarea === "Vencida"; });
            // Creadas
        }
        else if (this.tipousuario == "1" && this.tipo == "4") {
            this.ver = "0";
            this.cargarcreadas();
        }
        else if (this.tipousuario == "2" && this.tipo == "4") {
            this.cargarcreadas();
        }
        else if (this.tipousuario == "3" && this.tipo == "4") {
            this.cargarcreadas();
        }
        else if (this.tipousuario == "4" && this.tipo == "4") {
            this.cargarcreadas();
        }
    };
    //Funcion para mostrar tareas
    TareasPage.prototype.mostrartarea = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.postPvdr.buscarTareas(id).subscribe(function (dato) {
                    if (dato != null) {
                        _this.tarea1 = dato;
                        console.log(dato);
                        _this.postPvdr.sendListTarea(_this.tarea1);
                        _this.router.navigate(['/vertarea']);
                    }
                }, function (error) {
                    console.error(error);
                });
                return [2 /*return*/];
            });
        });
    };
    TareasPage.prototype.doRefresh = function (evento) {
        var _this = this;
        this.postPvdr.getTareasRes(this.id2).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                //ojo con la variable demora mucho en mostrar los datos
                _this.postPvdr.Gresta = data;
                _this.tareas = data;
                _this.postPvdr.Gbutunt = true;
                _this.postPvdr.Gtipouser = "1";
            }
        }, function (error) {
            console.error(error);
        });
        this.iniciarobservardor();
        this.iniciarparticipante();
        this.iniciarresponsable();
        this.iniciarcreadas();
        setTimeout(function () {
            evento.target.complete();
        }, 2000);
    };
    //Busqueda
    TareasPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    TareasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tareas',
            template: __webpack_require__(/*! ./tareas.page.html */ "./src/app/tareas/tareas.page.html"),
            styles: [__webpack_require__(/*! ./tareas.page.scss */ "./src/app/tareas/tareas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"]])
    ], TareasPage);
    return TareasPage;
}());



/***/ })

}]);
//# sourceMappingURL=tareas-tareas-module.js.map