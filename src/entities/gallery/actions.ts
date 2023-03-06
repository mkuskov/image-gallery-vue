import type { AddNewImage, Context, LoadItemsInterface, Params } from "@/shared/api/types";

import { URL_GALLERY } from "@/shared/api/links";

import { instance } from "@/shared/api/instance";
import { makeFuncWithDelay } from "@/shared/api/methods";
import { urlParamsDTO } from "@/shared/api/methods";
import { getPaginationLength } from "@/shared/api/methods";

const galleryActions = {
    async loadItems({ commit, state, rootState }: LoadItemsInterface) {
      state.spinner = true;

        try {
          const params: Params = {
            _limit: rootState.settings.limitElements,
            _page: rootState.filters.page,
            name: urlParamsDTO(rootState.filters.filterByTitle),
            author: urlParamsDTO(rootState.authors.author),
            place: urlParamsDTO(rootState.places.place),
          }


          const gallery = await instance.get( URL_GALLERY, { params } );
          commit("SET_ITEMS", gallery.data);

          makeFuncWithDelay(() => {
            return state.spinner = false;
          }, 1000)
        }
        catch (error: any) {
          console.log(error.message);
        }
    },

    async galleryJSON({ commit, rootState }: LoadItemsInterface, payload = {} as AddNewImage) {
      const {
        callback,
      } = payload;

      try {
        const galleryJSON = await instance.get(URL_GALLERY);
        commit("SET_ALL_GALLERY", galleryJSON.data);
        commit('UPDATE_LENGTH', getPaginationLength(rootState.gallery.galleryJSON.length, rootState.settings.limitElements));

        if (callback) {
          callback();
        }
      }
      catch (error: any) {
        console.log(error.message);
      }
    },

    async addItems({ commit }: LoadItemsInterface, payload: AddNewImage) {
      const {
          callback,
          ...requestData
      } = payload;

      try {
        await instance.post(URL_GALLERY, requestData);

        callback();
      }
      catch (error) {
        throw error;
      }
    },

    newItem(context: Context, payload: AddNewImage) {
      context.commit("ADD_NEW_IMAGE", payload);
    },

    changeAddImageModalStatus(context: Context, payload: boolean) {
      context.commit("SET_ADD_IMAGE_MODAL", payload);
    },

    changeSettingsModalStatus(context: Context, payload: boolean) {
      context.commit("SET_SETTINGS_MODAL", payload);
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