<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()

</script>

<template>
  <header
      class="grid grid-cols-3 items-center bg-white/70 backdrop-blur-md
           border-b border-gray-200 px-4 h-14"
  >
    <!-- 左侧：语言切换 -->
    <div class="flex items-center gap-2">
      {{ t("setLanguage") }}
      <select
          @change="$emit('setLang', ($event.target as HTMLSelectElement).value)"
          class="px-2 py-1 rounded border hover:bg-gray-200"
      >
        <option value="zh">中</option>
        <option value="en">EN</option>
      </select>
    </div>

    <!-- 中间：标题 -->
    <div class="flex justify-start">
      <h1 class="text-lg font-semibold">StarPal</h1>
    </div>

<!--    &lt;!&ndash; 右侧：用户相关 &ndash;&gt;-->
<!--    <div class="flex items-center gap-3 justify-end">-->
<!--      <template v-if="userStore.userInfo">-->
<!--        <RouterLink-->
<!--            to="/userProfile"-->
<!--            class="px-2 py-1 rounded hover:bg-gray-100"-->
<!--        >-->
<!--          {{ t("userCenter") }}-->
<!--        </RouterLink>-->
<!--        <button-->
<!--            @click="logout"-->
<!--            class="px-2 py-1 rounded hover:bg-gray-100"-->
<!--        >-->
<!--          {{ t("logout") }}-->
<!--        </button>-->
<!--      </template>-->

<!--      <RouterLink v-else to="/login" class="px-2 py-1 rounded hover:bg-gray-100">-->
<!--        {{ t("login") }}-->
<!--      </RouterLink>-->
<!--    </div>-->


  </header>
</template>
