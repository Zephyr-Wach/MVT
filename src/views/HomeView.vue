<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex h-full flex-col items-center justify-start bg-gradient-to-b from-blue-50 to-blue-100 px-6 pt-16">
    <div class="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-2xl">
      <div class="hero text-center">
        <h1 class="mb-4 text-3xl font-bold text-blue-800">{{ t('hero-title') }} 👋</h1>
        <p class="text-lg text-gray-600">{{ t('hero-subtitle') }}</p>
      </div>
    </div>

    <div class="mt-16 w-full max-w-3xl rounded-2xl bg-blue-50 p-8 shadow-lg transition-shadow hover:shadow-2xl">
      <section class="notice">
        <h2 class="mb-4 text-center text-2xl font-semibold text-blue-900">{{ t('notice') }}</h2>
        <ul class="list-inside list-disc space-y-2 text-gray-700">
          <li>{{ t('depend-1') }}</li>
          <li>{{ t('depend-2') }}</li>
          <li>{{ t('depend-3') }}</li>
          <li>{{ t('depend-4') }}</li>
          <li>{{ t('depend-5') }}</li>
          <li>{{ t('depend-6') }}</li>
        </ul>
      </section>
    </div>
  </div>
</template>
