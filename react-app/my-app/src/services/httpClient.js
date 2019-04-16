import 'whatwg-fetch';

export class HttpClient {
    get() { }

    //The HTTP-Post-Method uses whatwg-fetch to create HTTP-Requests
    // the fetch-call needs fetch(url, headers, body)
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

        fetch(url, payload)
        .then(handleResponse)
        .then(data => console.log('data is', data))
        .catch (error => console.log('Wrong input', error.statusText));

function handleResponse(response) {
    if (response.ok) {
        return response.json()
    } else {
        return Promise.reject({
            status: response.status,
            statusText: response.statusText
        })
    }
}
    }

put() { }

delete () { }
}

// default export
var instance = new HttpClient();
export default instance;
