<template>
  <div></div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { getArticleList } from '@/api/article/index'
import type { ArticleList } from '@/api/article/index'
const pageInfo = reactive({
  pageSize: 10,
  pageIndex: 1,
})

const articleList = ref<ArticleList>([])

getArticleList(pageInfo).then(res => {
  articleList.value = res.data
})


</script>

<style lang='sass' scoped>

</style>