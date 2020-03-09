<template>
  <div id="color">
    <ColorCopy></ColorCopy>
    <LinearColor></LinearColor> 
  </div>
</template>

<script>
import ColorCopy from 'components/Basic/Color/ColorCopy'
import LinearColor from 'components/Basic/Color/LinearColor'

export default {
  name: 'Color',
  components: {
    ColorCopy,
    LinearColor
  }
}
</script>

