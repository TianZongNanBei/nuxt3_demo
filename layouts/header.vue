<template>
  <el-menu :default-active="activeIndex" router mode="horizontal" :ellipsis="false">
    <el-menu-item index="">
      <Logo class="w-[200px]" />
    </el-menu-item>

    <div class="flex-grow"></div>

    <el-menu-item index="/">首页</el-menu-item>

    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="/list">
      <template #title>列表页</template>
      <el-menu-item index="/list/user">用户列表（本地sqlite）</el-menu-item>
      <el-menu-item index="/list/product">商品列表（远程服务器）</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex = ref('/');
</script>
