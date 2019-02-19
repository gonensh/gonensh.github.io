(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/about/about.module": [
		"./src/app/pages/about/about.module.ts",
		"pages-about-about-module"
	],
	"./pages/contacts/contacts.module": [
		"./src/app/pages/contacts/contacts.module.ts",
		"pages-contacts-contacts-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: 'about',
        loadChildren: './pages/about/about.module#AboutModule'
    },
    {
        path: 'contacts',
        loadChildren: './pages/contacts/contacts.module#ContactsModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-container\">\n  <app-layout>\n    <router-outlet></router-outlet>\n  </app-layout>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".site-container {\n  margin: auto;\n  max-width: 950px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiA5NTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-blog';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.effects.ts":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");



var AppEffects = /** @class */ (function () {
    function AppEffects(actions$) {
        this.actions$ = actions$;
    }
    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AppEffects);
    return AppEffects;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _posts_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./posts/post-tile/post-tile.component */ "./src/app/posts/post-tile/post-tile.component.ts");
/* harmony import */ var _posts_filters_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/filters/filters.component */ "./src/app/posts/filters/filters.component.ts");
/* harmony import */ var _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/join.pipe */ "./src/app/pipes/join.pipe.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _posts_posts_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/posts.module */ "./src/app/posts/posts.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.effects */ "./src/app/app.effects.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _posts_filters_filters_component__WEBPACK_IMPORTED_MODULE_9__["FiltersComponent"],
                _posts_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_8__["PostTileComponent"],
                _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_10__["JoinPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                _posts_posts_module__WEBPACK_IMPORTED_MODULE_14__["PostsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({}),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_17__["AppEffects"]])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-filters></app-filters>\n<div class=\"home-title\">My Works</div>\n<app-posts></app-posts>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-title {\n  font-size: 14px;\n  padding-bottom: 35px;\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/app/store/index.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(store) {
        this.store = store;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["LoadUsers"]());
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/post.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/post.model.ts ***!
  \**************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/pipes/join.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/join.pipe.ts ***!
  \************************************/
/*! exports provided: JoinPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPipe", function() { return JoinPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);



var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (input, character) {
        if (character === void 0) { character = ' '; }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(input)) {
            return input;
        }
        return input.join(character);
    };
    JoinPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'join'
        })
    ], JoinPipe);
    return JoinPipe;
}());



/***/ }),

/***/ "./src/app/posts/filters/filters.component.html":
/*!******************************************************!*\
  !*** ./src/app/posts/filters/filters.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filters-container\">\n  <div *ngIf=\"categories\" class=\"categories-container\">\n    <a *ngFor=\"let category of categories\" [ngClass]=\"{'category-filter': true, 'selected': selectedCategory == category}\"\n      (click)=\"selectCategory(category)\">{{category}}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts/filters/filters.component.scss":
/*!******************************************************!*\
  !*** ./src/app/posts/filters/filters.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filters-container {\n  border-bottom: solid 1px #e5e5e5;\n  margin-bottom: 25px;\n  padding-bottom: 15px; }\n  .filters-container .category-filter {\n    border-bottom: dotted 1px #000;\n    margin: 0 1em 0 0;\n    text-transform: uppercase; }\n  .filters-container .category-filter.selected {\n      border-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC9wb3N0cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZ3Nob2hhbS9EZXZlbG9wbWVudC9uZy1ibG9nL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGdDQ0g4QjtFREk5QixtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7RUFIdEI7SUFNSSw4QkNQaUM7SURRakMsaUJBQWlCO0lBQ2pCLHlCQUF5QixFQUFBO0VBUjdCO01BV00sZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMnO1xuXG4kY2F0ZWdvcnktZmlsdGVyLXVuZGVybGluZTogJGJvcmRlci1zdHlsZS1kb3R0ZWQ7XG4kZmlsdGVycy1jb250YWluZXItYm9yZGVyLWJvdHRvbTogJGJvcmRlci1zdHlsZTtcblxuLmZpbHRlcnMtY29udGFpbmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogJGZpbHRlcnMtY29udGFpbmVyLWJvcmRlci1ib3R0b207XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gIC5jYXRlZ29yeS1maWx0ZXIge1xuICAgIGJvcmRlci1ib3R0b206ICRjYXRlZ29yeS1maWx0ZXItdW5kZXJsaW5lO1xuICAgIG1hcmdpbjogMCAxZW0gMCAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICB9XG59XG4iLCIkZ3JpZC1ndXR0ZXItd2lkdGg6IDEwcHg7XG4kYmFzZS1mb250LXNpemU6IDExcHg7XG4kYmFzZS1mb250LWZhbWlseTogVHJlYnVjaGV0IE1TLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kYm9yZGVyLXN0eWxlOiBzb2xpZCAxcHggI2U1ZTVlNTtcbiRib3JkZXItc3R5bGUtZG90dGVkOiBkb3R0ZWQgMXB4ICMwMDA7XG4iXX0= */"

