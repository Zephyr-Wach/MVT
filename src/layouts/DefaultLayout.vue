<script setup lang="ts">
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const showSidebar = ref(false);

function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}

function setLang(lang: string) {
  locale.value = lang;
}
</script>

<template>
  <div class="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- 桌面端 Sidebar -->
    <Sidebar class="hidden md:flex rounded-2xl m-4 shadow-lg border border-gray-200/50 bg-white/80 backdrop-blur-md" />

    <!-- 移动端 Sidebar（抽屉效果） -->
    <transition name="slide">
      <div v-if="showSidebar" class="fixed inset-0 z-40 flex">
        <div class="bg-white/90 w-64 p-4 overflow-y-auto rounded-r-2xl shadow-xl border-r border-gray-200/50 backdrop-blur-md">
          <Sidebar :isMobile="true" />
        </div>
        <div class="flex-1 bg-black/30 backdrop-blur-sm" @click="toggleSidebar"></div>
      </div>
    </transition>

    <!-- 主内容区 -->
    <div class="flex flex-col flex-1 m-4 rounded-2xl shadow-lg border border-gray-200/50 bg-white/80 backdrop-blur-md">
      <!-- 移动端半圆按钮 -->
      <button
          class="md:hidden absolute top-1/2 left-0 z-50 w-12 h-24 bg-white/90 backdrop-blur-md shadow-sm border border-gray-200/50 rounded-r-full flex items-center justify-center hover:shadow-md transition-all"
          @click="toggleSidebar"
      >
        <svg
            class="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <Navbar @toggleSidebar="toggleSidebar" @setLang="setLang" class="rounded-t-2xl" />
      <main class="flex-1 w-full h-[95%] overflow-y-auto">
        <router-view class="w-full h-full min-h-full" />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* 滑动动画优化，增加柔和效果 */
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

/* 全局容器样式，苹果风格 */
:deep(.sidebar),
:deep(.navbar),
:deep(main) {
  transition: all 0.3s ease;
}

/* 悬浮效果 */
:deep(.sidebar:hover),
:deep(.navbar:hover) {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

button:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* 背景渐变和透明效果 */
.bg-gradient-to-br {
  background: linear-gradient(to bottom right, #f3f4f6, #e5e7eb);
}

/* 确保主内容区和子组件高度正确 */
main {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

:deep(.router-view) {
  flex: 1 1 auto;
  min-height: 100%;
}
</style>
