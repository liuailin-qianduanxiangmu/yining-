<template>
    <div id="map"></div>
</template>

<script>
let BMap = {};
let map = {};
export default {
    methods: {
        createMap() {
            BMap = window.BMap;
            map = new BMap.Map("map");
            map.centerAndZoom("太原", 11);
            map.enableScrollWheelZoom(true);    //开启鼠标滑轮缩放
        },
    },
    created() {
        this.$nextTick(() => {
            this.createMap();
        });
    },
};
// vue3.0写法
// import { onMounted } from "@vue/runtime-core";
// onMounted(() => {
//     $nextTick(() => {
//         createMap();
//     });
// })
// export default mapComponent({
//     // setup中不能使用this
//     setup() {
//         // 创建地图方法
//         const createMap = () => {
//             BMap = window.BMap;
//             map = new BMap.Map("map");
//             map.centerAndZoom("成都", 11);
//         },
//         return {
//             createMap
//         };
//     },
// });
</script>

<style scoped>
#map {
    width: 100%;
    height: 1000px;
}

/* 去除百度地图版权那行字 和 百度logo */
.baidumap>.BMap_cpyCtrl {
    display: none !important;
}

.baidumap>.anchorBL {
    display: none !important;
}
</style>