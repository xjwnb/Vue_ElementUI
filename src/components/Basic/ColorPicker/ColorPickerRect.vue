<template>
  <div id="color-picker">
    <Box>
      <h3>颜色选择器</h3>
      <div class="content">
        <div class="flex" :key="item.id" v-for="item in colors">
          <RectColor class="react-color" :color="item.color"></RectColor>
          <ColorPicker
            class="color-picker"
            :color1="item.color"
            @colorChange="colorChange"
            :id="item.id"
          ></ColorPicker>
        </div>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import RectColor from "components/RectColor/RectColor";
import ColorPicker from "components/ColorPicker/ColorPicker";

export default {
  name: "ColorPickerRect",
  components: {
    Box,
    ColorPicker,
    RectColor
  },
  data() {
    return {
      colors: [
        {
          id: 1,
          color: "#FF0000"
        },
        {
          id: 2,
          color: "#00FF00"
        },
        {
          id: 3,
          color: "#0000FF"
        }
      ]
    };
  },
  methods: {
    // 修改data中的颜色
    colorChange(color) {
      let index = this.colors.findIndex(item => item.id === color[1]);
      this.colors[index].color = color[0];
    }
  }
};
</script>

<style lang="less" scoped>
h3 {
  margin-bottom: 10px;
}

.content {
  display: flex;
  .flex {
    flex: 1;
    text-align: center;
    .react-color {
      margin-bottom: 10px;
    }
  }
}
</style>