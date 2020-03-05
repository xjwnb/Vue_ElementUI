<template>
  <div id="select">
    <el-select v-model="valueNew" placeholder="请选择" @change="optionClickHandle(valueNew)">
      <el-option v-for="item in option" 
                :key="item.value" 
                :label="item.label" 
                :value="item.value"
                >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      option: this.options,
      valueNew: this.value
    }
  },
  created() {
  },
  methods: {
    optionClickHandle(value) {
      this.$emit('optionClick', value)
      // console.log(value)
    }
  },
};
</script>

<style lang="less" scoped>
</style>
