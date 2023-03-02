<script lang="ts">
export default {
  props: {
    imageTitle: String,
    image: String,
  },
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
    <div v-else class="card__item">
      <img class="card__image" :src="image" />
      <p class="card__item-name">
        {{ imageTitle }}
      </p>
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

.card__item-name {
  font-weight: 600;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.603);
  color: black;
  padding: 10px;
  padding-left: 15px;
}
</style>
