#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(FirebaseAnalyticsPlugin, "FirebaseAnalyticsPlugin",
           CAP_PLUGIN_METHOD(enable, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(disable, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(logEvent, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(setUserProperty, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(setUserId, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(setScreenName, CAPPluginReturnNone);
           CAP_PLUGIN_METHOD(appInstanceId, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(resetAnalyticsData, CAPPluginReturnNone);
)
