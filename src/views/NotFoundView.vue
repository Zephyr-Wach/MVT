<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
    <h1 class="mb-4 text-6xl font-bold text-red-500">404</h1>
    <p class="mb-6 text-xl text-gray-700">
      {{ t('notFound') }}
    </p>
    <router-link to="/" class="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
      {{ t('backToHome') }}
    </router-link>
  </div>
</template>
