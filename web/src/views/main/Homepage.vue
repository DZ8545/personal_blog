<template>
  <div class="homePage scrollY" @scroll="scrollHandle" ref="homePageRef">
    <cover />
    <Panel />
    <Home />
    <i class="iconfont icon-huidaodingbu" @click="toTop" title="回到顶部" />
  </div>
</template>

<script setup lang="ts">
import Home from "@/views/main/cpms/Home.vue";
import Panel from "@/components/panel";
import Cover from "@/views/cover/Cover";
import _ from "lodash";
import { ref } from "vue";

const homePageRef = ref();

const scrollHandle = _.debounce((e) => {
  const { scrollTop, clientHeight } = e.target;
  if (scrollTop > 0 && scrollTop < clientHeight) {
    e.target.scrollTo({
      top: clientHeight,
      behavior: "smooth",
    });
  }
}, 500);
function toTop() {
  homePageRef.value.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<style scoped lang="less">
.homePage {
  overflow-y: scroll;
  height: 100vh;
  .icon-huidaodingbu {
    position: fixed;
    right: 80px;
    bottom: 100px;
    font-size: 30px;
    color: #feb8b0;
    cursor: url(@/assets/cursor/keHand.cur), default !important;
  }
  @media screen and (max-width: 900px) {
    .icon-huidaodingbu {
      right: 10px;
    }
  }
}
</style>
