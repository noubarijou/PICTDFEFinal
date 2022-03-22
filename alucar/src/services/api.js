import axios from "axios";

const api = axios.create({
    baseURL:'http://184.72.115.9:8080'
});

export default api;