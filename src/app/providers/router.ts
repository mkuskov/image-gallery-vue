import { createRouter, createWebHistory } from "vue-router";
import ImageReview from "@/pages/TheImageReview.vue";
import TheMainComponent from "@/pages/TheMainComponent.vue";
import { URL_PICTURES_ROUTE } from "@/shared/constants/links";

const routes = [
  {
    path: "/",
    component: TheMainComponent,
  },
  {
    path: URL_PICTURES_ROUTE,
    component: ImageReview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;