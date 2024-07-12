<script lang="ts" setup>
import { useCounterStore } from '~/store/useCounterStore';

const route = useRoute();
const id = ref(route.params.id);

const store = useCounterStore();
const { count, doubleCount } = storeToRefs(store);
</script>

<template>
  <div class="text-center">
    <h1 class="text-[50px] mt-10">路径参数ID: {{ id }}</h1>

    <div class="my-[30px] text-[24px]">
      <span>🍍Pinia使用：</span>
      <el-tag type="primary" size="large">count : {{ count }}</el-tag>
      <el-tag type="success" size="large" class="mx-3">doubleCount : {{ doubleCount }}</el-tag>
      <el-button type="primary" size="default" @click="store.increment">点我 + 1</el-button>
    </div>
  </div>
</template>
