<template>
  <div class="login">
    <div class="box1">
      <h1 class="title">古月小站后台管理</h1>
      <el-tabs
        type="border-card"
        stretch
        style="background: rgba(255, 255, 255, 0.5)"
      >
        <el-tab-pane label="登录">
          <div class="log-in">
            <el-input v-model="input1" placeholder="请输入账号" />
            <el-input v-model="input2" placeholder="请输入密码" />
            <el-button type="primary" @click="login">登录</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="注册">
          <div class="registered">
            <el-input v-model="input3" placeholder="请输入账号" />
            <el-input v-model="input4" placeholder="请输入密码" />
            <el-input v-model="input5" placeholder="请输入暗号" />
            <el-input v-model="input6" placeholder="请输入完整身份证号" />
            <el-button type="primary" @click="registered">注册</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import request from "@/network/request";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
const input4 = ref("");
const input5 = ref("");
const input6 = ref("");
async function login() {
  if (input1.value && input2.value) {
    const info = [input1.value, input2.value];
    const res = await request.get(`/users/${info}`);
    console.log(res);
    if (res.data.code === 200) {
      localStorage.setItem("accessToken", res.data.data.token);
      router.push("/main");
    }
  }
}
async function registered() {
  if (input3.value && input4.value && input5.value) {
    const res: any = await request.post("/users", {
      account: input3.value,
      password: input4.value,
      signal: input5.value,
      identityNumber: input6.value,
    });
    if (res.code === "success") {
      ElMessage.success("注册成功");
    } else {
      ElMessage.error("验证失败");
    }
  }
}
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../../assets/img/login_backgroundImg.jpg") no-repeat;
  background-size: cover;
  .box1 {
    width: 600px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.1);
    .title {
      text-align: center;
      padding: 10px;
      background-image: linear-gradient(to right, #7ec6bc, #ebe717);
      -webkit-background-clip: text;
      color: transparent;
    }
    .log-in {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .registered {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>
