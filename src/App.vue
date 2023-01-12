<script setup lang="ts">
import TheWelcomeVue from "./components/TheWelcome.vue";
import GalleryApp from "./components/GalleryApp.vue";
import PaginationGallery from "./components/PaginationGallery.vue";
</script>

<template>
  <v-app>
  <div id="app" class="app">
    <header class="header__main">
      <div class="wrapper">
        <GalleryApp />
      </div>
    </header>

    <TheWelcomeVue />
    <PaginationGallery />
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

.header__main {
  line-height: 1.5;
  margin-bottom: 44px;
}

@media (min-width: 1024px) {
  .header__main {
    display: flex;
  }

  .header__main .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>