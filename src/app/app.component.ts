import { Component } from '@angular/core';
import {AlertController, Events, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TabsPage} from "../pages/tabs/tabs";
@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertController: AlertController, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    events.subscribe('feature:missing', () => {
      this.missingFeature();
    });

  }

  async missingFeature() {
    const alert = await this.alertController.create({
      message: 'This feature has not been implemented yet.',
      buttons: ['OK']
    });

    await alert.present();
  }
}

