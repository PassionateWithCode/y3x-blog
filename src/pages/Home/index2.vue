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
import { reactive, ref, onMounted } from 'vue'
import { getArticleList } from '@/api/article/index'
import type { ArticleDetail } from '@/api/article/index'
import Banner from '@/components/Base/Banner/index.vue'
import ArticleCard from '@/components/Base/ArticleCard/index.vue'
import type { CarouselData } from '@/components/Base/Banner/index.vue'
import type { Pagination } from '@/api/model'


// !文章列表部分
const pageInfoParams = reactive({
  pageSize: 10,
  pageIndex: 1,
})
const pageInfo = reactive<Pagination>({
  pageSize: 10,
  pageIndex: 1,
  total: 0,
})

onMounted(async () => {
  refresh()
})

const articleList = ref<ArticleDetail[]>([])
const { data: articleListRes } = await getArticleList({ ...pageInfoParams, categoryId: 'xxx' })
articleList.value = articleListRes.list

async function refresh () {
  const {
    data: { list, pageInfo: pageInfoRes },
  } = await getArticleList({ categoryId: 'xxx', ...pageInfoParams })
  if (!articleList.value.length) {
    articleList.value = list
    genArticleWall(articleList.value)
  } else {
    articleList.value.push(...list)
  }
  Object.assign(pageInfo, pageInfoRes)
}

// 下一页
const nextPage = async () => {
  pageInfo.pageIndex++
  await refresh()
}


// const { articleList, nextPage } = await usePullArticle()

// const { articleList ,pageInfo }  = useXXX(getArticleList,xxx)

// !banner头部部分
const articleWall = ref<CarouselData[]>([])
genArticleWall(articleList.value)
// const [articleWall] = useGenerateBanner(articleList.value)
function genArticleWall (params: ArticleDetail[]) {
  articleWall.value = params.reduce((p, c) => {
    const newItem = {
      articleId: c.id,
      authorInfo: c.author,
      headImg: c.head_img,
      title: c.title,
    }
    return [...p, newItem]
  }, [] as CarouselData[])
}


</script>