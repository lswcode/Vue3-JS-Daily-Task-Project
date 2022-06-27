import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/normalize.css"; // 初始化css
import "@/styles/global.css";

createApp(App).use(store).use(router).mount("#app");
