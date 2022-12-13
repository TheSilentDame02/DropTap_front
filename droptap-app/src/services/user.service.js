import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/user/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'list',{ headers: authHeader() });
    }

    getUserBoard() {
        return axios.get(API_URL + 'find', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();
