import type { Place } from "@/shared/api/types";

export const placesMutation = {
  UPDATE_PLACE(state: Place, payload: string) {
    state.place = payload;
  },
};
  