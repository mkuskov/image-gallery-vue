import { URL_GALLERY } from "@/constants/links";
import type { AddNewImage, GalleryState, Context, LoadItemsInterface, Params } from "@/interfaces/store";
import { makeFuncWithDelay } from "@/utils/makeFuncWithDelay";
import axios from "axios";

const galleryActions = {
    async loadItems({ commit, state, rootState }: LoadItemsInterface) {
      state.spinner = true;

        try {
          const params: Params = {
            _limit: '5',
            _page: rootState.filters.pages,
            name: rootState.filters.filterByTitle,
            author: rootState.authors.author,
            place: rootState.places.place,
          }

          const gallery = await axios.get( URL_GALLERY, { params } );

          makeFuncWithDelay(() => {
            commit("SET_ITEMS", gallery.data);
            rootState.filters.pages = 1;
            state.spinner = false;
          }, 1000)
        }
        catch (error: any) {
          console.log(error.message);
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