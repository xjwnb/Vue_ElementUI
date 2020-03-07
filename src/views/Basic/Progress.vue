<template>
  <div>
    <LinearProgress></LinearProgress>
    <PercentageIn></PercentageIn>
    <CircleProgress></CircleProgress>
    <h1>进度条哈哈哈</h1>
  </div>
</template>

<script>
import LinearProgress from 'components/Basic/Layout/Progress/LinearProgress'
import PercentageIn from 'components/Basic/Layout/Progress/PercentageIn'
import CircleProgress from 'components/Basic/Layout/Progress/CircleProgress'

export default {
  name: 'Progress',
  components: {
    LinearProgress,
    PercentageIn,
    CircleProgress
  }
}
</script>

<style lang="scss" scoped>

</style>