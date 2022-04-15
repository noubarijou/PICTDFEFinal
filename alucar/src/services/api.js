import axios from "axios";

const api = axios.create({
    baseURL:'http://35.174.154.128:8080/'
});

export default api;