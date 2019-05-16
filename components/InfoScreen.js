import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { infoTxt } from '../lib/txt.js';
import { styles } from '../lib/styles.js';

export default class InfoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../lib/icon.png')} style={{width: 150, height: 100}}>
      </Image>
      <Text style={styles.instructions}>{infoTxt.info}</Text>
      </View>
    );
  }
};
