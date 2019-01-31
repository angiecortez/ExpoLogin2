import React, { Component } from "react";
import {
  View,
  Platform,
  StatusBar,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text
} from "react-native";
import axios from "axios";
import Category from "./components/Category";
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

class News extends Component {
  static navigationOptions = {
    title: "Noticias"
  };
  state = {
    news: [],
    isLoading: true
  };
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
    this.getNews();
  }
  getNews = async () => {
    try {
      const response = await axios.get(
        baseApi +
          "news" +
          "?includes[]=user" +
          "&includes[]=comments" +
          "&includes[]=category" +
          "&includes[]=media" +
          "&includes[]=likes" +
          "&sort[0][key]=id" +
          "&sort[0][direction]=DESC",
        Authorization
      );
      this.setState({ news: response.data.news, isLoading: false });
    } catch (error) {
      alert(error);
    }
  };
  render() {
    if (this.state.isLoading)
      return (
        <View style={styles.container}>
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
          marginTop: 50
        }}
      >
        <Text>Noticias</Text>
        <FlatList
          directionalLockEnabled={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={this.state.news}
          renderItem={({ item }) => (
            <Category
            width={240}
            height={210}
            imageUri={{uri: `https://media.uma.la/utec/${item.media[0].id}/conversions/thumb.jpg`}}
            name={item.title}
            />
          )}
          keyExtractor={({ id }, index) => id}
        />

        {/* <Text style={{marginTop: 20}}>Eventos Pasados</Text> */}

        {/* <FlatList
       marginTop= {20}
          directionalLockEnabled={false}
          showsVerticalScrollIndicator={false}
          vertical={true}
          data={this.state.news}
          renderItem={({ item }) => (
            <Category
            
              imageUri={require("../assets/news.jpg")}
              name={item.title}
            />
          )}
          keyExtractor={({ id }, index) => id}
        /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default News;
