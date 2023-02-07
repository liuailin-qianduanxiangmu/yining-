<template>
  <div class="col-md-11">
    <div class="card">
      <div class="card-header" style="background-color: #99ccff">
        <strong class="card-title">添加设备</strong>
      </div>
      <div class="card-body">
        <a-form
            :model="formState"
            name="basic"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 14 }"
            autocomplete="off"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
            style="margin-top:2%"
        >
          <a-form-item
              label="设备ID"
              :wrapper-col="{ offset: 1, span: 14 }"
              name="equipId"
          >
            <a-input v-model:value="formState.equipId" />
          </a-form-item>

          <a-form-item
              label="设备名称"
              :wrapper-col="{ offset: 1, span: 14 }"
              name="equipName"
              style="margin-top:2.5%"
          >
            <a-input v-model:value="formState.equipName" />
          </a-form-item>

          <a-form-item
              label="设备状态"
              :wrapper-col="{ offset: 1, span: 14 }"
              name="equipState"
              style="margin-top:2.5%"
          >
            <a-select v-model:value="formState.equipState" placeholder="请选择设备状态" >
              <a-select-option value="good" >正常</a-select-option>
              <a-select-option value="bad">故障</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item
              label="设备型号"
              :wrapper-col="{ offset: 1, span: 14 }"
              name="equipNumber"
              style="margin-top:2.5%"
          >
            <a-input v-model:value="formState.equipNumber" />
          </a-form-item>

          <!-- <a-form-item
            label="安装时间"
            :wrapper-col="{ offset: 1, span: 14 }"
            name="installTime"
          >
            <a-input v-model:value="formState.installTime" />
          </a-form-item> -->

          <a-form-item
              name="installTime"
              label="安装时间"
              :wrapper-col="{ offset: 1, span: 14 }"
              style="margin-top:2.5%"
          >
            <a-date-picker
                v-model:value="formState.installTime"
                show-time
                format="YYYY-MM-DD HH:mm:ss"
                value-format="YYYY-MM-DD HH:mm:ss"
            />
          </a-form-item>

          <a-form-item
              label="设备位置"
              :wrapper-col="{ offset: 1, span: 14 }"
              name="equipAddr"
              style="margin-top:2.5%"
          >
            <a-input v-model:value="formState.equipAddr" />
          </a-form-item>

          <a-form-item
              label="生产商"
              :wrapper-col="{ offset: 1, span: 14 }"
              name="equipProducer"
              style="margin-top:2.5%"
          >
            <a-input v-model:value="formState.equipProducer" />
          </a-form-item>

          <a-form-item
              label="联系人"
              :wrapper-col="{ offset: 1, span: 14 }"
              name="contact"
              style="margin-top:2.5%"
          >
            <a-input v-model:value="formState.contact" />
          </a-form-item>

          <a-form-item
              label="联系电话"
              :wrapper-col="{ offset: 1, span: 14 }"
              name="contactTel"
              style="margin-top:2.5%"
          >
            <a-input v-model:value="formState.contactTel" />
          </a-form-item>

          <a-form-item
              label="备注"
              :wrapper-col="{ offset: 1, span: 14 }"
              name="note"
              style="margin-top:2.5%"
          >
            <a-input v-model:value="formState.note" />
          </a-form-item>

          <a-form-item
              label="经纬度"
              :wrapper-col="{ offset: 1, span: 14 }"
              name="latitude"
              style="margin-top:2.5%"
          >
            <Map></Map>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 7, span: 12 }">
            <a-button type="primary" html-type="submit" @click="onFinish(formState)">添加</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
  <!-- <Map></Map> -->
  <div class="footer">Copyright © 2020 易宁监测平台</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import axios from "axios";
import { message } from "ant-design-vue";
import Map from "./Map.vue";
import { log } from "@antv/g2plot/lib/utils";
interface FormState {
  equipId: string;
  equipName: string;
  equipState: any;
  equipNumber: string;
  installTime: string;
  equipAddr: string;
  equipProducer: string;
  contact: string;
  contactTel: string;
  note: string;
  latitude:string,
  uid:string,
  electricTotal:number,
  longitude:string,
}

