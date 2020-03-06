<template>
  <div>
    <BasicButton></BasicButton>
    <ColorButton></ColorButton>
    <SizeButton></SizeButton>
    <IconButton></IconButton>
    <PaginationButton></PaginationButton>
  </div>
</template>

<script>
import BasicButton from "components/Basic/Layout/Button/BasicButton";
import IconButton from "components/Basic/Layout/Button/IconButton";
import ColorButton from "components/Basic/Layout/Button/ColorButton";
import SizeButton from "components/Basic/Layout/Button/SizeButton";
import PaginationButton from "components/Basic/Layout/Button/PaginationButton";

export default {
  name: "Button",
  components: {
    BasicButton,
    IconButton,
    ColorButton,
    SizeButton,
    PaginationButton
  }
};
</script>

<style lang="less" scoped>
</style>
