<script lang="ts">
import ImageComponent from "./UI/ImageComponent.vue";
import { mapState } from "vuex";

export default {
  components: {
    ImageComponent,
  },
  methods: {
    openImage() {
      setTimeout(() => {
        const currentImage = this.$store.state.gallery.galleryData.filter((item) => item.id == this.$route.params.id);
        return this.$store.dispatch("currentImage", currentImage);
      }, 50);
    }
  },
  mounted() {
    this.$store.dispatch("loadItems");
  },
  computed:
    mapState(["items"]),
};
</script>

<template>
  <div class="image-gallery">
    <router-link
      :to="`/pictures/${images.id}`"
      v-for="images in $store.state.gallery.galleryData"
      :key="images.id"
      @click="openImage"
    >
      <ImageComponent
        :imageTitle="images.name"
        :image="images.img"
        :key="images.id"
        class="image-gallery__item"
      />
    </router-link>
  </div>
</template>

<style>
.image-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: stretch;
  gap: 20px;
}

.image-gallery__item {
  transition: .1s;
  cursor: pointer;
}

.image-gallery__item:hover {
  transition: .25s;
  transform: scale(1.02);
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
