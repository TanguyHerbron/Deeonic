import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchResult} from "../../app/SearchResult";
import {Artist} from "../../app/Artist";
import {Album} from "../../app/Album";
import {HttpClient} from "@angular/common/http";
import {Track} from "../../app/Track";

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

  private tracks : Array<Track>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
    this.httpClient.get('https://api.deezer.com/chart')
      .subscribe(trending => {

        this.tracks = new Array<Track>();

        for(let i = 0; i < trending['data'].length; i++)
        {
          this.tracks.push(new Track(
            trending['tracks'].tracks[i].data.id,
            trending['tracks'].tracks[i].data.readable,
            trending['tracks'].tracks[i].data.title,
            trending['tracks'].tracks[i].data.title_short,
            trending['tracks'].tracks[i].data.title_version,
            trending['tracks'].tracks[i].data.isrc,
            trending['tracks'].tracks[i].data.link,
            trending['tracks'].tracks[i].data.duration,
            trending['tracks'].tracks[i].data.track_position,
            trending['tracks'].tracks[i].data.disk_number,
            trending['tracks'].tracks[i].data.rank,
            trending['tracks'].tracks[i].data.explicit_lyrics,
            trending['tracks'].tracks[i].data.explicit_content_lyrics,
            trending['tracks'].tracks[i].data.explicit_content_cover,
            trending['tracks'].tracks[i].data.preview,
            trending['tracks'].tracks[i].data.artist,
            trending['tracks'].tracks[i].data.type
          ));
        }

      });
  }

  ionViewDidLoad() {
  }

}
