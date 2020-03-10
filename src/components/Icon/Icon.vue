<template>
  <div class="content" :style="{fontSize: size}">
    <i class="icon" :class="class1" :style="{lineHeight: size}"></i>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    class1: {
      type: String
    },
    size: {
      type: String,
      default: '30px'
    }
  },
  data() {
    return {
      green: 'yellowgreen'
    }
  },
}
</script>

<style lang="less">
.content {
  margin: 10px 0px 10px;
}
</style>