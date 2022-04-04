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
        <span v-if="item.recipient" style="color: #feb8b0">
          {{ item.recipient }}
        </span>
        <span v-if="item.recipient"> , </span>
        <span>{{ item.remark }}</span>
      </div>
      <div class="reply" v-if="isReplyExistence">
        <button class="replyBtn" @click="replyClick">回复</button>
      </div>

      <release
        :name="'@' + item.name"
        :parentId="item.parent || item._id"
        v-if="isExistence"
        @cancel="cancel"
        :flag="true"
        class="child"
      ></release>
      <template v-if="!item.parent">
        <comment-card v-for="j of children" :key="j" :item="j"></comment-card>
      </template>
      <slot name="line"></slot>
    </div>
  </div>
</template>

<script setup>
//$store.state.comment.childrenCommentList
import { ref } from "vue";
import { useStore } from "vuex";
import Release from "@/components/comment/Release";
import getServer from "@/requset/server/getServer";
// eslint-disable-next-line no-undef
const props = defineProps(["item"]);

const isExistence = ref(false);
const isReplyExistence = ref(true);
const children = ref([]);
function cancel() {
  isExistence.value = false;
  isReplyExistence.value = true;
}
function replyClick() {
  isExistence.value = !isExistence.value;
  isReplyExistence.value = false;
}
async function fetchChildren() {
  const res = await getServer.get(`/childrenComments/${props.item._id}`);
  children.value = res.data;
}
if (!props.item.parent) {
  fetchChildren();
  // store.dispatch("comment/getChildrenCommentList", props.item._id);
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
  .child {
    transform: scale(0.9) translateX(-40px);
  }
}
</style>
