import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Artist} from "../../app/Artist";
import {SearchResult} from "../../app/SearchResult";
import {Album} from "../../app/Album";
import {HttpClient} from "@angular/common/http";
import {DetailsPage} from "../details/details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private searchResults: Array<SearchResult>;

  constructor(public navCtrl: NavController, private httpClient: HttpClient) {

  }

  onInput(args)
  {
    if(args.target.value == "") return;

    this.httpClient.get('https://api.deezer.com/search?q=' + args.target.value)
      .subscribe(data => {

        this.searchResults = new Array<SearchResult>();

        for(let i = 0; i < data['data'].length; i++)
        {
          this.searchResults.push(new SearchResult(
            data['data'][i].id,
            data['data'][i].title,
            data['data'][i].preview,
            new Artist(
              data['data'][i].artist.id,
              data['data'][i].artist.name,
              data['data'][i].artist.link,
              data['data'][i].artist.picture,
              data['data'][i].artist.picture_small,
              data['data'][i].artist.picture_medium,
              data['data'][i].artist.picture_big,
              data['data'][i].artist.picture_xl,
              data['data'][i].artist.tracklist,
              data['data'][i].artist.type),
            new Album(
              data['data'][i].album.id,
              data['data'][i].album.title,
              data['data'][i].album.cover,
              data['data'][i].album.cover_small,
              data['data'][i].album.cover_medium,
              data['data'][i].album.cover_big,
              data['data'][i].album.cover_xl,
              data['data'][i].album.tracklist,
              data['data'][i].album.type)
            ));
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

  }

  cardClicked(i: number) {
    this.navCtrl.push(DetailsPage, {
      item: this.searchResults[i]
    });
  }
}
