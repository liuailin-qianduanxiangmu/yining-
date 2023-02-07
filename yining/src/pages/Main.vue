<template>
  <a-layout class="layout">
    <!-- 顶部 -->
    <a-layout-header
        style="
        background: #fff;
        padding: 0;
        width: 100%;
        box-shadow: 3px 0 8px -4px #000;
      "
    >
      <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
      />
      <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
      />
      <img
          src="../assets/img/yining_logo.png"
          style="width: 90px; height: 45px; margin-left: 60px; margin-top: -6px"
          alt=""
      />
    </a-layout-header>
    <!-- 内容区域 -->
    <!-- 测边导航 -->
    <a-layout>
      <a-layout-sider
          v-model:collapsed="collapsed"
          style="
          background: #fff;
          overflow-y: auto;
          box-shadow: 3px 0 8px -4px #ccc;
        "
          :trigger="null"
          collapsible
          model="inline"
      >
        <!-- <div class="logo" /> -->
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline"

        >
          <a-menu-item key="sub1">
            <user-outlined />
            <span style="font-weight: 600">中控界面</span>
          </a-menu-item>
          <a-sub-menu key="sub2">
            <template #title>
              <aim-outlined />
              <span>
                <span style="font-weight: 600">当前查看</span>
              </span>
            </template>
            <a-menu-item key="1">
              <!-- <video-camera-outlined /> -->
              <span class="anticon">
                <desktop-outlined class="anticon" />
              </span>
              <span>数据统计</span>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <eye-filled />
              <span>
                <span style="font-weight: 600">实时监测</span>
              </span>
            </template>
            <a-menu-item key="2" @click="goMD">
              <eye-filled />
              <span>设备监测</span>
            </a-menu-item>
            <a-menu-item key="3">
              <bulb-outlined />
              <span>能耗监测</span>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <template #title>
              <line-chart-outlined />
              <span>
                <span style="font-weight: 600">数据中心</span>
              </span>
            </template>
            <a-menu-item key="4" @click="goDatacoount">
              <line-chart-outlined />
              <span>数据统计</span>
            </a-menu-item>
            <a-menu-item key="5" @click="goSourceuse">
              <bar-chart-outlined />
              <span>能耗趋势</span>
            </a-menu-item>
            <a-menu-item key="6" @click="goAlarmLog">
              <alert-filled />
              <span>报警系统</span>
            </a-menu-item>
            <a-menu-item key="7">
              <calendar-outlined />
              <span>巡查日志</span>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub5">
            <template #title>
              <setting-filled />
              <span>
                <span style="font-weight: 600">后台管理</span>
              </span>
            </template>
            <a-menu-item key="8" @click="goDevice">
              <setting-filled />
              <span>设备管理</span>
            </a-menu-item>
            <a-menu-item key="9" @click="goUserSetting">
              <team-outlined />
              <span>用户管理</span>
            </a-menu-item>
            <a-menu-item key="10">
              <user-outlined />
              <span>角色管理</span>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>



<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  AreaChartOutlined,
  FunctionOutlined,
  HddFilled,
  AppstoreOutlined,
  DesktopOutlined,
  EyeFilled,
  BulbOutlined,
  LineChartOutlined,
  BarChartOutlined,
  AlertFilled,
  CalendarOutlined,
  SettingFilled,
  TeamOutlined,
  AimOutlined
} from "@ant-design/icons-vue";
import { log } from "@antv/g2plot/lib/utils";
import { defineComponent, ref ,reactive, watch} from "vue";
import { RouterView } from "vue-router";
export default defineComponent({
  name: "Main",
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    AreaChartOutlined,
    FunctionOutlined,
    HddFilled,
    AppstoreOutlined,
    DesktopOutlined,
    EyeFilled,
    BulbOutlined,
    LineChartOutlined,
    BarChartOutlined,
    AlertFilled,
    CalendarOutlined,
    SettingFilled,
    TeamOutlined,
    AimOutlined
  },
  setup() {

    return {
      selectedKeys: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
    };
  },
  methods: {
    goMD() {
      this.$router.push({
        name: "MDevice",
      });
    },
    goDevice() {
      console.log(1235);
      this.$router.push({
        name: "Device",
      });
    },
    goDatacoount() {
      this.$router.push({
        name: "Datacount",
      });
    },
    goSourceuse() {
      this.$router.push({
        name: "Sourceuse",
      });
    },
    goUserSetting() {
      this.$router.push({
        name: "UserSetting",
      });
    },
    goAlarmLog() {
      this.$router.push({
        name: "AlarmLog",
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.layout {
  height: 100vh;
  background: white;
  overflow-y: hidden;
}
.trigger {
  font-size: 22px;
  // line-height: 80px;
  padding: 0 30px;
  cursor: pointer;
  transition: color 0.3s;
}
.layout .trigger:hover {
  color: #1890ff;
}
.layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}
.ant-layout-content {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.a-layout-header {
  height: 58px;
  line-height: 58px;
  margin-bottom: 30px;
}
</style>
