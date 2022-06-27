<template>
  <div class="navigation">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-menu-item index="2">Processing Center</el-menu-item>
      <el-menu-item index="3">Orders</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  setup() {
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return { handleSelect };
  },
});
</script>

<style lang="less" scoped>
.navigation {
  height: 200px;
}
</style>
