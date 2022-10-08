import axios, {AxiosInstance} from 'axios';

const http: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 5000
});

http.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => {
        console.log(response)
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default http;