<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

defineProps<{ isMobile?: boolean }>()

const { t } = useI18n()

const sideBar = [
  { id: 1, name: "Home", path: "/" },
  {
    id: 2,
    name: "CharacterList",
    children: [
      { id: 31, name: "t1", path: "/" },
      { id: 32, name: "t2", path: "/" },
    ]
  }
]

// 默认折叠
const collapseState = ref<Record<number, boolean>>({})
sideBar.forEach(item => {
  if (item.children) {
    collapseState.value[item.id] = false
  }
})

// 点击展开/折叠
const toggle = async (item: any) => {
  collapseState.value[item.id] = !collapseState.value[item.id]

  // 如果展开，触发请求
  if (collapseState.value[item.id]) {
    await fetchChildrenData(item)
  }
}

// 模拟请求后端数据
const fetchChildrenData = async (item: any) => {
  console.log("请求后端数据:", item.name)
  // 这里可以写真实的 axios/fetch 请求
  // const res = await axios.get(`/api/children/${item.id}`)
}
</script>

<template>
  <aside
      class="bg-white/70 backdrop-blur-md border-r border-gray-200 w-64 p-4 flex flex-col"
      :class="{ 'hidden md:flex': !isMobile }"
  >
    <h2 class="text-xl font-semibold mb-6">{{ t("menu") }}</h2>
    <nav class="flex flex-col gap-3">
      <template v-for="item in sideBar" :key="item.id">
        <!-- 一级菜单 -->
        <RouterLink
            v-if="item.path"
            :to="item.path"
            class="px-3 py-2 rounded-lg hover:bg-blue-100"
        >
          {{ t(item.name) }}
        </RouterLink>

        <!-- 带子菜单 -->
        <div v-else class="flex flex-col">
          <div
              class="px-3 py-2 font-semibold cursor-pointer flex justify-between items-center hover:bg-blue-100"
              @click="toggle(item)"
          >
            {{ t(item.name) }}
            <span>{{ collapseState[item.id] ? '-' : '+' }}</span>
          </div>
          <div v-show="collapseState[item.id]" class="ml-4 mt-2 flex flex-col gap-2">
            <RouterLink
                v-for="child in item.children"
                :key="child.id"
                :to="child.path"
                class="px-3 py-2 rounded-lg hover:bg-blue-100"
            >
              {{ t(child.name) }}
            </RouterLink>
          </div>
        </div>
      </template>
    </nav>
  </aside>
</template>
