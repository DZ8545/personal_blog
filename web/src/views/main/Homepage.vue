<template>
  <div class="homepage">
    <cover style="z-index: 999"></cover>
    <my-main ref="_main"></my-main>
  </div>
</template>

<script setup lang="ts">
import myMain from "@/views/main/Main";
import Cover from "@/views/cover/Cover";
</script>

<style scoped lang="less">
.homepage {
  width: 100%;
  height: 100%;
}
</style>
