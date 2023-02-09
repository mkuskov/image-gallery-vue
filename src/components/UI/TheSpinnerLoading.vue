<script lang="ts">

export default {
  data() {
    return {};
  },
};
</script>

<template>
    <div class="spinner" v-if="$store.state.gallery.spinner">
        <v-progress-circular
        :size="50"
        indeterminate
        color="white"
        class="spinner__progress"
        ></v-progress-circular>
    </div>
</template>

<style>
.spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
}

.spinner__progress {
  position: fixed;
  display: flex;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
