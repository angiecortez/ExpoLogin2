import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'
import SignInScreen from './screens/SignInScreen'
import Events from './screens/Events' // =>>>>> faltan iconos
import OtherScreen from './screens/OtherScreen'
import AuthLoading from './screens/AuthLoading'
import Opportunities from './screens/Opportunities';

import News from './screens/News';
import Home from './screens/Home';
import Links from './screens/singleComponent/Links';
import Datas from './screens/Datas';
import { Directory } from './screens/Directory';
import Groups from './screens/Groups';

import Event from './screens/components/Event';
// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ 
  SignIn: {screen: SignInScreen}, 

});
const ViewStack = createStackNavigator({
  Home: {screen: Home},
  Events: {screen:Events}, 
  Opportunities: {screen:Opportunities},
  Links: {screen: Links},
  Datas: {screen: Datas},
  Directory: {screen: Directory},
  Groups: {screen: Groups},
  News: {screen: News},
  Event: {screen: Event}
})
const AppDrawerNavigation = createDrawerNavigator({
  screen: OtherScreen,
})
const AppStack = createBottomTabNavigator({
    Explore: {
      screen: ViewStack,
      navigationOptions:{
        tabBarLabel: 'HOME',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-home' color={tintColor} size={24}/>
        )
      }  
    },
    OtherScreen: {
      screen: OtherScreen,
      navigationOptions:{
        tabBarLabel: 'Notification',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-notifications-outline' color={tintColor} size={24}/>
        )
      }  
    },
    Trips: {
      screen: Events,
      navigationOptions:{
        tabBarLabel: 'Add',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-add-circle-outline' color={tintColor} size={24}/>
        )
      }  
    },
    Inbox: {
      screen: Opportunities,
      navigationOptions:{
        tabBarLabel: 'Inbox',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-people' color={tintColor} size={24}/>
        )
      }  
    },
    Saved: {
      screen: News,
      navigationOptions:{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-person' color={tintColor} size={24}/>
        )
      }  
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#00bfcc',
      indicatorStyle: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {
          width: 5,
          height: 3
        },
        shadowOpacity: 0.5,
        shadowColor: 'black',
        elevation: 5
      }
  }
  })

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
        ViewStack
    }
), {
  initialRouteName: 'AuthLoading',
});
