<template>

  <!-- 左边 -->
  <div class="left">
    <div class="unit">
      <div class="picture">
        <i class="iconfont icon-gouwuche" style="font-size:55px;"></i>
      </div>
      <div class="number">
        <h3 id="eqCount"><span class="count" id="depCount-number"></span></h3>
        <p>单位总数</p>
      </div>
    </div>
    <div class="facility">
      <div class="picture">
        <i class="iconfont icon-shuangren" style="font-size:50px;"></i>
      </div>
      <div class="number">
        <h3 id="eqCount"><span class="count" id="eqCount-number"></span></h3>
        <p>设备总数</p>
      </div>
    </div>
    <div class="problem">
      <div class="ratio">
        <span style="    color: #fff;
    font-weight: normal;font-size: 1.75rem;" class="count" id="fail-Rate"></span>
        <p style="margin-top:6px;">今日故障比例</p>
      </div>
    </div>
    <div class="warn">
      <div class="ratio">
        <span class="count" id="alarmRate" style="    color: #fff;
    font-weight: normal;font-size: 1.75rem;"></span>
        <p style="margin-top:6px;">今日报警比例</p>
      </div>
    </div>
  </div>
  <!-- 右边 -->
  <div class="right">
    <div class="header">
      <strong>告警信息统计</strong>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="row">当前报警数</th>
          <td id="alarmTotal"><span>0</span></td>
          <!--<td id="alarmTotal">{{ data.nowAlarmCount }}</td>-->
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">当前故障数</th>
          <td id="failTotal"><span>0</span></td>
          <!--<td>{{ data.nowFaultCount }}</td>-->
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">今日报警数</th>
          <td id="alarmTody"><span>0</span></td>
          <!--<td>{{ data.todayAlarmCount }}</td>-->
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">今日故障数</th>
          <td id="failTody"><span>0</span></td>
          <!-- <td>{{ data.todayFaultCount }}</td>-->
          <td></td>
          <td></td>
        </tr>

      </tbody>
    </table>
  </div>
  <div class="warn-count">
    <div class="warn-count-header">
      <strong>近期报警统计</strong>
      <div class="chart1">
        <Chart1 />
      </div>
    </div>
  </div>
  <!-- 底部-->
  <div class="footer">Copyright © 2020 易宁监测平台</div>
</template>
 
<script lang="ts">
import axios from 'axios';
import Chart1 from "./Chart1.vue"
import { defineComponent, ref } from 'vue';

function gettoken() {
  var config1 = {
    method: 'get',
    url: 'http://183.201.200.28:9002/monitor/findData?equip_id=1',
    headers: {
      'token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXN0ZW0iLCJzaGlyb1VzZXJJbmZvIjoie1wiY29udGFjdFwiOlwi5byg5LiJXCIsXCJjb250YWN0VGVsXCI6XCIxMzU4NjQ1NzUxMlwiLFwiZGF0ZVwiOjE2NTMyOTYxNjEwMDAsXCJkZXBhcnRJZFwiOjEsXCJkZXNjcmlwdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2m55qE6K6-5aSH566h55CG5ZGYXCIsXCJsb2NhdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2mXCIsXCJwYXNzd29yZFwiOlwidHl1dFwiLFwicm9sZUlkXCI6MixcInRocmVzaG9sZFwiOjUsXCJ1aWRcIjpcIjFcIixcInVzZXJuYW1lXCI6XCJ0eXV0XCJ9IiwiaWF0IjoxNjU5MjY3OTA4LCJqdGkiOiJlMzQ5YTZlNi1mZTE0LTQ1M2YtYjI5OS0xMGY2ZWMyNGQyMWUifQ.kewpWpMZXKuUd0658aaUsoA-6hvRl30aGCwfJGXZfPM'
    }
  }
  axios(config1).then(function (response) {
    document.getElementById('eqCount-number')!.innerHTML = response.data.data.eqCount
    document.getElementById('depCount-number')!.innerHTML = response.data.data.depCount
    document.getElementById('alarmRate')!.innerText = response.data.data.alarmRate + '%'
    document.getElementById('fail-Rate')!.innerHTML = response.data.data.failRate + '%'
    console.log(JSON.stringify(response.data.data.failRate))
  })
    .catch(function (error) {
      console.log(error);
    })
}

