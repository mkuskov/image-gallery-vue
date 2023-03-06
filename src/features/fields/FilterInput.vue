<script lang="ts">

import { firstPage } from '@/shared/api/pagination';
import { getFilteredPaginationLenth } from '@/shared/api/methods';

export default {
  data() {
    return {
    };
  },
  computed: {
    isDisabled() {
      return !this.disabled ? 'filters__input' : 'filters__input--disabled'
    }
  },
  methods: {
    filterTitle() {
      this.$store.dispatch('changePage', firstPage);
      this.$store.dispatch('updateLength',
        getFilteredPaginationLenth(
          this.$store.state.gallery.galleryData.length,
          this.$store.state.settings.limitElements
        ));

      if (this.$store.state.filters.filterByTitle !== "") {
        this.$store.dispatch('updateLength',
        getFilteredPaginationLenth(
          this.$store.state.gallery.galleryData.length,
          this.$store.state.settings.limitElements
        ));

        return this.$store.dispatch("loadItems");
      }
      this.$store.dispatch("galleryJSON");

      return this.$store.dispatch("loadItems");
    }
  },
  props: {
    disabled: Boolean,
  }
};
</script>

<template>
    <input
      class="filters__input"
      :class="isDisabled"
      placeholder="Наименование"
      type="text"
      id="title"
      v-model="$store.state.filters.filterByTitle"
      @change="filterTitle"
      :disabled="disabled"
    />
</template>

<style lang="scss">
.filters__input {
  cursor: text;
  display: flex;
  padding: 15px;
  text-align: left;
  border: 1px solid rgb(var(--v-theme-primary-300));
  border-radius: 10px;
}

::placeholder {
  color: rgb(var(--v-theme-primary-300));
}

.filters__input--disabled {
  border: 1px solid rgb(var(--v-theme-primary-100));
  color: rgb(var(--v-theme-primary-100));
  cursor: default;
}

.filters__input:focus {
  outline: none;
  border: 1px solid rgb(var(--v-theme-primary-900));
}
</style>
