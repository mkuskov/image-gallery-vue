import { createStore } from "vuex";
import axios from "axios";
import _ from "lodash";

const URL = "http://localhost:3000/gallery-data";

export default createStore({
  state: {
    galleryData: [],
    dataForFilters: [],
    filterByTitle: "",
    filterByAuthor: "",
    filterByPlace: "",
    startDate: "",
    endDate: "",
    filterByDate: "",
    pages: "1",
  },
  getters: {
    filterByDate: function (state) {
      return `${state.startDate} ${
        state.endDate !== "" ? " — " : state.endDate
      } ${state.endDate}`;
    },
    items: (state) => {
      return state.galleryData;
    },
    removeSameValues: function (state) {
      const newArr = JSON.parse(JSON.stringify(state.dataForFilters)).map(
        (item: any) => {
          return {
            id: item.id,
            author: item.author,
            place: item.place,
          };
        }
      );
      const noSameValues = _.uniqBy(newArr, function (item: any) {
        return item.author, item.place;
      });
      return noSameValues;
    },
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.galleryData = items;
    },
    SET_DATA_FILTERS(state, items) {
      state.dataForFilters = items;
    },
    UPDATE_IMAGE_TITLE(state, payload) {
      state.filterByTitle = payload;
    },
    UPDATE_AUTHOR(state, payload) {
      state.filterByAuthor = payload;
    },
    UPDATE_PLACE(state, payload) {
      state.filterByPlace = payload;
    },
    UPDATE_START_DATE(state, payload) {
      state.startDate = payload;
    },
    UPDATE_END_DATE(state, payload) {
      state.endDate = payload;
    },
    UPDATE_PAGE(state, payload) {
      state.pages = payload;
    },
  },
  actions: {
    loadItems({ commit, state }) {
      const titleFilter =
        state.filterByTitle !== "" ? `name=${state.filterByTitle}&` : "";
      const authorFilter =
        state.filterByAuthor !== "" ? `author=${state.filterByAuthor}&` : "";
      const placeFilter =
        state.filterByPlace !== "" ? `place=${state.filterByPlace}&` : "";
      axios
        .get(
          `${URL}?${titleFilter}${authorFilter}${placeFilter}_page=${state.pages}&_limit=4`
        )
        .then((response) => response.data)
        .then((galleryData) => {
          commit("SET_ITEMS", galleryData);
        });
    },
    loadItemsForFilters({ commit }) {
      axios
        .get(URL)
        .then((response) => response.data)
        .then((dataForFilters) => {
          commit("SET_DATA_FILTERS", dataForFilters);
        });
    },
    addImageTitle(context, payload) {
      let title = context.state.filterByTitle;
      title = payload;
      context.commit("UPDATE_IMAGE_TITLE", title);
    },
    addAuthor(context, payload) {
      let author = context.state.filterByAuthor;
      author = payload;
      context.commit("UPDATE_AUTHOR", author);
    },
    addPlace(context, payload) {
      let place = context.state.filterByPlace;
      place = payload;
      context.commit("UPDATE_PLACE", place);
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
  },
});
