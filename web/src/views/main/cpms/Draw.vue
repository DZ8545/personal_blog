<template>
  <div class="draw">
    <div class="title">
      <div>
        <h1>涂鸦板</h1>
      </div>
    </div>
    <div class="box1">
      <div class="left">
        <canvas width="600" height="400"></canvas>
      </div>
      <div class="right">
        <el-card class="card">
          <div>
            <label for="thickness">线条或橡皮大小：</label>
            <el-select id="thickness" v-model="w" style="width: 80px">
              <el-option value="1">1</el-option>
              <el-option value="2">2</el-option>
              <el-option value="3">3</el-option>
              <el-option value="4">4</el-option>
              <el-option value="5">5</el-option>
              <el-option value="6">6</el-option>
              <el-option value="7">7</el-option>
              <el-option value="8">8</el-option>
              <el-option value="9">9</el-option>
              <el-option value="10">10</el-option>
              <el-option value="11">11</el-option>
              <el-option value="12">12</el-option>
              <el-option value="13">13</el-option>
              <el-option value="14">14</el-option>
              <el-option value="15">15</el-option>
              <el-option value="16">16</el-option>
              <el-option value="17">17</el-option>
              <el-option value="18">18</el-option>
              <el-option value="19">19</el-option>
              <el-option value="20">20</el-option>
              <el-option value="21">21</el-option>
              <el-option value="22">22</el-option>
              <el-option value="23">23</el-option>
              <el-option value="24">24</el-option>
              <el-option value="25">25</el-option>
              <el-option value="26">26</el-option>
              <el-option value="27">27</el-option>
              <el-option value="28">28</el-option>
              <el-option value="29">29</el-option>
              <el-option value="30">30</el-option>
              <el-option value="31">31</el-option>
              <el-option value="32">32</el-option>
              <el-option value="33">33</el-option>
              <el-option value="34">34</el-option>
              <el-option value="35">35</el-option>
              <el-option value="36">36</el-option>
              <el-option value="37">37</el-option>
              <el-option value="38">38</el-option>
              <el-option value="39">39</el-option>
              <el-option value="40">40</el-option>
            </el-select>
          </div>
          <div>
            <label>类别：</label>
            <el-radio-group v-model="k">
              <el-radio label="画笔"></el-radio>
              <el-radio label="橡皮"></el-radio>
            </el-radio-group>
          </div>
          <div>
            <label for="color">颜色：</label>
            <el-color-picker v-model="color" show-alpha id="color" />
          </div>
          <div style="margin-top: 8px">
            <el-button @click="clear">清除画布</el-button>
            <el-button @click="saveImg">导出图片</el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const w = ref(1); //笔粗细和橡皮大小
const k = ref("画笔"); //画笔种类
const color = ref("rgba(0, 0, 0)");
let canvas, ctx;
onMounted(() => {
  canvas = document.querySelector("canvas");
  ctx = canvas.getContext("2d");
  document.onmousedown = (event) => {
    ctx.beginPath();
    ctx.lineWidth = w.value;
    ctx.strokeStyle = color.value;
    const beginX = event.clientX - canvas.offsetLeft;
    const beginY = event.clientY - canvas.offsetTop;
    ctx.moveTo(beginX, beginY);
    document.onmousemove = (event) => {
      const endX = event.clientX - canvas.offsetLeft;
      const endY = event.clientY - canvas.offsetTop;
      switch (k.value) {
        case "画笔":
          ctx.lineTo(endX, endY);
          ctx.stroke();
          break;
        case "橡皮":
          ctx.clearRect(
            endX - w.value,
            endY - w.value,
            2 * w.value,
            2 * w.value
          );
          break;
        default:
          break;
      }
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
});
function clear() {
  if (ctx) {
    ctx.clearRect(0, 0, 600, 400);
  }
}
function saveImg() {
  if (ctx) {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.download = "img";
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
</script>

<style scoped lang="less">
.draw {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .box1 {
    width: 700px;
    display: flex;
    .left {
      background-color: white;
      box-sizing: border-box;
      canvas {
        border: 1px solid rgba(255, 0, 0, 0.5);
      }
    }
    .right {
      margin-left: 30px;
      .card {
        width: 300px;
        display: flex;
        justify-content: space-around;
        align-content: space-around;
      }
    }
  }
  .title {
    text-align: center;
    margin: 20px;
    padding-bottom: 20px;
    padding-left: 150px;
    padding-right: 150px;
    border-bottom: 1px rgba(255, 0, 0, 0.4) solid;
  }
}
@media screen and (max-width: 900px) {
  .draw {
    .box1 {
      width: 100vw;
      flex-direction: column-reverse;
      .left {
        canvas {
          width: 100vw;
        }
      }
    }
    .title {
      padding: 0;
    }
  }
}
</style>
