// import React from 'react';
// import { createSwitchNavigator, createAppContainer } from 'react-navigation'
// import LoadingScreen from './screens/LoadingScreen'
// import LoginScreen from './screens/LoginScreen'
// import DashboardScreen from './screens/DashboardScreen'
// import { firebaseConfig } from './config';
//
// import Events from './source/components/Events';
// //firebase.initializeApp(firebaseConfig)
//
// export default class App extends React.Component {
//   render() {
//     return <AppNavigator/>
//   }
// }
// const AppSwitchNavigator = createSwitchNavigator(
//   {
//   Loading: LoadingScreen,
//   LoginScreen: LoginScreen,
//   DashboardScreen: DashboardScreen
//   },
//   {
//     initialRouteName: "Loading"
//   }
// )
// const AppNavigator = createAppContainer(AppSwitchNavigator)

import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import SignInScreen from './screens/SignInScreen'
import HomeScreen from './screens/HomeScreen'
import OtherScreen from './screens/OtherScreen'
import AuthLoading from './screens/AuthLoading'


const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

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
