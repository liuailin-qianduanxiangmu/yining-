import Index from "../pages/Index.vue";
import Chart from "../pages/Chart.vue";
import Map from "../pages/Map.vue";
import Login from "../pages/Login.vue";
import Main from "../pages/Main.vue";
import layout2 from "../pages/layout2.vue"
import MDevice from "../pages/MDevice.vue"
import Device from "../pages/Device.vue";
import UserSetting from "../pages/UserSetting.vue";
import Datacount from "../pages/Datacount.vue";
import Sourceuse from "../pages/Sourceuse.vue";
import Chart1 from '../pages/Chart1.vue';
import Chart2 from '../pages/Chart2.vue';
import Chart3 from '../pages/Chart3.vue';
import Chart4 from '../pages/Chart4.vue';
import Chart5 from '../pages/Chart5.vue';
import AddDevice from "../pages/AddDevice.vue";
import CheckDevice from "../pages/CheckDevice.vue";
import AlarmLog from "../pages/AlarmLog.vue"
const routes = [
  // { path: "/", redirect: "/Index" },
  { path: "/chart", component: Chart },
  { path: "/map", component: Map },
  { path: "/", component: Login },
  { path: '/chart1', component: Chart1 },
  { path: '/chart2', component: Chart2 },
  { path: '/chart3', component: Chart3 },
  { path: '/chart4', component: Chart4 },
  { path: '/chart5', component: Chart5 },
  // { path: "/device", component: Devive },
  { 
    path: "/yining", 
    name:'Layout2',
    component: layout2,
    children:[] 
  },
   {
    path:'/main',
    name:'Main',
    component: Main,
    children:[
      {
        path: '/device',
        name: 'Device',
        component: Device,
      },
      {
        path: '/addDevice',
        name: 'AddDevice',
        component:AddDevice
      },
      {
        path:'/checkDevice',
        name:'CheckDevice',
        component:CheckDevice
      },
      {
        path: '/userSetting',
        name: 'UserSetting',
        component: UserSetting
      },
      {
        path: '/Datacount',
        name: 'Datacount',
        component: Datacount
      },
      {
        path: '/Sourceuse',
        name: 'Sourceuse',
        component: Sourceuse
      },
      {
        path: '/MDevice',
        name: 'MDevice',
        component: MDevice
      },
      {
        path:'/AlarmLog',
        name:'AlarmLog',
        component:AlarmLog
      }
    ]
  }
  //  {
  //       hide: true,
  //       path: '/:pathMatch(.*)*',
  //       component: () => import('@/Exception/404'),
  //   },
];

export default routes;
