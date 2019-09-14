/**
* This file manages out App
* author: Ruiyang Guo
* version: v2
* update date: 09/12/2019
*/
import { createStackNavigator, createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

// create navigator object -> to do it we have to have at least one screen component

const navigator = createStackNavigator(
  {
  	// route configration objects

    Search: SearchScreen,
    ResultsShow: ResultsShowScreen 
  }, 
  {
    initialRouteName: 'Search',  // default
  
    defaultNavigationOptions: {
   
      title: 'BusinessSearch'
    }
  }
);


export default createAppContainer(navigator);