import store from "@/store";
import axios from "axios";
import axiosRetry from "axios-retry";
// axios.create返回值一个新的axios的实例
const request = axios.create({
  baseURL: "http://111.229.247.11:3000",
  timeout: 3000,
  withCredentials: true, // 跨域携带cookie
});
axiosRetry(request, { retries: 3 });
// 每一次请求都会触发的函数如何去设置（请求拦截器）
// 如何设置请求拦截器？
request.interceptors.request.use((config) => {
  // config是你每一次发起请求的详细配置（请求的地址、请求的路径、请求的参数...）
  // 在这个位置可以对请求配置作更改
  const cookie = store.state.auth.cookie;
  if (cookie) {
    if (config.method === "post") {
      config.data || (config.data = {});
      config.data.cookie = cookie;
    }
    if (config.method === "get") {
      config.params || (config.params = {});
      config.params.cookie = cookie;
    }
  }
  return config;
});

window.request = request;

export default request;