/***/ }),

/***/ "./src/app/posts/filters/filters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/posts/filters/filters.component.ts ***!
  \****************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiltersComponent = /** @class */ (function () {
    function FiltersComponent() {
        this.categories = ['All', 'Digital', 'Web', 'Print'];
        this.selectedCategory = this.categories[0];
    }
    FiltersComponent.prototype.selectCategory = function (category) {
        this.selectedCategory = category;
    };
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/posts/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/posts/filters/filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-tile/post-tile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-tile/post-tile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\" class=\"post-tile\">\n  <div class=\"post-tile--image-container\" (click)=\"previewPost()\">\n    <img class=\"post-tile--image\" src=\"{{post.image}}\">\n    <div class=\"post-tile--image-overlay\"></div>\n  </div>\n  <div class=\"post-tile--categories\">{{post.categories | join:', '}}</div>\n  <div class=\"post-tile--title\">{{post.title | slice:0:30}}<span *ngIf=\"post.title.length > 30\">&hellip;</span></div>\n  <div class=\"post-tile--body\">{{post.body | slice:0:180}}<span *ngIf=\"post.body.length > 180\">&hellip;</span></div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts/post-tile/post-tile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-tile/post-tile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-tile {\n  margin-bottom: 55px; }\n  .post-tile--categories {\n    font-size: 12px;\n    font-style: italic; }\n  .post-tile--title {\n    font-size: 12px;\n    font-weight: bold; }\n  .post-tile--body {\n    border-top: solid 1px #e5e5e5;\n    margin-top: 1em; }\n  .post-tile--image {\n  height: auto;\n  width: 100%; }\n  .post-tile--image-overlay {\n    background-color: rgba(0, 0, 0, 0.8);\n    background-image: url('preview.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    bottom: 0;\n    cursor: pointer;\n    height: 100%;\n    left: 0;\n    opacity: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transition: .3s ease;\n    width: 100%; }\n  .post-tile--image-container {\n  position: relative;\n  width: 100%; }\n  .post-tile--image-container:hover .post-tile--image-overlay {\n    opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC9wb3N0cy9wb3N0LXRpbGUvcG9zdC10aWxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2dzaG9oYW0vRGV2ZWxvcG1lbnQvbmctYmxvZy9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxtQkFBbUIsRUFBQTtFQUVuQjtJQUNFLGVBQWU7SUFDZixrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQUduQjtJQUNFLDZCQ2hCNEI7SURpQjVCLGVBQWUsRUFBQTtFQUluQjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7RUFFWDtJQUNFLG9DQTNCZ0M7SUE0QmhDLG9DQUEyRDtJQUMzRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLE9BQU87SUFDUCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLFdBQVcsRUFBQTtFQUlmO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtFQUZiO0lBTU0sVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC10aWxlL3Bvc3QtdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcyc7XG5cbiRvdmVybGF5LWJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KSAhZGVmYXVsdDtcbiRwb3N0LXRpbGUtLWJvcmRlci10b3A6ICRib3JkZXItc3R5bGU7XG5cbi5wb3N0LXRpbGUge1xuICBtYXJnaW4tYm90dG9tOiA1NXB4O1xuXG4gICYtLWNhdGVnb3JpZXMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cblxuICAmLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgJi0tYm9keSB7XG4gICAgYm9yZGVyLXRvcDogJHBvc3QtdGlsZS0tYm9yZGVyLXRvcDtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cbn1cblxuLnBvc3QtdGlsZS0taW1hZ2Uge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuXG4gICYtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG92ZXJsYXktYmctY29sb3I7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3ByZXZpZXcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnBvc3QtdGlsZS0taW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAmOmhvdmVyIHtcbiAgICAucG9zdC10aWxlLS1pbWFnZS1vdmVybGF5IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG4iLCIkZ3JpZC1ndXR0ZXItd2lkdGg6IDEwcHg7XG4kYmFzZS1mb250LXNpemU6IDExcHg7XG4kYmFzZS1mb250LWZhbWlseTogVHJlYnVjaGV0IE1TLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kYm9yZGVyLXN0eWxlOiBzb2xpZCAxcHggI2U1ZTVlNTtcbiRib3JkZXItc3R5bGUtZG90dGVkOiBkb3R0ZWQgMXB4ICMwMDA7XG4iXX0= */"

/***/ }),

