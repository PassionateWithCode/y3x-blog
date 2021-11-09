<template>
  <nav>
    <ul class="flex items-center text-xl">
      <div class="hidden md:block dark:text-gray-100">
        <router-link
          v-for="{ path, title } in menu"
          :key="title"
          class="mr-6"
          :to="path"
        >{{ title }}</router-link>
      </div>
      <div class="mr-6 md:hidden dark:text-gray-100">
        <icon icon="bx:bx-menu" size="30" />
      </div>
      <div class="mr-6 cursor-pointer" @click="toggleDark()">
        <icon icon="ic:round-light-mode" size="26" class="dark:text-gray-100" />
      </div>
      <div>
        <icon icon="ant-design:search-outlined" size="27" class="dark:text-gray-100" />
      </div>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import icon from '@/components/Icon.vue'
import { getMenuData } from '@/api'
import { is } from '@/utils'
const isDark = useDark()
const toggleDark = useToggle(isDark)
type Menu = {
  title: string;
  path: string;
}[]
const menu = ref<Menu>([])
onMounted(async () => {
  const { data } = await getMenuData<Menu>()
  menu.value = data
})
const a = "asdas"
if (is.Number("")) {
  console.log(a.length);
}

</script>
