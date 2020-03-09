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
import BasicButton from "components/Basic/Button/BasicButton";
import IconButton from "components/Basic/Button/IconButton";
import ColorButton from "components/Basic/Button/ColorButton";
import SizeButton from "components/Basic/Button/SizeButton";
import PaginationButton from "components/Basic/Button/PaginationButton";

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
