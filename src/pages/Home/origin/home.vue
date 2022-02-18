<template>
  <Banner :carousel-data="articleWall" />
  <div class="flex">
    <div class="flex-1">
      <template v-for="item in articleList" :key="item.id">
        <ArticleCard class="my-5" v-bind="item"></ArticleCard>
      </template>
    </div>
    <div class="ml-5 w-96 hidden xl:block relative rounded-md overflow-hidden">123143534</div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted } from 'vue'
import { refresh, nextPage, articleWall, articleList, resetPage } from './home'

import Banner from '@/components/Base/Banner/index.vue'
import ArticleCard from '@/components/Base/ArticleCard/index.vue'

onMounted(() => {
  refresh()
})

onUnmounted(() => {
  resetPage()
})

</script>