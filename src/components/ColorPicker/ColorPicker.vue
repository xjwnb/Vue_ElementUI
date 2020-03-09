<template>
  <div>
    <el-color-picker v-model="color2" :size="size"></el-color-picker>
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  props: {
    color1: {
      type: String,
      default: '#00FF00'
    },
    size: {
      type: String
    },
    id: {
      type: Number
    }
  },
  data() {
    return {
      color2: null
    }
  },
  watch: {
    color2() {
      let arr = [this.color2, this.id]
      this.$emit('colorChange', arr)
    }
  },
  created() {
    this.color2 = this.color1
  },
}
</script>

<style lang="less" scoped>

</style>