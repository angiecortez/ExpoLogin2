import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import DashboardScreen from './DashboardScreen';
export default class LoginScreen extends Component {
  state = {
    signedIn: false, 
    name: "", 
    photoUrl: "",
    id: "",
    email: "",
    data: []
  }
  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        // androidClientId: "YOUR_CLIENT_ID_HERE",
        iosClientId: '952638977064-nue960a59lon8m86mqs8hkj0vmft5242.apps.googleusercontent.com',
        scopes: ["profile", "email"]
      })
      if (result.type === "success") {
        console.log('result', result.user)
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          id: result.user.id,
          email: result.user.email,
          data: result.user
        })
        console.log(this.state)

        return result.accessToken;
        
      } else {
        return {cancelled: true};
      }
    } catch (e) {
      return {error: true};
    }
}
  render() {
    return (
      <View style={styles.container}>
      {this.state.signedIn ? (
          <DashboardScreen name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }
}
const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" 
       onPress={() => props.signIn()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  }
});
