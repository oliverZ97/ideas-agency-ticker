// default import
import httpClient from './httpClient';
import authentificationService from './authentificationService';

class ApiClient {

    constructor(client, authentificationService) {
        this.client = client;
        this.authentificationService = authentificationService
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
                this.authentificationService.setToken(data);
                return data;
            })
    }

    search(query) {

        let bodyContent = {
            limit: 20,
            q: query
        }

        let headers = {
            XAuthToken: this.authentificationService.getToken()
        }

        return this.client.post('https://newsfinder-api.ipool.asideas.de/newsfinder/agencies/documents', bodyContent, headers)
            .then(data => {
                return data;//TODO
            })
    }
}

export default new ApiClient(httpClient, authentificationService);
