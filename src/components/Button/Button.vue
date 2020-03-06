<template>
  <div id="button">
    <el-button :key="btn.id" 
                v-for="btn in buttonData"
                :type="btn.btntype">
      {{btn.name}}
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      // btnData: null
    }
  },
  watch: {
/*     props() {
      // this.initBtn()
    } */
  },
  created() {
    // this.initBtn()
  },
  methods: {
/*     initBtn() {
      this.btnData = this.buttonData
    } */
  },
}
</script>

<style lang="less" scoped>

</style>