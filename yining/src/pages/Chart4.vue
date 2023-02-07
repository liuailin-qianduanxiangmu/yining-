<template>
    <div id="container4" style="text-align:center;width: 70%; height: 70%;margin:0 auto;margin-top:8px;display:inline-block;"></div>
</template>

<script setup>
// 示例地址：https://g2plot.antv.vision/zh/examples/pie/basic#basic 组件库较大，尽量按需引入
import axios from "axios"; 
import { onMounted } from '@vue/runtime-core';
import { Chart } from '@antv/g2';
onMounted(() => {
    axios.get('http://183.201.200.28:9002///monitor/findPie?equip_id=1').then(response => {
                       console.log('扇形图电气数据');
                    console.log(JSON.stringify(response.data));
                     const pie = response.data.data;    
const data = [
  { type: '已用电能', value:pie[1] },
  { type: '剩余电能', value: pie[2]-pie[1] },
]; 
const chart = new Chart({
  container: 'container4',
  autoFit: true,
}); 
chart.data(data); 
chart.coordinate('theta', {
  radius: 0.9,
  innerRadius: 0.6,
});
const interval = chart
  .interval()
  .adjust('stack')
  .position('value')
  .color('type',  ['#bb496b','#37419a'])
chart.render();
})
}) 
// const data = [
//   { item: '已用电能', count: 40, percent: 0.4 },
//   { item: '剩余电能', count: 21, percent: 0.21 },
// ];

// const chart = new Chart({
//   container: 'container4',
//   autoFit: true,
//   height: 500,
// });

// chart.coordinate('theta', {
//   radius: 0.9,
//   innerRadius: 0.6,
// });

// chart.data(data);

// chart.scale('percent', {
//   formatter: val => {
//     val = val * 100 + '%';
//     return val;
//   },
// });

// chart.tooltip(false);

// //  这里记得要const一下 不然之后的方法中使用interval时会显示undefined
// const interval = chart
//   .interval()
//   .adjust('stack')
//   .position('percent')
//   .color('item',['#f6bd16','#e86452'])
//   .style({
//     fillOpacity: 1,
//   })
//  //  定义active状态下的样式
//   .state({

//   });

// chart.render();
</script>

<style>
</style>