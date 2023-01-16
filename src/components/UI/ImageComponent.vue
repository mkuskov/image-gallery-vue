<script lang="ts">
  export default {
    props: {
        imageTitle: String,
        image: String,
    },
  }
</script>

<template>
  <v-card class="card">
    <img class="item" :src="image">
    <p class="item__name">{{ imageTitle }}</p>
  </v-card>
</template>

<style>
.item {
  position: relative;
  width: 100%;
  text-align: left;
  height: 275px;
}

.item__name {
  font-weight: 600;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  padding: 5px;
  padding-left: 15px;
}
</style>
