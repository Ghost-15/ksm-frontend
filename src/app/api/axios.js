import axios from 'axios';
// const BASE_URL = process.env.API_URL;
const BASE_URL = "https://ksm-spring.onrender.com";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});