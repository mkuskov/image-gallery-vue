<script lang="ts">
import FiltersComponent from "./FiltersComponent.vue";
import HeadingComponent from "./UI/HeadingComponent.vue";
import ModalOpenButton from "./UI/modal/buttons/ModalOpenButton.vue";

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
    <ModalOpenButton title="Добавить картину" />
    <FiltersComponent />
  </div>
</template>

<style>
.content__header {
  margin-bottom: 44px;
}

@media screen and (min-width: 0) {
  .content__header {
    padding: 0 5% 0 5%;
  }
}

@media screen and (min-width: 660px) {
  .content__header {
    padding: 0 5% 0 5%;
  }
}

@media screen and (min-width: 1280px) {
  .content__header {
    padding: 0;
  }
}
</style>
