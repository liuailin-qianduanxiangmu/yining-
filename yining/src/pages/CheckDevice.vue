<template>
  <div class="card" style="width: 50%; margin: auto; margin-top: 2%">
    <div class="card-header" style="background-color: #99ccff; height: 80px">
      <span
        style="
          display: inline-block;
          vertical-align: middle;
          margin-top: 15px;
          font-size: 18px;
        "
        ><b>设备日志</b></span
      >
    </div>
    <div class="card-body">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        style="margin-top:2%"
      >
        <a-form-item label="设备ID" name="equipId">
          <a-input v-model:value="formState.equipId" />
        </a-form-item>

        <a-form-item
          label="设备名称"
          name="equipName"
        >
          <a-input v-model:value="formState.equipName" />
        </a-form-item>
        
        <a-form-item
          label="部件地址"
          name="equipName"
        >
          <a-input v-model:value="formState.address" />
        </a-form-item>

        <a-form-item
          label="联系人"
          name="contact"
        >
          <a-input v-model:value="formState.contact" />
        </a-form-item>

        <a-form-item
          label="联系电话"
          name="contactTel"
        >
          <a-input v-model:value="formState.contactTel" />
        </a-form-item>

        <a-form-item
          label="设备状态"
          name="equipState"
        >
          <a-input v-model:value="formState.equipState" />
        </a-form-item>

        <a-form-item
          label="描述"
          name="description"
        >
          <a-input v-model:value="formState.description" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">添加</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
interface FormState {
  equipId: "";
  equipName: "";
  address:"";
  contact: string;
  contactTel: string;
  equipState: string;
  description:string;
}
export default defineComponent({
  name: "CheckDevice",
  setup() {
    const formState = reactive<FormState>({
      equipId: "",
      equipName: "",
      address:"",
      contact: "",
      contactTel: "",
      equipState: "",
      description:"",
    });
    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>
<style scoped>
.card {
  margin-bottom: 1.875em;
  border-radius: 5px;
  padding: 0;
  border: 0px solid transparent;
  -webkit-box-shadow: 0 0 20px rgb(0 0 0 / 8%);
  box-shadow: 0 0 20px rgb(0 0 0 / 8%);
}

element.style {
  background-color: #99ccff;
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}
.header1 {
  height: 80px;
}
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card .card-body {
  background-color: #fff;
  float: left;
  padding: 1.25em;
  position: relative;
  width: 100%;
}
.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}
</style>
