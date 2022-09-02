<template>
  <div class="cardContainer">
    <TransitionGroup name="cardsAnimate" mode="out-in">
      <card
        v-for="item in articles"
        :key="item"
        :item="item"
        class="card"
      ></card>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
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
  justify-content: center;
  align-content: center;
  .card {
    margin: 10px;
  }
  .cardsAnimate-enter-active {
    transition: all 2s ease;
  }
  .cardsAnimate-enter-from,
  .cardsAnimate-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
