import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../lib/styles.js';
import { infoTxt } from '../lib/txt.js';

export default class EventsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../lib/icon.png')} style={{width: 150, height: 100}}>
      </Image>
        <Text style={styles.instructions}>{Object.keys(infoTxt.events)[0]}</Text>
        <Text style={styles.detailed}>{Object.values(infoTxt.events)[0]}</Text>
        <Text style={styles.instructions}>{Object.keys(infoTxt.events)[1]}</Text>
        <Text style={styles.detailed}>{Object.values(infoTxt.events)[1]}</Text>
        <Text style={styles.instructions}>{Object.keys(infoTxt.events)[2]}</Text>
        <Text style={styles.detailed}>{Object.values(infoTxt.events)[2]}</Text>
      </View>
    );
  }
};
