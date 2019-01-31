import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import HTMLView from "react-native-htmlview";

const CategoryVertical = props => (
  <TouchableOpacity>
    <View style={styles.ListItem}>
     <View style={{height: '60%', width: '70%', marginTop: 30}}>
     <Text style={{fontWeight: 'bold', color: '#525a65', paddingLeft: 20, paddingBottom: 20, paddingRight: 20}}>{props.placeName}</Text>
     <Text style={{fontWeight: '500', color: '#525a65', paddingLeft: 20}}>{props.date}</Text>
     <Text  numberOfLines={2} style={{fontWeight: '300', color: '#525a65', paddingLeft: 20, paddingTop: 8}}>{props.description}</Text>
     {/* <HTMLView value={props.description} style={{fontWeight: '300', color: '#525a65', paddingLeft: 20, paddingTop: 8, paddingRight: 20}}/> */}
     </View>
      <View style={{height: '40%', width: '30%', marginTop: 30}}>
      <Image
        resizeMode="cover"
        source={props.imageUri}
        style={styles.placeImage}
      />
      </View>
   
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  ListItem:{
    flex: 1,
    backgroundColor: '#ffffff',
    width: '100%',
    height: 150,
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 10,
    shadowRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2
  },
  placeImage: {
    height: 100,
    width: 100,
    borderRadius: 10
    
  }
})
export default CategoryVertical