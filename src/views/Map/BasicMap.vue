<template>
  <baidu-map
    class="map"
    :center="center"
    :zoom="zoom"
    @ready="handler"
    style="height:1080px"
    @click="getClickInfo"
    :scroll-wheel-zoom="true"
  ></baidu-map>
</template>

<script>
export default {
  name: "BasicMap",

  data() {
    return {
      center: { lng: 116.4, lat: 39.915 },
      zoom: 13
    };
  },
  methods: {
    handler({ BMap, map }) {
      var point = new BMap.Point(116.4, 39.915);
      map.centerAndZoom(point, 13);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
      var circle = new BMap.Circle(point, 6, {
        strokeColor: "Red",
        strokeWeight: 6,
        strokeOpacity: 1,
        Color: "Red",
        fillColor: "#f03"
      });
      map.addOverlay(circle);
    },
    getClickInfo(e) {
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    }
  }
};
</script>



<style lang="less">
.el-main {
  width: 100%;
  height: 50%;
  overflow: hidden;
  .map {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
.BMap_mask {
  width: 100%;
  height: 50%;
}
</style> 

<style lang="less" scoped>
/* .map {
  width: 100%;
  height: 50%;
} */
</style> 