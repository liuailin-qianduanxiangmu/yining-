<template>
  <div id="container3" style="text-align:center;width:70%; height: 70%;margin:0 auto;padding-top:18px;display:inline-block;"></div>
</template>

<script setup>
// 示例地址：https://g2plot.antv.vision/zh/examples/pie/basic#basic 组件库较大，尽量按需引入
import axios from "axios";
import { onMounted } from '@vue/runtime-core';
import { Chart } from '@antv/g2';
onMounted(() => {
  //  对接
  axios.get('http://49.234.135.187:9005/monitor/findPie?equip_id=1').then(response => {
    console.log('扇形图电气数据');
    console.log(JSON.stringify(response.data));
    const pie = response.data.data;
    // 画图
    const data = [
      { type: '平均功率', value:pie[0] },
      { type: '额定功率', value: 350 },
    ];
    const chart = new Chart({
      container: 'container3',
      autoFit: true,
    });
    chart.data(data);
    chart.coordinate('theta');
    const interval = chart
        .interval()
        .adjust('stack')
        .position('value')
        .color('type', ['#99CC33', '#6666cc'])
//   .label('type', (val) => {
//     return {
//       offset: -30,
//       content: (obj) => {
//         return obj.type + '\n' + obj.value;
//       },
//     };
//   });
    chart.render();
  })
})
</script>

<style>
</style>