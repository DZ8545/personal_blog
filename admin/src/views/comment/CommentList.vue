<template>
  <div class="categoryList">
    <h2>评论列表</h2>
    <el-table :data="listData">
      <el-table-column prop="_id" label="ID" width="220" />
      <el-table-column prop="name" label="昵称" />
      <el-table-column prop="remark" label="内容" />
      <el-table-column prop="parent" label="父评论" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button type="text" size="small" @click="deleteRow(scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="deleteAll">全删</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import request from "@/network/request";
const listData = ref([]);
async function fetch() {
  const res = await request.get("/comments");
  listData.value = res.data;
}
fetch();
type rowType = {
  name: string;
  _id: string;
};
async function deleteRow(row: rowType) {
  ElMessageBox.confirm(`确定删除文章 "${row.name}"`, "Warning", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    deleteOne(row);
    ElMessage({
      type: "success",
      message: "删除成功!",
    });
    fetch();
  });
}

async function deleteOne(row: rowType) {
  await request.delete(`/comments/${row._id}`);
}
async function deleteAll() {
  await request.delete(`/commentsAll`);
  fetch();
}
</script>

<style scoped></style>
