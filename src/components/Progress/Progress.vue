<template>
  <div id="progress">
    <el-progress :type="type" :text-inside="textInside" :color="colors" :stroke-width="strokeWidth" :percentage="newPercentage" :status="status"></el-progress>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    status: {
      type: String
    },
    percentage: {
      type: Number,
      default() {
        return 0
      }
    },
    textInside: {
      type: Boolean
    },
    strokeWidth: {
      type: Number
    },
    type: {
      type: String
    },
    colors: {
      type: Array
    }
  },
  data() {
    return {
      newPercentage: 0
    }
  },
  watch: {
    percentage() {
      this.newPercentage = this.percentage
    }
  },
  deactivated() {
/*     this.newPercentage = 0
    console.log(this.percentage) */
  },
}
</script>

<style lang="less" scoped>
</style>