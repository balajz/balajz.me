<script setup lang="ts">
import { interestView } from '~/logics'

const isMasonry = computed(() => interestView.value === 'masonry')

function toggleView() {
  interestView.value = isMasonry.value ? 'grid' : 'masonry'
}
</script>

<template>
  <div class="fixed left-6 top-20 z-200 hidden lg:block print:hidden">
    <button
      type="button"
      :title="isMasonry ? 'Switch to uniform grid' : 'Switch to masonry layout'"
      :aria-label="isMasonry ? 'Switch to uniform grid' : 'Switch to masonry layout'"
      class="rounded-full p2 op30 transition duration-300 hover:op100 hover:bg-#8881"
      @click="toggleView"
    >
      <div :class="isMasonry ? 'i-ri-layout-masonry-line' : 'i-ri-grid-line'" />
    </button>
  </div>
</template>
