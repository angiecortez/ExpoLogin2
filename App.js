import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'

import SignInScreen from './screens/SignInScreen'
import HomeScreen from './screens/Events' // =>>>>> faltan iconos
import OtherScreen from './screens/OtherScreen'
import AuthLoading from './screens/AuthLoading'
import Trips from './airbnb/Trips'
import Saved from './airbnb/Saved'
import Inbox from './airbnb/Inbox'
// import Event from './screens/components/Event';
import Opportunities from './screens/Opportunities';

import News from './screens/News';
import Home from './screens/Home';
// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ 
  SignIn: {screen: SignInScreen}, 
  Home: Home,
  Events: {screen:News}, 
  Inbox: {screen:Inbox},   
});
const AppStack = createBottomTabNavigator({
    Explore: {
      screen: Home,
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
        tabBarLabel: 'OtherScreen',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-notifications-outline' color={tintColor} size={24}/>
        )
      }  
    },
    Trips: {
      screen: News,
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
      screen: Saved,
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
    }
), {
  initialRouteName: 'AuthLoading',
});
