import type { SettingsState } from "@/shared/api/types";

const settingsMutations = {
  SET_FILTER_TITLE_SETTING(state: SettingsState, payload: boolean) {
    state.isTitleFilterActive = payload;
  },
  SET_FILTER_AUTHOR_SETTING(state: SettingsState, payload: boolean) {
    state.isAuthorFilterActive = payload;
  },
  SET_FILTER_PLACE_SETTING(state: SettingsState, payload: boolean) {
    state.isPlaceFilterActive = payload;
  },
  SET_FILTER_DATE_SETTING(state: SettingsState, payload: boolean) {
    state.isDateFilterActive = payload;
  },
  SET_LIMIT_ELEMENTS(state: SettingsState, payload: number) {
    state.limitElements = payload;
  },
  SET_PAGINATION_SETTING(state: SettingsState, payload: boolean) {
    state.isPaginationOff = payload;
  },
};

export default settingsMutations;