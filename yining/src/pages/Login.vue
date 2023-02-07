<template>
  <!-- 大盒子 -->
  <div class="all">
    <!-- 稍大盒子 -->
    <div class="sufee-login d-flex align-content-center flex-wrap">
      <!-- 稍稍大的盒子 -->
      <div class="container">
        <!-- 中间登录功能区 -->
        <div class="login-content">
          <!-- 易宁logo区 -->
          <div class="login-logo">
            <a>
              <img class="align-content" src="../assets/img/yining_logo.png" alt="" style="position: absoult" />
            </a>
          </div>
          <!-- 登录表单区 -->
          <div class="login-form" style="background-color: rgba(6, 7, 7, 0.6); border-radius: 16px">
            <!-- <form id="loginForm" method="post" style="width: 90%; margin-left: 5%">
              <div class="form-group">
                <label style="color: #fff">用户名</label>
                <input type="text" class="form-control" id="username" placeholder="" name="username" v-model="username" />
              </div>
              <div class="form-group">
                <label style="color: #fff">密码</label>
                <input type="password" class="form-control" id="password" placeholder="" name="password" v-model="password" />
              </div>

              <div class="checkbox">
                <label> <input type="checkbox" /> 记住密码 </label>
                <label class="pull-right">
                  <a onclick="alert('请联系管理员')" style="color: #ffcc33">忘记密码?</a>
                </label>
              </div>

              <button id="btn_sub" type="button" class="btn btn-success btn-flat m-b-30 m-t-30" style="background-color: #4694e2" @click="login">登 录</button>
            </form> -->
            <a-form :model="formState" name="normal_login" @finish="onFinish" @finishFailed="onFinishFailed" style="width: 90%; margin-left: 5%">
              <div class="user-name">用户名</div>
              <a-form-item name="username" class="form-group" style="color: #fff" :rules="[{ required: true, message: '请输入你的用户名！' }]">
                <a-input v-model:value="formState.username" placeholder="请输入用户名" style="height: 45px">
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                  </template>
                </a-input>
              </a-form-item>
              <div class="password-name">密码</div>
              <a-form-item class="form-group" name="password" :rules="[{ required: true, message: '请输入你的密码!' }]">
                <a-input-password v-model:value="formState.password" placeholder="请输入密码" style="height: 45px">
                  <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                  </template>
                </a-input-password>
              </a-form-item>

              <a-form-item>
                <a-form-item name="remember" no-style>
                  <!-- <a-checkbox v-model:checked="formState.remember" class="remember-password">记住密码</a-checkbox> -->
                  <a-checkbox v-model:checked="formState.remember" style="display: flex; width: 100px; float: left">记住密码</a-checkbox>
                </a-form-item>
                <!-- <a class="login-form-forgot pull-right" href="" onclick="alert('请联系管理员')" style="color: #ffcc33">忘记密码?</a> -->
                <a class="login-form-forgot pull-right" style="color: #ffcc33" @click="() => openNotificationWithIcon('info')">忘记密码？</a>
              </a-form-item>

              <!-- <a-alert message="Informational Notes" description="Additional description and informations about copywriting." type="info" show-icon /> -->

              <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" id="btn_sub" class="btn btn-success btn-flat m-b-30 m-t-30" style="background-color: #4694e2" @click="login"> 登录 </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/css/bootstrap.min.css';

