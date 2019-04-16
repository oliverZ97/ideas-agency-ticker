// default import
import httpClient from './httpClient';

class ApiClient {

    constructor(client) {
        this.client = client;
        this.token = ""
    }

    //calls the Post-Method of the http-Client to send the content to server
    //the post-method gets a URL to send to and the content
    login(username, password) {

        //btoa encodes strings to Base64 --> atob decodes it back to clear
        let encodedCredentials = btoa(username + ':' + password);

        let headers = {
            Authorization: 'Basic ' + encodedCredentials
        }

        return this.client.post('https://iam.ipool.asideas.de/iam/token/newsfinder', {}, headers)
            .then(data => {
                this.token = data;
                return data;
            })
    }
}

export default new ApiClient(httpClient);
