import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    if (localStorage.getItem("user") !== 'null')
        config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`;
    return config;
});

$api.interceptors.response.use((config) => {
   return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const res = await $api.get("/auth/refresh", {withCredentials: true});
            localStorage.setItem("user", JSON.stringify(res.data));
            console.log(originalRequest._isRetry);
            console.log(res.data.accessToken);
            originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
            return $api.request(originalRequest);
        } catch (e) {
            console.log(e.message);
        }
    }
    throw error;
});

export default $api;