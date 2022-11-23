<script setup lang="ts">
import LoadingCover from "./views/cover/LoadingCover.vue";
import vueLive2d from "vue-live2d";
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
  <LoadingCover />
  <Music />
  <router-view />
  <vueLive2d class="live2d" />
</template>

<style lang="less" scoped>
.live2d {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
