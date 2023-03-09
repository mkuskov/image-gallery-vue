<script lang="ts">
import AddImageForm from "@/entities/gallery/UI/AddImageForm.vue";

export default {
  components: {
    AddImageForm
  },
  data() {
    return {
    };
  }
};
</script>

<template>
  <AddImageForm />
</template>

<style lang="scss">
.form-add__select,
.form-add__input {
  margin-bottom: 10px;
}

.form-add__done {
  width: 50%;
  margin: 0 0 auto auto;
}
</style>
