<template>
  <div id="color-picker-rect">
    <Box class="box">
      <h3>主要颜色</h3>
      <div :key="index" v-for="(item, index) in colors" class="colorChuck">
        <RectColor class="rect-color" :color="item.color" :border-color="item.borderColor"></RectColor>
        <div class="font">{{item.colorName}}</div>
      </div>
    </Box>
    <Box class="box">
      <h3>其他颜色</h3>
      <div :key="index" v-for="(item, index) in colorTypeOne" class="colorChuck">
        <RectColor class="rect-color" :color="item.color" :border-color="item.borderColor"></RectColor>
        <div class="font">{{item.colorName}}</div>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import RectColor from "components/RectColor/RectColor";

export default {
  name: "ColorPickRect",
  components: {
    Box,
    RectColor
  },
  data() {
    return {
      colors: [
        {
          color: "red",
          colorName: "红色",
          borderColor: "1px solid red"
        },
        {
          color: "green",
          colorName: "绿色",
          borderColor: "1px solid green"
        },
        {
          color: "blue",
          colorName: "蓝色",
          borderColor: "1px solid blue"
        },
        {
          color: "#FFFFFF",
          colorName: "Default",
          borderColor: "1px solid #DCDFE6"
        },
        {
          color: "#66B1FF",
          colorName: "Primary",
          borderColor: "1px solid #66B1FF"
        },
        {
          color: "#67C23A",
          colorName: "Success",
          borderColor: "1px solid #67C23A"
        },
        {
          color: "#95989D",
          colorName: "Info",
          borderColor: "1px solid #95989D"
        },
        {
          color: "#E6A23C",
          colorName: "Warning",
          borderColor: "1px solid #E6A23C"
        },
        {
          color: "#F78888",
          colorName: "Danger",
          borderColor: "1px solid #F78888"
        }
      ],
      colorTypeOne: [
        {
          color: "#36E9F6",
          colorName: "天空蓝",
          borderColor: "1px solid #36E9F6"
        },
        {
          color: "#ED34B8",
          colorName: "粉红色",
          borderColor: "1px solid #ED34B8"
        },
        {
          color: "#8F4ED6",
          colorName: "紫色",
          borderColor: "1px solid #8F4ED6"
        },
        {
          color: "#D40D52",
          colorName: "宝石红",
          borderColor: "1px solid #D40D52"
        },
        {
          color: "#1B9A7C",
          colorName: "绿色",
          borderColor: "1px solid #1B9A7C"
        },
        {
          color: "#D3FF00",
          colorName: "黄色",
          borderColor: "1px solid #D3FF00"
        },
        {
          color: "#81513E",
          colorName: "棕色",
          borderColor: "1px solid #81513E"
        },
        {
          color: "#BABFC2",
          colorName: "灰色",
          borderColor: "1px solid #BABFC2"
        },
        {
          color: "#000000",
          colorName: "黑色",
          borderColor: "1px solid #000000"
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

#color-picker-rect {
  // width: 100%;
  display: flex;
}

div {
  display: inline-block;
}

.rect-color {
  margin-bottom: 10px;
}

.box {
  // display: flex;
  // align-content: center;
  flex: 1;
  &:nth-child(2) {
    margin-left: 20px;
  }
  &:nth-child(3) {
    margin-left: 20px;
  }
  .colorChuck {
    display: flex;
    .font {
      line-height: 33px;
      margin-left: 1em;
    }
  }
}

font.style {
  vertical-align: inherit;
}
</style>