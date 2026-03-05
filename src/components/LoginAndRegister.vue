<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { loginByEmail } from '@/api/users'
import { useLoginModal } from '@/store/loginModal'
import { useUserStore } from '@/store/userStore'

const loginModal = useLoginModal()
const userStore = useUserStore()
const { t } = useI18n()
const mode = ref<'login' | 'register' | 'forgot'>('login')

const form = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const errors = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const modeText = computed(() => {
  if (mode.value === 'login') return 'login'
  if (mode.value === 'register') return 'register'
  return 'refindPwd'
})

const validate = () => {
  errors.username = ''
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''

  let valid = true

  if (!emailRegex.test(form.email)) {
    errors.email = 'enterIllegalEmail'
    valid = false
  }

  if (mode.value === 'register') {
    if (!form.username.trim()) {
      errors.username = 'enterUserName'
      valid = false
    }
    if (!form.password) {
      errors.password = 'enterPwd'
      valid = false
    }
    if (form.password !== form.confirmPassword) {
      errors.confirmPassword = 'differentPwdError'
      valid = false
    }
  }

  if (mode.value === 'login' && !form.password) {
    errors.password = 'enterPwd'
    valid = false
  }

  return valid
}

const handleSubmit = async () => {
  if (!validate()) return

  if (mode.value === 'login') {
    try {
      const user = { email: form.email, userPwd: form.password }
      const res = await loginByEmail(user)
      userStore.login({
        userId: res.data.data.userId,
        userName: res.data.data.userName,
        token: res.data.data.token,
        refreshToken: res.data.data.refreshToken,
      })
      loginModal.close()
    } catch (err) {
      console.error('login error:', err)
    }
  } else if (mode.value === 'register') {
    console.log('register:', form.username, form.email, form.password)
  } else {
    console.log('forgot pwd:', form.email)
  }
}
</script>

<template>
  <div class="w-full max-w-md">
    <h2 class="mb-6 text-center text-2xl font-bold">{{ t(modeText) }}</h2>

    <form class="relative space-y-4" novalidate @submit.prevent="handleSubmit">
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-x-6"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition duration-200 ease-in absolute w-full"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-6"
      >
        <div v-if="mode === 'login'" key="login">
          <div>
            <label class="mb-1 block text-sm font-medium">{{ t('email') }}</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :placeholder="t('enterEmail')"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ t(errors.email) }}</p>
          </div>
          <div>
            <label class="mb-1 block text-sm font-medium">{{ t('pwd') }}</label>
            <input
              v-model="form.password"
              type="password"
              class="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :placeholder="t('enterPwd')"
            />
            <p v-if="errors.password" class="mt-1 text-sm text-red-500">{{ t(errors.password) }}</p>
          </div>
        </div>
      </transition>

      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-x-6"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition duration-200 ease-in absolute w-full"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-6"
      >
        <div v-if="mode === 'register'" key="register">
          <div>
            <label class="mb-1 block text-sm font-medium">{{ t('userName') }}</label>
            <input
              v-model="form.username"
              type="text"
              class="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :placeholder="t('enterUserName')"
            />
            <p v-if="errors.username" class="mt-1 text-sm text-red-500">{{ t(errors.username) }}</p>
          </div>
          <div>
            <label class="mb-1 block text-sm font-medium">{{ t('email') }}</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :placeholder="t('enterEmail')"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ t(errors.email) }}</p>
          </div>
          <div>
            <label class="mb-1 block text-sm font-medium">{{ t('pwd') }}</label>
            <input
              v-model="form.password"
              type="password"
              class="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :placeholder="t('enterPwd')"
            />
            <p v-if="errors.password" class="mt-1 text-sm text-red-500">{{ t(errors.password) }}</p>
          </div>
          <div>
            <label class="mb-1 block text-sm font-medium">{{ t('confirmPwd') }}</label>
            <input
              v-model="form.confirmPassword"
              type="password"
              class="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :placeholder="t('enterConfirmPwd')"
            />
            <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-500">{{ t(errors.confirmPassword) }}</p>
          </div>
        </div>
      </transition>

      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in absolute w-full"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mode === 'forgot'" key="forgot">
          <div>
            <label class="mb-1 block text-sm font-medium">{{ t('email') }}</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :placeholder="t('enterRegisterEmail')"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ t(errors.email) }}</p>
          </div>
          <p class="mt-2 text-sm text-gray-500">
            {{ t('sendingPwdEmail') }}
          </p>
        </div>
      </transition>

      <button
        type="submit"
        class="w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        {{ t(modeText) }}
      </button>
    </form>

    <p class="mt-4 space-y-2 text-center text-sm text-gray-600">
      <template v-if="mode === 'login'">
        {{ t('noCount') }}？
        <button class="text-blue-600 hover:underline" @click="mode = 'register'">{{ t('goRegister') }}</button><br />
        {{ t('forgetPwd') }}？
        <button class="text-blue-600 hover:underline" @click="mode = 'forgot'">{{ t('refindPwd') }}</button>
      </template>
      <template v-else-if="mode === 'register'">
        {{ t('hadCount') }}？
        <button class="text-blue-600 hover:underline" @click="mode = 'login'">{{ t('goLogin') }}</button>
      </template>
      <template v-else>
        {{ t('gotPwd') }}？
        <button class="text-blue-600 hover:underline" @click="mode = 'login'">{{ t('backLogin') }}</button>
      </template>
    </p>
  </div>
</template>
