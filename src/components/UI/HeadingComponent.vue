<script lang="ts">
import { useTheme } from "vuetify";

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
};
</script>

<template>
  <div class="header__heading">
    <h1 class="header__info">Image Gallery</h1>
    <v-btn
      color="transparent"
      icon="mdi-white-balance-sunny"
      size="x-small"
      class="header__icon"
      @click="toggleTheme"
    >
    </v-btn>
  </div>
</template>

<style>
.header__heading {
  width: 1192px;
  display: flex;
  justify-content: space-between;
}

.header__info {
  text-align: center;
  margin-bottom: 44px;
  font-weight: 500;
  font-size: 2.6rem;
}

.header__icon {
  margin-top: 20px;
}

@media (min-width: 1024px) {
  .header__info {
    text-align: left;
  }
}
</style>
