(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendario-calendario-module"],{

/***/ "./src/app/calendario/calendario.module.ts":
/*!*************************************************!*\
  !*** ./src/app/calendario/calendario.module.ts ***!
  \*************************************************/
/*! exports provided: CalendarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageModule", function() { return CalendarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendario.page */ "./src/app/calendario/calendario.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








var routes = [
    {
        path: '',
        component: _calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]
    }
];
var CalendarioPageModule = /** @class */ (function () {
    function CalendarioPageModule() {
    }
    CalendarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]]
        })
    ], CalendarioPageModule);
    return CalendarioPageModule;
}());



/***/ }),

/***/ "./src/app/calendario/calendario.page.html":
/*!*************************************************!*\
  !*** ./src/app/calendario/calendario.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Calendario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n\n  <!--ion-card>\n      <ion-card-header class=\"btn\" button (click)=\"collapseCard = !collapseCard\">\n        <ion-card-title class=\"texto1\">\n          <ion-label > Agregar Evento  </ion-label>\n         \n        </ion-card-title>\n        <ion-icon name=\"add\" slot=\"end\"></ion-icon>\n      </ion-card-header>\n      \n      <ion-card-content *ngIf=\"collapseCard\">\n        <ion-item>\n          <ion-input type=\"text\" placeholder=\"Titulo\" [(ngModel)]=\"event.title\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"text\" placeholder=\"Descripción\" [(ngModel)]=\"event.desc\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Inicio</ion-label>\n          <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.startTime\" [min]=\"minDate\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Fin</ion-label>\n          <ion-datetime displayFormat=\"MM/DD/YYYY HH:mm\" pickerFormat=\"MMM D:HH:mm\" [(ngModel)]=\"event.endTime\" [min]=\"minDate\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Todo el dia?</ion-label>\n          <ion-checkbox [(ngModel)]=\"event.allDay\"></ion-checkbox>\n        </ion-item>\n        <ion-button fill=\"outline\" expand=\"block\" (click)=\"addEvent()\" [disabled]=\"event.title == ''\">Guardar</ion-button>\n   \n      </ion-card-content>\n    </ion-card-->\n   \n    <ion-row>\n      <!-- Change the displayed calendar mode -->\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" [color]=\"calendar.mode == 'month' ? 'tertiary' : 'secondary'\"\n          (click)=\"changeMode('month')\">Mes</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" [color]=\"calendar.mode == 'week' ? 'tertiary' : 'secondary'\"\n          (click)=\"changeMode('week')\">Semana</ion-button>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button expand=\"block\" [color]=\"calendar.mode == 'day' ? 'tertiary' : 'secondary'\" (click)=\"changeMode('day')\">\n          Dia</ion-button>\n      </ion-col>\n      <!-- Move back one screen of the slides -->\n      <ion-col size=\"4\" text-left>\n        <ion-button fill=\"clear\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <!-- Letra en el centro -->\n      <ion-col size=\"4\" class=\"texto\">\n        <ion-label class=\"palabra\"> {{ titulo }} </ion-label>\n      </ion-col>\n      <!-- Move forward one screen of the slides -->\n      <ion-col size=\"4\" text-right>\n        <ion-button fill=\"clear\" (click)=\"next()\">\n          <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n   \n    <calendar\n      [eventSource]=\"eventSource\" \n      [calendarMode]=\"calendar.mode\" \n      [currentDate]=\"calendar.currentDate\"\n      (onEventSelected)=\"onEventSelected($event)\"\n      (onTitleChanged)=\"onViewTitleChanged($event)\"\n      (onTimeSelected)=\"onTimeSelected($event)\" \n      startHour=\"6\"\n      endHour=\"20\"\n      step=\"30\"\n      startingDayWeek=\"1\">\n    </calendar>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/calendario/calendario.page.scss":
/*!*************************************************!*\
  !*** ./src/app/calendario/calendario.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".texto {\n  text-align: center;\n  padding: 20px 0px; }\n\n.texto1 {\n  text-align: center;\n  color: #3a3c3f; }\n\n.btn {\n  background: #d4d4db; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXJpby9DOlxceGFtcHBcXGh0ZG9jc1xcQ2FyZGlvY2VudHJvTWFudGFcXGluaWNpby9zcmNcXGFwcFxcY2FsZW5kYXJpb1xcY2FsZW5kYXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWUsRUFBQTs7QUFHbEI7RUFDRyxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyaW8vY2FsZW5kYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbn1cclxuXHJcbi50ZXh0bzEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICAjM2EzYzNmO1xyXG4gICBcclxufVxyXG4gLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDRkNGRiO1xyXG4gICBcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/calendario/calendario.page.ts":
/*!***********************************************!*\
  !*** ./src/app/calendario/calendario.page.ts ***!
  \***********************************************/
