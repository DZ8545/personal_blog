<template>
  <div class="cover">
    <div class="poetry">
      <div class="sentence" v-for="(i, index1) of poetry" :key="index1">
        <transition-group name="list">
          <template v-for="(item, index2) in i" :key="index2">
            <div v-if="flags[index2 + count[index1]]">
              {{ item }}
            </div>
          </template>
        </transition-group>
      </div>
    </div>
    <div class="sun"></div>
    <div class="birds">
      <div class="bird" style="left: 150px; top: 175px"></div>
      <div class="bird" style="left: 180px; top: 190px"></div>
      <div class="bird" style="left: 210px; top: 205px"></div>
      <div class="bird" style="left: 120px; top: 190px"></div>
      <div class="bird" style="left: 90px; top: 205px"></div>
    </div>
    <div class="content">
      <div class="title">古月小站</div>
      <div class="hello" style="height: 23.2px">{{ hello1.join("") }}</div>
      <el-card class="box-card">
        <div class="start">game start</div>
        <div class="links">
          <a href="https://github.com/DZ8545" target="_blank"
            ><i class="iconfont icon-github-fill"></i
          ></a>
          <a
            href="https://space.bilibili.com/354550170?spm_id_from=333.337.0.0"
            target="_blank"
            ><i class="iconfont icon-bilibili-line"></i
          ></a>
          <a
            href="https://music.163.com/#/user/home?id=1878740676"
            target="_blank"
            ><i class="iconfont icon-music"></i
          ></a>
        </div>
      </el-card>
      <div class="coverCard"></div>
    </div>
    <div class="earth"></div>
    <div class="house">
      <div class="chimney"></div>
      <div class="roof"></div>
      <div class="main"></div>
      <div class="smoke"></div>
      <div class="window"></div>
    </div>
    <div class="arrowContain">
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script setup>
import getPoetry from "@/requset/poetry/getPoetry";
import { ref } from "vue";
const poetry = ref([]);
const flags = ref([]);
const count = ref([]);
const s = ref(0);
const hello = ref("欢迎你的到来，希望你能有所收获");
getPoetry().then((res) => {
  poetry.value = res.data.content.split(/[。、？，！；]/);
  poetry.value[poetry.value.length - 1] = res.data.author;
  poetry.value.push(res.data.origin);
  for (let i = 0; i < poetry.value.length; i++) {
    count.value[i] = s.value;
    s.value = s.value + poetry.value[i].length;
  }
  let i = 0;
  const timer = setInterval(() => {
    flags.value[i++] = true;
    if (i === s.value) {
      clearInterval(timer);
    }
  }, 500);
});
const hello1 = ref([]);
let i = 0,
  f = true;
setInterval(() => {
  if (f) {
    hello1.value[i] = hello.value[i];
    i++;
    if (i === hello.value.length) {
      f = false;
    }
  } else {
    hello1.value.splice(i, 1);
    i--;
    if (i === -1) {
      f = true;
    }
  }
}, 500);
</script>

