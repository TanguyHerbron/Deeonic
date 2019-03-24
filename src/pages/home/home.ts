import { Component } from '@angular/core';
import {Events} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Album} from "../../app/Album";
import {Artist} from "../../app/Artist";
import {Playlist} from "../../app/Playlist";

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

    private trendingPlaylists : Array<Playlist>;
    private trendingAlbums : Array<Album>;
    private trendingArtists : Array<Artist>;

    constructor(private httpClient: HttpClient, public events: Events) {
        this.httpClient.get('https://api.deezer.com/chart/0/albums')
            .subscribe(trending => {

                this.trendingAlbums = new Array<Album>();

                for(let i = 0; i < trending['data'].length; i++)
                {
                    this.trendingAlbums.push(trending['data'][i]);
                }

            });

        this.httpClient.get('https://api.deezer.com/chart/0/playlists')
            .subscribe(playlists => {

                this.trendingPlaylists = new Array<Playlist>();

                for(let i = 0; i < playlists['data'].length; i++)
                {
                    this.trendingPlaylists.push(playlists['data'][i]);
                }

            });

        this.httpClient.get('https://api.deezer.com/chart/0/artists')
            .subscribe(trending => {

                this.trendingArtists = new Array<Artist>();

                for(let i = 0; i < trending['data'].length; i++)
                {
                    this.httpClient.get('https://api.deezer.com/artist/' + trending['data'][i].id)
                        .subscribe(artist => {
                            (<Artist> artist).nb_fan_form = new Intl.NumberFormat('de-DE', {}).format((<Artist>artist).nb_fan);
                            this.trendingArtists.push(<Artist>artist);
                        });
                }
            });
    }

    ionViewDidLoad() {
    }

    albumClicked(i: number) {
        this.events.publish('feature:missing');
    }

    artistClicked(i: number) {
        this.events.publish('feature:missing');
    }

    playlistclicked(i: number) {
        this.events.publish('feature:missing');
    }
}
