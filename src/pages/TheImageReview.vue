<script lang="ts">
import type { GalleryData } from "@/shared/api/types";
import { URL_HOME } from "@/shared/constants/links";

export default {
  data() {
    return {
      image: [] as Array<GalleryData>,
      URL_HOME
    };
  },
  mounted() {
    this.image = JSON.parse(localStorage.getItem("image") as string);
  }
};

</script>


<template>
  <div
    class="current-image"
    v-for="data in image"
    :key="data.id"
  >
    <img
      class="current-image__image"
      :src="data.img"
      alt="image"
    >
    <div class="current-image__info">
      <h1>
        <v-icon
          class="quote-icon-open"
          icon="mdi-format-quote-open"
          size="x-small"
        />
        {{data.name}}
        <v-icon
          class="quote-icon-close"
          icon="mdi-format-quote-close"
          size="x-small"
        />
      </h1>
      <h4>
        <span class="current-image__info-by">by</span>&nbsp;{{ data.author }}
      </h4>
      <p class="current-image__description">
        {{ data.description }}
      </p>
      <router-link :to="URL_HOME">
        <v-btn
          class="current-image__button-back"
          prepend-icon="mdi-arrow-left-circle"
        >
          Назад
        </v-btn>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.current-image {
  margin: 2.5% 0 2.5% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.quote-icon-open {
  margin: 0 -6px 15px 0;
}

.quote-icon-close {
  margin: 10px 0 0 -6px;
}

.current-image__info-by {
  font-weight: 300;
}

.current-image__image {
  -webkit-box-shadow: 0px 15px 20px -10px rgba(34, 60, 80, 0.5);
  -moz-box-shadow: 0px 15px 20px -10px rgba(34, 60, 80, 0.5);
  box-shadow: 0px 15px 20px -10px rgba(34, 60, 80, 0.5);
  margin-top: 15px;
  width: 75%;
  border-radius: 8px;

  @media screen and (min-width: 660px) {
    margin-top: 15px;
    width: 70%;
  }
  @media screen and (min-width: 840px) {
    width: 60%;
  }
  @media screen and (min-width: 1280px) {
    width: 50%;
  }
}

.current-image__info {
  margin-top: 15px;
  width: 75%;

  @media screen and (min-width: 660px) {
    width: 70%;
  }
  @media screen and (min-width: 840px) {
    width: 60%;
  }
  @media screen and (min-width: 1280px) {
    width: 50%;
  }
}

.current-image__description {
  margin: 18px 0 20px 0;
  font-size: 16px;
  @media screen and (min-width: 840px) {
    font-size: 18px;
  }
}

a {
  text-decoration: none;
}

.current-image__button-back {
  color: rgb(var(--v-theme-primary-900));
}
</style>