/*! exports provided: CalendarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPage", function() { return CalendarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_providers_post_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/post-providers */ "./src/providers/post-providers.ts");








var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(menu, alertCtrl, postPvdr, locale) {
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.postPvdr = postPvdr;
        this.locale = locale;
        this.eventSource = [];
        this.datos = [];
        this.id = "";
        this.tareas = [];
        this.event = {
            title: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
        };
        this.minDate = new Date().toISOString();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    CalendarioPage.prototype.ngOnInit = function () {
        var _this = this;
        //Obtiene los datos del usuario logueado
        this.postPvdr.$getListSource.subscribe(function (list) {
            _this.datos = list;
            _this.id = _this.datos[0].Id_Usuario;
        });
        this.menu.close();
        this.cargarTareas();
        this.resetEvent();
    };
    CalendarioPage.prototype.cargarTareas = function () {
        var _this = this;
        this.postPvdr.getTareasRes(this.id)
            .subscribe(function (data) {
            if (data != null) {
                var start = _this.event.startTime;
                var end = _this.event.endTime;
                _this.tareas = data;
                console.log(_this.tareas);
                _this.tareas.forEach(function (tar) {
                    var fechaini = tar.tarea.FechaInicio + ' ' + tar.tarea.Hora_Inicio;
                    var fecahfin = tar.tarea.FechaFin + ' ' + tar.tarea.Hora_Fin;
                    console.log(fechaini);
                    var evento = {
                        title: tar.tarea.Nombre,
                        startTime: new Date(fechaini),
                        endTime: new Date(fecahfin),
                        desc: tar.tarea.Descripcion
                    };
                    _this.eventSource.push(evento);
                    console.log(_this.eventSource);
                    _this.myCal.loadEvents();
                });
            }
        }, function (error) {
            console.error(error);
        });
    };
    CalendarioPage.prototype.resetEvent = function () {
        this.event = {
            title: '',
            desc: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
    };
    CalendarioPage.prototype.addEvent = function () {
        var eventCopy = {
            title: this.event.title,
            startTime: new Date(this.event.startTime),
            endTime: new Date(this.event.endTime),
            allDay: this.event.allDay,
            desc: this.event.desc
        };
        if (eventCopy.allDay) {
            var start = eventCopy.startTime;
            var end = eventCopy.endTime;
            eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    // Change current month/week/day
    CalendarioPage.prototype.next = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    };
    CalendarioPage.prototype.back = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lswiper;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                lswiper = document.querySelector('.swiper-container')['swiper'];
                lswiper.slidePrev();
                return [2 /*return*/];
            });
        });
    };
    // Change between month/week/day
    CalendarioPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    // Focus today
    CalendarioPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    // Selected date reange and hence title changed
    CalendarioPage.prototype.onViewTitleChanged = function (titutlo) {
        this.titulo = titutlo;
    };
    // Calendar event was clicked
    CalendarioPage.prototype.onEventSelected = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var start, end, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(event.startTime, 'medium', this.locale);
                        end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(event.endTime, 'medium', this.locale);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: event.title,
                                subHeader: event.desc,
                                message: 'Inicio: ' + start + '<br><br>Fin: ' + end,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Time slot was clicked
    CalendarioPage.prototype.onTimeSelected = function (ev) {
        var selected = new Date(ev.selectedTime);
        this.event.startTime = selected.toISOString();
        selected.setHours(selected.getHours() + 1);
        this.event.endTime = (selected.toISOString());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"])
    ], CalendarioPage.prototype, "myCal", void 0);
    CalendarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendario',
            template: __webpack_require__(/*! ./calendario.page.html */ "./src/app/calendario/calendario.page.html"),
            styles: [__webpack_require__(/*! ./calendario.page.scss */ "./src/app/calendario/calendario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_providers_post_providers__WEBPACK_IMPORTED_MODULE_5__["PostProvider"], String])
    ], CalendarioPage);
    return CalendarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=calendario-calendario-module.js.map