export default ({
  components: {
    Chart1,
  },

  created() {
    gettoken()
  }
});

</script>

<style lang="scss" scoped>
  @import '@/assets/iconfont/iconfont.css';
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}

#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}

.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}

/* // 数据中心——数据统计 */
.left {
  width: 43%;
  height: 320px;
  /* // background-color: yellow; */
  display: inline-block;
  vertical-align: middle;
  margin-left: 5%;
  margin-top: 10px;

}

.right {
  display: inline-block;
  width: 45%;
  height: 310px;
  background-color: white;
  margin-left: 2.5%;
  vertical-align: middle;
  border-radius: 2%;
  box-shadow: 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2);
}

.header {
  width: 100%;
  height: 50px;
  background-color: rgb(242, 243, 247, 0.7);
  vertical-align: middle;
  padding-top: 13px;
}

.header strong {
  font-size: 17px;
  margin-left: 3%;
}

.warn-count-header {
  width: 100%;
  height: 50px;
  vertical-align: middle;
  padding-top: 13px;
}

.warn-count-header strong {
  font-size: 17px;
  margin-left: 3%;
}

#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-layout-header {
  background: #ffffff !important;
}

.footer {
  width: 90%;
  height: 85px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: -25px;
  padding-top: 30px;
  padding-left: 3%;
}

.warn-count {
  width: 90%;
  height: 300px;
  background-color: white;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 2%;
  box-shadow: 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2);
}

.facility {
  width: 47%;
  height: 120px;
  background-color: #03a9f3;
  border-radius: 3%;
}

.unit {
  width: 47%;
  height: 120px;
  background-color: #00c292;
  border-radius: 3%;
  float: right;
}

.warn {
  width: 47%;
  height: 150px;
  background-color: #5c6bc0;
  border-radius: 3%;
  margin-top: 40px;
}

.problem {
  width: 47%;
  height: 150px;
  background-color: #ab8ce4;
  border-radius: 3%;
  float: right;
  margin-top: 40px;
}

/* 右边表格 */
.table {
  width: 90%;
  margin: 0 auto;
  margin-top: 28px;
}

.table thead th {
  border: none;
  font-size: 16px;
}

.table tbody th {
  border: none;
  font-size: 16px;
}

.table thead td {
  border: none;
  font-size: 16px;
}

.table tbody td {
  border: none;
  font-size: 16px;
}

/* 左边四个方块 */
.left .picture {
  width: 30%;
  height: 100px;
  padding-top: 26px;
  /* background-color: #ab8ce4; */
  float: right;
  margin-right: 5%;
}

.left .number {
  width: 35%;
  height: 100px;
  /* background-color: #5c6bc0; */
  padding-top: 20px;
  margin-left: 9%;
  color: #fff;
}

.left .number p {
  font-size: 16px;
  color: #fff;
  margin-top: -9px;
}

.left .number span {
  color: #fff;
  font-weight: normal;
}

.left .ratio {
  width: 35%;
  height: 100px;
  /* background-color: #5c6bc0; */
  padding-top: 20px;
  margin-left: 9%;
  color: #fff;
}

.left .ratio p {
  font-size: 16px;
  color: #fff;
  margin-top: -9px;
}

.left .ratio span {
  color: #fff;
  font-weight: normal;
}

/* 底部图表 */
.chart1 {
  width: 100%;
  height: 200px;

}

/* 底部 */
.footer {
  color: #78909c;
}

.icon-shuangren {
  color: rgba(229, 226, 226, 0.6);
  font-size: 50px;
}

.icon-gouwuche {
  color: rgba(229, 226, 226, 0.6);
  font-size: 55px;
}
</style>