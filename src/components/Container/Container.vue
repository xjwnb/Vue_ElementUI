<template>
  <el-container class="home-container">
    <el-header>
      <img :src="imgSrc" alt />
      <el-button type="info">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 侧边选项 -->
        <NavMenu :menus="menus"></NavMenu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from "components/NavMenu/NavMenu";
import { menus } from "network/menu";

export default {
  name: "FixedStructure",
  components: {
    NavMenu
  },
  data() {
    return {
      imgSrc: require("assets/images/lf.jpg"),
      menus: []
    };
  },
  created() {
    this.getMenus("/getData");
  },
  methods: {
    //
    getMenus(url) {
      menus(url)
        .then(res => {
          // console.log(res);
          this.menus = res.data;
          // console.log(this.menus)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.home-container {
  height: 100vh;
}

.el-header {
  display: flex;
  justify-content: space-between;
  background-color: skyblue;
}

.el-header img {
  width: 60px;
  height: 60px;
}

.el-aside {
  background-color: skyblue;
}

.el-main {
  background-color: #eee;
}
</style>
