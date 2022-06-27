<template>
  <NavigationVue class="nav" />
  <!--缓存用户页面状态，页面跳转后，依旧保持之前的页面状态-->
  <router-view v-slot="{ Component }">
    <keep-alive include="Home">
      <component :is="Component" class="page" />
    </keep-alive>
  </router-view>
</template>

<script>
import { defineComponent } from "vue";
import NavigationVue from "./components/NavigationCom.vue";

export default defineComponent({
  components: { NavigationVue },
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