export default defineComponent({
  name: "AddDevice",
  setup() {
    const formState = reactive<FormState>({
      equipId: "",
      equipName: "",
      equipState: "",
      equipNumber: "",
      installTime: "",
      equipAddr: "",
      equipProducer: "",
      contact: "",
      contactTel: "",
      note: "",
      latitude:'',
      uid:'',
      electricTotal:0,
      longitude:""
    });
    const onFinish = (values: any) => {
      axios
          .post("http://49.234.135.187:9005/equipmanages/add", {
            params: {
              equipId: formState.equipId,
              equipName: formState.equipName,
              equipState: formState.equipState,
              equipNumber: formState.equipNumber,
              installTime: formState.installTime,
              equipAddr: formState.equipAddr,
              equipProducer: formState.equipProducer,
              contact: formState.contact,
              contactTel: formState.contactTel,
              note: formState.note,
              latitude:formState.latitude,
              uid:formState.uid,
              electricTotal:formState.electricTotal,
              longitude:formState.longitude
            },
            headers: {
              ANSWER_ACCESS_TOKEN:
                  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXN0ZW0iLCJzaGlyb1VzZXJJbmZvIjoie1wiY29udGFjdFwiOlwi5byg5LiJXCIsXCJjb250YWN0VGVsXCI6XCIxODMzMzM1NDYyMFwiLFwiZGF0ZVwiOjE2NTMyOTYxNjEwMDAsXCJkZXBhcnRJZFwiOjEsXCJkZXNjcmlwdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2m6K6-5aSH566h55CG5ZGYXCIsXCJsb2NhdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2mXCIsXCJwYXNzd29yZFwiOlwidHl1dFwiLFwicm9sZUlkXCI6MixcInRocmVzaG9sZFwiOjUsXCJ1aWRcIjpcIjFcIixcInVzZXJuYW1lXCI6XCJ0eXV0XCJ9IiwiaWF0IjoxNjczNzA1NDk0LCJqdGkiOiIyNGM2MTdlMS04ZGQ5LTQwZDYtYTVhOS0wNjU5ZWUyYTEwYjUifQ.zjbw_VENkZDqEWEXzH8Mt2FJgdjxd5BNPGITcjI27zs",
            },
          })
          .then(
              (response) => {
                console.log('返回信息',response)
                if (response.status == 200) {
                  if (response.data.code == 500) {
                    message.error("服务器故障，请联系管理员");
                  }
                }
              },
              (error) => {}
          );
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    //添加按钮
    const submit = () => {
      alert('提交成功')
    }
    return {
      formState,
      onFinish,
      onFinishFailed,
      submit
    };
  },
  components:{
    Map
  }
});
</script>
<style scoped>
@import "../assets/css/bootstrap.min.css";
.card {
  margin-bottom: 1.875em;
  border-radius: 5px;
  padding: 0;
  border: 0px solid transparent;
  -webkit-box-shadow: 0 0 20px rgb(0 0 0 / 8%);
  box-shadow: 0 0 20px rgb(0 0 0 / 8%);
  margin-top: 3%;
  margin-left: 4%;
}
.card .card-body {
  float: left;
  padding: 1.25em;
  position: relative;
  width: 100%;
}
.ant-form-horizontal .ant-form-item-label {
  flex-grow: 0;
  font-size: 28px;
}
#map {
  width: 94%;
  height: 300px;
}
/* 去除百度地图版权那行字 和 百度logo */
.baidumap>.BMap_cpyCtrl {
  display: none !important;
}

.baidumap>.anchorBL {
  display: none !important;
}
/* 底部 */
.footer {
  color: #78909c;
}

.footer {
  width: 90%;
  height: 85px;
  background-color: #ffffff;
  margin: 0 3.6%;
  margin-top: 40px;
  margin-bottom: -25px;
  padding-top: 30px;
  padding-left: 4%;
}
</style>
