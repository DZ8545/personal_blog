<template>
  <el-container
    class="layout-container-demo"
    style="height: 100vh; border: 1px solid #eee"
  >
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-scrollbar>
        <el-menu router :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>内容管理
            </template>
            <el-menu-item-group>
              <template #title>分类</template>
              <el-menu-item index="/category/create">新建分类</el-menu-item>
              <el-menu-item index="/category/list">分类列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template #title>文章</template>
              <el-menu-item index="/article/create">新建文章</el-menu-item>
              <el-menu-item index="/article/list">文章列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template #title>评论</template>
              <el-menu-item index="/comment/list">评论列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template #title>友链</template>
              <el-menu-item index="/friend/create">新建友链</el-menu-item>
              <el-menu-item index="/friend/list">友链列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template #title>用户</template>
              <el-menu-item index="/user/create">新建用户</el-menu-item>
              <el-menu-item index="/user/list">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>
      <router-view />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.layout-container-demo .el-header {
  position: relative;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>
