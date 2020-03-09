<template>
  <div id="icon-button">
    <Box>
      <h3>图标按钮</h3>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">
        上传
        <i class="el-icon-upload el-icon--right"></i>
      </el-button>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";

export default {
  name: "IconButton",
  components: {
    Box
  }
};
</script>

<style lang="less" scoped>
h3 {
  margin-bottom: 10px;
}
</style>