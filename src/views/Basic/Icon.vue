<template>
  <div id="icon">
    <IconComs></IconComs>
  </div>
</template>

<script>
import IconComs from 'components/Basic/IconComs/IconComs'

export default {
  name: "Icon",
  components: {
    IconComs
  },
  data() {
    return {
      data: 'el-icon-edit'
    }
  },
}
</script>

<style lang="less" scoped>

</style>