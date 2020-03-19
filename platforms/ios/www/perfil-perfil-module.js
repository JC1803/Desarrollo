(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");







var routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]
    }
];
var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.page.html":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"scroller\">\n  <div class=\"menu1\">\n    <div class=\"center2\">\n      <ion-avatar>\n        <img class=\"iavatar\" src=\"/assets/sinfoto.jpg\" alt=\"\">\n      </ion-avatar>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-label>\n        <h2 class=\"texto\"> {{postPvdr.Globalusuario.Nombre}} {{postPvdr.Globalusuario.Apellido}} </h2>\n        <ion-text class=\"texto\" color=\"medium\">\n          <ion-label>\n            {{postPvdr.Globalusuario.Rol}}\n          </ion-label>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n    <div class=\"chipp\">\n      <div class=\"center\">\n        <ion-chip outline color=\"medium\" [routerLink]=\"['/editperfil']\">\n          <ion-icon name=\"create\" color=\"tertiary\"></ion-icon>\n          <ion-label>Editar Perfil</ion-label>\n        </ion-chip>\n        <ion-chip outline color=\"medium\" [routerLink]=\"['/contrasena']\">\n          <ion-icon color=\"tertiary\" name=\"settings\"></ion-icon>\n          <ion-label>Configuración</ion-label>\n        </ion-chip>\n      </div>\n    </div>\n\n    <div padding class=\"fuente\">\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"transgender\" color=\"tertiary\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Sexo</p>\n          <ion-text color=\"dark\">\n            <ion-label>\n              {{postPvdr.Globalusuario.Sexo}}\n            </ion-label>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"calendar\" color=\"tertiary\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Fecha de Nacimiento</p>\n          <ion-text color=\"dark\">\n            <ion-label>\n              {{postPvdr.Globalusuario.Fecha_Nacimiento}}\n            </ion-label>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"compass\" color=\"tertiary\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Dirección</p>\n          <ion-text color=\"dark\">\n            <ion-label>\n              {{postPvdr.Globalusuario.Direccion}}\n            </ion-label>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"phone-portrait\" color=\"tertiary\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Teléfono</p>\n          <ion-text color=\"dark\">\n            <ion-label>\n              {{postPvdr.Globalusuario.Celular}}\n            </ion-label>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"mail\" color=\"tertiary\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Email</p>\n          <ion-text color=\"dark\">\n            <ion-label>\n              {{postPvdr.Globalusuario.email}}\n            </ion-label>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"business\" color=\"tertiary\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Área</p>\n          <ion-text color=\"dark\">\n            <ion-label>\n              {{postPvdr.Globalusuario.Area}}\n            </ion-label>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"today\" color=\"tertiary\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          <p>Subáreas</p>\n          <ion-text color=\"dark\">\n            <ion-label>\n              {{postPvdr.Globalusuario.Sub_Area}}\n            </ion-label>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-divider lines=\"none\">\n        <ion-label>Social:</ion-label>\n      </ion-item-divider>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"logo-facebook\" color=\"tertiary\"></ion-icon>\n        <ion-label> {{postPvdr.Globalusuario.Facebook}} </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"logo-twitter\" color=\"tertiary\"></ion-icon>\n        <ion-label> {{postPvdr.Globalusuario.Twitter}} </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"logo-instagram\" color=\"tertiary\"></ion-icon>\n        <ion-label> {{postPvdr.Globalusuario.Instagram}} </ion-label>\n      </ion-item>\n\n      <ion-item-divider lines=\"none\">\n        <ion-label>Intereses:</ion-label>\n      </ion-item-divider>\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"star\" color=\"tertiary\"></ion-icon>\n        <ion-text> {{postPvdr.Globalusuario.Intereses}} </ion-text>\n      </ion-item>\n    </div>\n  </ion-list>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu1 {\n  padding: 5px 10px 10px;\n  background-image: url(\"/assets/fondo3.jpg\");\n  background-size: cover;\n  height: 25%;\n  color: white; }\n\n.iavatar {\n  width: 200% !important;\n  height: 200% !important;\n  max-width: 80px !important;\n  max-height: 80px !important; }\n\n.texto {\n  text-align: center; }\n\n.texto ion-label {\n    font-size: 14px; }\n\n.fondo {\n  color: #cf2626; }\n\n.chipp {\n  padding: 16px 30px;\n  margin: 0 auto; }\n\n.center {\n  text-align: center; }\n\n.center ion-label {\n    color: darkblue;\n    font-size: 12px; }\n\n.center ion-icon {\n    font-size: 14px; }\n\n.center2 {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.fuente ion-label {\n  font-size: 14px; }\n\n.fuente p {\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL0M6XFx4YW1wcFxcaHRkb2NzXFxDYXJkaW9jZW50cm9NYW50YVxcaW5pY2lvL3NyY1xcYXBwXFxwZXJmaWxcXHBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsMkNBQTJDO0VBQzNDLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBeUIsRUFBQTs7QUFJN0I7RUFDSSxzQkFBcUI7RUFDckIsdUJBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQiwyQkFBMkIsRUFBQTs7QUFJL0I7RUFDUSxrQkFBa0IsRUFBQTs7QUFEMUI7SUFHVSxlQUFjLEVBQUE7O0FBTXBCO0VBQ0UsY0FBdUIsRUFBQTs7QUFHekI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUloQjtFQUNFLGtCQUFrQixFQUFBOztBQURwQjtJQUdJLGVBQWU7SUFDZixlQUFjLEVBQUE7O0FBSmxCO0lBT0ksZUFBYyxFQUFBOztBQUlwQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUlwQjtFQUVJLGVBQWMsRUFBQTs7QUFGbEI7RUFLRSxlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51MXtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvZm9uZG8zLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgXHJcbn1cclxuXHJcbi5pYXZhdGFyICB7ICAgICBcclxuICAgIHdpZHRoOjIwMCUgIWltcG9ydGFudDsgIFxyXG4gICAgaGVpZ2h0IDogMjAwJSAhaW1wb3J0YW50OyAgXHJcbiAgICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDsgIC8vYW55IHNpemVcclxuICAgIG1heC1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZSBcclxuICAgIC8vcGFkZGluZzogLjVlbTtcclxuICAgIH1cclxuXHJcbi50ZXh0byB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIC5mb25kbyB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjA3LCAzOCwgMzgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGlwcCB7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMzBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5jZW50ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWljb257XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgLmNlbnRlcjIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG5cclxuICAuZnVlbnRlIHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-providers */ "./src/providers/post-providers.ts");



var PerfilPage = /** @class */ (function () {
    function PerfilPage(postPvdr) {
        this.postPvdr = postPvdr;
        this.dato = [];
        this.datos = [];
        this.id = "";
    }
    PerfilPage.prototype.ngOnInit = function () {
        var _this = this;
        this.postPvdr.$getListSource.subscribe(function (list) {
            _this.id = list[0].Id_Usuario;
            console.log(_this.id);
        });
        this.cargarDatosUsuario();
    };
    PerfilPage.prototype.cargarDatosUsuario = function () {
        var _this = this;
        this.postPvdr.buscarUsers(this.id).subscribe(function (data) {
            console.log(data);
            _this.datos = data;
            _this.postPvdr.Globalusuario = _this.datos;
        });
    };
    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.page.html */ "./src/app/perfil/perfil.page.html"),
            styles: [__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_providers__WEBPACK_IMPORTED_MODULE_2__["PostProvider"]])
    ], PerfilPage);
    return PerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map