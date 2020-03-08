<template>
  <div id="rect-color">
    <el-button
      class="btn"
      plain
      :style="{backgroundImage: color, backgroundColor: color, 
      border: borderColor, 
      width: widt, height: heigh}"
      @click="ClickHandle"
      data-clipboard-action="copy"
      :data-clipboard-text="color"
    >
    </el-button>
  </div>
</template>

<script>
export default {
  name: "RectColor",
  props: {
    color: {
      type: String
    },
    borderColor: {
      type: String
    },
    widt: {
      type: String
    },
    heigh: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    ClickHandle() {
      let clipboard = new this.clipboard(".btn");
      clipboard.on("success", () => {
        this.$notify({
          message: "你所选中的颜色已经被复制到粘贴板上",
          position: "bottom-right"
        });
      });

      clipboard.on("err", () => {
        this.$notify({
          message: "复制失败",
          position: "bottom-right"
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.btn {
  width: 66px;
  height: 33px;
}
</style>