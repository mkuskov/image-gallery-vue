<script lang="ts">
import FiltersComponent from './FiltersComponent.vue';
import HeaderComponent from './UI/HeadingComponent.vue'

export default {
  components: {
    FiltersComponent,
    HeaderComponent,
  }
}
</script>

<template>
  <div class="container">
    <HeaderComponent />
    <FiltersComponent />
  </div>
</template>

<style>
</style>
