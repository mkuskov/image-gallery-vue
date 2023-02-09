import axios from "axios";
const URL = "http://localhost:3000/gallery-data";

const galleryActions = {
    async loadItems({ commit, state }) {
      state.spinner = true;

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
        setTimeout(() => {
          commit("SET_ITEMS", gallery.data);
          state.pages = 1;
          state.spinner = false;
        }, 500);
        }
        catch (error) {
          throw error;
        }
    },
    async addItems({ commit, state }) {
      try {
        const addImage = await axios
        .post(URL, state.addNewImage);
        commit("SET_ITEMS", addImage);
      }
      catch (error) {
        throw error;
      }
    },
    newItem(context, payload) {
      context.commit("ADD_NEW_IMAGE", payload);
    },
    changeModalStatus(context, payload) {
      context.commit("SET_MODAL", payload);
    },
    loadingStatus(context, payload) {
      context.commit("SET_LOADING", payload);
    },
    currentImage(context, payload) {
      context.commit("CURRENT_IMAGE", payload);
    },
    addNewImage(context, payload) {
      context.commit("ADD_NEW_IMAGE", payload);
    },
}

export default galleryActions;