<template>
  <div class="card">
    <div class="imgAndDescription" @click="jump">
      <div class="img">
        <el-image
          lazy
          fit="cover"
          class="elImg"
          :src="'http://www.dmoe.cc/random.php?time=' + Math.random() * 10000"
          alt=""
        />
        <!--        <img src="https://tenapi.cn/acg">-->

        <!--        樱花：http://www.dmoe.cc/random.php-->
        <!--        一叶三秋：https://api.ghser.com/random/api.php-->
      </div>
      <div class="description">
        <span>{{ item.description }}</span>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <span @click="jump">{{ item.title }}</span>
      </div>
      <div class="other">
        <div class="date">
          <img src="../../assets/img/date.svg" alt="" class="date" />
          {{ new Date(item.time).toLocaleDateString() }}
        </div>
        <div class="look">
          <img src="../../assets/img/look.svg" alt="" class="look" />
          {{ item.NumberOfVisitors }}
        </div>
        <div class="taol">
          <img src="../../assets/img/taol.svg" alt="" class="taol" />
          {{ numberOfDiscussions }}
        </div>
      </div>
      <el-tooltip :content="type" placement="top" effect="light">
        <div class="category">
          <i
            class="iconfont icon-biji"
            v-if="item.kind === '6242b4f997ca3f92fa75203a'"
            @click="$router.push('/main/informalEssay')"
          ></i>
          <i
            class="iconfont icon-zongjie"
            v-if="item.kind === '6242b4eb97ca3f92fa752036'"
            @click="$router.push('/main/knowledgeSummary')"
          ></i>
          <i
            class="iconfont icon-jilu"
            v-if="item.kind === '624305226f1943d5f6f9dfc9'"
            @click="$router.push('/main/studyNote')"
          ></i>
          <i
            class="iconfont icon-fenxiang"
            v-if="item.kind === '6242b4f497ca3f92fa752038'"
            @click="$router.push('/main/codeSharing')"
          ></i>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import getServer from "@/requset/server/getServer";
// eslint-disable-next-line no-undef
const props = defineProps(["item"]);
const router = useRouter();

const numberOfDiscussions = ref(0);
const type = ref("");
function jump() {
  router.push(`/main/articles/${props.item._id}`);
  getServer.put(`/articlesChangeLook/${props.item._id}`, {
    NumberOfVisitors: props.item.NumberOfVisitors + 1,
  });
}
async function getNumber() {
  const res = await getServer.get(`/commentsNumber/${props.item._id}`);
  numberOfDiscussions.value = res.data;
}
getNumber();
switch (props.item.kind) {
  case "6242b4f997ca3f92fa75203a":
    type.value = "随笔";
    break;
  case "6242b4eb97ca3f92fa752036":
    type.value = "知识总结";
    break;
  case "624305226f1943d5f6f9dfc9":
    type.value = "学习笔记";
    break;
  case "6242b4f497ca3f92fa752038":
    type.value = "代码分享";
    break;
  default:
    break;
}
</script>

<style scoped lang="less">
.card {
  width: 400px;
  height: 350px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  .imgAndDescription {
    height: 75%;
    width: 100%;
    position: relative;
    .img {
      width: 100%;
      height: 100%;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      overflow: hidden;
      position: absolute;
      .elImg {
        width: 100%;
        height: 100%;
      }
    }
    .description {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      span {
        color: white;
        font-size: 20px;
        font-weight: bold;
        opacity: 0;
      }
    }
  }
  .imgAndDescription:hover .img .elImg {
    transform: scale(1.2);
    transition: all 1s linear;
  }
  .imgAndDescription:hover .description {
    cursor: url(../../assets/cursor/keHand.cur), default;
    background-color: rgba(0, 0, 0, 0.5);
    span {
      opacity: 1;
    }
  }
  .content {
    width: 100%;
    height: 25%;
    background-color: #f3eeee;
    position: relative;
    color: rgba(0, 0, 0, 0.5);
    .title {
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
    }
    .title span:hover {
      color: #d96354;
      cursor: url(../../assets/cursor/keHand.cur), default;
    }
    .other {
      position: absolute;
      width: 70%;
      bottom: 5px;
      left: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .look {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .taol {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .look img {
        width: 25px;
        height: 25px;
        margin-right: 4px;
      }
      .taol img {
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }
    }
    .category {
      position: absolute;
      width: 50px;
      height: 50px;
      right: 15px;
      bottom: 10px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 25px;
        cursor: url(../../assets/cursor/keHand.cur), default;
      }
    }
  }
}
.card:hover {
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.5s linear;
}
</style>
