<script lang="ts">
export default {
  data() {
    return {
      imageTitle: "",
    };
  },
  methods: {
    filterTitle() {
      this.$store.dispatch('addImageTitle', this.imageTitle);
      this.$store.dispatch('changePage', 1);

      return this.$store.dispatch('loadItems');
    }
  }
};
</script>

<template>
  <input
    placeholder="Наименование"
    type="text"
    class="filters__input"
    v-model="imageTitle"
    @change="filterTitle"
  />
</template>

<style>
.filters__input {
  cursor: text;
  display: flex;
  padding: 15px 150px 15px 15px;
  text-align: left;
  box-sizing: border-box;
  border: 1px solid rgb(var(--v-theme-primary-300));
  border-radius: 8px;
  border-radius: 8px;
}

.filters__input:focus {
    outline: none;
    border: 1px solid rgb(var(--v-theme-primary-900));
}
</style>
