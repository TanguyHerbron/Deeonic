import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import {HomePage} from "../home/home";
import {StatusBar} from "@ionic-native/status-bar";
import {InfoPage} from "../info/info";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  searchTab = SearchPage;
  infoTab = InfoPage;

  constructor(private statusBar: StatusBar) {

    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByName("white");

  }
}
