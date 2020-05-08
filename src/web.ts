import { WebPlugin } from '@capacitor/core';
import { FirebaseAnalyticsPluginPlugin } from './definitions';

export class FirebaseAnalyticsPluginWeb extends WebPlugin implements FirebaseAnalyticsPluginPlugin {
  constructor() {
    super({
      name: 'FirebaseAnalyticsPlugin',
      platforms: ['web']
    });
  }

  // @ts-ignore
  logEvent(options: { name: string, parameters: any[]}) {
    return Promise.resolve();
  }

  // @ts-ignore
  setUserProperty(options: { value: string, name: string}) {
    return Promise.resolve();
  }

  // @ts-ignore
  setUserId(options: { userId: string }) {
    return Promise.resolve();
  }

  // @ts-ignore
  setScreenName(options: { screenName: string, screenClassOverride: string }) {
    return Promise.resolve();
  }

  appInstanceId() {
    return Promise.resolve({ appInstanceId: ''});
  }

  resetAnalyticsData() {
    return Promise.resolve();
  }
}

const FirebaseAnalyticsPlugin = new FirebaseAnalyticsPluginWeb();

export { FirebaseAnalyticsPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FirebaseAnalyticsPlugin);
