// default import
import httpClient from './httpClient';

class ApiClient {

    constructor(client)  {
        this.client = client;
    }

    //calls the Post-Method of the http-Client to send the content to server
    //the post-method gets a URL to send to and the content
    login(username, password) {

        let encodedCredentials = btoa(username + ':' + password);

        let headers = {
            Authorization: 'Basic ' + encodedCredentials
        }

        this.client.post('https://iam.ipool.asideas.de/iam/token/newsfinder', {}, headers);
    }
}

export default new ApiClient(httpClient);
