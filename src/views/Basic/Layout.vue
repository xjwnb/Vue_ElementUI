<template>
  <div>
    <GeneralLayout></GeneralLayout>
    <ColumnSpacing></ColumnSpacing>
    <MixedLayout></MixedLayout>
  </div>
</template>

<script>
import { GeneralLayout, ColumnSpacing, MixedLayout } from 'components/Basic/Layout'

export default {
  name: 'Basic',
  components: {
    GeneralLayout,
    ColumnSpacing,
    MixedLayout
  }
}
</script>

<style lang="less" scoped>

</style>
