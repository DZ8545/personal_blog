<template>
  <div class="knowledgeSummary">
    <Title
      :title="types[`${$route.params.type}`][0]"
      :subTitle="types[`${$route.params.type}`][1]"
    />
    <template v-if="articles.toString()">
      <card-container :articles="articles" />
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
import { reactive, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const types = reactive({
  knowledgeSummary: [
    "知识总结",
    "善于总结，善于进步",
    "articlesOfKnowledgeSummary",
    4,
  ],
  studyNote: ["学习笔记", "好记性不如烂笔头", "articlesOfStudyNote", 5],
  codeSharing: ["代码分享", "善于分享，善于进步", "articlesOfCodeSharing", 2],
  informalEssay: [
    "随笔",
    "记录生活，记录更美的你",
    "articlesOfInformalEssay",
    3,
  ],
});

const articles = ref([]);
const currentPage = ref(1);
const pageSize = ref(9);
const totalAticlesPages = ref(0);
const route = useRoute();
async function fetch() {
  const skip = (currentPage.value - 1) * pageSize.value;
  const res = await getServer.get(
    `/${types[`${route.params.type}`][2]}/${skip}`
  );
  articles.value = res.data;
}

async function fetchNumber() {
  const res = await getServer.get(
    `/articlesNumber/${types[`${route.params.type}`][3]}`
  );
  totalAticlesPages.value = res.data;
}
watchEffect(() => {
  if (route.params.type) {
    fetch();
    fetchNumber();
  }
});
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
  .noData {
    margin-top: 120px;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
  }
}
</style>
