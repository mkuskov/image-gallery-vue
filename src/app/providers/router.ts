import { createRouter, createWebHistory } from "vue-router";
import ImageReview from "@/pages/TheImageReview.vue";
import TheMainComponent from "@/pages/TheMainComponent.vue";
import TheGallerySettings from "@/pages/TheGallerySettings.vue";
import { URL_PICTURES_ROUTE, URL_SETTINGS } from "@/shared/constants/links";

const routes = [
  {
    path: "/",
    component: TheMainComponent,
  },
  {
    path: URL_PICTURES_ROUTE,
    component: ImageReview,
  },
  {
    path: URL_SETTINGS,
    component: TheGallerySettings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;