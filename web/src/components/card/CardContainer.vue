<template>
  <div class="cardContainer">
    <card v-for="item in articles" :key="item" :item="item" class="card"></card>
  </div>
</template>

<script setup>
import Card from "@/components/card/Card";
// eslint-disable-next-line no-undef
defineProps(["articles"]);
</script>

<style scoped lang="less">
.cardContainer {
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  .card {
    margin: 10px;
  }
}
</style>
