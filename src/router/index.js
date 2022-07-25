import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index.js";

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
  const token = store.state.token;
  // 校验非登录页面的登录状态
  if (to.path == "/layout") {
    console.log(token);
    if (token) {
      // 有可能会遇到在本地存储中随意伪造了一个token，也能通过这里的验证
      // 所以还需要在请求拦截器中添加一个token验证，只有请求响应返回401，表示token无效，则清除token返回登录页
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
