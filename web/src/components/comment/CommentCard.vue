<template>
  <div class="commentCard">
    <div class="headImg">
      <img :src="item.headImg" alt="" />
    </div>
    <div class="other">
      <div class="name">
        <span>{{ item.name }}</span>
      </div>
      <div class="time">
        <span>{{ item.time }}</span>
      </div>
      <div class="remark">
        <span>{{ item.remark }}</span>
      </div>
      <div class="reply" v-if="isReplyExistence">
        <button class="replyBtn" @click="replyClick">回复</button>
      </div>

      <release
        :name="'@' + item.name"
        v-if="isExistence"
        @cancel="cancel"
        :flag="true"
      ></release>
      <comment-card
        v-for="j of item.children"
        :key="j"
        :item="j"
      ></comment-card>
      <slot name="line"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Release from "@/components/comment/Release";
// eslint-disable-next-line no-undef
defineProps(["item"]);
const isExistence = ref(false);
const isReplyExistence = ref(true);
function cancel() {
  isExistence.value = false;
  isReplyExistence.value = true;
}
function replyClick() {
  isExistence.value = !isExistence.value;
  isReplyExistence.value = false;
}
</script>

<style scoped lang="less">
.commentCard {
  width: 600px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  .headImg {
    width: 50px;
    margin-right: 20px;
    img {
      width: 50px;
      border-radius: 50%;
    }
  }
  .other {
    width: 100%;
    .name {
      font-weight: bolder;
      color: rgba(0, 0, 0, 0.6);
    }
    .time {
      margin-top: 8px;
      font-size: 13px;
      color: rgba(0, 0, 0, 0.5);
    }
    .remark {
      width: 100%;
      margin-top: 8px;
      overflow-y: auto;
    }
    .reply {
      display: flex;
      flex-direction: row-reverse;
      .replyBtn {
        background-color: white;
        color: rgba(0, 0, 0, 0.5);
        border-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
