import axios from "axios";
import store from "@/store/index";
import router from "@/router";
const request = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "https://task.lswweb.xyz/dailyTaskApi" : "api",
  timeout: 8000, // 请求超时时间
});

request.interceptors.request.use((req) => {
  const token = store.state.token;
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

request.interceptors.response.use(
  (res) => {
    // 在2xx范围内的任何状态代码都会触发此函数，这里主要用于处理响应数据
    // res就是接口返回的内容
    // const { data } = res;
    // if (data.code !== 1) {
    //   console.warn(data.msg);
    // }
    return res; // 这里可以设置返回的内容，可以只返回res.data
  },
  (err) => {
    // 任何超出2xx范围的状态码都会触发此函数，这里主要用于处理响应错误
    // 防止随便伪造一个token进入非登录页面，虽然无法发起请求，但是可以进入页面，这不够安全
    if (err.response.status && err.response.status == 401) {
      router.push("/");
      store.commit("clearToken");
    }
  }
);

export default request;
