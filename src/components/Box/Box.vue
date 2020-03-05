<template>
  <div id="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Box"
};
</script>

<style lang="less" scoped>
#box {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgb(105, 98, 98);
}
</style>
