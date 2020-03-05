<template>
  <div id="GeneralLayout">
    <Box>
      <h3>基本布局</h3>
      <!-- 选项 -->
      <Select :options="options" :value="value" @optionClick="optionClick"></Select>
      <!-- Layout -->
      <Layout ref="layout" :value="selectValue"></Layout>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import Select from "components/Select/Select";
import Layout from "components/Layout/Layout";

import { options } from 'util/const'

export default {
  name: "GeneralLayout",
  components: {
    Box,
    Select,
    Layout
  },
  data() {
    return {
      options: options,
      value: "24",
      selectValue: null,
      cols: null
    };
  },
  computed: {},
  created() {
    // console.log("哈哈哈");
    this.selectValue = this.value;
  },
  methods: {
    // Select组件传递过来的点击选项值
    optionClick(value) {
      this.selectValue = value;
    }
  }
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  margin: 30px 0 30px;
}
.bg-purple-dark {
  background: skyblue;
}

.grid-content {
  border-radius: 12px;
  min-height: 36px;
}
</style>
