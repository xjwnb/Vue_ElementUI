<template>
  <div id="size-button">
    <Box>
      <h3>`尺寸按钮</h3>
      <el-button class="primary">默认按钮</el-button>
      <el-button class="success" size="medium">中等按钮</el-button>
      <el-button class="info" size="small">小型按钮</el-button>
      <el-button class="warning" size="mini">超小按钮</el-button>

    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";

export default {
  name: "SizeButton",
  components: {
    Box
  }
};
</script>

<style lang="less" scoped>
h3 {
  margin-bottom: 10px;
}
.primary {
  color: white;
  background-image: linear-gradient(to right, #62a6e6, blue);
  border: none;
}

.success {
  color: white;
  background-image: linear-gradient(to right, #75e37a, green);
  border: none;
}

.info {
  color: white;
  background-image: linear-gradient(to right, #c0c4cc, #606266);
  border: none;
}

.warning {
  color: white;
  background-image: linear-gradient(to right, rgb(214, 171, 106), orange);
  border: none;
}

.danger {
  color: white;
  background-image: linear-gradient(to right, #f56c6c, red);
  border: none;
}
</style>