import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import { useLoginModal } from '@/stores/login-modal'
import { useUserStore } from '@/stores/user'

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  {
    path: '/userCenter',
    component: () => import('@/views/UserProfileView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/userProfile',
    redirect: '/userCenter',
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFoundView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore()
  const loginModal = useLoginModal()

  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    loginModal.open(to.fullPath)
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