/***/ "./src/app/posts/post-tile/post-tile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-tile/post-tile.component.ts ***!
  \********************************************************/
/*! exports provided: PostTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTileComponent", function() { return PostTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/post.model */ "./src/app/models/post.model.ts");



var PostTileComponent = /** @class */ (function () {
    function PostTileComponent() {
    }
    PostTileComponent.prototype.ngOnInit = function () { };
    PostTileComponent.prototype.previewPost = function () {
        alert("\u26A0\uFE0F UNIMPLEMENTED FEATURE!\nTHIS SHOULD PREVIEW POST ID#" + this.post.id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_post_model__WEBPACK_IMPORTED_MODULE_2__["Post"])
    ], PostTileComponent.prototype, "post", void 0);
    PostTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-tile',
            template: __webpack_require__(/*! ./post-tile.component.html */ "./src/app/posts/post-tile/post-tile.component.html"),
            styles: [__webpack_require__(/*! ./post-tile.component.scss */ "./src/app/posts/post-tile/post-tile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostTileComponent);
    return PostTileComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posts\">\n  <p *ngIf=\"postsLoading$ | async\">Loading posts...</p>\n  <p *ngIf=\"!(postsLoaded$ | async) && !(postsLoading$ | async)\">\n    No posts loaded yet.\n  </p>\n  <div *ngIf=\"postsLoaded$ | async\" class=\"post-tiles-container row\">\n    <app-post-tile *ngFor=\"let post of (posts$ | async)\" [post]=\"post\" class=\"col-12 col-md-3\"></app-post-tile>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/app/store/index.ts");




var PostsComponent = /** @class */ (function () {
    function PostsComponent(store) {
        this.store = store;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__["getSelectedUser"]).subscribe(function (userId) {
            if (typeof userId !== 'undefined') {
                _this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["LoadPosts"](userId));
            }
        });
        this.posts$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__["getAllPosts"]);
        this.postsLoading$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__["getPostsLoading"]);
        this.postsLoaded$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__["getPostsLoaded"]);
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PostsComponent);
    return PostsComponent;
}());

// TODO: Add ChangeDetectionStrategy.OnPush


/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./src/app/store/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");






