<template>
  <div class="snakeGame">
    <Title title="贪吃蛇" subTitle="鼠鼠那么可爱，一定得多吃点！" />
    <div class="content">
      <div class="left">
        <el-card class="box-card">
          <template #header>
            <div class="card-header1">
              <span>排行榜</span>
            </div>
          </template>
          <el-table :data="ranks" style="width: 100%">
            <el-table-column prop="name" label="昵称" width="60" />
            <el-table-column prop="score" label="得分" width="60" />
            <el-table-column prop="remarks" label="备注" />
          </el-table>
        </el-card>
      </div>
      <div id="game">
        <div class="cover" v-show="snakeStatus === 3 || snakeStatus === 2">
          <div v-show="snakeStatus === 3">
            <p class="over">GAME OVER!</p>
            <div class="upload" v-show="!w1 && !w2 && !w3">
              <p>是否上传您的成绩</p>
              <el-input
                v-model="name_"
                class="w-50 m-2"
                placeholder="请输入您的昵称"
              />
              <el-input
                v-model="remarks"
                class="w-50 m-2"
                placeholder="请输入备注"
              />
              <el-button @click="up">上传</el-button>
            </div>
          </div>
          <div v-show="snakeStatus === 2">暂停</div>
        </div>
      </div>
      <div class="right">
        <el-card class="box-card2">
          <template #header>
            <div class="card-header1">
              <span>当前得分：{{ score }}</span>
            </div>
          </template>
          <div style="margin-bottom: 5px; margin-top: -5px">标准模式</div>
          <div>
            <el-button @click="continueGame">开始</el-button>
            <el-button @click="suspend">暂停</el-button>
          </div>
          <div style="margin-top: 13px">
            <el-button @click="startGame">重新开始</el-button>
          </div>
          <hr
            style="
              margin-top: 15px;
              margin-bottom: 15px;
              color: rgba(0, 0, 0, 0.3);
            "
          />
          <span>自定义模式</span>
          <div>
            <el-checkbox v-model="w1" label="碰到自己不会死" />
          </div>
          <div>
            <el-checkbox v-model="w3" label="碰到墙不会死" />
          </div>
          <div>
            <el-checkbox v-model="w2" label="关闭鼠鼠的定时器" />
          </div>
          <h style="font-size: 12px; color: rgba(0, 0, 0, 0.6)"
            >注：请重新开始</h
          >
        </el-card>
      </div>
    </div>
    <div class="foot">
      <p>
        使用w/arrowUp，a/arrowLeft,s/arrowDown与d/arrowRight控制贪吃蛇向上，向左，向上与向右
      </p>
      <p>
        贪吃蛇每吃10个鼠鼠便会膨胀，速度加快，殊不知欲望是无止境的，等待它的只有死亡
      </p>
      <p>贪吃蛇从吃第一只鼠鼠开始，每30s要吃一个，不然gameOver</p>
      <p>因为没找到适合的蛇图标，所以蛇头和身体用有色圆形代替</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watchEffect } from "vue";
