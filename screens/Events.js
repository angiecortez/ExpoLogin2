// class HomeScreen extends React.Component {
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
  Platform,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Text
} from "react-native";
import axios from "axios";
import HTMLView from "react-native-htmlview";
import Category from "./components/CategoryEvent";
import { getEvent } from '../api/post/index';
const baseApi = "https://utec.api.uma.la/api/v1/";

import { Authorization } from '../api/post/index';
class Explore extends Component {
  static navigationOptions = {
    title: "Eventos"
  };
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
  getIndividualData = async (query) => {
    let data = await getEvent(query)
    console.log(data)
    this.props.navigation.navigate({ routeName:'Event', params:{data: data}})
  }
  getEvents = async () => {
    try {
      let d = new Date();
      let date = `${d}.getFullYear().toString()-(${d}.getMonth() + 1)-${d}.getDate().toString() ${d}.getHours().toString():${d}.getMinutes()`;

      const response = await axios.get(
        baseApi +
          "events" +
          "?filter_groups[0][filters][0][key]=finish" +
          "&filter_groups[0][filters][0][value]=" +
          date +
          "&filter_groups[0][filters][0][operator]=lt" +
          "&includes[]=media" +
          "&sort[0][key]=finish" +
          "&sort[0][direction]=DESC",
        Authorization
      );

      this.setState({ events: response.data.events, isLoading: false });
    } catch (error) {
      alert(error);
    }
  };
  render() {
    const { navigation } = this.props;
    const { events, isLoading } = this.state;
    if (isLoading)
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );

    return (
      <View style={{ backgroundColor: "#ffffff" }}>
        <View>
          <Text style={{ paddingLeft: 30, paddingBottom: 20 }}>
            Eventos Recomendados
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={events}
            renderItem={({ item }) => (
              <Category
                id={item.id}
                getEventIndidividual={this.getIndividualData}
                navigation={navigation}
                start={"28 NOV 2019"}
                time="8.00"
                width={240}
                height={210}
                imageUri={{
                  uri: `https://media.uma.la/utec/${
                    item.media[1].id
                  }/conversions/thumb.jpg`
                }}
                name={item.title}
                // onItemPressed={() => this.itemSelectedHandler(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.events}
            renderItem={({ item }) => (
              <Category
                id={item.id}
                getEventIndidividual={this.getIndividualData}
                navigation={navigation}
                width={240}
                height={210}
                start={"28 NOV 2019"}
                time="8.00"
                marginTop={20}
                imageUri={{
                  uri: `https://media.uma.la/utec/${
                    item.media[0].id
                  }/conversions/thumb.jpg`
                }}
                name={item.title}
                // onItemPressed={() => this.itemSelectedHandler(item.id)}
              />
            )}
            keyExtractor={({ id }, index) => id}
          />
        </View>
      </View>
    );
  }
}

export default Explore;
