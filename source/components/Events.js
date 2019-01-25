import React, { Component } from 'react'
import { Text, View } from 'react-native'
const baseApi = 'https://utec.api.uma.la/api/v1/';
const Authorization = {
	method: 'get',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		Authorization:
			'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjkwMThhM2VlMWJkOWZhMTY3ZTc2ODY2ZmQ1ZjlkMmUzMTc2NjA2YjkxMDhhMmNmYzU1YzJlYzkxYTU5ZjRkYzVhMWIwMGRhMDg5YTVhZTY5In0.eyJhdWQiOiIxIiwianRpIjoiOTAxOGEzZWUxYmQ5ZmExNjdlNzY4NjZmZDVmOWQyZTMxNzY2MDZiOTEwOGEyY2ZjNTVjMmVjOTFhNTlmNGRjNWExYjAwZGEwODlhNWFlNjkiLCJpYXQiOjE1NDQ1NjQ2NTcsIm5iZiI6MTU0NDU2NDY1NywiZXhwIjoxNTc2MTAwNjU2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Pf85GC9pmByyK5nsrtTPbjk7ViZRnKG-W04EJ4vbwesjrmFjqpNErvVH5eRNYk02YG2YRhJzPHDaTo2gDEdRw99zVsL3D9AjqHBY6yNoP-c0qe3t7wqS1i0_l49yJrt_hZCgUrzFQRi8q16PsYW3obWQipgjXgnIjZ5EM_-Ri_HyYLeNd5pZkbXkLIX8748NCa-XS-rY2F27U-Z-QsyVkaUD03eOxWhIeu0GkZzQDcE_VEIX4pryN0vm23-Jida3DScgKjPSCpHnvK43oPy9n-VoNThiVtZvnYQRmQT93CFV-cjZgOVzIEDcdNzT2Vh3a-1to7pbyh0Hx1Cfv8K8PU-h-smIKLyypHO6AbHOJpwMSjkPmLP5hEHnT5GGMq1zodLnZzTRCs0jMGtLFZuXMGf-YHVgbhT5BjwR_edOjPn-7zE5Aw9a5hOJ2TXB_HWDspbeiZiSMaDd1Q59kx0MhM6utlPba8IRuQseNev4H35bbu4fMsOxaIBDUqByVtbThBoCaZ87V9OJ6PLlZaZC4TaTW9Dy6cfWYjnaDV9jEz4lHPNg3jQCVfaod98ay0A1UbEIlwc2w__XCunCtHF8ypbtzOKlaWgHwHCoA2pc_-dbrqQIjnauZUkjfxdUFGZ71Jn_172Uhf7Cd1K-_zi1EQJHpO3-lB6etIU58TOk0sU'
	}
};
export default class Events extends Component {
  state = {
    isLoading: true,
    events: []
  }
  componentDidMount(){
    return fetch(baseApi + 'events', Authorization)
    .then(response => response.json())
    .then(json => this.setState({ events: json.events}))

  }
  fetchingData = ()=> {

  }
  render() {
    return (
      <View>
        <Text> chau </Text>
      </View>
    )
  }
}
