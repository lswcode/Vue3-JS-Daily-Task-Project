import { createRouter, createWebHistory } from "vue-router";

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
    next();
  }
});

export default router;
