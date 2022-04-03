<template>
  <div class="homepage">
    <cover></cover>
    <my-main></my-main>
  </div>
</template>

<script setup>
import myMain from "@/views/main/Main";
import Cover from "@/views/cover/Cover";
</script>

<style scoped lang="less">
.homepage {
  width: 100%;
  height: 100%;
}
</style>
