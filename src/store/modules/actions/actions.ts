import axios from "axios";
const URL = "http://localhost:3000/gallery-data";

const galleryActions = {
    async loadItems({ commit, state }) {
      try {
        const titleFilter =
          state.filterByTitle !== "" ? `name=${state.filterByTitle}&` : "";
        const authorFilter =
          state.filterByAuthor !== "" ? `author=${state.filterByAuthor}&` : "";
        const placeFilter =
          state.filterByPlace !== "" ? `place=${state.filterByPlace}&` : "";

        const limitElements = '5';
        const gallery = await axios
          .get(
            `${URL}?${titleFilter}${authorFilter}${placeFilter}_page=${state.pages}&_limit=${limitElements}`
          );

        commit("SET_ITEMS", gallery.data);
        state.pages = 1;
      }
      catch (error) {
        throw error;
      }
    },
    async addItems({ commit, state }) {
      try {
        const addImage = await axios
        .post('http://localhost:3000/gallery-data', state.addNewImage);
        commit("SET_ITEMS", addImage);
      }
      catch (error) {
        throw error;
      }
    },
    newItem(context, payload) {
      let newItem = context.state.showModal;
      newItem = payload;
      context.commit("ADD_NEW_IMAGE", newItem);
    },
    changeModalStatus(context, payload) {
      let modal = context.state.showModal;
      modal = payload;
      context.commit("SET_MODAL", modal);
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
    currentImage(context, payload) {
      let image = context.state.filterByTitle;
      image = payload;
      context.commit("CURRENT_IMAGE", image);
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
    addNewImage(context, payload) {
      let add = context.state.addNewImage;
      add = payload;
      context.commit("ADD_NEW_IMAGE", add);
    },
}

export default galleryActions;