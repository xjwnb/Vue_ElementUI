<template>
  <div id="column-spacing">
    <Box>
      <h3>分栏间隔</h3>
      <input-data class="input" @inputHandle="inputHandle"></input-data>
      <Select :options="options" :value="value" @optionClick="optionClick"></Select>
      <!-- Layout -->
      <Layout :value="selectValue" :inputData="inputData"></Layout>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import InputData from "components/Input/InputData";
import Select from "components/Select/Select";
import Layout from "components/Layout/Layout";

import { options } from "util/const";

export default {
  name: "ColumnSpacing",
  components: {
    Box,
    InputData,
    Select,
    Layout
  },
  data() {
    return {
      inputData: null,
      options: options,
      value: "24",
      selectValue: null
    };
  },
  created() {
    this.selectValue = this.value
  },
  methods: {
    inputHandle(value) {
      // console.log(value);
      this.inputData = value;
    },
    optionClick(value) {
      this.selectValue = value;
    }
  }
};
</script>

<style lang="less" scoped>
.input {
  width: 222px;
}

h3 {
  margin-bottom: 10px;
}
</style>