<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface UserProfileItem {
  key: string
  label: string
  value: any
}

const userProfile = ref<UserProfileItem[]>([])

const getValue = (key: string) => userProfile.value.find((i) => i.key === key)?.value

const editingCard = ref('')
const formData = reactive({
  avatar: '',
  name: '',
  bio: '',
  email: '',
  location: '',
  website: '',
  company: '',
  phone: '',
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
  twoFA: false,
})

interface UserProfile {
  avatar?: string
  name?: string
  username?: string
  bio?: string
  email?: string
  location?: string
  website?: string
  company?: string
  phone?: string
  twoFA?: boolean
}

const setUserProfile = async () => {
  try {
    // TODO fetch UserProfile
    // const res = await fetchUserProfile()
    // const data: UserProfile = res.data.data
    // userProfile.value = (Object.keys(data) as (keyof UserProfile)[]).map(key => ({
    //   key: key as string,
    //   label: key,
    //   value: data[key as keyof UserProfile]
    // }))
  } catch (err) {
    console.error('get user profile error:', err)
  }
}

const openEdit = (card: string) => {
  editingCard.value = card
  if (card === 'basic') {
    formData.avatar = getValue('avatar')
    formData.name = getValue('name')
    formData.bio = getValue('bio')
  } else if (card === 'contact') {
    formData.email = getValue('email')
    formData.location = getValue('location')
    formData.website = getValue('website')
    formData.company = getValue('company')
  } else if (card === 'security') {
    formData.phone = getValue('phone')
    formData.twoFA = getValue('2fa')
  }
}

const closeEdit = () => (editingCard.value = '')

const saveEdit = () => {
  if (editingCard.value === 'basic') {
    ['avatar', 'name', 'bio'].forEach((key) => {
      const item = userProfile.value.find((i) => i.key === key)
      if (item) item.value = formData[key as keyof typeof formData]
    })
    console.log('PATCH /user/profile:', formData.avatar, formData.name, formData.bio)
  } else if (editingCard.value === 'contact') {
    ['email', 'location', 'website', 'company'].forEach((key) => {
      const item = userProfile.value.find((i) => i.key === key)
      if (item) item.value = formData[key as keyof typeof formData]
    })
    console.log('PATCH /user/contact:', formData.email, formData.location, formData.website, formData.company)
  } else if (editingCard.value === 'security') {
    ['phone', 'twoFA'].forEach((key) => {
      const item = userProfile.value.find((i) => i.key === key)
      if (item) item.value = formData[key as keyof typeof formData]
    })
    console.log('PATCH /user/security:', formData.phone, formData.twoFA)
  } else if (editingCard.value === 'securityPassword') {
    console.log('PATCH /user/securityPwd:', formData.oldPassword, formData.newPassword, formData.confirmPassword)
  }
  closeEdit()
}

onMounted(() => {
  setUserProfile()
})
</script>

