import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/HomeScreen.js';
import EventsScreen from './components/EventsScreen.js';
import InfoScreen from './components/InfoScreen.js';
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Events: EventsScreen,
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
