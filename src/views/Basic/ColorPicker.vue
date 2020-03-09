<template>
  <div>
    <ColorPickerRect></ColorPickerRect>
    <SizeColorPicker></SizeColorPicker>
    <VColorPickerRect></VColorPickerRect>
  </div>
</template>

<script>
import ColorPickerRect from 'components/Basic/ColorPicker/ColorPickerRect'
import SizeColorPicker from 'components/Basic/ColorPicker/SizeColorPicker'
import VColorPickerRect from 'components/Basic/ColorPicker/VColorPickerRect'

export default {
  name: "ColorPicker",
  components: {
    ColorPickerRect,
    SizeColorPicker,
    VColorPickerRect
  }
}
</script>

<style lang="less" scoped>

</style>