<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<template>
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
