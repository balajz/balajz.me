<script setup lang="ts">
import raw from '../../../photos/data'
import { galleryView } from '../../logics'

const props = defineProps<{
  limit?: number
}>()

const photos = computed(() => {
  if (props.limit)
    return raw.slice(0, props.limit)
  return raw
})

function toggleView() {
  galleryView.value = galleryView.value === 'cover' ? 'contain' : 'cover'
}
</script>

<template>
  <div v-if="photos.length" flex="~ gap-1 col items-center justify-center" absolute sm:fixed left-6 top-20>
    <button
      title="Switch view"
      rounded-full p2 op20 hover="op100 bg-#8881"
      @click="toggleView"
    >
      <div :class="galleryView === 'cover' ? 'i-ri-grid-line' : 'i-ri-layout-masonry-line'" />
    </button>
  </div>
  <PhotoGrid v-if="photos.length" :photos="photos" :view="galleryView" />
  <div v-else class="prose mx-auto mt-10 text-center" op50>
    No photos yet — they are on the way.
  </div>
</template>
