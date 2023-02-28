<script lang="ts">

export default {
  data() {
    return {
    }
  },
  props: {
    openModalState: Boolean,
    closeModalAction: String,
  }
};
</script>

<template>
    <div class="modal" v-if="openModalState">
      <v-card class="modal__content">
          <v-btn
            class="modal__hide"
            icon="mdi-eye-off"
            size="small"
            @click="
              $store.dispatch(`${closeModalAction}`, false);
              ($refs.form as any).reset();
            "
          />
          <slot />
      </v-card>
    </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
}

.modal__content {
  width: 30%;
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  padding: 2%;
}

.modal__hide {
  margin: 10px;
  position: absolute;
  top: 0%;
  right: 0%;
}
</style>