import getServer from "@/requset/server/getServer";
const name_ = ref("");
const remarks = ref("");
const snakeStatus = ref(0); //蛇的状态，0是在起点处，1是到处跑，2是暂停，3是死了
const coverShow = ref(false);
const score = ref(0);
const w1 = ref(false); //碰到自己身体不会死
const w2 = ref(false); //鼠鼠不会消失
const w3 = ref(false); //碰到墙不会死
const snakeSpeed = ref(100); //蛇的速度
const foodSpeed = ref(5000); //食物出现的速度
let foodTimer;
let timer;
let map;
let x = 0;
let y = 0;
//food
class Food {
  x: number;
  y: number;
  width: number;
  height: number;
  element: HTMLElement;
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 15;
    this.height = 15;
    this.element = null;
  }
  createFood(map) {
    this.element && map.element.removeChild(this.element);
    this.x = Math.floor((Math.random() * map.width) / this.width);
    this.y = Math.floor((Math.random() * map.height) / this.height);
    // const element = document.createElement("div");
    // element.setAttribute("class", "food");
    const element = document.createElement("i");
    element.setAttribute("class", "iconfont icon-laoshu food");
    element.style.left = this.x * this.width + "px";
    element.style.top = this.y * this.height + "px";
    this.element = element;
    map.element.appendChild(element);
  }
}
//map
class Map {
  width: number;
  height: number;
  element: HTMLElement;
  constructor() {
    this.width = 600;
    this.height = 420;
    this.element = null;
  }
  createMap(game) {
    const div = document.createElement("div");
    div.setAttribute("id", "map");
    this.element = div;
    game.appendChild(div);
  }
}
//snake
class Snake {
  width: number;
  height: number;
  body: [{ x: number; y: number }];
  elements: [HTMLDivElement];
  direction: string;
  constructor() {
    this.width = 15;
    this.height = 15;
    this.body = [
      { x: 3, y: 1 },
      { x: 2, y: 1 },
      { x: 1, y: 1 },
    ];
    this.elements = [];
    this.direction = "right";
  }
  createSnake(map) {
    this.remove(map);
    for (let i = 0; i < this.body.length; i++) {
      const div = document.createElement("div");
      if (i === 0) {
        div.setAttribute("class", "snakeHead");
      } else {
        div.setAttribute("class", "snakeBody");
      }
      div.style.left = this.body[i].x * this.width + "px";
      div.style.top = this.body[i].y * this.height + "px";
      this.elements[i] = div;
      map.element.appendChild(div);
    }
  }
  remove(map) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i] && map.element.removeChild(this.elements[i]);
      this.elements[i] = null;
    }
  }
  move(map, food) {
    this.remove(map);
    const len = this.body.length;
    if (x !== 0) {
      y = Date.now();
      if (y - x >= 30000) {
        gameOver();
      }
    }
    for (let i = len - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    switch (this.direction) {
      case "right":
        this.body[0].x++;
        break;
      case "left":
        this.body[0].x--;
        break;
      case "top":
        this.body[0].y--;
        break;
      case "bottom":
        this.body[0].y++;
        break;
    }
    if (!w1.value) {
      for (let i = 1; i < this.body.length; i++) {
        if (
          this.body[0].x === this.body[i].x &&
          this.body[0].y === this.body[i].y
        ) {
          gameOver();
          break;
        }
      }
    }
    if (this.body[0].x === food.x && this.body[0].y === food.y) {
      this.body.push({ x: this.body[len - 1].x, y: this.body[len - 1].y });
      score.value++;
      x = Date.now();
      if (score.value < 20 && score.value > 10 && snakeSpeed.value === 100) {
        snakeSpeed.value = snakeSpeed.value - 10;
      } else if (
        score.value < 30 &&
        score.value > 20 &&
        snakeSpeed.value === 90
      ) {
        snakeSpeed.value = snakeSpeed.value - 10;
      } else if (
        score.value < 40 &&
        score.value > 30 &&
        snakeSpeed.value === 80
      ) {
        snakeSpeed.value = snakeSpeed.value - 10;
      } else if (
        score.value < 50 &&
        score.value > 40 &&
        snakeSpeed.value === 70
      ) {
        snakeSpeed.value = snakeSpeed.value - 10;
      } else if (
        score.value < 60 &&
        score.value > 50 &&
        snakeSpeed.value === 60
      ) {
        snakeSpeed.value = snakeSpeed.value - 10;
      } else if (
        score.value < 70 &&
        score.value > 60 &&
        snakeSpeed.value === 50
      ) {
        snakeSpeed.value = snakeSpeed.value - 10;
      } else if (
        score.value < 80 &&
        score.value > 50 &&
        snakeSpeed.value === 40
      ) {
        snakeSpeed.value = snakeSpeed.value - 10;
      } else if (
        score.value < 90 &&
        score.value > 60 &&
        snakeSpeed.value === 30
      ) {
        snakeSpeed.value = snakeSpeed.value - 10;
      }

      food.createFood(map);
      if (!w2.value) {
        clearInterval(foodTimer);
        foodTimer = setInterval(() => {
          food.createFood(map);
        }, foodSpeed.value);
      }
    }
  }
}
const food = new Food();
const snake = new Snake();
nextTick(() => {
  const game = document.getElementById("game");
  map = new Map();
  map.createMap(game);
});

