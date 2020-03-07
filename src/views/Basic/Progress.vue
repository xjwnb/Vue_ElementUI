<template>
  <div>
    <LinearProgress></LinearProgress>
    <PercentageIn></PercentageIn>
    <CircleProgress></CircleProgress>
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