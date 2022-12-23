<script setup lang="ts">
import { RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Pagination from "./components/Pagination.vue";
</script>

<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <HelloWorld msg="Image Gallery" />
      </div>
    </header>

    <RouterView />
    <Pagination />
  </div>
</template>

<style scoped>
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
