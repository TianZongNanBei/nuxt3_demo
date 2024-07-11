<script lang="ts" setup>
import { useMouse } from '@/composables/useMouse';
const { x, y } = useMouse();

const { $testPlugin } = useNuxtApp();
const pluginResult = $testPlugin();
</script>

<template>
  <div class="text-center">
    <h1 class="text-[50px] mt-10">Hello Nuxt!</h1>

    <p class="my-[30px] text-[24px]">hooks使用：鼠标的坐标点[x,y] = [{{ x }},{{ y }} ]</p>

    <p class="text-[24px]">插件使用： {{ pluginResult }}</p>
  </div>
</template>
