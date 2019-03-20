import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchResult} from "../../app/SearchResult";
import {HttpClient} from "@angular/common/http";
import {Artist} from "../../app/Artist";
import {Album} from "../../app/Album";
import {Track} from "../../app/Track";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  private isPlaying: boolean = null;
  private audio: HTMLAudioElement;
  private res: SearchResult;
  private tracks: Array<Track>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
    this.res = navParams.get("item");

    this.httpClient.get(this.res.album.tracklist)
      .subscribe(data => {

        this.tracks = new Array<Track>();

        for(let i = 0; i < data['data'].length; i++)
        {
          this.tracks.push(new Track(
            data['data'][i].id,
            data['data'][i].readable,
            data['data'][i].title,
            data['data'][i].title_short,
            data['data'][i].title_version,
            data['data'][i].isrc,
            data['data'][i].link,
            this.time_formater(data['data'][i].duration),
            data['data'][i].track_position,
            data['data'][i].disk_number,
            data['data'][i].rank,
            data['data'][i].explicit_lyrics,
            data['data'][i].explicit_content_lyrics,
            data['data'][i].explicit_content_cover,
            data['data'][i].preview,
            null,
            data['data'][i].type
          ));
        }

      });
  }

  playMusic() {
    if(this.isPlaying == null)
    {
      this.audio = new Audio();
      this.audio.src = this.res.preview;
      this.audio.load();
      this.audio.play();

      this.isPlaying = true;
    }
    else {
      if(this.isPlaying)
      {
        this.audio.pause();
        this.isPlaying = false;
      }
      else {
        this.audio.play();
        this.isPlaying = true;
      }
    }
  }

  time_formater(_seconds) {
    if (typeof _seconds !== "number" || _seconds < 0)
      return "--";

    var hours = Math.floor(_seconds / 3600),
      minutes = Math.floor((_seconds % 3600) / 60),
      seconds = Math.floor(_seconds % 60);

    if(this.padTime(hours) != "00")
    {
      return this.padTime(hours) + ":" + this.padTime(minutes) + ":" + this.padTime(seconds);
    }

    return this.padTime(minutes) + ":" + this.padTime(seconds);
  };

  padTime(t) {
    return t < 10 ? "0"+t : t;
  }

  cardClicked(i: number) {
    if(this.isPlaying != null)
    {
      this.audio.pause();
    }

    this.audio = new Audio();
    this.audio.src = this.tracks[i].preview;
    this.audio.load();
    this.audio.play();

    this.isPlaying = true;
  }

  goBack() {
    if(this.audio != undefined) this.audio.pause();

    this.navCtrl.pop();
  }
}
