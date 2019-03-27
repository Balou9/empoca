import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../lib/styles.js';
const aboutEmpoca = 'Erlebniscamps und Workshops für junge Menschen mit Rassismuserfahrungen';


export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../lib/logo.png')}></Image>
        <Text style={styles.welcome}>Empowerment Camp</Text>
        <Text style={styles.instructions}>{aboutEmpoca}</Text>
      </View>
    );
  }
};
