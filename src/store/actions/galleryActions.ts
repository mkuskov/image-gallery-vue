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
      let newItem = context.state.showModal;
      newItem = payload;
      context.commit("ADD_NEW_IMAGE", newItem);
    },
    changeModalStatus(context, payload) {
      let modal = context.state.showModal;
      modal = payload;
      context.commit("SET_MODAL", modal);
    },
    loadingStatus(context, payload) {
      let loading = context.state.addNewImage;
      loading = payload;
      context.commit("SET_LOADING", loading);
    },
    currentImage(context, payload) {
      let image = context.state.filterByTitle;
      image = payload;
      context.commit("CURRENT_IMAGE", image);
    },
    addNewImage(context, payload) {
      let add = context.state.addNewImage;
      add = payload;
      context.commit("ADD_NEW_IMAGE", add);
    },
}

export default galleryActions;