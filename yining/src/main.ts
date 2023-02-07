import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router' // router
import routes from './config/route' // 引入路由配置
import Antd from 'ant-design-vue'; // AntDesign
import 'ant-design-vue/dist/antd.css'; // AntDesign样式
//axios
import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import * as echarts from 'echarts'

// import 'bootstrap'
const router = VueRouter.createRouter({
    // history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
})

const app = createApp(App)
app.use(router)
app.use(Antd)
// **********改**********
// app.use(axios as any)
app.use(echarts as any)
app.mount('#app')
// app.use(VueAxios, axios)
// export default router//输出
