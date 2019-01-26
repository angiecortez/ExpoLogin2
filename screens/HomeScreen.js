// import React from "react";
// import {AsyncStorage, View, Button, StyleSheet} from "react-native";

// class HomeScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Welcome to the app!',
//     };

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Button title="Show me more of the app" onPress={this._showMoreApp} />
//                 <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
//             </View>
//         );
//     }

//     _showMoreApp = () => {
//         this.props.navigation.navigate('Other');
//     };

//     _signOutAsync = async () => {
//         await AsyncStorage.clear();
//         this.props.navigation.navigate('Auth');
//     };
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
// export default HomeScreen

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  WebView,
  FlatList,
  ActivityIndicator,
  Image
} from "react-native";
import axios from "axios";
import HTMLView from 'react-native-htmlview';
const Authorization = {
  method: "get",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjkwMThhM2VlMWJkOWZhMTY3ZTc2ODY2ZmQ1ZjlkMmUzMTc2NjA2YjkxMDhhMmNmYzU1YzJlYzkxYTU5ZjRkYzVhMWIwMGRhMDg5YTVhZTY5In0.eyJhdWQiOiIxIiwianRpIjoiOTAxOGEzZWUxYmQ5ZmExNjdlNzY4NjZmZDVmOWQyZTMxNzY2MDZiOTEwOGEyY2ZjNTVjMmVjOTFhNTlmNGRjNWExYjAwZGEwODlhNWFlNjkiLCJpYXQiOjE1NDQ1NjQ2NTcsIm5iZiI6MTU0NDU2NDY1NywiZXhwIjoxNTc2MTAwNjU2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Pf85GC9pmByyK5nsrtTPbjk7ViZRnKG-W04EJ4vbwesjrmFjqpNErvVH5eRNYk02YG2YRhJzPHDaTo2gDEdRw99zVsL3D9AjqHBY6yNoP-c0qe3t7wqS1i0_l49yJrt_hZCgUrzFQRi8q16PsYW3obWQipgjXgnIjZ5EM_-Ri_HyYLeNd5pZkbXkLIX8748NCa-XS-rY2F27U-Z-QsyVkaUD03eOxWhIeu0GkZzQDcE_VEIX4pryN0vm23-Jida3DScgKjPSCpHnvK43oPy9n-VoNThiVtZvnYQRmQT93CFV-cjZgOVzIEDcdNzT2Vh3a-1to7pbyh0Hx1Cfv8K8PU-h-smIKLyypHO6AbHOJpwMSjkPmLP5hEHnT5GGMq1zodLnZzTRCs0jMGtLFZuXMGf-YHVgbhT5BjwR_edOjPn-7zE5Aw9a5hOJ2TXB_HWDspbeiZiSMaDd1Q59kx0MhM6utlPba8IRuQseNev4H35bbu4fMsOxaIBDUqByVtbThBoCaZ87V9OJ6PLlZaZC4TaTW9Dy6cfWYjnaDV9jEz4lHPNg3jQCVfaod98ay0A1UbEIlwc2w__XCunCtHF8ypbtzOKlaWgHwHCoA2pc_-dbrqQIjnauZUkjfxdUFGZ71Jn_172Uhf7Cd1K-_zi1EQJHpO3-lB6etIU58TOk0sU"
  }
};
const baseApi = "https://utec.api.uma.la/api/v1/";

class Explore extends Component {
  state = {
    events: [],
    isLoading: true
  };
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
    this.getEvents();
  }
  getEvents = async () => {
    try {
      const response = await axios.get(baseApi + "events", Authorization);
      this.setState({ events: response.data.events, isLoading: false });
      console.log(this.state);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    if (this.state.isLoading)
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 50
        }}
      >
        <FlatList
          horizontal={true}
          data={this.state.events}
          renderItem={({ item }) => (
            <View
              style={{
                height: 230,
                width: 180,
                marginLeft: 20,
                borderWidth: 0.5,
                borderColor: "#dddddd",
                borderRadius: 10
              }}
            >
              <Image
                style={{ width: "100%", height: 100 }}
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />
              <HTMLView 
              value={item.small_description}
              stylesheet={styles.a}
              />
            </View>
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
export default Explore;

const styles = StyleSheet.create({
  a: {
    marginTop: 10,
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
    height: 120
  },
  contenContainer: {
    height: "100%",
    width: "100%"
  }
});
