<template>
  <div class="main" ref="mainEl">
    <div class="panel" ref="panelEl">
      <div class="sun"></div>
      <div class="birds">
        <div class="bird" style="left: 150px; top: 45px"></div>
        <div class="bird" style="left: 180px; top: 50px"></div>
        <div class="bird" style="left: 210px; top: 55px"></div>
        <div class="bird" style="left: 130px; top: 50px"></div>
        <div class="bird" style="left: 110px; top: 60px"></div>
      </div>
      <div class="title">
        <span class="b1">古月小站</span>
      </div>
      <div class="option">
        <ul class="ul1">
          <li>
            <router-link to="/" custom v-slot="props">
              <span @click="props.navigate">
                <i class="iconfont icon-shouye"></i>主页
              </span>
            </router-link>
          </li>
          <li>
            <i class="iconfont icon-wenzhangfenlei" style="font-size: 20px"></i
            >文章分类
            <ul>
              <li>
                <router-link to="/main/knowledgeSummary" custom v-slot="props">
                  <span @click="props.navigate">知识总结</span>
                </router-link>
              </li>
              <li>
                <router-link to="/main/studyNote" custom v-slot="props">
                  <span @click="props.navigate">学习笔记</span>
                </router-link>
              </li>
              <li>
                <router-link to="/main/codeSharing" custom v-slot="props">
                  <span @click="props.navigate">代码分享</span>
                </router-link>
              </li>
              <li>
                <router-link to="/main/informalEssay" custom v-slot="props">
                  <span @click="props.navigate">随笔</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/main/file" custom v-slot="props">
              <span @click="props.navigate">
                <i class="iconfont icon-jilu"></i>归档
              </span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/main/messageBoard/62445ee429dd310398bc7a93"
              custom
              v-slot="props"
            >
              <span @click="props.navigate">
                <i class="iconfont icon-liuyanban-05"></i>留言板
              </span>
            </router-link>
          </li>
          <li>
            <i class="iconfont icon-xiaoyouxi" style="font-size: 16px"></i
            >小游戏
            <ul>
              <li>
                <router-link to="/main/snake" custom v-slot="props">
                  <span @click="props.navigate">贪吃蛇</span>
                </router-link>
              </li>
              <li>
                <router-link to="/main/sudoku" custom v-slot="props">
                  <span @click="props.navigate">数独</span>
                </router-link>
              </li>
              <li>
                <router-link to="/main/draw" custom v-slot="props">
                  <span @click="props.navigate">涂鸦板</span>
                </router-link>
              </li>
            </ul>
          </li>
          <!--          <li>-->
          <!--            <router-link to="/main/friends" custom v-slot="props">-->
          <!--              <span @click="props.navigate"-->
          <!--                ><i class="iconfont icon-lianjie"></i>友链</span-->
          <!--              >-->
          <!--            </router-link>-->
          <!--          </li>-->
          <li>
            <router-link
              to="/main/about/6246ef7e77f7f26b8e5f7820"
              custom
              v-slot="props"
            >
              <span @click="props.navigate"
                ><i class="iconfont icon-guanyuwomen"></i>关于</span
              >
            </router-link>
          </li>
          <li>
            <input
              type="text"
              placeholder="搜索..."
              @keyup.enter="onSubmit"
            /><i class="iconfont icon-sousuo"></i>
          </li>
        </ul>
      </div>
      <div class="phoneMove">
        <i class="iconfont icon-gengduo" @click="table = true"></i>
      </div>
      <el-drawer
        class="hiddenSpace"
        v-model="table"
        direction="rtl"
        size="250px"
      >
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <router-link to="/" custom v-slot="props">
              <span @click="props.navigate">
                <i class="iconfont icon-shouye"></i>主页
              </span>
            </router-link>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <i
                class="iconfont icon-wenzhangfenlei"
                style="font-size: 20px"
              ></i
              >文章分类
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="/main/knowledgeSummary" custom v-slot="props">
                  <span @click="props.navigate">知识总结</span>
                </router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/main/studyNote" custom v-slot="props">
                  <span @click="props.navigate">学习笔记</span>
                </router-link>
              </el-menu-item>
              <el-menu-item index="2-3">
                <router-link to="/main/codeSharing" custom v-slot="props">
                  <span @click="props.navigate">代码分享</span>
                </router-link>
              </el-menu-item>
              <el-menu-item index="2-4">
                <router-link to="/main/informalEssay" custom v-slot="props">
                  <span @click="props.navigate">随笔</span>
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="3">
            <router-link to="/main/file" custom v-slot="props">
              <span @click="props.navigate">
                <i class="iconfont icon-jilu"></i>归档
              </span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link
              to="/main/messageBoard/62445ee429dd310398bc7a93"
              custom
              v-slot="props"
            >
              <span @click="props.navigate">
                <i class="iconfont icon-liuyanban-05"></i>留言板
              </span>
            </router-link>
          </el-menu-item>
          <el-sub-menu index="5">
            <template #title>
              <i class="iconfont icon-xiaoyouxi" style="font-size: 20px"></i
              >小游戏
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <router-link to="/main/snake" custom v-slot="props">
                  <span @click="props.navigate">贪吃蛇</span>
                </router-link>
              </el-menu-item>
              <el-menu-item index="5-2">
                <router-link to="/main/sudoku" custom v-slot="props">
                  <span @click="props.navigate">数独</span>
                </router-link>
              </el-menu-item>
              <el-menu-item index="5-3">
                <router-link to="/main/draw" custom v-slot="props">
                  <span @click="props.navigate">涂鸦板</span>
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="6">
            <router-link
              to="/main/about/6246ef7e77f7f26b8e5f7820"
              custom
              v-slot="props"
            >
              <span @click="props.navigate"
                ><i class="iconfont icon-guanyuwomen"></i>关于</span
              >
            </router-link>
          </el-menu-item>
          <input type="text" placeholder="搜索..." @keyup.enter="onSubmit" /><i
            class="iconfont icon-sousuo"
          ></i>
        </el-menu>
      </el-drawer>
    </div>
    <router-view class="view"></router-view>
    <div class="toTop" ref="toTopEl">
      <i
        class="iconfont icon-huidaodingbu"
        style="font-size: 30px; color: #feb8b0"
        @click="toTop"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { onMounted } from "vue";
