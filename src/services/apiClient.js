// default import
import httpClient from './httpClient';
import authentificationService from './authentificationService';
import filterService from './filterService';

class ApiClient {

    constructor(client, authentificationService, filterService) {
        this.client = client;
        this.authentificationService = authentificationService
        this.filterService = filterService
    }

    //calls the Post-Method of the http-Client to send the content to server
    //the post-method gets a URL to send to and the content
    login(username, password) {

        //btoa encodes strings to Base64 --> atob decodes it back to clear
        let encodedCredentials = btoa(username + ':' + password);

        let headers = {
            'Authorization': 'Basic ' + encodedCredentials,
        }

        return this.client.post('https://iam.ipool.asideas.de/iam/token/newsfinder', {}, headers)
            .then(data => {
                this.authentificationService.setToken(data);
                return data;
            })
    }

    search(searchstring, urgency = '', categories = []) {

        // search for all categories if non selected
        if (!categories.length) {
            categories = null;
        }

        if (urgency === ''){
            urgency = 8;
        }

        let bodyContent = {
            limit: 30,
            q: searchstring,
            urgencyLimit: urgency,
            categories: categories
        }

        let headers = {
            'X-Auth-Token': this.authentificationService.getToken()
        }

        return this.client.post('https://newsfinder-api.ipool.asideas.de/newsfinder/agencies/documents', bodyContent, headers)
            .then(data => {
                return data;
            })
    }
}

export default new ApiClient(httpClient, authentificationService, filterService);
