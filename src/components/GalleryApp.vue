<script setup lang="ts">
import FilterInput from './filter_components/FilterInput.vue';
import FilterDropdown from './filter_components/FilterDropdown.vue';
</script>

<template>
  <div class="header">
    <h1 class="header__info">Image Gallery</h1>
    <img src="./icons/Vector (1).png" alt="" class="header__icon" />
    <div class="filters">
      <FilterInput class="filters__input"/>
      <FilterDropdown dropdownTitle="Автор" class="filters__dropdown"/>
      <FilterDropdown dropdownTitle="Место" class="filters__dropdown"/>
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
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 0;
}

.filters__date {
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  padding: 15px 150px 15px 15px;
  text-align: left;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
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
