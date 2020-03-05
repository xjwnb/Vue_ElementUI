<template>
  <div id="input">
    <el-input v-model="inputdata" 
              placeholder="请输入内容" 
              @blur="inputHandle"
              >
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
/*     input: {
      type: String
    } */
  },
  data() {
    return {
      inputdata: null
    }
  },
  methods: {
    inputHandle() {
      this.$emit('inputHandle', this.inputdata)
    },

  },
}
</script>

<style lang="less" scoped>

</style>