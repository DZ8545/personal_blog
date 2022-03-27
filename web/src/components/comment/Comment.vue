<template>
  <div class="comment">
    <div class="title">
      <span>发表评论</span>
    </div>
    <release></release>
    <div class="output">
      <comment-card
        v-for="item of data"
        :key="item"
        class="commentCard"
        :item="item"
      >
        <template v-slot:line>
          <hr />
        </template>
      </comment-card>
    </div>
  </div>
</template>

<script setup>
import CommentCard from "./CommentCard.vue";
import { data } from "./data.js";
import Release from "@/components/comment/Release";
</script>

<style scoped lang="less">
.comment {
  margin-top: 20px;
  .title {
    span {
      border-left: 3px red solid;
      padding: 6px;
      font-size: 18px;
      font-weight: bolder;
    }
  }
}
hr {
  color: rgba(0, 0, 0, 0.1);
}
</style>
