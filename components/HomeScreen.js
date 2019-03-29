import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../lib/styles.js';
import { infoTxt } from '../lib/txt.js';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../lib/icon.png')}></Image>
        <Text style={styles.welcome}>{infoTxt.aboutEmpoca}</Text>
      </View>
    );
  }
};
