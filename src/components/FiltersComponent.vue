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
    <FilterInput />
    <FilterDropdown dropdownTitle="Автор" :data="$store.state.filters.authorsList" />
    <FilterDropdown dropdownTitle="Место" :data="$store.state.filters.placesList" />
    <FilterDate />
  </div>
</template>

<style>
.filters {
  width: 1192px;
  display: flex;
  justify-content: space-between;
}

.filters__date {
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  padding: 15px 150px 15px 15px;
  text-align: left;
  box-sizing: border-box;
  border: 1px solid rgb(var(--v-theme-primary-300));
  border-radius: 8px;
}

.filters__date-options {
  background-color: rgb(var(--v-theme-primary-25));
}

@media (min-width: 1024px) {
  .header__info {
    text-align: left;
  }
}
</style>
