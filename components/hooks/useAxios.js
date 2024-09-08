import axios from 'axios';
import { API_URL } from '@/utils';

const useAxios = () => {
    // Create an instance of axios with default configuration
    let axiosInstance = axios.create({
        baseURL: API_URL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    // Request interceptor
    axiosInstance.interceptors.request.use(
        (config) => {
            // You can add auth tokens or other request modifications here
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Response interceptor
    axiosInstance.interceptors.response.use(
        (response) => {
            // Handle the response data or perform global transformations
            return response;
        },
        (error) => {
            console.error('API Error:', error);
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export { useAxios };
