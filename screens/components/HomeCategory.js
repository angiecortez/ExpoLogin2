import React, { Component } from 'react'
import { View, TouchableOpacity, ImageBackground } from 'react-native'

class HomeCategory extends Component {
  navigateToEvent = () => {
    this.props.navigation.navigate(this.props.id)
    // console.log('navigation', this.props.navigation.navigate())
  }
  render() {
    return (
      <View style={{  
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 10}}>
      <View
        style={{
          width: this.props.width / 1.1,
          height: this.props.width / 3,
          borderColor: "#dddddd",
          marginTop: 15,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <TouchableOpacity onPress={this.navigateToEvent} >
          <View
            style={{
              width: this.props.width / 1.1,
              height: this.props.width / 3,
              borderWidth: 0.5,
              borderColor: "#dddddd"
            }}
          >
            <ImageBackground
              source={{ uri: this.props.image }}
              style={{
                flex: 1,
                opacity: 0.7
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      </View>

    );
  }
}
export default HomeCategory
