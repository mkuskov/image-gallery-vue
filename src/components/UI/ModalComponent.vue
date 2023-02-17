<script lang="ts">
import { makeFuncWithDelay } from '@/utils/makeFuncWithDelay';
import type { AuthorsList, PlacesList } from '../../interfaces/store';
import { URL_DEFAULT_PICTURE } from '@/constants/links';

export default {
  data() {
    return {
      newImage: {
          name: '',
          img: URL_DEFAULT_PICTURE,
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
    addPicture() {
      this.$store.dispatch("newItem", this.newImage);
      this.$store.dispatch("addItems");
      this.$store.dispatch('changePage', 3);
      this.$store.dispatch('changeModalStatus', false);
      (this.$refs.form as any).reset();

      makeFuncWithDelay(() => {
        return this.$store.dispatch("loadItems")
      }, 300)
    },
  },
};
</script>

<template>
  <portal :disabled="$store.state.gallery.showModal">
    <div class="modal">
      <v-card class="modal__content">
        <v-form ref="form">
          <v-btn
            class="modal__hide"
            icon="mdi-eye-off"
            size="small"
            @click="
              $store.dispatch('changeModalStatus', false);
              ($refs.form as any).reset();
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
            :items="$store.state.filters.authorsList.map((item: AuthorsList) => item.author)"
            :rules="selectRules"
            v-model="newImage.author"
            filled
            label="Автор *"
            class="modal__select"
          >
            <template v-slot:author="{ author }">
              {{ author }}
            </template>
          </v-select>
          <v-select
            required
            :items="$store.state.filters.placesList.map((item: PlacesList) => item.place)"
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
          :disabled="
            !newImage.name ||
            !newImage.author ||
            !newImage.place ||
            !newImage.date
          "
          @click="addPicture"
        >
          Добавить
        </v-btn>
      </v-card>
    </div>
  </portal>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
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
