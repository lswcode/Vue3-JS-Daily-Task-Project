import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/styles/normalize.css"; // 初始化css
import "@/styles/global.css";
import "@/assets/font/iconfont.css"; // 引入 iconfont

createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
