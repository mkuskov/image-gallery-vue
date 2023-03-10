<script lang="ts">

export default {
  data() {
    return {
      settings: "TheSettings"
    };
  },
};
</script>

<template>
  <v-btn
    icon="mdi-cog-outline"
    size="small"
    class="header__settings-icon"
    @click="$store.dispatch('changeSettingsModalStatus', true);"
  />
</template>

<style lang="scss">
.header__settings-icon {
  color: rgb(var(--v-theme-primary-900));
  margin-left: 10px;
  margin-top: 20px;
}
</style>
