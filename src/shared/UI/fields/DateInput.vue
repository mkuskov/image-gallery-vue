<script lang="ts">

export default {
  props: {
    disabled: Boolean,
    data: Object,
    dropdownTitle: String,
  },
  data() {
    return {
      visible: false,
      title: this.dropdownTitle,
      startDate: "2015-08-04",
      endDate: "2015-08-12",
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    dateToSearch() {
      return this.$store.state.filters.startDate === "" ? "Дата" : `${this.startDate} — ${this.endDate}`
    }
  },
  computed: {
    isOpenedOrDisabled() {
      if (this.disabled) {
        return "dropdown-date-selector--disabled";
      } else if (this.visible) {
        return "dropdown-date-selector--visible"
      }
      return "dropdown-date-selector"
    },
  },
};
</script>

<template>
  <div
    class="dropdown-date"
    :data-value="dateToSearch"
  >
    <div
      :class="isOpenedOrDisabled"
    >
      <div
        class="dropdown-date-selector__label"
        @click="toggle()"
      >
        <span>{{ dateToSearch() }}</span>
      </div>
      <div
        class="dropdown-date-selector__arrow"
        :class="{ expanded: visible }"
      />
      <div :class="{ hidden: !visible, visible }">
        <ul class="dropdown-date-selector__list">
          <li class="dropdown-date-selector__list-item">
            <input
              for="date"
              type="date"
              class="dropdown-date-selector__input"
              v-model="startDate"
              @change="
                $store.dispatch('addStartDate', new Date(startDate).getTime())
              "
            />
            <input
              for="date"
              type="date"
              class="dropdown-date-selector__input"
              v-model="endDate"
              @change="
              $store.dispatch('addEndDate', new Date(endDate).getTime());
              "
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dropdown-date {
  .dropdown-date-selector--disabled {
    border: 1px solid rgb(var(--v-theme-primary-100));
    color: rgb(var(--v-theme-primary-100));
    cursor: default;
    padding: 16px;
    pointer-events: none;
    border-radius: 10px;
  }

  .dropdown-date-selector--visible {
    cursor: pointer;
    border: 1px solid rgb(var(--v-theme-primary-900));
    position: relative;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
    .dropdown-date-selector__arrow {
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

    .dropdown-date-selector__list {
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

    .expanded {
      transform: rotateZ(90deg);
    }

    .dropdown-date-selector__label {
      padding: 16px;
    }

    .dropdown-date-selector__list-item {
      display: flex;
      justify-content: space-between;
    }

    .dropdown-date-selector__input {
      width: 100%;
      border-radius: 5px;
      padding: 5px;
      margin: 10px;
      background-color: rgb(var(--v-theme-primary-100));
    }
  }

  .dropdown-date-selector {
    cursor: pointer;
    border: 1px solid rgb(var(--v-theme-primary-300));
    border-radius: 10px;
    position: relative;

    .dropdown-date-selector__arrow {
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

    .dropdown-date-selector__label {
      display: block;
      padding: 16px;
    }
  }

  .dropdown-date-selector__list {
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

  .dropdown-date-selector__list::-webkit-scrollbar {
    width: 15px;
  }

  .dropdown-date-selector__list::-webkit-scrollbar-thumb {
    background-color: #777777;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  .dropdown-date-selector__list::-webkit-scrollbar-thumb:hover {
    background-color: #5f5f5f;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  .dropdown-date-selector__list::-webkit-scrollbar-thumb:hover {
    background-color: #5f5f5f;
  }

  .dropdown-date-selector__list-item {
    color: rgb(var(--v-theme-primary-900));

    &:hover {
      border-radius: 8px;
      color: rgb(var(--v-theme-primary-100));
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
