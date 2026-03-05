import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export interface UserSession {
  userId: string
  userName: string
  token: string
  refreshToken: string
}

export const useUserStore = defineStore('user', () => {
  const userId = ref<string | null>(null)
  const userName = ref<string | null>(null)
  const token = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)

  const isLoggedIn = computed(() => Boolean(token.value && userId.value))

  const login = (payload: UserSession): void => {
    userId.value = payload.userId
    userName.value = payload.userName
    token.value = payload.token
    refreshToken.value = payload.refreshToken
  }

  const logout = (): void => {
    userId.value = null
    userName.value = null
    token.value = null
    refreshToken.value = null
  }

  return {
    userId,
    userName,
    token,
    refreshToken,
    isLoggedIn,
    login,
    logout,
  }
})
