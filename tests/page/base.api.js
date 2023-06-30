import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const BaseAPI = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  validateStatus: function () {
    return true;
  },
});

export const BaseAPIToken = (token) =>
  axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Cookie: "token=" + token,
    },
    validateStatus: function () {
      return true;
    },
  });

// export default BaseAPI;
