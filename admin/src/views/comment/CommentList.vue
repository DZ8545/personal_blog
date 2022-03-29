<template>
  <div class="categoryList">
    <h2>评论列表</h2>
    <el-table :data="$store.state.comment.listData">
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

<script setup>
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { useStore } from "vuex";
const store = useStore();
store.dispatch("comment/getDataList");
function deleteRow(row) {
  ElMessageBox.confirm(`确定删除文章 "${row.name}"`, "Warning", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    store.dispatch("comment/deleteComment", row._id);
    ElMessage({
      type: "success",
      message: "删除成功!",
    });
    store.dispatch("comment/getDataList");
  });
}
function deleteAll() {
  store.dispatch("comment/deleteAllComment").then((res) => {
    store.dispatch("comment/getDataList");
  });
}
</script>

<style scoped></style>
