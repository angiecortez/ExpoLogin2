import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'
import Explore from './airbnb/Explore';
import Inbox from './airbnb/Inbox';
import Trips from './airbnb/Trips';
import Saved from './airbnb/Saved';
class View extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
})
export default createBottomTabNavigator({
  Explore: {
    screens: Explore
  },
  Saved: {
    screens: Saved
  },
  Trips: {
    screens: Trips
  },
  Inbox: {
    screens: Inbox
  }
})