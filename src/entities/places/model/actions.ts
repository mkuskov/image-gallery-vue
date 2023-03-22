import { instance } from "@/shared/api/instance";

import type { CommitInterface, Context, Place } from "@/shared/api/types";

export const placesActions = {
  async loadPlacesList({ commit }: CommitInterface) {
    const places = await instance
    .get("/locations");
    commit("SET_PLACES_LIST", places.data);
  },

  addPlace(context: Context, payload: Place) {
    context.commit("UPDATE_PLACE", payload);
  },
};