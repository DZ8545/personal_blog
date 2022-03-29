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
          <hr style="margin-top: 20px" />
        </template>
      </comment-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CommentCard from "./CommentCard.vue";
import Release from "@/components/comment/Release";
import getServer from "@/requset/server/getServer";
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