.bg-dark {
  background-color: #343a40 !important;
}
.all {
  height: 100%;
  background: url(../assets/img/login1.jpg);
  background-size: 100% 116%;
  transform: rotateY(360deg);
  display: table;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  width: 100%;
}
.container {
  max-width: 1140px;
  height: 752px;
  width: 100%;
  /* height: 100%; */
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.login-content {
  max-width: 540px;
  margin: 8vh auto;
}
.login-logo {
  text-align: center;
  margin-bottom: 15px;
}
img {
  max-width: 100%;
}
.login-form {
  background: #878787;
  padding: 30px 30px 20px;
  border-radius: 2px;
}
.form-group {
  margin-bottom: 1rem;
  margin-top: 1rem;
  height: 45px;
}
.login-form label {
  color: #878787;
  text-transform: uppercase;
}
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
.btn,
button,
input,
textarea {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: 0 !important;
  height: 45px;
}
.login-form .checkbox {
  color: #878787;
}
.login-form .checkbox label {
  text-transform: none;
}
.pull-right {
  float: right;
}
.login-form label a {
  color: #ff2e44;
}
.login-form .btn {
  width: 100%;
  text-transform: uppercase;
  font-size: 14px;
  padding: 15px;
  border: 0px;
}
.btn,
.button {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  border-radius: 3;
  cursor: pointer;
}
.user-name,
.password-name {
  font-size: 16px;
  color: #fff;
}
a-checkbox {
  width: 60px;
}
</style>
<script lang="ts">
import axios from 'axios';
// import elementUi from 'element-ui';
import { message, notification } from 'ant-design-vue';
// import { defineComponent } from 'vue';
// export default {
//   data() {
//     return {
//       username: '',
//       password: ''
//     };
//   },

//   methods: {
//     login() {
//       if (this.username == '') {
//         message.warning('请输入用户名');
//         return;
//       } else if (this.password == '') {
//         message.warning('请输入密码');
//         return;
//       }
//       axios({
//         url: 'http://183.201.200.28:9002/user/login',
//         method: 'GET',
//         params: {
//           username: this.username,
//           password: this.password
//         },
//         headers: {
//           'Content-Type': 'application/json',
//           access_token: this.token
//         }
//       })
//         .then(response => {
//           if (response.status == 200) {
//             console.log(response);
//             window.localStorage.setItem('token', response.data.data);
//             console.log(response.data.data);
//             if (response.data.message == '操作成功') {
//               message.success('登陆成功!');
//               this.$router.push({
//                 name: 'Layout2'
//               });
//             } else if (response.data.message == '密码错误！') {
//               message.error('密码错误！');
//             } else if (response.data.message == '用户名不存在！') {
//               message.warning('用户名不存在！');
//             }
//           }
//         })
//         // *************改***********
//         .catch(err => {
//           console.log(err);
//         });
//     }

//   ****
//   var xhr=new XMLHttpRequest();
//   xhr.open('POST', 'https://www.apifox.cn/apidoc/shared-21a47a84-4071-4873-956b-6d96bfea77a5/user/login', true);
//   xhr.setRequestHeader('Content-Type', 'application/json'); //请求头
//   xhr.send(JSON.stringify({ "username": this.username, "password": this.password}));
//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       console.log("登录成功");
//       localStorage.setItem("login", "true");
//       localStorage.setItem("username", userLogins.value);
//       window.location.href = "index.html";
//     }else {
//       console.log("账号不存在");
//     }
//   }
// *********
// }
// }
// };
import { defineComponent, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
interface FormState {
  username: '';
  password: '';
  remember: boolean;
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });
    const openNotificationWithIcon = (type: string) => {
      notification[type]({
        message: '忘记密码？',
        description: '请联系管理员！'
      });
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
      openNotificationWithIcon
    };
  },
  methods: {
    login() {
      if ((this as any).username == '') {
        message.warning('请输入用户名');
        return;
      } else if ((this as any).password == '') {
        message.warning('请输入密码');
        return;
      }
      axios({
        url: 'http://183.201.200.28:9002/user/login',
        method: 'GET',
        params: {
          username: (this as any).username,
          password: (this as any).password
        },
        headers: {
          'Content-Type': 'application/json',
          access_token: (this as any).token
        }
      })
        .then(response => {
          if (response.status == 200) {
            console.log(response);
            window.localStorage.setItem('token', response.data.data);
            console.log(response.data.data);
            if (response.data.message == '操作成功') {
              message.success('登陆成功!');
              this.$router.push({
                name: 'Layout2'
              });
            } else if (response.data.message == '密码错误！') {
              message.error('密码错误！');
            } else if (response.data.message == '用户名不存在！') {
              message.warning('用户名不存在！');
            }
          }
        })
        // *************改***********
        .catch(err => {
          console.log(err);
        });
    }
  }
});
</script>
