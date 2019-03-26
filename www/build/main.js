webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, httpClient) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.isPlaying = null;
        this.res = navParams.get("item");
        this.httpClient.get(this.res.album.tracklist)
            .subscribe(function (data) {
            _this.tracks = new Array();
            for (var i = 0; i < data['data'].length; i++) {
                _this.tracks.push(data['data'][i]);
            }
        });
    }
    DetailsPage.prototype.playMusic = function () {
        if (this.isPlaying == null) {
            this.audio = new Audio();
            this.audio.src = this.res.preview;
            this.audio.load();
            this.audio.play();
            this.isPlaying = true;
        }
        else {
            if (this.isPlaying) {
                this.audio.pause();
                this.isPlaying = false;
            }
            else {
                this.audio.play();
                this.isPlaying = true;
            }
        }
    };
    DetailsPage.prototype.time_formater = function (_seconds) {
        if (typeof _seconds !== "number" || _seconds < 0)
            return "--";
        var hours = Math.floor(_seconds / 3600), minutes = Math.floor((_seconds % 3600) / 60), seconds = Math.floor(_seconds % 60);
        if (this.padTime(hours) != "00") {
            return this.padTime(hours) + ":" + this.padTime(minutes) + ":" + this.padTime(seconds);
        }
        return this.padTime(minutes) + ":" + this.padTime(seconds);
    };
    ;
    DetailsPage.prototype.padTime = function (t) {
        return t < 10 ? "0" + t : t;
    };
    DetailsPage.prototype.cardClicked = function (i) {
        if (this.isPlaying != null) {
            this.audio.pause();
        }
        this.audio = new Audio();
        this.audio.src = this.tracks[i].preview;
        this.audio.load();
        this.audio.play();
        this.isPlaying = true;
    };
    DetailsPage.prototype.goBack = function () {
        if (this.audio != undefined)
            this.audio.pause();
        this.navCtrl.pop();
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"E:\Github\Deeonic\src\pages\details\details.html"*/`<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n  <ion-icon name="arrow-back" (click)="goBack()"></ion-icon>\n\n  <div class="player">\n    <div class="player-controls" (click)="playMusic()">\n      <ion-icon *ngIf="!isPlaying" name="play"></ion-icon>\n      <ion-icon *ngIf="isPlaying" name="pause"></ion-icon>\n    </div>\n    <img class="player-cover" [src]="navParams.get(\'item\').album.cover_medium" (click)="playMusic()">\n  </div>\n\n  <ion-list inset *ngFor="let track of tracks; let i = index">\n    <ion-item (click)="cardClicked(i)">\n      <ion-label class="title">{{track.title}}</ion-label>\n      <ion-label class="duration">{{track.duration}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"E:\Github\Deeonic\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_info__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(statusBar) {
        this.statusBar = statusBar;
        this.homeTab = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.searchTab = __WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPage */];
        this.infoTab = __WEBPACK_IMPORTED_MODULE_4__info_info__["a" /* InfoPage */];
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByName("white");
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Github\Deeonic\src\pages\tabs\tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="homeTab" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n  <ion-tab [root]="searchTab" tabTitle="Search" tabIcon="ios-search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Info" tabIcon="ios-information-circle-outline"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"E:\Github\Deeonic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(httpClient, app, events) {
        var _this = this;
        this.httpClient = httpClient;
        this.app = app;
        this.events = events;
        this.showResult = false;
        this.httpClient.get('https://api.deezer.com/radio')
            .subscribe(function (results) {
            _this.radios = new Array();
            for (var i = 0; i < results['data'].length; i++) {
                _this.radios.push(results['data'][i]);
            }
        });
    }
    SearchPage.prototype.onInput = function (args) {
        var _this = this;
        if (args.target.value == undefined || args.target.value == "") {
            this.showResult = false;
            this.searchResults = new Array();
            return;
        }
        this.httpClient.get('https://api.deezer.com/search?q=' + args.target.value)
            .subscribe(function (data) {
            _this.searchResults = new Array();
            for (var i = 0; i < data['data'].length; i++) {
                _this.searchResults.push(data['data'][i]);
            }
            _this.showResult = true;
        });
    };
    SearchPage.prototype.albumClicked = function (i) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], {
            item: this.searchResults[i]
        });
    };
    SearchPage.prototype.radioClicked = function (i) {
        this.events.publish('feature:missing');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"E:\Github\Deeonic\src\pages\search\search.html"*/`<ion-content padding>\n  <ion-searchbar (ionInput)="onInput($event)"></ion-searchbar>\n  <ion-list inset *ngFor="let data of searchResults; let i = index">\n    <ion-item>\n      <ion-card (click)="cardClicked(i)">\n        <img [src]="data.album.cover_medium" alt="cover">\n        <div class="card-text">\n          <ion-card-header>\n            {{data.title}}\n          </ion-card-header>\n          <p>{{data.artist.name}}</p>\n          <ion-card-content>{{data.album.title}}</ion-card-content>\n        </div>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"E:\Github\Deeonic\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, httpClient, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.platform = platform;
        this.isPlaying = null;
        this.res = navParams.get("item");
        this.httpClient.get(this.res.album.tracklist)
            .subscribe(function (data) {
            _this.tracks = new Array();
            for (var i = 0; i < data['data'].length; i++) {
                var track = data['data'][i];
                track.duration = _this.time_formater(track.duration);
                _this.tracks.push(data['data'][i]);
            }
        });
        platform.registerBackButtonAction(function () {
            _this.goBack();
        });
    }
    DetailsPage.prototype.playMusic = function () {
        if (this.isPlaying == null) {
            this.audio = new Audio();
            this.audio.src = this.res.preview;
            this.audio.load();
            this.audio.play();
            this.isPlaying = true;
        }
        else {
            if (this.isPlaying) {
                this.audio.pause();
                this.isPlaying = false;
            }
            else {
                this.audio.play();
                this.isPlaying = true;
            }
        }
    };
    DetailsPage.prototype.time_formater = function (_seconds) {
        if (typeof _seconds !== "number" || _seconds < 0)
            return "--";
        var hours = Math.floor(_seconds / 3600), minutes = Math.floor((_seconds % 3600) / 60), seconds = Math.floor(_seconds % 60);
        if (this.padTime(hours) != "00") {
            return this.padTime(hours) + ":" + this.padTime(minutes) + ":" + this.padTime(seconds);
        }
        return this.padTime(minutes) + ":" + this.padTime(seconds);
    };
    ;
    DetailsPage.prototype.padTime = function (t) {
        return t < 10 ? "0" + t : t;
    };
    DetailsPage.prototype.cardClicked = function (i) {
        if (this.isPlaying != null) {
            this.audio.pause();
        }
        this.audio = new Audio();
        this.audio.src = this.tracks[i].preview;
        this.audio.load();
        this.audio.play();
        this.isPlaying = true;
    };
    DetailsPage.prototype.goBack = function () {
        if (this.audio != undefined)
            this.audio.pause();
        this.navCtrl.pop();
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"E:\Github\Deeonic\src\pages\details\details.html"*/`<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n  <ion-icon id="back-button" name="arrow-back" (click)="goBack()"></ion-icon>\n\n  <div class="player">\n    <div class="player-controls" (click)="playMusic()">\n      <ion-icon *ngIf="!isPlaying" name="play"></ion-icon>\n      <ion-icon *ngIf="isPlaying" name="pause"></ion-icon>\n    </div>\n    <img class="player-cover" [src]="navParams.get(\'item\').album.cover_medium" (click)="playMusic()">\n  </div>\n\n  <ion-list class="song-list" inset *ngFor="let track of tracks; let i = index">\n    <ion-item (click)="cardClicked(i)">\n      <ion-label class="title">{{track.title}}</ion-label>\n      <ion-label class="duration">{{track.duration}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"E:\Github\Deeonic\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(httpClient, events) {
        var _this = this;
        this.httpClient = httpClient;
        this.events = events;
        this.httpClient.get('https://api.deezer.com/chart/0/albums')
            .subscribe(function (trending) {
            _this.trendingAlbums = new Array();
            for (var i = 0; i < trending['data'].length; i++) {
                _this.trendingAlbums.push(trending['data'][i]);
            }
        });
        this.httpClient.get('https://api.deezer.com/chart/0/playlists')
            .subscribe(function (playlists) {
            _this.trendingPlaylists = new Array();
            for (var i = 0; i < playlists['data'].length; i++) {
                _this.trendingPlaylists.push(playlists['data'][i]);
            }
        });
        this.httpClient.get('https://api.deezer.com/chart/0/artists')
            .subscribe(function (trending) {
            _this.trendingArtists = new Array();
            for (var i = 0; i < trending['data'].length; i++) {
                _this.httpClient.get('https://api.deezer.com/artist/' + trending['data'][i].id)
                    .subscribe(function (artist) {
                    artist.nb_fan_form = new Intl.NumberFormat('de-DE', {}).format(artist.nb_fan);
                    _this.trendingArtists.push(artist);
                });
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.albumClicked = function (i) {
        this.events.publish('feature:missing');
    };
    HomePage.prototype.artistClicked = function (i) {
        this.events.publish('feature:missing');
    };
    HomePage.prototype.playlistclicked = function (i) {
        this.events.publish('feature:missing');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Github\Deeonic\src\pages\home\home.html"*/`<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n  <ion-badge class="trending-badge" color="primary">Trending albums</ion-badge>\n\n  <ion-item>\n    <ion-scroll scrollX>\n      <div class="scroll-item">\n        <ion-col *ngFor="let album of trendingAlbums; let i = index">\n          <div class="card-album card-1" (click)="albumClicked(i)">\n            <img [src]="album.cover_medium">\n            <ion-label>{{album.title}}</ion-label>\n          </div>\n        </ion-col>\n      </div>\n    </ion-scroll>\n  </ion-item>\n\n  <ion-badge class="trending-badge" color="primary">Top artists</ion-badge>\n\n  <ion-item>\n    <ion-scroll scrollX>\n      <div class="scroll-item scroll-artist">\n        <ion-col *ngFor="let artist of trendingArtists; let i = index">\n          <div class="card-list" (click)="artistClicked(i)">\n            <div class="card-artist card-1">\n              <img [src]="artist.picture_medium">\n            </div>\n            <ion-label>{{artist.name}}</ion-label>\n          </div>\n        </ion-col>\n      </div>\n    </ion-scroll>\n  </ion-item>\n\n</ion-content>\n`/*ion-inline-end:"E:\Github\Deeonic\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = (function () {
    function InfoPage() {
    }
    InfoPage.prototype.githubLink = function () {
        window.open("https://github.com/TanguyHerbron/Deeonic");
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"E:\Github\Deeonic\src\pages\info\info.html"*/`<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n\n  <div style="display: flex; margin: 16px;">\n    <label class="info-label">This app has been made with the Ionic Framework.\n    Every information is retrieved from the Free Deezer API.\n\n    Author : Tanguy Herbron</label>\n  </div>\n  <ion-buttons end style="text-align: center">\n    <button ion-button (click)="githubLink()">\n      <ion-icon name="logo-github"></ion-icon>Github\n    </button>\n  </ion-buttons>\n\n</ion-content>\n`/*ion-inline-end:"E:\Github\Deeonic\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_details_details__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_info_info__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* DetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* DetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertController, events) {
        var _this = this;
        this.alertController = alertController;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        events.subscribe('feature:missing', function () {
            _this.missingFeature();
        });
    }
    MyApp.prototype.missingFeature = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'This feature has not been implemented yet.',
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Guitoune\Documents\GitKraken\Deeonic\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\Users\Guitoune\Documents\GitKraken\Deeonic\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Github\Deeonic\src\pages\tabs\tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="homeTab" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n  <ion-tab [root]="searchTab" tabTitle="Search" tabIcon="ios-search"></ion-tab>\n  <ion-tab [root]="infoTab" tabTitle="Info" tabIcon="ios-information-circle-outline"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"E:\Github\Deeonic\src\pages\tabs\tabs.html"*/
            selector: 'page-search',template:/*ion-inline-start:"E:\Github\Deeonic\src\pages\search\search.html"*/`<ion-content padding>\n\n  <div class="top-spacing"></div>\n\n  <ion-searchbar (ionInput)="onInput($event)"></ion-searchbar>\n\n  <div *ngIf="!showResult">\n    <ion-list inset *ngFor="let radio of radios; let i = index">\n      <ion-item *ngIf="i % 2 == 0" class="radio-item">\n        <ion-card class="radio-card" (click)="radioClicked(i)">\n          <img [src]="radios[i].picture_medium" alt="cover">\n          <ion-card-content>{{radios[i].title}}</ion-card-content>\n        </ion-card>\n        <ion-card class="radio-card second-card" (click)="radioClicked(i)">\n          <img [src]="radios[i+1].picture_medium" alt="cover">\n          <ion-card-content>{{radios[i+1].title}}</ion-card-content>\n        </ion-card>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="showResult">\n    <ion-list inset *ngFor="let data of searchResults; let i = index">\n      <ion-item>\n        <ion-card class="card-album" (click)="albumClicked(i)">\n          <img class="album-cover" [src]="data.album.cover_medium" alt="cover">\n          <div class="card-text">\n            <ion-card-header>\n              {{data.title}}\n            </ion-card-header>\n            <p>{{data.artist.name}}</p>\n            <ion-card-content>{{data.album.title}}</ion-card-content>\n          </div>\n        </ion-card>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"E:\Github\Deeonic\src\pages\search\search.html"*/
            selector: 'page-home',template:/*ion-inline-start:"E:\Github\Deeonic\src\pages\home\home.html"*/`<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n  <div class="top-spacing"></div>\n\n  <ion-badge class="trending-badge" color="primary">Best playlists</ion-badge>\n\n  <ion-item>\n    <ion-scroll scrollX class="scroll-playlist">\n      <div class="scroll-item">\n        <ion-col *ngFor="let playlist of trendingPlaylists; let i = index">\n          <div class="card-playlist card-1" (click)="playlistclicked(i)">\n            <img [src]="playlist.picture_medium">\n          </div>\n        </ion-col>\n      </div>\n    </ion-scroll>\n  </ion-item>\n\n  <ion-badge class="trending-badge" color="primary">Trending albums</ion-badge>\n\n  <ion-item>\n    <ion-scroll scrollX>\n      <div class="scroll-item">\n        <ion-col *ngFor="let album of trendingAlbums; let i = index">\n          <div class="card-trending-album card-1" (click)="albumClicked(i)">\n            <img [src]="album.cover_medium">\n            <ion-label>{{album.title}}</ion-label>\n          </div>\n        </ion-col>\n      </div>\n    </ion-scroll>\n  </ion-item>\n\n  <ion-badge class="trending-badge" color="primary">Top artists</ion-badge>\n\n  <ion-item>\n    <ion-scroll scrollX class="scroll-artist">\n      <div class="scroll-item">\n        <ion-col *ngFor="let artist of trendingArtists; let i = index">\n          <div class="card-list" (click)="artistClicked(i)">\n            <div class="card-artist card-1">\n              <img [src]="artist.picture_medium">\n            </div>\n            <ion-label>{{artist.name}}</ion-label>\n            <ion-label class="fan-label">{{artist.nb_fan_form}} fans</ion-label>\n          </div>\n        </ion-col>\n      </div>\n    </ion-scroll>\n  </ion-item>\n\n</ion-content>\n`/*ion-inline-end:"E:\Github\Deeonic\src\pages\home\home.html"*/,