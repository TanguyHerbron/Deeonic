import { Component } from '@angular/core';
import {App, Events} from 'ionic-angular';
import {SearchResult} from "../../app/SearchResult";
import {HttpClient} from "@angular/common/http";
import {DetailsPage} from "../details/details";
import {Radio} from "../../app/Radio";

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {

    private searchResults: Array<SearchResult>;
    private radios: Array<Radio>;
    private showResult: boolean = false;

    constructor(private httpClient: HttpClient, private app: App, public events: Events) {
        this.httpClient.get('https://api.deezer.com/radio')
            .subscribe(results => {
                this.radios = new Array<Radio>();

                for(let i = 0; i < results['data'].length; i++)
                {
                    this.radios.push(results['data'][i]);
                }
            });
    }

    onInput(args)
    {
        if(args.target.value == undefined || args.target.value == "") {

            this.showResult = false;

            this.searchResults = new Array<SearchResult>();

            return;
        }

        this.httpClient.get('https://api.deezer.com/search?q=' + args.target.value)
            .subscribe(data => {

                this.searchResults = new Array<SearchResult>();

                for(let i = 0; i < data['data'].length; i++)
                {
                    this.searchResults.push(data['data'][i]);
                }

                this.showResult = true;

            });

    }

    albumClicked(i: number) {
        this.app.getRootNav().push(DetailsPage, {
            item: this.searchResults[i]
        });
    }

    radioClicked(i: number)
    {
        this.events.publish('feature:missing');
    }
}
