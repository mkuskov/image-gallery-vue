<script lang="ts">
export default {
  data() {
    return {
      imageTitle: "",
    };
  },
};
</script>

<template>
  <input
    placeholder="Наименование"
    type="text"
    class="filters__input"
    v-model="imageTitle"
    @change="
      $store.dispatch('addImageTitle', imageTitle);
      $store.dispatch('loadItems');
    "
  />
</template>

<style>
.filters__input {
  cursor: pointer;
  display: flex;
  padding: 15px 150px 15px 15px;
  text-align: left;
  box-sizing: border-box;
  border: 1px solid rgb(var(--v-theme-primary-300));
  border-radius: 8px;
  border-radius: 8px;
}
</style>
