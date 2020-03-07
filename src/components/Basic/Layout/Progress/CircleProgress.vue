<template>
  <div id="linear-progress">
    <Box>
      <h3>环形进度条</h3>
      <div class="fixBox">
        <Progress class="progress" :type="circleType" :percentage="percentage"></Progress>
        <Progress
          class="progress"
          :type="circleType"
          :percentage="successPercentage"
          :status="success"
        ></Progress>
        <Progress
          class="progress"
          :type="circleType"
          :percentage="warningPercentage"
          :status="warning"
        ></Progress>
        <Progress class="progress" :type="circleType" :percentage="percentage" :status="exception"></Progress>
      </div>
      <div class="fixBox">
        <Progress class="dashBoard" :type="dashboardType" :colors="colors" :percentage="percentage"></Progress>
        <Progress class="dashBoard" :type="dashboardType" :colors="colors" :percentage="successPercentage"></Progress>
        <Progress class="dashBoard" :type="dashboardType" :colors="colors" :percentage="warningPercentage"></Progress>
        <Progress class="dashBoard" :type="dashboardType" :colors="colors" :percentage="fullPercentage"></Progress>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import Progress from "components/Progress/Progress";

export default {
  name: "CircleProgress",
  components: {
    Progress,
    Box
  },
  data() {
    return {
      circleType: "circle",
      dashboardType: "dashboard",
      success: "success",
      warning: "warning",
      exception: "exception",
      percentage: 0,
      successPercentage: 0,
      warningPercentage: 0,
      fullPercentage: 0,
      colors: [
          {color: '#f56c6c', percentage: 60},
          {color: '#e6a23c', percentage: 70},
          {color: '#5cb87a', percentage: 80},
          {color: '#248dfa', percentage: 90},
          {color: '#6f7ad3', percentage: 100}
      ]
    };
  },
  created() {
    this.initPercentage(60, 10, 100);
    this.initSuccessPercentage(70, 10, 100);
    this.initWarningPercentage(80, 10, 100);
    this.initFullPercentage(100,10,100)
  },
  activated() {
    this.percentage = 0;
    this.initPercentage(60, 10, 100);
    this.initSuccessPercentage(70, 10, 100);
    this.initWarningPercentage(80, 10, 100);
    this.initFullPercentage(100,10,100)
  },
  deactivated() {
    this.percentage = 0;
  },
  methods: {
    // percentage自增，初始化
    initPercentage(maxNum, increaseNum, timer) {
      setInterval(() => {
        if (this.percentage !== maxNum) {
          this.percentage += increaseNum;
        } else {
          return;
        }
      }, timer);
    },
    initSuccessPercentage(maxNum, increaseNum, timer) {
      setInterval(() => {
        if (this.successPercentage !== maxNum) {
          this.successPercentage += increaseNum;
        } else {
          return;
        }
      }, timer);
    },
    initWarningPercentage(maxNum, increaseNum, timer) {
      setInterval(() => {
        if (this.warningPercentage !== maxNum) {
          this.warningPercentage += increaseNum;
        } else {
          return;
        }
      }, timer);
    },
    initFullPercentage(maxNum, increaseNum, timer) {
      setInterval(() => {
        if (this.fullPercentage !== maxNum) {
          this.fullPercentage += increaseNum;
        } else {
          return;
        }
      }, timer);
    }
  }
};
</script>


<style>
.el-progress .el-progress--circle .is-success {
  display: inline-block;
}

.el-progress-circle {
  width: 60px;
}
</style>

<style lang="less" scoped>
h3 {
  margin-bottom: 10px;
}

.fixBox {
  display: flex;
  .progress {
    flex: 1;
    text-align: center;
  }
}
</style>

