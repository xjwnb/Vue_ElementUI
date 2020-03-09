<template>
  <div id="size-color-picker">
    <Box>
      <h3>颜色选择器尺寸</h3>
      <div class="content">
        <ColorPicker class="color-picker"></ColorPicker>
        <ColorPicker class="color-picker" 
                     :key="item.id" 
                     v-for="item in sizes"
                     :size="item.size">
        </ColorPicker>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import ColorPicker from "components/ColorPicker/ColorPicker";

export default {
  name: "SizeColorPicker",
  components: {
    Box,
    ColorPicker
  },
  data() {
    return {
      sizes: [
        {
          id: 1,
          size: "medium"
        },
        {
          id: 2,
          size: "small"
        },
        {
          id: 3,
          size: "mini"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
h3 {
  margin-bottom: 10px;
}

.content {
  display: flex;
  .color-picker {
    flex: 1;
    text-align: center;
  }
}
</style>