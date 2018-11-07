/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { AdMobBanner } from 'react-native-admob';
import InLocoMedia from 'react-native-inlocomedia';

//InLocoMedia options
const options = Platform.select({
  ios: {
    appId: "<YOUR_IOS_APP_ID>",
    developmentDevices: ["<YOUR_IOS_DEVELOPMENT_DEVICES_IDS>"],
    enableLogs: true
  },
  android: {
    appId: "<YOUR_ANDROID_APP_ID>",
    developmentDevices: ["<YOUR_ANDROID_DEVELOPMENT_DEVICES_IDS>"],
    enableLogs: true
  },
});

//AdMob adUnit
const admobAdUnit = Platform.select({
  ios: "<YOUR_IOS_ADMOB_ADUNIT>",
  android: "<YOUR_ANDROID_ADMOB_ADUNIT>"
});

//Init InLocoMedia SDK
InLocoMedia.init(options);

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <AdMobBanner
          adSize="banner"
          adUnitID={admobAdUnit}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});