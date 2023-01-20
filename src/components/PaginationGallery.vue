<script lang="ts">
import GALLERY_DATA from '@/mocks/gallery-data';

export default {
  data() {
    return {
      page: 1,
    }
  },
}
</script>

<template>
  <div class="pagination">
    <v-pagination v-model="page" length="3" class="pagination__item" @click="$store.dispatch('changePage', page)"/>
  </div>
</template>

<style>
.pagination {
  width: 30%;
  margin-top: 20px;
  float: right
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
