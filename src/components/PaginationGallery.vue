<script lang="ts">

export default {
  data() {
    return { 
    }
  },
  props: {
    className: String,
  },
  methods: {
    changePage() {
      this.$store.dispatch('loadItems');
    },
  },
  mounted() {
    this.$store.dispatch("galleryJSON");
  },
};
</script>

<template>
  <div :class="className" v-if="$store.state.filters.paginationLength > 1 && $store.state.gallery.galleryData.length">
    <v-pagination
      v-model="$store.state.filters.page"
      :length="$store.state.filters.paginationLength"
      total-visible="4"
      class="pagination__item"
      @click="changePage"
    />
  </div>
</template>

<style lang="scss">
.content__pagination {
  display: flex;

  @media screen and (min-width: 0px) {
    justify-content: center;
    margin: 2.5% 5% 2.5% 5%;
  }

  @media screen and (min-width: 660px) {
      justify-content: flex-end;
      margin: -2.5% 5% 2.5% 5%;
  }

  @media screen and (min-width: 1280px) {
      margin: 2.5% 0 0 0;
  }
}

.v-pagination__item--is-active {
  background: rgb(var(--v-theme-primary-900));
  color: rgb(var(--v-theme-primary-25));
}

.v-pagination__list {
  display: flex;
  justify-content: space-between;
}

.v-btn:hover {
  background: rgb(var(--v-theme-primary-900));
  color: rgb(var(--v-theme-primary-25));
}

.v-pagination__item--is-active .v-btn__overlay {
  opacity: 0;
  background: rgb(var(--v-theme-primary-900));
  color: rgb(var(--v-theme-primary-25));
}

.v-pagination__item,
.v-pagination__prev,
.v-pagination__next {
  border: 1px solid;
  border-radius: 5px;
}
</style>
