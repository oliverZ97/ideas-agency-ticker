import 'whatwg-fetch';

export class HttpClient {
    get() {}

    //The HTTP-Post-Method uses whatwg-fetch to create HTTP-Requests
    // the fetch-call needs fetch(url, payload)
    post(url, content, headers) {

        let payload = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        };
        //set additional headers
        for (const key in headers) {
            let value = headers[key];
            payload.headers[key] = value;
        }

        return fetch(url, payload)
            .then(handleResponse)
    }

    put() { }

    delete() { }
}

function handleResponse(response) {
    if (response.ok) {
        return Promise.resolve(response.json())
    } else {
        return Promise.reject({
            status: response.status,
            statusText: response.statusText
        })
    }
}

// default export
var instance = new HttpClient();
export default instance;
