import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const Category = props => (
  <TouchableOpacity>
    <View
      style={{
        height: 180,
        width: 210,
        marginLeft: 15,
        borderWidth: 0.5,
        borderColor: "#dddddd",
        borderRadius: 10,
        overflow: "hidden",
        marginTop: 20
      }}
    >
      <ImageBackground
        source={props.imageUri}
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: "cover",
          opacity: 0.7,
        
        }}
      >
        <View
          style={{
            flex: 1,
            paddingLeft: 10,
            paddingTop: 140,
            // flexDirection: "row"
          }}
        >
          <Text
            numberOfLines={2}
            style={{ flex: 1, color: "black", fontWeight: "700" }}
          >
            {props.name}
          </Text>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);
export default Category;