var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('posts', _store__WEBPACK_IMPORTED_MODULE_4__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature(_store__WEBPACK_IMPORTED_MODULE_4__["effects"])
            ]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.getPostsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
    }
    PostService.prototype.getPosts = function (userId) {
        return this.http
            .get(this.getPostsEndpoint + "?userId=" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error.json()); }));
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.getUsersEndpoint = 'https://jsonplaceholder.typicode.com/users';
    }
    UserService.prototype.getUsers = function () {
        return this.http
            .get(this.getUsersEndpoint)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error.json()); }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: PostsActionTypes, LoadPosts, LoadPostsSuccess, LoadPostsFail, UsersActionTypes, LoadUsers, LoadUsersSuccess, LoadUsersFail, UserSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.action */ "./src/app/store/actions/posts.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsActionTypes", function() { return _posts_action__WEBPACK_IMPORTED_MODULE_0__["PostsActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadPosts", function() { return _posts_action__WEBPACK_IMPORTED_MODULE_0__["LoadPosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadPostsSuccess", function() { return _posts_action__WEBPACK_IMPORTED_MODULE_0__["LoadPostsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadPostsFail", function() { return _posts_action__WEBPACK_IMPORTED_MODULE_0__["LoadPostsFail"]; });

/* harmony import */ var _users_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.action */ "./src/app/store/actions/users.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersActionTypes", function() { return _users_action__WEBPACK_IMPORTED_MODULE_1__["UsersActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUsers", function() { return _users_action__WEBPACK_IMPORTED_MODULE_1__["LoadUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUsersSuccess", function() { return _users_action__WEBPACK_IMPORTED_MODULE_1__["LoadUsersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUsersFail", function() { return _users_action__WEBPACK_IMPORTED_MODULE_1__["LoadUsersFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSelected", function() { return _users_action__WEBPACK_IMPORTED_MODULE_1__["UserSelected"]; });





/***/ }),

/***/ "./src/app/store/actions/posts.action.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/posts.action.ts ***!
  \***********************************************/
/*! exports provided: PostsActionTypes, LoadPosts, LoadPostsSuccess, LoadPostsFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsActionTypes", function() { return PostsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPosts", function() { return LoadPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPostsSuccess", function() { return LoadPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPostsFail", function() { return LoadPostsFail; });
var PostsActionTypes;
(function (PostsActionTypes) {
    PostsActionTypes["LoadPosts"] = "[Posts] Load Posts";
    PostsActionTypes["LoadPostsSuccess"] = "[Posts] Load Posts Success";
    PostsActionTypes["LoadPostsFail"] = "[Posts] Load Posts Fail";
})(PostsActionTypes || (PostsActionTypes = {}));
var LoadPosts = /** @class */ (function () {
    function LoadPosts(userId) {
        this.type = PostsActionTypes.LoadPosts;
        this.userId = userId;
    }
    return LoadPosts;
}());

var LoadPostsSuccess = /** @class */ (function () {
    function LoadPostsSuccess(payload) {
        this.payload = payload;
        this.type = PostsActionTypes.LoadPostsSuccess;
    }
    return LoadPostsSuccess;
}());

var LoadPostsFail = /** @class */ (function () {
    function LoadPostsFail(payload) {
        this.payload = payload;
        this.type = PostsActionTypes.LoadPostsFail;
    }
    return LoadPostsFail;
}());



/***/ }),

/***/ "./src/app/store/actions/users.action.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/users.action.ts ***!
  \***********************************************/
/*! exports provided: UsersActionTypes, LoadUsers, LoadUsersSuccess, LoadUsersFail, UserSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersActionTypes", function() { return UsersActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUsers", function() { return LoadUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUsersSuccess", function() { return LoadUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUsersFail", function() { return LoadUsersFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSelected", function() { return UserSelected; });
var UsersActionTypes;
(function (UsersActionTypes) {
    UsersActionTypes["LoadUsers"] = "[Users] Load Users";
    UsersActionTypes["LoadUsersSuccess"] = "[Users] Load Users Success";
    UsersActionTypes["LoadUsersFail"] = "[Users] Load Users Fail";
    UsersActionTypes["UserSelected"] = "[Users] User Selected";
})(UsersActionTypes || (UsersActionTypes = {}));
var LoadUsers = /** @class */ (function () {
    function LoadUsers() {
        this.type = UsersActionTypes.LoadUsers;
    }
    return LoadUsers;
}());

var LoadUsersSuccess = /** @class */ (function () {
    function LoadUsersSuccess(payload) {
        this.payload = payload;
        this.type = UsersActionTypes.LoadUsersSuccess;
    }
    return LoadUsersSuccess;
}());

var LoadUsersFail = /** @class */ (function () {
    function LoadUsersFail(payload) {
        this.payload = payload;
        this.type = UsersActionTypes.LoadUsersFail;
    }
    return LoadUsersFail;
}());

var UserSelected = /** @class */ (function () {
    function UserSelected(userId) {
        this.userId = userId;
        this.type = UsersActionTypes.UserSelected;
    }
    return UserSelected;
}());



/***/ }),

/***/ "./src/app/store/effects/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/effects/index.ts ***!
  \****************************************/
/*! exports provided: effects, UsersEffects, PostsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _users_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.effect */ "./src/app/store/effects/users.effect.ts");
/* harmony import */ var _posts_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.effect */ "./src/app/store/effects/posts.effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return _users_effect__WEBPACK_IMPORTED_MODULE_0__["UsersEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsEffects", function() { return _posts_effect__WEBPACK_IMPORTED_MODULE_1__["PostsEffects"]; });



var effects = [_users_effect__WEBPACK_IMPORTED_MODULE_0__["UsersEffects"], _posts_effect__WEBPACK_IMPORTED_MODULE_1__["PostsEffects"]];




/***/ }),

/***/ "./src/app/store/effects/posts.effect.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/posts.effect.ts ***!
  \***********************************************/
/*! exports provided: PostsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsEffects", function() { return PostsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _actions_posts_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/posts.action */ "./src/app/store/actions/posts.action.ts");







var PostsEffects = /** @class */ (function () {
    function PostsEffects(actions$, postService) {
        var _this = this;
        this.actions$ = actions$;
        this.postService = postService;
        this.loadPosts$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_posts_action__WEBPACK_IMPORTED_MODULE_6__["PostsActionTypes"].LoadPosts), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
            return _this.postService.getPosts(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_this.addFluffData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (posts) { return new _actions_posts_action__WEBPACK_IMPORTED_MODULE_6__["LoadPostsSuccess"](posts); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_posts_action__WEBPACK_IMPORTED_MODULE_6__["LoadPostsFail"](error)); }));
        }));
    }
    /**
     * addFluffData - THIS IS A HACK FOR DEMO PURPOSES ONLY
     * This function adds information missing from the API that is required to match the comps
     * @param posts: Post[]
     */
    PostsEffects.prototype.addFluffData = function (posts) {
        return posts.map(function (post) {
            return {
                id: post.id,
                userId: post.userId,
                title: post.title,
                body: post.body,
                image: 'https://source.unsplash.com/random/230x178?r=' + Math.random(),
                categories: ['Web', 'Print'].filter(function (category) {
                    return Math.random() > 0.5;
                }).concat([
                    'Digital'
                ])
            };
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostsEffects.prototype, "loadPosts$", void 0);
    PostsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]])
    ], PostsEffects);
    return PostsEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/users.effect.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/users.effect.ts ***!
  \***********************************************/
