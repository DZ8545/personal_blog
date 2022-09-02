import axios from "axios";
import { ref } from "vue";
// 全局的axios实例
//
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "/admin/api",
  //baseURL: "http://localhost:3000/admin/api",
  timeout: 8000,
});
// 是否正在加载
export const isLoading = ref(false);
instance.interceptors.request.use(
  (config) => {
    //成功发送请求
    isLoading.value = true;
    return config;
  },
  (err) => {
    // 发送请求出现问题
    isLoading.value = true;
    return err;
  }
);
instance.interceptors.response.use(
  (data) => {
    // 响应请求成功
    isLoading.value = false;
    return data;
  },
  (err) => {
    // 响应请求失败
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
    return err;
  }
);
export default instance;
