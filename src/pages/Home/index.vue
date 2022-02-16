<template>
  <Banner :carousel-data="articleWall" />
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { getArticleList } from '@/api/article/index'
import type { ArticleDetail } from '@/api/article/index'
import Banner from '@/components/Base/Banner/index.vue'
import type { CarouselData } from '@/components/Base/Banner/index.vue'

// !文章列表部分
const pageInfo = reactive({
  pageSize: 10,
  pageIndex: 1,
})
const articleList = ref<ArticleDetail[]>([])
const { data: articleListRes } = await getArticleList(pageInfo)
articleList.value = articleListRes



// !banner头部部分
const articleWall = ref<CarouselData[]>([])
genArticleWall(articleListRes)




// !右侧组件部分




// !utils
/**
 * 处理banner头部数据
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
  }, [] as CarouselData[])
}
</script>