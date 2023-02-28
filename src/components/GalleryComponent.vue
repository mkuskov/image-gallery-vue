<script lang="ts">
import ImageComponent from "./UI/ImageComponent.vue";
import type { Image } from "../interfaces/store";
import { URL_PICTURES_ROUTE } from "../constants/links";
import EmptyPage from './UI/EmptyPage.vue'

export default {
  props: {
    className: String,
  },
  data() {
  return {
      URL_PICTURES_ROUTE,
    }
  },
  components: {
    ImageComponent,
    EmptyPage
  },
  methods: {
    openImage(imageId: string | number) {
      const image = this.$store.state.gallery.galleryData.filter((item: Image) => item.id === imageId);

      return this.$store.dispatch("image", image);
    },
  },
  mounted() {
    this.$store.dispatch("loadItems");
  },
};
</script>

<template>
  <EmptyPage :displayСondition="!$store.state.gallery.galleryData.length"/>
  <div v-if="$store.state.gallery.spinner" :class="className">
    <ImageComponent
      :key="loadingItem.id"
      v-for="loadingItem in $store.state.gallery.galleryData"
      class="image-gallery__loading-item"
    />
  </div>
  <div v-if="!$store.state.gallery.spinner" :class="className">
    <router-link
      :to="URL_PICTURES_ROUTE.replace(':id', images.id)"
      v-for="images in $store.state.gallery.galleryData"
      :key="images.id"
      @click="openImage(images.id)"
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
.content__gallery {
  min-height: 570px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: stretch;
  gap: 20px;
}

.image-gallery__not-found {
  display: flex;
}

.image-gallery__not-found-icon {
  margin-right: 5px;
}

.image-gallery__item {
  transition: .2s;
  cursor: pointer;
}

.image-gallery__item:hover {
  transition: .4s;
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
