<script setup lang="ts">
import TheWelcomeVue from "./components/TheWelcome.vue";
import GalleryApp from "./components/GalleryApp.vue";
import PaginationGallery from "./components/PaginationGallery.vue";
</script>

<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <GalleryApp />
      </div>
    </header>

    <TheWelcomeVue />
    <PaginationGallery />
  </div>
</template>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  box-sizing: border-box;
}

#app {
  display: block;
  padding: 44px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  margin-bottom: 44px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