/*! exports provided: UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return UsersEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_users_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/users.action */ "./src/app/store/actions/users.action.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");







var UsersEffects = /** @class */ (function () {
    function UsersEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.loadUsers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_users_action__WEBPACK_IMPORTED_MODULE_5__["UsersActionTypes"].LoadUsers), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) { return new _actions_users_action__WEBPACK_IMPORTED_MODULE_5__["LoadUsersSuccess"](users); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_users_action__WEBPACK_IMPORTED_MODULE_5__["LoadUsersFail"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UsersEffects.prototype, "loadUsers$", void 0);
    UsersEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], UsersEffects);
    return UsersEffects;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers, getAppState, getUserState, getAllUsers, getUsersLoading, getUsersLoaded, getSelectedUser, getPostState, getAllPosts, getPostsLoading, getPostsLoaded, effects, PostsActionTypes, LoadPosts, LoadPostsSuccess, LoadPostsFail, UsersActionTypes, LoadUsers, LoadUsersSuccess, LoadUsersFail, UserSelected, UsersEffects, PostsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getAppState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getUserState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getAllUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsersLoading", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getUsersLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsersLoaded", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getUsersLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedUser", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getSelectedUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getPostState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getAllPosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostsLoading", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getPostsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostsLoaded", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getPostsLoaded"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsActionTypes", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["PostsActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadPosts", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadPosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadPostsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadPostsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadPostsFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadPostsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersActionTypes", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UsersActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUsers", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUsersSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadUsersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUsersFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadUsersFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSelected", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UserSelected"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects */ "./src/app/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["UsersEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["PostsEffects"]; });






/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, getAppState, getUserState, getAllUsers, getUsersLoading, getUsersLoaded, getSelectedUser, getPostState, getAllPosts, getPostsLoading, getPostsLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return getAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersLoading", function() { return getUsersLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersLoaded", function() { return getUsersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedUser", function() { return getSelectedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostState", function() { return getPostState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsLoading", function() { return getPostsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsLoaded", function() { return getPostsLoaded; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _posts_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.reducer */ "./src/app/store/reducers/posts.reducer.ts");
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.reducer */ "./src/app/store/reducers/users.reducer.ts");



var reducers = {
    posts: _posts_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    users: _users_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};
// App state functions
var getAppState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('posts');
// User state functions
var getUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppState, function (state) { return state.users; });
var getAllUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _users_reducer__WEBPACK_IMPORTED_MODULE_2__["getUsers"]);
var getUsersLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _users_reducer__WEBPACK_IMPORTED_MODULE_2__["getUsersLoading"]);
var getUsersLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _users_reducer__WEBPACK_IMPORTED_MODULE_2__["getUsersLoaded"]);
var getSelectedUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserState, _users_reducer__WEBPACK_IMPORTED_MODULE_2__["getSelectedUser"]);
// Post state functions
var getPostState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppState, function (state) { return state.posts; });
var getAllPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPostState, _posts_reducer__WEBPACK_IMPORTED_MODULE_1__["getPosts"]);
var getPostsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPostState, _posts_reducer__WEBPACK_IMPORTED_MODULE_1__["getPostsLoading"]);
var getPostsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPostState, _posts_reducer__WEBPACK_IMPORTED_MODULE_1__["getPostsLoaded"]);


