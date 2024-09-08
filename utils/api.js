import axios from "axios";
import { API_URL } from "@/utils";

// Create an Axios instance with default configuration
export const api = axios.create({
  baseURL: API_URL, // Base URL for the API
  headers: {
    "Content-Type": "application/json", // Default content type
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Modify requests before they are sent
    // Example: Add an authorization token
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Handle request errors globally
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    // Handle the response data globally
    return response;
  },
  (error) => {
    // Handle response errors globally
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
