<script lang="ts">
import { useTheme } from "vuetify";
import FilterInput from "./UI/FilterInput.vue";
import FilterDropdown from "./UI/FilterDropdown.vue";
import FilterDate from "./UI/FilterDate.vue";
import { mapState } from "vuex";

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
  mounted() {
    this.$store.dispatch("loadAuthorsList");
    this.$store.dispatch("loadPlacesList");
  },
  computed: mapState(["items"]),
  components: {
    FilterInput,
    FilterDropdown,
    FilterDate,
  },
};
</script>

<template>
  <div class="filters">
    <FilterInput :disabled="!$store.state.settings.isTitleFilterActive" />
    <FilterDropdown
      dropdownTitle="Автор"
      :data="$store.state.filters.authorsList"
      :disabled="!$store.state.settings.isAuthorFilterActive"
    />
    <FilterDropdown
      dropdownTitle="Место"
      :data="$store.state.filters.placesList"
      :disabled="!$store.state.settings.isPlaceFilterActive"
    />
    <FilterDate :disabled="!$store.state.settings.isDateFilterActive" />
  </div>
</template>

<style>
.filters {
  width: 100%;
  display: grid;
  gap: 1rem;
}

@media screen and (min-width: 0) {
  .filters {
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 660px) {
  .filters {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 960px) {
  .filters {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
