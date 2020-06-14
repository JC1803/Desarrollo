(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");





//import { TabsPageRoutingModule } from './tabs.router.module';



var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"],
        children: [
            {
                path: 'bienvenido',
                children: [
                    {
                        path: '',
                        loadChildren: '../bienvenido/bienvenido.module#BienvenidoPageModule'
                    }
                ]
            },
            {
                path: 'notificaciones',
                children: [
                    {
                        path: '',
                        loadChildren: '../notificaciones/notificaciones.module#NotificacionesPageModule'
                    }
                ]
            },
            {
                path: 'perfil',
                children: [
                    {
                        path: '',
                        loadChildren: '../perfil/perfil.module#PerfilPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/bienvenido',
                pathMatch: 'full'
            }
        ]
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                //TabsPageRoutingModule
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"bar-header\">\n  <ion-toolbar color=\"tertiary\">\n    <!--ion-title>CARDIOCENTRO MANTA</ion-title-->\n    <ion-title text-center>TASK CONTROL</ion-title>\n    <!-- Animated Searchbar -->\n    <!--ion-searchbar mode=\"ios\" animated  showCancelButton=\"always\" (ionChange)=\"buscar($event)\"></ion-searchbar-->\n    <!-- Searchbar in a Toolbar -->\n    <!--ion-buttons slot=\"start\">\n          <ion-menu-button  menuId=\"first\">  </ion-menu-button>\n      </ion-buttons-->\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"llamarmenu()\">\n        <ion-icon name=\"menu\"> </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"scroller\">\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button class=\"tab-color\" tab=\"bienvenido\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>home</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"notificaciones\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <ion-badge color=\"danger\">{{mostrarnun}}</ion-badge>\n        <ion-label>Notificaciones</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"perfil\">\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label>Perfil</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n\n\n\n "

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".colores {\n  background: red;\n  --color-selected: blue; }\n\nion-searchbar {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-size: 14px;\n  height: 50px; }\n\nion-tab-button ion-label {\n  --color-selected: rgb(25, 0, 255); }\n\nion-tab-button {\n  --background-focused: rgb(17, 0, 170);\n  --color-selected: rgb(28, 10, 196);\n  --ripple-color: rgb(4, 17, 196); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxceGFtcHBcXGh0ZG9jc1xcQ2FyZGlvY2VudHJvTWFudGFcXGluaWNpby9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxlQUFlO0VBQ2Ysc0JBQWlCLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2xCLFlBQVksRUFBQTs7QUFJYjtFQUVJLGlDQUFpQixFQUFBOztBQUdqQjtFQUVBLHFDQUFxQjtFQUNwQixrQ0FBaUI7RUFDakIsK0JBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3JlcyB7XHJcbmJhY2tncm91bmQ6IHJlZDtcclxuLS1jb2xvci1zZWxlY3RlZDogYmx1ZTtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbmlvbi10YWItYnV0dG9uIGlvbi1sYWJlbCB7XHJcbiAgIFxyXG4gICAgLS1jb2xvci1zZWxlY3RlZDogcmdiKDI1LCAwLCAyNTUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10YWItYnV0dG9uIHtcclxuICAgICBcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiByZ2IoMTcsIDAsIDE3MCk7XHJcbiAgICAgLS1jb2xvci1zZWxlY3RlZDogcmdiKDI4LCAxMCwgMTk2KTtcclxuICAgICAtLXJpcHBsZS1jb2xvcjogcmdiKDQsIDE3LCAxOTYpO1xyXG4gICAgfVxyXG4gICAgICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");








//import { SettingPage } from '../setting/setting.page'
var TabsPage = /** @class */ (function () {
    function TabsPage(menu, ap, localNotifications, alertController, postPvdr, storage, navCtrl, platform) {
        this.menu = menu;
        this.ap = ap;
        this.localNotifications = localNotifications;
        this.alertController = alertController;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.textoBuscar = '';
        this.datos = [];
        this.noti = [];
        this.datonoti = [];
        this.id2 = "";
        this.mostrarnun = 0;
        this.lastid1 = 0;
        this.numgenerar = 0;
        // this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
        //  if (this.constructor.name == "TabsPage") {
        //   if (window.confirm("Quieres cerrar la app")) {
        //      navigator["app"].exitApp();
        //    }
        //     }
        //  }
        //  )
    }
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.enable(true, 'first');
        this.menu.close();
        this.postPvdr.$getListSource.subscribe(function (list) {
            if (list != null || list.length != 0) {
                _this.datos = list;
                _this.id2 = _this.datos[0].Id_Usuario;
            }
            else {
            }
            //console.log(this.id2);
        });
        this.contarNotif();
        this.mostrarnun = this.numNoti;
        console.log(this.mostrarnun);
        this.Notificaciones();
    };
    TabsPage.prototype.ionViewDidEnter = function () {
        this.subscribe = this.platform.backButton.subscribe(function () {
            navigator["app"].exitApp();
        });
    };
    TabsPage.prototype.ionViewWillLeave = function () {
        this.subscribe.unsubscribe();
    };
    //Revisiones constante
    TabsPage.prototype.Notificaciones = function () {
        var _this = this;
        this.postPvdr.intervalo = setInterval(function () {
            _this.contarNotif();
            _this.Verificar();
        }, 10000);
    };
    //Local Notificaciones
    TabsPage.prototype.simpleNotif = function (dato) {
        var texto = dato.descripcion;
        console.log(dato.descripcion);
        this.localNotifications.schedule({
            id: 1,
            title: 'Tiene una nueva notificacion',
            text: texto,
            // text: 'Usted ha sido asignado a una nueva actividad: tarea/reunion',
            data: { secret: texto }
        });
        console.log("sexy");
    };
    TabsPage.prototype.llamarmenu = function () {
        this.menu.open('first');
        this.ap.detalles();
    };
    //busqueda
    TabsPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    //Trae las notificaciones
    TabsPage.prototype.cargarNoti = function () {
        var _this = this;
        this.postPvdr.getNotificaciones().subscribe(function (data) {
            if (data != null) {
                _this.noti = data.filter(function (user) { return user.Id_Usuario == _this.id2; });
                _this.postPvdr.sendListNoti(_this.noti);
            }
        }, function (error) {
            console.error(error);
        });
    };
    //revisa el numero de notificaciones
    TabsPage.prototype.Verificar = function () {
        if (this.mostrarnun == this.numgenerar) {
            this.cargarNoti();
        }
        else if (this.mostrarnun < this.numgenerar) {
            this.cargarNoti();
            this.numgenerar = this.mostrarnun;
        }
        else if (this.mostrarnun > this.numgenerar) {
            this.cargarNoti();
            this.simpleNotif(this.noti[0]);
            this.numgenerar = this.mostrarnun;
        }
    };
    //cuenta cuantas notificaciones tiene el usuario
    TabsPage.prototype.contarNotif = function () {
        var _this = this;
        this.postPvdr.contarNotificaciones(this.id2).subscribe(function (data) {
            if (data != null) {
                _this.numNoti = data;
                console.log(_this.numNoti);
                _this.mostrarnun = _this.numNoti;
            }
        }, function (error) {
            console.error(error);
        });
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map