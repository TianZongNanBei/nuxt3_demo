<script lang="ts" setup>
import { useMouse } from '@/composables/useMouse';
import { useCounterStore } from '~/store/useCounterStore';
const { x, y } = useMouse();

const { $testPlugin } = useNuxtApp();
const pluginResult = $testPlugin();

const store = useCounterStore();
const { count, doubleCount } = storeToRefs(store);
</script>

<template>
  <div class="text-center">
    <h1 class="text-[50px] mt-10">Hello Nuxt!</h1>

    <p class="my-[30px] text-[24px]">hooks使用：鼠标的坐标点[x,y] = [{{ x }},{{ y }} ]</p>

    <p class="my-[30px] text-[24px]">插件使用： {{ pluginResult }}</p>

    <div class="my-[30px] text-[24px]">
      <span>🍍Pinia使用：</span>
      <el-tag type="primary" size="large">count : {{ count }}</el-tag>
      <el-tag type="success" size="large" class="mx-3">doubleCount : {{ doubleCount }}</el-tag>
      <el-button type="primary" size="default" @click="store.increment">点我 + 1</el-button>
    </div>
  </div>
</template>
