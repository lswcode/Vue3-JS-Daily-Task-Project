import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementPlus from "element-plus";
import mitt from "mitt";
import "element-plus/dist/index.css"; // 打包时注释掉
import "@/styles/normalize.css"; // 初始化css
import "@/styles/global.css";
import "@/assets/font/iconfont.css"; // 引入 iconfont

const app = createApp(App);
app.config.globalProperties.$mitt = mitt();
app.use(ElementPlus).use(store).use(router).mount("#app");
// vue3挂载到全局
