<template>
    <div id="container5" style="text-align:center;width: 70%; height: 70%;margin:0 auto;padding-top:15px;display:inline-block;"></div>
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
  { type: '已用额度', value:pie[2]-pie[1] },
  { type: '剩余额度', value:pie[1] },
];
const chart = new Chart({
  container: 'container5',
  autoFit: true,
}); 
chart.data(data);
chart.coordinate('theta');
const interval = chart
  .interval()
  .adjust('stack')
  .position('value')
  .color('type',  ['#0066cc','#FFCC33'])
chart.render();
})
})

</script>

<style>
</style>