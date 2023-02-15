import { URL_GALLERY } from "@/constants/links";
import type { AddNewImage, GalleryState, Context, RootState } from "@/interfaces/store";
import { makeFuncWithDelay } from "@/utils/makeFuncWithDelay";
import axios from "axios";

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
              `${URL_GALLERY}?${titleFilter}${authorFilter}${placeFilter}_page=${rootState.filters.pages}&_limit=${pageLimit}`
            );
        makeFuncWithDelay(() => {
          commit("SET_ITEMS", gallery.data);
          rootState.filters.pages = 1;
          state.spinner = false;
        }, 1000)
        }
        catch (error) {
          throw error;
        }
    },
    async addItems({ state }: {state: GalleryState}) {
      try {
        await axios.post(URL_GALLERY, state.addNewImage);
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