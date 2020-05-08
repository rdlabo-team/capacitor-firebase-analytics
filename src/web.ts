import { WebPlugin } from '@capacitor/core';
import { FirebaseAnalyticsPluginPlugin } from './definitions';

export class FirebaseAnalyticsPluginWeb extends WebPlugin implements FirebaseAnalyticsPluginPlugin {
  constructor() {
    super({
      name: 'FirebaseAnalyticsPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const FirebaseAnalyticsPlugin = new FirebaseAnalyticsPluginWeb();

export { FirebaseAnalyticsPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(FirebaseAnalyticsPlugin);
