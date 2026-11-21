<script setup lang="ts">
import { interestView } from '~/logics'

interface InterestItem {
  title: string
  image?: string
}

const props = withDefaults(defineProps<{
  items: InterestItem[]
  kind?: 'movie' | 'character'
}>(), {
  kind: 'movie',
})

const isMasonry = computed(() => interestView.value === 'masonry')

const placeholderIcon = computed(() => {
  if (props.kind === 'character')
    return 'i-ri-user-star-line'
  return 'i-ri-film-line'
})
</script>

<template>
  <div
    v-if="items.length"
    class="photos gap-4"
    :class="isMasonry
      ? 'columns-1 md:columns-2 lg:columns-3 xl:columns-4'
      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'"
  >
    <div
      v-for="item in items"
      :key="item.image ?? item.title"
      class="group"
      :class="isMasonry ? 'mb-4 break-inside-avoid' : ''"
    >
      <img
        v-if="item.image"
        :src="item.image"
        :alt="item.title"
        loading="lazy"
        class="block w-full bg-#8881"
        :class="isMasonry ? '' : 'aspect-square object-cover'"
      >
      <div class="mt-2 text-sm leading-snug op60 transition-opacity group-hover:op-100">
        {{ item.title }}
      </div>
    </div>
  </div>
  <div
    v-else
    class="max-w-sm flex flex-col items-center justify-center gap-3 rounded border border-dashed border-base py-10 op40"
  >
    <div :class="placeholderIcon" class="text-3xl" />
    <div class="text-sm">
      Coming soon
    </div>
  </div>
</template>
