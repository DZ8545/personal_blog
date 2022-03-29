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
            {{ article.time }}
          </div>
          <div class="look">
            <img src="@/assets/img/look.svg" alt="" class="look" />
            {{ article.NumberOfVisitors }}
          </div>
          <div class="taol">
            <img src="@/assets/img/taol.svg" alt="" class="taol" />
            {{ $store.state.comment.commentNumber }}
          </div>
        </div>
      </div>
      <div class="body" v-html="text"></div>
      <div class="foot">
        <comment></comment>
        <div style="height: 200px"></div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getServer from "@/requset/server/getServer";
import { useRoute } from "vue-router";
import { marked } from "marked";
import { useStore } from "vuex";
import Comment from "@/components/comment/Comment";
const route = useRoute();
const id = route.params.id;
const article = ref([]);
const text = ref(null);
const store = useStore();
const numberOfDiscussions = ref(0);
async function fetch() {
  const res = await getServer.get(`/articles/${id}`);
  article.value = res.data;
}
fetch().then((res) => {
  text.value = marked(article.value.body || "", {
    sanitize: true,
  });
});
store.dispatch("comment/getCommentNumber", id);
</script>

<style scoped lang="less">
.article {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  .content {
    width: 100%;
    height: 100%;
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
      }
    }
    .body {
      margin-top: 20px;
      padding-bottom: 30px;
      border-bottom: 1px dotted rgba(0, 0, 0, 0.8);
    }
  }
  .right {
    width: 25%;
    height: 100%;
  }
}
</style>
