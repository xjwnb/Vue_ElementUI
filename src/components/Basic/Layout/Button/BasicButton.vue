<template>
  <div id="basic-button">
    <Box>
      <h3>主要按钮</h3>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <!--       <el-row>
        <el-button>默认按钮</el-button>
        <Btn :buttonData="buttonData"></Btn>
      </el-row>-->

      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
// import Btn from "components/Button/Button";
import { getBtnType } from "network/ButtonType";

export default {
  name: "BasicButton",
  components: {
    Box,
    // Btn
  },
  data() {
    return {
      buttonData: null
    };
  },
  created() {
    this.getButtonData("/getButtonType");
  },
  methods: {
    getButtonData(url) {
      getBtnType(url).then(res => {
        // console.log(res.buttonType)
        this.buttonData = res.buttonType;
      });
    }
  }
};
</script>

<style lang="less" scoped>
h3 {
  margin-bottom: 10px;
}

.el-row {
  margin-bottom: 20px;
}



</style>