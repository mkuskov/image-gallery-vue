<script lang="ts">
import GalleryComponent from "./GalleryComponent.vue";
import HeaderGallery from "./HeaderGallery.vue";
import PaginationGallery from "./PaginationGallery.vue";

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
    <div id="app" class="content">
      <HeaderGallery className="content__header" />
      <GalleryComponent className="content__gallery" />
      <PaginationGallery className="content__pagination" />
    </div>
  </v-app>
</template>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-sizing: border-box;
}

@media screen and (min-width: 1280px) {
  .content {
    width: 1280px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    padding: 2.5%;
  }
}
</style>
