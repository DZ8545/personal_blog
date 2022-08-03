<template>
  <div class="file">
    <div class="title">
      <div>
        <h1>归档</h1>
      </div>
      <div>
        <p>回望过去，展望未来</p>
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
            <div style="color: rgba(0, 0, 0, 0.8)">文章</div>
          </div>
          <div>
            <div class="number">{{ commentsNumber }}</div>
            <div style="color: rgba(0, 0, 0, 0.8)">评论</div>
          </div>
          <div>
            <div class="number">{{ viewNumber }}</div>
            <div style="color: rgba(0, 0, 0, 0.8)">阅读</div>
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
            <el-timeline-item
              :timestamp="new Date(article.time).toLocaleString()"
              placement="top"
            >
              <el-card style="background-color: inherit">
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
    <div class="toTop">
      <i
        class="iconfont icon-huidaodingbu"
        style="font-size: 30px; color: #feb8b0"
        @click="toTop"
      ></i>
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
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<style scoped lang="less">
.file {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .toTop {
    position: fixed;
    right: 80px;
    bottom: 100px;
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
  .statistic {
    .box-card {
      width: 750px;
      background-color: inherit;
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
      }
    }
  }
  .timeLine {
    margin: 40px 0;
    .box-card {
      background-color: inherit;
      width: 750px;
      h4 {
        display: inline-block;
        margin-bottom: 5px;
        font-size: 20px;
      }
      h4:hover {
        color: red;
        transform: translateX(10px);
        transition: all 1s ease;
        cursor: url(../../../assets/cursor/keHand.cur), default;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .file {
    .toTop {
      right: 10px;
      bottom: 20px;
    }
    .title {
      padding: 0;
      p {
        margin: 0;
      }
    }
    .statistic {
      .box-card {
        width: 350px;
      }
    }
    .timeLine {
      .box-card {
        width: 350px;
      }
    }
  }
}
</style>
