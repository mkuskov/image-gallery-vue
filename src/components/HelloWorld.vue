<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1 class="header__info">{{ msg }}</h1>
    <img src="./icons/Vector (1).png" alt="" class="header__icon" />
    <div class="filters">
      <input placeholder="Наименование" type="filter__name" />
      <select name="" id="" class="filter__author">
        <option value="" disabled selected hidden>Автор</option>
        <option value="">Автор 1</option>
        <option value="">Автор 2</option>
        <option value="">Автор 3</option>
      </select>
      <select name="" id="" class="filter__place">
        <option value="" disabled selected hidden>Место</option>
        <option value="">Место 1</option>
        <option value="">Место 2</option>
        <option value="">Место 3</option>
      </select>
      <select name="" id="" class="filter__date">
        <option value="" disabled selected hidden>Дата создания</option>
        <option value="">Дата 1</option>
        <option value="">Дата 2</option>
        <option value="">Дата 3</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
h1 {
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

select,
input {
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

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
