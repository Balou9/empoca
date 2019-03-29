import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { infoTxt } from '../lib/txt.js';
import { styles } from '../lib/styles.js';

export default class InfoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.instructions}>{infoTxt.info}</Text>
      </View>
    );
  }
};
