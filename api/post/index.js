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
/* base url from id*/

const baseUrl = 'https://beta-api.kryptos.com.pe/api/v1/auth/new-account';

export const registerNewUser = (payload) => axios.post(baseUrl + '/auth/register', { ...payload });
export const loginRequest = (data) => axios.post(baseUrl + '/auth/login', { ...data });

/// GET EVENTS
export const getEvents = () => {
	return fetch(baseApi + 'events', Authorization);
};
export const getEvent = (id) => {
	return fetch(baseApi + 'events/' + `${id}`, Authorization);
};

/// GET OPPORTUNITIES
export const getOpportunities = () => {
	return fetch(baseApi + 'opportunities', Authorization);
};
export const getOpportunitie = (id) => {
	return fetch(baseApi + 'opportunities/' + `${id}`, Authorization);
};

/// GET NEWS
export const getNews = () => {
	return fetch(baseApi + 'news', Authorization);
};
export const getNew = (id) => {
	return fetch(baseApi + 'news/' + `${id}`, Authorization);
};

/// GET DESTACADOS
export const getDestacados = () => {
	return fetch(baseApi + 'characters', Authorization);
};
export const getDestacado = (id) => {
	return fetch(baseApi + 'characters/' + `${id}`, Authorization);
};

/// GET DATA
export const fetchData = () => {
	return fetch(baseApi + 'data', Authorization);
};
export const fetchIndividualData = (id) => {
	return fetch(baseApi + 'data/' + `${id}`, Authorization);
};

export const getPosts = () => {
	return fetch('https://jsonplaceholder.typicode.com/posts');
};

export const getPost = (slug) => {
	return fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`);
};

export const dataTotal = () => {
	return fetch('https://next.json-generator.com/api/json/get/VJN-GAuJI');
};

export const data = (id) => {
	return fetch(`https://next.json-generator.com/api/json/get/4kNs3TP18/id=${id}`);
};
