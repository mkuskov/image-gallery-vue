<script lang="ts">
import { GalleryData } from '@/shared/api/types';

export default {
  props: {
    data: Object
  },
  methods: {
    getYear(date: GalleryData) {
      const convertedDate = new Date(Number(date));

      return convertedDate.getFullYear();
    }
  }
};
</script>

<template>
  <v-card class="card">
    <v-progress-circular
      v-if="$store.state.gallery.spinner"
      :size="50"
      indeterminate
      color="black"
      class="card__loading"
    />
    <div
      v-else
      class="card__item"
    >
      <img
        class="card__image"
        :src="data?.img"
      />
      <div class="card__item-description">
        <p class="card__item-description-name">{{ data?.name }}</p>
        <p class="card__item-description-author"><span class="card__item-description-title">Автор: </span>&nbsp{{ data?.author }}</p>
        <p class="card__item-description-date"><span class="card__item-description-title">Дата создания: </span>&nbsp{{ getYear(data?.date) }}</p>
        <p class="card__item-description-place"><span class="card__item-description-title">Место: </span>&nbsp{{ data?.place }}</p>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss">
.card {
  line-height: 0.75;
  height: 275px;
}

.card__loading {
  position: absolute;
  display: flex;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card__image {
  object-fit: cover;
  height: 275px;
  position: relative;
  width: 100%;
  text-align: left;
}

.card__item-description {
  bottom: 0;
  transform: translateY(75%);
  transition: all .15s ease;
  font-weight: 600;
  width: 100%;
  height: 50%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.603);
  color: black;
  padding: 10px;
  padding-left: 12px;

  .card__item-description-name {
    font-weight: 600;
    font-size: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 20px;

    .card__item-description-title {
      font-weight: 600;
    }
  }
}

.card:hover .card__item-description {
  transform: translateY(0%);
  transition: all .35s ease;
}
</style>
