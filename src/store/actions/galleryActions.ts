import type { AddNewImage, GalleryState, Context, RootState } from "@/components/interfaces/store";
import axios from "axios";
const URL = "http://localhost:3000/gallery-data";

import type { Commit } from 'vuex';

const galleryActions = {
    async loadItems({ commit, state, rootState }: { commit: Commit, state: GalleryState, rootState: RootState }) {
      state.spinner = true;

        try {
          const titleFilter =
            rootState.filters.filterByTitle ? `name=${rootState.filters.filterByTitle}&` : "";
          const authorFilter =
            rootState.authors.author ? `author=${rootState.authors.author}&` : "";
          const placeFilter =
            rootState.places.place ? `place=${rootState.places.place}&` : "";

          const pageLimit = '5';
          const gallery = await axios
            .get(
              `${URL}?${titleFilter}${authorFilter}${placeFilter}_page=${rootState.filters.pages}&_limit=${pageLimit}`
            );
        setTimeout(() => {
          commit("SET_ITEMS", gallery.data);
          rootState.filters.pages = 1;
          state.spinner = false;
        }, 500);
        }
        catch (error) {
          throw error;
        }
    },
    async addItems({ state }: {state: GalleryState}) {
      try {
        await axios.post(URL, state.addNewImage);
      }
      catch (error) {
        throw error;
      }
    },
    newItem(context: Context, payload: AddNewImage) {
      context.commit("ADD_NEW_IMAGE", payload);
    },
    changeModalStatus(context: Context, payload: boolean) {
      context.commit("SET_MODAL", payload);
    },
    loadingStatus(context: Context, payload: boolean) {
      context.commit("SET_LOADING", payload);
    },
    currentImage(context: Context, payload: string) {
      context.commit("CURRENT_IMAGE", payload);
    },
    addNewImage(context: Context, payload: AddNewImage) {
      context.commit("ADD_NEW_IMAGE", payload);
    },
}

export default galleryActions;