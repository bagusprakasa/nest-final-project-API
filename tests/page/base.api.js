import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const BaseAPI = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Cookie: "token=fdae40c9610f149",
  },
  validateStatus: function () {
    return true;
  },
});

export default BaseAPI;
