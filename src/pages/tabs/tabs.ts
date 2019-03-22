import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import {HomePage} from "../home/home";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  searchTab = SearchPage;
  tab3Root = SearchPage;

  constructor() {

  }
}
