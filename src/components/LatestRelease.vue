<script setup lang="ts">
import { onMounted, ref } from 'vue'

const release = ref<any>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://api.github.com/repos/balajz/pgxcli/releases/latest')
    if (res.ok) {
      release.value = await res.json()
    }
  }
  catch (e) {
    console.error('Failed to fetch release', e)
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="mx-auto mt-8 text-left">
    <div v-if="loading" class="opacity-50 italic slide-enter">
      Fetching latest release data...
    </div>

    <div v-else-if="release" class="slide-enter" style="--enter-stage: 1;">
      <a
        :href="release.html_url"
        target="_blank"
        class="block bg-transparent hover:bg-gray-500/5 rounded-lg transition-colors p-4 -mx-4 no-underline group"
      >
        <div class="flex items-start gap-4">
          <div class="pt-1">
            <div class="i-simple-icons-postgresql text-4xl opacity-30 group-hover:opacity-70 transition-opacity" />
          </div>
          <div class="flex-auto">
            <div class="text-xl font-bold flex items-center gap-3 text-gray-700 dark:text-gray-200">
              pgxcli
              <span class="text-xs font-mono bg-gray-500/10 px-2 py-0.5 rounded text-blue-500">{{ release.tag_name }}</span>
            </div>
            <div class="opacity-50 text-sm mt-1">
              Published on {{ new Date(release.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </div>
            <div class="mt-3 opacity-75 font-normal text-sm leading-relaxed">
              Click here to view the full release notes, changelog, and download the latest binaries for Linux, macOS, and Windows.
            </div>
          </div>
          <div class="pt-2 opacity-0 group-hover:opacity-50 transition-opacity">
            <div class="i-carbon-arrow-up-right text-xl" />
          </div>
        </div>
      </a>
    </div>

    <div v-else class="opacity-50 italic slide-enter">
      Failed to load release information.
    </div>
  </div>
</template>
