<template class="Echarts">
  <div class="echarts">
    <Box class="box">
      <div class="content" id="main"></div>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";

export default {
  name: "Echarts",
  components: {
    Box
  },
  data() {
    return {
      orgOptions: {}
    };
  },
  mounted() {
    this.Second()
  },
  methods: {
    Second() {
      var myChart = this.$echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
  },
};
</script>


<style scoped>
.echarts {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.box {
  display: inline-block;
  height: 100%;
  width: 100%;
}

</style>