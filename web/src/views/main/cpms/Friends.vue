<template>
  <div class="friends">
    <div class="title">
      <h1>关于</h1>
    </div>
    <div class="body" v-html="text"></div>
    <div class="box1">
      <comment></comment>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getServer from "@/requset/server/getServer";
import Comment from "@/components/comment/Comment.vue";
import { marked } from "marked";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import myMenu from "@/components/menu/Menu";
</script>

<style scoped lang="less"></style>
