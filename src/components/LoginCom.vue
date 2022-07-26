<template>
  <div class="login-com">
    <div class="title">
      <span>登录 Daily tsak</span>
      <span>登录异常请咨询管理员</span>
    </div>
    <el-form :model="form" label-width="120px" :rules="rules" ref="ruleFormRef">
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account" placeholder="请输入账号" @keyup.enter="onLogin(ruleFormRef)" :loading-icon="Eleme" :loading="form.isLoading" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password placeholder="请输入密码" @keyup.enter="onLogin(ruleFormRef)" :loading-icon="Eleme" :loading="form.isLoading" />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="onLogin(ruleFormRef)" :loading-icon="Eleme" :loading="form.isLoading">登录</el-button>
    <div class="tips" @click="toRegister">还没有注册账号？新用户注册</div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { Eleme } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { loginApi } from "@/api/api.js";
export default defineComponent({
  name: "LoginCom",
  setup(props, context) {
    //如果需要使用context，必须把props也写上，不然只有一个参数时会被认为是props
    const ruleFormRef = ref();
    const form = reactive({
      account: "",
      password: "",
      isLoading: false,
    });
    const rules = reactive({
      account: [
        { required: true, message: "账号不能为空！", trigger: "blur" },
        { min: 5, max: 10, message: "账号长度限制为5~10！", trigger: "blur" },
      ],
      password: [
        { required: true, message: "密码不能为空！", trigger: "blur" },
        { min: 5, max: 10, message: "密码长度限制为5~10！", trigger: "blur" },
      ],
    });
    const router = useRouter();
    const { proxy } = getCurrentInstance(); // proxy 等同于Vue2的this
    const onLogin = async (formEl) => {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          form.isLoading = true;
          try {
            const { data } = await loginApi({
              account: form.account,
              password: form.password,
            });
            if (data.code == 200) {
              ElMessage({
                message: data.msg,
                type: "success",
              });
              proxy.$mitt.emit("loginEvent", true);
              form.isLoading = false;
              router.push("/layout");
            } else {
              ElMessage.warning({
                message: data.msg,
                type: "warning",
              });
              form.isLoading = false;
            }
          } catch (error) {
            ElMessage.warning({
              message: "登录失败",
              type: "warning",
            });
            form.isLoading = false;
          }
        } else {
          ElMessage.error("登录失败");
          form.isLoading = false;
        }
      });
    };
    const toRegister = () => {
      context.emit("changeCom", false); // 传递给父组件，切换组件为注册组件
    };

    return { ruleFormRef, form, rules, onLogin, toRegister, Eleme };
  },
});
</script>

<style lang="less" scoped>
.login-com {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 320px;
  .title {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-align: center;
    span:nth-child(1) {
      font-size: 24px;
      font-weight: 500;
      color: #1d2129;
      line-height: 32px;
    }

    span:nth-child(2) {
      font-size: 16px;
      line-height: 24px;
      color: #86909c;
    }
    .el-form-item {
      margin-bottom: 20px !important;
    }
  }
  .tips {
    margin-top: 10px;
    color: #a8abb2;
    font-size: 14px;
    margin-left: 48px;
  }
  .tips:hover {
    cursor: pointer;
    color: #409eff;
    text-decoration: underline;
  }
  .el-form-item {
    margin-bottom: 25px !important;
  }
  .el-button {
    height: 40px;
    margin-left: 48px;
    text-align: center;
    font-size: 17px;
  }
}

:deep(.el-form-item__label) {
  width: unset !important;
}
</style>
