<template>
  <div class="categoryList">
    <h2>分类列表</h2>
    <el-table :data="listData">
      <el-table-column prop="_id" label="ID" width="220" />
      <el-table-column prop="categories" label="分类" />
      <el-table-column prop="title" label="标题" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/article/edit/${scope.row._id}`)"
          >
            编辑
          </el-button>
          <el-button type="text" size="small" @click="deleteRow(scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import request from "@/network/request";
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
const listData = ref([]);
async function fetch() {
  const res = await request.get("/articlesAll");
  listData.value = res.data;
}
fetch();
function deleteRow(row) {
  ElMessageBox.confirm(`确定删除文章 "${row.title}"`, "Warning", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    const res = await request.delete(`/articles/${row._id}`);
    ElMessage({
      type: "success",
      message: "删除成功!",
    });
    fetch();
  });
}
</script>

<style scoped></style>
