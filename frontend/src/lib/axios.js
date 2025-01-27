import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://fullstack-chatapp-9f79.vercel.app/api" : "/api",
  withCredentials: true,
});