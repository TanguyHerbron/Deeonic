import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import {HomePage} from "../home/home";
import {StatusBar} from "@ionic-native/status-bar";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  searchTab = SearchPage;
  tab3Root = SearchPage;

  constructor(private statusBar: StatusBar) {

    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByName("white");

  }
}
