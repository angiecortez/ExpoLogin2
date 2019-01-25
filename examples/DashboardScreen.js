import React from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
// export default class DashboardScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text> DashboardScreen </Text>
//         <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
        
//       </View>
//     )
//   }
// }
const DashboardScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }}/>
      <Button title="Sign out" onPress={() => alert('hola')} />
    </View>
  )
}
export default DashboardScreen
const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
});
