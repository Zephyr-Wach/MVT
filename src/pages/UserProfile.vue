<script setup lang="ts">
import { ref } from 'vue'

interface UserProfileItem {
  key: string
  label: string
  value: any
}

const userProfile = ref<UserProfileItem[]>([
  { key: 'avatar', label: 'Avatar', value: 'https://avatars.githubusercontent.com/u/1?v=4' },
  { key: 'name', label: 'Name', value: 'zephyr' },
  { key: 'username', label: 'Username', value: 'zephyr123' },
  { key: 'bio', label: 'Bio', value: '研究生，专注恶意流量检测' },
  { key: 'repos', label: 'Repositories', value: 12 },
  { key: 'followers', label: 'Followers', value: 123 },
  { key: 'following', label: 'Following', value: 45 },
  { key: 'email', label: 'Email', value: 'zephyr@example.com' },
  { key: 'location', label: 'Location', value: 'China' },
  { key: 'website', label: 'Website', value: 'https://zephyr.dev' },
  { key: 'company', label: 'Company', value: 'University Lab' },
  { key: 'joined', label: 'Joined', value: '2022-09-01' },
  { key: 'phone', label: 'Phone', value: '' },
  { key: '2fa', label: 'Two-factor Auth', value: false }
])

const getValue = (key: string) => userProfile.value.find(i => i.key === key)?.value

// 可修改事件占位
const editBasicInfo = () => {
  console.log('修改基本信息（头像、姓名、简介）')
}
const editContactInfo = () => {
  console.log('修改联系方式')
}
const editSecurity = () => {
  console.log('修改安全信息')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-5xl mx-auto space-y-6">

      <!-- 头像 & 基本信息卡片 -->
      <div class="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        <!-- 头像可点击 -->
        <img
            :src="getValue('avatar')"
            class="w-36 h-36 rounded-full border-4 border-blue-200 shadow-lg cursor-pointer"
            @click="editBasicInfo"
        />
        <div class="flex-1 space-y-2 text-center md:text-left">
          <h1 class="text-3xl font-bold">{{ getValue('name') }}</h1>
          <p class="text-gray-500 text-lg">@{{ getValue('username') }}</p>
          <p class="text-gray-700">{{ getValue('bio') }}</p>
        </div>
        <!-- 卡片右下角修改按钮 -->
        <button
            @click="editBasicInfo"
            class="absolute bottom-4 right-4 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          修改
        </button>
      </div>

      <!-- 统计信息卡片 -->
      <div class="bg-white rounded-2xl shadow-lg p-6 flex justify-around">
        <div class="text-center">
          <p class="font-bold text-xl">{{ getValue('repos') }}</p>
          <p class="text-gray-500">Repositories</p>
        </div>
        <div class="text-center">
          <p class="font-bold text-xl">{{ getValue('followers') }}</p>
          <p class="text-gray-500">Followers</p>
        </div>
        <div class="text-center">
          <p class="font-bold text-xl">{{ getValue('following') }}</p>
          <p class="text-gray-500">Following</p>
        </div>
      </div>

      <!-- 联系方式 & 安全信息左右布局 -->
      <div class="flex flex-col md:flex-row gap-6">

        <!-- 联系信息卡片 -->
        <div class="bg-white rounded-2xl shadow-lg p-6 flex-1">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold">Contact Info</h2>
            <button
                @click="editContactInfo"
                class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              修改
            </button>
          </div>
          <ul class="space-y-1 text-gray-700">
            <li><span class="font-semibold">Email:</span> {{ getValue('email') }}</li>
            <li><span class="font-semibold">Location:</span> {{ getValue('location') }}</li>
            <li>
              <span class="font-semibold">Website:</span>
              <a :href="getValue('website')" target="_blank" class="text-blue-500 hover:underline">
                {{ getValue('website') }}
              </a>
            </li>
            <li><span class="font-semibold">Company:</span> {{ getValue('company') }}</li>
          </ul>
        </div>

        <!-- 安全信息卡片 -->
        <div class="bg-white rounded-2xl shadow-lg p-6 flex-1">
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-xl font-semibold">Security</h2>
            <button
                @click="editSecurity"
                class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              修改
            </button>
          </div>
          <ul class="space-y-1 text-gray-700">
            <li><span class="font-semibold">Password:</span> ******</li>
            <li><span class="font-semibold">Phone:</span> {{ getValue('phone') || '未绑定' }}</li>
            <li><span class="font-semibold">Two-factor Auth:</span> {{ getValue('2fa') ? '已启用' : '未启用' }}</li>
          </ul>
        </div>

      </div>

      <!-- 账户信息卡片 -->
      <div class="bg-white rounded-2xl shadow-lg p-6 space-y-2">
        <h2 class="text-xl font-semibold mb-2">Account Info</h2>
        <p><span class="font-semibold">Joined:</span> {{ getValue('joined') }}</p>
        <p><span class="font-semibold">Username:</span> {{ getValue('username') }}</p>
      </div>

    </div>
  </div>
</template>
