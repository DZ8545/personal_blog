<template>
  <div class="menu">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>目录</span>
        </div>
      </template>
      <el-tree
        style="background-color: inherit"
        class="tree"
        :data="menus"
        :props="defaultProps"
        @node-click="handleNodeClick"
        accordion
      >
      </el-tree>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
interface Tree {
  title: string;
  children?: Tree[];
}
// eslint-disable-next-line no-undef
defineProps(["menus"]);
const handleNodeClick = (data: Tree) => {
  window.scrollTo({
    top: document.getElementById(data.title.toLowerCase())!.offsetTop - 100,
    behavior: "smooth",
  });
};
const defaultProps = {
  children: "children",
  label: "title",
};
</script>

<style scoped lang="less">
.menu {
  .box-card {
    background-color: inherit;
    width: 300px;
    .tree:hover {
      .el-tree-node__content:hover {
        cursor: url(../../assets/cursor/keHand.cur), default !important;
        width: 600px;
      }
    }
  }
}
</style>
