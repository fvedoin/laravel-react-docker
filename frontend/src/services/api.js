import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_BASEURL.replace('/backend','')}/api`
});

export default api;