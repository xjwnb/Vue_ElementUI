<template>
  <div>
    <Box>
      <h3>分页按钮</h3>
      <div id="flex">
        <Pagination id="greenPag"></Pagination>
        <Pagination id="basicPag"></Pagination>
      </div>
    </Box>
  </div>
</template>

<script>
import Box from "components/Box/Box";
import Pagination from "components/Pagination/Pagination";

export default {
  name: "PaginationButton",
  components: {
    Pagination,
    Box
  }
};
</script>



<style lang="less">
#greenPag .el-pagination {
  background-color: #67c23a;
  border-radius: 30px;
  display: inline-block;
  // color: blue;
}

#greenPag .el-pager li.active {
  color: white;
}

#greenPag .el-pagination .btn-next,
.el-pagination .btn-prev {
  // background: center center no-repeat #67C23A ;
  border-radius: 30px;
  color: red !important;
}
#greenPag .el-pager li {
  background-color: #67c23a;
}
</style>

<style scoped>
h3 {
  margin-bottom: 10px;
}


#flex {
  display: flex;
}

#basicPag {
  flex: 1;
  display: inline-block;
}

#greenPag {
  flex: 1;
}
</style>