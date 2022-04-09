import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "/admin/api",
  timeout: 5000,
});
export default instance;
