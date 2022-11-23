<template>
  <div class="content">
    <Menu :menus="menus" class="myMenu"></Menu>
    <div class="head">
      <div class="title">
        <h2>{{ article.title }}</h2>
      </div>
      <div class="other">
        <div class="date">
          <i class="iconfont icon-rili"></i>
          {{ new Date(article.time).toLocaleDateString() }}
        </div>
        <div class="look">
          <i class="iconfont icon-liulan"></i>
          {{ article.NumberOfVisitors }}
        </div>
        <div class="taol">
          <i class="iconfont icon-a-taolunluntan"></i>
          {{ $store.state.comment.commentNumber }}
        </div>
        <div class="time">
          {{ new Date(article.time).toLocaleTimeString() }}
        </div>
      </div>
    </div>
    <div class="body" v-html="text"></div>
    <div class="foot">
      <comment></comment>
      <div style="height: 200px"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import getServer from "@/requset/server/getServer";
import { useRoute } from "vue-router";
import { marked } from "marked";
import { useStore } from "vuex";
import hljs from "highlight.js";
import Menu from "@/components/menu/Menu.vue";

const route = useRoute();
const id = route.params.id;
const article = ref([]);
const text = ref<string>("");
const store = useStore();
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
  text.value = marked.parse(article.value.body).replace(/src/g, "data-src"); // 将markdown内容解析
  //图片懒加载
  nextTick(() => {
    const imgs = document.querySelectorAll(".body img");
    const observer = new IntersectionObserver((entirs) => {
      entirs.forEach((item) => {
        if (item.isIntersecting) {
          const img = item.target;
          const src: string = img.getAttribute("data-src") as string;
          img.setAttribute("src", src);
          observer.unobserve(img);
        }
      });
    });
    imgs.forEach((img) => {
      observer.observe(img);
    });
  });
}
const menus = ref([]);
fetch().then(() => {
  catalogues.value = [...text.value.matchAll(/<h[12].*>.*<\/h[12].*>/g)];
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
.content {
  width: 800px;
  margin: 0 auto;
  .myMenu {
    position: fixed;
    top: 110px;
    max-width: 200px;
    margin-left: 800px;
  }
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
      i {
        color: rgba(0, 0, 0, 0.4);
      }
      .look {
        i {
          font-size: 22px;
          margin-bottom: -3px;
        }
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
  :deep(.body) {
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
      background-color: #feb8b0;
      opacity: 0.5;
      border-radius: 10px;
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
      background-color: #feb8b0;
      opacity: 0.5;
      border-radius: 10px;
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
      max-width: 600px;
    }
    @media screen and (max-width: 900px) {
      font-size: 1rem;
      img {
        max-width: 350px;
      }
      ul {
        margin-left: 30px;
        > li {
          margin: 5px 0;
        }
      }
      > p {
        margin: 10px;
        text-indent: 0;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .content {
    margin: 0;
    max-width: 100%;
  }
}
</style>
