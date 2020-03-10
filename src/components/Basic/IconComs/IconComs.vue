<template>
  <div class="iconComs">
    <Box class="box">
      <h3>Icon 图标</h3>
      <Slider :title="title" @sliderChange="sliderChange"></Slider>
      <div class="content" :key="item.id" v-for="item in icons">
        <Ic :class="item.iconClass" :size="sizeNew+'px'"></Ic>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import Slider from 'components/Slider/Slider'
import Ic from "components/Icon/Icon";

import { icons } from 'util/const'

export default {
  name: "IconComs",
  components: {
    Box,
    Slider,
    Ic
  },
  data() {
    return {
      title: '改变 Icon 大小',
      icons: null,
      valueNew: null,
      sizeNew: null
    };
  },
  created() {
    this.icons = icons
  },
  methods: {
    sliderChange(value) {
      this.valueNew = value
      this.sizeNew = 30 + this.valueNew
    }
  },
};
</script>

<style lang="less" scoped>
h3 {
  margin-bottom: 10px;
}
.box {
  width: 100%;
}

.iconComs {
  display: flex;
  flex-wrap: wrap;
  .content {
    display: inline-block;
    width: 25%;
    text-align: center;
  }
}
</style>