<script lang="ts">
import { useTheme } from "vuetify";
import FilterInput from "@/entities/filters/UI/FilterInput.vue";
import FilterDate from "@/entities/filters/UI/FilterDate.vue";
import { mapState } from "vuex";
import FilterDropdown from "@/entities/authors/UI/FilterDropdown.vue";

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
    FilterDate,
    FilterDropdown,
},
};
</script>

<template>
  <div class="filters">
    <FilterInput :disabled="!$store.state.settings.isTitleFilterActive"/>
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

<style lang="scss">
.filters {
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: 660px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
