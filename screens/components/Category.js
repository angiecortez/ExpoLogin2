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
  <View style={{shadowRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2}}>
  <View
      style={{
        height: props.height,
        width: props.width,
        marginLeft: 15,
        borderColor: "#dddddd",
        borderRadius: 10,
        overflow: "hidden",
        marginTop: props.marginTop,
    
      }}
    >
 
 <ImageBackground
        source={props.imageUri}
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: "cover",
          shadowRadius: 5,
          opacity: 0.5
        }}
      >
        <View
          style={{
            flex: 1,
            paddingLeft: 10,
            paddingTop: 160
            // flexDirection: "row"
          }}
        >
          <Text
            numberOfLines={2}
            style={{ flex: 1, color: "#000000", fontWeight: "bold" }}
          >
            {props.name}
          </Text>
        </View>
      </ImageBackground>
      </View>
  </View>
  
  
  </TouchableOpacity>
);
export default Category;