<template>
  <div class="h-full bg-gray-100 p-6">
    <div class="mx-auto max-w-5xl space-y-6">
      <div
        class="relative flex flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-lg md:flex-row md:items-start"
      >
        <img
          :src="getValue('avatar')"
          class="h-36 w-36 cursor-pointer rounded-full border-4 border-blue-200 shadow-lg"
          @click="openEdit('basic')"
        />
        <div class="flex-1 space-y-2 text-center md:text-left">
          <h1 class="text-3xl font-bold">{{ getValue('name') }}</h1>
          <p class="text-lg text-gray-500">@{{ getValue('username') }}</p>
          <p class="text-gray-700">{{ getValue('bio') }}</p>
        </div>
        <button
          class="absolute bottom-4 right-4 rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600"
          @click="openEdit('basic')"
        >
          {{ t('change') }}
        </button>
      </div>

      <div class="flex justify-around rounded-2xl bg-white p-6 shadow-lg">
        <div class="text-center">
          <p class="text-xl font-bold">{{ getValue('repos') }}</p>
          <p class="text-gray-500">{{ t('Repositories') }}</p>
        </div>
        <div class="text-center">
          <p class="text-xl font-bold">{{ getValue('followers') }}</p>
          <p class="text-gray-500">{{ t('Followers') }}</p>
        </div>
        <div class="text-center">
          <p class="text-xl font-bold">{{ getValue('following') }}</p>
          <p class="text-gray-500">{{ t('Following') }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-6 md:flex-row">
        <div class="flex-1 rounded-2xl bg-white p-6 shadow-lg">
          <div class="mb-2 flex items-center justify-between">
            <h2 class="text-xl font-semibold">{{ t('ContactInfo') }}</h2>
            <button
              class="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
              @click="openEdit('contact')"
            >
              {{ t('change') }}
            </button>
          </div>
          <ul class="space-y-1 text-gray-700">
            <li><span class="font-semibold">{{ t('email') }}:</span> {{ getValue('email') }}</li>
            <li><span class="font-semibold">{{ t('Location') }}:</span> {{ getValue('location') }}</li>
            <li>
              <span class="font-semibold">{{ t('Website') }}:</span>
              <a :href="getValue('website')" target="_blank" class="text-blue-500 hover:underline">
                {{ getValue('website') }}
              </a>
            </li>
            <li><span class="font-semibold">{{ t('Company') }}:</span> {{ getValue('company') }}</li>
          </ul>
        </div>

        <div class="flex-1 rounded-2xl bg-white p-6 shadow-lg">
          <div class="mb-2 flex items-center justify-between">
            <h2 class="text-xl font-semibold">{{ t('Security') }}</h2>
          </div>
          <ul class="space-y-2 text-gray-700">
            <li class="relative">
              <span class="font-semibold">{{ t('pwd') }}:</span> ******
              <button
                class="absolute right-0 rounded bg-blue-500 px-2 py-0.5 text-sm text-white hover:bg-blue-600"
                @click="openEdit('securityPassword')"
              >
                {{ t('changePwd') }}
              </button>
            </li>

            <li class="relative">
              <span class="font-semibold">{{ t('Phone') }}:</span> {{ getValue('phone') || t('unbound') }}
              <button
                class="absolute right-0 rounded bg-blue-500 px-2 py-0.5 text-sm text-white hover:bg-blue-600"
                @click="openEdit('security')"
              >
                {{ t('changePhone') }}
              </button>
            </li>

            <li>
              <span class="font-semibold">{{ t('Two-factor') }}</span>
              {{ getValue('2fa') ? t('enabled') : t('disabled') }}
            </li>
          </ul>
        </div>
      </div>

      <div class="space-y-2 rounded-2xl bg-white p-6 shadow-lg">
        <h2 class="mb-2 text-xl font-semibold">{{ t('AccountInfo') }}</h2>
        <p><span class="font-semibold">{{ t('Joined') }}:</span> {{ getValue('joined') }}</p>
        <p><span class="font-semibold">{{ t('userName') }}:</span> {{ getValue('username') }}</p>
      </div>
    </div>

    <div v-if="editingCard" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
        <h2 class="mb-4 text-2xl font-bold">
          {{
            editingCard === 'basic'
              ? t('editBasicInfo')
              : editingCard === 'contact'
                ? t('editContactInfo')
                : t('editSecurityInfo')
          }}
        </h2>
        <form class="space-y-3" @submit.prevent="saveEdit">
          <template v-if="editingCard === 'basic'">
            <label class="block">
              <span class="font-semibold">{{ t('AvatarURL') }}</span>
              <input v-model="formData.avatar" type="text" class="mt-1 w-full rounded border p-2" />
            </label>
            <label class="block">
              <span class="font-semibold">{{ t('Name') }}</span>
              <input v-model="formData.name" type="text" class="mt-1 w-full rounded border p-2" />
            </label>
            <label class="block">
              <span class="font-semibold">{{ t('Bio') }}</span>
              <textarea v-model="formData.bio" class="mt-1 w-full rounded border p-2"></textarea>
            </label>
          </template>

          <template v-if="editingCard === 'contact'">
            <label class="block">
              <span class="font-semibold">{{ t('email') }}</span>
              <input v-model="formData.email" type="email" class="mt-1 w-full rounded border p-2" />
            </label>
            <label class="block">
              <span class="font-semibold">{{ t('Location') }}</span>
              <input v-model="formData.location" type="text" class="mt-1 w-full rounded border p-2" />
            </label>
            <label class="block">
              <span class="font-semibold">{{ t('Website') }}</span>
              <input v-model="formData.website" type="text" class="mt-1 w-full rounded border p-2" />
            </label>
            <label class="block">
              <span class="font-semibold">{{ t('Company') }}</span>
              <input v-model="formData.company" type="text" class="mt-1 w-full rounded border p-2" />
            </label>
          </template>

          <template v-if="editingCard === 'security'">
            <label class="block">
              <span class="font-semibold">{{ t('Phone') }}</span>
              <input v-model="formData.phone" type="text" class="mt-1 w-full rounded border p-2" />
            </label>
            <label class="mt-2 flex items-center gap-2">
              <input v-model="formData.twoFA" type="checkbox" />
              <span class="font-semibold">{{ t('Two-factor') }}</span>
            </label>
          </template>

          <template v-if="editingCard === 'securityPassword'">
            <label class="mt-2 block">
              <span class="font-semibold">{{ t('oldPwd') }}</span>
              <input v-model="formData.oldPassword" type="password" class="mt-1 w-full rounded border p-2" />
            </label>
            <label class="mt-2 block">
              <span class="font-semibold">{{ t('newPwd') }}</span>
              <input v-model="formData.newPassword" type="password" class="mt-1 w-full rounded border p-2" />
            </label>
            <label class="mt-2 block">
              <span class="font-semibold">{{ t('confirmNewPwd') }}</span>
              <input
                v-model="formData.confirmPassword"
                type="password"
                class="mt-1 w-full rounded border p-2"
              />
            </label>
          </template>

          <div class="mt-4 flex justify-end gap-2">
            <button type="button" class="rounded border px-4 py-1" @click="closeEdit">{{ t('cancel') }}</button>
            <button type="submit" class="rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600">
              {{ t('save') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
