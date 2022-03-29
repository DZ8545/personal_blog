<template>
  <div class="knowledgeSummary">
    <div class="title">
      <div>
        <h1>知识总结</h1>
      </div>
      <div>
        <p>善于总结，善于进步</p>
      </div>
    </div>
    <card-container :articles="articles"></card-container>
  </div>
</template>

<script setup>
import CardContainer from "@/components/card/CardContainer";
import getServer from "@/requset/server/getServer";
import { ref } from "vue";

const articles = ref([]);
async function fetch() {
  const res = await getServer.get("/articles");
  articles.value = res.data;
}
fetch();
</script>

<style scoped lang="less">
.knowledgeSummary {
  max-width: 960px;
  margin: 0 auto;
  .title {
    text-align: center;
    margin: 20px;
    p {
      margin-top: 10px;
      margin-left: 300px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
