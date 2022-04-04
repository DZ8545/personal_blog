<template>
  <div class="music">
    <audio
      v-if="currentIndex !== -1"
      :src="musics[currentIndex].url"
      ref="musicPlayer"
      @ended="end"
      autoplay
    ></audio>
    <template v-if="isActive">
      <div style="position: relative">
        <i
          class="iconfont icon-shangyishou"
          style="font-size: 30px; color: rgba(254, 184, 176, 0.8)"
          @click="preMusic"
        ></i>
        <img
          src="../../assets/img/music_active.svg"
          class="musicActive"
          alt=""
          @click="musicClick"
        />
        <i
          class="iconfont icon-xiayishou"
          style="font-size: 30px; rgba(254, 184, 176, 0.8)"
          @click="nextMusic"
        ></i>
        <span style="position: absolute; top: 40px; left: 0"
          >{{ musics[currentIndex].name }}-{{
            musics[currentIndex].artistsname
          }}</span
        >
      </div>
    </template>
    <template v-else>
      <i
        class="iconfont icon-shangyishou"
        style="font-size: 30px; color: rgba(254, 184, 176, 0.8); opacity: 0"
        @click="preMusic"
      ></i>
      <img src="../../assets/img/music.svg" alt="" @click="musicClick" />
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getMusic from "@/requset/music/getMusic";
import axios from "axios";
const show = ref(true);
const isActive = ref(false);
const musics = ref([]);
const currentIndex = ref(-1);
const musicPlayer = ref(null);
const flag = ref(false);
async function fetch() {
  const res = await getMusic();
  const item = {
    url: res.data.data.url,
    name: res.data.data.name,
    artistsname: res.data.data.artistsname,
  };
  currentIndex.value++;
  musics.value.push(item);
}
async function fetchPre() {
  const res = await getMusic();
  const item = {
    url: res.data.data.url,
    name: res.data.data.name,
    artistsname: res.data.data.artistsname,
  };
  musics.value.unshift(item);
}
async function musicClick() {
  if (!flag.value) {
    await fetch();
    flag.value = true;
  }
  isActive.value = !isActive.value;
  if (isActive.value) {
    musicPlayer.value.play();
  } else {
    musicPlayer.value.pause();
  }
}
function end() {
  musicPlayer.value.pause();
  fetch().then((res) => {
    musicPlayer.value.play();
  });
}
async function nextMusic() {
  if (currentIndex.value === musics.value.length - 1) {
    musicPlayer.value.pause();
    await fetch();
    musicPlayer.value.play();
  } else {
    currentIndex.value++;
    musicPlayer.value.src = musics.value[currentIndex.value].url;
  }
}
async function preMusic() {
  if (currentIndex.value === 0) {
    musicPlayer.value.pause();
    await fetchPre();
    musicPlayer.value.play();
  } else {
    currentIndex.value--;
    musicPlayer.value.src = musics.value[currentIndex.value].url;
  }
}
</script>

<style scoped lang="less">
.music {
  position: fixed;
  top: 120px;
  left: 20px;
  z-index: 10;
  display: inline-block;
  font-size: 12px;
  color: rgba(254, 184, 176, 0.8);
}
.musicActive {
  animation: z 1s infinite linear;
  margin: 0 5px;
}
@keyframes z {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.music img:hover {
  transform: scale(0.8);
}
</style>
