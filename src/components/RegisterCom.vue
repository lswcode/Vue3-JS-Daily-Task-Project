<template>
  <div class="login-com">
    <div class="title">
      <span>注册 Daily tsak</span>
      <span>注册异常请咨询管理员</span>
    </div>
    <el-form :model="form" label-width="120px" :rules="rules" ref="ruleFormRef">
      <el-form-item label="昵称" prop="uname">
        <el-input v-model="form.uname" placeholder="请输入昵称" @keyup.enter="onRegister(ruleFormRef)" :loading-icon="Eleme" :loading="form.isLoading" />
      </el-form-item>
      <el-form-item label="账号" prop="account">
        <el-input v-model="form.account" placeholder="请输入账号" @keyup.enter="onRegister(ruleFormRef)" :loading-icon="Eleme" :loading="form.isLoading" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" show-password @keyup.enter="onRegister(ruleFormRef)" :loading-icon="Eleme" :loading="form.isLoading" />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="onRegister(ruleFormRef)" :loading-icon="Eleme" :loading="form.isLoading">注册</el-button>
    <div class="tips" @click="toLogin">已经注册过账号？前往登录页面</div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { Eleme } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { registerApi } from "@/api/api.js";
export default defineComponent({
  name: "LoginCom",
  setup(props, context) {
    const ruleFormRef = ref();
    const form = reactive({
      uname: "",
      account: "",
      password: "",
      isLoading: false,
    });
    const rules = reactive({
      uname: [
        { required: true, message: "昵称不能为空！", trigger: "blur" },
        { min: 2, max: 8, message: "昵称限制为2~8！", trigger: "blur" },
      ],
      account: [
        { required: true, message: "账号不能为空！", trigger: "blur" },
        { min: 5, max: 10, message: "账号长度限制为5~10！", trigger: "blur" },
      ],
      password: [
        { required: true, message: "密码不能为空！", trigger: "blur" },
        { min: 5, max: 10, message: "密码长度限制为5~10！", trigger: "blur" },
      ],
    });
    const onRegister = async (formEl) => {
      if (!formEl) return;
      await formEl.validate(async (valid) => {
        if (valid) {
          form.isLoading = true;
          try {
            const { data } = await registerApi({
              uname: form.uname,
              account: form.account,
              password: form.password,
            });
            console.log(data);
            if (data.code == 10001) {
              ElMessage({
                message: data.msg,
                type: "success",
              });
              form.isLoading = false;
              toLogin();
            } else {
              ElMessage.warning({
                message: data.msg,
                type: "warning",
              });
              form.isLoading = false;
            }
          } catch (error) {
            ElMessage.warning({
              message: "注册失败",
              type: "warning",
            });
            form.isLoading = false;
          }
        } else {
          ElMessage.error("注册失败");
          form.isLoading = false;
        }
      });
    };
    const toLogin = () => {
      context.emit("changeCom", true); // 传递给父组件，切换组件为登录组件
    };

    return { ruleFormRef, form, rules, onRegister, toLogin, Eleme };
  },
});
</script>

<style lang="less" scoped>
.login-com {
  width: 320px;
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
    color: #86909c;
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