import _ from "lodash";
const table = ref(false);
const mainEl = ref<HTMLElement>();
const panelEl = ref<HTMLElement>();
const toTopEl = ref<HTMLElement>();
const router = useRouter();
function onSubmit(event) {
  router.push(`/main/search/${event.target.value}`);
}

onMounted(() => {
  const top = mainEl.value!.offsetTop;
  fn();
  document.addEventListener("scroll", _.debounce(fn, 500));
  function fn() {
    if (
      mainEl.value!.getBoundingClientRect().top <
        top - panelEl.value!.clientHeight - 5 &&
      mainEl.value!.getBoundingClientRect().top > 0
    ) {
      toTopEl.value!.style.display = "block";
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  }
});
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
      90deg,
      rgba(50, 0, 0, 0.05) 3%,
      transparent 0
    ),
    linear-gradient(1turn, rgba(50, 0, 0, 0.05) 3%, transparent 0);
  background-size: 20px 20px;
  .panel {
    width: 100%;
    height: 80px;
    background: linear-gradient(#feb8b0, #fef9db);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: sticky;
    display: flex;
    justify-content: flex-end;
    top: 0;
    z-index: 999;
    .sun {
      position: absolute;
      left: 80px;
      top: 5px;
      width: 41px;
      height: 41px;
      border-radius: 50%;
      background: linear-gradient(to bottom, #ffc673, #ff653c);
    }
    .birds {
      position: absolute;
      left: 0;
      .bird {
        position: relative;
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
    }
    .title {
      position: absolute;
      left: 250px;
      height: 100%;
      align-items: center;
      .b1 {
        line-height: 80px;
        color: #d96354;
        font-size: 18px;
      }
    }
    .option {
      position: relative;
      ul {
        height: 100%;
        list-style: none;
        display: flex;
        li {
          line-height: 80px;
          position: relative;
          font-size: 18px;
          color: rgba(0, 0, 0, 0.5);
          background-color: inherit;
          input {
            background-color: inherit;
            border: 1px rgba(0, 0, 0, 0.2) solid;
            width: 150px;
            height: 30px;
            outline: none;
            border-radius: 15px;
            padding: 10px;
            margin-right: 5px;
            color: rgba(0, 0, 0, 0.5);
          }
          ul {
            position: absolute;
            list-style: none;
            opacity: 0;
            height: 0;
            z-index: 999;
            display: none;
            background-color: rgba(252, 252, 252, 0.6);
            overflow: hidden;
            li {
              height: 40px;
              line-height: 40px;
              padding-left: 8px;
              span {
                display: block;
              }
            }
            li:hover span {
              color: #d96354;
              transform: translateX(8px);
              transition: all 1s ease;
              cursor: url(../../assets/cursor/keHand.cur), auto;
            }
          }
        }
        li:hover > span {
          color: #d96354;
          cursor: url(../../assets/cursor/keHand.cur), auto;
        }
      }
      ul > li:hover ul {
        display: block;
        opacity: 1;
        transition: all 1s ease;
        height: auto;
        width: 130px;
      }
      .ul1 > li {
        padding: 0 10px;
      }
    }
    .phoneMove {
      height: 60px;
      margin-right: 20px;
      display: none;
      i {
        line-height: 60px;
        color: rgba(0, 0, 0, 0.5);
        font-size: 25px;
      }
    }
  }
  .toTop {
    position: fixed;
    right: 80px;
    bottom: 100px;
    display: none;
  }
  @media screen and (max-width: 900px) {
    .panel {
      height: 60px;
      .sun {
        left: 10px;
      }
      .birds {
        left: -50px;
        top: -20px;
      }
      .title {
        left: 200px;
      }
      .option {
        display: none;
      }
      .phoneMove {
        display: block;
      }
      .phoneOpen {
        width: 230px;
        height: 300px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 1px -1px 4px rgba(0, 0, 0, 0.5);
      }
    }
    .toTop {
      right: 10px;
    }
  }
}
</style>
