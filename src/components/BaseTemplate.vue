<template>
  <header class="container px-4 mx-auto mt-6 prose-sm md:px-6 md:prose">
   
  </header>
  <main class="container mx-auto">
  </main>
  <footer class="container py-6 mx-auto text-sm text-center text-gray-700">
    {{VERSION}}
    {{BUILD_DATE}}
    {{thisYear}}
  </footer>
</template>
<script setup lang="ts">
import { useHead } from '@vueuse/head'

const props = defineProps<{
  title?: string
}>()

// Note: these are static. If you need these to be reactive, use ref() or reactive()
useHead({
  bodyAttrs: {
    title: props.title,
  },
  meta: [
    {
      property: 'og:locale:alternate',
      content: 'zh',
      key: 'zh',
    }
  ],
})

const VERSION = import.meta.env.VITE_APP_VERSION
const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined
const thisYear = new Date().getFullYear()
</script>
