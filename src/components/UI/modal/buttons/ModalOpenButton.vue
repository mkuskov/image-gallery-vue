<script lang="ts">
import ModalComponent from '../ModalComponent.vue';
import TheModalAddImage from '../TheModalAddImage.vue';

export default {
  data() {
    return {
      addImage: 'TheModalAddImage'
    };
  },
  props: {
    title: String,
  },
  components: {
    TheModalAddImage,
    ModalComponent,
  },
};
</script>

<template>
  <ModalComponent
    :openModalState="$store.state.gallery.showAddImageModal"
    closeModalAction="changeAddImageModalStatus"
  >
    <component :is="addImage"/>
  </ModalComponent>

  <v-btn
    class="modal-button"
    @click="
      $store.dispatch('changeAddImageModalStatus', true);
    "
  >
    {{ title }}
  </v-btn>
</template>

<style>
.modal-button {
  float: right;
  margin: 20px 0 30px 0;
}
</style>
