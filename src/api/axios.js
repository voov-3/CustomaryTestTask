import axios from 'axios';


const instanceAxios = axios.create({
    baseURL: 'https://dev-1.dev.customary.io/api/v2'
})


instanceAxios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config;
})

export default instanceAxios;