import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/HomeScreen.js';
import InfoScreen from './components/InfoScreen.js';

import Amplify from 'aws-amplify';
import amplify from './aws-exports';

Amplify.configure(amplify);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Info: InfoScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#1BD6D3',
      labelStyle: {
        fontSize: 18
      },
      inactiveTintColor: 'gray',
    }
  }
);

export default createAppContainer(TabNavigator);
