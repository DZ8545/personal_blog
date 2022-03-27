<template>
  <div class="main">
    <div class="panel">
      <div class="sun"></div>
      <div class="birds">
        <div class="bird" style="left: 150px; top: 45px"></div>
        <div class="bird" style="left: 180px; top: 50px"></div>
        <div class="bird" style="left: 210px; top: 55px"></div>
        <div class="bird" style="left: 130px; top: 50px"></div>
        <div class="bird" style="left: 110px; top: 60px"></div>
      </div>
      <div class="title">
        <router-link to="/main" custom v-slot="props">
          <button class="b1" @click="props.navigate">古月小站</button>
        </router-link>
      </div>
      <div class="option">
        <router-link to="/main" custom v-slot="props">
          <button @click="props.navigate">首页</button>
        </router-link>
        <span>首页</span>
        <span>首页</span>
        <span>首页</span>
        <span>首页</span>
        <span>首页</span>
      </div>
    </div>
    <Music></Music>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Music from "@/components/music/Music";
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  .panel {
    width: 100%;
    height: 80px;
    background: linear-gradient(#feb8b0, #fef9db);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    .sun {
      position: absolute;
      left: 80px;
      top: 5px;
      width: 41px;
      height: 41px;
      border-radius: 50%;
      background: linear-gradient(to bottom, #ffc673, #ff653c);
    }
    .bird {
      position: absolute;
      animation: bird 3s infinite;
      &::after {
        content: "";
        position: absolute;
        border: 3px #796b6c solid;
        width: 9px;
        height: 4px;
        border-bottom: 0;
        left: -9px;
        border-top-right-radius: 9px;
        border-top-left-radius: 9px;
        border-left: 0;
        animation: wing-right 1s infinite;
      }
      &::before {
        content: "";
        position: absolute;
        border: 3px #796b6c solid;
        width: 9px;
        height: 4px;
        border-bottom: 0;
        border-top-right-radius: 9px;
        border-top-left-radius: 9px;
        border-right: 0;
        animation: wing-left 1s infinite;
      }
      @keyframes wing-left {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(10deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
      @keyframes wing-right {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(-10deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
      @keyframes bird {
        0% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(2px, -3px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
    }
    .title {
      position: absolute;
      left: 18%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .b1 {
        border: none;
        background-color: inherit;
        color: #d96354;
        font-size: 18px;
      }
    }
    .title:hover {
      transform: scale(1.2);
      color: #de1515;
    }
    .option {
      width: 30%;
      position: absolute;
      right: 18%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      button {
        border: none;
        background-color: inherit;
      }
    }
  }
}
</style>
