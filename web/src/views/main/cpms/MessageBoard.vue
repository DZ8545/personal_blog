<template>
  <div class="messageBoard">
    <div class="title">
      <div>
        <h1>留言板</h1>
      </div>
      <div>
        <!--        <p>海内存知己，天涯共比邻</p>-->
        <p>畅所欲言</p>
      </div>
    </div>
    <div class="box1">
      <p
        style="
          text-indent: 2em;
          color: rgba(0, 0, 0, 0.5);
          margin-bottom: 60px;
          font-size: 20px;
        "
      >
        欢迎来到古月小站的留言板，如果有什么bug或是有什么疑问都可以在这里留言，
        我会在看到的第一时间回复。亦或是有什么烦恼也可以在这里倾诉，
        我会是一个好的聆听者。当然如果你有什么喜悦或是想分享的东西，我也不是不能听听（傲娇）!
      </p>
      <comment></comment>
    </div>
    <div class="toTop">
      <i
        class="iconfont icon-huidaodingbu"
        style="font-size: 30px; color: #feb8b0"
        @click="toTop"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import Comment from "@/components/comment/Comment.vue";
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<style scoped lang="less">
.messageBoard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .toTop {
    position: fixed;
    right: 80px;
    bottom: 100px;
  }
  .box1 {
    width: 700px;
  }
  .title {
    text-align: center;
    margin: 20px;
    padding-bottom: 20px;
    padding-left: 150px;
    padding-right: 150px;
    border-bottom: 1px rgba(255, 0, 0, 0.4) solid;
    p {
      margin-top: 10px;
      margin-left: 300px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
