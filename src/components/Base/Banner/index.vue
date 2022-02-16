<template>
  <div class="flex">
    <n-carousel dot-placement="right" class="w-full flex-1">
      <div
        v-for="item in carouselData"
        :key="item.articleId"
        class="relative rounded-md overflow-hidden"
      >
        <img class="carousel-img" :src="item.headImg" />
        <div class="absolute left-6 bottom-2 text-2xl text-gray-300">{{ item.title }}</div>
      </div>
    </n-carousel>
    <div class="banner-bg ml-5 w-96 hidden xl:block relative rounded-md overflow-hidden">
      <div class="absolute bottom-2 left-5">
        <div class="text-lg text-gray-300">前沿科技</div>
        <div class="text-base text-gray-50">全球前沿数码科技描述</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { NCarousel } from 'naive-ui'
interface Carousel {
  articleId: string
  authorInfo: {
    id: string
    name: string
  }
  title: string
  headImg: string
}

const backgroundImg = "url(https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2021/09/2021090407183119-scaled.jpg)"

// const color1 = 'blue'

defineProps<{
  carouselData: Carousel[]
}>()
</script>

<style lang='sass' scoped>
.carousel-img
  width: 100%
  height: 350px
  object-fit: cover
.banner-bg
  // background-color: v-bind(color1)
  background-image: v-bind(backgroundImg)
  background-size: cover
</style>