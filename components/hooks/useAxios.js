import axios from "axios";
import { API_URL } from "@/utils";

/**
 * A custom hook that creates and configures an instance of Axios with default settings,
 * including request and response interceptors.
 *
 * This hook sets up an Axios instance with a base URL and default headers,
 * and allows for global request and response handling.
 *
 * @returns {AxiosInstance} An instance of Axios with pre-configured settings and interceptors.
 *
 * @example
 *
 * import React, { useEffect } from 'react';
 * import { useAxios } from './path/to/useAxios';
 *
 * const MyComponent = () => {
 *   const axiosInstance = useAxios();
 *
 *   useEffect(() => {
 *     const fetchData = async () => {
 *       try {
 *         const response = await axiosInstance.get('/endpoint');
 *         console.log(response.data);
 *       } catch (error) {
 *         console.error('Error fetching data:', error);
 *       }
 *     };
 *
 *     fetchData();
 *   }, [axiosInstance]);
 *
 *   return <div>Check console for API response.</div>;
 * };
 *
 * export default MyComponent;
 */
const useAxios = () => {
  // Create an instance of axios with default configuration
  let axiosInstance = axios.create({
    baseURL: API_URL, // Base URL for all requests
    headers: {
      "Content-Type": "application/json", // Default content type for requests
    },
  });

  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      // You can add auth tokens or other request modifications here
      return config;
    },
    (error) => {
      // Handle request errors
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
      // Log API errors
      console.error("API Error:", error);
      return Promise.reject(error);
    }
  );

  return axiosInstance; // Return the configured Axios instance
};

export { useAxios };
