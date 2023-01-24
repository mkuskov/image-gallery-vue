<script lang="ts">
import GalleryComponent from "./components/GalleryComponent.vue";
import HeaderGallery from "./components/HeaderGallery.vue";
import PaginationGallery from "./components/PaginationGallery.vue";

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
    <div class="filters-data">
      <p class="filters-data__item">title: {{ $store.state.filterByTitle }}</p>
      <p class="filters-data__item">
        author: {{ $store.state.filterByAuthor }}
      </p>
      <p class="filters-data__item">place: {{ $store.state.filterByPlace }}</p>
      <p class="filters-data__item">date: {{ $store.getters.filterByDate }}</p>
      <p class="filters-data__item">page: {{ $store.state.pages }}</p>
    </div>

    <div id="app"
class="content">
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

.filters-data {
  display: flex;
  font-size: 10px;
}

.filters-data__item {
  margin: 8px;
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
