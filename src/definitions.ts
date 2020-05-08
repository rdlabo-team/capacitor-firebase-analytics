declare module "@capacitor/core" {
  interface PluginRegistry {
    FirebaseAnalyticsPlugin: FirebaseAnalyticsPluginPlugin;
  }
}

export interface FirebaseAnalyticsPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
