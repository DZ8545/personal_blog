<template>
  <div class="messageBoard">
    <div class="left">
      <el-card class="box-card">
        <div class="head">
          <img src="../../../assets/img/head.jpg" alt="" />
        </div>
        <div class="name">DZ</div>
        <div class="description">一个前端萌新</div>
        <div class="links">
          <i class="iconfont icon-github-fill"></i>
          <i class="iconfont icon-bilibili-line"></i>
          <i class="iconfont icon-weixin"></i>
          <i class="iconfont icon-music"></i>
        </div>
        <div style="margin-top: 10px">技术栈:</div>
      </el-card>
    </div>
    <div class="right">
      <div class="title">
        <div style="width: 400px">
          <h1>关于</h1>
        </div>
      </div>
      <div class="body" v-html="text"></div>
      <div class="box1">
        <comment></comment>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getServer from "@/requset/server/getServer";
import Comment from "@/components/comment/Comment.vue";
import { marked } from "marked";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;
const text = ref(null);
const store = useStore();
const article = ref([]);
const numberOfDiscussions = ref(0);
async function fetch() {
  const res = await getServer.get(`/article/${id}`);
  article.value = res.data;
}
fetch().then((res) => {
  text.value = marked(article.value.body || "", {
    sanitize: true,
  });
});
</script>

<style scoped lang="less">
.messageBoard {
  display: flex;
  width: 100%;
  height: 100%;
  .right {
    margin-left: 50px;
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .box1 {
      width: 700px;
      margin-bottom: 30px;
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
    ::v-deep .body {
      p {
        margin: 10px;
        text-indent: 2em;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.7);
      }
      h1 {
        padding: 5px;
        font-size: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      h1::before {
        content: "#";
        font-size: 20px;
        color: red;
      }
    }
  }
  .left {
    width: 250px;
    height: 100%;
    margin-left: 150px;
    margin-top: 80px;
    .box-card {
      width: 100%;
      height: 400px;
      .head {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 50%;
        border: 1px rgba(0, 0, 0, 0.5) solid;
        img {
          width: 80px;
          height: 80px;
        }
      }
      .head:hover {
        transform: rotate(360deg);
        transition: all 1s ease;
      }
      .name {
        margin-top: 10px;
        text-align: center;
        width: 100%;
        font-size: 20px;
        font-weight: bolder;
      }
      .description {
        margin-top: 10px;
        text-align: center;
        width: 100%;
      }
      .links {
        width: 100%;
        margin-top: 10px;
        text-align: center;
        i {
          font-size: 25px;
          margin: 0 5px;
        }
        i:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
