import axios from "axios";

export const axiosPublicInstance = axios.create({
  baseURL: process.env.AXIOS_BASE_URL,
});
