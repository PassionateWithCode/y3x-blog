<template>
  <div class="w-full max-w-screen-xl min-h-screen px-5 pt-5 m-auto">
    <BaseHeader />
    <BaseMain />
    <BaseFooter/>
  </div>
</template>
<script setup lang="ts">
import BaseHeader from '@/components/Base/Header/index.vue'
import BaseMain from '@/components/Base/Main.vue'
import BaseFooter from '@/components/Base/Footer.vue'
</script>
