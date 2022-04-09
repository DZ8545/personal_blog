<template>
  <div class="friends">
    <el-card class="box-card">
      <div class="name"><span>网站名字:</span>古月小站</div>
      <div class="address">
        <span>网站地址:</span>
      </div>
      <div class="description">
        <span>网站描述:</span>
      </div>
      <div class="mail">
        <span>联系方式:</span>
        2119921883@qq.com
      </div>
    </el-card>
    <div class="title">
      <h1>友链</h1>
      <p>海内存知己，天涯若比邻</p>
    </div>
    <div class="links">
      <h2
        style="
          color: rgba(255, 0, 0, 0.5);
          border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
          padding: 10px;
        "
      >
        # Friends
      </h2>
      <div class="link" v-for="item in friends" :key="item">
        <div style="display: flex; align-items: center">
          <img
            :src="item.headImg"
            alt=""
            style="width: 50px; height: 50px; border-radius: 50%"
          />
          <a :href="item.address" target="_blank">{{ item.name }}</a>
          <span>——{{ item.description }}</span>
        </div>
      </div>
      <h2
        style="
          color: rgba(255, 0, 0, 0.5);
          border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
          padding: 10px;
        "
      >
        # 添加
      </h2>
    </div>
  </div>
</template>

<script setup>
import getServer from "@/requset/server/getServer";
import { ref } from "vue";
const friends = ref([]);
async function fetch() {
  const res = await getServer.get("/friends");
  friends.value = res.data;
}
fetch();
</script>

<style scoped lang="less">
.friends {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  .title {
    text-align: center;
    margin: 20px;
    padding-bottom: 20px;
    padding-left: 150px;
    padding-right: 150px;
    border-bottom: 1px rgba(255, 0, 0, 0.4) solid;
    p {
      margin-top: 10px;
      margin-left: 300px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .links {
    width: 700px;
    .link {
      margin-top: 10px;
      padding: 5px;
      margin-bottom: 30px;
      a {
        margin-left: 10px;
        text-decoration: none;
      }
      a:hover {
        cursor: url(../../../assets/cursor/keHand.cur), default;
      }
    }
  }
  .box-card {
    position: fixed;
    left: 50px;
    width: 350px;
    height: 150px;
    top: 210px;
    background-color: inherit;
    div {
      padding: 5px;
    }
  }
}
</style>
