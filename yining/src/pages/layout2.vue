<template>
    <a-layout class="layout">
      <a-layout-header>
        <div class="logo">
          <img src="../assets/img/yining_logo2.png" />
        </div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight:'64px' }"
        >
          <a-menu-item key="1"><home-outlined />首页</a-menu-item>
          <a-menu-item key="2" @click = "goMain"><fund-view-outlined />监控管理</a-menu-item>
          <a-menu-item key="3" @click = "goMain"><area-chart-outlined />数据分析</a-menu-item>
          <a-menu-item key="4" @click = "goMain"><hdd-outlined />设备管理</a-menu-item>
          <a-menu-item key="5" @click = "goMain"><appstore-add-outlined />系统管理</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
          <!-- 左侧固定 -->
          <leftAffix />
  
          <!-- 右侧固定 -->
          <rightAffix />
  
          <!-- 地图 -->
          <Map></Map>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </template>
<script lang="ts">
// import '@/assets/scss/index.scss';
import { defineComponent, ref } from "vue";
import Map from "./Map.vue";
import leftAffix from "./leftAffix.vue";
import rightAffix from "./rightAffix.vue";
import axios from "axios";

// icon
import {
  HomeOutlined,
  AreaChartOutlined,
  FundViewOutlined,
  HddOutlined,
  AppstoreAddOutlined,
}from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    const containerRef = ref();
    return {
      selectedKeys: ref<string[]>(["2"]),
      containerRef
    };
  },

  components: {
    // 组件
    Map,
    leftAffix,
    rightAffix,

    // icon
    HomeOutlined,
    AreaChartOutlined,
    FundViewOutlined,
    HddOutlined,
    AppstoreAddOutlined,
  },

  methods:{
    goMain() {
      this.$router.push({
        name: "Main"
      })
    }
  }
});
</script>
  
<style lang='scss' scoped>
  @import "../assets/scss/index.scss";
  </style>
  