(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organigrama-organigrama-module"],{

/***/ "./src/app/organigrama/organigrama.module.ts":
/*!***************************************************!*\
  !*** ./src/app/organigrama/organigrama.module.ts ***!
  \***************************************************/
/*! exports provided: OrganigramaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganigramaPageModule", function() { return OrganigramaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _organigrama_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organigrama.page */ "./src/app/organigrama/organigrama.page.ts");







var routes = [
    {
        path: '',
        component: _organigrama_page__WEBPACK_IMPORTED_MODULE_6__["OrganigramaPage"]
    }
];
var OrganigramaPageModule = /** @class */ (function () {
    function OrganigramaPageModule() {
    }
    OrganigramaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_organigrama_page__WEBPACK_IMPORTED_MODULE_6__["OrganigramaPage"]]
        })
    ], OrganigramaPageModule);
    return OrganigramaPageModule;
}());



/***/ }),

/***/ "./src/app/organigrama/organigrama.page.html":
/*!***************************************************!*\
  !*** ./src/app/organigrama/organigrama.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Organigrama</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"fondo\">\n    <div text-center class=\"bordes\">\n      <img src=\"/assets/logo1.png\" alt=\"\">\n    </div>\n    <ion-card *ngFor=\"let ar of areas\">\n      <ion-item button (click)=\"ar.open = !ar.open\" [class.parent-active]=\"ar.open\" detail=\"false\" class=\"organ\">\n        <ion-icon name=\"business\" slot=\"start\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"arrow-dropright\" *ngIf=\"!ar.open\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"arrow-dropdown\" *ngIf=\"ar.open\"></ion-icon>\n        <ion-label>AREA: {{ar.Descripcion }} </ion-label>\n      </ion-item>\n      <ion-card-content *ngIf=\"ar.open\" class=\"cuerpo\">\n        <ion-item *ngFor=\"let sub of ar.sub_area \" class=\"letra\">\n          <ion-icon name=\"cube\" color=\"dark\" slot=\"start\"></ion-icon>\n          <ion-label> {{ sub.Descripcion}} </ion-label>\n          <ion-button fill=\"outline\" slot=\"end\" (click)=\"presentModal(sub.roles)\">Ver</ion-button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/organigrama/organigrama.page.scss":
/*!***************************************************!*\
  !*** ./src/app/organigrama/organigrama.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".organ {\n  --background:#1a83c8;\n  --background-activated: #71c9ec;\n  --color: #ffffff;\n  font-size: 14px; }\n\n.letra ion-item {\n  padding: 0px 0px 0px 0px; }\n\n.letra ion-label {\n  font-size: 14px;\n  margin: 5px 0px; }\n\n.cuerpo {\n  padding: 0px 0px 0px 0px; }\n\n.img {\n  width: 200px;\n  height: 100px; }\n\nion-title {\n  font-family: menu; }\n\n.fondo {\n  background: #dbe0ea;\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JnYW5pZ3JhbWEvQzpcXHhhbXBwXFxodGRvY3NcXENhcmRpb2NlbnRyb01hbnRhXFxpbmljaW8vc3JjXFxhcHBcXG9yZ2FuaWdyYW1hXFxvcmdhbmlncmFtYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxvQkFBYTtFQUNiLCtCQUF1QjtFQUN2QixnQkFBUTtFQUNSLGVBQWUsRUFBQTs7QUFHZjtFQUVJLHdCQUF3QixFQUFBOztBQUY1QjtFQUtRLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBS3ZCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDRyxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDJCQUE0QjtFQUM1QixZQUFXO0VBQ1gsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3JnYW5pZ3JhbWEvb3JnYW5pZ3JhbWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZ2FuIHtcclxuLS1iYWNrZ3JvdW5kOiMxYTgzYzg7XHJcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM3MWM5ZWM7XHJcbi0tY29sb3I6ICNmZmZmZmY7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmxldHJhIHtcclxuICAgaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7IFxyXG4gICB9XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbi5jdWVycG8ge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4OyBcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogbWVudTtcclxufVxyXG5cclxuLmZvbmRvIHtcclxuICAgYmFja2dyb3VuZDojZGJlMGVhIDsgXHJcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA7XHJcbiAgIGhlaWdodDoxMDAlO1xyXG4gICB3aWR0aDogMTAwJTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/organigrama/organigrama.page.ts":
/*!*************************************************!*\
  !*** ./src/app/organigrama/organigrama.page.ts ***!
  \*************************************************/
/*! exports provided: OrganigramaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganigramaPage", function() { return OrganigramaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/Storage */ "./node_modules/@ionic/Storage/fesm5/ionic-storage.js");
/* harmony import */ var _verroles_verroles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../verroles/verroles.page */ "./src/app/verroles/verroles.page.ts");








var OrganigramaPage = /** @class */ (function () {
    function OrganigramaPage(router, postPvdr, storage, menu, toastCtrl, modalCtr) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.modalCtr = modalCtr;
        this.users = [];
        this.areas = [];
        this.areassub = [];
        this.roles = [];
        this.area = "";
        this.subareas = [];
        this.subarea = "";
    }
    OrganigramaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.close();
        this.postPvdr.getAreaSub().subscribe(function (data) {
            if (data != null) {
                // console.log(data.json());
                _this.areas = data;
                //  console.log(this.subarea);
            }
        }, function (error) {
            console.error(error);
        });
        /*this.postPvdr.getAreaSub() .subscribe(
          (data) => { // Success
            if(data.json()!=null){
              console.log(data.json());
              this.areassub = data.json();
            }
          },
          (error) =>{
            console.error(error);
          }
        )*/
    };
    OrganigramaPage.prototype.doRefresh = function (evento) {
        var _this = this;
        this.postPvdr.getAreaSub().subscribe(function (data) {
            if (data != null) {
                // console.log(data.json());
                _this.areas = data;
                //  console.log(this.subarea);
            }
        });
        setTimeout(function () {
            evento.target.complete();
        }, 2000);
    };
    OrganigramaPage.prototype.presentModal = function (rol) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtr.create({
                            component: _verroles_verroles_page__WEBPACK_IMPORTED_MODULE_6__["VerrolesPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                rol: rol
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
    OrganigramaPage.prototype.bussubarea = function (idarea) {
        var _this = this;
        console.log(idarea);
        this.postPvdr.getSubareas(idarea).subscribe(function (dato) {
            _this.subareas = dato;
        });
    };
    OrganigramaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organigrama',
            template: __webpack_require__(/*! ./organigrama.page.html */ "./src/app/organigrama/organigrama.page.html"),
            styles: [__webpack_require__(/*! ./organigrama.page.scss */ "./src/app/organigrama/organigrama.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _providers_post_providers__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _ionic_Storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], OrganigramaPage);
    return OrganigramaPage;
}());



/***/ })

}]);
//# sourceMappingURL=organigrama-organigrama-module.js.map