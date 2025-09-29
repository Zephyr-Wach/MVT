<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-start pt-16 px-6">

    <div class="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
      <div class="hero text-center">
        <h1 class="text-3xl font-bold text-blue-800 mb-4">{{ t("hero-title") }} 👋</h1>
        <p class="text-gray-600 text-lg">{{ t("hero-subtitle") }}</p>
      </div>
    </div>

    <div class="w-full max-w-3xl bg-blue-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow mt-16">
      <section class="notice">
        <h2 class="text-2xl font-semibold text-blue-900 mb-4 text-center">{{ t("notice") }}</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>{{ t("depend-1") }}</li>
          <li>{{ t("depend-2") }}</li>
          <li>{{ t("depend-3") }}</li>
          <li>{{ t("depend-4") }}</li>
          <li>{{ t("depend-5") }}</li>
          <li>{{ t("depend-6") }}</li>
        </ul>
      </section>
    </div>

  </div>
</template>
