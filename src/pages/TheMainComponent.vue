<script lang="ts">
import GalleryComponent from "@/widgets/gallery/GalleryComponent.vue";
import HeaderGallery from "@/widgets/header/HeaderGallery.vue";
import PaginationGallery from "@/shared/UI/pagination/PaginationGallery.vue";

export default {
  components: {
    GalleryComponent,
    HeaderGallery,
    PaginationGallery,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <v-app>
    <div
      id="app"
      class="content"
    >
      <HeaderGallery className="content__header" />
      <GalleryComponent className="content__gallery" />
      <PaginationGallery className="content__pagination" />
    </div>
  </v-app>
</template>

<style lang="scss">
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
}

@media screen and (min-width: 1280px) {
  .content {
    width: 1280px;
    display: flex;
    margin: 20px auto 20px auto;
    flex-direction: column;
  }
}
</style>
