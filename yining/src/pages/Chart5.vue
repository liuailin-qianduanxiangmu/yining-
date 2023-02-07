<template>
  <div id="container5" style="text-align:center;width: 70%; height: 70%;margin:0 auto;padding-top:15px;display:inline-block;"></div>
</template>

<script setup>
// 示例地址：https://g2plot.antv.vision/zh/examples/pie/basic#basic 组件库较大，尽量按需引入
import axios from "axios";
import { onMounted } from '@vue/runtime-core';
import { Chart } from '@antv/g2';
import { Pie } from '@antv/g2plot';
onMounted(() => {
  axios.get('http://49.234.135.187:9005/monitor/findPie?equip_id=1').then(response => {
    console.log('扇形图电气数据');
    console.log(JSON.stringify(response.data));
    const pie = response.data.data;
    const data = [
      { type: '已用额度', value:pie[2]-pie[1] },
      { type: '剩余额度', value:pie[1] },
    ];
    const piePlot = new Pie('container5', {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.9,
      label: {
        type: 'inner',
        offset: '-30%',

        style: {
          fontSize: 14,
          textAlign: 'center',
        },
      },
      interactions: [{ type: 'element-active' }],
    });

    piePlot.render();
  })
})

</script>

<style>
</style>