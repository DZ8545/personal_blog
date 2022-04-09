import axios from "axios";
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "/admin/api",
  //baseURL: "http://localhost:3000/admin/api",
  timeout: 5000,
});
export default instance;
