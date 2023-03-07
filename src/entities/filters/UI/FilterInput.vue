<script lang="ts">
import SearchInput from "@/shared/UI/fields/SearchInput.vue";

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
