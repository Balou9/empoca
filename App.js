import React, { Component} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";

const aboutEmpoca = 'Erlebniscamps und Workshops für junge Menschen mit Rassismuserfahrungen'

type Props = {};
class HomeScreen extends Component<Props> {
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

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
})

export default createAppContainer(AppNavigator)

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
