<script lang="ts">
import { firstPage } from "@/shared/constants/pagination";
import { URL_HOME } from "@/shared/constants/links";


export default {
  data() {
    return {
      URL_HOME,
      filterByTitle: this.$store.state.settings.isTitleFilterActive,
      filterByAuthor: this.$store.state.settings.isAuthorFilterActive,
      filterByPlace: this.$store.state.settings.isPlaceFilterActive,
      filterByDate: this.$store.state.settings.isDateFilterActive,
      limit: this.$store.state.settings.limitElements,
      isPaginationOff: false,
      limitRules: [
        (value: string) => Number(value) > 12 && "Не более 12 элементов",
        (value: string) => Number(value) < 1 && "Минимум 1 элемент"
      ],
    };
  },
  methods: {
    isDisabled(value: boolean) {
      return value ? "Включен" : "Выключен";
    },
    titleFilterSettings() {
      this.$store.dispatch("settingFilterTitle", this.filterByTitle);
      this.$store.dispatch("addImageTitle", "Все");
    },
    authorFilterSettings() {
      this.$store.dispatch("settingFilterAuthor", this.filterByAuthor);
      this.$store.dispatch("addAuthor", "Все");
    },
    placeFilterSettings() {
      this.$store.dispatch("settingFilterPlace", this.filterByPlace);
      this.$store.dispatch("addPlace", "Все");
    },
    dateFilterSettings() {
      this.$store.dispatch("settingFilterDate", this.filterByDate);
      this.$store.dispatch("addPlace", "Все");
    },
    updateSettings() {

      // Фильтры
      this.titleFilterSettings();
      this.authorFilterSettings();
      this.placeFilterSettings();
      this.dateFilterSettings();

      /// Доп. настройки
      this.$store.dispatch("changeSettingsModalStatus", false);
      this.$store.dispatch("changePage", firstPage);
      this.$store.dispatch("galleryJSON");

      return this.$store.dispatch("loadItems");
    }
  }
};
</script>

<template>
  <div class="settings">
    <h2 class="settings__heading">Настройки</h2>

    <hr class="separate-line">

    <div class="settings__filters-caption">
      <span>
        <h4 class="settings__filters-caption-heading">Фильтры</h4>
        <p class="settings__filters-caption-info">Выберите, какие фильтры вы хотите использовать</p>
      </span>
      <v-icon
        class="settings__filters-caption-icon"
        icon="mdi-map-search-outline"
        size="large"
      />
    </div>
    <div class="settings__filters">
      <v-switch
        v-model="filterByTitle"
        color="green"
        hide-details
        class="settings__filters-title"
        inset
        :label="`Поиск по наименованию: ${isDisabled(filterByTitle)}`"
      />
      <v-switch
        v-model="filterByAuthor"
        color="green"
        hide-details
        class="settings__filters-title"
        inset
        :label="`Поиск по имени автора: ${isDisabled(filterByAuthor)}`"
      />
      <v-switch
        v-model="filterByPlace"
        color="green"
        hide-details
        class="settings__filters-title"
        inset
        :label="`Поиск по местоположению: ${isDisabled(filterByPlace)}`"
      />
      <v-switch
        v-model="filterByDate"
        color="green"
        hide-details
        class="settings__filters-title"
        inset
        :label="`Поиск по дате: ${isDisabled(filterByDate)}`"
      />
    </div>

    <hr class="separate-line">

    <div class="settings__extra-caption">
      <span>
        <h4 class="settings__extra-caption-heading">Дополнительно</h4>
        <p class="settings__extra-caption-info">Укажите дополнительные настройки галереи</p>
      </span>
      <v-icon
        class="settings__extra-caption-icon"
        icon="mdi-image-edit-outline"
        size="large"
      />
    </div>
    <div class="settings__extra">
      <v-switch
        v-model="$store.state.settings.isPaginationOff"
        color="green"
        hide-details
        class="settings__filters-title"
        inset
        label="Отключить пагинацию"
      />
      <v-text-field
        type="input"
        v-model="$store.state.settings.limitElements"
        label="Количество отображаемых элементов"
        class="settings__filters-limit"
        :rules="limitRules"
        hint="Укажите число от 1 до 12"
      />
    </div>

    <hr class="separate-line">

    <div class="settings__buttons">
      <router-link :to="URL_HOME">
        <v-btn
          icon="mdi-arrow-left"
          size="small"
          class="settings__buttons-close"
          @click="$store.dispatch('changeSettingsModalStatus', true);"
        />
      </router-link>
      <router-link :to="URL_HOME">
        <v-btn
          class="settings__buttons-submit"
          @click="updateSettings"
        >
          Применить
        </v-btn>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">

.settings {
  width: 660px;
}

.settings__filters-caption {
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  margin-bottom: 20px;
}

.settings__extra-caption {
  display: flex;
  justify-content: space-between;
}

.settings__extra-caption-icon,
.settings__filters-caption-icon {
  margin-top: 12px;
  font-size: 40px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }
}

.settings__filters-caption-heading,
.settings__extra-caption-heading {
  font-size: 20px;
  text-align: left;
  margin-bottom: 10px;
}

.settings__filters-caption-info,
.settings__extra-caption-info {
  text-align: left;
  font-size: 15px;
  color: rgb(var(--v-theme-caption));
}

.separate-line {
	margin: 20px 0;
	border: none;
	border-top: 1px solid rgb(var(--v-theme-primary-200));
}

.settings__filters,
.settings__extra {
  margin: 25px 0px 10px 0px;

  @media screen and (min-width: 768px) {
    margin: 25px 50px 10px 50px;
  }
}

.settings__filters-limit {
  margin: 0px;

  @media screen and (min-width: 768px) {
    margin: 15px 0px 10px 0px;
  }
}

.settings__buttons {
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
}
</style>
