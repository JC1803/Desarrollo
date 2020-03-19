(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificaciones-notificaciones-module"],{

/***/ "./src/app/notificaciones/notificaciones.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.module.ts ***!
  \*********************************************************/
/*! exports provided: NotificacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPageModule", function() { return NotificacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notificaciones.page */ "./src/app/notificaciones/notificaciones.page.ts");







var routes = [
    {
        path: '',
        component: _notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]
    }
];
var NotificacionesPageModule = /** @class */ (function () {
    function NotificacionesPageModule() {
    }
    NotificacionesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notificaciones_page__WEBPACK_IMPORTED_MODULE_6__["NotificacionesPage"]]
        })
    ], NotificacionesPageModule);
    return NotificacionesPageModule;
}());



/***/ }),

/***/ "./src/app/notificaciones/notificaciones.page.html":
/*!*********************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <!--ion-button (click)=\"simpleNotif()\">\n    notificacion\n</ion-button-->\n\n    <ion-list *ngFor=\"let not  of noti\">\n        <ion-item class=\"color\" [id]=\"not.Id_Ttar_Reu\" [color]=\"botones\"\n            (click)=\"ver(not.tipo, not.Id_Ttar_Reu, not.Id_notificaciones)\">\n            <ion-icon slot=\"start\" *ngIf=\"not.VistaMovil == 1\" name=\"radio-button-off\"></ion-icon>\n            <ion-icon slot=\"start\" color=\"tertiary\" *ngIf=\"not.VistaMovil == 0\" name=\"radio-button-on\"></ion-icon>\n            <ion-text color=\"dark\">\n                <p class=\"letra1\">\n                    {{not.descripcion}}\n                </p>\n                <p class=\"letra\"> <b> Fecha Fin: </b>{{ not.FechaLimite}} &nbsp;&nbsp; <b> {{not.tipo}} </b> </p>\n            </ion-text>\n        </ion-item>\n\n\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/notificaciones/notificaciones.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".letra {\n  font-size: smaller;\n  line-height: 13px; }\n\n.letra1 {\n  font-size: 15px;\n  margin: 0px 0px 15px;\n  padding: 12px 0px 0px 0px; }\n\n.color {\n  --background:#d4f6f852; }\n\nion-list {\n  margin: 0px 0px; }\n\nion-icon {\n  font-size: 10px;\n  color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2FjaW9uZXMvQzpcXHhhbXBwXFxodGRvY3NcXENhcmRpb2NlbnRyb01hbnRhXFxpbmljaW8vc3JjXFxhcHBcXG5vdGlmaWNhY2lvbmVzXFxub3RpZmljYWNpb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3BCO0VBQ0csZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix5QkFBeUIsRUFBQTs7QUFHNUI7RUFDSSxzQkFBYSxFQUFBOztBQUVsQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsV0FBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2FjaW9uZXMvbm90aWZpY2FjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldHJhIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgfVxyXG5cclxuIC5sZXRyYTEge1xyXG4gICAgZm9udC1zaXplOiAxNXB4OyBcclxuICAgIG1hcmdpbjogMHB4IDBweCAxNXB4O1xyXG4gICAgcGFkZGluZzogMTJweCAwcHggMHB4IDBweDtcclxuIH0gICBcclxuXHJcbiAuY29sb3J7XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiNkNGY2Zjg1MjtcclxuIH1cclxuaW9uLWxpc3R7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6Ymx1ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/notificaciones/notificaciones.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/notificaciones/notificaciones.page.ts ***!
  \*******************************************************/
