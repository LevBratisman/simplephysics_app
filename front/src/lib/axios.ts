import axios from 'axios';

export const apiUrl = `http://localhost:8000`;

axios.defaults.withCredentials = true;

// axios.interceptors.request.use(
//     function (config) {
//         const token = localStorage.getItem('token');
//         if (token) {
//             if (config && config.headers) {
//                 config.headers.Authorization = `Bearer ${token}`;
//             }
//         }
//         return config;
//     },
//     function (err) {
//         return Promise.reject(err);
//     }
// );

export default axios;
