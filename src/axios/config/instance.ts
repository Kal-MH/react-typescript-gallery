import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "/api"
    : process.env.NEXT_PUBLIC_API_BASE_URL;

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
