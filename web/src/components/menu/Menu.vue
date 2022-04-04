<template>
  <div class="menu">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>目录</span>
        </div>
      </template>
      <el-tree
        :data="menus"
        :props="defaultProps"
        @node-click="handleNodeClick"
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
const props = defineProps(["menus"]);
const handleNodeClick = (data: Tree) => {
  window.scrollTo({
    top: document.getElementById(data.title.toLowerCase())!.offsetTop - 100,
    behavior: "smooth",
  });
};
console.log(props.menus);
const defaultProps = {
  children: "children",
  label: "title",
};
</script>

<style scoped lang="less">
.menu {
  .box-card {
    width: 300px;
  }
}
</style>