<style scoped lang="less">
.cover {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#feb8b0, #fef9db);
  position: relative;
  .poetry {
    position: absolute;
    display: flex;
    flex-direction: row-reverse;
    right: 50px;
    top: 30px;
    color: #eff5ee;
    font-size: 25px;
    font-weight: bolder;
    z-index: 10;
    .sentence {
      display: flex;
      flex-direction: column;
      margin-left: 25px;
      .list-enter-from,
      .list-leave-to {
        opacity: 0;
        transform: translateX(-4px, -6px);
      }
      .list-enter-active,
      .list-leave-active {
        transition: all 1s ease;
      }
    }
  }
  .poetry > :nth-last-child(2) {
    margin-top: 30px;
  }
  .poetry > :nth-last-child(1) {
    margin-top: 30px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #e05f4f;
    font-family: "宋体", serif;
    .box-card {
      background-color: inherit;
      width: 300px;
      text-align: center;
      .start {
        font-size: 20px;
        color: #d05555;
        position: relative;
      }
      .start::before {
        content: "“";
        font-size: 30px;
        position: absolute;
        left: 10px;
        top: -10px;
        color: black;
      }
      .start::after {
        content: "”";
        font-size: 30px;
        position: absolute;
        right: 10px;
        top: 10px;
        color: white;
      }
      .links {
        width: 140px;
        margin: 10px auto 0 auto;
        display: flex;
        justify-content: space-around;
        a {
          text-decoration: none;
          color: black;
        }
        i {
          font-size: 25px;
        }
        i:hover {
          cursor: url(../../assets/cursor/keHand.cur), default;
        }
      }
    }
    .title {
      font-weight: bolder;
      font-size: 30px;
      margin-bottom: 10px;
    }
    .hello {
      margin-bottom: 10px;
      font-size: 20px;
    }
    .hello::after {
      content: "|";
      animation: j 0.5s ease infinite;
    }
    @keyframes j {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    .link {
      border: none;
      background-color: inherit;
      font-size: 18px;
      color: #e05f4f;
      font-family: "宋体", serif;
    }
  }
  .sun {
    position: absolute;
    left: 80px;
    top: 30px;
    width: 82px;
    height: 82px;
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
      width: 18px;
      height: 8px;
      border-bottom: 0;
      left: -19px;
      border-top-right-radius: 18px;
      border-top-left-radius: 18px;
      border-left: 0;
      animation: wing-right 1s infinite;
    }
    &::before {
      content: "";
      position: absolute;
      border: 3px #796b6c solid;
      width: 18px;
      height: 8px;
      border-bottom: 0;
      border-top-right-radius: 18px;
      border-top-left-radius: 18px;
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
  .earth {
    width: 1000px;
    height: 200px;
    position: absolute;
    background-color: #797576;
    border-radius: 50%;
    right: -500px;
    bottom: -120px;
    z-index: 1;
  }
  .house {
    position: absolute;
    right: 120px;
    bottom: 40px;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .roof {
      right: 50px;
      width: 200px;
      height: 100px;
      background-color: #796b6c;
      &::before {
        content: "";
        width: 0;
        height: 0;
        border-bottom: 100px solid #796b6c;
        border-left: 100px solid transparent;
        position: absolute;
        left: -60px;
      }
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-bottom: 100px solid #796b6c;
        border-left: 100px solid transparent;
        position: absolute;
        transform: rotate(90deg);
        left: 240px;
      }
    }
    .main {
      width: 280px;
      height: 150px;
      background-color: #796b6c;
    }
    .chimney {
      width: 25px;
      height: 30px;
      position: absolute;
      left: 190px;
      bottom: 250px;
      background-color: #796b6c;
    }
    .smoke {
      width: 40px;
      height: 30px;
      background-color: white;
      border-radius: 50%;
      position: absolute;
      bottom: 290px;
      left: 180px;
      animation: f 1s infinite;
    }
    @keyframes f {
      0% {
        transform: translateY(0);
      }
      20% {
        transform: translateY(-10px) scale(0.8);
      }
      40% {
        transform: translateY(-20px) scale(0.6);
      }
      60% {
        transform: translateY(-30px) scale(0.4);
        opacity: 0.5;
      }
      80% {
        transform: translateY(-40px) scale(0.2);
      }
      100% {
        transform: translateY(-50px) scale(0);
        opacity: 0;
      }
    }
    .window {
      width: 40px;
      height: 40px;
      background-color: #e5e5a1;
      position: absolute;
      margin-left: 150px;
      margin-top: 20px;
    }
  }
  .arrowContain {
    position: absolute;
    bottom: 80px;
    .arrow {
      width: 25px;
      height: 25px;
      border-top: 5px solid white;
      border-right: 5px solid white;
      transform: rotate(135deg);
    }
    animation: arrowF 0.5s linear alternate-reverse infinite;
  }
  @keyframes arrowF {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
      transform: translateY(30px);
    }
  }
}
</style>
