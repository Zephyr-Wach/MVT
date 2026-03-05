<script setup lang="ts">
import Layout from './layouts/Layout.vue'
import LoginAndRegister from '@/components/LoginAndRegister.vue'
import { useLoginModal } from '@/store/loginModal'

const loginModal = useLoginModal()
</script>

<template>
  <Layout />

  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-90"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-90"
  >
    <div v-if="loginModal.visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">
        <button
          class="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          @click="loginModal.close"
        >
          ✕
        </button>
        <LoginAndRegister />
      </div>
    </div>
  </transition>
</template>
