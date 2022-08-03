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
      <i
        class="iconfont icon-shangyishou"
        style="font-size: 30px; color: rgba(254, 184, 176, 0.8)"
        @click="preMusic"
      ></i>
      <i
        class="iconfont icon-yinlemusic216 musicActive"
        @click="musicClick"
        style="font-size: 30px; margin: 0 3px; display: inline-block"
      ></i>
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
    </template>
    <template v-else>
      <i
        class="iconfont icon-shangyishou"
        style="font-size: 30px; color: rgba(254, 184, 176, 0.8); opacity: 0"
        @click="preMusic"
      ></i>
      <i
        class="iconfont icon-yinlemusic216"
        @click="musicClick"
        style="font-size: 30px; color: rgba(0, 0, 0, 0.2); margin: 0 3px"
      ></i>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getMusic from "@/requset/music/getMusic";

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
async function end() {
  if (currentIndex.value === musics.value.length - 1) {
    musicPlayer.value.pause();
    await fetch();
    musicPlayer.value.play();
  } else {
    currentIndex.value++;
    musicPlayer.value.src = musics.value[currentIndex.value].url;
  }
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
i {
  display: inline-block;
  width: 30px;
  height: 30px;
}
@media screen and (min-width: 900px) {
  .music {
    position: fixed;
    top: 120px;
    left: 20px;
    z-index: 10;
    display: inline-block;
    font-size: 12px;
    color: rgba(254, 184, 176, 0.8);
    i:hover {
      cursor: url(../../assets/cursor/keHand.cur), default !important;
    }
  }
}

@media screen and (max-width: 900px) {
  .music {
    position: fixed;
    top: 80px;
    right: 5px;
    z-index: 10;
    display: inline-block;
    font-size: 12px;
    color: rgba(254, 184, 176, 0.8);
  }
}
.musicActive {
  animation: z 0.7s infinite linear;
}
@keyframes z {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.music i:hover {
  transform: scale(0.9);
  cursor: url(../../assets/cursor/keHand.cur), default !important;
}
</style>
