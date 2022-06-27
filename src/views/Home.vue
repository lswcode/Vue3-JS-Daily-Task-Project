<template>
  <div class="home">
    <div class="middle">
      <div>
        <div>Daily.rask</div>
        <div></div>
        <span>每日打卡系统</span>
      </div>
      <span>Never give up</span>
      <div>天行健 君子以自强不息</div>
      <div>
        <el-button type="primary" class="start" @click="startFun">
          开始使用</el-button
        >
        <el-button type="default" class="about" @click="aboutFun">
          关于</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getItem } from "@/utils/storage";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter();
    const startFun = () => {
      if (getItem("token")) {
        // token存在则表示已经登录，直接跳转到任务页
        router.push("/task");
      } else {
        router.push("/login"); // 没有登录则跳转到login页面
      }
    };
    const aboutFun = () => {
      router.push("/about");
    };
    return { startFun, aboutFun };
  },
});
</script>

<style lang="less" scoped>
.home {
  display: flex;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  background-image: url("~@/assets/img/home_bg.png"); // 在css中使用@要加上~
  background-repeat: no-repeat;
  background-size: cover;

  .middle {
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    min-width: 1000px;
    margin: 0 auto;

    div:nth-child(1) {
      display: flex;
      align-items: center;
      margin-bottom: -11px;

      div:first-child {
        font-size: 27px;
        font-weight: 800;
        margin-bottom: 5px;
      }

      div:nth-child(2) {
        margin-left: 10px;
        margin-right: 10px;
        height: 25px;
        border-right: 1px solid #656f94;
      }

      span:nth-child(3) {
        font-size: 16px;
        color: #656f94;
      }
    }

    span:nth-child(2) {
      font-family: Nunito Sans;
      font-weight: 700;
      font-size: 48px;
      line-height: 72px;
    }

    div:nth-child(3) {
      font-size: 24px;
      line-height: 32px;
      color: #86909c;
      margin-bottom: 20px;
    }
    .start {
      background-color: #165dff;
      height: 50px;
      width: 170px;
      font-size: 18px;
      color: #fff;
      border-radius: 4px;
      margin-right: 20px;
    }
    .about {
      height: 50px;
      width: 100px;
      color: rgb(22, 93, 255);
      font-size: 18px;
      border-radius: 4px;
      margin-right: 20px;
    }
  }
}
</style>