/***/ }),

/***/ "./src/app/store/reducers/posts.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/posts.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, reducer, getPosts, getPostsLoading, getPostsLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsLoading", function() { return getPostsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsLoaded", function() { return getPostsLoaded; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_posts_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/posts.action */ "./src/app/store/actions/posts.action.ts");


var initialState = {
    posts: [],
    postsLoading: false,
    postsLoaded: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_posts_action__WEBPACK_IMPORTED_MODULE_1__["PostsActionTypes"].LoadPosts: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { postsLoading: true });
        }
        case _actions_posts_action__WEBPACK_IMPORTED_MODULE_1__["PostsActionTypes"].LoadPostsSuccess: {
            var posts = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { postsLoading: false, postsLoaded: true, posts: posts });
        }
        case _actions_posts_action__WEBPACK_IMPORTED_MODULE_1__["PostsActionTypes"].LoadPostsFail: {
            var error = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { postsLoading: false, postsLoaded: false });
        }
        default: {
            return state;
        }
    }
}
var getPosts = function (state) { return state.posts; };
var getPostsLoading = function (state) { return state.postsLoading; };
var getPostsLoaded = function (state) { return state.postsLoaded; };


/***/ }),

/***/ "./src/app/store/reducers/users.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/users.reducer.ts ***!
  \*************************************************/
/*! exports provided: initialState, reducer, getUsers, getUsersLoading, getUsersLoaded, getSelectedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersLoading", function() { return getUsersLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersLoaded", function() { return getUsersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedUser", function() { return getSelectedUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_users_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/users.action */ "./src/app/store/actions/users.action.ts");


var initialState = {
    users: [],
    usersLoading: false,
    usersLoaded: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_users_action__WEBPACK_IMPORTED_MODULE_1__["UsersActionTypes"].LoadUsers: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { usersLoading: true });
        }
        case _actions_users_action__WEBPACK_IMPORTED_MODULE_1__["UsersActionTypes"].LoadUsersSuccess: {
            var users = action.payload;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { usersLoading: false, usersLoaded: true, users: users, 
                // Pre-select the first user as the default
                selectedUserId: users[0].id });
        }
        case _actions_users_action__WEBPACK_IMPORTED_MODULE_1__["UsersActionTypes"].LoadUsersFail: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { usersLoading: false, usersLoaded: false });
        }
        case _actions_users_action__WEBPACK_IMPORTED_MODULE_1__["UsersActionTypes"].UserSelected: {
            var selectedUserId = action.userId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { usersLoading: false, usersLoaded: false, selectedUserId: selectedUserId });
        }
        default: {
            return state;
        }
    }
}
var getUsers = function (state) { return state.users; };
var getUsersLoading = function (state) { return state.usersLoading; };
var getUsersLoaded = function (state) { return state.usersLoaded; };
var getSelectedUser = function (state) { return state.selectedUserId; };


