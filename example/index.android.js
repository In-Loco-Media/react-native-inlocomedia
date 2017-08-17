import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Text,
  View
} from 'react-native';
import { AdMobBanner } from 'react-native-admob'
import InLocoMedia from 'react-native-inlocomedia';

//InLocoMedia options
const options = {
  appId: "<YOUR_ANDROID_APP_ID>",
  developmentDevices: ["<YOUR_ANDROID_DEVELOPMENT_DEVICES_IDS>"],
  enableLogs: true
};
const admobAdUnit = "<YOUR_ANDROID_ADMOB_ADUNIT>";

//Init InLocoMedia SDK
InLocoMedia.init(options);

//A InLocoMedia banner is rendered using AdMob mediation
export default class RNInLocoMediaSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={admobAdUnit} />
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

AppRegistry.registerComponent('RNInLocoMediaSample', () => RNInLocoMediaSample);
