import type { Context } from "@/interfaces/store";

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
}

export default settingsActions;