<script setup lang="ts">
import { quotes, randomQuote } from '~/logics/quotes'

// Optional override, e.g. <Quote quote="..." author="..." /> in markdown.
const props = defineProps<{
  quote?: string
  author?: string
}>()

// SSR renders the first quote so the page is never empty; the client picks a
// random one as soon as it mounts (no hydration mismatch, no layout flash
// beyond the slide-enter animation).
const current = ref(quotes[0])

onMounted(() => {
  if (!props.quote)
    current.value = randomQuote()
})

const text = computed(() => props.quote ?? current.value.text)
const author = computed(() => props.author ?? (props.quote ? '' : current.value.author))
</script>

<template>
  <figure class="quote slide-enter">
    <blockquote class="quote-text">
      {{ text }}
    </blockquote>
    <figcaption v-if="author" class="quote-author">
      — {{ author }}
    </figcaption>
  </figure>
</template>

<style scoped>
.quote {
  max-width: 33rem;
  margin: 3.5rem auto;
  padding: 0 1.5rem;
  text-align: center;
}

.quote-text {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: ui-serif, Georgia, 'Times New Roman', serif;
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 400;
  line-height: 1.8;
  color: var(--fg-deep);
  opacity: 0.85;
  text-wrap: balance;
}

.quote-text::before {
  content: '“\2009';
}

.quote-text::after {
  content: '\2009”';
}

.quote-author {
  margin-top: 0.85rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.75rem;
  color: var(--fg-light);
  opacity: 0.9;
}
</style>
