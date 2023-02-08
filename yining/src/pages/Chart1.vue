<template>
  <div id="container" style="text-align:center;width: 100%; height: 110%;margin:0 auto;padding-top:0px;"></div>
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

      var config2={
        method:'get',
        url:'http://49.234.135.187:9005/monitor/findData?equip_id=1',
        headers:{
          'token':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXN0ZW0iLCJzaGlyb1VzZXJJbmZvIjoie1wiY29udGFjdFwiOlwi5byg5LiJXCIsXCJjb250YWN0VGVsXCI6XCIxODMzMzM1NDYyMFwiLFwiZGF0ZVwiOjE2NTMyOTYxNjEwMDAsXCJkZXBhcnRJZFwiOjEsXCJkZXNjcmlwdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2m6K6-5aSH566h55CG5ZGYXCIsXCJsb2NhdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2mXCIsXCJwYXNzd29yZFwiOlwidHl1dFwiLFwicm9sZUlkXCI6MixcInRocmVzaG9sZFwiOjUsXCJ1aWRcIjpcIjFcIixcInVzZXJuYW1lXCI6XCJ0eXV0XCJ9IiwiaWF0IjoxNjczNzc0NzE5LCJqdGkiOiI1YjUwYTczMC00YzZkLTRlOWEtOWJhNi05MDNlYWUwMWY1YzkifQ.2SzcGmWRDFPItgbpj_ndyIONWBartO-QfGgnRsEEKnA'
        }
      }


      axios(config2).then(function (response){
        console.log(response)
        var datas = response.data.data;
        // alert(JSON.stringify(datas))
        // first chart
        let twoWeeksDays = datas.twoWeeksDays;
        let twoWeeksReportCounts = datas.twoWeeksReportCounts;
        let lineChartData = [];

        console.log(lineChartData);

        for (var i = 0; i < twoWeeksDays.length; i++) {
          //lineChartData.push([twoWeeksDays[i], twoWeeksReportCounts[i]]);
          lineChartData.push([twoWeeksDays[i], twoWeeksReportCounts[i]]);
        }
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = echarts.init(document.getElementById('container'))
        // 绘制图表
        myChart1.setOption({

          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['报警数']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          // xAxis: {
          //     type: 'category',
          //     boundaryGap: false,
          //     data: twoWeeksDays
          // },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2022-12-30','2022-12-31','2023-1-1','2023-1-2','2023-1-3','2023-1-4','2023-1-5']
          },
          yAxis: {
            type: 'value',

          },
          // series: [
          //     {
          //         name: '报警数：',
          //         type: 'line',
          //         stack: 'Total',
          //         smooth: true,
          //         color:'#a90000',
          //         data: twoWeeksReportCounts
          //     }
          // ]
          series: [
            {
              name: '报警数：',
              type: 'line',
              stack: 'Total',
              smooth: true,
              color:'#a90000',
              data: [0,0,0,0,0,0,0]
            }
          ]
        })
      })
          .catch(function(error){
            console.log(error);
          })


    }
  }
}
</script>
<style>
</style>
