<script lang="ts">
export default {
  components: {},
  data() {
    return {
      valid: true,
      inputRules: [
        (value) => !!value || "Name is required",
        (value) => (value || "").length > 100 && "Max 100 characters",
        (value) => (value || "").length < 5 && "Min 5 characters",
      ],
      selectRules: [(value) => !!value || "This field is required"],
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

<template>
  <portal to="destination" :disabled="$store.state.showModal">
    <div class="modal"></div>
    <v-card class="modal__content">
      <v-form ref="form">
        <v-btn
          class="modal__hide"
          icon="mdi-eye-off"
          size="small"
          @click="$store.dispatch('changeModalStatus', false)"
        ></v-btn>
        <h2 class="modal__heading">Добавление картины в галерею</h2>
        <br />
        <v-text-field
          required
          label="Название картины *"
          :rules="inputRules"
          class="modal__input"
        ></v-text-field>
        <v-select
          required
          :items="items"
          :rules="selectRules"
          filled
          label="Автор *"
          class="modal__select"
        ></v-select>
        <v-select
          required
          :items="items"
          :rules="selectRules"
          filled
          label="Место *"
          class="modal__select"
        ></v-select>
        <v-select
          required
          :items="items"
          :rules="selectRules"
          filled
          label="Дата *"
          class="modal__select"
        ></v-select>
      </v-form>
      <v-btn
        class="modal__done"
        :disabled="!valid"
        @click="validate"
      >
      Добавить
      </v-btn>
    </v-card>
  </portal>
</template>

<style>
.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
}

.modal__content {
  width: 30%;
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  padding: 2%;
}

.modal__hide {
  margin: 10px;
  position: absolute;
  top: 0%;
  right: 0%;
}

.modal__select,
.modal__input {
  margin-bottom: 10px;
}

.modal__done {
  width: 50%;
  margin: 0 0 auto auto;
}
</style>
