<template>
  <div class="comment">
    <div class="title">
      <span>发表评论</span>
    </div>
    <release :parentId="''"></release>
    <div class="output">
      <comment-card
        v-for="item of $store.state.comment.commentList"
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

<script setup lang="ts">
import CommentCard from "./CommentCard.vue";
import Release from "@/components/comment/Release";

import { useStore } from "vuex";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();

const { id } = route.params;
store.dispatch("comment/getCommentList", id);
</script>

<style scoped lang="less">
.comment {
  margin-top: 20px;
  max-width: 800px;
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
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 900px) {
  .comment {
    margin-left: 10px;
    margin-top: 0;
  }
  hr {
    margin-top: 3px;
  }
}
</style>
