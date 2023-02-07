<template>
  <div id="table">
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'index'">
          <span>序号</span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'index'">
          <a>{{ record.index }}</a>
        </template>
        <template v-else-if="column.key === 'person'">
          <a>{{ record.person }}</a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag v-for="tag in record.tags" :key="tag" :color="tag === '异常' ? '正常' : tag.length > 2 ? 'red' : 'green'">{{ tag.toUpperCase() }}</a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link">
              More actions
              <down-outlined />
            </a>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts">
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import axios from 'axios';
const columns = [
  {
    name: '序号',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: '接收时间',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '系统类型',
    dataIndex: 'class',
    key: 'class'
  },
  {
    title: '单位名称',
    dataIndex: 'part',
    key: 'part'
  },
  {
    title: '联系人',
    dataIndex: 'person',
    key: 'person'
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '状态',
    key: 'tags',
    dataIndex: 'tags'
  },
  {
    title: 'Action',
    key: 'action'
  }
];

// axios.get("http://183.201.200.28:9002/monitor/findDistrictEquipment?district=明向校区&token=token").then(response => {
//   console.log(response);
// })

// var config1 = {
//    method: 'post',
//    url: '/user/login?username=tyut&password=tyut',
//    headers: {
//       'User-Agent': 'http://183.201.200.28:9002/'
//    }
// };
// var token='';
// axios(config1)
// .then(function (response) {
//    console.log(JSON.stringify(response.data));
//    token=response.data;
// })
// .catch(function (error) {
//    console.log(error);
// });

function getTableInfo() {
  var config2 = {
    method: 'get',
    url: 'http://183.201.200.28:9002/monitor/findEquipment',
    headers: {
      token:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXN0ZW0iLCJzaGlyb1VzZXJJbmZvIjoie1wiY29udGFjdFwiOlwi5byg5LiJXCIsXCJjb250YWN0VGVsXCI6XCIxMzU4NjQ1NzUxMlwiLFwiZGF0ZVwiOjE2NTMyOTYxNjEwMDAsXCJkZXBhcnRJZFwiOjEsXCJkZXNjcmlwdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2m55qE6K6-5aSH566h55CG5ZGYXCIsXCJsb2NhdGlvblwiOlwi5aSq5Y6f55CG5bel5aSn5a2mXCIsXCJwYXNzd29yZFwiOlwidHl1dFwiLFwicm9sZUlkXCI6MixcInRocmVzaG9sZFwiOjUsXCJ1aWRcIjpcIjFcIixcInVzZXJuYW1lXCI6XCJ0eXV0XCJ9IiwiaWF0IjoxNjU5Mjc4NTUxLCJqdGkiOiIwOGY4NTI1Yy0yOTYwLTQ3NDctODM2Zi0wYjQ3MDU4ZDlhMzQifQ.znjw_m4sfI-IVJRT4oXx97Ky0BnyuA9Us6hUNQ1y3FM'
    }
  };

  axios(config2)
    .then(function (response) {
      const data = response.data.data;
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
const data = getTableInfo();
console.log(getTableInfo());

export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined
  },
  setup() {
    return {
      data,
      columns
    };
  }
});
</script>
