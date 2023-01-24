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
    <img class="card__item"
:src="image" />
    <p class="card__item-name">
      {{ imageTitle }}
    </p>
  </v-card>
</template>

<style>
.card {
  line-height: 0.75;
}

.card__item {
  position: relative;
  width: 100%;
  text-align: left;
  height: 275px;
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
