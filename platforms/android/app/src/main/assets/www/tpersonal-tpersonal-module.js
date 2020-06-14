(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tpersonal-tpersonal-module"],{

/***/ "./src/app/tpersonal/tpersonal.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tpersonal/tpersonal.module.ts ***!
  \***********************************************/
/*! exports provided: TpersonalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpersonalPageModule", function() { return TpersonalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tpersonal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tpersonal.page */ "./src/app/tpersonal/tpersonal.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _tpersonal_page__WEBPACK_IMPORTED_MODULE_6__["TpersonalPage"]
    }
];
var TpersonalPageModule = /** @class */ (function () {
    function TpersonalPageModule() {
    }
    TpersonalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tpersonal_page__WEBPACK_IMPORTED_MODULE_6__["TpersonalPage"]]
        })
    ], TpersonalPageModule);
    return TpersonalPageModule;
}());



/***/ }),

/***/ "./src/app/tpersonal/tpersonal.page.html":
/*!***********************************************!*\
  !*** ./src/app/tpersonal/tpersonal.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-row>\n      <ion-col size=\"4\" class=\"centrar\">\n        <ion-title> Mis Tareas</ion-title>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-searchbar mode=\"ios\" animated showCancelButton=\"focus\" cancelButtonText=\"X\" (ionChange)=\"buscar($event)\">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<div>\n  <ion-item>\n    <ion-label color=\"medium\">Estado</ion-label>\n    <ion-select placeholder=\"Todas\" [(ngModel)]=\"tipousuario\" okText=\"Ok\" cancelText=\"Cancelar\" name=\"estadotarea\"\n      (ionChange)=\"segmentChanged($event)\" value=\"1\">\n      <ion-select-option value=\"1\">Todas</ion-select-option>\n      <ion-select-option value=\"2\">Pendiente</ion-select-option>\n      <ion-select-option value=\"3\">Terminada</ion-select-option>\n      <ion-select-option value=\"4\">Vencida</ion-select-option>\n    </ion-select>\n  </ion-item>\n</div>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"form\">\n    <h2> Tareas Personales </h2>\n  </div>\n  <ion-list *ngFor=\"let tp of postPvdr.Globaltpersonal| filtro:textoBuscar : 'Nombre'\">\n    <ion-item-sliding>\n    <ion-item class=\"bord\" (click)=\"mostrartareap(tp.Id_tarea)\">\n      <ion-icon slot=\"start\" name=\"checkbox-outline\"></ion-icon>\n      \n        <ion-text color=\"dark\">\n          <p class=\"letra1\">{{tp.Nombre}}</p>\n          <p class=\"letra\"> <b> Fecha Fin: </b>{{ tp.FechaFin }} </p>\n        </ion-text>\n      <ion-note class=\"tamanio\" slot=\"end\" color=\"success\">\n        {{ tp.Estado_Tarea }} \n      </ion-note>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option expandable (click)=\"confirmarEl(tp.Id_tarea)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n\n  \n   \n\n    \n \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"presentModal(id2)\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/tpersonal/tpersonal.page.scss":
/*!***********************************************!*\
  !*** ./src/app/tpersonal/tpersonal.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".letra {\n  font-size: 10px;\n  line-height: 12px;\n  padding: 4px 0px 5px 0px; }\n\n.botones {\n  margin: 0px 0px 0px 16px; }\n\n.centrar {\n  line-height: 50px;\n  align-items: center; }\n\nion-searchbar {\n  padding: 0px 7px;\n  font-size: 14px;\n  height: 50px; }\n\nion-col {\n  padding: 0px 5px;\n  height: 50px; }\n\nion-title {\n  font-family: menu;\n  padding: 0px 5px 0px; }\n\n.bord {\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.bord p {\n    color: black;\n    display: flexbox;\n    margin: 1px 5px 0px 0px; }\n\n.bord p b {\n      font-size: 10px; }\n\n.form {\n  padding: 0px 40px 0px;\n  text-align: center;\n  font-family: serif; }\n\n.letra1 {\n  font-size: 14px;\n  text-align: justify;\n  padding: 10px 0px 0px 0px;\n  margin: 0px 0px 15px; }\n\n.letra1 p {\n    font-size: 14px; }\n\n.tamanio {\n  font-size: 12px; }\n\nion-list {\n  margin: 0px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHBlcnNvbmFsL0M6XFx4YW1wcFxcaHRkb2NzXFxDYXJkaW9jZW50cm9NYW50YVxcaW5pY2lvL3NyY1xcYXBwXFx0cGVyc29uYWxcXHRwZXJzb25hbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QixFQUFBOztBQUd4QjtFQUNJLHdCQUF3QixFQUFBOztBQUU1QjtFQUVJLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNsQixZQUFZLEVBQUE7O0FBR1Y7RUFDQyxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFxQixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFGbkI7SUFJRSxZQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBOztBQU56QjtNQVFJLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFLbkIseUJBQXlCO0VBQ3pCLG9CQUFvQixFQUFBOztBQVJ0QjtJQUlJLGVBQWUsRUFBQTs7QUFNbkI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHBlcnNvbmFsL3RwZXJzb25hbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGV0cmEge1xyXG5mb250LXNpemU6IDEwcHg7XHJcbmxpbmUtaGVpZ2h0OiAxMnB4O1xyXG5wYWRkaW5nOiA0cHggMHB4IDVweCAwcHg7XHJcbn1cclxuXHJcbi5ib3RvbmVzIHtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMTZweDtcclxufVxyXG4uY2VudHJhciB7XHJcbiAgXHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIHBhZGRpbmc6IDBweCA3cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiBoZWlnaHQ6IDUwcHg7XHJcbiAgIH1cclxuXHJcbiAgIGlvbi1jb2x7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBpb24tdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogbWVudTtcclxuICAgIHBhZGRpbmc6MHB4IDVweCAwcHggIDtcclxufVxyXG5cclxuLmJvcmR7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG5we1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXhib3g7XHJcbiAgbWFyZ2luOiAxcHggNXB4IDBweCAwcHg7XHJcbiAgYntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn1cclxufVxyXG4uZm9ybXtcclxuICBwYWRkaW5nOiAwcHggNDBweCAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxufVxyXG5cclxuLmxldHJhMSB7XHJcbiAgZm9udC1zaXplOiAxNHB4OyBcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7IFxyXG4gICBcclxuICB9XHJcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcclxuICBtYXJnaW46IDBweCAwcHggMTVweDtcclxufSAgIFxyXG4udGFtYW5pb3tcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmlvbi1saXN0e1xyXG4gIG1hcmdpbjogMHB4IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tpersonal/tpersonal.page.ts":
/*!*********************************************!*\
  !*** ./src/app/tpersonal/tpersonal.page.ts ***!
  \*********************************************/
