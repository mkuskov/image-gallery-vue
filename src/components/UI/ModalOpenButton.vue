<script lang="ts">
import ModalComponent from './ModalComponent.vue';

export default {
  data() {
    return {};
  },
  components: {
    ModalComponent,
  },
};
</script>

<template>
  <ModalComponent />

  <v-btn
    class="modal-button"
    @click="
      $store.dispatch('changeModalStatus', true);
    "
  >
    Добавить картину
  </v-btn>
</template>

<style>
.modal-button {
  float: right;
  margin: 20px 0 30px 0;
}
</style>
