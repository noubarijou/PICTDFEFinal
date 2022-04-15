import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://184.72.115.9:8080/clientes/validarSenha/';

const getPublicContent = () => {
    return axios.get(API_URL + 'all');
};

const getUserBoard = () => {
    return axios.get(API_URL + 'user', { headers: authHeader() });
};

const getModeratorBoard = () => {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
};

const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};

export default UserService;
