<template>
  <div :style="{ padding: '24px', minHeight: '280px' }">
    <!-- 左侧固定 -->
    <leftAffix />

    <!-- 地图 -->
    <Map></Map>
  </div>

  <!-- 表格 -->
  <div :style="{ padding: '24px', minHeight: '280px' }">
    <my-table></my-table>
  </div>
</template>
<script lang="ts">
// icon
import {
  HomeOutlined,
  SettingOutlined,
  HddOutlined,
  BellOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SmileOutlined,
  DownOutlined,
  BulbOutlined,
  DatabaseOutlined,
  FundProjectionScreenOutlined,
  WarningFilled,
  CalendarFilled,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons-vue";

import { defineComponent, ref } from "vue";

import Map from "./Map.vue";
import leftAffix from "./leftAffix.vue"
import myTable from "./table.vue";

export default defineComponent({
  components: {
    // icon
    HomeOutlined,
    SettingOutlined,
    HddOutlined,
    BellOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SmileOutlined,
    DownOutlined,
    BulbOutlined,
    DatabaseOutlined,
    FundProjectionScreenOutlined,
    WarningFilled,
    CalendarFilled,
    TeamOutlined,
    UserOutlined,

    // 组件
    Map,
    leftAffix,
    myTable
  },
  setup() {
    return {
      badgeCount: 5,
      selectedKeys: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
    };
  }
});
</script>
  
<style lang='scss' scoped>
// @import "../assets/scss/index2.scss";
.icon {
  margin-right: 10px;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.ant-menu {
  width: 100%;
}

.logo_cai {
  width: 90%;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}

.logo img,
.logo_cai img {
  width: 100%;
  height: 70px;
}

.ant-badge {
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
}

#map {
  height: 280px;
}

#leftAffix {
  left: 20%;
  top: 20%;
}
</style>