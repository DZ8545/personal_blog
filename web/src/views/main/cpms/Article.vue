<template>
  <div class="article">
    <div class="left"></div>
    <div class="content">
      <div class="head">
        <div class="title">
          <h2>{{ article.title }}</h2>
        </div>
        <div class="other">
          <div class="date">
            <img src="@/assets/img/date.svg" alt="" class="date" />
            {{ new Date(article.time).toLocaleDateString() }}
          </div>
          <div class="look">
            <img src="@/assets/img/look.svg" alt="" class="look" />
            {{ article.NumberOfVisitors }}
          </div>
          <div class="taol">
            <img src="@/assets/img/taol.svg" alt="" class="taol" />
            {{ $store.state.comment.commentNumber }}
          </div>
          <div class="time">
            {{ new Date(article.time).toLocaleTimeString() }}
          </div>
        </div>
      </div>
      <div class="body" v-html="text"></div>
      <!--      <div class="body">-->
      <!--        <v-md-preview :text="text"></v-md-preview>-->
      <!--      </div>-->
      <div class="foot">
        <comment></comment>
        <div style="height: 200px"></div>
      </div>
    </div>
    <div class="right">
      <myMenu :menus="menus"></myMenu>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getServer from "@/requset/server/getServer";
import { useRoute } from "vue-router";
import { marked } from "marked";
import { useStore } from "vuex";
import Comment from "@/components/comment/Comment";
import hljs from "highlight.js";
import myMenu from "@/components/menu/Menu";

const route = useRoute();
const id = route.params.id;
const article = ref([]);
const text = ref(null);
const store = useStore();
const numberOfDiscussions = ref(0);
const catalogues = ref([]);
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});
async function fetch() {
  const res = await getServer.get(`/article/${id}`);
  article.value = res.data;
  text.value = marked.parse(article.value.body); // 将markdown内容解析
}
const menus = ref([]);
fetch().then(() => {
  catalogues.value = [...text.value.matchAll(/<h[12].*>.*<\/h[12].*>/g)];
  // console.log(catalogues.value[0][0].split("<")[1].split(">")[1]);
  let i = -1;
  for (const item of catalogues.value) {
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

store.dispatch("comment/getCommentNumber", id);
</script>

<style scoped lang="less">
.article {
  width: 100%;
  height: 100%;
  display: flex;
  .content {
    max-width: 700px;
    margin: 0 auto;
    .head {
      position: relative;
      border-bottom: 1px dotted rgba(0, 0, 0, 0.8);
      .title {
        padding: 10px;
      }
      .other {
        margin-top: 10px;
        margin-left: 30px;
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        .look {
          margin-left: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .taol {
          margin-left: 10px;
          display: flex;
          justify-content: center;
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
        .time {
          color: rgba(0, 0, 0, 0.5);
          position: absolute;
          right: 15px;
          font-size: 12px;
          bottom: 3px;
        }
      }
    }
    .body {
      margin-top: 20px;
      padding-bottom: 30px;
      border-bottom: 1px dotted rgba(0, 0, 0, 0.8);
    }
    ::v-deep .body {
      > pre > code {
        border-radius: 10px;
      }
      > p {
        margin: 10px;
        text-indent: 2em;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.7);
      }
      h1 {
        padding: 5px;
        font-size: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
      }
      h1::before {
        content: "#";
        font-size: 20px;
        color: red;
      }
      h2 {
        padding: 5px;
        font-size: 19px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
      }
      h2::before {
        content: "##";
        font-size: 19px;
        color: red;
      }
      ul {
        margin-left: 80px;
        > li {
          margin: 5px 0;
          font-size: 17px;
        }
      }
      img {
        max-width: 500px;
      }
    }
  }
  .right {
    position: fixed;
    right: 180px;
    top: 50%;
    max-width: 200px;
    transform: translateY(-54%);
  }
}
</style>
