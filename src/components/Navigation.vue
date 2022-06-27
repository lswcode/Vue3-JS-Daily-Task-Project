<template>
  <div class="navigation">
    <router-link :to="{ name: 'Home' }" class="left">
      <img src="@/assets/img/navigation_icon.png" alt="图标" />
      <span>Daily.task</span>
    </router-link>

    <div class="right">
      <div v-for="item in navgationArr" @click="$router.push(item.path)" :key="item.id" :class="item.icon" @mouseover="mouseoverFun">
        {{ item.name }}
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Navigation",
  setup() {
    const navgationArr = reactive([
      {
        id: 0,
        name: " 主页",
        path: "/",
        icon: "iconfont icon-zhuye",
      },
      {
        id: 1,
        name: " 登录",
        path: "/login",
        icon: "iconfont icon-denglu",
      },
      {
        id: 2,
        name: " 关于",
        path: "/about",
        icon: "iconfont icon-iconset0103",
      },
    ]);

    return { navgationArr };
  },
});
</script>

<style lang="less" scoped>
.navigation {
  // 顶部导航栏固定定位
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: 1px solid rgba(229, 230, 235);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  min-height: 60px;
  max-height: 60px;
  .left {
    margin-left: 50px;
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 50px;
    height: 50px;
  }
  span {
    font-family: "Times New Roman", Georgia, Serif;
    margin-left: 5px;
    font-size: 20px;
    font-weight: 600;
  }

  .right {
    display: flex;
    margin-right: 100px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;

    div {
      width: 70px;
      margin-left: 10px;
      height: 40px;
      line-height: 40px;
    }
  }

  .iconfont {
    transition: background-color 0.5s;
  }

  .iconfont:hover {
    background-color: #ecf5ff;
    color: #409eff;
    cursor: pointer;
  }
}
</style>
