<template>
  <div class="bg-white flex px-3 py-4">
    <n-image object-fit="cover" width="200" :src="head_img" />
    <div class="flex-1 flex flex-col justify-between px-2 pl-2">
      <div class="text-lg">{{ title }}</div>
      <div class="text-gray-700 line-clamp-2">{{ des }}</div>
      <div class="flex">
        <div class="flex">
          <n-icon size="18" color="#999">
            <PricetagsOutline />
          </n-icon>
          <div class="px-2">科技新品</div>
          <n-icon class="ml-4" size="20" color="#999">
            <User />
          </n-icon>
        </div>
        <div class="px-2">{{author.name}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { NImage, NIcon } from 'naive-ui'
import { PricetagsOutline } from '@vicons/ionicons5'
import { User } from '@vicons/tabler'

export interface IArticleCard {
  id: string
  title: string
  head_img: string
  des: string
  author: {
    id: string;
    name: string;
  }
}

defineProps<
  IArticleCard
>()
</script>


