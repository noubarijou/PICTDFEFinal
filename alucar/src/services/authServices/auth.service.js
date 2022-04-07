import axios from 'axios';
const API_URL = 'http://184.72.115.9:8080/validarSenha';

const register = (email, senha) => {
    return axios.post(API_URL + 'criarconta', {
        email,
        senha
    });
};

const login = (email, senha) => {
    return axios.post(API_URL, {
        email,
        senha
    })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
};
export default AuthService;