<script lang="ts">
import { useTheme } from "vuetify";
import ModalSettingsButton from "@/shared/UI/buttons/OpenSettingsButton.vue";
import { URL_SETTINGS } from "@/shared/constants/links";

export default {
  setup() {
    const theme = useTheme();
    return {
      URL_SETTINGS,
      theme,
      toggleTheme: () =>
        (
          theme.global.name.value = theme.global.current.value.dark
            ? "lightTheme"
            : "darkTheme"
        ),
    };
  },
  components: {
    ModalSettingsButton,
  }
};
</script>

<template>
  <div class="header__heading">
    <h1 class="header__info">Image Gallery</h1>
    <div class="header__buttons">
      <v-btn
        icon="mdi-white-balance-sunny"
        size="small"
        class="header__theme-icon"
        @click="toggleTheme"
      />
      <router-link :to="URL_SETTINGS">
        <ModalSettingsButton />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.header__heading {
  display: flex;
  justify-content: space-between;

  @media (min-width: 1280px) {
      justify-content: space-between;
  }
}

.header__info {
  margin-top: 16px;
  font-weight: 500;
  font-size: 1.5rem;

  @media (min-width: 380px) {
    font-size: 2rem;
  }

  @media (min-width: 660px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1280px) {
    margin-top: 8px;
    font-size: 2.6rem;
  }
}

.header__buttons {
  margin-top: -2px;

  @media (min-width: 380px) {
    margin-top: 0;
    font-size: 2.6rem;
  }
}

.header__theme-icon {
  color: rgb(var(--v-theme-primary-900));
  margin-top: 20px;
}
</style>
