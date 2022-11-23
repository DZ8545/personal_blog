<template>
  <div class="main scrollY" ref="mainRef">
    <Panel />
    <router-view />
    <i
      class="iconfont icon-huidaodingbu"
      style="font-size: 30px; color: #feb8b0"
      @click="toTop"
    />
  </div>
</template>

<script setup lang="ts">
import Panel from "@/components/panel";
import { ref } from "vue";

const mainRef = ref();
function toTop() {
  mainRef.value?.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<style scoped lang="less">
.main {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  .icon-huidaodingbu {
    position: fixed;
    right: 80px;
    bottom: 100px;
    cursor: url(@/assets/cursor/keHand.cur), default !important;
  }
  @media screen and (max-width: 900px) {
    .icon-huidaodingbu {
      right: 5px;
      bottom: 50px;
    }
  }
}
</style>
