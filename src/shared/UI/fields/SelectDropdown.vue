<script lang="ts">
import { getFilteredPaginationLength } from '@/shared/constants/methods';
import { firstPage } from '@/shared/constants/pagination';

// interface InputRadioEvent extends Event {
//   target: HTMLInputElement;
//   event: Event;
// }

export default {
  props: {
    disabled: Boolean,
    data: Object,
    dropdownTitle: String,
  },
  data() {
    return {
      visible: false,
      title: this.dropdownTitle
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option: string) {
      this.title = option;
      
      this.dropdownTitle === "Автор"
      ? this.$store.dispatch("addAuthor", option)
      : this.$store.dispatch("addPlace", option);

      this.$store.dispatch("changePage", firstPage);
      if (option !== "Все") {
        this.$store.dispatch("updateLength",
          getFilteredPaginationLength(
            this.$store.state.gallery.galleryData.length,
            this.$store.state.settings.limitElements
          ));

        return this.$store.dispatch("loadItems");
      }
      this.$store.dispatch("galleryJSON");

      return this.$store.dispatch("loadItems");
    }
  },
  computed: {
    isDisabled() {
      if (this.disabled) {
        return "dropdown-selector--disabled";
      } else if (this.visible) {
        return "dropdown-selector--visible"
      }
      return "dropdown-selector"
    },
  },
};
</script>

<template>
  <div
    class="dropdown"
    :data-value="title"
    :data-list="data"
  >
    <div
      :class="isDisabled"
      @click="toggle()"
    >
      <div class="dropdown-selector__label">
        <span>{{ title }}</span>
      </div>
      <div
        class="dropdown-selector__arrow"
        :class="{ expanded: visible }"
      />
      <div :class="{ hidden: !visible, visible }">
        <ul class="dropdown-selector__list">
          <li
            class="dropdown-selector__list-item"
            :class="{ current: item.name === title }"
            v-for="item in data"
            @click="select(item.name)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dropdown {
  .dropdown-selector--visible {
    cursor: pointer;
    border: 1px solid rgb(var(--v-theme-primary-900));
    position: relative;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    .dropdown-selector__list {
      min-height: 20px;
      max-height: 250px;
      width: 100%;
      list-style-type: none;
      font-size: 16px;
      outline: 1px solid rgb(var(--v-theme-primary-900));
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      position: absolute;
      z-index: 1;
      background: rgb(var(--v-theme-primary-25));
    }

    .dropdown-selector__arrow {
      position: absolute;
      right: 10px;
      top: 40%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid #888;
      transform: rotateZ(0deg);
      transition: 0.2s;
    }

    .expanded {
      transform: rotateZ(90deg);
    }

    .dropdown-selector__label {
      padding: 16px;
      color: rgb(var(--v-theme-primary-900));
    }
  }

  .dropdown-selector--disabled {
    border: 1px solid rgb(var(--v-theme-primary-100));
    color: rgb(var(--v-theme-primary-100));
    cursor: default;
    border-radius: 10px;
    padding: 16px;
    pointer-events: none;
  }

  .dropdown-selector {
    cursor: pointer;
    border: 1px solid rgb(var(--v-theme-primary-300));
    border-radius: 10px;
    position: relative;

    .dropdown-selector__arrow {
      position: absolute;
      right: 10px;
      top: 40%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid #888;
      transform: rotateZ(0deg);
      transition: 0.2s;
    }

    .expanded {
      transform: rotateZ(90deg);
    }

    .dropdown-selector__label {
      display: block;
      padding: 16px;
      font-size: 16px;
      color: rgb(var(--v-theme-primary-900));
    }
  }

  .dropdown-selector__list {
    overflow: auto;
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    position: absolute;
    z-index: 1;
    background: rgb(var(--v-theme-primary-25));
  }

  .dropdown-selector__list::-webkit-scrollbar {
    width: 15px;
  }

  .dropdown-selector__list::-webkit-scrollbar-thumb {
    background-color: #777777;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  .dropdown-selector__list::-webkit-scrollbar-thumb:hover {
    background-color: #5f5f5f;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  .dropdown-selector__list::-webkit-scrollbar-thumb:hover {
    background-color: #5f5f5f;
  }

  .dropdown-selector__list-item {
    padding: 12px 16px 12px 16px;
    color: rgb(var(--v-theme-primary-900));

    &:hover {
      color: rgb(var(--v-theme-primary-100));
      background: rgb(var(--v-theme-primary-900));
    }
  }

  .hidden {
    visibility: hidden;
  }

  .visible {
    visibility: visible;
  }
}
</style>
