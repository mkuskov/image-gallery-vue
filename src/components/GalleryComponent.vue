<script lang="ts">
import ImageComponent from "./UI/ImageComponent.vue";
import { mapState } from "vuex";
import { RouterLink } from "vue-router";
import type { CurrentImage } from "../interfaces/store";
import { makeFuncWithDelay } from "@/utils/makeFuncWithDelay";
import { URL_PICTURES } from "../constants/links";

export default {
  data() {
  return {
      URL_PICTURES: URL_PICTURES
    }
  },
  components: {
    ImageComponent,
  },
  methods: {
    openImage() {
      makeFuncWithDelay(() => {
        const currentImage = this.$store.state.gallery.galleryData.filter((item: CurrentImage) => item.id === this.$route.params.id);
        return this.$store.dispatch("currentImage", currentImage);
      }, 10)
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
      :to="`${URL_PICTURES}${images.id}`"
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
  min-height: 570px;
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
