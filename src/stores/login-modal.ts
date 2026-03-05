import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginModal = defineStore('loginModal', () => {
  const isOpen = ref(false)
  const redirectTo = ref<string | null>(null)

  const visible = computed(() => isOpen.value)

  const open = (path?: string): void => {
    isOpen.value = true
    redirectTo.value = path ?? null
  }

  const close = (): void => {
    isOpen.value = false
    redirectTo.value = null
  }

  return { isOpen, visible, redirectTo, open, close }
})
