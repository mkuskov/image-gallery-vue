<script lang="ts">
import ModalComponent from "../ModalComponent.vue";
import TheModalSettings from "../TheModalSettings.vue";

export default {
  data() {
    return {
      settings: "TheModalSettings"
    };
  },
  components: {
    ModalComponent,
    TheModalSettings
  }
};
</script>

<template>
  <ModalComponent
    :openModalState="$store.state.gallery.showSettingsModal"
    closeModalAction="changeSettingsModalStatus"
  >
    <component :is="settings"/>
  </ModalComponent>

    <v-btn
      color="transparent"
      icon="mdi-cog-outline"
      size="small"
      class="header__settings-icon"
      @click="$store.dispatch('changeSettingsModalStatus', true);"
    />
</template>

<style lang="scss">
.header__settings-icon {
  margin-left: 10px;
  margin-top: 20px;
}
</style>
