import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
});

axiosClient.interceptors.request.use((config) => {
    // Sửa 'token' thành 'crs_token' cho đúng với Local Storage
    const token = localStorage.getItem('crs_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosClient;