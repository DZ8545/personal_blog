<template>
  <div class="file">
    <div class="title">
      <div>
        <h1>归档</h1>
      </div>
      <div>
        <p>善于分享，善于进步</p>
      </div>
    </div>
    <div class="statistic">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>数据统计</span>
          </div>
        </template>
        <div class="card-body">
          <div>
            <div class="number">{{ articlesNumber }}</div>
            <div class="word">文章</div>
          </div>
          <div>
            <div class="number">{{ commentsNumber }}</div>
            <div class="word">评论</div>
          </div>
          <div>
            <div class="number">{{ viewNumber }}</div>
            <div class="word">阅读</div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="timeLine">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>文章总览</span>
          </div>
        </template>
        <el-timeline>
          <template v-for="article in articles" :key="article">
            <el-timeline-item :timestamp="article.time" placement="top">
              <el-card class="elCard">
                <router-link to="/"></router-link>
                <h4
                  @click="
                    () => {
                      $router.push(`/main/articles/${article._id}`);
                    }
                  "
                >
                  {{ article.title }}
                </h4>
                <p>{{ article.description }}</p>
              </el-card>
            </el-timeline-item>
          </template>
        </el-timeline>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import getServer from "@/requset/server/getServer";
const articlesNumber = ref(0);
const commentsNumber = ref(0);
const viewNumber = ref(0);
const articles = ref([]);
async function fetchArticlesNumber() {
  const res = await getServer.get("/articlesNumber/1");
  articlesNumber.value = res.data;
}

async function fetchCommentsNumber() {
  const res = await getServer.get("/commentsNumber/1");
  commentsNumber.value = res.data;
}
async function fetchArticleViewNumber() {
  const res = await getServer.get("/articlesView");
  viewNumber.value = res.data[0].content_sum;
}
async function fetch() {
  const res = await getServer.get("/articlesAll");
  articles.value = res.data;
}
fetchCommentsNumber();
fetchArticlesNumber();
fetchArticleViewNumber();
fetch();
</script>

<style scoped lang="less">
.file {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  .statistic {
    .box-card {
      width: 750px;
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgba(0, 0, 0, 0.5);
        font-size: 20px;
      }
      .card-body {
        text-align: center;
        display: flex;
        justify-content: space-around;
        .number {
          font-size: 30px;
          color: rgba(0, 0, 0, 0.3);
          font-weight: bolder;
        }
        .word {
          color: rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
  .timeLine {
    margin: 40px 0;
    .box-card {
      width: 750px;
      h4 {
        display: inline-block;
        margin-bottom: 5px;
        font-size: 20px;
      }
      h4:hover {
        color: red;
        transform: translateX(10px) scale(1.2);
        transition: all 1s ease;
        cursor: pointer;
      }
    }
  }
}
</style>
