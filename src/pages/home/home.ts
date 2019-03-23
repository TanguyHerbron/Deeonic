import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Track} from "../../app/Track";
import {Album} from "../../app/Album";
import {Artist} from "../../app/Artist";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    private trendingTracks : Array<Track>;
    private trendingAlbums : Array<Album>;
    private trendingArtists : Array<Artist>;

    constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
        this.httpClient.get('https://api.deezer.com/chart/0/albums')
            .subscribe(trending => {

                this.trendingAlbums = new Array<Album>();

                for(let i = 0; i < trending['data'].length; i++)
                {
                    this.trendingAlbums.push(trending['data'][i]);
                }

            });

        this.httpClient.get('https://api.deezer.com/chart/0/artists')
            .subscribe(trending => {

                this.trendingArtists = new Array<Artist>();

                for(let i = 0; i < trending['data'].length; i++)
                {
                    this.trendingArtists.push(trending['data'][i]);
                }

            });
    }

    ionViewDidLoad() {
    }

    albumClicked(i: number) {
        
    }

    artistClicked(i: number) {

    }
}
