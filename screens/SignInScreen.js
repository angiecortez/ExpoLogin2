import React from "react";
import { AsyncStorage, Button, StyleSheet, View } from 'react-native';
import axios from 'axios'
const baseUrl = 'https://utec.api.uma.la/api/v1';

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };
    state = {
        signedIn: true,
        data: {
            avatar: '',
            birth: '',
            email: '',
            gender: '',
            id_token: '',
            name: ''
        },
    }
    signIn = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: "952638977064-ch5rv4713390qejd3k639brqfbtnn54o.apps.googleusercontent.com",
                iosClientId: '952638977064-nue960a59lon8m86mqs8hkj0vmft5242.apps.googleusercontent.com',
                scopes: ["profile", "email"]
            })
            if (result.type === "success") {
                this.setState({
                    signedIn: true,
                    data: {
                        avatar: result.user.photoUrl,
                        birth: '',
                        email: result.user.email,
                        gender: '',
                        id_token: result.idToken,
                        name: result.user.name     
                    }
                })
               
                this.registerNewUser(this.state.data)
                if (this.state.signedIn) {
                    // await AsyncStorage.setItem(this.state.data.id_token, this.state.data.name);
                    await AsyncStorage.setItem('userToken', 'abc');
                    this.props.navigation.navigate('App')
                }
               else  {
                    alert('fail')
                }
                return result.accessToken;

            } else {
                return {cancelled: true};
            }
        } catch (e) {
            return {error: true};
        }
    }
    registerNewUser = async (payload) =>{
        try{
          const response = await axios.post(baseUrl + '/auth/checkToken', { ...payload })
          await AsyncStorage.setItem('data', JSON.stringify(response.data));
        } 
        catch (error ){
            alert(error)
        }
    //    .then(response => {
    //          AsyncStorage.getItem('data',JSON.stringify(response.data));
    //     }).catch(error => alert(error))
        let x =   AsyncStorage.getItem('data',() => alert('hola'))
    } 
    // _signInAsync = async () => {
    //     await AsyncStorage.setItem('userToken', 'abc');
    //     this.props.navigation.navigate('App');
    // }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this.signIn} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default SignInScreen