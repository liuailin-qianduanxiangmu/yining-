<template>
  <div class="row">
    <div class="col-md-12" style="padding-right: 5%; padding-left: 5%; width: 100%; margin-top: 30px">
      <div class="card">
        <!-- 蓝色表头 -->
        <div class="card-header" style="background-color: #99ccff">
          <strong class="card-title">设备列表</strong>
          <a id="add1" name="add1" href="javascript:void(0);">
            <button type="button" class="float-right btn btn-outline-primary btn-sm" @click="gotoAddDevice" style="color: #fff">
              <plus-outlined />
              &nbsp; 添加设备
            </button>
          </a>
          &nbsp;&nbsp;&nbsp;
        </div>
        <!-- 中间部分 -->
        <div>
          <!--/form-->
          <div style="display: inline-block; padding: 20px 30px 30px 40px">
            <label for="name">设备名称: &nbsp;</label>

            <a-input v-model:value="value" placeholder="请输入设备名称" style="border-radius: 10px; width: 220px; height: 28px" />
          </div>
          <div style="display: inline-block; padding-right: 30px">
            <label for="use_department">使用单位: &nbsp;</label>

            <a-input v-model:value="value" placeholder="请输入使用单位" style="border-radius: 10px; width: 220px; height: 28px" />
          </div>

          <div style="display: inline-block; padding-right: 15px">
            <a-select v-model:value="value3" style="width: 150px; height: 30px; border-radius: 10px">
              <a-select-option value="mingxiang">明向校区</a-select-option>
              <a-select-option value="yingxi">迎西校区</a-select-option>
              <a-select-option value="huyu">虎峪校区</a-select-option>
            </a-select>
          </div>

          <a-button type="primary" shape="round" :size="size" style="color: #fff; height: 30px; padding: 8px; padding-top: 0; padding-bottom: 0">确定</a-button>
          <a-button type="primary" shape="round" :size="size" style="color: #878787; height: 30px; padding: 8px; padding-top: 1px; padding-bottom: 1px; background-color: #f0f0f0; border: none; margin-left: 10px">重置</a-button>
        </div>
        <!-- 主体表格部分 -->
        <div class="card-body">
          <table id="manage" class="table table-striped" style="font-size: 14px">
            <tbody>
              <tr>
                <th>序号</th>
                <th>安装日期</th>
                <th>设备编号</th>
                <th>设备名称</th>
                <th>单位名称</th>
                <th>联系人</th>
                <th>联系电话</th>
                <th>操作</th>
              </tr>
              <tr v-for="(item, index) in deviceShow" :key="item">
                <!-- <td>{{(index+1)*current}}</td> -->
                <td>
                  {{ current > 1 ? index + 1 + 6 * (current - 1) : index + 1 }}
                </td>
                <td>{{ item.createTime }}</td>
                <td>{{ item.equipId }}</td>
                <td>{{ item.equipName }}</td>
                <td>{{ item.equipAddr }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.contactTel }}</td>
                <td>
                  <a class="btn btn-default btn-sm" id="cid0" href="javascript:void(0);" @click="toCheck"><ToolFilled />检测</a>
                  <a class="btn btn-default btn-sm" id="mid0" href="editEquipment.html?eq_id=1"><EditOutlined />修改</a>
                  <a class="btn btn-default btn-sm" id="del0" @click="delDevice(item, index)"><CloseOutlined />删除</a>
                  <a class="btn btn-default btn-sm" id="picture" onclick="newqr(1)"><SearchOutlined />二维码</a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="bottom_big" style="display: block">
            <span class="bottom_1"
              >共 <a id="totalCount">{{ totalPage }}</a> 条</span
            >

            <a-pagination v-model:current="current" show-quick-jumper :total="30" @change="onChange" />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PlusOutlined, SearchOutlined, CloseOutlined, ToolFilled, EditOutlined } from '@ant-design/icons-vue';
