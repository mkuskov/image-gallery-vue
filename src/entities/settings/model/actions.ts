import type { Context } from "@/shared/api/types";

const settingsActions = {
  settingFilterTitle(context: Context, payload: boolean) {
    context.commit("SET_FILTER_TITLE_SETTING", payload);
  },
  settingFilterAuthor(context: Context, payload: boolean) {
    context.commit("SET_FILTER_AUTHOR_SETTING", payload);
  },
  settingFilterPlace(context: Context, payload: boolean) {
    context.commit("SET_FILTER_PLACE_SETTING", payload);
  },
  settingFilterDate(context: Context, payload: boolean) {
    context.commit("SET_FILTER_DATE_SETTING", payload);
  },
  setLimitPage(context: Context, payload: number) {
    context.commit("SET_LIMIT_ELEMENTS", payload);
  },
  settingPagination(context: Context, payload: boolean) {
    context.commit("SET_PAGINATION_SETTING", payload);
  },
};

export default settingsActions;