<script setup lang="ts">
import GalleryComponent from "./components/GalleryComponent.vue";
import HeaderGallery from "./components/HeaderGallery.vue";
import PaginationGallery from "./components/PaginationGallery.vue";
</script>

<template>
  <v-app>
    <div id="app" class="app">
      <div class="content__wrapper">
        <header class="content__header">
          <HeaderGallery />
        </header>
        <div class="content">
          <GalleryComponent />
        </div>
        <div class="content__pagination">
          <PaginationGallery />
        </div>
      </div>
    </div>
  </v-app>
</template>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  box-sizing: border-box;
}

.app {
  width: 1280px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 44px;
}

.content__header {
  line-height: 1.5;
  margin-bottom: 44px;
}

@media (min-width: 1024px) {
  .content__header {
    display: flex;
  }

  .content__header .content__wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>