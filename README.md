[![npm version](https://badge.fury.io/js/%40rdlabo%2Fcapacitor-firebase-analytics.svg)](https://badge.fury.io/js/%40rdlabo%2Fcapacitor-firebase-analytics)

# capacitor-firebase-analytics
This is Firebase Analytics plugin for Capacitor. This repository fork from [philmerrell/capacitor-firebase-analytics](https://github.com/philmerrell/capacitor-firebase-analytics) .

## Demo
[Demo code is here.](https://github.com/rdlabo-team/capacitor-firebase-analytics/tree/master/demo/angular)

## DONATE THIS PROJECT
Thanks for considering donate.

If this plugin help you, please share your app income. This help developing this plugin.This also help me easily determine how much time I would spend on the projects each month.

|  | TYPE | AMOUNT | LINK |
|:--:|:--:|:--:|:--:|
| PayPal.me | Once | Any | [Donate](https://www.paypal.me/rdlabo) |
| PayPal | Subscription | $15/month | [Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JHYSDYQB29MLC) |
| PayPal | Subscription | $30/month | [Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RCJ8A3KXG928A) |
| PayPal | Subscription | $50/month | [Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U2RQUKRPDA35C) |

## Installation
```bash
$ npm install @rdlabo/capacitor-firebase-analytics
```

## Android configuration
Download the `google-services.json` file and copy it to the `android/app/` directory of your capacitor project. You will also need to add the Firebase SDK to your gradle files. 

More info can be found here: 

https://firebase.google.com/docs/android/setup#manually_add_firebase

And in file `android/app/src/main/java/**/**/MainActivity.java`, add the plugin to the initialization list:
    
```diff
  this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    [...]
+   add(jp.rdlabo.capacitor.plugin.firebaseAnalytics.AnalyticsPlugin.class);
    [...]
  }});
```

## iOS configuration
Download the `GoogleService-Info.plist` file. In Xcode right-click on the yellow folder named, "App" and select the 'Add files to "App"'. 

*tip: If you drag and drop your file to this location, You need set `Target Membership` on Xcode.*

## Methods

### logEvent(_options_: { _name_: _string_, _parameters_?: _object_ })
Logs an app event.

```js
Plugins.FirebaseAnalyticsPlugin.logEvent({ name: 'event_name',  parameters: { param1: 'value1', param2: 'value2' });
```

### setUserId(_options_: { _userId_: _string_ })
Sets the user ID property.

```js
Plugins.FirebaseAnalyticsPlugin.setUserId({ userId: '11223344' });
```

### setUserProperty(_options_: { _name_: _string_, _value_: _string })
Sets a user property to a given value.

```js
Plugins.FirebaseAnalyticsPlugin.setUserProperty({ name: 'name1', value: 'value1' });
```

### setScreenName(options: { screenName: string, screenClassOverride?: string)
Sets the current screen name, which specifies the current visual context in your app. This helps identify the areas in your app where users spend their time and how they interact with your app.

```js
Plugins.FirebaseAnalyticsPlugin.setScreenName({ screenName: 'screen1', screenClassOverride: 'ScreenClassName'});
```

### appInstanceId(): Promise<string>
The unique ID for this instance of the application.

```js
Plugins.FirebaseAnalyticsPlugin.appInstanceId();
```

### resetAnalyticsData()
Clears all analytics data for this instance from the device and resets the app instance ID.

```js
Plugins.FirebaseAnalyticsPlugin.resetAnalyticsData();
```

***
