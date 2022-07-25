<template>
  <div class="app">
    <TopNavigationVue class="nav" />
    <!--缓存用户页面状态，页面跳转后，依旧保持之前的页面状态-->
    <router-view v-slot="{ Component }">
      <keep-alive include="Layout">
        <component :is="Component" class="page" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TopNavigationVue from "./components/TopNavigationCom.vue";

export default defineComponent({
  components: { TopNavigationVue },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.page {
  padding-top: 60px;
}
</style>
