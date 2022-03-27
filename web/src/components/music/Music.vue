<template>
  <div class="music" @click="musicClick">
    <audio :src="music.url" autoplay ref="musicPlayer" @onended="end"></audio>
    <img
      src="../../assets/img/music_active.svg"
      class="musicActive"
      alt=""
      v-if="isActive"
    />
    <img src="../../assets/img/music.svg" alt="" v-else />
    <span v-if="flag">{{ music.name }}-{{ music.artistsname }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import getMusic from "@/requset/music/getMusic";
const show = ref(true);
const isActive = ref(false);
const music = ref([]);
const musicPlayer = ref(null);
const musics = ref([]);
const flag = ref(false); //判断是否在播放音乐
const currentIndex = ref(-1); //当前播放音乐序号
async function fetch() {
  const res = await getMusic;
  music.value = res.data.data;
  musics.value.push(music.value);
  console.log(musics.value[currentIndex.value]);
  // console.log(music.value);
}
function musicClick() {
  if (currentIndex.value === -1) {
    currentIndex.value++;
    fetch();
  }
  isActive.value = !isActive.value;
  flag.value = !flag.value;
  if (flag.value) {
    musicPlayer.value.play();
  } else {
    musicPlayer.value.pause();
  }
}
function end() {
  fetch();
  currentIndex.value++;
  musicPlayer.value.play();
}
</script>

<style scoped lang="less">
.music {
  position: fixed;
  top: 150px;
  left: 100px;
  z-index: 999;
  span {
    font-size: 12px;
    color: rgba(254, 184, 176, 0.8);
  }
}
.musicActive {
  animation: z 1s infinite linear;
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
