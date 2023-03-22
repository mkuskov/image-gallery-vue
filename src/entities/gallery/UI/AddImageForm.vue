<script lang="ts">
import { URL_DEFAULT_PICTURE } from "@/shared/constants/links";
import { getPaginationLength } from "@/shared/constants/methods";

export default {
  data() {
    return {
      newImage: {
        authorId: "",
        created: "",
        id: "",
        imageUrl: URL_DEFAULT_PICTURE,
        locationId: "",
        name: ""
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
      this.$store.dispatch("addItems", {
        ...this.newImage,
        callback: () => {
          this.$store.dispatch("galleryJSON", {
            callback: () => {
              this.$store.dispatch("changePage", getPaginationLength(this.$store.state.gallery.galleryJSON.length, this.$store.state.settings.limitElements));
              this.$store.dispatch("loadItems");
            }
          });
        },
      });

      this.$store.dispatch("changeAddImageModalStatus", false);
      (this.$refs.form as HTMLFormElement).reset();
    },
  },
};
</script>

<template>
    <v-form ref="form">
      <h2 class="form-add__heading">Добавление картины в галерею</h2>
      <br />
      <v-text-field
        required
        label="Название картины *"
        :rules="inputRules"
        v-model="newImage.name"
        class="form-add__input"
      />
      <v-select
        required
        :items="$store.state.filters.authorsList.map((item) => item.name)"
        :rules="selectRules"
        v-model="newImage.authorId"
        filled
        label="Автор *"
        class="form-add__select"
      />
      <v-select
        required
        :items="$store.state.filters.placesList.map((item) => item.location)"
        :rules="selectRules"
        v-model="newImage.locationId"
        filled
        label="Место *"
        class="form-add__select"
      />
      <v-select
        required
        :items="dates"
        :rules="selectRules"
        v-model="newImage.created"
        filled
        label="Дата *"
        class="form-add__select"
      />
    </v-form>
    <v-btn
      class="form-add__done"
      :disabled="
        !newImage.name
        || !newImage.authorId
        || !newImage.locationId
        || !newImage.created
      "
      @click="addPicture"
    >
      Добавить
    </v-btn>
</template>

<style lang="scss">
.form-add__select,
.form-add__input {
  margin-bottom: 10px;
}

.form-add__heading {
  white-space: nowrap; /* Текст не переносится */
  overflow: hidden; /* Обрезаем всё за пределами блока */
  text-overflow: ellipsis; /* Добавляем многоточие */
  padding: 0px 35px;
  font-size: 24px;

  @media screen and (min-width: 840px) {
    padding: 0px;
  }
}

.form-add__done {
  width: 50%;
  margin: 0 0 auto auto;
}
</style>
