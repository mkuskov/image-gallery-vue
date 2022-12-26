<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
</script>

<template>
  <div id="image-gallery">
    <WelcomeItem />
  </div>
</template>

<style scoped>
#image-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: stretch;
  gap: 20px;
}

@media (max-width: 1280px) {
  #image-gallery {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 660px) {
  #image-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
