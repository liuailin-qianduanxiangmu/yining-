<template>
  <div id="container2" style="text-align:center;width: 100%; height: 100%;margin:0 auto;padding-top:0px;"></div>
</template>
<script>
import * as echarts from 'echarts'
import axios from "axios";
export default {
  mounted(){
    this.request();
  },
  methods: {
    request(){
      // 获取数据
      axios.get('http://49.234.135.187:9005/monitor/findEle?equip_id=1').then(response => {
        const ele = response.data.data;
        const currents = ele[0];
        const voltages = ele[1];
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('container2'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          legend: {
            data: ['电压', '电流']
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          xAxis: [
            {
              type: 'category',
              data: ['0：00', '1：00','2：00', '3：00','4：00', '5：00','6：00', '7：00','8：00', '9：00', '10：00','11：00','12：00','13：00','14：00', '15：00','16：00', '17：00','18：00', '19：00', '20：00','21：00', '22：00','23：00'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '电压',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} V'
              }
            },
            {
              type: 'value',
              name: '电流',
              min: 0,
              max: 10,
              interval: 2,
              axisLabel: {
                formatter: '{value} A'
              }
            }
          ],
          series: [
            {
              name: '电压',
              type: 'line',
              itemStyle: {

                normal: {
                  color: "#ffb630",
                  lineStyle: {
                    color: "#496a23"
                  }
                }
              },
              data: [voltages[0], voltages[1], voltages[2],  voltages[3], voltages[4], voltages[5], voltages[6],
                voltages[7], voltages[8], voltages[9],  voltages[10], voltages[11], voltages[12], voltages[13], voltages[14],
                voltages[15], voltages[16], voltages[17],  voltages[18], voltages[19], voltages[20], voltages[21],
                voltages[22], voltages[23]]
            },
            {
              name: '电流',
              type: 'line',
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: "#7a2d59",
                  lineStyle: {
                    color: "#dbc804"
                  }
                }
              },
              data: [currents[0], currents[1], currents[2],  currents[3], currents[4], currents[5], currents[6],
                currents[7], currents[8], currents[9],  currents[10], currents[11], currents[12], currents[13], currents[14],
                currents[15], currents[16], currents[17],  currents[18], currents[19], currents[20], currents[21],
                currents[22], currents[23]]
            }
          ]
        });
      })
    }
  }
}
</script>
<style>
</style>
