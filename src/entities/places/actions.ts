import { instance } from "@/shared/api/instance";
import { URL_PLACES } from "@/shared/api/links";

import type { CommitInterface, Context, Place } from "@/shared/api/types";

export const placesActions = {
  async loadPlacesList({ commit }: CommitInterface) {
    const places = await instance.get(URL_PLACES)
    commit("SET_PLACES_LIST", places.data);
  },

  addPlace(context: Context, payload: Place) {
    context.commit("UPDATE_PLACE", payload);
  },
}