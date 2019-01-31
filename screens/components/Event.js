import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Icon  from 'react-native-vector-icons/Ionicons';
export default class Event extends Component {
  render() {
    const { navigation } = this.props;
    const data = JSON.parse(navigation.state.params.data._bodyText);
    console.log("evento individual", data);
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <View style={{ width: "100%", height: 150 }}>
          <Image
            style={{ resizeMode: "cover", width: "100%", height: 150 }}
            source={require("../../assets/home.jpeg")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 5
          }}
        >
          <Text>{data.title}</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Icon
                size={15}
                name="ios-heart-empty"
                style={{ marginHorizontal: 5 }}
              />

              <Icon
                size={15}
                name="ios-share-alt"
                style={{ marginHorizontal: 5 }}
              />
          </View>
        </View>
      </View>
    );
  }
}
