/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
var Sound = require('react-native-sound');

var mabel = require ('./mabel.gif');

class Chanchi extends Component {
  playSound() {
    var s = new Sound('asd1.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', s.getDuration());
        s.play();
      }
    });
  }

  componentDidMount() {
    this.playSound()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{width: 400, height: 400}}  source={mabel} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4',
  },
  image: {
    width: 107,
    height: 165,
  }
});

AppRegistry.registerComponent('Chanchi', () => Chanchi);
