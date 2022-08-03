<template>
  <div class="release">
    <div class="input">
      <div class="box1">
        <input
          type="text"
          placeholder="昵称(QQ号)"
          @blur="qqCheck"
          v-model="number"
        />
        <input type="email" placeholder="邮箱" v-model="mail" />
        <input type="url" placeholder="网址" />
        <button class="cancel" @click="$emit('cancel')" v-if="flag">X</button>
      </div>
      <div class="box2">
        <el-input
          class="elInput"
          v-model="words"
          :placeholder="name || '留下你的足迹...'"
          type="textarea"
        />
      </div>
      <div class="box4">
        <button class="submit" @click="save">提交</button>
        <div class="expression" @click="expressClick" title="表情">
          <i
            v-if="isActive_express"
            class="iconfont icon-biaoqing"
            style="color: deepskyblue"
          ></i>
          <i class="iconfont icon-biaoqing" v-else></i>
        </div>
      </div>
      <div class="box5" v-if="isActive_express">
        <div class="emotionText">
          <span v-for="item of s" :key="item" @click="words = words + item">{{
            item
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getqq from "@/requset/qq/getqq";

import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
// eslint-disable-next-line no-undef
const props = defineProps(["name", "flag", "parentId"]);
const store = useStore();
const route = useRoute();
const isActive_preview = ref(false);
const isActive_express = ref(false);
const words = ref("");
const number = ref(null);
const mail = ref("");
const s = ref([
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "🤣",
  "😂",
  "🙂",
  "🙃",
  "😉",
  "😊",
  "😇",
  "🥰",
  "😍",
  "🤩",
  "😘",
  "😗",
  "☺",
  "😚",
  "😋",
  "😛",
  "🤪",
  "😝",
  "🤑",
  "🤗",
  "🤭",
  "🤫",
  "🤔",
  "🤐",
  "🤨",
  "😐",
  "😑",
  "😶",
  "😏",
  "😒",
  "🙄",
  "😬",
  "😮",
  "🤥",
  "😌",
  "😔",
  "😪",
  "🤤",
  "🤢",
  "🤮",
  "🤧",
  "🥵",
  "🥶",
  "🥴",
  "😵",
  "😵",
  "🤯",
  "🧐",
  "😟",
  "🙁",
  "☹",
  "😮",
]);
const comment = ref({
  article: "",
  name: "",
  headImg: "",
  mail: "",
  time: "",
  remark: "",
  recipient: "",
  parent: "",
});
const expressClick = () => {
  isActive_express.value = !isActive_express.value;
  isActive_preview.value = false;
};
// eslint-disable-next-line no-undef
defineEmits(["cancel"]);
async function fetch() {
  const res = await getqq.get("/", {
    params: {
      qq: number.value,
    },
  });
  comment.value.name = res.data.name;
  comment.value.headImg = res.data.imgurl;
  comment.value.mail = res.data.mail;
  mail.value = res.data.mail;
  number.value = res.data.name;
}
function qqCheck() {
  fetch();
}

function save() {
  comment.value.parent = props.parentId || "";
  comment.value.recipient = props.name;
  comment.value.article = route.params.id;
  comment.value.time = new Date(Date.now()).toLocaleString();
  comment.value.remark = words.value;
  if (!comment.value.name || !comment.value.remark) {
    ElMessage({
      showClose: true,
      message: "请输入QQ号和内容",
      type: "error",
    });
  } else {
    store.dispatch("comment/saveComment", comment.value).then(() => {
      store.dispatch("comment/getCommentList", route.params.id);
      store.dispatch("comment/getCommentNumber", route.params.id);
    });
  }
}
</script>

<style scoped lang="less">
.release {
  .input {
    margin-top: 20px;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    .box1 {
      display: flex;
      align-items: center;
      margin-right: 10px;
      margin-left: 10px;
      position: relative;
      input {
        flex: 1;
        padding: 10px;
        border: 0;
        outline: none;
        color: rgba(0, 0, 0, 0.5);
        background-color: inherit;
        &:focus {
          border-bottom: 1px red dashed;
        }
        border-bottom: 1px black dashed;
      }
      .cancel {
        position: absolute;
        right: 2px;
        top: 5px;
        padding: 5px;
        background-color: inherit;
        color: rgba(0, 0, 0, 0.5);
      }
    }
    .box2 {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      height: 200px;
      ::v-deep .el-textarea__inner {
        outline: none !important;
        background-color: inherit;
        height: 180px;
        max-height: 200px;
      }
    }

    .box4 {
      display: flex;
      flex-direction: row-reverse;
      .expression {
        margin-top: 2px;
        i {
          font-size: 40px;
          opacity: 0.3;
        }
      }
      .expression:hover {
        .expression::after {
          content: "表情";
        }
      }
      .preview {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border: none;
        background-color: white;
        img {
          width: 100%;
        }
      }
      .submit {
        margin: 10px;
        width: 60px;
        height: 30px;
        color: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: inherit;
      }
      .submit:hover {
        color: red;
        border-color: red;
        cursor: url(../../assets/cursor/keHand.cur), default !important;
      }
    }
    .box5 {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      .emotionText {
        width: 100%;
        overflow-y: auto;
        border: rgba(0, 0, 0, 0.1) solid 1px;
      }
      .words {
        width: 570px;
        border: rgba(0, 0, 0, 0.1) solid 1px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .input {
      max-width: 400px;
      .box1 {
        display: block;
        input {
          width: 100%;
        }
      }
    }
  }
}
</style>
