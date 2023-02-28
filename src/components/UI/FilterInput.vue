<script lang="ts">

export default {
  data() {
    return {
    };
  },
  computed: {
    isDisabled() {
      return !this.disabled ? 'filters__input' : 'filters__input--disabled'
    }
  },
  methods: {
    filterTitle() {
      this.$store.dispatch('changePage', 1);

      return this.$store.dispatch('loadItems');
    }
  },
  props: {
    disabled: Boolean,
  }
};
</script>

<template>
    <input
      class="filters__input"
      :class="isDisabled"
      placeholder="Наименование"
      type="text"
      id="title"
      v-model="$store.state.filters.filterByTitle"
      @change="filterTitle"
      :disabled="disabled"
    />
</template>

<style>
.filters__input {
  cursor: text;
  display: flex;
  padding: 16px 150px 16px 15px;
  text-align: left;
  box-sizing: border-box;
  border: 1px solid rgb(var(--v-theme-primary-300));
  border-radius: 10px;
}

::placeholder {
  color: rgb(var(--v-theme-primary-300));
}

.filters__input--disabled {
  border: 1px solid rgb(var(--v-theme-primary-100));
  color: rgb(var(--v-theme-primary-100));
  cursor: default;
}

.filters__input:focus {
    outline: none;
    border: 1px solid rgb(var(--v-theme-primary-900));
}
</style>
