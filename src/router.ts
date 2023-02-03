import { createRouter, createWebHistory } from "vue-router";
import ImageReview from "./components/ImageReview.vue"
import TheMainComponent from "./components/TheMainComponent.vue"

const routes = [
    {
        path: '/',
        component: TheMainComponent,
    },
    {
        path: '/pictures/:id',
        component: ImageReview,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;