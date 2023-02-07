<template>
    <div :style="{ padding:'24px' }">
        <div class="table-operations">
            <a-input v-model:value="DeviceName" placeholder="请输入设备名称" :style="{ display:'inline-block',width:'20%' }">
            </a-input>
            <a-select 
                v-model:value="value" 
                show-search 
                placeholder="请选择报警类型" 
                style="width: 20%; display:inline-block;margin-left:5%;" 
                :options="options"
                :filter-option="filterOption" 
                @focus="handleFocus" 
                @blur="handleBlur" 
                @change="handleChange"
            ></a-select>
            <a-button type="primary" :style="{ marginLeft:'5%' }">确定</a-button>
            <a-button :style="{ marginLeft:'2%' }">重置</a-button>
        </div>
        <a-table :columns="columns" :data-source="data">
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'index'">
                    <a>{{ record.index }}</a>
                </template>
                <template v-else-if="column.dataIndex === 'states'">
                    <span>
                        <a-tag v-for="state in record.states" :key="state === 'loser' ? 'volcano' : state.length > 5 ? 'geekblue' : 'green' ">
                            {{ state.toUpperCase() }}
                        </a-tag>
                    </span>
                </template>
            </template>
        </a-table>
        </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';

import type { TableColumnType,TableProps,SelectProps } from 'ant-design-vue';
import axios from 'axios';
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '接收时间',
    dataIndex: 'time',
    key: 'time',
    ellipsis: true,
    width:100
  },
  {
    title: '设备名称',
    dataIndex: 'name1',
    key: 'name1',
    ellipsis: true,
  },
  {
    title: '系统类型',
    dataIndex: 'Sclass',
    key: 'Sclass',
    ellipsis: true,
  },
  {
    title: '单位名称',
    dataIndex: 'name2',
    key: 'name2',
    ellipsis: true,
  },
  {
    title: '联系人',
    dataIndex: 'person',
    key: 'person',
    ellipsis: true,
  },
  {
    title: '联系电话',
    dataIndex: 'tel',
    key: 'tel',
    ellipsis: true,
  },
  {
    title: '设备状态',
    dataIndex: 'states',
    key: 'states',
    ellipsis: true,
  },
  {
    title: '报警类型',
    dataIndex: 'alarmclass',
    key: 'alarmclass',
    ellipsis: true,
  }
];
const data =[
    {
        index: '1',
        time: '2022-5-20 10:21:33',
        name1: '洗衣机',
        Sclass:"电气",
        name2:"电气",
        person:"刘仪伟",
        tel:"16273683451",
        states:["loser"],
        alarmclass:"电压报警",
    }
]


export default defineComponent({
    
    setup() {
        const DeviceName = ref<string>("")

        const options = ref<SelectProps['options']>([
            { value: '电压报警', label: '电压报警' },
            { value: '电流报警', label: '电流报警' }
        ]);
        const handleChange = (value: string) => {
            console.log(`selected ${value}`);
        };
        const handleBlur = () => {
            console.log('blur');
        };
        const handleFocus = () => {
            console.log('focus');
        };
        const filterOption = (input: string, option: any) => {
            return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };





        // const handleChange: TableProps['onChange'] = (pagination, filters, sorter) => {
        //     console.log('Various parameters', pagination, filters, sorter);
        //     filteredInfo.value = filters;
        //     sortedInfo.value = sorter;
        // };


        return {
            DeviceName,

            value: ref<string | undefined>(undefined),
            filterOption,
            handleBlur,
            handleFocus,
            handleChange,
            options,



            columns,
            data
,
        };
    },

});
</script>
<style lang="scss" scoped>
.table-operations {
    margin-bottom: 16px;
}
</style>