/*! exports provided: TpersonalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpersonalPage", function() { return TpersonalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addtarea_addtarea_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addtarea/addtarea.page */ "./src/app/addtarea/addtarea.page.ts");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");










var TpersonalPage = /** @class */ (function () {
    function TpersonalPage(menu, alertController, modalController, router, postPvdr, localNotifications, toastCtrl) {
        this.menu = menu;
        this.alertController = alertController;
        this.modalController = modalController;
        this.router = router;
        this.postPvdr = postPvdr;
        this.localNotifications = localNotifications;
        this.toastCtrl = toastCtrl;
        this.tareasp = [];
        this.tareasdetalle = [];
        this.datos = [];
        this.id2 = "";
        this.estado = "";
        this.tipousuario = "";
        this.textoBuscar = '';
        this.fechafin = moment__WEBPACK_IMPORTED_MODULE_6__();
    }
    TpersonalPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.close();
        console.log(this.fechafin);
        this.postPvdr.$getListSource.subscribe(function (list) {
            _this.datos = list;
            _this.id2 = _this.datos[0].Id_Usuario;
            //console.log(this.id2);
        });
        this.obtenerTareasp();
        this.calcularfecha();
    };
    TpersonalPage.prototype.obtenerTareasp = function () {
        var _this = this;
        this.postPvdr.getTareasP(this.id2).subscribe(function (data) {
            if (data != null) {
                console.log(data);
                //Carga los datos de la api a una variable global y la ordena por fecha de creacion
                _this.postPvdr.Globaltpersonal = data.sort(function (a, b) {
                    return a.FechaCreacion - b.FechaCreacion;
                }).reverse().filter(function (tareasmostrar) { return tareasmostrar.estadoEliminar === 0; });
                _this.tareasp = _this.postPvdr.Globaltpersonal;
            }
        }, function (error) {
            console.error(error);
        });
    };
    TpersonalPage.prototype.doRefresh = function (evento) {
        this.obtenerTareasp();
        setTimeout(function () {
            evento.target.complete();
        }, 2000);
    };
    TpersonalPage.prototype.presentModal = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(id);
                        return [4 /*yield*/, this.modalController.create({
                                component: _addtarea_addtarea_page__WEBPACK_IMPORTED_MODULE_3__["AddtareaPage"],
                                cssClass: 'my-custom-modal-css',
                                componentProps: {
                                    id: id
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
    TpersonalPage.prototype.mostrartareap = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.postPvdr.buscarTareas(id).subscribe(function (dato) {
                    if (dato != null) {
                        _this.tareasdetalle = dato;
                        console.log(dato);
                        _this.postPvdr.sendListTarea(_this.tareasdetalle);
                        _this.router.navigate(['/vertareap']);
                    }
                }, function (error) {
                    console.error(error);
                });
                return [2 /*return*/];
            });
        });
    };
    TpersonalPage.prototype.tareastipo = function (estado) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.postPvdr.getTareaspesta(estado, 4, this.id2).subscribe(function (data) {
                    if (data != null) {
                        console.log(data);
                        _this.postPvdr.Globaltpersonal = data;
                        _this.tareasp = _this.postPvdr.Globaltpersonal;
                    }
                }, function (error) {
                    console.error(error);
                });
                return [2 /*return*/];
            });
        });
    };
    TpersonalPage.prototype.segmentChanged = function (ev) {
        if (this.tipousuario == "1") {
            this.obtenerTareasp();
        }
        else if (this.tipousuario == "2") {
            this.estado = "Pendiente";
            this.tareastipo(this.estado);
        }
        else if (this.tipousuario == "3") {
            this.estado = "Terminada";
            this.tareastipo(this.estado);
        }
        else if (this.tipousuario == "4") {
            this.estado = "Vencida";
            this.tareastipo(this.estado);
        }
    };
    //Realizar busqueda
    TpersonalPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    //calcular para notificar
    TpersonalPage.prototype.calcularfecha = function () {
        var _this = this;
        setInterval(function () {
            _this.postPvdr.getTareasP(_this.id2).subscribe(function (data) {
                if (data != null) {
                    data.forEach(function (element) {
                        _this.fecha = element.FechaFin;
                        var ini = moment__WEBPACK_IMPORTED_MODULE_6__(_this.fecha);
                        var fin = moment__WEBPACK_IMPORTED_MODULE_6__(_this.fechafin);
                        var diff = ini.diff(fin, 'days');
                        console.log(diff);
                        console.log(_this.fecha);
                        if (diff <= 1) {
                            _this.Notif(element.Descripcion);
                        }
                    });
                }
            }, function (error) {
                console.error(error);
            });
        }, 86400000);
    };
    TpersonalPage.prototype.Notif = function (dato) {
        this.localNotifications.schedule({
            id: 2,
            title: 'La siguiente tarea esta por cumplirse:',
            text: dato,
            // trigger: {at: new Date(new Date().getTime() + 3600)},
            data: { secret: dato }
        });
        console.log("Tarea personal por cumplir");
    };
    //Mensaje de confirmacion de eliminacion de tarea personal
    TpersonalPage.prototype.confirmarEl = function (Id_tarea) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Advertencia',
                            message: 'Desea Eliminar la Tarea',
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
                                        _this.deleteItem(Id_tarea);
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
    //Funcion para eliminar tarea
    TpersonalPage.prototype.deleteItem = function (Id_tarea) {
        var _this = this;
        var body2 = {
            estadoEliminar: 1
        };
        this.postPvdr.postTarea(body2, Id_tarea).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'La tarea ha sido eliminada',
                            duration: 4000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.obtenerTareasp();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    TpersonalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tpersonal',
            template: __webpack_require__(/*! ./tpersonal.page.html */ "./src/app/tpersonal/tpersonal.page.html"),
            styles: [__webpack_require__(/*! ./tpersonal.page.scss */ "./src/app/tpersonal/tpersonal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], TpersonalPage);
    return TpersonalPage;
}());



/***/ })

}]);
//# sourceMappingURL=tpersonal-tpersonal-module.js.map