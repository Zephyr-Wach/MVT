import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import { useUserStore } from "@/store/userStore"
import { useLoginModal } from "@/store/loginModal"
import Home from "@/pages/Home.vue"
import UserCenter from "@/pages/UserCenter.vue"

const routes: RouteRecordRaw[] = [
    { path: "/", component: Home },
    { path: "/userCenter", component: UserCenter, meta: { requiresAuth: true } },
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
        next({ path: "/" })
    } else {
        next()
    }
})

export default router
