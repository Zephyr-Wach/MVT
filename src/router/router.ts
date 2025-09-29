import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import { useUserStore } from "@/store/userStore"
import { useLoginModal } from "@/store/loginModal"
import Home from "@/pages/Home.vue"
import UserProfile from "@/pages/UserProfile.vue"
import NotFound from "@/pages/NotFound.vue"

const routes: RouteRecordRaw[] = [
    { path: "/", component: Home },
    { path: "/userCenter", component: UserProfile, meta: { requiresAuth: true } },



    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
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
