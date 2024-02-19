import axios, { AxiosInstance } from "axios";
import { API_URL } from "../../src/services/urlApi";

const axiosService = (): AxiosInstance => {
  const token = process.env.NEXT_PUBLIC_TOKEN_KEY;

  if (!token) {
    window.location.replace("/500");
    throw new Error("Token not found");
  }

  const axiosOptions = axios.create({
    baseURL: API_URL,
    timeout: 3 * 1000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return axiosOptions;
};

export default axiosService;
