<template>
  <div id="NavMenu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="skyblue"
      text-color="#fff"
      active-text-color="blue"
      unique-opened
      router
    >
      <el-submenu :index="menu.id.toString()" :key="menu.id" v-for="menu in menus">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{menu.authName}}</span>
        </template>
        <el-menu-item :index="child.path" :key="child.id" v-for="child in menu.children">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{child.authName}}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    menus: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.el-menu {
  border-right: 0;
}
.el-submenu__title:hover{
  background-color: blue !important;
}

.el-menu-item:hover {
  background-color: blue !important;
}

#NavMenu {
  width: 100%;
}
</style>
