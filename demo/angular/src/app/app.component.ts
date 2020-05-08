import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      await Plugins.FirebaseAnalyticsPlugin.disable();
      await Plugins.FirebaseAnalyticsPlugin.enable();

      await Plugins.FirebaseAnalyticsPlugin.setUserId({ userId: '11223344' });
      await Plugins.FirebaseAnalyticsPlugin.logEvent({ name: 'event_name',  parameters: { param1: 'value1', param2: 'value2' }});
      await Plugins.FirebaseAnalyticsPlugin.setUserProperty({ name: 'name1', value: 'value1' });
      await Plugins.FirebaseAnalyticsPlugin.setScreenName({ screenName: 'screen1', screenClassOverride: 'ScreenClassName'});

      const appInstanceId = await Plugins.FirebaseAnalyticsPlugin.appInstanceId();
      console.log(appInstanceId);


    });
  }
}
