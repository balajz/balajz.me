<template>
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Balaji J</title>
    <text
      class="path1"
      x="50"
      y="54"
      font-size="16"
      font-weight="900"
      font-family="system-ui, -apple-system, sans-serif"
      text-anchor="middle"
      fill="transparent"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      BJ
    </text>
  </svg>
</template>

<style scoped>
@media (prefers-reduced-motion) {
  .path1 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@media print {
  .path1 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@keyframes grow {
  0% {
    stroke-dashoffset: 1px;
    stroke-dasharray: 0 350px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    stroke-dasharray: 350px 0;
  }
  85% {
    stroke-dasharray: 350px 0;
  }
  95%,
  to {
    stroke-dasharray: 0 350px;
  }
}
.path1 {
  stroke-dashoffset: 1px;
  stroke-dasharray: 350px 0;
  animation: grow 10s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 0s;
}
.dark .path1 {
  stroke: #fdfdfd;
}
</style>
