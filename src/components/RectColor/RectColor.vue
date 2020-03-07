<template>
  <div id="rect-color">
    <div class="rect" @click="ClickHandle"></div>
  </div>
</template>

<script>
export default {
  name: "RectColor",
  methods: {
    ClickHandle() {
      console.log('点击了长方形')
    }
  },
};
</script>

<style lang="less" scoped>
.rect {
  width: 66px;
  height: 33px;
  border: 1px solid greenyellow;
  cursor: pointer;
}
</style>