/*! exports provided: NotificacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionesPage", function() { return NotificacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






//import { userInfo } from 'os';
var NotificacionesPage = /** @class */ (function () {
    function NotificacionesPage(localNotifications, postPvdr, router, alertController) {
        this.localNotifications = localNotifications;
        this.postPvdr = postPvdr;
        this.router = router;
        this.alertController = alertController;
        this.noti = [];
        this.datos = [];
        this.detreuniones = [];
        this.detareas = [];
        this.id1 = "";
        this.colores = 'primary';
        this.lastid1 = 0;
        this.datonoti = [];
    }
    NotificacionesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarNoti();
        this.postPvdr.$getListSource.subscribe(function (list) {
            _this.datos = list;
            _this.id1 = _this.datos[0].Id_Usuario;
        });
        this.mensajetiempo();
    };
    NotificacionesPage.prototype.mensajetiempo = function () {
        var _this = this;
        setInterval(function () {
            _this.cargarNoti();
        }, 10000);
    };
    //Funcion para generar las notificaciones evaluando la variacion en el tiempo
    //Carga las notificaciones 
    NotificacionesPage.prototype.cargarNoti = function () {
        var _this = this;
        this.postPvdr.getNotificaciones().subscribe(function (data) {
            if (data != null) {
                _this.noti = data.filter(function (user) { return user.Id_Usuario == _this.id1; });
                _this.lastid = _this.noti[0].Id_notificaciones;
                if (_this.lastid > _this.lastid1) {
                    _this.lastid1 = _this.lastid;
                    _this.datonoti = _this.noti[0];
                    _this.simpleNotif(_this.datonoti);
                    console.log(_this.noti[0]);
                    console.log(_this.datonoti);
                }
                ;
                // console.log (this.noti[0]);
            }
        }, function (error) {
            console.error(error);
        });
    };
    NotificacionesPage.prototype.presentAlert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Información',
                            message: data,
                            buttons: ['OK']
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
    NotificacionesPage.prototype.unsub = function () {
        this.clickSub.unsubscribe();
    };
    NotificacionesPage.prototype.simpleNotif = function (dato) {
        var _this = this;
        var texto = dato.descripcion;
        console.log(dato.descripcion);
        this.clickSub = this.localNotifications.on('click').subscribe(function (data) {
            console.log(data);
            _this.presentAlert('Detalles: ' + data.data.secret);
            _this.unsub();
        });
        this.localNotifications.schedule({
            id: 1,
            title: 'Tiene una nueva notificacion',
            text: texto,
            // trigger: {at: new Date(new Date().getTime() + 3600)},
            data: { secret: texto }
        });
        console.log("sexy");
    };
    //Funcion para recargar la pagina
    NotificacionesPage.prototype.doRefresh = function (evento) {
        //this.simpleNotif();
        this.cargarNoti();
        setTimeout(function () {
            evento.target.complete();
        }, 2000);
    };
    //funcion para visualizar la notificacion
    NotificacionesPage.prototype.ver = function (tipo, idreutar, idnotificaciones) {
        var _this = this;
        console.log(idnotificaciones);
        //this.botones = "white";
        var body = {
            VistaMovil: 1,
        };
        this.postPvdr.updateNotificaciones(idnotificaciones, body).subscribe(function (data) {
            if (data != null) {
            }
        }, function (error) {
            console.error(error);
        });
        if (tipo == "Reunion") {
            // this.cargarNoti();
            //console.log(id);
            this.postPvdr.getReunion(idreutar).subscribe(function (dato) {
                if (dato != null) {
                    _this.detreuniones = dato;
                    console.log(_this.detreuniones);
                    _this.postPvdr.sendListReunion(_this.detreuniones);
                    _this.router.navigate(['/verreunion']);
                }
            }, function (error) {
                console.error(error);
            });
        }
        else if (tipo == "Tarea") {
            //  this.cargarNoti();
            this.postPvdr.buscarTareas(idreutar).subscribe(function (dato) {
                if (dato != null) {
                    _this.detareas = dato;
                    console.log(dato);
                    _this.postPvdr.sendListTarea(_this.detareas);
                    _this.router.navigate(['/vertarea']);
                }
            }, function (error) {
                console.error(error);
            });
        }
    };
    NotificacionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notificaciones',
            template: __webpack_require__(/*! ./notificaciones.page.html */ "./src/app/notificaciones/notificaciones.page.html"),
            styles: [__webpack_require__(/*! ./notificaciones.page.scss */ "./src/app/notificaciones/notificaciones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], NotificacionesPage);
    return NotificacionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=notificaciones-notificaciones-module.js.map