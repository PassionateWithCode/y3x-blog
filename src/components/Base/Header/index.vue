<template>
  <div class="sticky top-0  z-50 bg-white w-full">
    <header class="flex items-center justify-between px-1 py-2 max-w-screen-xl py-5 m-auto">
      <HeadLogo />
      <HeadNav />
    </header>
  </div>
</template>

<script setup lang='ts'>
import HeadLogo from './HeadLogo.vue'
import HeadNav from './HeadNav.vue'
</script>
