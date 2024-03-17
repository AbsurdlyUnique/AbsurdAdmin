<script lang="ts">
  definePageMeta({
    title: 'Welcome',
    description: 'Welcome to Absurd Admin',
    middleware: ['auth'],
  })
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
