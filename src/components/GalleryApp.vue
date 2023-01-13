<script lang="ts">
import { useTheme } from 'vuetify'
import FilterInput from './filter_components/FilterInput.vue';
import FilterDropdown from './filter_components/FilterDropdown.vue';

export default {
  setup () {
    const theme = useTheme()
    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
    }
  },
  components: {
    FilterInput,
    FilterDropdown,
  }
}
</script>

<template>
  <div class="header">
    <div class="header__top">
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
    <div class="filters">
      <FilterInput class="filters__input" />
      <FilterDropdown dropdownTitle="Автор" class="filters__dropdown" />
      <FilterDropdown dropdownTitle="Место" class="filters__dropdown" />
      <select name="" id="" class="filters__date">
        <option value="" disabled selected hidden>Дата создания</option>
        <option value="">Дата 1</option>
        <option value="">Дата 2</option>
        <option value="">Дата 3</option>
      </select>
    </div>
  </div>
</template>

<style>
.header__top {
  width: 1192px;
  display: flex;
  justify-content: space-between;
}

.header__info {
  margin-bottom: 44px;
  font-weight: 500;
  font-size: 2.6rem;
}

.filters {
  width: 1192px;
  display: flex;
  justify-content: space-between;
}

.header__icon {
  margin-top: 20px;
}

.filters__date {
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  padding: 15px 150px 15px 15px;
  text-align: left;
  box-sizing: border-box;
  border: 1px solid rgb(var(--v-theme-border-color));;
  border-radius: 8px;
}

h3 {
  font-size: 1.2rem;
}

.header h1,
.header h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .header h1,
  .header h3 {
    text-align: left;
  }
}
</style>
