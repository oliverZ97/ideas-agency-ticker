
class AuthentificationService {
    constructor(){
        this.token = this.getToken();
    }
    
    setToken(data) {
        this.token = data;
        localStorage.setItem('accessToken', data['accessToken']);//puts the Response Token in a local Storage object
    }
    
    getToken() {
        return localStorage.getItem('accessToken');
    }

    removeToken() {
        this.token = null;
        localStorage.removeItem('accessToken');
    }
}

export default new AuthentificationService();