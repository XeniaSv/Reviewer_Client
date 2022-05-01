import axios from 'axios';

export const API_URL = 'https://morning-badlands-79922.herokuapp.com/api';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    if (localStorage.getItem("user") !== 'null')
        config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`;
    return config;
});

export default $api;