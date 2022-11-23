<template>
  <div class="loadingCover" v-show="isLoading">
    <div class="loading" />
    <div style="color: white">正努力为您加载...</div>
  </div>
</template>

<script setup lang="ts">
import { isLoading } from "@/requset/server/getServer";
</script>

<style scoped lang="less">
.loadingCover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  .loading {
    width: 30px;
    height: 30px;
    margin-bottom: 15px;
    border-radius: 50%;
    border-bottom: transparent;
    border-top: #feb8b0 1px solid;
    border-left: transparent;
    border-right: #feb8b0 1px solid;
    animation: loading-rotate 0.3s linear infinite;
  }
  @keyframes loading-rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

@keyframes up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  20% {
    transform: translateX(-10px);
  }
  60% {
    transform: translateX(20px);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px);
  }
}
</style>
