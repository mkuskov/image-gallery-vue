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
      dateToSearch: "",
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
  computed: {
    isOpenedOrDisabled() {
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
    :data-value="dateToSearch"
  >
    <div
      :class="isOpenedOrDisabled"
      @click="toggle()"
    >
      <div class="dropdown-selector__label">
        <span>Дата</span>
      </div>
      <div
        class="dropdown-selector__arrow"
        :class="{ expanded: visible }"
      />
      <div :class="{ hidden: !visible, visible }">
        <ul class="dropdown-selector__date-list">
          <li class="dropdown-selector__date-list-item">
            <input
              for="date"
              type="date"
              class="dropdown-selector__date-input"
              v-model="startDate"
              @change="
                $store.dispatch('addStartDate', new Date(startDate).getTime())
              "
            />
            <input
              for="date"
              type="date"
              class="dropdown-date__date-input"
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
.dropdown {
  .dropdown-selector--disabled {
    border: 1px solid rgb(var(--v-theme-primary-100));
    color: rgb(var(--v-theme-primary-100));
    cursor: default;
    padding: 16px;
    pointer-events: none;
    border-radius: 10px;
  }

  .dropdown-selector--visible {
    .dropdown-selector__date-list {
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

  .dropdown-selector__date-list {
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

  .dropdown-selector__date-list::-webkit-scrollbar {
    width: 15px;
  }

  .dropdown-selector__date-list::-webkit-scrollbar-thumb {
    background-color: #777777;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  .dropdown-selector__date-list::-webkit-scrollbar-thumb:hover {
    background-color: #5f5f5f;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  .dropdown-selector__date-list::-webkit-scrollbar-thumb:hover {
    background-color: #5f5f5f;
  }

  .dropdown-selector__date-list-item {
    padding: 12px 16px 12px 16px;
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
