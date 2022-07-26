<template>
  <div class="top-navigation">
    <router-link :to="{ name: 'Home' }" class="left">
      <img src="@/assets/img/navigation_icon.png" alt="图标" />
      <span>Daily.task</span>
    </router-link>

    <div class="right">
      <div v-for="item in navgationArr" @click="$router.push(item.path)" :key="item.id" :class="item.icon" @mouseover="mouseoverFun">
        {{ item.name }}
      </div>
      <div v-if="state.userName" class="user-info">
        <div>
          <el-dropdown>
            <div class="el-dropdown-link">
              <img class="headImg" src="@/assets/img/default.png">
              <span>{{state.userName}}</span>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="confirm">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  onBeforeMount,
  getCurrentInstance,
} from "vue";
import { getCookie, removeCookie } from "../utils/storage";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { getUserInfo } from "../api/api.js";

export default defineComponent({
  name: "TopNavigationCom",
  setup() {
    const router = useRouter();
    const state = reactive({
      userName: "",
    });
    const navgationArr = reactive([
      {
        id: 0,
        name: " 登录",
        path: "/login",
        icon: "iconfont icon-denglu",
      },
      {
        id: 1,
        name: " 主页",
        path: "/",
        icon: "iconfont icon-zhuye",
      },
      {
        id: 2,
        name: " 关于",
        path: "/about",
        icon: "iconfont icon-iconset0103",
      },
    ]);
    const getUserInfoFun = async () => {
      if (getCookie("GIN_SESSIONID")) {
        try {
          const { data } = await getUserInfo();
          if (data.code == 200) {
            if (navgationArr[0].id == 0) {
              navgationArr.shift();
            }
            state.userName = data.userName;
          } else {
            ElMessage.warning({
              message: "获取用户数据失败",
              type: "warning",
            });
            state.userName = "";
          }
        } catch (error) {
          ElMessage.warning({
            message: "获取用户数据失败",
            type: "warning",
          });
          state.userName = "";
          console.warn("catch报错");
        }
      } else {
        if (navgationArr[0].id !== 0) {
          navgationArr.unshift({
            id: 0,
            name: " 登录",
            path: "/login",
            icon: "iconfont icon-denglu",
          });
        }
        state.userName = "";
      }
    };
    const confirm = () => {
      if (window.confirm("您确定要退出登录么？")) {
        // window.confirm()，如果用户点击确定，则该函数会返回true
        onLogout();
      }
    };
    onBeforeMount(() => {
      getUserInfoFun();
    });
    const onLogout = () => {
      // 把用户的登录状态清除
      removeCookie("GIN_SESSIONID");
      getUserInfoFun();
      ElMessage.success({
        message: "退出成功",
        type: "success",
      });
      router.push({
        name: "Login",
      });
    };

    const { proxy } = getCurrentInstance(); // proxy 等同于Vue2的this
    proxy.$mitt.on("loginEvent", (data) => {
      console.log("proxy.$mitt.on", data);
      getUserInfoFun();
    });

    return { navgationArr, state, confirm };
  },
});
</script>

<style lang="less" scoped>
.top-navigation {
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
    img {
      width: 50px;
      height: 50px;
    }
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

    .iconfont {
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
.user-info {
  margin-left: 17px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #1e80ff;
  font-size: 17px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-link {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.header /deep/ .el-dropdown {
  margin-right: 147px !important;
}
</style>
