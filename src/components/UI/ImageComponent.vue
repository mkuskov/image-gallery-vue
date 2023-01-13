<template>
  <v-card class="card">
    <div class="item">
      <p class="item__name">Картина</p>
    </div>
  </v-card>
</template>

<style>
.item {
  position: relative;
  width: 100%;
  background-image: url('../../images/56e156ae7a9fb41309794613e883bfc0_L.jpg');
  background-color: rgb(var(--v-theme-white));
  background-size: cover;
  text-align: left;
  height: 275px;
}

.item__name {
  font-weight: 600;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  padding: 5px;
  padding-left: 15px;
}
</style>
