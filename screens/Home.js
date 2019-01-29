import React, { Component } from "react";
import {
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
const { height, width } = Dimensions.get("window");

export default class Home extends Component {
  state = {
    home: [
      {
        image:
          "https://www.fairfield.edu/commencement/images/commencement_background_home_color.jpg",
        id: "News",
        title: "Noticias"
      },
      {
        image:
          "https://www.lavanguardia.com/r/GODO/LV/p4/WebSite/2017/11/08/Recortada/20171108-636457477879315943_20171108142636-kzaD-U432726356644FF-992x558@LaVanguardia-Web.jpg",
        id: "Events",
        title: "Eventos"
      },
      {
        image:
          "https://2.bp.blogspot.com/-r2SJQu6YAsY/W5zOxWTGpfI/AAAAAAAAlf4/EjuNDbl4a5Aw5WRj053BKDc4-9kM3f3ZgCLcBGAs/s1600/00.jpg",
        id: "Opportunities",
        title: "Oportunidades"
      },
      {
        image:
          "http://1.bp.blogspot.com/-A7b2SpAADGk/T-KPAu9vn1I/AAAAAAAAAOQ/q-SURcsRBxg/s1600/graficos1.jpg",
        id: "Datas",
        title: "Datos"
      },

      {
        image:
          "https://fotografias.antena3.com/clipping/cmsimages01/2015/04/23/571BF4CB-6A38-4C80-A4AD-D235EC2082EA/58.jpg",
        id: "Directory",
        title: "Directorio"
      },
      {
        image:
          "http://static.consumer.es/www/imgs/2012/08/voluntarios-protectora.art.jpg",
        id: "Groups",
        title: "Agrupaciones"
      },
      {
        image:
          "http://static.consumer.es/www/imgs/2012/08/voluntarios-protectora.art.jpg",
        id: "Links",
        title: "Links Externos"
      }
    ]
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.home.map(data => (
            <Home1 width={width} image={data.image} id={data.id} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
class Home1 extends Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width / 1.1,
          height: this.props.width / 3,
          borderWidth: 0.5,
          borderColor: "#dddddd",
          marginTop: 15,
          borderRadius: 10,
          overflow: "hidden"
        }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(this.props.id)}
        >
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
                resizeMode: "cover",
                alignItems: "center",
                justifyContent: "center"
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
