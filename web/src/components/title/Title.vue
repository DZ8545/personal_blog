<template>
  <div class="title">
    <h1>{{ title }}</h1>
    <p>{{ subTitle }}</p>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
defineProps(["title", "subTitle"]);
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: rgba(238, 16, 16, 0.582);
    text-align: center;
  }
  p {
    padding: 15px 300px 15px;
    width: 900px;
    text-align: end;
    color: rgba(0, 0, 0, 0.5);
    border-bottom: 1px rgba(255, 0, 0, 0.4) solid;
  }
}
@media screen and (max-width: 900px) {
  .title {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: rgba(238, 16, 16, 0.582);
      text-align: center;
    }
    p {
      width: 100%;
      padding: 5px 30px 5px;
      text-align: end;
      color: rgba(0, 0, 0, 0.5);
      border-bottom: 1px rgba(255, 0, 0, 0.4) solid;
    }
  }
}
</style>
