import axios from "axios";

const api = axios.create({
    baseURL:'http://3.87.221.127:8080'
});

export default api;