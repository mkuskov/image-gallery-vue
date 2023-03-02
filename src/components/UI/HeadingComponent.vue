<script lang="ts">
import { useTheme } from "vuetify";
import ModalSettingsButton from "./modal/buttons/ModalSettingsButton.vue";

export default {
  setup() {
    const theme = useTheme();
    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "lightTheme"
          : "darkTheme"),
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
        color="transparent"
        icon="mdi-white-balance-sunny"
        size="small"
        class="header__theme-icon"
        @click="toggleTheme"
      >
      </v-btn>
      <ModalSettingsButton />
    </div>
  </div>
</template>

<style>
.header__heading {
  display: flex;
  justify-content: space-between;
}

.header__info {
  font-weight: 500;
  font-size: 2.6rem;
}

.header__settings-icon {
  margin-left: 10px;
}

.header__theme-icon, .header__settings-icon {
  margin-top: 20px;
}

@media (min-width: 0px) {
  .header__info {
    margin-top: 14px;
    font-size: 2rem;
  }
}

@media (min-width: 660px) {
  .header__heading {
    margin-top: 2.5%;
    justify-content: space-between;
  }
  .header__info {
    font-size: 2.2rem;
  }
}

@media (min-width: 1280px) {
  .header__heading {
    margin-top: 0;
    justify-content: space-between;
  }
  .header__info {
    margin-top: 0;
  }
}
</style>
