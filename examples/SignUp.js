import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SignUp extends Component {
   verifyAuth0Token = (auth, callback, event) => { console.log("^^^^ Inside verifyAuth0Token Token ^^^^^^^^^^");
console.log(util.inspect(auth, { showHidden: true, depth: null }));
var decoded = jwt.verify(auth.accessToken, auth0ClientSecret, {
    audience: auth0ClientID,
    issuer:`https://${auth0Domain}/`,
    subject: auth.id
  }, function (err, decoded){
     if (err) {   // token is not authentic
       console.log(util.inspect(err, { showHidden: true, depth: null }));
       callback(null, generatePolicy('user', 'Deny', event.methodArn));
     }
     else { 
       console.log(util.inspect(decoded, { showHidden: true, depth: null }));
       callback(null, generatePolicy('user', 'Allow', event.methodArn)); 
     }
   });
}
  render() {
    return (
      <View>
        <Text> chauuuu </Text>
      </View>
    )
  }
}
