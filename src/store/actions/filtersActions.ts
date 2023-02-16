import axios from "axios";
;
import type { Context, CommitInterface } from "@/interfaces/store";
import { URL_AUTHORS, URL_PLACES } from "@/constants/links";

const filtersActions = {
    loadAuthorsList({ commit }: CommitInterface) {
      axios
        .get(URL_AUTHORS)
        .then((response) => response.data)
        .then((dataForFilters) => {
          commit("SET_AUTHORS_LIST", dataForFilters);
        });
    },
    loadPlacesList({ commit }: CommitInterface) {
      axios
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
}

export default filtersActions;