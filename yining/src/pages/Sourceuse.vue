<template>

  <div class="top">
    <div class="top-header"><strong>电压电流监测</strong></div>
    <Chart2 />
  </div>

  <div class="bottom">
    <div class="circle-left">
      <div class="box"><strong>平均功率</strong></div>
      <Chart3 />
    </div>
    <div class="circle-middle">
      <div class="box"><strong>电能检测</strong></div>
      <Chart4 />
    </div>
    <div class="circle-right">
      <div class="box"><strong>剩余电价值</strong></div>
      <Chart5 />
    </div>
  </div>
  <!-- 底部-->
  <div class="footer">Copyright © 2020 易宁监测平台</div>
</template>

<script lang="ts">
import Chart2 from "./Chart2.vue"
import Chart3 from "./Chart3.vue"
import Chart4 from "./Chart4.vue"
import Chart5 from "./Chart5.vue"
// import '@/assets/scss/Sourceuse.scss';
export default ({

  components: {
    Chart2,
    Chart3,
    Chart4,
    Chart5,
  },
});
</script>

<style scoped>
.top {
  width: 90%;
  height: 330px;
  background-color: white;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 2%;
  box-shadow: 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2);
}

.bottom {
  width: 90%;
  height: 300px;
  background-color: white;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 2%;
  text-align: center;
  box-shadow: 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2), 0 0 10px rgb(204, 204, 204, 0.2);
}

.box {
  width: 100%;
  height: 40px;
  padding-left: -6%;
}

strong {
  font-size: 17px;
}

.circle-left {
  width: 32%;
  height: 300px;
  /* background-color: bisque; */
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding-top: 15px;
}

.circle-middle {
  width: 32%;
  height: 300px;
  /* background-color: rgb(146, 94, 31); */
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding-top: 15px;
}

.circle-right {
  width: 32%;
  height: 300px;
  /* background-color: rgb(89, 251, 129); */
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding-top: 15px;
}


.top .top-header strong {
  font-size: 17px;
  margin-left: 3%;
}

.top .top-header {
  padding-top: 10px;
  background-color: #ffffff;
}
</style>