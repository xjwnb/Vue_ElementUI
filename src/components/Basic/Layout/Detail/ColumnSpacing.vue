<template>
  <div id="column-spacing">
    <input-data class="input" @inputHandle="inputHandle"></input-data>
    <Select :options="options" :value="value" @optionClick="optionClick"></Select>
    <!-- Layout -->
    <el-row>
      <el-col :span="parseInt(selectValue)" :key="index" v-for="(item, index) in cols">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InputData from "components/Input/InputData";
import Select from "components/Select/Select";

export default {
  name: "ColumnSpacing",
  components: {
    InputData,
    Select
  },
  data() {
    return {
      inputData: null
    };
  },
  methods: {
    inputHandle(value) {
      console.log(value);
      this.inputData = value;
    }
  }
};
</script>

<style lang="less" scoped>
.input {
  width: 300px;
}
</style>