<template>
  <div class="about">
    <div class="left">
      <el-card class="box-card">
        <div class="head">
          <img src="../../../assets/img/head.jpg" alt="" />
        </div>
        <div class="name">DZ</div>
        <div class="description">一个前端萌新</div>
        <div class="links">
          <a href="https://github.com/DZ8545" target="_blank"
            ><i class="iconfont icon-github-fill"></i
          ></a>
          <a
            href="https://space.bilibili.com/354550170?spm_id_from=333.337.0.0"
            target="_blank"
            ><i class="iconfont icon-bilibili-line"></i
          ></a>
          <a
            href="https://music.163.com/#/user/home?id=1878740676"
            target="_blank"
            ><i class="iconfont icon-music"></i
          ></a>
        </div>
        <div style="margin-top: 10px">微信:13357320389</div>
        <div class="time">
          本站已运行:
          <div>
            {{ day }}天 {{ (h + "").padStart(2, "0") }}:{{
              (m + "").padStart(2, "0")
            }}:{{ (s + "").padStart(2, "0") }}
          </div>
        </div>
      </el-card>
    </div>
    <div class="right">
      <myMenu class="myMenu" :menus="menus"></myMenu>
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
import { useRoute } from "vue-router";
import myMenu from "@/components/menu/Menu";

const route = useRoute();
const id = route.params.id;
const text = ref(null);
let time = 0;
const day = ref(0);
const h = ref(0);
const m = ref(0);
const s = ref(0);
const article = ref([]);

async function fetch() {
  const res = await getServer.get(`/article/${id}`);
  article.value = res.data;
  text.value = marked(article.value.body);
}
let catalogues = [];
const menus = ref([]);
fetch().then(() => {
  catalogues = [...text.value.matchAll(/<h[12].*>.*<\/h[12].*>/g)];
  // console.log(catalogues.value[0][0].split("<")[1].split(">")[1]);
  let i = -1;
  for (const item of catalogues) {
    const menuItem = {
      title: "",
      children: [],
    };
    const x = item[0].split("<")[1].split(">");
    if (x[0].match("h1")) {
      i++;
      menuItem.title = x[1];
      menus.value[i] = menuItem;
    } else {
      menuItem.title = x[1];
      menus.value[i].children.push(menuItem);
    }
  }
});
setInterval(() => {
  time = Date.now();
  time = parseInt((time - 1649466024000) / 1000);
  day.value = parseInt(time / 3600 / 24);
  h.value = parseInt((time % (3600 * 24)) / 3600);
  m.value = parseInt((time % 3600) / 60);
  s.value = parseInt(time % 60);
}, 1000);
</script>

<style scoped lang="less">
.about {
  display: flex;
  margin: 0 auto;
  .right {
    .myMenu {
      position: fixed;
      top: 50%;
      max-width: 200px;
      transform: translateY(-54%);
      margin-left: 930px;
    }
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
        background-color: #feb8b0;
        opacity: 0.5;
        border-radius: 10px;
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
      background-color: inherit;
      .time {
        margin-top: 8px;
        div {
          font-size: 20px;
          font-weight: bolder;
          color: #feb8b0;
          text-align: center;
        }
      }
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
        a {
          text-decoration: none;
          color: black;
        }
        i {
          font-size: 25px;
          margin: 0 5px;
        }
        i:hover {
          cursor: url(../../../assets/cursor/keHand.cur), default;
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .about {
    display: block;
    .right {
      margin-left: 0;
      width: 100vw;
      .box1 {
        width: 100vw;
      }
      .title {
        padding: 0;
      }
    }
    .left {
      width: 90vw;
      margin: 20px auto;
    }
  }
}
</style>
