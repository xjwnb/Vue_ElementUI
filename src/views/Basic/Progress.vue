<template>
  <div>
    <LinearProgress></LinearProgress>
    <PercentageIn></PercentageIn>
    <CircleProgress></CircleProgress>
  </div>
</template>

<script>
import LinearProgress from 'components/Basic/Progress/LinearProgress'
import PercentageIn from 'components/Basic/Progress/PercentageIn'
import CircleProgress from 'components/Basic/Progress/CircleProgress'

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