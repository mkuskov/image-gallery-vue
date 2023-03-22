<script lang="ts">
import FiltersComponent from "@/features/filters/FiltersComponent.vue";
import HeadingComponent from "@/widgets/header/UI/HeadingComponent.vue";
import ModalOpenButton from "@/shared/UI/buttons/AddImageButton.vue";

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
  padding: 0 34px 0 34px;
  display: flex;
  flex-direction: column;

  @media (min-width: 380px) {
    display: block;
  }
}
</style>
