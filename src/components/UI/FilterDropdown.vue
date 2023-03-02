<script lang="ts">
interface InputRadioEvent extends Event {
  target: HTMLInputElement;
  event: Event;
}

export default {
  data() {
    return {
    };
  },
  methods: {
    handleAuthor(event: InputRadioEvent) {
      const data = event.target.title;

      this.$store.dispatch("addAuthor", data);
      this.$store.dispatch('changePage', 1);

      return this.$store.dispatch("loadItems");
    },
    handlePlace(event: InputRadioEvent) {
      const data = event.target.title;

      this.$store.dispatch("addPlace", data);
      this.$store.dispatch('changePage', 1);

      return this.$store.dispatch("loadItems");
    }
  },
  mounted() {
    const dropdownAuthor = document.getElementById('Автор') as HTMLDetailsElement;
    const dropdownPlace = document.getElementById('Место') as HTMLDetailsElement;

    document.onclick = () => {
        dropdownAuthor.open = false;
        dropdownPlace.open = false;
    };

    dropdownAuthor.onclick = () => {
      dropdownAuthor.open = false || true;
    };
  },
  computed: {
    isDisabled() {
      return !this.disabled
      ? 'dropdown__radios'
      : 'dropdown__radios--disabled';
    },
    disabledTitle() {
        return !this.disabled
        ? 'dropdown__input'
        : 'dropdown__input--disabled'
    }
  },
  props: {
    disabled: Boolean,
    data: Object,
    dropdownTitle: String,
  },
};
</script>

<template>
  <details 
    class="dropdown" 
    :id="dropdownTitle"
  >
    <summary
      class="dropdown__radios"
      :class="isDisabled"
    >
      <input
        class="dropdown__input"
        :class="disabledTitle"
        type="radio"
        :name="dropdownTitle"
        :title="!disabled ? dropdownTitle : 'Выключено'"
        id="default"
        @change="
          dropdownTitle === 'Автор'
            ? handleAuthor($event as InputRadioEvent)
            : handlePlace($event as InputRadioEvent)
        "
        checked
      />
      <input
        class="dropdown__input"
        :class="disabledTitle"
        v-for="items in data"
        type="radio"
        :name="dropdownTitle"
        :id="items.id + dropdownTitle"
        :key="items.id"
        @change="
          dropdownTitle === 'Автор'
            ? handleAuthor($event as InputRadioEvent)
            : handlePlace($event as InputRadioEvent)
        "
        :title="dropdownTitle === 'Автор' ? items.author : items.place"
      />
    </summary>
    <ul class="dropdown__list">
      <li
        v-for="items in data"
        class="dropdown__list-item"
        :key="items.id"
      >
        <label :for="items.id + dropdownTitle" class="dropdown__label">
          {{ dropdownTitle === "Автор" ? items.author : items.place }}
        </label>
      </li>
    </ul>
  </details>
</template>

<style>
.dropdown {
  position: relative;
}

.dropdown[open] {
  z-index: 1;
}

.dropdown__radios {
  cursor: pointer;
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgb(var(--v-theme-primary-300));
  list-style: none;
}

.dropdown__radios--disabled {
  border: 1px solid rgb(var(--v-theme-primary-100));
  color: rgb(var(--v-theme-primary-100));
  cursor: default;
  pointer-events: none;
}

.dropdown__label {
  padding: 8px 0 8px 0;
  cursor: pointer;
}

.dropdown[open] .dropdown__radios {
  border-radius: 10px 10px 1px 1px;
  border: 1px solid;
  border-bottom: 1px solid rgb(var(--v-theme-primary-300));
}

.dropdown__radios::-webkit-details-marker {
  display: none;
}

.dropdown[open] .dropdown__radios:before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
}

.dropdown__radios:after {
  content: "";
  float: right;
  margin-top: 5px;
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  right: 15px;
  border-bottom: 1px solid;
  border-left: 1px solid;
  transform: rotate(-45deg) translate(0%, 0%);
  transform-origin: center center;
  transition: transform ease-in-out 100ms;
}

.dropdown__radios:focus {
  outline: none;
}

.dropdown[open] .dropdown__radios:after {
  transform: rotate(45deg) translate(50%, 0%);
}

.dropdown__list {
  background: rgb(var(--v-theme-primary-25));
  border-radius: 0 0 10px 10px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  padding: 1rem;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid;
  max-height: 200px;
  overflow-y: auto;
  border-top: none;
}

.dropdown__list-item {
  padding: 5px;
}

.dropdown__list-item:first-child {
  padding-top: 0;
}

.dropdown__list-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

/* FAKE SELECT */

.dropdown__radios.radios {
  counter-reset: radios;
}

.dropdown__radios.radios:before {
  content: var(--selection);
}

.dropdown__input[type="radio"] {
  counter-increment: radios;
  appearance: none;
  display: none;
}

.dropdown__input[type="radio"]:checked {
  display: inline;
  --display: block;
}

.dropdown__input[type="radio"]:after {
  content: attr(title);
  display: inline;
}

.dropdown__input--disabled {
  color: rgb(var(--v-theme-primary-100));
}

.dropdown__list.list {
  counter-reset: labels;
}

.dropdown__list::-webkit-scrollbar {
  width: 15px;
}

.dropdown__list::-webkit-scrollbar-thumb {
  background-color: #777777;
  border-radius: 20px;
  border: 4px solid transparent;
  background-clip: content-box;
}

.dropdown__list::-webkit-scrollbar-thumb:hover {
  background-color: #5f5f5f;
  border-radius: 20px;
  border: 4px solid transparent;
  background-clip: content-box;
}

.dropdown__list::-webkit-scrollbar-thumb:hover {
  background-color: #5f5f5f;
  border-radius: 20px;
  border: 4px solid transparent;
  background-clip: content-box;
}

.dropdown__list::-webkit-scrollbar-thumb:hover {
  background-color: #5f5f5f;
}
</style>
