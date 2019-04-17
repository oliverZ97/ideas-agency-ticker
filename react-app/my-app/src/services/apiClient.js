// default import
import httpClient from './httpClient';

class ApiClient {

    constructor(client) {
        this.client = client;
        this.token = this.getToken();
    }

    //calls the Post-Method of the http-Client to send the content to server
    //the post-method gets a URL to send to and the content
    login(username, password) {

        //btoa encodes strings to Base64 --> atob decodes it back to clear
        let encodedCredentials = btoa(username + ':' + password);

        let headers = {
            Authorization: 'Basic ' + encodedCredentials,
        }

        return this.client.post('https://iam.ipool.asideas.de/iam/token/newsfinder', {}, headers)
            .then(data => {
                this.setToken(data);
                return data;
            })
    }

    search(query) {

        let bodyContent = {
            limit: 20,
            q: query
        }

        let headers = {
            XAuthToken: this.getToken()
        }

        return this.client.post('https://newsfinder-api.ipool.asideas.de/newsfinder/agency/documents', bodyContent, headers)
            .then(data => {
                return data;//TODO
            })
    }

    setToken(data) {
        this.token = data;
        localStorage.setItem('accessToken', data['accessToken']);//puts the Response Token in a local Storage object
        return data;
    }

    getToken() {
        return localStorage.getItem('accessToken');
    }
}

export default new ApiClient(httpClient);
