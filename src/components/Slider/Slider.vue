<template>
  <div id="slider">
    <div class="block">
      <span class="demonstration">{{title}}</span>
      <el-slider v-model="value1" @input="sliderHandle(value1)"></el-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    title: {
      type: String
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  data() {
    return {
      value1: 24
    }
  },
  activated() {
    this.value1 = 24
  },
  methods: {
    sliderHandle(value) {
      this.$emit('sliderChange', value)
    }
  },
};
</script>

<style lang="less" scoped>
.block {
  width: 50%;
}
</style>