<script lang="ts">
export default {
  components: {},
  data() {
    return {
      newImage: {
          name: '',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Shishkin%2C_Ivan_-_Morning_in_a_Pine_Forest.jpg/1200px-Shishkin%2C_Ivan_-_Morning_in_a_Pine_Forest.jpg',
          author: '',
          date: '',
          place: '',
          id: '',
      },
      valid: true,
      inputRules: [
        (value: string) => !!value || "Name is required",
        (value: string) => (value || "").length > 100 && "Max 100 characters",
        (value: string) => (value || "").length < 5 && "Min 5 characters",
      ],
      selectRules: [(value: string) => !!value || "This field is required"],
      authors: [
        "Иван Айвазовский",
        "Карл Брюллов",
        "Эдгар Дега",
        "Александр Иванов",
        "Павел Федотов",
        "Эдуард Мане",
        "Поль Сезанн",
        "Орест Кипренский",
        "Виктор Васнецов",
        "Исаак Левитан",
        "Иван Крамской"
      ],
      places: [
        "Лувр",
        "Британский музей",
        "Лондонская национальная галерея",
        "Метрополитен-музей",
        "Музеи Ватикана",
        "Современная галерея Тейт",
        "Музей императорского дворца",
        "Национальная галерея искусства",
        "Национальный музей Кореи",
        "Музей Орсе",
        "Государственный музей современного искусства",
        "Национальный фольклорный музей Кореи",
      ],
      dates: [
        "12.03.1897",
        "16.12.1546",
        "12.04.1477",
        "13.07.1887",
        "02.01.1076",
        "26.10.1896",
        "16.03.1957",
        "07.06.1674",
      ]
    };
  },
  methods: {
    validate() {
      this.$store.dispatch("newItem", this.newImage);
      this.$store.dispatch("addItems");
      this.$store.dispatch('changeModalStatus', false);
      setTimeout(() => {
        this.$store.dispatch("loadAuthorsList");
        this.$store.dispatch("loadPlacesList");
        return this.$store.dispatch("loadItems");
      }, 300);
    },
  },
};
</script>

<template>
  <portal to="destination" :disabled="$store.state.gallery.showModal">
    <div class="modal">
      <v-card class="modal__content">
        <v-form ref="form">
          <v-btn
            class="modal__hide"
            icon="mdi-eye-off"
            size="small"
            @click="
              $store.dispatch('changeModalStatus', false);
            "
          ></v-btn>
          <h2 class="modal__heading">Добавление картины в галерею</h2>
          <br />
          <v-text-field
            required
            label="Название картины *"
            :rules="inputRules"
            v-model="newImage.name"
            class="modal__input"
          ></v-text-field>
          <v-select
            required
            :items="authors"
            :rules="selectRules"
            v-model="newImage.author"
            filled
            label="Автор *"
            class="modal__select"
          ></v-select>
          <v-select
            required
            :items="places"
            :rules="selectRules"
            v-model="newImage.place"
            filled
            label="Место *"
            class="modal__select"
          ></v-select>
          <v-select
            required
            :items="dates"
            :rules="selectRules"
            v-model="newImage.date"
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
    </div>
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
