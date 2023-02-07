<template>
<div id='rightAffix'>
    <a-affix :offset-top="top" class="rightAffix">
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
            <a-sub-menu key="SubMenu" title="设备信息">
                <a-menu-item-group title="电气设备信息 1 （类型：电气 明向校区）">
                    <a-menu-item key="setting:1">联系老师：张天华</a-menu-item>
                    <a-menu-item key="setting:2">联系电话：13782729234</a-menu-item>
                    <a-menu-item key="setting:3">安装时间：2022-06-17 20:22:33</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="电气设备信息 2 （类型：电气 迎西校区）">
                    <a-menu-item key="setting:4">联系老师：洱海</a-menu-item>
                    <a-menu-item key="setting:5">联系电话：13782756984</a-menu-item>
                    <a-menu-item key="setting:6">安装时间：2022-06-15 16:20:12</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
        </a-menu>
    </a-affix>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const top = ref<number>(10);
    return {
      top,
    };
  },
});
</script>

<style scoped>
#rightAffix{
    width:23%;
    position:fixed;
    top:15%;
    right:10%;
    z-index:2;
}
</style>