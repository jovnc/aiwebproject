import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://127.0.0.1:5000", // Flask backend URL
});

// Intercept requests to add JWT token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get JWT token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
