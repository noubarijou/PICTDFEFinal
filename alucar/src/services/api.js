import axios from "axios";

const api = axios.create({
    baseURL:'http://52.91.119.116:8080/'
});

export const axiosPrivate = axios.create({
    baseURL: 'http://52.91.119.116:8080/',
    headers: {'Content-Type': 'application/json'},
    withCredentials: false
})

export default api;
