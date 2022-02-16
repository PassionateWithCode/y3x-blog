<template>
  <div class="w-full max-w-screen-xl px-5 pt-5 m-auto">
    <header class="flex items-center justify-between px-1 py-2">
      <HeadLogo />
      <HeadNav />
    </header>
  </div>
</template>

<script setup lang='ts'>
import HeadLogo from './components/HeadLogo.vue'
import HeadNav from './components/HeadNav.vue'
</script>
