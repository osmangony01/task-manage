import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://rg-task-server.vercel.app',

});

export default axiosInstance;