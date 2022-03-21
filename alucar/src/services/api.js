import axios from "axios";

const api = axios.create({
    baseURL:'http://44.201.189.53:8080'
});

export default api;