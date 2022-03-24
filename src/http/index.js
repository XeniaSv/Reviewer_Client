import axios from 'axios';

export const API_URL = process.env.API_URL || `http://localhost:8800/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
   config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`;
   return config;
});

// $api.interceptors.response.use((config) =>{
//     return config
// }, async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && error.config && !error.config._isRetry){
//         originalRequest._isRetry = true;
//         try {
//             const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
//             localStorage.setItem('token', response.data.accessToken);
//             return $api.request(originalRequest);
//         } catch (e) {
//             console.log('NOT LOG IN');
//         }
//     }
//     throw error;
// })

export default $api;