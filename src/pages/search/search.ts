import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {SearchResult} from "../../app/SearchResult";
import {HttpClient} from "@angular/common/http";
import {DetailsPage} from "../details/details";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

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
          this.searchResults.push(data['data'][i]);
        }

      });

  }

  cardClicked(i: number) {
    this.navCtrl.push(DetailsPage, {
      item: this.searchResults[i]
    });
  }
}
