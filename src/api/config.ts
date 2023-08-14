import axios from "axios";

export const axiosPublicInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
});
