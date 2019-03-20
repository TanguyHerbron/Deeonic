webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_Track__ = __webpack_require__(252);
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
                _this.tracks.push(new __WEBPACK_IMPORTED_MODULE_3__app_Track__["a" /* Track */](data['data'][i].id, data['data'][i].readable, data['data'][i].title, data['data'][i].title_short, data['data'][i].title_version, data['data'][i].isrc, data['data'][i].link, _this.time_formater(data['data'][i].duration), data['data'][i].track_position, data['data'][i].disk_number, data['data'][i].rank, data['data'][i].explicit_lyrics, data['data'][i].explicit_content_lyrics, data['data'][i].explicit_content_cover, data['data'][i].preview, null, data['data'][i].type));
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
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\Guitoune\WebstormProjects\Deeonic\src\pages\details\details.html"*/`<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n  <ion-icon name="arrow-back" (click)="goBack()"></ion-icon>\n\n  <div class="player">\n    <div class="player-controls" (click)="playMusic()">\n      <ion-icon *ngIf="!isPlaying" name="play"></ion-icon>\n      <ion-icon *ngIf="isPlaying" name="pause"></ion-icon>\n    </div>\n    <img class="player-cover" [src]="navParams.get(\'item\').album.cover_medium" (click)="playMusic()">\n  </div>\n\n  <ion-list inset *ngFor="let track of tracks; let i = index">\n    <ion-item (click)="cardClicked(i)">\n      <ion-label class="title">{{track.title}}</ion-label>\n      <ion-label class="duration">{{track.duration}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"C:\Users\Guitoune\WebstormProjects\Deeonic\src\pages\details\details.html"*/,
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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details/details.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_Artist__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_SearchResult__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_Album__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_details__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
    }
    HomePage.prototype.onInput = function (args) {
        var _this = this;
        if (args.target.value == "")
            return;
        this.httpClient.get('https://api.deezer.com/search?q=' + args.target.value)
            .subscribe(function (data) {
            _this.searchResults = new Array();
            for (var i = 0; i < data['data'].length; i++) {
                _this.searchResults.push(new __WEBPACK_IMPORTED_MODULE_3__app_SearchResult__["a" /* SearchResult */](data['data'][i].id, data['data'][i].title, data['data'][i].preview, new __WEBPACK_IMPORTED_MODULE_2__app_Artist__["a" /* Artist */](data['data'][i].artist.id, data['data'][i].artist.name, data['data'][i].artist.link, data['data'][i].artist.picture, data['data'][i].artist.picture_small, data['data'][i].artist.picture_medium, data['data'][i].artist.picture_big, data['data'][i].artist.picture_xl, data['data'][i].artist.tracklist, data['data'][i].artist.type), new __WEBPACK_IMPORTED_MODULE_4__app_Album__["a" /* Album */](data['data'][i].album.id, data['data'][i].album.title, data['data'][i].album.cover, data['data'][i].album.cover_small, data['data'][i].album.cover_medium, data['data'][i].album.cover_big, data['data'][i].album.cover_xl, data['data'][i].album.tracklist, data['data'][i].album.type)));
            }
        });
        /*this.http.get("https://api.deezer.com/search?q=" + args.target.value, {}, {})
          .then(str => {
            this.searchResults = new Array<SearchResult>();
    
            for(var i = 0; i < str.data.length; i++)
            {
              this.searchResults.push(new SearchResult(
                str.data[i].id ,
                str.data[i].title ,
                str.data[i].preview ,
                new Artist(
                  str.data[i].artist.id ,
                  str.data[i].artist.name ,
                  str.data[i].artist.link ,
                  str.data[i].artist.picture ,
                  str.data[i].artist.picture_small ,
                  str.data[i].artist.picture_medium ,
                  str.data[i].artist.picture_big ,
                  str.data[i].artist.picture_xl ,
                  str.data[i].artist.tracklist ,
                  str.data[i].artist.type),
                new Album(
                  str.data[i].album.id ,
                  str.data[i].album.title ,
                  str.data[i].album.cover ,
                  str.data[i].album.cover_small ,
                  str.data[i].album.cover_medium ,
                  str.data[i].album.cover_big ,
                  str.data[i].album.cover_xl ,
                  str.data[i].album.tracklist ,
                  str.data[i].album.type)
              ));
            }
    
            console.log(">> " + this.searchResults.length + " results found");
          });*/
    };
    HomePage.prototype.cardClicked = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__details_details__["a" /* DetailsPage */], {
            item: this.searchResults[i]
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Guitoune\WebstormProjects\Deeonic\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Deeonic\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="onInput($event)"></ion-searchbar>\n  <ion-list inset *ngFor="let data of searchResults; let i = index">\n    <ion-item>\n      <ion-card (click)="cardClicked(i)">\n        <img [src]="data.album.cover_medium" alt="cover">\n        <div class="card-text">\n          <ion-card-header>\n            {{data.title}}\n          </ion-card-header>\n          <p>{{data.artist.name}}</p>\n          <ion-card-content>{{data.album.title}}</ion-card-content>\n        </div>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"C:\Users\Guitoune\WebstormProjects\Deeonic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_details_details__ = __webpack_require__(100);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* DetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* DetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Track; });
var Track = (function () {
    function Track(id, readable, title, title_short, title_version, isrc, link, duration, track_position, disk_number, rank, explicit_lyrics, explicit_content_lyrics, explicit_content_cover, preview, artist, type) {
        this.id = id;
        this.readable = readable;
        this.title = title;
        this.title_short = title_short;
        this.title_version = title_version;
        this.isrc = isrc;
        this.link = link;
        this.duration = duration;
        this.track_position = track_position;
        this.disk_number = disk_number;
        this.rank = rank;
        this.explicit_lyrics = explicit_lyrics;
        this.explicit_content_lyrics = explicit_content_lyrics;
        this.explicit_content_cover = explicit_content_cover;
        this.preview = preview;
        this.artist = artist;
        this.type = type;
    }
    return Track;
}());

//# sourceMappingURL=Track.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Guitoune\WebstormProjects\Deeonic\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\Users\Guitoune\WebstormProjects\Deeonic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Artist; });
var Artist = (function () {
    function Artist(id, name, link, picture, picture_small, picture_medium, picture_big, picture_xl, tracklist, type, radio, position) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.picture = picture;
        this.picture_small = picture_small;
        this.picture_medium = picture_medium;
        this.picture_big = picture_big;
        this.picture_xl = picture_xl;
        this.tracklist = tracklist;
        this.type = type;
        this.radio = radio;
        this.position = position;
    }
    return Artist;
}());

//# sourceMappingURL=Artist.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResult; });
var SearchResult = (function () {
    function SearchResult(id, title, preview, artist, album) {
        this.id = id;
        this.title = title;
        this.preview = preview;
        this.artist = artist;
        this.album = album;
    }
    return SearchResult;
}());

//# sourceMappingURL=SearchResult.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
var Album = (function () {
    function Album(id, title, cover, cover_small, cover_medium, cover_big, cover_xl, tracklist, type, genre_id, fans, release_date, record_type, explicit_lyrics) {
        this.id = id;
        this.title = title;
        this.cover = cover;
        this.cover_small = cover_small;
        this.cover_medium = cover_medium;
        this.cover_big = cover_big;
        this.cover_xl = cover_xl;
        this.tracklist = tracklist;
        this.type = type;
        this.genre_id = genre_id;
        this.fans = fans;
        this.release_date = release_date;
        this.record_type = record_type;
        this.explicit_lyrics = explicit_lyrics;
    }
    return Album;
}());

//# sourceMappingURL=Album.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map