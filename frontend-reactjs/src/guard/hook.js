import axios from "axios";

export const useAxios = () => {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return axiosInstance;
};
