import axios from "axios";

const apiClient = axios.create({
  // Use VITE_ prefix for Vite environment variables
  baseURL: import.meta.env.baseURL || "http://168.231.116.54:8000", 
  withCredentials: true,
});

export default apiClient;