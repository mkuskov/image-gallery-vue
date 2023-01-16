<script lang="ts">
import ImageComponent from "./UI/ImageComponent.vue";

export default {
    components: {
      ImageComponent,
    },
}
</script>

<template>
  <div id="image-gallery">
    <ImageComponent v-for="images in $store.state.GALLERY_DATA" :imageTitle="images.name" :image="images.img"/>
  </div>
</template>

<style>
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
