<template>
  <Banner :carousel-data="articleWall" />
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { getArticleList } from '@/api/article/index'
import type { ArticleDetail } from '@/api/article/index'
import type { ArticleWall } from './model'
import Banner from '@/components/Base/Banner/index.vue'

const pageInfo = reactive({
  pageSize: 10,
  pageIndex: 1,
})


const articleList = ref<ArticleDetail[]>([])

getArticleList(pageInfo).then(res => {
  genArticleWall(res.data)
  articleList.value = res.data
})

// !文章轮播图
const articleWall = ref<ArticleWall[]>([])

/**
 * 处理文章详情的
 * @param {ArticleDetail[]} param - 文章详情列表
*/
function genArticleWall (params: ArticleDetail[]) {
  articleWall.value = params.reduce((p, c) => {
    const newItem = {
      articleId: c.id,
      authorInfo: c.author,
      headImg: c.head_img,
      title: c.title
    }
    return [...p, newItem]
  }, [] as ArticleWall[])
}


</script>

<style lang='sass' scoped>

</style>