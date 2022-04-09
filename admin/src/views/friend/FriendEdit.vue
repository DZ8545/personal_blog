<template>
  <div class="edit">
    <h2>{{ id ? "编辑" : "创建" }}友链</h2>
    <el-form label-width="120px">
      <el-form-item label="名称">
        <el-input size="large" v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="网站头像">
        <el-input size="large" v-model="model.headImg"></el-input>
      </el-form-item>
      <el-form-item label="网站描述">
        <el-input size="large" v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item label="网站地址">
        <el-input size="large" v-model="model.address"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input size="large" v-model="model.mail"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import request from "@/network/request";
const model = ref({
  name: "",
  description: "",
  address: "",
  mail: "",
  headImg: "",
});
const parents = ref([]);
const router = useRouter();
const save = async () => {
  if (model.value.name) {
    if (props.id) {
      await request.put(`/friends/${props.id}`, model.value);
      ElMessage({
        showClose: true,
        message: "修改成功!",
        type: "success",
      });
    } else {
      await request.post("/friends", model.value);
      ElMessage({
        showClose: true,
        message: "保存成功!",
        type: "success",
      });
    }
    // router.push("/category/list");
  } else {
    ElMessage.error("请填入内容！！！");
  }
};

// eslint-disable-next-line no-undef
const props = defineProps(["id"]);

async function fecth() {
  const res = await request.get(`/friends/${props.id}`);
  model.value = res.data;
}

if (props.id) {
  fecth();
}
</script>

<style scoped></style>
