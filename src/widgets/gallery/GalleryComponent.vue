<script lang="ts">
import ImageComponent from "@/entities/gallery/UI/ImageComponent.vue";
import type { GalleryData } from "@/shared/api/types";
import { URL_BASE, URL_PICTURES_ROUTE } from "@/shared/constants/links";
import { loadExtraItems } from "@/shared/constants/pagination";
import EmptyPage from "@/shared/UI/errors/EmptyPage.vue";

export default {
  props: {
    className: String,
  },
  data() {
    return {
      URL_PICTURES_ROUTE,
      URL_BASE,
      imageId: "",
    };
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
    handleScroll (e: Event) {
      if (this.$store.state.settings.isPaginationOff) {
        let endOfPage = innerHeight + scrollY >= document.body.offsetHeight;

        if (endOfPage && this.$store.state.settings.limitElements < this.$store.state.gallery.galleryJSON.length) {
          this.$store.dispatch("setLimitPage", this.$store.state.settings.limitElements + loadExtraItems);

          return this.$store.dispatch("loadItems");
        }

        return endOfPage = false;
      }

      return null;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.$store.dispatch("loadItems");
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<template>
  <EmptyPage :displayСondition="!$store.state.gallery.galleryData.length && !$store.state.gallery.spinner"/>

  <div
    v-if="$store.state.gallery.spinner"
    :class="className"
  >
    <ImageComponent
      :key="loadingItem.id"
      v-for="loadingItem in $store.state.gallery.galleryData"
      class="image-gallery__loading-item"
    />
  </div>

  <div
    v-if="!$store.state.gallery.spinner"
    :class="className"
  >
    <router-link
      :to="URL_PICTURES_ROUTE.replace(':id', images.id)"
      v-for="images in $store.state.gallery.galleryData"
      :key="images.id"
      @click="openImage(images.id)"
    >
      <ImageComponent
        :imageTitle="images.name"
        :image="URL_BASE + images.imageUrl"
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
  margin: 34px 34px 0 34px;
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
