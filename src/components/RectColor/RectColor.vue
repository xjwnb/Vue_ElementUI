<template>
  <div id="rect-color">
    <el-button
      class="btn"
      plain
      :style="{backgroundColor: color, border: borderColor}"
      @click="ClickHandle"
      data-clipboard-action="copy"
      :data-clipboard-text="color"
    >
      <!-- <div class="rect" :style="{backgroundColor: color, border: borderColor}" @click="ClickHandle"></div> -->
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
    }
  },
  data() {
    return {
      notifyPromise: Promise.resolve()
    };
  },
  methods: {
     ClickHandle() {
      let clipboard = new this.clipboard(".btn");
      console.log("哈哈哈..");
this.notifyPromise = this.notifyPromise.then(() => {
        clipboard.on("success", () => {
          console.log("hhh");

           this.$notify({
            message: "你所选中的颜色已经被复制到粘贴板上",
            position: "bottom-right"
          });
        });
        })

      console.log("哈哈哈");

      /*       clipboard.on("err", () => {
        this.$notify({
          message: "复制失败",
          position: "bottom-right"
        });
      }); */
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