import { URL_GALLERY } from "@/constants/links";
import type { AddNewImage, GalleryState, Context, LoadItemsInterface, Params, RootState } from "@/interfaces/store";
import { instance } from "@/utils/postman";
import { makeFuncWithDelay } from "@/utils/makeFuncWithDelay";
import axios from "axios";

const galleryActions = {
    async loadItems({ commit, state, rootState }: LoadItemsInterface) {
      state.spinner = true;

        try {
          const params: Params = {
            _limit: '5',
            _page: rootState.filters.page,
            name: rootState.filters.filterByTitle === "" ? null : rootState.filters.filterByTitle,
            author: rootState.authors.author === "Все" ? null : rootState.authors.author,
            place: rootState.places.place === "Все" ? null : rootState.places.place,
          }

          const gallery = await instance.get( URL_GALLERY, { params } );
          commit("SET_ITEMS", gallery.data);
          
          makeFuncWithDelay(() => {
            state.spinner = false;
          }, 1000)
        }
        catch (error: any) {
          console.log(error.message);
        }
    },
    async addItems({ state, rootState }: { state: GalleryState, rootState: RootState }) {
      try {
        await axios.post(URL_GALLERY, state.addNewImage);
        rootState.filters.page = 3;
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
    image(context: Context, payload: string) {
      context.commit("SET_IMAGE", payload);
    },
    addNewImage(context: Context, payload: AddNewImage) {
      context.commit("ADD_NEW_IMAGE", payload);
    },
}

export default galleryActions;