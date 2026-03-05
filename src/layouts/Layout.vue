<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

const { locale } = useI18n()
const showSidebar = ref(false)

function toggleSidebar() {
  showSidebar.value = !showSidebar.value
}

function setLang(lang: string) {
  locale.value = lang
}
</script>

<template>
  <div class="flex h-screen w-screen gap-4 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-4">
    <Sidebar
      class="hidden h-full w-64 flex-shrink-0 rounded-2xl border border-gray-200/50 bg-white/80 shadow-lg backdrop-blur-md transition-all hover:shadow-xl md:flex"
    />

    <transition name="slide">
      <div v-if="showSidebar" class="fixed inset-0 z-40 flex h-full">
        <div
          class="h-full w-64 overflow-y-auto rounded-r-2xl border-r border-gray-200/50 bg-white/90 p-4 shadow-xl backdrop-blur-md transition-all hover:shadow-2xl"
        >
          <Sidebar :isMobile="true" />
        </div>
        <div class="flex-1 bg-black/30 backdrop-blur-sm" @click="toggleSidebar"></div>
      </div>
    </transition>

    <div
      class="relative flex h-full flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200/50 bg-white/80 shadow-lg backdrop-blur-md transition-all hover:shadow-xl"
    >
      <button
        class="absolute left-0 top-1/2 z-50 flex h-24 w-12 items-center justify-center rounded-r-full border border-gray-200/50 bg-white/90 shadow-sm backdrop-blur-md transition-all hover:scale-110 hover:shadow-xl md:hidden"
        @click="toggleSidebar"
      >
        <svg
          class="h-6 w-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <Navbar class="rounded-t-2xl" @setLang="setLang" @toggleSidebar="toggleSidebar" />

      <main class="flex w-full flex-1 flex-col overflow-y-auto p-4">
        <router-view class="h-full w-full flex-1" />
      </main>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.4s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
