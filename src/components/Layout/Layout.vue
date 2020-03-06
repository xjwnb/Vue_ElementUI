<template>
  <div id="layout">
    <el-row :gutter="gutter">
      <el-col :span="parseInt(selectValue)" :key="index" v-for="(item, index) in cols">
        <div class="grid-content bg-purple-dark"><h3>{{selectValue}}</h3></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {
    value: {
      type: String,
      default() {
        return ''
      }
    },
    inputData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectValue: null,
      cols: null,
      gutter: null
    };
  },
  computed: {
  },
  watch: {
    // 监控传递过来的 value ,并处理
    value() {
      // console.log(this.value)
      this.selectValue = this.value
      this.colCount()
    },

    // 监控传递过来的 inputData ,并处理
    inputData() {
      this.gutter = parseInt(this.inputData)
    }
  },
  created() {
    this.selectValue = this.value
    this.colCount()
  },
  updated() {

  },
  methods: {
    // 计算生成 col 的个数
    colCount() {
      this.selectValue = this.value
      this.cols = 24 / parseInt(this.selectValue);
    },

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

h3 {
  text-align: center; 
  line-height: 35px;
  color: white;
}
</style>