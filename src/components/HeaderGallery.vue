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

<style lang="scss">
.content__header {
  margin-bottom: 44px;
  padding: 0 34px 0 34px;
  display: flex;
  flex-direction: column;

  @media (min-width: 380px) {
    display: block;
  }
}
</style>
