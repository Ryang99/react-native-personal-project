/**
* This file manages out App
* author: Ruiyang Guo
* version: v1
* date: 08/28/2019
*/
import { createStackNavigator, createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';

// create navigator object -> to do it we have to have at least one screen component

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  }, 
  {
    initialRouteName: 'Search', // default
  
    defaultNavigationOptions: {
   
      title: 'BusinessSearch'
    }
  }
);


export default createAppContainer(navigator);