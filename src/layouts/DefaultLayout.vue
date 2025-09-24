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
  <div class="flex h-screen">
    <!-- 桌面端 Sidebar -->
    <Sidebar class="hidden md:flex" />

    <!-- 移动端 Sidebar（抽屉效果） -->
    <transition name="slide">
      <div v-if="showSidebar" class="fixed inset-0 z-40 flex">
        <div class="bg-white w-64 p-4 overflow-y-auto">
          <Sidebar :isMobile="true" />
        </div>
        <div class="flex-1 bg-black/40" @click="toggleSidebar"></div>
      </div>
    </transition>

    <!-- 主内容区 -->
    <div class="flex flex-col flex-1">
      <Navbar @toggleSidebar="toggleSidebar" @setLang="setLang" />
      <main class="flex-1 overflow-y-auto p-6 bg-gray-100">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>