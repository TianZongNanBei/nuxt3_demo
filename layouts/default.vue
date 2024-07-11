<script lang="ts" setup></script>

<template>
  <div>
    <NuxtLayout name="header"></NuxtLayout>

    <div class="min-h-[80vh] p-[20px]">
      <slot />
    </div>

    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>
