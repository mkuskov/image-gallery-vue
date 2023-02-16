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
  props: {
    className: String
  }
};
</script>

<template>
  <div :class="className">
    <HeadingComponent />
    <ModalOpenButton />
    <FiltersComponent />
  </div>
</template>

<style>
.content__header {
  margin-bottom: 44px;
}
</style>
