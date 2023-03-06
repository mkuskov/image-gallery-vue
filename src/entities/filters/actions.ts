import { instance } from "@/shared/api/instance";
import { URL_PLACES, URL_AUTHORS } from "@/shared/constants/links";

import type { Context, CommitInterface } from "@/shared/api/types";

const filtersActions = {
    async loadAuthorsList({ commit }: CommitInterface) {
      const authors = await instance
        .get(URL_AUTHORS)
        commit("SET_AUTHORS_LIST", authors.data);
    },

    async loadPlacesList({ commit }: CommitInterface) {
      const places = await instance.get(URL_PLACES)
      commit("SET_PLACES_LIST", places.data);
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