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
  <div :class="className" v-if="$store.state.filters.paginationLength > 1">
    <v-pagination
      v-model="$store.state.filters.page"
      :length="$store.state.filters.paginationLength"
      total-visible="4"
      class="pagination__item"
      @click="changePage"
    />
  </div>
</template>

<style>
.content__pagination {
  width: 30%;
  margin-top: 35px;
  float: right;
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

@media (max-width: 660px) {
  .pagination {
    margin-top: 44px;
    font-size: 18px;
    text-align: center;
  }

  .pagination {
    padding: 20px 28px 20px 28px;
    border: 1px solid;
  }
}
</style>
