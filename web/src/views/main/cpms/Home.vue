<template>
  <div class="home">
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
  const res = await getServer.get(`/articles/${skip}`);
  articles.value = res.data;
}
async function fetchNumber() {
  const res = await getServer.get("/articlesNumber/1");
  totalAticlesPages.value = res.data;
}
fetch();
fetchNumber();
const handleCurrentChange = () => {
  fetch();
};
</script>

<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .demo-pagination-block {
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .demo-pagination-block :hover {
    cursor: url(../../../assets/cursor/keHand.cur), default;
  }
}
</style>
