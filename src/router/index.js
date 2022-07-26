import { createRouter, createWebHistory } from "vue-router";
import { getCookie } from "../utils/storage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/layout",
    name: "Layout",
    component: () => import("@/views/Layout.vue"),
    meta: {
      title: "主页",
    },
    children: [
      {
        path: "", // 默认子路由
        name: "Task",
        component: () => import("@/components/TaskCom.vue"),
      },
      {
        path: "analyse",
        name: "Analyse",
        component: () => import("@/components/AnalyseCom.vue"),
      },
    ],
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title; // 自动修改页面标题
  }
  // 校验非登录页面的登录状态
  if (to.path == "/layout") {
    if (getCookie("GIN_SESSIONID")) {
      // 有可能会遇到在本地存储中随意伪造了一个cookie，也能通过这里的验证
      // 所以还需要在请求拦截器中添加一个cookie验证，当任意请求被服务器验证cookie无效后，前端清除cookie并跳转登录页
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
