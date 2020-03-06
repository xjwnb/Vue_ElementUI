<template>
  <div id="input">
    <el-input v-model="inputdata" 
              placeholder="更改间距"
              type="number"
              maxlength="3"
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
.el-input {
  margin-bottom: 10px;
}
</style>