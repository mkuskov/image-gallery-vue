<script lang="ts">
import ModalComponent from "@/shared/UI/modal/ModalComponent.vue";
import AddImage from "@/features/add_image/AddImage.vue";

export default {
  data() {
    return {
      AddImage: "AddImage"
    };
  },
  props: {
    title: String,
  },
  components: {
    AddImage,
    ModalComponent,
  },
};
</script>

<template>
  <ModalComponent
    :openModalState="$store.state.gallery.showAddImageModal"
    closeModalAction="changeAddImageModalStatus"
  >
    <component :is="AddImage"/>
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

<style lang="scss">
.modal-button {
  float: right;
  margin: 20px 0 30px 0;
}
</style>
