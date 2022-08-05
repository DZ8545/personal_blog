<template>
  <div class="knowledgeSummary">
    <div class="title">
      <div>
        <h1>{{ $route.params.name }}</h1>
      </div>
      <div>
        <p>搜索</p>
      </div>
    </div>
    <template v-if="articles.toString()">
      <card-container :articles="articles"></card-container>
      <div class="demo-pagination-block">
        <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="totalAticlesPages"
          @current-change="handleCurrentChange"
        />
      </div>
    </template>
    <h1 v-if="!articles.toString()" class="noData">暂无数据</h1>
  </div>
</template>

<script setup lang="ts">
import CardContainer from "@/components/card/CardContainer.vue";
import getServer from "@/requset/server/getServer";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const articles = ref([]);
const currentPage = ref(1);
const pageSize = ref(9);
const totalAticlesPages = ref(0);
async function fetch() {
  const skip = (currentPage.value - 1) * pageSize.value;
  const res = await getServer.get(`/articlesSearch`, {
    params: {
      name: route.params.name,
      skip: skip,
    },
  });
  articles.value = res.data;
}
async function fetchNumber() {
  const res = await getServer.get(`/articlesSearchNumber/${route.params.name}`);
  totalAticlesPages.value = res.data;
}
fetch();
fetchNumber();
const handleCurrentChange = () => {
  fetch();
};
</script>

<style scoped lang="less">
.knowledgeSummary {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .demo-pagination-block {
    margin-top: 20px;
    margin-bottom: 50px;
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
  .noData {
    margin-top: 120px;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
  }
}
</style>
