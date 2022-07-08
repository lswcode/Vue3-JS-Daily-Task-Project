<template>
  <div class="analyse-com">
    <h1>分析页面</h1>
    <div id="main" style="height: 500px; width: 800px"></div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
// import { GridComponent } from "echarts/components";
// import { BarChart } from "echarts/charts";
// import { CanvasRenderer } from "echarts/renderers";
// import echarts from "echarts/core";
export default defineComponent({
  name: "AnalyseCom",
  setup() {
    // const echartInit = () => {
    //   echarts.use([GridComponent, BarChart, CanvasRenderer]);
    //   var chartDom = document.getElementById("main");
    //   var myChart = echarts.init(chartDom);
    //   var option;

    //   option = {
    //     xAxis: {
    //       type: "category",
    //       data: [
    //         "Mon",
    //         "Tue",
    //         "Wed",
    //         "Thu",
    //         "Fri",
    //         "Sat",
    //         "Sun",
    //         1,
    //         1,
    //         1,
    //         1,
    //         1,
    //         1,
    //       ],
    //     },
    //     yAxis: {
    //       type: "value",
    //     },
    //     series: [
    //       {
    //         data: [120, 200, 150, 80, 70, 110, 130],
    //         type: "bar",
    //         barGap: "20%",
    //         barCategoryGap: "40%",
    //         showBackground: true,
    //         backgroundStyle: {
    //           color: "rgba(180, 180, 180, 0.2)",
    //         },
    //         itemStyle: {
    //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //             { offset: 0, color: "#83bff6" },
    //             { offset: 0.5, color: "#188df0" },
    //             { offset: 1, color: "#188df0" },
    //           ]),
    //         },
    //         emphasis: {
    //           itemStyle: {
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //               { offset: 0, color: "#2378f7" },
    //               { offset: 0.7, color: "#2378f7" },
    //               { offset: 1, color: "#83bff6" },
    //             ]),
    //           },
    //         },
    //       },
    //     ],
    //   };
    //   option && myChart.setOption(option);
    // };
    onMounted(() => {
      // echartInit();
    });
    return {};
  },
});
</script>

<style lang="less" scoped></style>
