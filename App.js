import React, { Component} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const aboutEmpoca = 'Erlebniscamps und Workshops für junge Menschen mit Rassismuserfahrungen'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./lib/logo.png')}></Image>
        <Text style={styles.welcome}>Empowerment Camp</Text>
        <Text style={styles.instructions}>{aboutEmpoca}</Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
