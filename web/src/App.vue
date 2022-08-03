<script setup>
import { isLoading } from "@/requset/server/getServer";
const body = document.getElementsByTagName("body")[0];
const colors = [
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
];
document.addEventListener("mouseup", (event) => {
  const el = document.createElement("i");
  el.setAttribute("class", "iconfont icon-aixin word");
  el.style.left = event.clientX + "px";
  el.style.top = event.clientY + "px";
  el.style.color = colors[Math.floor(Math.random() * 7)];
  body.appendChild(el);
  setTimeout(() => {
    body.removeChild(el);
  }, 1000);
});
</script>
<template>
  <div class="loadingCover" v-show="isLoading">
    <div class="loading"></div>
    <div style="color: white">正努力为您加载...</div>
  </div>
  <Music></Music>
  <router-view />
</template>

<style lang="less">
.loadingCover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
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
.word {
  position: fixed;
  z-index: 999;
  animation: up 1s ease;
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
