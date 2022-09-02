<template>
  <div class="studyNote">
    <Title title="随笔" subTitle="记录生活，记录更美的你" />
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
import getServer from "@/requset/server/getServer";
import { ref } from "vue";

const articles = ref([]);
const currentPage = ref(1);
const pageSize = ref(9);
const totalAticlesPages = ref(0);
async function fetch() {
  const skip = (currentPage.value - 1) * pageSize.value;
  const res = await getServer.get(`/articlesOfInformalEssay/${skip}`);
  articles.value = res.data;
}

async function fetchNumber() {
  const res = await getServer.get(`/articlesNumber/3`);
  totalAticlesPages.value = res.data;
}
fetch();
fetchNumber();
const handleCurrentChange = () => {
  fetch();
};
</script>

<style scoped lang="less">
.studyNote {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .demo-pagination-block {
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .noData {
    margin-top: 120px;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
  }
}
</style>
