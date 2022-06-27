<template>
  <div class="login">
    <div class="left">
      <span>Vue3 + Element-Plus </span>
      <span>Golang + Beego + Mysql</span>
      <span>每日打卡系统，每天进步一点点 </span>
      <img src="@/assets/img/login_banner.png" alt="logo" />
    </div>
    <div class="right">
      <LoginComVue v-if="state.isShow" @changeCom="changeCom" />
      <RegisterComVue v-else @changeCom="changeCom" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import LoginComVue from "../components/LoginCom.vue";
import RegisterComVue from "../components/RegisterCom.vue";

export default defineComponent({
  name: "Login",
  components: { LoginComVue, RegisterComVue },
  setup() {
    const state = reactive({
      isShow: true,
    });
    const changeCom = (value) => {
      state.isShow = value;
    };
    return {
      state,
      changeCom,
    };
  },
});
</script>

<style lang="less" scoped>
.login {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);

  span:nth-child(-n + 2) {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #f7f8fa;
  }

  span:nth-child(3) {
    margin-top: 8px;
    font-size: 16px;
    line-height: 22px;
    color: #86909c;
  }

  img {
    margin-top: 30px;
    width: 220px;
  }
}

.right {
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
