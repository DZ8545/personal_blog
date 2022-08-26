import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 5000,
});

// 在配置里参数里设置Authorization 将 token 赋值给它
instance.interceptors.request.use(
  (config: any) => {
    // 设置token start
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken !== "") {
      config.headers.common["Authorization"] = accessToken;
    }
    // 设置token end
    return config;
  },
  (error) => Promise.reject(error)
);

// 在请求响应的地方回设 token
instance.interceptors.response.use(
  (response: any) => {
    // 回设置token start
    const accessToken = response.headers["authorization"];
    if (accessToken && accessToken !== "") {
      localStorage.setItem("accessToken", accessToken);
    }
    // 回设置token end
    return response;
  },

  // 请求异常信息提示处理
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = `错误请求`;
          break;
        case 401:
          error.message = `未授权，请重新登录`;
          break;
        case 403:
          error.message = `拒绝访问`;
          break;
        case 404:
          error.message = `请求错误,未找到该资源`;
          break;
        case 405:
          error.message = `请求方法未允许`;
          break;
        case 408:
          error.message = `请求超时`;
          break;
        case 500:
          error.message = `服务器端出错`;
          break;
        case 501:
          error.message = `网络未实现`;
          break;
        case 502:
          error.message = `网络错误`;
          break;
        case 503:
          error.message = `服务不可用`;
          break;
        case 504:
          error.message = `网络超时`;
          break;
        case 505:
          error.message = `http版本不支持该请求`;
          break;
        default:
          error.message = `未知错误${error.response.status}`;
      }
    } else {
      error.message = "连接到服务器失败";
    }
    return Promise.reject(error);
  }
);

export default instance;
