<template>
  <div id="linear-progress">
    <Box>
      <h3>条形进度条</h3>
      <Progress class="progress" :percentage="percentage"></Progress>
      <Progress class="progress" :percentage="successPercentage" :status="success"></Progress>
      <Progress class="progress" :percentage="warningPercentage" :status="warning"></Progress>
      <Progress class="progress" :percentage="percentage" :status="exception"></Progress>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import Progress from "components/Progress/Progress";
// import { initPercentage, initSuccessPercentage, initWarningPercentage} from 'util/Progress'

export default {
  name: "LinearProgress",
  components: {
    Progress,
    Box
  },
  data() {
    return {
      success: "success",
      warning: "warning",
      exception: "exception",
      percentage: 0,
      successPercentage: 0,
      warningPercentage: 0
    };
  },
  created() {
    this.initPercentage(60, 10, 100);
    this.initSuccessPercentage(70, 10, 100)
    this.initWarningPercentage(80, 10, 100)
  },
  activated() {
    this.percentage = 0;
    this.initPercentage(60, 10, 100);
    this.initSuccessPercentage(70, 10, 100)
    this.initWarningPercentage(80, 10, 100)
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
    }
  }
};
</script>

<style lang="less" scoped>
h3 {
  margin-bottom: 10px;
}

.progress {
  width: 60%;
  margin-bottom: 10px;
}
</style>