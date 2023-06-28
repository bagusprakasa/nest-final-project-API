import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const BaseAPI = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    Cookie: "token=493c44419d133d7",
  },
  validateStatus: function () {
    return true;
  },
});

export default BaseAPI;
