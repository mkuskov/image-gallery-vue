<script lang="ts">
export default {
  data() {
    return {
      startDate: "2015-08-04",
      endDate: "2015-08-12",
      dateToSearch: "",
    };
  },
  computed: {
    isDisabled() {
      return !this.disabled ? 'dropdown-date__radio' : 'dropdown-date__radio--disabled';
    },
    disabledTitle() {
      return !this.disabled ? 'dropdown-date__input' : 'dropdown-date__input--disabled'
    }
  },
  props: {
    disabled: Boolean
  }
};
</script>

<template>
  <details class="dropdown-date" id="dropdown-date">
    <summary class="dropdown-date__radio" :class="isDisabled">
      <input
        type="radio"
        class="dropdown-date__input"
        :class="disabledTitle"
        name="dateField"
        id="default"
        :title="
          $store.state.filters.startDate === '' ? 'Дата' : `${startDate} — ${endDate}`
        "
        checked
      />
    </summary>
    <ul class="dropdown-date__list">
      <li class="dropdown-date__list-item">
        <input
          for="date"
          type="date"
          class="dropdown-date__list-input"
          v-model="startDate"
          @change="
            $store.dispatch('addStartDate', new Date(startDate).getTime())
          "
        />
        <input
          for="date"
          type="date"
          class="dropdown-date__list-input"
          v-model="endDate"
          @change="$store.dispatch('addEndDate', new Date(endDate).getTime())"
        />
      </li>
    </ul>
  </details>
</template>

<style>
.dropdown-date {
  position: relative;
}

.dropdown-date[open] {
  z-index: 1;
}

.dropdown-date__radio {
  cursor: pointer;
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgb(var(--v-theme-primary-300));
  list-style: none;
}

.dropdown-date__radio--disabled {
  border: 1px solid rgb(var(--v-theme-primary-100));
  color: rgb(var(--v-theme-primary-100));
  cursor: default;
  pointer-events: none;
}

.dropdown-date[open] .dropdown-date__radio {
  border-radius: 10px 10px 0 0;
  border: 1px solid;
  border-bottom: none;
}

.dropdown-date__radio::-webkit-details-marker {
  display: none;
}

.dropdown-date[open] .dropdown-date__radio:before {
  content: "";
  display: block;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
}

.dropdown-date__radio:after {
  content: "";
  float: right;
  margin-top: 5px;
  width: 0.5rem;
  height: 0.5rem;
  border-bottom: 1px solid;
  border-left: 1px solid;
  transform: rotate(-45deg) translate(0%, 0%);
  transform-origin: center center;
  transition: transform ease-in-out 100ms;
}

.dropdown-date__radio:focus {
  outline: none;
}

.dropdown-date[open] .dropdown-date__radio:after {
  transform: rotate(45deg) translate(50%, 0%);
}

.dropdown-date__list {
  background: rgb(var(--v-theme-primary-25));
  border-radius: 0 0 10px 10px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  border: 1px solid;
  border-top: none;
}

.dropdown-date__list-item {
  display: inline;
  border-bottom: none;
}

.dropdown-date__list-input {
  padding: 5px;
  margin: 5% 0 0 5%;
  width: 90%;
  border-radius: 5px;
  background-color: rgb(var(--v-theme-primary-100));
}

.dropdown-date__list-item:first-child {
  padding-top: 0;
}

.dropdown-date__list-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

/* FAKE SELECT */

.dropdown-date__radio.radios {
  counter-reset: radios;
}

.dropdown-date__radio.radios:before {
  content: var(--selection);
}

.dropdown-date__input[type="radio"] {
  appearance: none;
  display: none;
}

.dropdown-date__input[type="radio"]:checked {
  display: inline;
  --display: block;
}

.dropdown-date__input[type="radio"]:after {
  content: attr(title);
  display: inline;
}

.dropdown-date__input--disabled {
  color: rgb(var(--v-theme-primary-100));
}

.dropdown-date__list.list {
  border-top: transparent;
  counter-reset: labels;
}

.dropdown-date__label {
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
}

.dropdown-date__list::-webkit-scrollbar {
  width: 15px;
}

.dropdown-date__list::-webkit-scrollbar-thumb {
  background-color: #777777;
  border-radius: 20px;
  border: 4px solid transparent;
  background-clip: content-box;
}

.dropdown-date__list::-webkit-scrollbar-thumb:hover {
  background-color: #5f5f5f;
  border-radius: 20px;
  border: 4px solid transparent;
  background-clip: content-box;
}

.dropdown-date__list::-webkit-scrollbar-thumb:hover {
  background-color: #5f5f5f;
}

@media screen and (min-width: 0) {
  .dropdown-date__list {
    height: 150px;
  }
}

@media screen and (min-width: 660px) {
  .dropdown-date__list {
    height: 115px;
  }
}
</style>
