<script lang="ts">
import TheMainComponent from './components/TheMainComponent.vue';

export default {
  components: {
    TheMainComponent
  },
  data() {
    return {};
  },
};
</script>

<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<style>
</style>
