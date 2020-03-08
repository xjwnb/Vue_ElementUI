<template>
  <div id="linear-color">
    <Box>
      <h3>渐变颜色</h3>
      <RectColor class="linearcolor" :widt="wid" 
                 :heigh="heig" :key="index" 
                 v-for="(item, index) in linearColor" 
                 :color="item.bgimage"
                 :border-color="item.borderColor">
      </RectColor>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import RectColor from "components/RectColor/RectColor";

export default {
  name: "LinearColor",
  components: {
    Box,
    RectColor
  },
  data() {
    return {
      wid: "100%",
      heig: "50px",
      linearColor: [
        {
          bgimage: "linear-gradient(to right, #71FFCA, #31FF7B)",
          borderColor: "none"
        },
        {
          bgimage: "linear-gradient(to right, #3CCFFF, #359AFF)",
          borderColor: "none"
        },
        {
          bgimage: "linear-gradient(to right, #31FF7B, #487C8F)",
          borderColor: "none"
        },
        {
          bgimage: "linear-gradient(to right, #EEF6F7, #D2D8DC)",
          borderColor: "none"
        },
        {
          bgimage: "linear-gradient(to right, #FFFA35, #FFD801)",
          borderColor: "none"
        },
        {
          bgimage: "linear-gradient(to right, #FF8764, #FF5655)",
          borderColor: "none"
        },
        {
          bgimage: "linear-gradient(to right, #D7B625, #81513E)",
          borderColor: "none"
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

.linearcolor {
  margin-bottom: 10px;
}

</style>