<script lang="ts">

export default {
  props: {
    displayСondition: Boolean,
  },
  data() {
    return {
    }
  },
  computed: {
    getNotFounfTitle() {
      return this.displayСondition ? "Ничего не найдено, попробуйте изменить фильтры ~" : ''
    }
  }
}
</script>

<template>
  <div v-if="displayСondition" class="image-gallery__not-found">
    <v-icon icon="mdi-emoticon-sad-outline" class="image-gallery__not-found-icon" />
    <p>{{ getNotFounfTitle }}</p>
  </div>
</template>

<style lang="scss">
.image-gallery__not-found {
  display: flex;
  justify-content: center;
  margin: 50px;
}
</style>
