<script lang="ts">
import FiltersComponent from "./FiltersComponent.vue";
import HeadingComponent from "./UI/HeadingComponent.vue";
import ModalOpenButton from "./UI/ModalOpenButton.vue";

export default {
  components: {
    FiltersComponent,
    HeadingComponent,
    ModalOpenButton,
  },
};
</script>

<template>
  <div class="container">
    <HeadingComponent />
    <ModalOpenButton />
    <FiltersComponent />
  </div>
</template>

<style></style>
