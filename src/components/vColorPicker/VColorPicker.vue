<template>
  <div>
    <colorPicker v-model="color2"></colorPicker>
  </div>
</template>

<script>
export default {
  name: "VColorPicker",
  props: {
    color1: {
      type: String
    },
    id: {
      type: Number
    }
  },
  data() {
    return {
      // color: "#00FF00"
      color2: null
    }
  },
  watch: {
    color2() {
      let arr = [this.id, this.color2]
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