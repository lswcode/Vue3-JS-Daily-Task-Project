<template>
  <div class="layout">
    <LeftNavigationComVue class="left-nav" />
    <div class="right">
      <router-view class="content" v-slot="{ Component }">
        <!-- 保持数据状态不自动更新,include里写要保持状态的组件名称 -->
        <keep-alive include="Article,Comment,UserAdmin">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LeftNavigationComVue from "../components/LeftNavigationCom.vue";

export default defineComponent({
  name: "Layout",
  components: { LeftNavigationComVue },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.layout {
  min-width: 1000px;
  .left-nav {
    width: 180px;
  }

  .right {
    margin-top: 10px;
    margin-left: 195px;
  }
}
</style>
