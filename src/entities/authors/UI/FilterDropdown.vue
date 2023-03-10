<script lang="ts">
import SelectDropdown from "@/shared/UI/fields/SelectDropdown.vue";

export default {
  components: {
    SelectDropdown
  },
  props: {
    disabled: Boolean,
    data: Object,
    dropdownTitle: String,
  },
  data() {
    return {
    };
  },
};
</script>

<template>
  <SelectDropdown
    :disabled="disabled"
    :data="data"
    :dropdownTitle="dropdownTitle"
  />
</template>

<style lang="scss">

</style>
