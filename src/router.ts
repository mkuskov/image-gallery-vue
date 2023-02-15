import { createRouter, createWebHistory } from "vue-router";
import ImageReview from "./components/ImageReview.vue"
import TheMainComponent from "./components/TheMainComponent.vue"
import { URL_PICTURES_ROUTE } from "./constants/links";

const routes = [
    {
        path: '/',
        component: TheMainComponent,
    },
    {
        path: URL_PICTURES_ROUTE,
        component: ImageReview,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;