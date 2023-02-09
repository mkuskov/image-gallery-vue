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
      let title = context.state.filterByTitle;
      title = payload;
      context.commit("UPDATE_IMAGE_TITLE", title);
    },
    addStartDate(context, payload) {
      let date = context.state.startDate;
      date = payload;
      context.commit("UPDATE_START_DATE", date);
    },
    addEndDate(context, payload) {
    let date = context.state.endDate;
      date = payload;
      context.commit("UPDATE_END_DATE", date);
    },
    changePage(context, payload) {
      let page = context.state.pages;
      page = payload;
      context.commit("UPDATE_PAGE", page);
    },
}

export default filtersActions;