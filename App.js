import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'

import SignInScreen from './screens/SignInScreen'
import HomeScreen from './screens/HomeScreen'
import OtherScreen from './screens/OtherScreen'
import AuthLoading from './screens/AuthLoading'
import Trips from './airbnb/Trips'
import Saved from './airbnb/Saved'
import Inbox from './airbnb/Inbox'

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const AppStack = createBottomTabNavigator({
    Explore: {
      screen: HomeScreen,
      navigationOptions:{
        tabBarLabel: 'HOME',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-keypad' color={tintColor} size={24}/>
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
      screen: Trips,
      navigationOptions:{
        tabBarLabel: 'Trips',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-add-circle-outline' color={tintColor} size={24}/>
        )
      }  
    },
    Inbox: {
      screen: Inbox,
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
        tabBarLabel: 'Saved',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-person' color={tintColor} size={24}/>
        )
      }  
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })
export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));
