<template>
  <div class="task-com">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span class="iconfont icon-wenzhangbianji" style="fontsize: 17px">
            创建任务</span>
        </div>
      </template>
      <div class="iconfont icon-icon-"></div>
    </el-card>

    <el-card class="box-card" :style="state.checked ? 'border:1px solid #409eff;color:#409eff' : ''" shadow="hover">
      <template #header>
        <div class="card-header">
          <span style="fontsize: 17px">锻炼</span>
          <el-checkbox v-model="state.checked" :label="state.checked ? '已完成' : '未完成'" size="large" border />
        </div>
      </template>
      <div>描述内容</div>
    </el-card>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "TaskCom",
  setup() {
    const state = reactive({
      checked: false,
    });

    return { state };
  },
});
</script>

<style lang="less" scoped>
.task-com {
  display: flex;
  flex-wrap: wrap;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    margin-top: 17px;
    margin-left: 17px;
    width: 200px;
    height: 210px;
  }
  .icon-icon- {
    margin-top: 17px;
    font-size: 40px;
    text-align: center;
  }
}
</style>
