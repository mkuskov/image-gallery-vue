<script setup lang="ts"></script>

<template>
  <div class="pagination__container">
    <button class="pagination__button">&lt;</button>
    <button class="pagination__button">1</button>
    <button class="pagination__button">2</button>
    <button class="pagination__button">...</button>
    <button class="pagination__button">></button>
  </div>
</template>

<style>
.pagination__container {
  margin-top: 44px;
  font-size: 18px;
  text-align: right;
}

.pagination__button {
  padding: 12px 18px 12px 18px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
}

.pagination__button:first-child {
  border-radius: 10px 0 0 10px;
}

.pagination__button:last-child {
  border-radius: 0 10px 10px 0;
}

.pagination__button:hover {
  cursor: pointer;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

@media (max-width: 660px) {
  .pages-count {
    margin-top: 44px;
    font-size: 18px;
    text-align: center;
  }
  .pagination__button {
    padding: 20px 28px 20px 28px;
    background-color: rgb(255, 255, 255);
    border: 1px solid black;
  }
}
</style>
