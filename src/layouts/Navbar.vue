<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useLoginModal } from '@/store/loginModal'
import { useUserStore } from '@/store/userStore'

const { t } = useI18n()
const userStore = useUserStore()
const loginModal = useLoginModal()

const logout = () => userStore.logout()
</script>

<template>
  <header
    class="grid h-14 grid-cols-3 items-center border-b border-gray-200 bg-white/70 px-4 backdrop-blur-md transition-all"
  >
    <div class="flex items-center gap-2">
      {{ t('setLanguage') }}
      <select
        class="rounded border border-gray-300 px-2 py-1 transition-colors hover:bg-gray-200"
        @change="$emit('setLang', ($event.target as HTMLSelectElement).value)"
      >
        <option value="zh">简体中文</option>
        <option value="en">English</option>
      </select>
    </div>

    <div class="flex justify-center">
      <h1 class="text-lg font-semibold">my-vue-template</h1>
    </div>

    <div class="flex items-center justify-end gap-3">
      <template v-if="userStore.isLoggedIn">
        <RouterLink to="/userCenter" class="rounded px-2 py-1 transition-colors hover:bg-gray-100">
          {{ t('userCenter') }}
        </RouterLink>
        <button class="rounded px-2 py-1 transition-colors hover:bg-gray-100" @click="logout">
          {{ t('logout') }}
        </button>
      </template>

      <button
        v-else
        class="rounded px-2 py-1 transition-colors hover:bg-gray-100"
        @click="() => loginModal.open()"
      >
        {{ t('login') }}
      </button>
    </div>
  </header>
</template>
