<template>
  <div class="left-navigation">
    <el-menu default-active="$route.path" class="el-menu-vertical-demo" router>
      <el-menu-item index="/layout">
        <span class="iconfont icon-24gl-calendar"> 任务页</span>
      </el-menu-item>
      <el-menu-item index="/layout/analyse">
        <span class="iconfont icon-24gl-calendar"> 分析页</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span class="iconfont icon-24gl-calendar"> 其它页</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span class="iconfont icon-24gl-calendar"> 其它</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeftNavigationCom",
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.left-navigation {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  .el-menu {
    height: 100%;
  }
  .el-menu-item {
    font-size: 16px;
  }
}
</style>