function startGame() {
  nextTick(() => {
    init();
    food.createFood(map);
    snake.createSnake(map);
    watchEffect(() => {
      if (snakeStatus.value === 1) {
        foodAndSnakeStart(food, snake);
      }
    });
    bindKey(snake);
  });
}
function init() {
  if (snakeStatus.value === 1) {
    clearInterval(foodTimer);
    clearInterval(timer);
  }
  snakeStatus.value = 0;
  snake.body = [
    { x: 3, y: 1 },
    { x: 2, y: 1 },
    { x: 1, y: 1 },
  ];
  snake.direction = "right";
  score.value = 0;
}
function foodAndSnakeStart(food, snake) {
  clearInterval(foodTimer);
  clearInterval(timer);
  if (!w2.value) {
    foodTimer = setInterval(() => {
      food.createFood(map);
    }, foodSpeed.value);
  } else {
    food.createFood(map);
  }
  timer = setInterval(() => {
    if (!w3.value) {
      if (snake.direction === "left" && snake.body[0].x === 0) {
        gameOver();
        return;
      }
      if (
        snake.direction === "right" &&
        snake.body[0].x === map.width / snake.width - 1
      ) {
        gameOver();
        return;
      }
      if (snake.direction === "top" && snake.body[0].y === 0) {
        gameOver();
        return;
      }
      if (
        snake.direction === "bottom" &&
        snake.body[0].y === map.height / snake.height - 1
      ) {
        gameOver();
        return;
      }
    }
    snake.move(map, food);
    snake.createSnake(map);
  }, snakeSpeed.value);
}
function bindKey(snake) {
  document.addEventListener("keydown", (event) => {
    if (
      (event.key === "w" || event.key === "s") &&
      (snake.direction === "left" || snake.direction === "right")
    ) {
      snake.direction = event.key === "s" ? "bottom" : "top";
    }
    if (
      (event.key === "a" || event.key === "d") &&
      (snake.direction === "top" || snake.direction === "bottom")
    ) {
      snake.direction = event.key === "a" ? "left" : "right";
    }
    if (
      (event.key === "ArrowUp" || event.key === "ArrowDown") &&
      (snake.direction === "left" || snake.direction === "right")
    ) {
      snake.direction = event.key === "ArrowDown" ? "bottom" : "top";
    }
    if (
      (event.key === "ArrowLeft" || event.key === "ArrowRight") &&
      (snake.direction === "top" || snake.direction === "bottom")
    ) {
      snake.direction = event.key === "ArrowLeft" ? "left" : "right";
    }
  });
}
function gameOver() {
  snakeStatus.value = 3;
  coverShow.value = true;
  clearInterval(timer);
  clearInterval(foodTimer);
}
function suspend() {
  snakeStatus.value = 2;
  clearInterval(timer);
  clearInterval(foodTimer);
}
function continueGame() {
  if (snakeStatus.value === 0 || snakeStatus.value === 2) {
    snakeStatus.value = 1;
  }
}
startGame();
async function up() {
  const model = {
    name: name_.value,
    score: score.value,
    remarks: remarks.value,
    gameName: 1,
  };
  await getServer.post("/ranks", model);
  fetch();
}
const ranks = ref([]);
async function fetch() {
  const res = await getServer.get(`/ranks/1`);
  ranks.value = res.data;
}
fetch();
</script>

<style scoped lang="less">
.snakeGame {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    :deep #game {
      position: relative;
      margin: 0 30px;
      height: 420px;
      background-color: white;
      background-image: conic-gradient(
        at calc(100% - 1px) calc(100% - 1px),
        rgba(0, 0, 0, 0.2) 270deg,
        rgba(0, 0, 0, 0.4)
      );
      background-size: 15px 15px; /* adjust the size like you want */
      .cover {
        position: absolute;
        width: 600px;
        height: 420px;
        top: 0;
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        .over {
          text-align: center;
          color: rgba(255, 0, 0, 0.6);
          font-size: 25px;
          font-weight: bolder;
        }
        .upload {
          color: white;
        }
      }
      #map {
        position: relative;
        width: 600px;
        height: 420px;
        border: 1px rgba(0, 0, 0, 0.2) solid;
        .food {
          margin-top: -1px;
          margin-left: -2px;
          width: 15px;
          height: 15px;
          color: rgba(0, 0, 0, 0.6);
          position: absolute;
        }
        .snakeHead {
          margin-top: -1px;
          margin-left: -2px;
          width: 15px;
          height: 15px;
          background-color: rgba(0, 0, 0, 0.6);
          position: absolute;
          z-index: 9;
          border-radius: 50%;
        }
        .snakeBody {
          margin-top: -1px;
          margin-left: -2px;
          width: 15px;
          height: 15px;
          background-color: #83e378;
          position: absolute;
          border-radius: 50%;
        }
      }
    }

    .right {
    }
  }
  .foot {
    color: rgba(0, 0, 0, 0.5);
    margin-top: 15px;
    margin-bottom: 30px;
  }
}
</style>
