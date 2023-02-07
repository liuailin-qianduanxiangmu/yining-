<!-- 左侧固定 -->
<template>
<div id='leftAffix'>
    <a-affix :offset-top="top" class="leftAffix">
              <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
                <a-sub-menu key="SubMenu" title="区域选择">

                        <a-select
                            v-model:value="value"
                            show-search
                            placeholder="请选择区域（太原理工大学明向校区）"
                            style="width: 90%;margin: 0 auto;display: block;margin-top: 20px;margin-bottom: 20px;"
                            :options="options"
                            :filter-option="filterOption"
                            @focus="handleFocus"
                            @blur="handleBlur"
                            @change="handleChange">
                        </a-select>

                </a-sub-menu>
              </a-menu>
    </a-affix>
</div>
</template>

<script lang="ts">
import type { SelectProps } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const top = ref<number>(10);

    const options = ref<SelectProps['options']>([
      { value: 'mingxiang', label: '太原理工大学明向校区' },
      { value: 'yingxi', label: '太原理工大学迎西校区' },
      { value: 'huyv', label: '太原理工大学虎裕校区' },
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

    return {
      top,
      value: ref<string | undefined>(undefined),
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
      options,
    };
  },
});
</script>

<style scoped>
#leftAffix{
    width:20%;
    position:fixed;
    top:15%;
    left:10%;
    z-index:2;
}
</style>