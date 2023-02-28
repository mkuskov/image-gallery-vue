import { instance } from "@/utils/postman";
import { URL_PLACES, URL_AUTHORS } from "@/constants/links";

import type { Context, CommitInterface } from "@/interfaces/store";

const filtersActions = {
    loadAuthorsList({ commit }: CommitInterface) {
      instance
        .get(URL_AUTHORS)
        .then((response) => response.data)
        .then((dataForFilters) => {
          commit("SET_AUTHORS_LIST", dataForFilters);
        });
    },

    loadPlacesList({ commit }: CommitInterface) {
      instance
        .get(URL_PLACES)
        .then((response) => response.data)
        .then((dataForFilters) => {
          commit("SET_PLACES_LIST", dataForFilters);
        });
    },

    addImageTitle(context: Context, payload: string) {
      context.commit("UPDATE_IMAGE_TITLE", payload);
    },

    addStartDate(context: Context, payload: string) {
      context.commit("UPDATE_START_DATE", payload);
    },

    addEndDate(context: Context, payload: string) {
      context.commit("UPDATE_END_DATE", payload);
    },

    changePage(context: Context, payload: string) {
      context.commit("UPDATE_PAGE", payload);
    },

    updateLength(context: Context, payload: string) {
      context.commit("UPDATE_LENGTH", payload);
    },
}

export default filtersActions;