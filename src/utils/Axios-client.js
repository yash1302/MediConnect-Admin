import axios from "axios";
import { API_URL } from "./Api.config";

// Create Axios instance
const axiosclient = axios.create({
  baseURL: API_URL,
});

axiosclient.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

axiosclient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      console.error("Unauthorized! Please log in again.");
      localStorage.clear();
      window.location.href = "/";
      window.location.reload()
      return Promise.reject(error);
    } else {
      console.error(error,"errererererer");
      return Promise.reject(error);
    }
  }
);

export default axiosclient;
