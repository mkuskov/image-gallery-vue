<script lang="ts">
import ModalComponent from "@/shared/UI/modal/ModalComponent.vue";
import AddImage from "@/features/add_image/AddImage.vue";

export default {
  data() {
    return {
      AddImage: "AddImage",
      snackbar: false
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
    @click="snackbar = true"
  >
    {{ title }}
  </v-btn>

  <v-snackbar
    v-model="snackbar"
    timeout="3500"
  >
    <div class="text-subtitle-1 pb-2">Невозможно выполнить операцию</div>
    <p>В текущей версии API отсутсвует возможность добавления новых картин.</p>
  </v-snackbar>
</template>

<style lang="scss">

.modal-button {
  float: right;
  margin: 20px 0 30px 0;
}
</style>
