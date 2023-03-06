import type { GalleryState } from "@/shared/api/types";

const settingsMutations = {
    SET_FILTER_TITLE_SETTING(state: GalleryState, payload: boolean) {
        state.isTitleFilterActive = payload;
    },
    SET_FILTER_AUTHOR_SETTING(state: GalleryState, payload: boolean) {
        state.isAuthorFilterActive = payload;
    },
    SET_FILTER_PLACE_SETTING(state: GalleryState, payload: boolean) {
        state.isPlaceFilterActive = payload;
    },
    SET_FILTER_DATE_SETTING(state: GalleryState, payload: boolean) {
        state.isDateFilterActive = payload;
    },
}

export default settingsMutations;