import axios from 'axios';
import { defineComponent, ref } from 'vue';
import type { SizeType } from 'ant-design-vue/es/config-provider';
export default defineComponent({
  name: 'Device',
  components: {
    PlusOutlined,
    SearchOutlined,
    CloseOutlined,
    ToolFilled,
    EditOutlined
  },
  data() {
    return {
      deviceShow: '',
      current: ref(1),
      totalPage: '',
      size: ref<SizeType>('small')
    };
  },
  methods: {
    onChange() {
      axios
        .get('http://183.201.200.28:9002/equipmanages/pageQuery', {
          params: {
            currentPage: this.current,
            pageSize: 6
          },
          headers: {
            token:
              'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXN0ZW0iLCJzaGlyb1VzZXJJbmZvIjoie1wiY29udGFjdFwiOlwi5byg5LiJXCIsXCJjb250YWN0VGVsXCI6XCIxMzU4NjQ1NzUxMlwiLFwiZGF0ZVwiOjE2NTMyOTYxNjEwMDAsXCJkZXBhcnRJZFwiOjEsXCJkZXNjcmlwdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2m55qE6K6-5aSH566h55CG5ZGYXCIsXCJsb2NhdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2mXCIsXCJwYXNzd29yZFwiOlwidHl1dFwiLFwicm9sZUlkXCI6MixcInRocmVzaG9sZFwiOjUsXCJ1aWRcIjpcIjFcIixcInVzZXJuYW1lXCI6XCJ0eXV0XCJ9IiwiaWF0IjoxNjU5MjY3OTA4LCJqdGkiOiJlMzQ5YTZlNi1mZTE0LTQ1M2YtYjI5OS0xMGY2ZWMyNGQyMWUifQ.kewpWpMZXKuUd0658aaUsoA-6hvRl30aGCwfJGXZfPM'
          }
        })
        .then(
          response => {
            if (response.status == 200) {
              console.log(response);
              this.deviceShow = response.data.data.records;
              console.log(this.deviceShow);
            }
          },
          error => {}
        );
    },
    delDevice(item: any, index: number) {
      axios
        .get('http://183.201.200.28:9002/equipmanages/delete', {
          params: {
            equipId: item.equipId
          },
          headers: {
            token:
              'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXN0ZW0iLCJzaGlyb1VzZXJJbmZvIjoie1wiY29udGFjdFwiOlwi5byg5LiJXCIsXCJjb250YWN0VGVsXCI6XCIxMzU4NjQ1NzUxMlwiLFwiZGF0ZVwiOjE2NTMyOTYxNjEwMDAsXCJkZXBhcnRJZFwiOjEsXCJkZXNjcmlwdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2m55qE6K6-5aSH566h55CG5ZGYXCIsXCJsb2NhdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2mXCIsXCJwYXNzd29yZFwiOlwidHl1dFwiLFwicm9sZUlkXCI6MixcInRocmVzaG9sZFwiOjUsXCJ1aWRcIjpcIjFcIixcInVzZXJuYW1lXCI6XCJ0eXV0XCJ9IiwiaWF0IjoxNjU5MjY3OTA4LCJqdGkiOiJlMzQ5YTZlNi1mZTE0LTQ1M2YtYjI5OS0xMGY2ZWMyNGQyMWUifQ.kewpWpMZXKuUd0658aaUsoA-6hvRl30aGCwfJGXZfPM'
          }
        })
        .then(
          response => {
            if (response.status == 200) {
              console.log(response);
              this.deviceShow.slice(index, 1);
              console.log(this.deviceShow);
            }
          },
          error => {}
        );
    },
    gotoAddDevice() {
      this.$router.push({
        name: 'AddDevice'
      });
    },
    toCheck() {
      this.$router.push({
        name: 'CheckDevice'
      });
    }
  },
  created() {
    axios
      .get('http://183.201.200.28:9002/equipmanages/pageQuery', {
        params: {
          currentPage: this.current,
          pageSize: 6
        },
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXN0ZW0iLCJzaGlyb1VzZXJJbmZvIjoie1wiY29udGFjdFwiOlwi5byg5LiJXCIsXCJjb250YWN0VGVsXCI6XCIxMzU4NjQ1NzUxMlwiLFwiZGF0ZVwiOjE2NTMyOTYxNjEwMDAsXCJkZXBhcnRJZFwiOjEsXCJkZXNjcmlwdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2m55qE6K6-5aSH566h55CG5ZGYXCIsXCJsb2NhdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2mXCIsXCJwYXNzd29yZFwiOlwidHl1dFwiLFwicm9sZUlkXCI6MixcInRocmVzaG9sZFwiOjUsXCJ1aWRcIjpcIjFcIixcInVzZXJuYW1lXCI6XCJ0eXV0XCJ9IiwiaWF0IjoxNjU5MjY3OTA4LCJqdGkiOiJlMzQ5YTZlNi1mZTE0LTQ1M2YtYjI5OS0xMGY2ZWMyNGQyMWUifQ.kewpWpMZXKuUd0658aaUsoA-6hvRl30aGCwfJGXZfPM'
        }
      })
      .then(
        response => {
          if (response.status == 200) {
            console.log(response.data.data);
            this.deviceShow = response.data.data.records;
            this.totalPage = response.data.data.total;
            console.log(this.deviceShow);
          }
        },
        error => {}
      );
  }
});
</script>

<style scoped lang="scss">
@import '../assets/css/bootstrap.min.css';
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: 0px;
}
.card-header {
  border: none;
}
b,
strong {
  font-weight: bolder;
}
a,
button {
  text-decoration: none;
  outline: none !important;
  color: #878787;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
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
.btn {
  border-radius: 3px;
}
.btn,
button,
input,
textarea {
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: 0 !important;
}
.btn {
  display: inline-block;
  padding: 6px 10px;
  margin-bottom: 0;
  font-size: 13px;
  font-weight: 400;
  height: 32px;
  line-height: 4px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.float-right:hover {
  color: #000;
}
svg {
  display: inline-block;
  line-height: -20px;
  vertical-align: middle;
  margin-top: -10px;
}
path {
  line-height: 10px;
}

.anticon {
  vertical-align: 0;
}
.card .card-body {
  float: left;
  padding: 1.25em;
  position: relative;
  width: 100%;
}
.bottom_big .bottom_1 {
  margin-left: 350px;
  margin-top: 4px;
}
.bottom_big .bottom_4,
.bottom_3,
.bottom_2,
.bottom_1 {
  float: left;
  /* margin-right: 20px; */
}
.ant-pagination {
  position: absolute;
  margin-left: 420px;
}
.bottom_big .bottom_3 a {
  display: inline-block;
  color: black;
  background-color: rgb(242, 242, 242);
  height: 25px;
  width: 30px;
  margin-left: 5px;
  text-align: center;
}
.bottom_big .bottom_4 input {
  display: inline-block;
  height: 30px;
  width: 30px;
  /* right: 50px; */
}
</style>
