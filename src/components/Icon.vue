<template>
  <span :class="['iconify', $attrs.class]" :data-icon="icon" :style="getWrapStyle"></span>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import type { CSSProperties, PropType } from 'vue'
const props = defineProps({
  size: {
    type: String as PropType<number | string>,
    default: '16',
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  background: {
    type: String
  }
})
const getWrapStyle = computed<CSSProperties>(() => {
  const { color, size, background } = props
  return {
    color,
    background,
    fontSize: `${size}px`,
    display: 'inline-flex',
  }
})
</script>

<style lang='sass' scoped></style>