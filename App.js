import HomeScreen from './components/HomeScreen.js';
import { createAppContainer, createStackNavigator } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
