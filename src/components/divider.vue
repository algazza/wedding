<script setup lang="ts">
    defineProps<{
        color: string
    }>()
</script>

<template>
  <div
    :class="`relative flex items-center before:content-[''] before:flex-1 before:h-px before:bg-${color} after:content-[''] after:flex-1 after:h-px after:bg-${color} my-4`"
  >
    <div :class="`mx-8 size-3 rounded-full bg-${color}`" />
  </div>
</template>
