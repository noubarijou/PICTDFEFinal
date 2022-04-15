import axios from "axios";

const api = axios.create({
    baseURL:'http://18.204.201.69:8080/'
});

export default api;