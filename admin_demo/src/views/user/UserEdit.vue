<template>
  <div class="edit">
    <h2>{{ id ? "编辑" : "创建" }}用户</h2>
    <el-form label-width="120px">
      <el-form-item label="账号">
        <el-input size="large" v-model="model.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input size="large" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import request from "@/network/request";
const model = ref({
  account: "",
  password: "",
});
const save = async () => {
  if (model.value.account) {
    if (props.id) {
      await request.put(`/users/${props.id}`, model.value);
      ElMessage({
        showClose: true,
        message: "修改成功!",
        type: "success",
      });
    } else {
      await request.post("/users", {
        ...model.value,
        signal: "暗号",
        identityNumber: "5472",
      });
      ElMessage({
        showClose: true,
        message: "保存成功!",
        type: "success",
      });
    }
  } else {
    ElMessage.error("请填入内容！！！");
  }
};

const props = defineProps(["id"]);

async function fecth() {
  const res = await request.get(`/userId/${props.id}`);
  model.value = { account: res.data.account, password: res.data.password };
}

if (props.id) {
  fecth();
}
</script>

<style scoped></style>
