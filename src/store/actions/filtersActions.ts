import axios from "axios";
const URL_AUTHORS = "http://localhost:4000/authors-data";
const URL_PLACES = "http://localhost:5000/places-data";

const filtersActions = {
    loadAuthorsList({ commit }) {
      axios
        .get(URL_AUTHORS)
        .then((response) => response.data)
        .then((dataForFilters) => {
          commit("SET_AUTHORS_LIST", dataForFilters);
        });
    },
    loadPlacesList({ commit }) {
      axios
        .get(URL_PLACES)
        .then((response) => response.data)
        .then((dataForFilters) => {
          commit("SET_PLACES_LIST", dataForFilters);
        });
    },
    addImageTitle(context, payload) {
      context.commit("UPDATE_IMAGE_TITLE", payload);
    },
    addStartDate(context, payload) {
      context.commit("UPDATE_START_DATE", payload);
    },
    addEndDate(context, payload) {
      context.commit("UPDATE_END_DATE", payload);
    },
    changePage(context, payload) {
      context.commit("UPDATE_PAGE", payload);
    },
}

export default filtersActions;