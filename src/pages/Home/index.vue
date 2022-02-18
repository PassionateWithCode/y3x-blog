<template>
  <Banner :carousel-data="articleWall" />
  <div class="flex">
    <div class="flex-1">
      <template v-for="item in articleList" :key="item.id">
        <ArticleCard class="my-5" v-bind="item"></ArticleCard>
      </template>
    </div>
    <div class="ml-5 w-96 hidden xl:block relative rounded-md overflow-hidden">slider</div>
  </div>
</template>

<script setup lang='ts'>
import Banner from '@/components/Base/Banner/index.vue'
import ArticleCard from '@/components/Base/ArticleCard/index.vue'
import { usePullArticle, useGenerateBanner } from '@/hooks/useArticle'

// ?文章列表部分
const { articleList, nextPage, pageInfo } = await usePullArticle()

// ?banner头部部分
const [articleWall] = useGenerateBanner(articleList.value)

// ?slider部分
// const [xxxx] = useXXXX(XXX)
</script>