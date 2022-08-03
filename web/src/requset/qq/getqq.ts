import axios from "axios";
const instance = axios.create({
  baseURL: "https://tenapi.cn/qqname", //https://ptlogin2.qq.com/getface?appid=1006102&imgtype=3&uin=2119921883
  timeout: 8000,
});
export default instance;
