import axios from "axios";

axios.defaults.baseURL = "https://api-destinations-941abf2d2aea.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();