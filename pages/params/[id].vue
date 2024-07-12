<script lang="ts" setup>
const route = useRoute();
const id = ref(route.params.id);
</script>

<template>
  <h1 class="text-[50px] text-center mt-[10px]">ID: {{ id }}</h1>
</template>
