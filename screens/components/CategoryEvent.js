import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { Button, Card, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
const Category = (props) => {
  
  // <TouchableOpacity onPress={props.navigateToEvent}>
  return(
  <TouchableOpacity onPress={() => props.getEventIndidividual(props.id)} >
    <View>
      <View
        style={{
          height: props.height,
          width: props.width,
          marginLeft: 15,
          borderWidth: 0.5,
          borderColor: "#dddddd",
          borderRadius: 10,
          marginTop: props.marginTop,
          overflow: "hidden"
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: 'cover',
              opacity: 0.7
            }}
            source={props.imageUri}
          />
        </View>
        <Divider style={{ backgroundColor: "#dfe6e9" }} />
        <View>
          <View style={{ padding: 5 }}>
            <Text
              numberOfLines={1}
              style={{ fontSize: 15, fontWeight: "bold", color: "#59616b" }}
            >
              {props.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 5,
                paddingBottom: 5
              }}
            >
              <Text
                style={{ fontSize: 10, fontWeight: "100", color: "#525a65" }}
              >
                {props.start}
              </Text>
              <Text
                style={{ fontSize: 10, fontWeight: "100", color: "#525a65" }}
              >
                {props.time}
              </Text>
            </View>
          </View>
          <Divider style={{ backgroundColor: "#dfe6e9" }} />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 5
            }}
          >
            <Icon
              size={15}
              name="ios-calendar"
              style={{ marginHorizontal: 5 }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
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
      </View>
    </View>
  </TouchableOpacity>)
};
export default Category;
