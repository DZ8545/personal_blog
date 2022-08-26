<template>
  <div class="categoryList">
    <h2>友链列表</h2>
    <el-table :data="listData">
      <el-table-column prop="_id" label="ID" width="220" />
      <el-table-column prop="name" label="网站名称" />
      <el-table-column prop="headImg" label="网站头像" />
      <el-table-column prop="address" label="网站地址" />
      <el-table-column prop="description" label="网站描述" />
      <el-table-column prop="mail" label="联系方式" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/friend/edit/${scope.row._id}`)"
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

<script setup lang="ts">
import request from "@/network/request";
import { ref } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
const listData = ref([]);
async function fetch() {
  const res = await request.get("/friends");
  listData.value = res.data;
}
fetch();
type rowType = {
  name: string;
  _id: string;
};
function deleteRow(row: rowType) {
  ElMessageBox.confirm(`确定删除分类 "${row.name}"`, "Warning", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    await request.delete(`/friends/${row._id}`);
    ElMessage({
      type: "success",
      message: "删除成功!",
    });
    fetch();
  });
}
</script>

<style scoped></style>
