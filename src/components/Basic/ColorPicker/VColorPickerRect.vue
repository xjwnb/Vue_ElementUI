<template>
  <div>
    <Box>
      <h3>vColorPicker插件</h3>
      <div class="content">
        <div class="flex" :key="item.id" v-for="item in colors">
          <RectColor class="rect-color" :color="item.color"></RectColor>
          <VColorPicker :color1="item.color" :id="item.id" @colorChange="colorChange"></VColorPicker>
        </div>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import RectColor from "components/RectColor/RectColor";
import VColorPicker from "components/vColorPicker/VColorPicker";

export default {
  name: "VColorPickerRect",
  components: {
    Box,
    RectColor,
    VColorPicker
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
    // 接收颜色变化并修改 colors
    colorChange(color) {
      let index = this.colors.findIndex(item => item.id === color[0]);
      this.colors[index].color = color[1];
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
    .rect-color {
      margin-bottom: 10px;
    }
  }
}
</style>