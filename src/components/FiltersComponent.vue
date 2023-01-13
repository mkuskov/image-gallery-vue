<script lang="ts">
import { useTheme } from 'vuetify'
import FilterInput from './UI/FilterInput.vue';
import FilterDropdown from './UI/FilterDropdown.vue';

export default {
    setup() {
        const theme = useTheme()
        return {
            theme,
            toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme'
        }
    },
    components: {
        FilterInput,
        FilterDropdown,
    }
}
</script>

<template>
    <div class="filters">
        <FilterInput class="filters__input" />
        <FilterDropdown dropdownTitle="Автор" class="filters__dropdown" />
        <FilterDropdown dropdownTitle="Место" class="filters__dropdown" />
        <select name="" id="" class="filters__date">
            <option value="" class="filters__date-options" disabled selected hidden>Дата создания</option>
            <option value="" class="filters__date-options">Дата 1</option>
            <option value="" class="filters__date-options">Дата 2</option>
            <option value="" class="filters__date-options">Дата 3</option>
        </select>
    </div>
</template>

<style>
.filters {
    width: 1192px;
    display: flex;
    justify-content: space-between;
}

.filters__date {
    margin-left: 1rem;
    cursor: pointer;
    display: flex;
    padding: 15px 150px 15px 15px;
    text-align: left;
    box-sizing: border-box;
    border: 1px solid rgb(var(--v-theme-border-color));
    border-radius: 8px;
}

.filters__date-options {
    background-color: rgb(var(--v-theme-white));
}

@media (min-width: 1024px) {
    .header__info {
        text-align: left;
    }
}
</style>
