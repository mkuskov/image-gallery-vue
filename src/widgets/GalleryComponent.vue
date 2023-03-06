<script lang="ts">
import ImageComponent from "../features/ImageComponent.vue";
import type { GalleryData } from "@/shared/api/types";
import { URL_PICTURES_ROUTE } from "@/shared/api/links";
import EmptyPage from '@/shared/UI/EmptyPage.vue'

export default {
  props: {
    className: String,
  },
  data() {
  return {
      URL_PICTURES_ROUTE,
      imageId: '',
    }
  },
  components: {
    ImageComponent,
    EmptyPage
  },
  methods: {
    openImage(imageId: string) {
      const getImage = this.$store.state.gallery.galleryData.filter((item: GalleryData) => item.id === imageId);

      localStorage.setItem("image", JSON.stringify(getImage));
  
      return this.$store.dispatch("image", getImage);
    },
  },
  mounted() {
    this.$store.dispatch("loadItems");
  }
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

<style lang="scss">
.content__gallery {
  display: grid;
  align-items: stretch;
  margin: 34px;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 660px) {
    grid-template-columns: 1fr 1fr;
    min-height: 570px;
  }

  @media screen and (min-width: 1080px) {
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  }
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
</style>
