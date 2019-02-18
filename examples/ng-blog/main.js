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

module.exports = "<app-posts></app-posts>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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

module.exports = "<div *ngIf=\"categories\" class=\"categories-container\">\n  <a *ngFor=\"let category of categories\">{{category}}</a>\n</div>\n"

/***/ }),

/***/ "./src/app/posts/filters/filters.component.scss":
/*!******************************************************!*\
  !*** ./src/app/posts/filters/filters.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.categories = ['all', 'web', 'dev', 'design'];
    }
    FiltersComponent.prototype.ngOnInit = function () { };
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

module.exports = "<div *ngIf=\"post\" class=\"post-tile\">\n  <div class=\"post-tile--image\" [style.backgroundImage]=\"'url(' + post.image + ')'\"></div>\n  <div class=\"post-tile--categories\">{{post.categories | join:', '}}</div>\n  <div class=\"post-tile--title\">{{post.title}}</div>\n  <div class=\"post-tile--content\">{{post.body | slice:0:50}}&hellip;</div>\n</div>\n"

/***/ }),

/***/ "./src/app/posts/post-tile/post-tile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-tile/post-tile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-tile--image {\n  background-size: cover;\n  height: 178px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC9wb3N0cy9wb3N0LXRpbGUvcG9zdC10aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LXRpbGUvcG9zdC10aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtdGlsZSB7XG4gICYtLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTc4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "<app-filters></app-filters>\n<div class=\"posts row\">\n  <p *ngIf=\"postsLoading$ | async\">Loading posts...</p>\n  <p *ngIf=\"!(postsLoaded$ | async) && !(postsLoading$ | async)\">\n    No posts loaded yet.\n  </p>\n  <div *ngIf=\"postsLoaded$ | async\" class=\"post-tiles-container\">\n    <app-post-tile *ngFor=\"let post of (posts$ | async)\" [post]=\"post\" class=\"col-12 col-md-3\"></app-post-tile>\n  </div>\n</div>\n"

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
                categories: ['web', 'print'].filter(function (category) {
                    return Math.random() > 0.5;
                }).concat([
                    'digital'
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

module.exports = "<div class=\"app-footer mr-auto col-sm-12 col-md-6\">\n  <app-menu></app-menu>\n  <p>\n    All images are presented as an example,\n    belongs to their rightful owners.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-footer .menu-wrapper .nav-item {\n  background-color: #fff;\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBR00sc0JBTm1CO0VBT25CLFdBTnNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvb3Rlci1uYXYtaXRlbS1iZzogI2ZmZiAhZGVmYXVsdDtcbiRmb290ZXItbmF2LWl0ZW0tY29sb3I6ICMwMDAgIWRlZmF1bHQ7XG5cbi5hcHAtZm9vdGVyIHtcbiAgLm1lbnUtd3JhcHBlciB7XG4gICAgLm5hdi1pdGVtIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmb290ZXItbmF2LWl0ZW0tYmc7XG4gICAgICBjb2xvcjogJGZvb3Rlci1uYXYtaXRlbS1jb2xvcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "<nav class=\"navbar\">\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-logo\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"58px\" height=\"58px\">\n        <image x=\"0px\" y=\"0px\" width=\"58px\" height=\"58px\" xlink:href=\"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAQAAABLsoKjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfjAgsXLS9jV8WuAAAGbklEQVRYw62Ze1BVRRzHP+dcEERTEBJFxkBHSVKR0SEfE0RqVCo+UEtrUtG0MadsKtPUGWdUTCzLHprjYKWjk28lEacyX00PdVRQM98oFx88Qk0FrsLpj3vPvWf3nnO5N/syA+f329/ud/e3u7/97aL0xE8EEU0ivUggjliiaArUcovLXOQ0RznJDer9a0rxi7QT6QwjiRgfNnaKyGcPF/4P0j6MZySt/PTHDbawlt8fhrQbM8kixE9CHTVsZAmnrA1sMaA46aWSKObwFb0ICpASgunBaMI4QY01qTchpJLHmIDH6EEYT5PCWezmpAqgoP9WUFCZwNd0+s+EOuIZRAVF1qSae7Q23uNjmlk0pKEBCg4qqMSBg3+4TbDFJDRnEDX8gSaqg1xN6VCZy1wTdwOuXaig8BefU8BNbCiEkEALepFEf8K86jRhCc2YL9IqPY2jVHifHAtCp5UN2Ek2Fd4+I5lsxtLSxDuzWGzt3nEsxWZSqQGwoaAC3zOK26aOv0oBu+lIR6lEIY0rxrnVt4wC9GONl4NqcRDsolMAOwO4hzWu8x13SEeVvJDGQUo9c6i4/B3OYi/X2JlHlXttAywxHaUR98kli+uSNoJcIj2k+oy+S18vyqfYRzthZjfgD/LpzyVJ14/pHlInkpgmGZWTSQmJgqMuUOkXKfxJJtck3TS6GkkVZtJCMHAwmWNAhKC96iclwElewyFowpnl9KoKaPRmqFQlhx0AhAraMAJBAfMlzQie9Ix0otT4AfduvSHo46RV2Rhy2SfIoYzXSbvwolBUx5vcd31XCyWtSQiI1MF0agXNS3R0kqbRVChYS7H72y5VejUgUihmjSC34BlQsTFMcFodKwyRskRagxPoEBCpxnKh2wqZBKm0oYdgVshRg1TOb0JpFKul+W8MRRQIcjKRKt15VFDulCqtp0GQ09jgd8Zk1mIMiSopgnPv8INUpZBDkiaTU4wMIKvYxU2DpJCiShlCsbRJoIEZ7rWsow2bKGSonxvoJscEubNKvKAokaIIwEEWmjSVznb2MtwPYgdXBDlOJVZQlJtWW8ByU30qWykmq9FIJXovVpUWRZVppXreYo6c6bjwBJvZyySfqaoYYiJVmggKi0yVByxkgNdxpSOFVRwi25L0jiA1DySW/kw3cixPmmTy2OJf6FClMNfUp/VdZtObHMsRj+AXskz0YkJ7V5X8Hd5oN0uZTW8mWYy4LRt5xUsrrptKVVrO0RY5r4hy8mjPVCFgenz3DcMlXWtBKlO5LCjaE+wHKUA9K+jDZM57ldhYQRuD3IT2QnmJymlBkeSHgz1wsIoUFnndwKNZYJBaSkfKOZUjwv5ryQsBkAJU8wGDvZKwlw0pd4YwpxqHVY5LSyJQUoDdpHJO0IQyxv09WCixc0KlSgrHQ3jcJ4GCahJvzzNJitoZrnM3kSGCvogqlXryBQeH8rrPFayguu6xHg3AAbYJdnFEAwpThcissYMHKrBHOO8g28eFWAHXDdVzf9e7vFSwbENbIEEKjrfY70zMLrFeKHiEzxrZOB7PGH1SRJlBCqIVsEyKcZs4ryfbq6WQnOG5d5gQOn+MY3WiQQo04UzhWUFTQx6anmwfY7PU9DwGWjgXNBT3Xc+4GjSp62OF3Qqw1Zn6qC7zD6WDNoyVdDYdpfhX7JJ4HxpElCBXs9hZQ1/8Z/lSIohnu8mCMjpUPtSb67cyC3zBCeeH6m7gE/ZKRl34kee9xqqP1DuPSLV8kwE4yEf6p839xujgDINpLhiGM5o6DkmZrzlCWSeEeREVTPQ8VdoMD5t2rjFYynVsDKQvNZyxyJB0KHwqRR4jHExll6FR4TX1BLUM9IpHHRjFc9QarlUyQljGGz66NJOVwkikJ9xfqSfdJAy2YzgjCaKUBzQYRh1CBP3Z5OOY0JhLruQWr6dXlbfJkXJED6o5Thl/Y+c+DUTQl5608hGr65jFMnlNmL/3TmAR0Tw8rjKDdd5qm+kL+XGO0IHHHpLyJ6ZQaFbgeWQWUUIhNXQN8GnDcwJdI5d3uGhuZItRpKNKPy/vsZ9dhJHQaKqmueppOONyNWuYwjbqrCo459T4Emo8JzWgD+MY5mOGNUMtjVK28K3Zw7JMqjTSHMSTQQY9iPNhc44i8jkgHW8WpIrQV7PmXBNBJN1JpguPEUsUzYDbVFLGJc5wmFPc9PefQf8CRbCjyi5mvJsAAAAASUVORK5CYII=\" />\n      </svg>\n    </div>\n    <span class=\"navbar-brand\" href=\"/\">I am a designer and art-director<br>from New-York</span>\n  </div>\n  <div class=\"navbar-expand ml-auto\">\n    <div class=\"navbar-nav\">\n      <app-menu></app-menu>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  line-height: 1.5rem; }\n  .navbar-logo {\n    float: left;\n    margin-right: .5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC91aS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CLEVBQUE7RUFFbkI7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG5cbiAgJi1sb2dvIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "<div class=\"menu-wrapper row\">\n  <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/home\">Home</a>\n  <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/about\">About</a>\n  <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/contacts\">Contacts</a>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/menu/menu.component.scss":
/*!*********************************************!*\
  !*** ./src/app/ui/menu/menu.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item {\n  background-color: #464646;\n  color: #fff;\n  margin: .5em;\n  padding: .5em 1em;\n  text-transform: uppercase; }\n  .nav-item.active {\n    background-color: #00aeff; }\n  .app-footer .nav-item {\n    background-color: unset;\n    color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nc2hvaGFtL0RldmVsb3BtZW50L25nLWJsb2cvc3JjL2FwcC91aS9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx5QkFObUI7RUFPbkIsV0FMbUI7RUFNbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUIsRUFBQTtFQUwzQjtJQVFJLHlCQVp3QixFQUFBO0VBZTFCO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBZnlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbmF2LWl0ZW0tYmc6ICM0NjQ2NDYgIWRlZmF1bHQ7XG4kbmF2LWl0ZW0tYmctYWN0aXZlOiAjMDBhZWZmICFkZWZhdWx0O1xuJG5hdi1pdGVtLWNvbG9yOiAjZmZmICFkZWZhdWx0O1xuJG5hdi1pdGVtLWNvbG9yLS1mb290ZXI6ICMwMDA7XG5cbi5uYXYtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXYtaXRlbS1iZztcbiAgY29sb3I6ICRuYXYtaXRlbS1jb2xvcjtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1pdGVtLWJnLWFjdGl2ZTtcbiAgfVxuXG4gIC5hcHAtZm9vdGVyICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIGNvbG9yOiAkbmF2LWl0ZW0tY29sb3ItLWZvb3RlcjtcbiAgfVxufVxuIl19 */"

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
    }
    MenuComponent.prototype.ngOnInit = function () { };
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