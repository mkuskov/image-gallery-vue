<script lang="ts">
import ModalComponent from "../modal/ModalComponent.vue";
import TheSettings from "@/entities/settings/UI/TheSettings.vue";

export default {
  data() {
    return {
      settings: "TheSettings"
    };
  },
  components: {
    ModalComponent,
    TheSettings
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
