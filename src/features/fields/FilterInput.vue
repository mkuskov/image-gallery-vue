<script lang="ts">
import SearchInput from "@/entities/filters/UI/SearchInput.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    SearchInput
  },
  props: {
    disabled: Boolean
  }
};
</script>

<template>
  <SearchInput :disabled="disabled"/>
</template>

<style lang="scss">
</style>
