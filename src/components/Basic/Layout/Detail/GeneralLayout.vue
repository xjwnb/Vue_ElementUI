<template>
  <div id="GeneralLayout">
    <Box>
      <h3>基本布局</h3>
      <!-- 选项 -->
      <Select :options="options" :value="value" @optionClick="optionClick"></Select>
      <!-- Layout -->
      <el-row v-if="parseInt(selectValue) !== '24'">
        <el-col :span="parseInt(selectValue)" :key="index" v-for="(item, index) in cols">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import Select from "components/Select/Select";

export default {
  name: "GeneralLayout",
  components: {
    Box,
    Select
  },
  data() {
    return {
      options: [
        {
          value: "24",
          label: "1"
        },
        {
          value: "12",
          label: "2"
        },
        {
          value: "8",
          label: "3"
        },
        {
          value: "6",
          label: "4"
        },
        {
          value: "4",
          label: "6"
        },
        {
          value: "2",
          label: "12"
        },
        {
          value: "1",
          label: "24"
        }
      ],
      value: "24",
      selectValue: null,
      cols: null
    };
  },
  computed: {},
  created() {
    this.initSelectValue();
    console.log(this.cols);
  },
  methods: {
    // Select组件传递过来的点击选项值
    optionClick(value) {
      // console.log(value)
      this.selectValue = value;
      this.colCount();
    },

    // 计算生成 col 的个数
    colCount() {
      this.cols = 24 / parseInt(this.selectValue);
    },

    // 初始化 selectVlue 的值
    initSelectValue() {
      this.cols = this.value;
      console.log(this.cols);
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
