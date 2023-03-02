<script lang="ts">
import { limitElements } from '@/constants/pagination';


export default {
  data() {
    return {
        filterByTitle: this.$store.state.settings.isTitleFilterActive,
        filterByAuthor: this.$store.state.settings.isAuthorFilterActive,
        filterByPlace: this.$store.state.settings.isPlaceFilterActive,
        filterByDate: this.$store.state.settings.isDateFilterActive,
        limit: limitElements,
        limitRules: [
        (value: string) => Number(value) > 12 && "Не более 12 элементов",
        (value: string) => Number(value) < 1 && "Минимум 1 элемент"
      ],
    };
  },
  methods: {
    titleFilterSettings() {
        this.$store.dispatch('settingFilterTitle', this.filterByTitle);
        this.$store.dispatch('addImageTitle', 'Все');
    },
    authorFilterSettings() {
        this.$store.dispatch('settingFilterAuthor', this.filterByAuthor);
        this.$store.dispatch('addAuthor', 'Все');
    },
    placeFilterSettings() {
        this.$store.dispatch('settingFilterPlace', this.filterByPlace);
        this.$store.dispatch('addPlace', 'Все');
    },
    dateFilterSettings() {
        this.$store.dispatch('settingFilterDate', this.filterByDate);
        this.$store.dispatch('addPlace', 'Все');
    },
    updateSettings() {
        // Фильтры
        this.titleFilterSettings();
        this.authorFilterSettings();
        this.placeFilterSettings();
        this.dateFilterSettings();

        /// Доп. настройки
        this.$store.dispatch('changeSettingsModalStatus', false);
        this.$store.dispatch('changePage', 1);
        this.$store.dispatch('loadItems');
    }
  }
};
</script>

<template>
    <div class="settings">
        <h2 class="settings__heading">Настройки</h2>
        <div class="settings__filters">
            <h4 class="settings__filters-heading">Фильтры</h4>
            <v-switch
                v-model="filterByTitle"
                color="green"
                hide-details
                class="settings__filters-title"
                inset
                :label="`Поиск по наименованию: ${filterByTitle ? 'Включен' : 'Выключен'}`"
            />
            <v-switch
                v-model="filterByAuthor"
                color="green"
                hide-details
                class="settings__filters-title"
                inset
                :label="`Поиск по имени автора: ${filterByAuthor ? 'Включен' : 'Выключен'}`"
            />
            <v-switch
                v-model="filterByPlace"
                color="green"
                hide-details
                class="settings__filters-title"
                inset
                :label="`Поиск по местоположению: ${filterByPlace ? 'Включен' : 'Выключен'}`"
            />
            <v-switch
                v-model="filterByDate"
                color="green"
                hide-details
                class="settings__filters-title"
                inset
                :label="`Поиск по дате: ${filterByDate ? 'Включен' : 'Выключен'}`"
            />
        </div>
        <div class="settings__extra">
            <h4 class="settings__extra-heading">Доп. настройки</h4>
            <v-text-field
                type="input"
                v-model="$store.state.settings.limitElements"
                label="Количество отображаемых элементов"
                class="settings__filters-limit"
                :rules="limitRules"
                hint="Укажите число от 1 до 12"
            ></v-text-field>
        </div>
        <v-btn
        class="settings__done-button"
        @click="updateSettings"
        >
        Применить
        </v-btn>
    </div>
</template>

<style>
.settings__filters-heading, .settings__extra-heading {
    text-align: left;
    margin-bottom: 10px;
}

.settings__extra-text {
    font-size: 13px;
    text-align: left;
}

.settings__filters, .settings__extra {
    margin: 10px 25px 35px 25px;
}

.settings__extra {
    margin: 10px 25px 20px 25px;
}

.settings__done-button {
  width: 50%;
}
</style>
