<template>
  <div class="home">
    <card-container :articles="articles"></card-container>
  </div>
</template>

<script setup>
import getServer from "@/requset/server/getServer";
import { ref } from "vue";
import CardContainer from "@/components/card/CardContainer";
const articles = ref([]);
async function fetch() {
  const res = await getServer.get("/articles");
  articles.value = res.data;
}
fetch();
</script>

<style scoped lang="less">
.home {
  width: 64%;
  height: 100%;
  margin-right: 18%;
  margin-left: 18%;
}
</style>