/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer-container\">\n  <div class=\"app-footer mr-auto\">\n    <app-menu [navItemStyle]=\"'link'\" [hidePaths]=\"['/home']\"></app-menu>\n    <p>\n      All images are presented as an example,\n      belongs to their rightful owners.\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-footer-container {\n  border-top: solid 1px #e5e5e5;\n  padding-top: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2dzaG9oYW0vRGV2ZWxvcG1lbnQvbmctYmxvZy9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw2QkNBOEI7RURDOUIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLmFwcC1mb290ZXItY29udGFpbmVyIHtcbiAgYm9yZGVyLXRvcDogJGJvcmRlci1zdHlsZTtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4iLCIkZ3JpZC1ndXR0ZXItd2lkdGg6IDEwcHg7XG4kYmFzZS1mb250LXNpemU6IDExcHg7XG4kYmFzZS1mb250LWZhbWlseTogVHJlYnVjaGV0IE1TLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4kYm9yZGVyLXN0eWxlOiBzb2xpZCAxcHggI2U1ZTVlNTtcbiRib3JkZXItc3R5bGUtZG90dGVkOiBkb3R0ZWQgMXB4ICMwMDA7XG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/ui/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-logo\">\n      <img src=\"assets/images/logo.png\">\n    </div>\n    <span class=\"navbar-brand\" href=\"/\">I am a designer and art-director<br>from New-York</span>\n  </div>\n  <div class=\"navbar-expand ml-auto\">\n    <div class=\"navbar-nav\">\n      <app-menu></app-menu>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  line-height: 1.5rem;\n  margin: 50px 0;\n  padding: 0; }\n  .navbar-logo {\n    float: left;\n    margin-right: .5em; }\n  .navbar-brand {\n    font-size: 12px;\n    font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC91aS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxVQUFVLEVBQUE7RUFFVjtJQUNFLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtFQUdwQjtJQUNFLGVBQWU7SUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgbWFyZ2luOiA1MHB4IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgJi1sb2dvIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gIH1cblxuICAmLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"content\">\n  <ng-content></ng-content>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/ui/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/menu/menu.component.html":
/*!*********************************************!*\
  !*** ./src/app/ui/menu/menu.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-wrapper row\">\n  <a *ngFor=\"let route of menuRoutes\" class=\"nav-item nav-link nav-item--{{navItemStyle}}\" routerLinkActive=\"active\"\n    routerLink=\"{{route.path}}\">{{route.name}}</a>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/menu/menu.component.scss":
/*!*********************************************!*\
  !*** ./src/app/ui/menu/menu.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item--button {\n  background-color: #464646;\n  color: #fff;\n  margin: .5em;\n  min-width: 70px;\n  padding: .5em 1em;\n  text-align: center;\n  text-transform: uppercase; }\n  .nav-item--button.active {\n    background-color: #00aeff; }\n  .nav-item--link {\n  background: none;\n  color: #000;\n  font-size: 12px;\n  margin-left: 5px;\n  padding-left: 0;\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC91aS9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDRSx5QkFSeUI7RUFTekIsV0FQeUI7RUFRekIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBO0VBUDFCO0lBVUcseUJBaEI4QixFQUFBO0VBb0JsQztFQUNFLGdCQUFnQjtFQUNoQixXQXBCdUI7RUFxQnZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdWkvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcbiRuYXYtaXRlbS0tYnV0dG9uLWJnOiAjNDY0NjQ2ICFkZWZhdWx0O1xuJG5hdi1pdGVtLS1idXR0b24tYmctYWN0aXZlOiAjMDBhZWZmICFkZWZhdWx0O1xuJG5hdi1pdGVtLS1idXR0b24tY29sb3I6ICNmZmYgIWRlZmF1bHQ7XG4kbmF2LWl0ZW0tLWxpbmstY29sb3I6ICMwMDAgIWRlZmF1bHQ7XG5cblxuLm5hdi1pdGVtIHtcbiAgJi0tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LWl0ZW0tLWJ1dHRvbi1iZztcbiAgICBjb2xvcjogJG5hdi1pdGVtLS1idXR0b24tY29sb3I7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgIG1pbi13aWR0aDogNzBweDtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXYtaXRlbS0tYnV0dG9uLWJnLWFjdGl2ZTtcbiAgICB9XG4gIH1cblxuICAmLS1saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAkbmF2LWl0ZW0tLWxpbmstY29sb3I7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/ui/menu/menu.component.ts":
/*!*******************************************!*\
  !*** ./src/app/ui/menu/menu.component.ts ***!
  \*******************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuRoutes = [
            { path: '/home', name: 'Home' },
            { path: '/about', name: 'About' },
            { path: '/contacts', name: 'Contacts' }
        ];
        this.navItemStyle = 'button';
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.hidePaths) {
            this.menuRoutes = this.menuRoutes.filter(function (route) {
                return !_this.hidePaths.includes(route.path);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MenuComponent.prototype, "hidePaths", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuComponent.prototype, "navItemStyle", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/ui/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/ui/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/ui/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
            exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gshoham/Development/ng-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map