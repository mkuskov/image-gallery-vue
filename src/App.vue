<script lang="ts">
import GalleryComponent from "./components/GalleryComponent.vue";
import HeaderGallery from "./components/HeaderGallery.vue";
import PaginationGallery from "./components/PaginationGallery.vue";
import ModalComponent from "./components/UI/ModalComponent.vue";

export default {
  components: {
    GalleryComponent,
    HeaderGallery,
    PaginationGallery,
    ModalComponent,
  },
  data() {
    return {
    };
  },
};
</script>

<template>
  <v-app>
    <ModalComponent />
    <div id="app" class="content">
      <div class="content__header">
        <HeaderGallery />
      </div>
      <div class="content__gallery">
        <GalleryComponent />
      </div>
      <div class="content__pagination">
        <PaginationGallery />
      </div>
    </div>
  </v-app>
</template>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
}

.content {
  width: 1280px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 44px;
}

.content__header {
  margin-bottom: 44px;
}
</style>
